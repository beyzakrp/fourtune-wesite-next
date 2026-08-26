"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { springFollow } from "@/lib/motion/springs";

type Step = { n: string; title: string; body: string };

/**
 * The rail fills as you read, so the section shows how much of the process is
 * left without a separate progress widget. The heading stays pinned — the
 * question the steps answer should not scroll away from the answer.
 */
export function Process({
  eyebrow,
  title,
  lead,
  steps,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  steps: Step[];
}) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });
  const scaleY = useSpring(scrollYProgress, springFollow);
  const railOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section className="container-page py-24 md:py-36">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.2fr] md:gap-20">
        <div className="md:sticky md:top-[calc(var(--header-h)+4rem)] md:self-start">
          <Reveal>
            <p className="type-eyebrow text-fg-muted">{eyebrow}</p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="mt-4 max-w-[14ch] type-h2 text-balance">{title}</h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-[42ch] type-body text-fg-muted">{lead}</p>
          </Reveal>
        </div>

        <ol ref={ref} className="relative border-l border-line pl-8 md:pl-12">
          <motion.span
            aria-hidden
            style={{ scaleY, opacity: railOpacity }}
            className="absolute -left-px top-0 h-full w-px origin-top bg-accent"
          />

          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.n}
              index={index}
              amount={0.35}
              className="relative pb-14 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+4px)] top-2 size-2 rounded-full bg-fg-muted md:-left-[calc(3rem+4px)]"
              />
              <p className="type-caption tabular-nums text-accent">{step.n}</p>
              <h3 className="mt-3 type-h3">{step.title}</h3>
              <p className="mt-4 max-w-[50ch] type-body text-fg-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
