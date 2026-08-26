"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/**
 * Depth behind the hero. Three soft fields of colour that lean toward the
 * pointer through springs, so the background reacts to the reader rather than
 * looping at them.
 *
 * Deliberate constraints from the accessibility guidance: the fields stay
 * semi-transparent while they travel, the ambient drift runs at ~0.04 Hz (far
 * from the 0.2 Hz band that provokes discomfort), and under reduced motion the
 * whole thing renders static.
 */
export function Aurora() {
  const reduced = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { damping: 40, stiffness: 90, mass: 1.2 });
  const y = useSpring(pointerY, { damping: 40, stiffness: 90, mass: 1.2 });

  useEffect(() => {
    if (reduced) return;

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      // Normalised to the viewport centre, then scaled down hard — the field
      // should drift, not chase.
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 60);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 40);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [pointerX, pointerY, reduced]);

  /** Ambient drift, one full cycle per ~30s. Off entirely for reduced motion. */
  function drift(duration: number, delay: number) {
    if (reduced) return {};
    return {
      animate: { x: [0, 26, -14, 0], y: [0, -18, 12, 0] },
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    };
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div style={{ x, y }} className="absolute inset-0">
        {/* Each blob is the same recipe with a different colour, so the class
            owns the gradient and only the colour comes in as data. */}
        <motion.span
          {...drift(26, 0)}
          className="aurora-blob absolute left-[8%] top-[12%] size-[42vw] rounded-full opacity-55 blur-[90px] [--blob:var(--accent)]"
        />
        <motion.span
          {...drift(34, -8)}
          className="aurora-blob absolute right-[6%] top-[26%] size-[36vw] rounded-full opacity-45 blur-[100px] [--blob:var(--brand-blue)]"
        />
        <motion.span
          {...drift(30, -16)}
          className="aurora-blob-soft absolute bottom-[4%] left-[38%] size-[34vw] rounded-full opacity-40 blur-[110px] [--blob:var(--brand-blush)]"
        />
      </motion.div>

      {/* Fades the field into the page instead of ending it on a hard edge. */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-[var(--bg)]" />
    </div>
  );
}
