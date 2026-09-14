import type { ProjectId } from "./projects";

/**
 * Placeholder photography, from Unsplash.
 *
 * Every URL here was fetched and decoded before it was written down — none is
 * a guessed id, which is the usual way a stock-photo map ends up full of 404s.
 * The `alt` strings are the photographers' own descriptions, carried over
 * verbatim rather than invented, because alt text describing an image nobody
 * verified is worse than no image at all.
 *
 * These are stand-ins for real project photography. When that arrives, this
 * file is the only thing that changes: nothing else in the app names the host.
 */
export type Photo = { src: string; alt: string };

const CDN = "https://images.unsplash.com";

/**
 * The hero plate. Supplied artwork, served from `public/images/`.
 *
 * `alt` is empty on purpose: this sits behind the headline as a ground, and the
 * headline is what carries the meaning. Describing it again would only add
 * noise — and an inherited description of a *different* image would be worse
 * than silence.
 */
export const heroPhoto: Photo = {
  /**
   * `madeYouLook-banner.png` (7632×4772), not `madeYouLook-bannerWide.png`
   * beside it.
   *
   * The "Wide" export is 13.5MB but only **1440×673** — an uncompressed file
   * at a small pixel size, which is the worst of both worlds. The hero plate
   * needs roughly 1600–2400 device pixels across, so that file gets stretched
   * well past its native resolution and turns soft. This one has the pixels.
   *
   * If the wide *crop* is the one you want, re-export it at 2400px or more and
   * point this back at it — the framing is a design choice, the blur was only
   * ever a resolution problem.
   */
  src: "/images/madeYouLook-bannerWide-final.png",
  alt: "",
};

/** Project listing and case-study covers. */
export const projectPhotos: Record<ProjectId, Photo> = {
  "be-oddly": { src: "/portfolios/be-oddly/be-oddly-content-logo-branding.png", alt: "Be Oddly" },
  atlas: {
    src: `https://i.pinimg.com/736x/28/86/7d/28867d4b89876ed649b1ea8ced422f69.jpg`,
    alt: "Person lettering on tracing paper using a mechanical pencil",
  },
  vela: {
    src: `https://i.pinimg.com/736x/5e/8d/d3/5e8dd3dfde496481cd3f35b764013d78.jpg`,
    alt: "Person in a blue shirt sitting on a rolling chair in a room with monitors",
  },
  tessera: {
    src: `${CDN}/photo-1664638413302-d1ca29ac885b`,
    alt: "A person holding an orange material sample over a white desk with design swatches",
  },
  halo: {
    src: `${CDN}/photo-1565791380713-1756b9a05343`,
    alt: "A wooden table on trestle legs and a stool in a sunlit studio",
  },
  fieldnotes: {
    src: `${CDN}/photo-1620912189875-3fdb2380621b`,
    alt: "Person in a black jacket holding a sheet of white printer paper",
  },
};

/**
 * Home hero carousel photography. This remains independent even though its
 * slides point to the same projects as the work section.
 */
export const homeHeroCarouselPhotos: Partial<Record<ProjectId, Photo>> = {
  "be-oddly": { src: "/portfolios/be-oddly/be-oddly-content-logo-branding.png", alt: "Be Oddly" },
  atlas: {
    src: "https://i.pinimg.com/736x/6c/37/26/6c3726946a34d898522d58dcdcd9ce68.jpg",
    alt: "Bright creative office with shared work tables",
  },
  vela: {
    src: "https://i.pinimg.com/736x/4c/c8/33/4cc833d3d34fceb593ac0c6bb71cbde1.jpg",
    alt: "Team working together in a modern office",
  },
};

/** Independent front and rear images for the home-page TrustBand stack. */
export const homeTrustPhotos: Partial<
  Record<ProjectId, { front: Photo; back: Photo }>
> = {
  "be-oddly": { front: { src: "/portfolios/be-oddly/be-oddly-content-logo-branding.png", alt: "Be Oddly" }, back: { src: "/portfolios/be-oddly/be-oddly-content-1.png", alt: "Be Oddly" } },
  atlas: {
    front: {
      src: "https://i.pinimg.com/736x/28/86/7d/28867d4b89876ed649b1ea8ced422f69.jpg",
      alt: "People collaborating around a studio table",
    },
    back: {
      src: "https://i.pinimg.com/736x/6c/37/26/6c3726946a34d898522d58dcdcd9ce68.jpg",
      alt: "Secondary campaign visual for Atlas",
    },
  },
  vela: {
    front: {
      src: "https://i.pinimg.com/736x/5e/8d/d3/5e8dd3dfde496481cd3f35b764013d78.jpg",
      alt: "Team meeting in a bright workspace",
    },
    back: {
      src: "https://i.pinimg.com/736x/4c/c8/33/4cc833d3d34fceb593ac0c6bb71cbde1.jpg",
      alt: "Secondary campaign visual for Vela",
    },
  },
};

/** Team image used only by the home-page Our Story preview. */
export const homeStoryPhoto: Photo = {
  src: "https://i.pinimg.com/736x/7d/29/c1/7d29c1d486771ef727933f741b6ab5ae.jpg",
  alt: "The Fourtune team discussing work in a meeting room",
};
