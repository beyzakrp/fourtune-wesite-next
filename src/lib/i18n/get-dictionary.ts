import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

/**
 * Dynamic imports keep the three unused dictionaries out of every server
 * bundle. Client components receive only the slice they need, as props.
 */
const dictionaries = {
  tr: () => import("./dictionaries/tr").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export type { Dictionary };
