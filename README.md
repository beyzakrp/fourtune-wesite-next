# Fourtune — agency site

Next.js 16 (App Router) · React 19 · Tailwind v4 · Motion 13 · Lenis.
Four locales (`tr` default, `en`, `de`, `fr`), five page types, no external
asset dependencies except the promo film.

```bash
npm run dev
```

> On this machine `node`/`npm` on PATH are broken. Use the working runtime:
> `$env:Path = "C:\node-runtime-24.19.0;" + $env:Path`

---

## Design direction

Apple's interface language applied to the Fourtune brand board, which means
two rules that override "make it look nice":

**Motion is behaviour, not decoration.** Everything a reader can touch runs on
springs, because a spring can be interrupted and re-targeted mid-flight while a
fixed-duration animation cannot. Apple's two designer-facing spring parameters
map onto Motion's API as `damping → 1 − bounce` and `response →
visualDuration`; the presets live in `src/lib/motion/springs.ts` and default to
critically damped. Bounce is spent only where a gesture carried momentum.

**Gestures track 1:1, then hand off velocity.** The bottom sheet and the
testimonial carousel project where a flick was *going* using the exponential
decay model from Apple's *Designing Fluid Interfaces* sample
(`src/lib/motion/physics.ts`), snap to the target nearest that projection, and
pass the release velocity into the spring — so there is no seam between drag
and animation.

Reduced motion is handled as a *non-vestibular equivalent*, not silence:
`MotionConfig reducedMotion="user"` drops transforms and keeps cross-fades,
Lenis never initialises, and the hero film loads but does not play.

## Brand

Palette, type and logo come from the brand board; the five brand colours are
declared once in `globals.css` (`--brand-*`) and mirrored in
`src/lib/site.ts` as `brandColors`. Everything else derives from them.

Fortune Pink is a **graphic** colour — white on it measures 3.85:1, under AA for
body text. So there are three accent tokens rather than one:

| Token | Use | Contrast |
| --- | --- | --- |
| `--accent` | large type, marks, graphics | 4.9:1 on dark ground |
| `--accent-ink` | small text and links | 5.4:1 light / 6.6:1 dark |
| `--accent-solid` | filled buttons | 4.6:1 with white |

Logo artwork is in `public/brand/`, shipped in two colour cuts (ink and ivory)
and swapped by theme rather than recoloured with a filter.

### Fonts — action needed

The brand faces are **Metropolis** (display) and **Elms Sans** (body). Neither
is licensed for web use yet, so **Poppins** and **Hanken Grotesk** stand in —
same geometric and humanist skeletons. Both real families are named first in
the stack (`globals.css`, the `@theme` block), so licensing them is one
`@font-face` away with no other change.

## The promo film — action needed

`public/media/promo-hero.mp4` runs as its own band directly under the hero
(`src/components/sections/showreel.tsx`).

It is **not** a hero background, deliberately: the film carries its own
typography, and laying a headline over it would put two pieces of type in the
same pixels. So nothing sits on top of it — no scrim, no colour wash, no
overlaid copy. It gets a frame that settles into place on scroll, fades in once
decodable, plays only while on screen, and offers both a pause and a sound
control (autoplay must start muted, so unmuting is the reader's call). Under
reduced motion it loads but never plays.

Two things about the file itself:

1. **It is 32.7 MB.** Far too heavy for something that autoplays near the top of
   the home page. It needs a compression pass before launch — this is the
   single biggest performance item on the site.
2. It arrived as `.mov` (QuickTime container) holding H.264 + AAC. The streams
   are web-standard and the `moov` atom is at the front, so it was renamed to
   `.mp4` and plays everywhere — but a real remux is cleaner.

With ffmpeg installed:

```bash
ffmpeg -i public/media/promo-hero.mp4 -an -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart public/media/promo-hero-opt.mp4
```

```bash
ffmpeg -i public/media/promo-hero.mp4 -an -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 public/media/promo-hero.webm
```

Drop `-an` from those commands if the film's audio is worth keeping — the
showreel has a sound control, unlike a muted hero background. Add a poster
frame too, so the frame is not blank before the first bytes land:

```bash
ffmpeg -i public/media/promo-hero.mp4 -ss 00:00:01 -frames:v 1 -q:v 3 public/media/promo-hero-poster.jpg
```

## Content

All copy is **placeholder**, written to the right length and rhythm for the
layout — swap the words, keep the shapes. It lives in
`src/lib/i18n/dictionaries/`. Project case studies are split: language-neutral
structure (year, palette, disciplines) in `src/lib/content/projects.ts`, prose
in the dictionaries under `projects[id]`.

Case study covers are **generated** from each project's three brand-derived
colour stops rather than photographed, so the site carries no image payload and
nothing can 404.

## Contact form

`src/app/api/contact/route.ts` validates and acknowledges enquiries but
**does not deliver them** — there is no mail provider wired up. Enquiries
currently exist only in the server log. Add Resend/Postmark/SES where marked
before launch.

## Things worth knowing

- **English is the type source** for the dictionaries (`Dictionary = typeof en`)
  but Turkish is the default locale. Easy to misread.
- The lockup tagline `AGENCY • FIND THE TUNE OF BRANDING` stays English in every
  locale — brand rule, not an oversight.
- The root layout lives at `src/app/[locale]/layout.tsx`; there is no
  `src/app/layout.tsx`. `[locale]/[...rest]/page.tsx` exists so unknown paths
  render the styled 404 inside that layout instead of Next's bare one.
- Next 16 renamed middleware to **proxy** (`src/proxy.ts`) and wants the export
  named `proxy` — a default export builds fine but is rejected at dev runtime.
- Fonts are declared in a plain `@theme` block, not `@theme inline`: the inline
  form resolves values into utilities without emitting the custom properties,
  and one undefined `var()` invalidates a whole `font-family` declaration.
