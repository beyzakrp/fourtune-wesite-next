import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { featuredProjects, projects } from "@/lib/content/projects";
import { projectPhotos } from "@/lib/content/photos";
import { site } from "@/lib/site";

import { Hero } from "@/components/sections/hero";
import { Showreel } from "@/components/sections/showreel";
import { TrustBand } from "@/components/sections/trust-band";
import { ProgramList } from "@/components/sections/program-list";
import { FacilitiesBlock } from "@/components/sections/facilities-block";
import { StatsBand } from "@/components/sections/stats-band";
import { Testimonials } from "@/components/sections/testimonials";
import { Process } from "@/components/sections/process";
import { SectionHeading } from "@/components/sections/section-heading";
import { VelocityMarquee } from "@/components/motion/velocity-marquee";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const base = `/${locale}`;

  /* Both carousels and the tile pair read from the same project list, so
     nothing on this page is invented content that would drift from /work. */
  const heroSlides = featuredProjects.map((p) => ({
    id: p.id,
    palette: p.palette,
    mark: p.mark,
    photo: projectPhotos[p.id].src,
    eyebrow: dict.projects[p.id].client,
    title: dict.projects[p.id].category,
    cta: dict.work.viewCase,
    href: `${base}/work/${p.slug}`,
  }));

  const trustSlides = projects.slice(0, 3).map((p) => ({
    id: p.id,
    palette: p.palette,
    mark: p.mark,
    photo: projectPhotos[p.id].src,
    name: dict.projects[p.id].client,
    role: dict.projects[p.id].category,
  }));

  const tiles = featuredProjects.slice(0, 2).map((p, i) => ({
    id: p.id,
    href: `${base}/work/${p.slug}`,
    palette: p.palette,
    mark: p.mark,
    photo: projectPhotos[p.id].src,
    name: dict.projects[p.id].title,
    description: dict.projects[p.id].summary,
    tone: (i === 0 ? "warm" : "cool") as "warm" | "cool",
  }));

  const programRows = dict.services.items.slice(0, 4).map((item, i) => ({
    id: item.id,
    index: String(i + 1).padStart(2, "0"),
    name: item.title,
    description: item.summary,
    href: `${base}/services`,
  }));

  return (
    <>
      <Hero
        copy={dict.hero}
        workHref={`${base}/work`}
        contactHref={`${base}/contact`}
        slides={heroSlides}
        slidesLabel={dict.work.eyebrow}
        stat={dict.intro.stats[1]}
      />

      <Showreel
        src={site.media.promoHero}
        label={dict.showreel.label}
        pauseLabel={dict.a11y.pauseVideo}
        playLabel={dict.a11y.playVideo}
        muteLabel={dict.a11y.muteVideo}
        unmuteLabel={dict.a11y.unmuteVideo}
      />

      <TrustBand
        label={dict.ghost.label}
        sets={dict.ghost.sets}
        badge={{ value: "100%", label: dict.intro.eyebrow }}
        card={{ index: "#01", title: dict.intro.title, body: dict.intro.body }}
        slides={trustSlides}
        previousLabel={dict.a11y.previous}
        nextLabel={dict.a11y.next}
      />

      <section aria-label={dict.marquee.label} className="band-soft mt-3 py-10">
        <VelocityMarquee
          items={dict.marquee.items}
          itemClassName="mx-8 type-h3 text-fg-muted md:mx-12"
          pauseLabel={dict.a11y.pauseMarquee}
          playLabel={dict.a11y.playMarquee}
        />
      </section>

      {/* Programs */}
      <section
        id="programs"
        className="band-soft mt-3 section-x py-24"
      >
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
        />
        <ProgramList rows={programRows} />
        <Reveal className="mt-12">
          <ButtonLink href={`${base}/services`} variant="secondary">
            {dict.nav.services}
          </ButtonLink>
        </Reveal>
      </section>

      {/* Facilities — overlaps up onto the surface above, so the rounded top
          edge reads as a reveal rather than a seam. */}
      <section
        id="work"
        className="-mt-10 rounded-[var(--radius-lg)] bg-bg section-x pb-20 pt-16"
      >
        <FacilitiesBlock
          titleLines={splitLines(dict.work.title)}
          body={dict.work.lead}
          tiles={tiles}
          markPalette={featuredProjects[0].palette}
          markPhoto={projectPhotos[featuredProjects[2].id].src}
        />
        <Reveal className="mt-12">
          <ButtonLink href={`${base}/work`} variant="secondary">
            {dict.work.viewAll}
          </ButtonLink>
        </Reveal>
      </section>

      <div className="band-soft mt-3 section-x py-20">
        <Process
          eyebrow={dict.process.eyebrow}
          title={dict.process.title}
          lead={dict.process.lead}
          steps={dict.process.steps}
        />
      </div>

      <StatsBand
        eyebrow={dict.intro.eyebrow}
        titleLines={splitLines(dict.intro.title)}
        stats={dict.intro.stats}
      />

      <Testimonials
        eyebrow={dict.testimonials.eyebrow}
        title={dict.testimonials.title}
        items={dict.testimonials.items}
      />
    </>
  );
}

/** Break a headline at its midpoint so it stacks like the other section titles. */
function splitLines(title: string): string[] {
  const words = title.split(" ");
  if (words.length < 3) return [title];
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(" "), words.slice(cut).join(" ")];
}
