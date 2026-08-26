"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { springMove } from "@/lib/motion/springs";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Maximum rotation on either axis, in degrees. */
  max?: number;
  /** Adds a specular highlight that follows the pointer. */
  sheen?: boolean;
};

/**
 * A card that tilts toward the pointer, with a highlight that tracks the same
 * position — the two together read as one lit surface rather than two effects.
 */
export function TiltCard({
  children,
  className,
  max = 6,
  sheen = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, springMove);
  const rotateY = useSpring(rawRotateY, springMove);

  const glowX = useSpring(useMotionValue(50), springMove);
  const glowY = useSpring(useMotionValue(50), springMove);
  const glowOpacity = useSpring(useMotionValue(0), springMove);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, rgb(255 255 255 / 0.14), transparent 60%)`;

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType === "touch") return;
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rawRotateY.set((px - 0.5) * max * 2);
    rawRotateX.set((0.5 - py) * max * 2);
    glowX.set(px * 100);
    glowY.set(py * 100);
    glowOpacity.set(1);
  }

  function reset() {
    rawRotateX.set(0);
    rawRotateY.set(0);
    glowOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {sheen ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ backgroundImage: glow, opacity: glowOpacity }}
        />
      ) : null}
    </motion.div>
  );
}
