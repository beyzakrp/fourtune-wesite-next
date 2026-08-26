"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type GlassSlide = {
  id: string;
  /** Colour ground under the photo — also the fallback if it never loads. */
  palette: [string, string, string];
  mark: string;
  photo?: string;
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
};

const AUTOPLAY_MS = 3800;

/**
 * The spring the reference uses for the card swap. Motion's `stiffness` /
 * `damping` are the same quantities react-spring calls `tension` / `friction`
 * at mass 1, so the values carry over unchanged.
 */
const CROSSFADE = { type: "spring", stiffness: 210, damping: 24 } as const;

/**
 * A small glass card that cycles itself.
 *
 * The swap is a cross-fade with a little travel and scale rather than a slide,
 * because the card is a floating chip over other content — sliding would imply
 * a filmstrip that does not exist. Autoplay pauses on hover and on focus
 * within, and stops entirely under reduced motion, where the dots remain the
 * only way to move.
 */
export function GlassCarousel({
  slides,
  label,
  gated = false,
}: {
  slides: GlassSlide[];
  label: string;
  /** Hold autoplay until the caller says the card is on screen. */
  gated?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const go = useCallback(
    (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (gated || paused || reduced) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [gated, paused, reduced, slides.length]);

  const slide = slides[index];

  return (
    <div
      className="flex w-64 flex-col gap-3"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={slide.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={reduced ? { duration: 0.15 } : CROSSFADE}
            className="glass-panel flex items-center gap-3 rounded-[var(--radius-lg)] p-3"
          >
            <span
              aria-hidden
              className="palette-ground relative size-14 shrink-0 overflow-hidden rounded-[var(--radius-sm)]"
              style={
                {
                  "--c1": `${slide.palette[0]}cc`,
                  "--c2": `${slide.palette[1]}aa`,
                  "--c3": slide.palette[2],
                } as CSSProperties
              }
            >
              {slide.photo ? (
                <Image
                  src={slide.photo}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              ) : null}
              <span className="palette-mesh absolute inset-0 mix-blend-multiply" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.7rem] font-medium uppercase tracking-wide">
                {slide.eyebrow}
              </span>
              <span className="mt-0.5 block text-[0.7rem] uppercase opacity-80">
                {slide.title}
              </span>
              <a
                href={slide.href}
                className="mt-1.5 inline-block text-[0.65rem] underline underline-offset-2"
              >
                {slide.cta} →
              </a>
            </span>
          </motion.article>
        </AnimatePresence>
      </div>

      <CarouselDots
        count={slides.length}
        active={index}
        onSelect={go}
        tone="light"
        label={label}
      />
    </div>
  );
}

/**
 * Progress dots. The active one is a filled bar rather than a differently
 * coloured circle, so position is carried by shape and not by colour alone.
 */
export function CarouselDots({
  count,
  active,
  onSelect,
  tone = "dark",
  label,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  tone?: "dark" | "light";
  label: string;
}) {
  return (
    <div className="flex items-center gap-2" role="tablist" aria-label={label}>
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-current={isActive ? "true" : undefined}
            aria-label={`${label} ${i + 1}`}
            onClick={() => onSelect(i)}
            className="p-1.5"
          >
            <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isActive ? "w-5" : "w-1.5"
              } ${
                tone === "light"
                  ? isActive
                    ? "bg-white"
                    : "bg-[rgb(255_255_255/0.4)]"
                  : isActive
                    ? "bg-fg"
                    : "bg-[var(--ghost)]"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
