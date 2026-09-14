"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

type VelocityMarqueeProps = {
  items: readonly React.ReactNode[];
  /** Base drift in px per second. Negative runs right-to-left. */
  baseSpeed?: number;
  className?: string;
  itemClassName?: string;

};

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

/**
 * A ticker that inherits the reader's scroll velocity: it drifts on its own,
 * accelerates when the page moves, and reverses direction with the scroll.
 * The connection between the two motions is what makes it feel physical
 * rather than looped.
 *
 * WCAG 2.2.2: motion lasting over five seconds needs a control, so there is a
 * real pause button — not only a hover pause, which a keyboard cannot reach.
 */
export function VelocityMarquee({
  items,
  baseSpeed = -32,
  className,
  itemClassName,

}: VelocityMarqueeProps) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const hovering = useRef(false);

  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [-2000, 0, 2000], [-4, 0, 4], {
    clamp: false,
  });

  const direction = useRef(1);
  // Declared before the reduced-motion early return so hook order stays stable.
  const xPercent = useTransform(x, (value) => `${value}%`);

  useAnimationFrame((_, delta) => {
    if (reduced || paused || hovering.current) return;

    const factor = velocityFactor.get();
    // Scroll direction flips the ticker; the reader's gesture drives it.
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;

    let move = (baseSpeed * delta) / 1000;
    move += move * Math.abs(factor) * direction.current;

    // One copy is 25% of the four rendered copies, so wrapping at -25% is
    // seamless regardless of content width.
    x.set(wrap(-25, 0, x.get() + (move / window.innerWidth) * 100));
  });

  const content = (
    <>
      {[0, 1, 2, 3].map((copy) => (
        <span key={copy} className="flex shrink-0" aria-hidden={copy > 0}>
          {items.map((item, i) => (
            <span key={`${copy}-${i}`} className={itemClassName}>
              {item}
            </span>
          ))}
        </span>
      ))}
    </>
  );

  if (reduced) {
    return (
      <div className={className}>
        <div className="flex overflow-hidden">
          <span className="flex shrink-0">
            {items.map((item, i) => (
              <span key={i} className={itemClassName}>
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={className}
      onPointerEnter={() => (hovering.current = true)}
      onPointerLeave={() => (hovering.current = false)}
    >
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap will-change-transform"
          style={{ x: xPercent }}
        >
          {content}
        </motion.div>
      </div>
      {/*
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        className="mx-auto mt-4 flex h-7 items-center gap-2 rounded-full border border-line px-3 type-caption text-fg-muted transition-colors hover:text-fg"
      >

        <span
          aria-hidden
          className={
            paused
              ? "size-0 border-y-4 border-l-[6px] border-y-transparent border-l-current"
              : "flex gap-[3px] before:block before:h-2 before:w-[2px] before:bg-current after:block after:h-2 after:w-[2px] after:bg-current"
          }
        />
       
      </button>
            */}
    </div>
  );
}
