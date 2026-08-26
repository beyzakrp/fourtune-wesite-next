"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";

export function CallToAction({
  eyebrow,
  title,
  body,
  action,
  secondary,
  href,
  email,
}: {
  eyebrow: string;
  title: string;
  body: string;
  action: string;
  secondary: string;
  href: string;
  email: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // The panel resolves as it arrives — a small settle, not an entrance.
  const scale = useTransform(scrollYProgress, [0, 1], [0.965, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [56, 28]);

  return (
    <section ref={ref} className="container-page pb-24 md:pb-36">
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="motion-travel relative isolate overflow-hidden border border-line bg-bg-elevated px-6 py-20 text-center md:px-16 md:py-28"
      >
        <div aria-hidden className="cta-glow absolute inset-0 -z-10 opacity-70" />

        <Reveal>
          <p className="type-eyebrow text-fg-muted">{eyebrow}</p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mx-auto mt-5 max-w-[18ch] type-h1 text-balance">
            {title}
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mx-auto mt-6 max-w-[46ch] type-lead text-fg-secondary">
            {body}
          </p>
        </Reveal>
        <Reveal index={3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <ButtonLink href={href} size="lg">
                {action}
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonAnchor href={`mailto:${email}`} size="lg">
                {secondary}
              </ButtonAnchor>
            </Magnetic>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
