"use client";

import { motion } from "motion/react";
import { springMove } from "@/lib/motion/springs";
import { useIntroReady } from "@/lib/intro";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  /** Fires on mount rather than waiting for the viewport. Use above the fold. */
  immediate?: boolean;
  /**
   * Hold the reveal until the intro curtain lifts. Without this, above-the-fold
   * type plays its entrance behind the loader and is already finished by the
   * time anyone can see it.
   */
  waitForIntro?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "p";
};

/**
 * Word-by-word entrance. The visible spans are `aria-hidden` and the real
 * string is exposed once on the wrapper, so screen readers read a sentence
 * rather than a list of words.
 */
export function SplitWords({
  text,
  className,
  delay = 0,
  step = 0.045,
  immediate = false,
  waitForIntro = false,
  as: Tag = "span",
}: SplitWordsProps) {
  const words = text.split(" ");
  const introReady = useIntroReady();
  const gated = waitForIntro && !introReady;

  const animateProps = immediate
    ? { animate: gated ? ("hidden" as const) : ("shown" as const) }
    : {
        whileInView: "shown" as const,
        viewport: { once: true, amount: 0.5 },
      };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        initial="hidden"
        {...animateProps}
        className="sw-line"
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="sw-word">
            <motion.span
              className="sw-inner"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                shown: { y: "0%", opacity: 1 },
              }}
              transition={{
                ...springMove,
                delay: delay + i * step,
                opacity: { duration: 0.4, delay: delay + i * step },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
