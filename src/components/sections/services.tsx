"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { ServiceBubbles } from "@/components/ui/service-bubbles";
import { Sparkle } from "@/components/site/wordmark";
import { springMove, springSnappy } from "@/lib/motion/springs";

type ServiceItem = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
};

/**
 * Disclosure rows rather than a card grid: a broad service list would flatten
 * the hierarchy as cards, and the summary is what most readers need. The
 * detail is one level deeper, where it belongs.
 *
 * Height is animated by Motion's layout engine, so opening a second row while
 * the first is still closing re-targets both springs from wherever they are.
 */
export function Services({
  items,
  deliverablesLabel,
}: {
  items: ServiceItem[];
  deliverablesLabel: string;
}) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ul className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = open === item.id;
        return (
          <Reveal
            as="li"
            key={item.id}
            index={index}
            amount={0.15}
            className="border-b border-line"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`service-${item.id}`}
                className="group flex w-full items-start gap-6 py-8 text-left md:gap-12 md:py-10"
              >
                <span className="mt-1.5 shrink-0 type-caption tabular-nums text-fg-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`block type-h3 transition-colors ${
                      isOpen ? "text-fg" : "text-fg group-hover:text-accent"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="mt-3 block max-w-[54ch] type-body text-fg-muted">
                    {item.summary}
                  </span>
                  <ServiceBubbles serviceId={item.id} />
                </span>

                <motion.span
                  aria-hidden
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={springSnappy}
                  className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-fg-secondary transition-colors group-hover:border-line-strong group-hover:text-fg"
                >
                  <svg viewBox="0 0 12 12" className="size-3" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`service-${item.id}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    ...springMove,
                    opacity: { duration: 0.2 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 md:pl-[calc(1.5rem+3rem)]">
                    <p className="type-eyebrow text-fg-muted">
                      {deliverablesLabel}
                    </p>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {item.deliverables.map((deliverable, i) => (
                        <motion.li
                          key={deliverable}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ...springMove, delay: 0.04 + i * 0.04 }}
                          className="flex items-baseline gap-3 type-body text-fg-secondary"
                        >
                          <Sparkle className="size-2.5 shrink-0 translate-y-[0.1em] text-accent" />
                          {deliverable}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </ul>
  );
}
