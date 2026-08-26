"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";

export type FacilityTile = {
  id: string;
  href: string;
  palette: [string, string, string];
  mark: string;
  photo?: string;
  name: string;
  description: string;
  /** Which tint the glass caption takes. */
  tone: "warm" | "cool";
};

/**
 * An intro column paired with two tall tiles whose baselines do not line up.
 *
 * The offset is the whole composition: two equal tiles sitting level read as a
 * grid, and a grid reads as a catalogue. Dropping the second one by 2rem turns
 * the pair into an arrangement, which is what makes a two-item section look
 * deliberate rather than short.
 */
export function FacilitiesBlock({
  titleLines,
  body,
  tiles,
  markPalette,
  markPhoto,
}: {
  titleLines: string[];
  body: string;
  tiles: FacilityTile[];
  markPalette: [string, string, string];
  markPhoto?: string;
}) {
  return (
    <div className="grid items-end gap-10 md:grid-cols-2">
      <div className="max-w-sm">
        <Reveal distance={0} amount={0.3}>
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="palette-ground relative block size-16 overflow-hidden rounded-[var(--radius)]"
            style={
              {
                "--c1": `${markPalette[0]}cc`,
                "--c2": `${markPalette[1]}aa`,
                "--c3": markPalette[2],
              } as CSSProperties
            }
          >
            {markPhoto ? (
              <Image src={markPhoto} alt="" fill sizes="64px" className="object-cover" />
            ) : null}
            <span
              aria-hidden
              className="palette-mesh absolute inset-0 mix-blend-multiply"
            />
          </motion.span>
        </Reveal>

        <h2 className="mt-6 type-h2" aria-label={titleLines.join(" ")}>
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

        <p className="mt-6 max-w-xs type-body text-fg-muted" aria-label={body}>
          <span aria-hidden>
            <SplitWords text={body} step={0.028} delay={0.25} />
          </span>
        </p>
      </div>

      <div className="flex items-end gap-5">
        {tiles.map((tile, index) => (
          <Reveal
            key={tile.id}
            as="figure"
            index={index}
            delay={index * 0.14}
            distance={48}
            amount={0.15}
            className={`flex-1 ${index === 1 ? "mb-8" : ""}`}
          >
            <Link
              href={tile.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-[var(--radius)] bg-surface"
            >
              <motion.span
                aria-hidden
                className="palette-ground absolute inset-0 block overflow-hidden"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                style={
                  {
                    "--c1": `${tile.palette[0]}cc`,
                    "--c2": `${tile.palette[1]}aa`,
                    "--c3": tile.palette[2],
                  } as CSSProperties
                }
              >
                {tile.photo ? (
                  <Image
                    src={tile.photo}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 55vw, 32vw"
                    className="object-cover"
                  />
                ) : null}
                <span className="palette-mesh absolute inset-0 mix-blend-multiply" />
              </motion.span>
              <figcaption
                className={`absolute inset-x-3 bottom-3 rounded-[var(--radius-sm)] px-4 py-3 text-white backdrop-blur-md ${
                  tile.tone === "cool" ? "facility-cap-cool" : "facility-cap-warm"
                }`}
              >
                <b className="block text-sm font-medium">{tile.name}</b>
                <span className="mt-0.5 block text-[0.65rem] opacity-85">
                  {tile.description}
                </span>
              </figcaption>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
