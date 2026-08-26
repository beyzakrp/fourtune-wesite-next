"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { springFollow } from "@/lib/motion/springs";

type ParallaxProps = {
  children: ReactNode;
  /** Total travel across the whole pass through the viewport, in px. */
  distance?: number;
  className?: string;
  /** Scale from 1 at the centre of the pass. Leave at 0 for none. */
  zoom?: number;
};

/**
 * Depth cue driven by scroll position. Kept subtle — parallax that outruns the
 * content it sits behind reads as a bug, not as depth.
 */
export function Parallax({
  children,
  distance = 60,
  className,
  zoom = 0,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Spring the progress, not the output: the smoothing then survives a
  // direction change mid-scroll instead of snapping.
  const eased = useSpring(scrollYProgress, springFollow);
  const y = useTransform(eased, [0, 1], [distance, -distance]);
  const scale = useTransform(eased, [0, 0.5, 1], [1, 1 + zoom, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="motion-travel will-change-transform"
        style={{ y, scale: zoom ? scale : undefined }}
      >
        {children}
      </motion.div>
    </div>
  );
}
