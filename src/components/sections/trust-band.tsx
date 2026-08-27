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
  backPhoto?: string;
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
          <span
            aria-hidden
            className="relative grid h-14 w-16 place-items-center text-fg sm:h-16 sm:w-[4.5rem]"
          >
            <svg
              viewBox="0 0 80 58"
              className="absolute inset-0 size-full"
              fill="none"
            >
              <defs>
                <marker
                  id="orbit-arrow"
                  viewBox="0 0 7 7"
                  refX="6"
                  refY="3.5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto"
                >
                  <path d="M0 0 7 3.5 0 7Z" fill="currentColor" />
                </marker>
              </defs>
              <text
                x="40"
                y="24"
                fill="currentColor"
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize="24"
                fontWeight="700"
              >
                {badge.value}
              </text>
              <path
                d="M18 28.5C5.5 32 6 40.5 17.5 46c10.5 5 25.5 5.8 37.5 1.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                markerEnd="url(#orbit-arrow)"
              />
              <path
                d="M60.5 28.5c12 3.7 12.5 11.2 2 16.3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mt-1 max-w-[8em] text-[0.6rem] font-medium uppercase leading-snug tracking-[0.08em] text-fg-muted">
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

      <div className="relative z-10 mx-auto -mt-4 w-[19rem] sm:absolute sm:left-1/2 sm:top-1/2 sm:mt-0 sm:w-96 sm:-translate-x-1/2 sm:-translate-y-1/2">
        <Reveal distance={60} amount={0.1}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={springMove}
              className="relative aspect-[1.15/1]"
            >
              <TrustCard
                slide={slide}
                photo={slide.backPhoto ?? slide.photo}
                className="absolute left-0 top-[46%] z-0 w-[64%] -translate-y-1/2 -rotate-[16deg] opacity-90"
              />
              <TrustCard
                slide={slide}
                showCaption
                className="absolute right-0 top-1/2 z-10 w-[64%] -translate-y-1/2 rotate-6 shadow-lg"
              />
            </motion.div>
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

function TrustCard({
  slide,
  photo = slide.photo,
  showCaption = false,
  className,
}: {
  slide: TrustSlide;
  photo?: string;
  showCaption?: boolean;
  className: string;
}) {
  return (
    <figure
      className={`palette-ground aspect-[3/4] overflow-hidden rounded-[var(--radius)] ${className}`}
      style={
        {
          "--c1": `${slide.palette[0]}cc`,
          "--c2": `${slide.palette[1]}aa`,
          "--c3": slide.palette[2],
        } as CSSProperties
      }
    >
      {photo ? (
        <Image
          src={photo}
          alt=""
          fill
          sizes="(max-width: 640px) 58vw, 15rem"
          className="object-cover"
        />
      ) : null}
      {showCaption ? (
        <figcaption className="absolute inset-x-3 bottom-3 rounded-[var(--radius-sm)] bg-[rgb(0_0_0/0.5)] px-3 py-2 text-white backdrop-blur-md">
          <b className="block text-sm font-medium">{slide.name}</b>
          <span className="block text-[0.65rem] opacity-80">{slide.role}</span>
        </figcaption>
      ) : null}
    </figure>
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
