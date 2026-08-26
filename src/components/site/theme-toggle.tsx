"use client";

import { useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { springMove } from "@/lib/motion/springs";

type Theme = "light" | "dark";

/**
 * The `data-theme` attribute on <html> — written before paint by ThemeScript —
 * is the single source of truth. Subscribing to it rather than mirroring it in
 * React state means there is no window where the two disagree.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

/**
 * A two-position track: the thumb slides between the icons rather than the
 * icon swapping in place, so the control shows its own state spatially.
 */
export function ThemeToggle({ label }: { label: string }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark" as Theme);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode — the choice just will not persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={theme === "dark"}
      /* The control reads at 32px but the `::before` pushes the hit area to
         44px tall, so the touch target meets the minimum without the pill
         looking chunky. */
      className="relative flex h-8 w-14 shrink-0 items-center rounded-full border border-line bg-[var(--glass-bg)] p-1 transition-colors before:absolute before:-inset-y-1.5 before:inset-x-0 before:content-[''] hover:border-line-strong"
    >
      <motion.span
        aria-hidden
        className="absolute size-6 rounded-full bg-fg will-change-transform"
        animate={{ x: theme === "dark" ? 24 : 0 }}
        transition={springMove}
      />
      <span
        aria-hidden
        className="relative z-10 flex size-6 items-center justify-center"
      >
        <SunIcon
          className={theme === "light" ? "text-bg" : "text-fg-muted"}
        />
      </span>
      <span
        aria-hidden
        className="relative z-10 flex size-6 items-center justify-center"
      >
        <MoonIcon className={theme === "dark" ? "text-bg" : "text-fg-muted"} />
      </span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`size-3.5 ${className ?? ""}`} fill="none">
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2L3.1 3.1" />
      </g>
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`size-3.5 ${className ?? ""}`} fill="none">
      <path
        d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8 5.6 5.6 0 1 0 13.2 9.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
