import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  NotFoundContent,
  type NotFoundCopy,
} from "./not-found-content";

/**
 * `not-found` files receive no route params, so the tiny client boundary reads
 * the URL's locale while this Server Component keeps dictionary loading on the
 * server. The default copy is also a stable fallback for unrecognised paths.
 */
export default async function NotFound() {
  const copyEntries = await Promise.all(
    locales.map(async (locale) => {
      const dict = await getDictionary(locale);
      return [
        locale,
        { ...dict.notFound, work: dict.nav.work } satisfies NotFoundCopy,
      ] as const;
    }),
  );
  const copy = Object.fromEntries(copyEntries) as Record<Locale, NotFoundCopy>;

  return <NotFoundContent copy={copy} fallbackLocale={defaultLocale} />;
}
