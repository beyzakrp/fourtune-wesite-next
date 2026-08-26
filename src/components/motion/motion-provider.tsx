"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { springMove } from "@/lib/motion/springs";

/**
 * `reducedMotion="user"` makes every transform animation in the tree respect
 * the OS setting automatically — opacity and colour still animate, travel and
 * overshoot do not. That is the accessible equivalent, not silence.
 *
 * The default transition is the critically damped spring, so anything that
 * does not name one still lands with the house feel.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={springMove}>
      {children}
    </MotionConfig>
  );
}
