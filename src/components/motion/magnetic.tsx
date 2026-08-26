"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { springFollow } from "@/lib/motion/springs";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** How far the element is allowed to lean toward the pointer, in px. */
  strength?: number;
  /** Pointer distance at which the pull starts, as a multiple of the size. */
  radius?: number;
};

/**
 * The element leans toward the pointer and returns on leave. Both directions
 * run through the same springs, so a pointer that re-enters mid-return is
 * picked up from the current on-screen position — no jump, no wait.
 *
 * Disabled entirely for coarse pointers and reduced motion.
 */
export function Magnetic({
  children,
  className,
  strength = 12,
  radius = 1.6,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  // Independent X and Y springs. One spring on a 2D distance desyncs the axes
  // as soon as their velocities differ.
  const x = useSpring(rawX, springFollow);
  const y = useSpring(rawY, springFollow);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType === "touch") return;
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const centreX = rect.left + rect.width / 2;
    const centreY = rect.top + rect.height / 2;
    const dx = event.clientX - centreX;
    const dy = event.clientY - centreY;

    const reach = Math.max(rect.width, rect.height) * radius;
    const distance = Math.hypot(dx, dy);
    // Falls off with distance so the pull eases in rather than snapping on.
    const falloff = Math.max(0, 1 - distance / reach);

    rawX.set((dx / reach) * strength * falloff * 2);
    rawY.set((dy / reach) * strength * falloff * 2);
  }

  function reset() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className ?? ""}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
