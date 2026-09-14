import { Reveal } from "@/components/motion/reveal";
import { EmphasizedCopy } from "@/components/ui/emphasized-copy";

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
        <h2 className="type-h2 text-balance" >{title}</h2>
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
  titleStyle = "default",
  contentPosition = "default",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  titleStyle?: "default" | "editorial";
  contentPosition?: "default" | "lower";
}) {
  return (
    <section
      className={`band section-x ${
        contentPosition === "lower"
          ? "pb-24 pt-[calc(var(--header-h)+9rem)] md:pb-32 md:pt-[calc(var(--header-h)+13rem)]"
          : "pb-16 pt-[calc(var(--header-h)+5rem)] md:pb-24 md:pt-[calc(var(--header-h)+7rem)]"
      }`}
    >
      <Reveal>
        <p className="type-eyebrow text-[rgb(255_255_255/0.7)]">{eyebrow}</p>
      </Reveal>
      <Reveal index={1}>
        <h1
          className={`mt-5 max-w-[18ch] text-balance ${
            titleStyle === "editorial"
              ? "text-[clamp(4.25rem,9vw,8rem)] font-normal leading-[0.9] tracking-[-0.035em] normal-case italic"
              : "type-h1"
          }`}
          style={
            titleStyle === "editorial"
              ? { fontFamily: "var(--font-instrument)" }
              : undefined
          }
        >
          <EmphasizedCopy text={title} />
        </h1>
      </Reveal>
      {lead ? (
        <Reveal index={2}>
          <p className="mt-7 max-w-[52ch] type-lead text-[rgb(255_255_255/0.8)]">
            <EmphasizedCopy text={lead} />
          </p>
        </Reveal>
      ) : null}
    </section>
  );
}
