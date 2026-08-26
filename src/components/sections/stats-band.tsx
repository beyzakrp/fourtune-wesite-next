"use client";

import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { CountUp } from "@/components/motion/count-up";

/**
 * Four figures on a dark band, each hung under its own hairline.
 *
 * The rule above the number is what makes the row read as a ledger: without
 * it, four large numerals floating in a grid have no baseline to measure
 * against and the section loses its "keeping score" posture. Labels are
 * `<dt>`s so a screen reader gets the pairing that the visual hierarchy
 * conveys by position.
 */
export function StatsBand({
  eyebrow,
  titleLines,
  stats,
}: {
  eyebrow: string;
  titleLines: string[];
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="band mt-3 section-x py-20">
      <Reveal>
        <p className="type-eyebrow text-[rgb(255_255_255/0.7)]">{eyebrow}</p>
      </Reveal>

      <h2 className="mt-4 type-h2" aria-label={titleLines.join(" ")}>
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

      <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            index={index}
            delay={index * 0.11}
            distance={30}
            amount={0.3}
            className="border-t border-[rgb(255_255_255/0.2)] pt-5"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <CountUp
                value={stat.value}
                className="block text-6xl font-medium tracking-[-0.02em] tabular-nums sm:text-7xl"
              />
              <span className="mt-3 block text-sm text-[rgb(255_255_255/0.65)]">
                {stat.label}
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
