import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export type ProgramRow = {
  id: string;
  index: string;
  name: string;
  href: string;
};

const highlights: Record<string, string[]> = {
  "digital-strategy": ["Audience Research", "Channel Strategy", "Digital Roadmap"],
  "social-media": ["Content Strategy", "Community Management", "Social Listening"],
  "creative-content": ["Campaign Creative", "Video Production", "AI Content"],
  "performance-marketing": ["Meta & Google Ads", "SEO", "CRO"],
  "web-digital-experience": ["UI/UX", "Web Development", "E-Commerce"],
};

export function ProgramList({ rows }: { rows: ProgramRow[] }) {
  return (
    <ul className="mt-10 border-t border-line md:mt-14">
      {rows.map((row, index) => (
        <Reveal as="li" key={row.id} index={index} distance={14} amount={0.15} className="border-b border-line">
          <Link
            href={row.href}
            className="group grid grid-cols-[1.5rem_minmax(0,1fr)_2.5rem] items-center gap-x-3 gap-y-3 py-6 transition-colors duration-300 hover:bg-bg/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:gap-x-5 sm:py-8 lg:grid-cols-[2rem_minmax(0,1fr)_minmax(12rem,0.65fr)_2.5rem]"
          >
            <span className="self-start pt-2 text-xs tabular-nums text-fg-muted lg:self-center lg:pt-0">{row.index}</span>
            <h3 className="text-[clamp(1.375rem,2.6vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.035em] transition-colors duration-300 group-hover:text-accent">
              {row.name}
            </h3>
            <span className="col-start-2 row-start-2 max-w-[36ch] text-xs leading-relaxed text-fg-muted sm:text-sm lg:col-start-3 lg:row-start-1">
              {highlights[row.id]?.join(" · ")}
            </span>
            <span aria-hidden="true" className="col-start-3 row-start-1 grid size-10 place-items-center rounded-full border border-line text-fg-secondary transition-colors duration-300 group-hover:border-fg group-hover:bg-fg group-hover:text-bg lg:col-start-4">
              <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-300 motion-safe:group-hover:-rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
