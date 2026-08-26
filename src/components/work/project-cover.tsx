import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/content/projects";
import { projectPhotos } from "@/lib/content/photos";

/**
 * A project's visual: its photograph laid over the colour mesh generated from
 * its own palette.
 *
 * The mesh is not a placeholder to be removed once the photo loads — it stays
 * underneath as the ground. That is what keeps six different photographs
 * reading as one family, and it means a slow or failed image degrades to a
 * branded panel rather than to a grey box.
 *
 * The whole cover is `aria-hidden`: every place it appears, the project's name
 * and summary are already in the markup beside it, so announcing the image
 * again would only add noise.
 */
export function ProjectCover({
  project,
  className,
  showMark = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  project: Project;
  className?: string;
  showMark?: boolean;
  sizes?: string;
  priority?: boolean;
}) {
  const [a, b, base] = project.palette;
  const photo = projectPhotos[project.id];

  /* Only the colour stops are inline — the gradients that consume them live in
     globals.css as `.palette-*`. The alpha suffixes are part of the data: they
     are how strongly each stop washes over the photograph. */
  const palette = {
    "--c1": `${a}cc`,
    "--c2": `${b}aa`,
    "--c3": base,
  } as CSSProperties;

  return (
    <div
      aria-hidden
      className={`palette-ground relative isolate overflow-hidden ${className ?? ""}`}
      style={palette}
    >
      <Image
        src={photo.src}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />

      {/* The palette wash, multiplied over the photograph so the colour reads
          as light in the room rather than as a filter sitting on top. */}
      <div
        className="palette-mesh-deep absolute inset-0 mix-blend-multiply"
        style={{ "--c3": `${base}dd` } as CSSProperties}
      />
      <div
        className="palette-veil absolute inset-0"
        style={{ "--c3": `${base}99` } as CSSProperties}
      />

      {showMark ? (
        <span className="cover-mark absolute bottom-5 left-6 font-semibold text-white/90">
          {project.mark}
        </span>
      ) : null}
    </div>
  );
}
