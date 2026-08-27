import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { ButtonLink } from "@/components/ui/button";
import { EmphasizedCopy } from "@/components/ui/emphasized-copy";
import type { Photo } from "@/lib/content/photos";

/** A compact route into the full Our Story page. */
export function StoryPreview({
  eyebrow,
  titleLines,
  body,
  image,
  href,
  action,
}: {
  eyebrow: string;
  titleLines: string[];
  body: string;
  image: Photo;
  href: string;
  action: string;
}) {
  return (
    <div className="relative isolate">
      <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.35fr] lg:gap-16 xl:gap-24">
        <div className="max-w-xl">
          <Reveal distance={0}>
            <p className="type-eyebrow text-fg-muted">{eyebrow}</p>
          </Reveal>

          <h2
            className="story-preview-title mt-5 type-h2 font-normal normal-case italic"
            style={{ fontFamily: "var(--font-instrument)" }}
            aria-label={titleLines.join(" ")}
          >
            <span aria-hidden>
              {titleLines.map((line, index) => (
                <SplitWords
                  key={line}
                  as="span"
                  text={line}
                  className="block"
                  delay={index * 0.12}
                />
              ))}
            </span>
          </h2>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-[48ch] type-body text-fg-muted">
              <EmphasizedCopy text={body} />
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-8">
            <ButtonLink href={href} variant="primary">
              {action}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal as="figure" index={1} distance={48} amount={0.15}>
          <div className="group relative aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)] bg-surface shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
