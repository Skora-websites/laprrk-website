import type { PageData } from "./types";
import { SERVICE_PAGES } from "./services";
import { HIRING_PAGES } from "./hiring";
import { TRAINING_PAGES } from "./training";
import { COMPANY_PAGES } from "./company";

export const PAGES: Record<string, PageData> = {
  ...SERVICE_PAGES,
  ...HIRING_PAGES,
  ...TRAINING_PAGES,
  ...COMPANY_PAGES,
};

export function getPage(slug: string): PageData {
  const hit = PAGES[slug];
  if (hit) return hit;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    slug,
    title,
    description: `${title} | Laprrk Technology Solutions`,
    eyebrow: "Laprrk",
    lede: "Talk to us about this requirement and we will respond with a written proposal.",
    blocks: [],
    related: [
      { label: "IT Services", href: "it-services.html" },
      { label: "Hiring Consultation", href: "hiring-consultation.html" },
      { label: "Corporate Training", href: "corporate-training.html" },
    ],
  };
}
