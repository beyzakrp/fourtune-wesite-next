import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  getAdjacentProject,
  getProject,
  projects,
} from "@/lib/content/projects";

import { ProjectCover } from "@/components/work/project-cover";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { CountUp } from "@/components/motion/count-up";
import { ButtonLink } from "@/components/ui/button";

/** Keep existing case-study taxonomy compatible with the new service names. */
const serviceIdAliases: Record<string, string> = {
  strategy: "digital-strategy",
  identity: "branding-campaign",
  product: "web-digital-experience",
  engineering: "web-digital-experience",
  motion: "creative-content",
  campaign: "branding-campaign",
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) return {};

  const dict = await getDictionary(locale);
  const copy = dict.projects[project.id];
  return { title: copy.title, description: copy.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const project = getProject(slug);
  if (!project) notFound();

  const dict = await getDictionary(locale);
  const copy = dict.projects[project.id];
  const next = getAdjacentProject(slug);
  const nextCopy = dict.projects[next.id];

  const disciplineNames = project.disciplines
    .map(
      (id) =>
        dict.services.items.find(
          (item) => item.id === id || item.id === serviceIdAliases[id],
        )?.title,
    )
    .filter(Boolean) as string[];

  return (
    <article>
      <header className="container-page pb-12 pt-[calc(var(--header-h)+4rem)] md:pb-16 md:pt-[calc(var(--header-h)+6rem)]">
        <Reveal>
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 type-caption text-fg-muted transition-colors hover:text-fg"
          >
            <span aria-hidden>←</span>
            {dict.work.backToWork}
          </Link>
        </Reveal>

        <Reveal index={1}>
          <p className="mt-10 type-eyebrow text-accent">{copy.category}</p>
        </Reveal>
        <Reveal index={2}>
          <h1 className="mt-5 max-w-[20ch] type-h1 text-balance">
            {copy.title}
          </h1>
        </Reveal>
        <Reveal index={3}>
          <p className="mt-7 max-w-[54ch] type-lead text-fg-secondary">
            {copy.summary}
          </p>
        </Reveal>
      </header>

      <div className="container-page">
        <Reveal amount={0.1}>
          {/* The cover drifts against the page as it passes — a depth cue that
              separates the artwork layer from the text layer. */}
          <Parallax distance={28} zoom={0.04} className="overflow-hidden rounded-[var(--radius-lg)]">
            <ProjectCover
              project={project}
              showMark={false}
              className="aspect-[16/9] w-full"
            />
          </Parallax>
        </Reveal>
      </div>

      <div className="container-page grid gap-14 py-20 md:grid-cols-[0.8fr_1.6fr] md:gap-20 md:py-28">
        <aside className="md:sticky md:top-[calc(var(--header-h)+4rem)] md:self-start">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-1">
            <MetaItem label={dict.work.labels.client} value={copy.client} />
            <MetaItem
              label={dict.work.labels.year}
              value={String(project.year)}
            />
            <MetaItem
              label={dict.work.labels.duration}
              value={copy.duration}
            />
            <MetaItem
              label={dict.work.labels.disciplines}
              value={disciplineNames.join(", ")}
            />
          </dl>
        </aside>

        <div className="flex flex-col gap-14">
          <Section title={dict.work.sections.challenge} body={copy.challenge} />
          <Section title={dict.work.sections.approach} body={copy.approach} />
          <Section title={dict.work.sections.outcome} body={copy.outcome} />

          <Reveal>
            <h2 className="type-eyebrow text-fg-muted">
              {dict.work.sections.results}
            </h2>
            <dl className="mt-6 grid gap-x-6 gap-y-10 border-t border-line pt-8 sm:grid-cols-3">
              {copy.results.map((result, i) => (
                <Reveal key={result.label} index={i}>
                  <dt className="sr-only">{result.label}</dt>
                  <dd>
                    <CountUp
                      value={result.value}
                      className="block type-h2 tabular-nums"
                    />
                    <span className="mt-2 block type-caption text-fg-muted">
                      {result.label}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <section className="border-t border-line">
        <Link
          href={`/${locale}/work/${next.slug}`}
          className="group block"
          aria-label={`${dict.work.nextProject}: ${nextCopy.title}`}
        >
          <div className="container-page grid items-center gap-8 py-14 md:grid-cols-[1fr_auto] md:py-20">
            <div>
              <p className="type-eyebrow text-fg-muted">
                {dict.work.nextProject}
              </p>
              <h2 className="mt-4 max-w-[20ch] type-h2 text-balance transition-colors group-hover:text-accent">
                {nextCopy.title}
              </h2>
              <p className="mt-3 type-caption text-fg-muted">
                {nextCopy.client} · {next.year}
              </p>
            </div>
            <ProjectCover
              project={next}
              className="aspect-[4/3] w-full rounded-[var(--radius)] transition-transform duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03] md:w-64"
            />
          </div>
        </Link>
      </section>

      <div className="container-page py-16">
        <ButtonLink href={`/${locale}/work`} variant="secondary">
          {dict.work.allProjects}
        </ButtonLink>
      </div>
    </article>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="type-eyebrow text-fg-muted">{label}</dt>
      <dd className="mt-2 type-body text-fg-secondary">{value}</dd>
    </div>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <Reveal as="section">
      <h2 className="type-eyebrow text-fg-muted">{title}</h2>
      <p className="mt-5 max-w-[60ch] type-lead text-fg-secondary">{body}</p>
    </Reveal>
  );
}
