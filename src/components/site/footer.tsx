import Link from "next/link";
import { site, navItems } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { BackToTop } from "./back-to-top";
import { Wordmark } from "./wordmark";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { ButtonLink } from "@/components/ui/button";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="band mt-3 section-x py-14 sm:py-16">
      {/* The closing ask lives in the footer rather than in its own section:
          one call to action per page, at the end, where the reader already
          knows what they would be saying yes to. */}
      <div className="flex flex-col gap-8 border-b border-[var(--band-line)] pb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <p className="type-eyebrow text-[rgb(255_255_255/0.7)]">
              {dict.cta.eyebrow}
            </p>
          </Reveal>
          <p
            className="mt-4 text-6xl font-medium uppercase leading-[0.92] tracking-[-0.02em]"
            aria-label={dict.cta.title}
          >
            <span aria-hidden>
              <SplitWords text={dict.cta.title} className="block" />
            </span>
          </p>
        </div>
        <Reveal delay={0.15} distance={20}>
          <ButtonLink href={`/${locale}/contact`} variant="light">
            {dict.cta.action}
          </ButtonLink>
        </Reveal>
      </div>

      <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Link href={`/${locale}`} className="inline-block text-band-fg">
            <Wordmark name={site.name} className="h-8" />
          </Link>
          {/* The lockup tagline stays English in every locale — brand rule. */}
          <p className="mt-4 type-eyebrow text-accent">{site.tagline}</p>
          <p className="mt-4 type-caption text-[rgb(255_255_255/0.55)]">{dict.footer.tagline}</p>
        </div>

        <FooterColumn title={dict.footer.navTitle}>
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={`/${locale}${item.href}`}
                className="type-caption text-[rgb(255_255_255/0.8)] transition-colors hover:text-white"
              >
                {dict.nav[item.key]}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={dict.footer.socialTitle}>
          {site.social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="type-caption text-[rgb(255_255_255/0.8)] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={dict.footer.contactTitle}>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="type-caption text-[rgb(255_255_255/0.8)] transition-colors hover:text-white"
            >
              {site.email}
            </a>
          </li>
          <li className="type-caption text-[rgb(255_255_255/0.55)]">{site.phone}</li>
          <li className="type-caption text-[rgb(255_255_255/0.55)]">
            {site.address.street}
            <br />
            {site.address.city}
          </li>
        </FooterColumn>
      </div>

      <div className="flex flex-col gap-4 border-t border-[var(--band-line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-caption text-[rgb(255_255_255/0.55)]">
          © {year} {site.legalName}. {dict.footer.rights}
        </p>
        <p className="type-caption text-[rgb(255_255_255/0.55)] sm:order-2">
          {dict.footer.colophon}
        </p>
        <div className="sm:order-3">
          <BackToTop label={dict.footer.backToTop} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="type-eyebrow text-[rgb(255_255_255/0.55)]">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}
