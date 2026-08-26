"use client";

import { motion } from "motion/react";
import { scrollTo } from "@/components/motion/smooth-scroll";
import { springSnappy } from "@/lib/motion/springs";

export function BackToTop({ label }: { label: string }) {
  return (
    <motion.button
      type="button"
      onClick={() => scrollTo(0)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={springSnappy}
      className="group inline-flex items-center gap-2 type-caption text-fg-secondary transition-colors hover:text-fg"
    >
      <span
        aria-hidden
        className="flex size-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-line-strong"
      >
        <svg viewBox="0 0 12 12" className="size-3" fill="none">
          <path
            d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label}
    </motion.button>
  );
}
