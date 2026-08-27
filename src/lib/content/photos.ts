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

export const projectPhotos: Record<ProjectId, Photo> = {
  aurora: {
    src: `${CDN}/photo-1510074377623-8cf13fb86c08`,
    alt: "Turned off flat screen monitors on top of beige desks",
  },
  atlas: {
    src: `${CDN}/photo-1498075702571-ecb018f3752d`,
    alt: "Person lettering on tracing paper using a mechanical pencil",
  },
  vela: {
    src: `${CDN}/photo-1556761175-4b46a572b786`,
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
