import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";

import { locales, localeTags, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { navItems, site } from "@/lib/site";
import { MotionProvider } from "@/components/motion/motion-provider";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { AdaptiveRoot } from "@/components/motion/adaptive-root";
import { IntroLoader } from "@/components/site/intro-loader";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ThemeScript } from "@/components/site/theme-script";

/**
 * The real brand faces, self-hosted from `src/fonts/`.
 *
 * Only the weights used by the interface are loaded: 400 for body copy, 500
 * for the type scale, 600 for the wordmark and loader, plus Elms Sans 700 for
 * the navigation hover state. Instrument Serif Italic remains available as an
 * optional display accent.
 *
 * `next/font/local` hashes and preloads these at build time and generates the
 * @font-face rules, so there is no FOUT handling to write by hand.
 */
const metropolis = localFont({
  src: [
    { path: "../../fonts/Metropolis-Regular.otf", weight: "400", style: "normal" },
    { path: "../../fonts/Metropolis-Medium.otf", weight: "500", style: "normal" },
    { path: "../../fonts/Metropolis-SemiBold.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-metropolis",
  display: "swap",
});

const elmsSans = localFont({
  src: [
    { path: "../../fonts/ElmsSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/ElmsSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/ElmsSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../fonts/ElmsSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-elms",
  display: "swap",
});

const instrumentSerif = localFont({
  src: "../../fonts/InstrumentSerif-Italic.ttf",
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(`https://${site.domain}`),
    title: {
      default: dict.meta.title,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [localeTags[l], `/${l}`]),
      ),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: site.name,
      locale: localeTags[locale].replace("-", "_"),
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);

  const nav = navItems.map((item) => ({
    href: `/${typedLocale}${item.href}`,
    label: dict.nav[item.key],
  }));

  return (
    <html
      lang={localeTags[typedLocale]}
      data-theme="dark"
      /* next/font variables live on <html> so the theme font stacks in
         globals.css can reference them from :root. */
      className={`${metropolis.variable} ${elmsSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0b0f22"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f7f4ef"
        />
      </head>
      <body className="antialiased">
        <MotionProvider>
          <AdaptiveRoot />
          <IntroLoader />
          <SmoothScroll />
          <ScrollProgress label={dict.a11y.scrollProgress} />

          <Header
            locale={typedLocale}
            copy={{
              nav,
              startProject: dict.nav.startProject,
              menu: dict.nav.menu,
              close: dict.nav.close,
              language: dict.nav.language,
              theme: dict.a11y.toggleTheme,
              skipToContent: dict.nav.skipToContent,
            }}
          />

          {/* The page inset is what turns every band's radius into a card edge
              against the white page — it is the frame, not padding. */}
          <main
            id="main"
            className="w-full overflow-x-clip p-[var(--page-inset)]"
          >
            {children}
          </main>

          {/* The footer is a band like any other, so it needs the same page
              inset — but not a second top gap, which `mt-3` already provides. */}
          <div className="p-[var(--page-inset)] pt-0">
            <Footer locale={typedLocale} dict={dict} />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
