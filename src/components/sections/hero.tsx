"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Aurora } from "./aurora";
import { heroPhoto } from "@/lib/content/photos";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import type { GlassSlide } from "@/components/ui/glass-carousel";
import { scrollTo } from "@/components/motion/smooth-scroll";
import { springMove } from "@/lib/motion/springs";
import { useIntroReady } from "@/lib/intro";

/* ===========================================================================
   HERO SCRIM — the darkening laid over the banner. Tune it here.

   Two stacked layers, both plain CSS gradients:

   • VERTICAL seats the content. The bottom stop is the one doing real work —
     it is what the lead paragraph and the buttons sit on. Lighten it and the
     copy starts to float; darken it and the lower third of the banner goes.

   • HORIZONTAL biases the darkness toward the left, where the copy is. Set it
     to "none" to remove it entirely.

   Values are `rgb(0 0 0 / alpha)`; only the alphas matter. 0 = fully clear,
   1 = solid black. The percentages are positions across the gradient.
   =========================================================================== */
const SCRIM_VERTICAL =
  "linear-gradient(to bottom, rgb(0 0 0 / 0.3) 0%, rgb(0 0 0 / 0.12) 38%, rgb(0 0 0 / 0.55) 72%, rgb(0 0 0 / 0.65) 100%)";

const SCRIM_HORIZONTAL =
  "linear-gradient(100deg, rgb(0 0 0 / 0.5) 0%, rgb(0 0 0 / 0.28) 42%, rgb(0 0 0 / 0.06) 74%, rgb(0 0 0 / 0) 100%)";

export type HeroCopy = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTrail: string;
  lead: string;
  primary: string;
  secondary: string;
  scroll: string;
};

/**
 * A full-bleed band that fills the screen, with the headline set as a
 * compositional block at the top and everything else pinned to the bottom
 * edge. The empty middle is the point: it is what makes the type read as a
 * poster rather than as a paragraph with decoration.
 */
export function Hero({
  copy,
  workHref,
  contactHref,
  // slides,
  //slidesLabel,
  stat,
}: {
  copy: HeroCopy;
  workHref: string;
  contactHref: string;
  slides: GlassSlide[];
  slidesLabel: string;
  stat: { value: string; label: string };
}) {
  const ref = useRef<HTMLElement>(null);
  const introReady = useIntroReady();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The plate is oversized and shifted up, so the drift can never expose an
  // edge of the band. Kept small — see the note on the plate below.
  const plateY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const fullTitle = `${copy.titleLead} ${copy.titleAccent} ${copy.titleTrail}`;

  return (
    <section
      ref={ref}
      className="band relative isolate flex flex-col overflow-hidden"
      style={{
        height: "calc(100svh - var(--page-inset) * 2)",
        minHeight: "36rem",
      }}
    >
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {/* The overshoot is the smallest that still covers: -6% to 106% at
            rest, -1% to 111% at full drift.

            Kept tight on purpose. Every extra percent of plate height makes
            the box more portrait than the artwork, and `object-fit: cover`
            answers that by scaling up and trimming the sides — so the
            overshoot was both the softness and the "too close" crop. */}
        <motion.div
          style={{ y: plateY }}
          className="motion-travel absolute inset-x-0 -top-[6%] h-[112%] w-full"
        >
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            /* Not `100vw`, and this is the whole bug.
               `object-fit: cover` scales the artwork by *height* here, because
               the plate is more portrait than the artwork is. That makes the
               rendered width ~1.35× the viewport — so `100vw` asks for a file
               that is a third too small and the browser stretches it. */
            sizes="(max-width: 768px) 200vw, 145vw"
            /* Kept in colour. The interface is black and white; a photograph
               is not an interface colour, and this one's pink is the brand
               accent, so it ends up being the single chromatic note on the
               page rather than a competing palette.

               Anchored low-left so the frame lands on the wall and the workers
               rather than centring on the billboard — the scene is the subject,
               and cropping into the billboard turns the photo back into a
               graphic with its own headline. */
            className="object-cover [object-position:50%_50%]"
          />
          {/* A trace of the brand colour over a greyscale ground — the single
              chromatic note in a black-and-white page. Half strength would put
              the colour back that the greyscale just took out, so it sits at a
              quarter. The opacity also makes this a stacking context, which is
              what keeps Aurora's own negative z-index from sliding behind the
              image. */}
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <Aurora />
          </div>
        </motion.div>
        {/* <div className="absolute inset-0" style={{ background: SCRIM_VERTICAL }} /> Both scrims are defined at the top of this file.
        <div className="absolute inset-0" style={{ background: SCRIM_HORIZONTAL }} />*/}

      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="motion-travel flex flex-1 flex-col"
      >
        {/* The banner carries its own headline, so the page does not lay a
            second one over it. The <h1> stays in the document — a page with no
            level-one heading is broken for search and for anyone navigating by
            headings — it simply is not painted. */}
        <h1 className="sr-only">{fullTitle}</h1>

        <div className="container-page mt-auto flex justify-center pb-14 sm:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ ...springMove, delay: 0.45 }}
            className="grid w-full max-w-sm grid-cols-2 gap-3"
          >
            <Magnetic className="w-full">
              <ButtonLink href={workHref} className="w-full">
                {copy.primary}
              </ButtonLink>
            </Magnetic>
            <Magnetic className="w-full">
              <ButtonLink href={contactHref} variant="glass" className="w-full">
                {copy.secondary}
              </ButtonLink>
            </Magnetic>
          </motion.div>

          {/*<div className="hidden items-end gap-4 md:flex">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ ...springMove, delay: 0.65 }}
            >
             
             <GlassCarousel slides={slides} label={slidesLabel} gated={!introReady} />
              
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 28 }}
              animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ ...springMove, delay: 0.78 }}
              className="glass-panel flex w-60 items-stretch gap-3 rounded-[var(--radius)] p-3"
            >
              <div className="flex flex-1 flex-col justify-between">
                <p className="text-3xl font-medium leading-none">{stat.value}</p>
                <div>
                  <div aria-hidden className="mt-2 flex">
                    {["#f52e63", "#fbe2dc", "#0088ff", "#f7f4ef"].map((c, i) => (
                      <span
                        key={c}
                        className="block size-5 rounded-full border border-[rgb(0_0_0/0.45)]"
                        style={{ background: c, marginLeft: i ? "-0.5rem" : 0 }}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-[0.65rem] opacity-80">{stat.label}</p>
                </div>
              </div>
            </motion.article>
          </div>*/} 
        </div>
      </motion.div>
      

      <motion.button
        type="button"
        onClick={() => scrollTo("#intro", -80)}
        style={{ opacity: hintOpacity }}
        className="container-page absolute inset-x-0 bottom-4 mx-auto flex items-center gap-3 type-caption text-[rgb(255_255_255/0.6)] transition-colors hover:text-white sm:hidden"
      >
        {copy.scroll}
      </motion.button>
    </section>
  );
}
