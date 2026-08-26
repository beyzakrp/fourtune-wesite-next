"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Oversized display words laid out as two justified rows, revealed from behind
 * a clipping mask and drifting on opposing X axes as the section passes.
 *
 * The opposing drift is the whole point: the two words in a row pull away from
 * each other, so the block breathes with the scroll instead of sliding as one
 * rigid slab. Amounts are tiny — a few percent — because the type is already
 * enormous and anything larger reads as a glitch.
 *
 * One word is inked and the rest are ghosted, which is what keeps a wall of
 * 8vw type from flattening into noise.
 */
export type GhostHeadingProps = {
  /** Exactly four words: row one is [0,1], row two is [2,3]. */
  words: [string, string, string, string];
  /** Index rendered in full ink rather than ghosted. */
  inkIndex?: number;
  className?: string;
  id?: string;
};

const DRIFT: [number, number][] = [
  [-3, 3],
  [3, -3],
  [-2, 4],
  [4, -3],
];

export function GhostHeading({
  words,
  inkIndex = 2,
  className,
  id,
}: GhostHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <h2
      ref={ref}
      id={id}
      aria-label={words.join(" ")}
      className={`ghost-title pointer-events-none relative z-0 mx-auto max-w-[88rem] select-none font-display font-semibold uppercase ${className ?? ""}`}
    >
      <span aria-hidden>
        {[0, 1].map((row) => (
          <span key={row} className="flex items-baseline justify-between gap-4">
            {[row * 2, row * 2 + 1].map((i) => (
              <GhostWord
                key={`${words[i]}-${i}`}
                word={words[i]}
                ink={i === inkIndex}
                drift={DRIFT[i]}
                progress={scrollYProgress}
                reduced={Boolean(reduced)}
              />
            ))}
          </span>
        ))}
      </span>
    </h2>
  );
}

function GhostWord({
  word,
  ink,
  drift,
  progress,
  reduced,
}: {
  word: string;
  ink: boolean;
  drift: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  const inner = useRef<HTMLSpanElement>(null);
  const x = useTransform(progress, [0, 1], [`${drift[0]}%`, `${drift[1]}%`]);

  /**
   * Re-fire the mask reveal whenever the word itself changes, so a carousel
   * swapping the headline reads as new type arriving rather than a text swap.
   *
   * These are hand-written transitions rather than Motion values, which means
   * `MotionConfig reducedMotion` does not reach them — the preference has to
   * be honoured here explicitly. Reduced motion gets the cross-fade without
   * the travel: type this large sliding a full line height is exactly the
   * vestibular movement the setting exists to remove.
   */
  useEffect(() => {
    const node = inner.current;
    if (!node) return;

    node.style.transition = "none";
    node.style.transform = reduced ? "none" : "translateY(115%)";
    node.style.opacity = "0";
    void node.offsetWidth;

    const ease = "cubic-bezier(0.16,1,0.3,1)";
    node.style.transition = reduced
      ? `opacity 400ms ${ease}`
      : `transform 700ms ${ease}, opacity 700ms ${ease}`;
    if (!reduced) node.style.transform = "translateY(0)";
    node.style.opacity = "1";
  }, [word, reduced]);

  return (
    <motion.span
      style={{ x: reduced ? "0%" : x }}
      className={`inline-block overflow-hidden pb-[0.12em] [margin-bottom:-0.12em] ${
        ink ? "text-fg" : "text-[var(--ghost)]"
      }`}
    >
      <span ref={inner} className="inline-block will-change-transform">
        {word}
      </span>
    </motion.span>
  );
}
