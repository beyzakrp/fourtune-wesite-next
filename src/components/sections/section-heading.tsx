import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className ?? ""}`}
    >
      {eyebrow ? (
        <Reveal>
          <p className="type-eyebrow text-fg-muted">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal index={1}>
        <h2 className="mt-4 type-h2 text-balance">{title}</h2>
      </Reveal>
      {lead ? (
        <Reveal index={2}>
          <p className="measure mt-5 type-lead text-fg-secondary">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/**
 * The opening band for every inner route.
 *
 * It is dark for a structural reason, not a decorative one: the header is
 * transparent and always white, so whatever sits at the top of a page has to
 * be a dark band or the navigation disappears into it.
 */
export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="band section-x pb-16 pt-[calc(var(--header-h)+5rem)] md:pb-24 md:pt-[calc(var(--header-h)+7rem)]">
      <Reveal>
        <p className="type-eyebrow text-[rgb(255_255_255/0.7)]">{eyebrow}</p>
      </Reveal>
      <Reveal index={1}>
        <h1 className="mt-5 max-w-[18ch] type-h1 text-balance">{title}</h1>
      </Reveal>
      <Reveal index={2}>
        <p className="mt-7 max-w-[52ch] type-lead text-[rgb(255_255_255/0.8)]">
          {lead}
        </p>
      </Reveal>
    </section>
  );
}
