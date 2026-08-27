"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  type PanInfo,
} from "motion/react";
import { project } from "@/lib/motion/physics";
import { springSheet, springMove, stagger } from "@/lib/motion/springs";

type Item = { href: string; label: string };

/**
 * A bottom sheet you can throw away.
 *
 * The panel tracks the finger 1:1 while dragging, rubber-bands upward against
 * its own top edge, and on release *projects* where the flick was going before
 * deciding to dismiss or return. The spring that runs afterwards is handed the
 * release velocity, so there is no seam between the drag and the animation —
 * and because it is a spring, grabbing it again mid-flight re-targets it.
 *
 * It wears the same glass as the header pill, one weight heavier: a bigger
 * surface has to read as thicker, and a light translucent panel over dark page
 * content would lose its type.
 */
export function MobileMenu({
  id,
  open,
  onClose,
  items,
  footer,
  closeLabel,
  label,
  activeHref,
  returnFocusRef,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  items: Item[];
  footer?: React.ReactNode;
  closeLabel: string;
  label: string;
  activeHref?: string;
  /** Where focus goes on close. Explicit, so it never depends on which
      element happened to be active when the sheet opened. */
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}) {
  const y = useMotionValue(0);
  const panel = useRef<HTMLDivElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    y.set(0);

    // Body scroll is locked by overflow rather than `position: fixed`, so the
    // reader's scroll position survives untouched and nothing jumps on close.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const opener = returnFocusRef?.current ?? (document.activeElement as HTMLElement | null);
    firstLink.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      // Send focus back to the trigger, not to the top of the document.
      opener?.focus?.();
    };
  }, [open, onClose, y, returnFocusRef]);

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    const height = panel.current?.offsetHeight ?? 400;
    const velocity = info.velocity.y;
    // Where the flick is *going*, not where the finger stopped.
    const projected = info.offset.y + project(velocity);

    if (projected > height * 0.35) {
      onClose();
      return;
    }

    animate(y, 0, { ...springSheet, velocity });
  }

  return (
    /* The scrim and the panel are separate keyed children, not siblings inside
       a fragment: AnimatePresence tracks children by key and silently drops a
       fragment, which renders nothing at all. */
    <AnimatePresence>
      {open ? (
        <motion.button
          key="scrim"
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-70 bg-[var(--scrim)] backdrop-blur-[2px] lg:hidden"
        />
      ) : null}

      {open ? (
        <motion.div
          key="panel"
          id={id}
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          /* Firm against the top edge, generous downward — resistance, never
             a hard stop. */
          dragElastic={{ top: 0.03, bottom: 0.55 }}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          /* touch-action is left to Motion: with drag="y" it sets `pan-x`,
             so a horizontal swipe still reaches the page. */
          style={{ y }}
          /* In and out along the same path: it arrives from the bottom and
             leaves to the bottom, and the blur materialises with it. */
          initial={{ y: "100%", filter: "blur(12px)" }}
          animate={{ y: 0, filter: "blur(0px)" }}
          exit={{ y: "100%", filter: "blur(12px)" }}
          transition={springSheet}
          /* `lg:hidden`, matching the burger. When this was `md:hidden` the
             two disagreed between 768 and 1023: the button was on screen but
             the sheet it opened was display:none, so a click locked scrolling
             and moved focus into an invisible dialog with no way out but Esc. */
          className="sh-sheet fixed inset-x-3 bottom-3 z-70 rounded-[28px] px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 lg:hidden"
        >
          <div
            aria-hidden
            className="mx-auto mb-5 h-1 w-9 rounded-full bg-line-strong"
          />

          <nav aria-label={label}>
            <ul className="flex flex-col">
              {items.map((item, i) => {
                const active = item.href === activeHref;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springMove, delay: 0.04 + stagger(i, 0.04) }}
                  >
                    <Link
                      ref={i === 0 ? firstLink : undefined}
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-[52px] items-center justify-between border-b border-line type-h3 text-fg-secondary transition-opacity active:opacity-60"
                    >
                      {item.label}
                      {active ? (
                        <span
                          aria-hidden
                          className="size-1.5 rounded-full bg-accent"
                        />
                      ) : null}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {footer ? <div className="pt-5">{footer}</div> : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
