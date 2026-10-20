import { samskaras } from "./site";

export type ServiceDetail = {
  /** What the service includes — shown as a list on the service page. */
  includes: string[];
  /** Optional longer film on YouTube (paste the video ID, e.g. "dQw4w9WgXcQ"). */
  
  /** Extra link shown beside the "Get in Touch" button. */
  related?: { label: string; href: string };
  glimpses?: boolean;
};

/**
 * Keyed by service id (see `services` in site.ts).
 *
 * Media files for each service live in /public/videos/ and are named after the id:
 *   <id>.mp4 (+ <id>.jpg poster)      main short loop (also used on the home page)
 *   <id>-1 / -2 / -3 (.mp4 or .jpg)   three glimpses
 */
export const serviceDetails: Record<string, ServiceDetail> = {
  samskaras: {
    includes: samskaras,
    
    // related: { label: "See all samskaras", href: "/samskaras" },
    glimpses: true,
  },
  "home-deity-worship": {
    includes: [
      "Establishing deity worship at home",
      "Basic daily worship routines",
      "Elaborate worship, offerings and etiquette",
      "Guidance suited to your family and space",
    ],
    
    related: { label: "View seminars & courses", href: "/seminars" },
  },
  "family-life-ashram": {
    includes: [
      "Grhastha ashram — culture and values",
      "Harmonising family life with spiritual practice",
      "Daily household routines",
      "Guidance for families at different stages of life",
    ],
    
    related: { label: "View seminars & courses", href: "/seminars" },
  },
  education: {
    includes: [
      "Bhagavad Gita — overview and detailed study",
      "Selected ISKCON spiritual books",
      "Seminars and structured courses",
    ],
    
    related: { label: "View seminars & courses", href: "/seminars" },
  },
  counselling: {
    includes: [
      "Personal guidance for your spiritual journey",
      "Family and life decisions",
      "One-to-one conversations, in person or online",
    ],
    
  },
};
