"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";

type Item = { quote: string; name: string; role: string };

/**
 * Three quotes as a plain grid.
 *
 * This replaced a drag carousel deliberately: with exactly three items a
 * carousel hides two thirds of the content behind a gesture and buys nothing.
 * Laying them out flat lets the reader compare them at a glance, which is the
 * only reason to read testimonials at all.
 *
 * The lift on hover is the one piece of motion — small, and only to confirm
 * the card is the hit target.
 */
export function Testimonials({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Item[];
}) {
  const titleLines = splitTitle(title);

  return (
    <section
      id="testimonials"
      className="bg-bg section-x py-20 sm:py-24"
    >
      <Reveal>
        <p className="type-eyebrow text-fg-muted">{eyebrow}</p>
      </Reveal>

      <h2 className="mt-4 type-h2 text-balance" aria-label={title}>
        <span aria-hidden>
          {titleLines.map((line, i) => (
            <SplitWords
              key={line}
              as="span"
              text={line}
              className="block"
              delay={i * 0.12}
            />
          ))}
        </span>
      </h2>

      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <Reveal
            as="li"
            key={item.name}
            index={index}
            delay={index * 0.12}
            distance={40}
            amount={0.15}
          >
            <motion.figure
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex h-full flex-col justify-between rounded-[var(--radius)] bg-surface p-7"
            >
              <div>
                <p aria-hidden className="text-4xl leading-none text-accent">
                  &ldquo;
                </p>
                <blockquote className="mt-4 text-lg leading-relaxed text-fg">
                  {item.quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-line pt-4">
                <b className="block font-medium">{item.name}</b>
                <span className="block text-sm text-fg-muted">{item.role}</span>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/** Break a headline in two at its midpoint so it stacks like the other titles. */
function splitTitle(title: string): string[] {
  const words = title.split(" ");
  if (words.length < 3) return [title];
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(" "), words.slice(cut).join(" ")];
}
