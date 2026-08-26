"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";

let instance: Lenis | null = null;

/** Scroll helper that works whether or not Lenis is currently driving. */
export function scrollTo(target: number | string, offset = 0) {
  if (instance) {
    instance.scrollTo(target, { offset });
    return;
  }
  const node =
    typeof target === "string" ? document.querySelector(target) : null;
  const top =
    typeof target === "number"
      ? target
      : node
        ? node.getBoundingClientRect().top + window.scrollY
        : 0;
  window.scrollTo({ top: top + offset, behavior: "smooth" });
}

/**
 * Lenis drives the page scroll so scroll-linked motion reads continuously
 * instead of stepping with the wheel. Under `prefers-reduced-motion` it never
 * initialises — native scroll is the non-vestibular equivalent.
 */
export function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      smoothWheel: true,
      autoRaf: false,
    });
    instance = lenis;

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, [reduced]);

  return null;
}
