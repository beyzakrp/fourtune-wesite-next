"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { Sparkle } from "@/components/site/wordmark";
import { isLocale, type Locale } from "@/lib/i18n/config";

export type NotFoundCopy = {
  title: string;
  body: string;
  action: string;
  work: string;
};

export function NotFoundContent({
  copy,
  fallbackLocale,
}: {
  copy: Record<Locale, NotFoundCopy>;
  fallbackLocale: Locale;
}) {
  const pathname = usePathname();
  const localeSegment = pathname.split("/").filter(Boolean)[0];
  const locale = localeSegment && isLocale(localeSegment)
    ? localeSegment
    : fallbackLocale;
  const text = copy[locale];
  const homeHref = `/${locale}`;

  return (
    <section className="not-found-band band relative isolate flex min-h-[calc(100svh-var(--page-inset)*2)] overflow-hidden">
      <div className="not-found-grid absolute inset-0 -z-10" aria-hidden />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-[0.08em] top-1/2 -z-10 -translate-y-1/2 font-display text-[clamp(15rem,42vw,50rem)] font-medium leading-none tracking-[-0.08em] text-white/[0.035]"
      >
        404
      </div>

      <div className="container-page flex w-full items-center pb-16 pt-[calc(var(--header-h)+4rem)] md:pb-20 md:pt-[calc(var(--header-h)+5rem)]">
        <div className="max-w-[48rem]">
          <div className="flex items-center gap-3 text-accent">
            <Sparkle className="size-4" />
            <p className="type-eyebrow">Error 404</p>
          </div>

          <h1 className="mt-7 max-w-[12ch] type-h1 text-balance text-white md:text-[4.75rem]">
            {text.title}
          </h1>
          <p className="mt-7 max-w-[43ch] type-lead text-[rgb(255_255_255/0.68)]">
            {text.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={homeHref} size="lg">
              {text.action}
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={`${homeHref}/work`} variant="light" size="lg">
              {text.work}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-[var(--pad-x)] bottom-7 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.24em] text-white/35"
      >
        <span>Fourtune</span>
        <span className="h-px flex-1 bg-white/10" />
        <span>404404404404404404404</span>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}
