"use client";

import Link from "next/link";
import type { Project } from "@/lib/content/projects";
import { ProjectCover } from "./project-cover";
import { TiltCard } from "@/components/motion/tilt-card";
import { Reveal } from "@/components/motion/reveal";

export type WorkCardCopy = {
  title: string;
  client: string;
  category: string;
  summary: string;
};

export function WorkCard({
  project,
  copy,
  href,
  viewCase,
  index = 0,
  wide = false,
}: {
  project: Project;
  copy: WorkCardCopy;
  href: string;
  viewCase: string;
  index?: number;
  wide?: boolean;
}) {
  return (
    <Reveal as="article" index={index} amount={0.15} className={wide ? "md:col-span-2" : ""}>
      <TiltCard className="relative h-full rounded-[var(--radius-lg)]" max={4}>
        <Link
          href={href}
          className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line bg-bg-elevated"
        >
          <div className="relative overflow-hidden">
            {/* Driven by the group, not by its own hover, so pointing at the
                text moves the cover too — the whole card is one object. */}
            <div className="motion-travel transition-transform duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]">
              <ProjectCover
                project={project}
                className={wide ? "aspect-[16/8]" : "aspect-[4/3]"}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6 md:p-8">
            <p className="flex items-center gap-2 type-caption text-fg-muted">
              <span>{copy.client}</span>
              <span aria-hidden>·</span>
              <span>{copy.category}</span>
              <span aria-hidden>·</span>
              <span className="tabular-nums">{project.year}</span>
            </p>

            <h3 className="mt-3 max-w-[22ch] type-h3 text-balance transition-colors group-hover:text-accent">
              {copy.title}
            </h3>

            <p className="mt-4 max-w-[52ch] type-body text-fg-muted">
              {copy.summary}
            </p>

            <span className="mt-6 flex items-center gap-2 type-caption font-medium text-fg-secondary transition-colors group-hover:text-fg">
              {viewCase}
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </Link>
      </TiltCard>
    </Reveal>
  );
}
