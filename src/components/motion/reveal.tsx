"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { springMove, stagger } from "@/lib/motion/springs";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Travel distance in px. Direction comes from the sign. */
  distance?: number;
  axis?: "y" | "x";
  index?: number;
  delay?: number;
  /** How far into the viewport before it fires. */
  amount?: number;
  /** Rendered element, so a reveal can sit inside a list or article. */
  as?: "div" | "li" | "section" | "article" | "figure";
};

/**
 * Scroll-triggered entrance. Travel is small on purpose — the point is to
 * direct attention, not to stage a performance.
 *
 * Under `prefers-reduced-motion` the surrounding `MotionConfig reducedMotion="user"`
 * drops the transform and leaves the opacity cross-fade.
 */
export function Reveal({
  children,
  distance = 22,
  axis = "y",
  index = 0,
  delay = 0,
  amount = 0.2,
  as = "div",
  transition,
  ...rest
}: RevealProps) {
  const hidden = axis === "y" ? { y: distance } : { x: distance };
  const shown = axis === "y" ? { y: 0 } : { x: 0 };
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial={{ opacity: 0, ...hidden }}
      whileInView={{ opacity: 1, ...shown }}
      viewport={{ once: true, amount }}
      transition={{
        ...springMove,
        delay: delay + stagger(index),
        opacity: { duration: 0.5, delay: delay + stagger(index) },
        ...transition,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
