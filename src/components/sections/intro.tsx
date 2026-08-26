import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";

export function Intro({
  eyebrow,
  title,
  body,
  stats,
}: {
  eyebrow: string;
  title: string;
  body: string;
  stats: { value: string; label: string }[];
}) {
  return (
    <section id="intro" className="container-page scroll-mt-24 py-24 md:py-36">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <Reveal>
            <p className="type-eyebrow text-fg-muted">{eyebrow}</p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="mt-4 max-w-[14ch] type-h2 text-balance">{title}</h2>
          </Reveal>
        </div>
        <Reveal index={2} className="self-end">
          <p className="max-w-[46ch] type-lead text-fg-secondary">{body}</p>
        </Reveal>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} index={i}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <CountUp
                value={stat.value}
                className="block type-h1 tabular-nums"
              />
              <span className="mt-2 block type-caption text-fg-muted">
                {stat.label}
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
