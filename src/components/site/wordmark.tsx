"use client";

import { motion } from "motion/react";
import { springMove } from "@/lib/motion/springs";

/**
 * The four-pointed sparkle from the brand board, as inline SVG so it inherits
 * `currentColor`. Use this for decorative marks; the lockup below is the logo.
 */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 75 76"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M37.501 0C37.5256 20.3659 53.7842 36.9285 74.0322 37.4414L75 37.4541V37.5459C54.3046 37.5459 37.5258 54.3104 37.501 75H37.499C37.4742 54.3104 20.6954 37.5459 0 37.5459V37.4541C20.6952 37.4541 37.474 20.6894 37.499 0H37.501Z" />
    </svg>
  );
}

/**
 * The Fourtune wordmark, from the supplied vector artwork, swapped by theme
 * rather than recoloured with a filter.
 *
 * The supplied ivory cut is a *knockout* — all eight fills are ivory, so it
 * drops the Fortune Pink half of the lockup. That is right over photography,
 * but wrong as the primary mark on the dark theme, which is the default: the
 * brand would lose its colour on most of the site. So the dark cut here is the
 * ink artwork with only the navy fills lifted to ivory, leaving the pink
 * exactly where the brand board puts it.
 *
 * `<img>` rather than next/image on purpose: these are fixed-size vector marks
 * where raster optimisation has nothing to do, and inlining the artwork would
 * duplicate ~7KB of path data into every page's HTML.
 */
export function Wordmark({
  name,
  className = "h-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <motion.span
      className="inline-flex items-center"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={springMove}
    >
      {/* The `wm-` classes let context override theme. The header sits on a
          dark band whatever the theme is, so it forces the light cut there —
          without them, light theme would print an ink wordmark on navy. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo/new-logo-black-pink.svg"
        alt={name}
        width={500}
        height={250}
        className={`wm-ink ${className} w-auto dark:hidden`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo/new-logo-black-pink.svg"
        alt=""
        aria-hidden
        width={500}
        height={250}
        className={`wm-light ${className} hidden w-auto dark:block`}
      />
    </motion.span>
  );
}
