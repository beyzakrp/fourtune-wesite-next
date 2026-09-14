/**
 * Structural project data — everything that does *not* change per language.
 * The prose for each slug lives in the dictionaries under `projects[slug]`.
 *
 * Covers are generated from these colour stops rather than photographs, so the
 * site ships with no external image dependency and nothing can 404.
 */
export type ProjectId =
  | "be-oddly"
  | "atlas"
  | "vela"
  | "tessera"
  | "halo"
  | "fieldnotes";

export type Project = {
  id: ProjectId;
  slug: string;
  year: number;
  /** Dictionary keys into `services.items`. */
  disciplines: string[];
  /** Three stops driving the generated cover mesh. */
  palette: [string, string, string];
  /** Short mark drawn on the cover. */
  mark: string;
  featured: boolean;
};

/**
 * Every palette is drawn from the brand five — Fortune Pink, Soft Blush,
 * Fusion Blue, Midnight Ink — recombined per project. Case study covers then
 * read as a family instead of six unrelated posters.
 */
export const projects: Project[] = [
  {
    id: "be-oddly",
    slug: "be-oddly",
    year: 2026,
    disciplines: ["branding-campaign", "creative-content"],
    palette: ["#70c4bf", "#efbd4b", "#124f62"],
    mark: "BE",
    featured: true,
  },
  {
    id: "atlas",
    slug: "atlas-mobility",
    year: 2025,
    disciplines: ["strategy", "identity", "motion"],
    palette: ["#f52e63", "#fbe2dc", "#1c0a1c"],
    mark: "AT",
    featured: true,
  },
  {
    id: "vela",
    slug: "vela-commerce",
    year: 2025,
    disciplines: ["product", "engineering", "campaign"],
    palette: ["#0088ff", "#212c5e", "#04101f"],
    mark: "VE",
    featured: true,
  },
  {
    id: "tessera",
    slug: "tessera-museum",
    year: 2024,
    disciplines: ["identity", "motion", "campaign"],
    palette: ["#fbe2dc", "#f52e63", "#1a0714"],
    mark: "TE",
    featured: false,
  },
  {
    id: "halo",
    slug: "halo-audio",
    year: 2024,
    disciplines: ["strategy", "product", "motion"],
    palette: ["#212c5e", "#0088ff", "#050916"],
    mark: "HA",
    featured: false,
  },
  {
    id: "fieldnotes",
    slug: "field-notes",
    year: 2023,
    disciplines: ["identity", "campaign", "engineering"],
    palette: ["#f52e63", "#0088ff", "#150a1c"],
    mark: "FN",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
