/**
 * Single source of truth for brand-level facts.
 *
 * Brand: Fourtune (numeronym **4tune**). Spelling is "Fourtune", never
 * "Fortune". Colour, type and logo rules come from the brand board; the
 * asset files live in `public/brand/`.
 */
export const site = {
  name: "Fourtune",
  /** The numeronym, used where space is tight. */
  short: "4tune",
  legalName: "Fourtune Agency",
  /** Stays English in every locale — brand rule, not an oversight. */
  tagline: "AGENCY • FIND THE TUNE OF BRANDING",
  domain: "4tune.agency",
  email: "hello@4tune.agency",
  phone: "+90 212 000 00 00",
  address: {
    street: "Bomonti, Silahşör Cd. 42",
    city: "İstanbul",
    country: "TR",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
  media: {
    /* 1920×1080, 32.8s, H.264 + AAC. Still needs a compression pass — see the
       note in README before launch. */
    promoHero: "/media/promo-hero.mp4",
  },
} as const;

/**
 * Brand palette, verbatim from the brand board. The CSS custom properties in
 * `globals.css` are derived from these; keep the two in step.
 */
export const brandColors = {
  fortunePink: "#F52E63",
  softBlush: "#FBE2DC",
  warmIvory: "#F7F4EF",
  midnightInk: "#212C5E",
  fusionBlue: "#0088FF",
} as const;

/**
 * Route paths stay in English across all locales — one canonical URL shape,
 * only the `[locale]` prefix changes. Labels come from the dictionary.
 */
export const navItems = [
  { key: "work", href: "/work" },
  { key: "services", href: "/services" },
  { key: "studio", href: "/studio" },
  { key: "contact", href: "/contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
