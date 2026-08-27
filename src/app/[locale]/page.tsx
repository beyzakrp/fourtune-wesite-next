import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { featuredProjects, projects } from "@/lib/content/projects";
import {
  homeHeroCarouselPhotos,
  homeStoryPhoto,
  homeTrustPhotos,
} from "@/lib/content/photos";
import { site } from "@/lib/site";

import { Hero } from "@/components/sections/hero";
import { Showreel } from "@/components/sections/showreel";
import { TrustBand } from "@/components/sections/trust-band";
import { ProgramList } from "@/components/sections/program-list";
import { StoryPreview } from "@/components/sections/story-preview";
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
  const showBrandStrip = false;

  /* The sections share project metadata but own separate photography maps, so
     replacing an image in one composition cannot silently change another. */
  const heroSlides = featuredProjects.map((p) => ({
    id: p.id,
    palette: p.palette,
    mark: p.mark,
    photo: homeHeroCarouselPhotos[p.id]?.src,
    eyebrow: dict.projects[p.id].client,
    title: dict.projects[p.id].category,
    cta: dict.work.viewCase,
    href: `${base}/work/${p.slug}`,
  }));

  const trustSlides = projects.slice(0, 3).map((p) => ({
    id: p.id,
    palette: p.palette,
    mark: p.mark,
    photo: homeTrustPhotos[p.id]?.front.src,
    backPhoto: homeTrustPhotos[p.id]?.back.src,
    name: dict.projects[p.id].client,
    role: dict.projects[p.id].category,
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
        badge={{ value: "360°", label: "360° Marketing" }}
        card={{ index: "#01", title: dict.intro.title, body: dict.intro.body }}
        slides={trustSlides}
        previousLabel={dict.a11y.previous}
        nextLabel={dict.a11y.next}
      />

      {showBrandStrip ? (
        <section aria-label={dict.marquee.label} className="band-soft mt-3 py-10">
          <VelocityMarquee
            items={dict.marquee.items}
            itemClassName="mx-8 type-h3 text-fg-muted md:mx-12"
            pauseLabel={dict.a11y.pauseMarquee}
            playLabel={dict.a11y.playMarquee}
          />
        </section>
      ) : null}

      {/* Programs */}
      <section
        id="programs"
        className="band-soft relative isolate mt-3 overflow-hidden section-x py-24"
      >
        <Image
          src="/Brand-Icon.svg"
          alt=""
          width={560}
          height={560}
          aria-hidden
          className="pointer-events-none absolute -right-[2%] -top-[5%] z-0 w-[clamp(18rem,38vw,35rem)] -rotate-12 select-none opacity-[0.07] dark:opacity-[0.1]"
        />
        <div className="relative z-10">
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
        </div>
      </section>

      {/* A compact introduction to the studio, with the full story one level
          deeper on its own page. */}
      <section
        id="story"
        className="-mt-10 overflow-hidden rounded-[var(--radius-lg)] bg-bg section-x py-20 md:py-28"
        style={{ marginTop: "30px" }}
      >
        <StoryPreview
          eyebrow={dict.studio.previewEyebrow}
          titleLines={[dict.studio.previewTitle]}
          body={dict.studio.lead}
          image={homeStoryPhoto}
          href={`${base}/studio`}
          action={dict.studio.previewAction}
        />
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
