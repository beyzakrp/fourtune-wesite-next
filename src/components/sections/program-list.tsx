"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { ServiceBubbles } from "@/components/ui/service-bubbles";

export type ProgramRow = {
  id: string;
  index: string;
  name: string;
  description: string;
  href: string;
};

/**
 * A numbered index of disciplines, laid out as hairline-separated rows.
 *
 * There is no card, no fill and no shadow — the rule between rows carries the
 * structure, which is what lets a long list read as a table of contents rather
 * than a stack of tiles. The arrow sits at 55% opacity until the row is
 * pointed at, so the column of arrows stays quiet and only the live one
 * asserts itself.
 */
export function ProgramList({ rows }: { rows: ProgramRow[] }) {
  return (
    <ul className="mt-14">
      {rows.map((row, index) => (
        <li
          key={row.id}
          className="border-t border-line last:border-b last:border-line"
        >
          <Link href={row.href} className="block focus-visible:bg-bg">
            <Reveal index={index} delay={index * 0.09} distance={26} amount={0.15}>
              {/* The hover parent has to be a motion element for the variant to
                  reach the arrow — a plain <a> would not propagate it. */}
              {/* Feedback lands on pointer-*down*, not on the click: waiting
                  for the navigation to commit before acknowledging the press
                  is what makes a list feel dead. The press is a spring, so
                  letting go mid-press picks up from wherever the row is. */}
              <motion.span
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileFocus="hover"
                whileTap={{ scale: 0.995, x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex origin-left items-start gap-3 py-7 sm:gap-6"
              >
                <span className="mt-1.5 w-6 shrink-0 text-sm font-medium text-fg-muted sm:w-10">
                  {row.index}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                    {row.name}
                  </span>
                  <span className="measure mt-1 block text-sm text-fg-muted">
                    {row.description}
                  </span>
                  <ServiceBubbles serviceId={row.id} />
                </span>

                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line">
                  <motion.span
                    aria-hidden
                    className="grid place-items-center"
                    variants={{
                      rest: { x: 0, opacity: 0.55 },
                      hover: { x: 8, opacity: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </motion.span>
                </span>
              </motion.span>
            </Reveal>
          </Link>
        </li>
      ))}
    </ul>
  );
}
