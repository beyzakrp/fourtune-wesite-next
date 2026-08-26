"use client";

import { useEffect, useRef } from "react";

/**
 * Drives the header's scrolled state without re-rendering React.
 *
 * The visual change is entirely CSS — height, offset, tint, shadow — so the
 * only thing JavaScript has to do is flip one attribute. Doing it through a
 * ref means a scroll never enters React's render path at all: no state, no
 * reconciliation, no chance of a layout shift from a re-render.
 *
 * The listener is passive and coalesced into a single animation frame, so a
 * fast scroll costs one DOM write per frame at most, and the write is skipped
 * entirely when the boolean has not actually changed.
 *
 * @param threshold px of scroll before the compact state engages
 */
export function useScrolled<T extends HTMLElement>(threshold = 50) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let previous: boolean | null = null;

    const apply = () => {
      frame = 0;
      const scrolled = window.scrollY > threshold;
      if (scrolled === previous) return;
      previous = scrolled;
      node.dataset.scrolled = String(scrolled);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    // Deep-linked or restored scroll positions must not start expanded.
    apply();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return ref;
}
