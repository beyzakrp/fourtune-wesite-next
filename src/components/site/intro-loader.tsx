"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { markIntroReady } from "@/lib/intro";
import { springMove } from "@/lib/motion/springs";

const MIN_VISIBLE_MS = 1400;
const MAX_VISIBLE_MS = 2600;
const EXIT_MS = 850;

/**
 * The opening moment: a full-bleed brand curtain that holds for a beat, fills
 * a hairline progress bar, then slides up and hands the stage to the hero.
 *
 * Two rules keep it from being a tax on the reader:
 *
 * - It is bounded. The countdown starts on `load`, but a hard ceiling starts
 *   it anyway if `load` never fires, so a stalled asset can never trap anyone
 *   behind the curtain.
 * - It gates rather than delays. Lifting the curtain is what flips the intro
 *   latch, so the hero's reveal begins exactly when it becomes visible instead
 *   of playing out of sight underneath.
 *
 * Under reduced motion the hold collapses to a blink and the curtain does not
 * travel — the page simply starts.
 */
export function IntroLoader() {
  const reduced = useReducedMotion();
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const [filling, setFilling] = useState(false);

  useEffect(() => {
    const minVisible = reduced ? 200 : MIN_VISIBLE_MS;
    let countdown: ReturnType<typeof setTimeout> | null = null;

    const start = () => {
      if (countdown) return;
      countdown = setTimeout(() => {
        markIntroReady();
        setExiting(true);
      }, minVisible);
    };

    // Scroll stays locked until the curtain lifts.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => setFilling(true));

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start);
    const ceiling = setTimeout(start, MAX_VISIBLE_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(ceiling);
      if (countdown) clearTimeout(countdown);
      window.removeEventListener("load", start);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduced]);

  useEffect(() => {
    if (!exiting) return;
    document.body.style.overflow = "";
    const timer = setTimeout(() => setGone(true), reduced ? 1 : EXIT_MS);
    return () => clearTimeout(timer);
  }, [exiting, reduced]);

  if (gone) return null;

  return (
    <motion.div
      aria-hidden
      initial={{ y: 0 }}
      animate={{ y: exiting ? "-105%" : 0 }}
      transition={
        reduced
          ? { duration: 0.001 }
          : { duration: EXIT_MS / 1000, ease: [0.65, 0, 0.35, 1] }
      }
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-[var(--brand-ink)] text-[var(--brand-ivory)]"
    >
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springMove}
        className="flex items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo/new-logo-white-pink.svg"
          alt=""
          width={611}
          height={128}
          className="h-auto w-[min(78vw,24rem)]"
        />
      </motion.span>

      <span className="h-px w-40 overflow-hidden rounded-full bg-[rgb(255_255_255/0.2)]">
        {/* The state is an attribute; the timing lives in `.loader-fill`. */}
        <span
          className="loader-fill block h-full bg-current"
          data-filling={filling ? "true" : "false"}
        />
      </span>
    </motion.div>
  );
}
