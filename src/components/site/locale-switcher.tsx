"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  localeNames,
  localeShort,
  locales,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";
import { springSheet, springSnappy } from "@/lib/motion/springs";

/**
 * The popover scales out of the button that opened it and collapses back into
 * it — the spatial relationship between trigger and content stays obvious
 * because `transform-origin` sits on the corner nearest the trigger.
 */
export function LocaleSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function choose(locale: Locale) {
    setOpen(false);
    router.push(localizePath(pathname, locale));
  }

  return (
    <div ref={container} className="relative">
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        whileTap={{ scale: 0.96 }}
        transition={springSnappy}
        className="relative flex h-8 items-center gap-1.5 rounded-full border border-line px-3 type-caption font-medium text-fg-secondary transition-colors before:absolute before:-inset-y-1.5 before:inset-x-0 before:content-[''] hover:border-line-strong hover:text-fg"
      >
        {localeShort[current]}
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 180 : 0 }}
          transition={springSnappy}
          className="text-[0.6rem] leading-none"
        >
          ▾
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            aria-label={label}
            initial={{ opacity: 0, scale: 0.92, y: -6, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.92, y: -6, filter: "blur(6px)" }}
            transition={springSheet}
            className="origin-top-right material-thick material-edge absolute right-0 top-[calc(100%+8px)] z-50 w-44 overflow-hidden rounded-[var(--radius-sm)] border border-line p-1 shadow-[var(--shadow-lg)]"
          >
            {locales.map((locale) => (
              <li key={locale}>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === current}
                  onClick={() => choose(locale)}
                  className={`flex w-full items-center justify-between rounded-[7px] px-3 py-2 text-left type-caption transition-colors ${
                    locale === current
                      ? "bg-surface-2 text-fg"
                      : "text-fg-secondary hover:bg-surface hover:text-fg"
                  }`}
                >
                  {localeNames[locale]}
                  <span className="text-fg-muted">{localeShort[locale]}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
