import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";

import { PageIntro } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { TiltCard } from "@/components/motion/tilt-card";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.nav.studio, description: dict.studio.lead };
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow={dict.studio.eyebrow}
        title={dict.studio.title}
        lead={dict.studio.lead}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {dict.studio.body.map((paragraph, i) => (
            <Reveal key={i} index={i}>
              <p className="max-w-[52ch] type-lead text-fg-secondary">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 md:grid-cols-4">
          {dict.intro.stats.map((stat, i) => (
            <Reveal key={stat.label} index={i}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp value={stat.value} className="block type-h1 tabular-nums" />
                <span className="mt-2 block type-caption text-fg-muted">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="container-page border-t border-line py-20 md:py-28">
        <Reveal>
          <h2 className="type-h2">{dict.studio.valuesTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {dict.studio.values.map((value, i) => (
            <Reveal key={value.title} index={i}>
              <TiltCard
                className="h-full rounded-[var(--radius-lg)] border border-line bg-bg-elevated p-8"
                max={3}
              >
                <h3 className="type-h3">{value.title}</h3>
                <p className="mt-4 type-body text-fg-muted">{value.body}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page border-t border-line py-20 md:py-28">
        <Reveal>
          <h2 className="type-h2">{dict.studio.teamTitle}</h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {dict.studio.team.map((person, i) => (
            <Reveal as="li" key={person.name} index={i} amount={0.2}>
              <div className="border-t border-line pt-5">
                <p className="type-h3">{person.name}</p>
                <p className="mt-2 type-caption text-fg-muted">{person.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-page border-t border-line py-20 md:py-28">
        <Reveal>
          <h2 className="type-eyebrow text-fg-muted">
            {dict.studio.officeTitle}
          </h2>
        </Reveal>
        <Reveal index={1}>
          <address className="mt-6 max-w-[24ch] type-h2 not-italic text-balance">
            {site.address.street}, {site.address.city}
          </address>
        </Reveal>
      </section>

    </>
  );
}
