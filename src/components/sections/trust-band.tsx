"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { GhostHeading } from "@/components/motion/ghost-heading";
import { CarouselDots } from "@/components/ui/glass-carousel";
import { Reveal } from "@/components/motion/reveal";
import { springMove } from "@/lib/motion/springs";

export type TrustSlide = {
  id: string;
  palette: [string, string, string];
  mark: string;
  photo?: string;
  name: string;
  role: string;
};

/**
 * The section that carries the site's loudest type.
 *
 * Four words at 8vw, split across two justified rows with one of them inked,
 * sitting *behind* a small rotated card. The card is the focal point precisely
 * because the type around it is too big to read as a sentence — it reads as
 * texture, and the eye lands on the one object with an edge.
 *
 * Changing slide re-fires the word masks and cross-fades the card, so the
 * whole block re-composes rather than swapping text in place.
 */
export function TrustBand({
  label,
  sets,
  badge,
  card,
  slides,
  previousLabel,
  nextLabel,
}: {
  label: string;
  sets: string[][];
  badge: { value: string; label: string };
  card: { index: string; title: string; body: string };
  slides: TrustSlide[];
  previousLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const words = sets[index] as [string, string, string, string];

  const go = (next: number) =>
    setIndex(((next % slides.length) + slides.length) % slides.length);

  return (
    <section className="relative isolate overflow-hidden bg-bg section-x py-16 sm:py-20">
      <div className="relative z-20 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <Reveal
          className="flex size-28 shrink-0 flex-col items-center justify-center rounded-full bg-surface p-4 text-center sm:size-32"
          distance={0}
        >
          <span className="text-2xl font-medium leading-none">{badge.value}</span>
          <span className="mt-1 max-w-[7em] text-[0.6rem] leading-snug text-fg-muted">
            {badge.label}
          </span>
        </Reveal>

        <Reveal
          as="article"
          index={1}
          className="flex max-w-md gap-4 rounded-[var(--radius)] bg-surface p-5 sm:gap-5 sm:p-6"
        >
          <span className="h-fit shrink-0 rounded-[var(--radius-sm)] bg-bg px-4 py-2 text-xl font-medium">
            {card.index}
          </span>
          <div>
            <h2 className="type-h3">{card.title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-fg-muted">{card.body}</p>
          </div>
        </Reveal>
      </div>

      <GhostHeading
        key={index}
        words={words}
        inkIndex={2}
        className="mt-12"
      />

      <div className="relative z-10 mx-auto -mt-4 w-52 sm:absolute sm:left-1/2 sm:top-1/2 sm:mt-0 sm:w-64 sm:-translate-x-1/2 sm:-translate-y-1/2">
        <Reveal distance={60} amount={0.1}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={springMove}
              className="palette-ground relative aspect-[3/4] rotate-6 overflow-hidden rounded-[var(--radius)]"
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
                  sizes="(max-width: 640px) 60vw, 22rem"
                  className="object-cover"
                />
              ) : null}
              <span
                aria-hidden
                className="palette-mesh absolute inset-0 mix-blend-multiply"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-[var(--radius-sm)] bg-[rgb(0_0_0/0.5)] px-3 py-2 text-white backdrop-blur-md">
                <b className="block text-sm font-medium">{slide.name}</b>
                <span className="block text-[0.65rem] opacity-80">{slide.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </Reveal>
      </div>

      <div className="relative z-20 mt-12 flex items-center justify-between sm:mt-24">
        <ArrowButton
          label={previousLabel}
          direction="left"
          onClick={() => go(index - 1)}
        />
        <CarouselDots
          count={slides.length}
          active={index}
          onSelect={go}
          label={label}
        />
        <ArrowButton
          label={nextLabel}
          direction="right"
          solid
          onClick={() => go(index + 1)}
        />
      </div>
    </section>
  );
}

function ArrowButton({
  label,
  direction,
  solid = false,
  onClick,
}: {
  label: string;
  direction: "left" | "right";
  solid?: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={springMove}
      className={`grid size-12 place-items-center rounded-full border transition-colors sm:size-14 ${
        solid
          ? "border-fg bg-fg text-bg hover:bg-band hover:border-band hover:text-band-fg"
          : "border-line text-fg hover:border-fg"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-5 ${direction === "left" ? "-scale-x-100" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </motion.button>
  );
}
