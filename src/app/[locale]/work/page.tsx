import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { projects } from "@/lib/content/projects";

import { PageIntro } from "@/components/sections/section-heading";
import { WorkCard } from "@/components/work/work-card";

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
  return { title: dict.nav.work, description: dict.work.lead };
}

export default async function WorkPage({
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
        eyebrow={dict.work.eyebrow}
        title={dict.work.title}
        lead={dict.work.lead}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              /* Every third card runs full width so the grid has a rhythm
                 rather than a uniform wall of tiles. */
              wide={index % 3 === 0}
              href={`/${locale}/work/${project.slug}`}
              viewCase={dict.work.viewCase}
              copy={{
                title: dict.projects[project.id].title,
                client: dict.projects[project.id].client,
                category: dict.projects[project.id].category,
                summary: dict.projects[project.id].summary,
              }}
            />
          ))}
        </div>
      </section>

    </>
  );
}
