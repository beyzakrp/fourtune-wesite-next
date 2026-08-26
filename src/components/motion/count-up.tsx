"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  /** Digits are animated; any surrounding characters are preserved verbatim. */
  value: string;
  className?: string;
  duration?: number;
};

/**
 * Counts a numeric label up when it scrolls into view. The string may carry a
 * prefix or suffix ("−38%", "×2.1", "0.9s") — only the number moves, and the
 * decimal separator of the source string is kept, so a Turkish "1,4" does not
 * become "1.4" on the way past.
 */
export function CountUp({ value, className, duration = 1.1 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  const match = value.match(/(-?[\d.,]+)/);
  const numeric = match ? match[1] : null;
  const separator = numeric?.includes(",") ? "," : ".";
  const target = numeric ? Number(numeric.replace(",", ".")) : NaN;
  const decimals = numeric ? (numeric.split(separator)[1]?.length ?? 0) : 0;
  const animatable = Boolean(numeric) && !Number.isNaN(target) && !reduced;

  const [animated, setAnimated] = useState<string | null>(null);

  useEffect(() => {
    if (!animatable || !inView || !numeric) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.32, 0.72, 0, 1],
      onUpdate: (latest) => {
        setAnimated(value.replace(numeric, format(latest, decimals, separator)));
      },
    });
    return () => controls.stop();
  }, [animatable, inView, numeric, target, value, decimals, separator, duration]);

  // Derived, not stored: before the animation starts the counter reads zero,
  // and with reduced motion it simply reads the final value.
  const display = !animatable
    ? value
    : (animated ?? value.replace(numeric!, format(0, decimals, separator)));

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

function format(value: number, decimals: number, separator: string) {
  const fixed = value.toFixed(decimals);
  return separator === "," ? fixed.replace(".", ",") : fixed;
}
