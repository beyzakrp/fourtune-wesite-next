import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

import { PageIntro } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  EmphasizedCopy,
  stripEmphasis,
} from "@/components/ui/emphasized-copy";

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
  return {
    title: dict.nav.studio,
    description: stripEmphasis(dict.studio.lead),
  };
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
        eyebrow={dict.studio.previewEyebrow}
        title={dict.studio.previewTitle}
        titleStyle="editorial"
        contentPosition="lower"
      />

      <section className="container-page"
      style={{
        marginTop: "5rem",
      }}>
        <div className="mx-auto max-w-[120ch] space-y-8 md:space-y-10">
          <Reveal>
            <h2 className="type-h2 max-w-[18ch] text-balance normal-case">
              <EmphasizedCopy text={dict.studio.title} accent />
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="type-lead text-fg-secondary">
              <EmphasizedCopy text={dict.studio.lead} accent />
            </p>
          </Reveal>
          {dict.studio.body.map((paragraph, i) => (
            <Reveal key={i} index={i + 2}>
              <p className="type-lead text-fg-secondary">
                <EmphasizedCopy text={paragraph} accent />
              </p>
            </Reveal>
          ))}
          <Image
            src="/images/Our-Team-Signature.png"
            alt=""
            width={9588}
            height={3929}
            sizes="18rem"
            className="block h-auto w-full max-w-[18rem]"
          />
        </div>

{/* Stats
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
*/}
      </section>


{/*
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
*/}

      <section
        aria-hidden
        className="flex justify-end bg-white"
        style={{
          marginBottom: "calc(0px - var(--page-inset) - 0.75rem)",
          marginTop: "-15rem",
        }}
      >

        <Image
          src="/images/happy-team-drawing.svg"
          alt=""
          width={776}
          height={449}
          className="flex h-auto w-full max-w-[35rem]"
        />

      </section>
    </>
  );
}
