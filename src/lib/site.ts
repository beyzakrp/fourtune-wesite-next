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
  domain: "fourtuneagency.com",
  email: "hello@fourtuneagency.com",
  phone: "+90 540 520 52 01",
  address: {
    street: " İstanbul/TR",
    city: "İstanbul",
    country: "TR",
  },
  social: [
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: "/images/instagram.svg",
    },
    { label: "TikTok", href: "https://tiktok.com", icon: "/images/tiktok.svg" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "/images/linkedin.svg",
    },
    { label: "Behance", href: "https://behance.net", icon: "/images/behance.svg" },
    {
      label: "Pinterest",
      href: "https://pinterest.com",
      icon: "/images/pinterest.svg",
    },
    { label: "Dribbble", href: "https://dribbble.com", icon: "/images/dribble.svg" },
    { label: "Figma", href: "https://figma.com", icon: "/images/figma.svg" },
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
  { key: "home", href: "" },
  { key: "studio", href: "/studio" },
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
  { key: "contact", href: "/contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
