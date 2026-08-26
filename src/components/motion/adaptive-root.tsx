"use client";

import { useEffect } from "react";

const FONT_BASE = 16;
const BASE_W = 1920;
const COEF = 0.6666;

/**
 * Recomputes the root font-size from the viewport so the whole rem-based
 * layout stays proportional instead of stranding a fixed-width container in
 * the middle of a very large display.
 *
 * **Only the scale-*up* half is applied site-wide, on purpose.** The reference
 * implementation also scales down through a ladder of `vw` media queries whose
 * last step is authored against a 360px mobile base — at 640px that step puts
 * the root at ~28px. That is correct for a design whose mobile values were
 * drawn at 360; this project's values are authored at a 16px base at *every*
 * breakpoint, so importing that ladder would render mobile roughly 1.8× too
 * large. Below 1920 the type scale's own `clamp()` values already handle the
 * reduction, so the root is left alone.
 *
 * Pass `ladder` to opt a subtree of the site into the full down-scaling
 * behaviour for comparison (used by the lab page).
 */
export function AdaptiveRoot({ ladder = false }: { ladder?: boolean }) {
  useEffect(() => {
    const root = document.documentElement;

    const apply = () => {
      const width = window.innerWidth;

      if (ladder && width <= BASE_W) {
        // The reference ladder, verbatim: 16 * 100 / baseWidth, in vw.
        const vw =
          width <= 640 ? 4.444444
          : width <= 1024 ? 1.5625
          : width <= 1440 ? 1.111111
          : 0.833333;
        root.style.fontSize = `${vw}vw`;
        return;
      }

      const reduction = ((BASE_W - width) / BASE_W) * 100 * COEF;
      const size = FONT_BASE - (FONT_BASE * reduction) / 100;
      if (size > FONT_BASE) root.style.fontSize = `${size}px`;
      else root.style.removeProperty("font-size");
    };

    apply();
    window.addEventListener("resize", apply, { passive: true });
    return () => {
      window.removeEventListener("resize", apply);
      root.style.removeProperty("font-size");
    };
  }, [ladder]);

  return null;
}
