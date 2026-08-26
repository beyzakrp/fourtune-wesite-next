"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { springFollow } from "@/lib/motion/springs";

/** Reading progress for long pages. Lives under the translucent header. */
export function ScrollProgress({ label }: { label: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springFollow);

  return (
    <motion.div
      role="progressbar"
      aria-label={label}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
