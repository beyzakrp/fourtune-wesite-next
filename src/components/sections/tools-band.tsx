import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

const tools = [
  { name: "Shopify", src: "/tools-logo/shopify-logo.png", className: "h-20 w-40" },
  { name: "Meta Ads", src: "/tools-logo/meta-logo.webp", className: "h-8 w-36" },
  { name: "Google Ads", src: "/tools-logo/google-ads-logo.webp", className: "h-16 w-36" },
  { name: "Figma", src: "/tools-logo/figma-logo.webp", className: "h-16 w-32" },
  { name: "DaVinci Resolve", src: "/tools-logo/davinci-resolve-logo.webp", className: "size-20" },
  { name: "After Effects", src: "/tools-logo/after-effect-logo.webp", className: "size-10" },
];

export function ToolsBand({ copy }: { copy: Dictionary["toolsBand"] }) {


  return (
    <section aria-labelledby="tools-heading" className="mt-5 overflow-hidden rounded-[var(--radius-lg)] text-[var(--brand-ink)] section-x pb-0 pt-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 id="tools-heading" className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-medium uppercase leading-[1.02] tracking-[-0.025em]">
          {copy.title.split(/(\*\*.*?\*\*)/g).map((part, index) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <span key={index} className="font-normal normal-case italic text-[var(--brand-pink)]" style={{ fontFamily: "var(--font-instrument)" }}>{part.slice(2, -2)}</span>
            ) : part,
          )}
        </h2>
        <p className="mx-auto mt-5 text-balance text-sm leading-relaxed text-black/65 sm:text-base">
          {copy.description}
        </p>
      </Reveal>

      <div className="tools-ribbon mx-auto mt-10 max-w-6xl overflow-hidden rounded-full border border-black/[0.05] bg-[#eeece8]">
        <div className="tools-ribbon-mask">
          <div className="tools-ribbon-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className="tools-ribbon-copy flex shrink-0 items-center">
                {tools.map((tool) => (
                  <li key={tool.name} className="flex h-20 w-44 shrink-0 items-center justify-center sm:w-52">
                    <Image src={tool.src} alt={copy === 0 ? tool.name : ""} width={200} height={100} sizes="160px" className={`${tool.className} object-contain`} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-3">
        <p className="text-xs leading-relaxed tracking-[0.02em] text-black/55 sm:text-sm">{copy.footnote}</p>
      </div>
    </section>
  );
}
