import Link from "next/link";
import { defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

/**
 * Rendered outside the locale params, so it falls back to the default locale
 * rather than guessing from a URL that did not match anything.
 */
export default async function NotFound() {
  const dict = await getDictionary(defaultLocale);

  return (
    <section className="container-page flex min-h-[70svh] flex-col justify-center py-24">
      <p className="type-eyebrow text-accent">404</p>
      <h1 className="mt-5 max-w-[16ch] type-h1 text-balance">
        {dict.notFound.title}
      </h1>
      <p className="mt-6 max-w-[46ch] type-lead text-fg-secondary">
        {dict.notFound.body}
      </p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-10 inline-flex h-11 w-fit items-center rounded-full bg-accent px-5 text-[0.9375rem] font-medium text-onaccent transition-colors hover:bg-accent-hover"
      >
        {dict.notFound.action}
      </Link>
    </section>
  );
}
