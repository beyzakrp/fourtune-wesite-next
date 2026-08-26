"use client";

import { motion } from "motion/react";

/**
 * `template.tsx` remounts on every navigation, which gives each route a fresh
 * entrance. The move is deliberately small: a short rise and a materialising
 * blur, so arriving somewhere new is legible without costing the reader time.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.45,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
