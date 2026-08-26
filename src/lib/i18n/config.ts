export const locales = ["tr", "en", "de", "fr"] as const;

export type Locale = (typeof locales)[number];

/** Turkish is the default; `en` is only the *type* source for dictionaries. */
export const defaultLocale: Locale = "tr";

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  fr: "Français",
};

/** Short label for the compact switcher. */
export const localeShort: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
  fr: "FR",
};

/** BCP-47 tags for <html lang> and hreflang. */
export const localeTags: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Swap the locale segment of a pathname, keeping the rest of the route. */
export function localizePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }
  return `/${segments.join("/")}`;
}
