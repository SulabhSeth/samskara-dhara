/**
 * Every photo slot on the site.
 *
 * To use a real image: save it in /public/images/ using the exact `file` name
 * below. No code change is needed — the placeholder is replaced automatically.
 * Export at 2x the recommended size (HD) as JPG or WebP; Next.js will optimise it.
 */
export type ImageKey =
  | "hero-bg"
  | "quote-banner"
  | "service-samskaras"
    | "service-home-deity-worship"
  | "service-family-life-ashram"
  | "service-education"
  | "service-counselling"
  | "seminar-krishna-home"
  | "blog-grihastha"
  | "blog-deity-worship"
  | "blog-gita"
  | "blog-samskaras";

export type ImageSlot = {
  file: string;
  alt: string;
  /** Recommended HD size in pixels, shown on the placeholder. */
  size: string;
  /** Subject suggested for the photo, shown on the placeholder. */
  hint: string;
};

export const images: Record<ImageKey, ImageSlot> = {
  "hero-bg": {
    file: "hero-bg.jpg",
    alt: "Tulasi leaves in soft golden light",
    size: "2400 × 1200",
    hint: "Soft background (optional)",
  },
  "quote-banner": {
    file: "quote-banner.jpg",
    alt: "Tulasi leaf in soft golden light",
    size: "2400 × 900",
    hint: "Tulasi leaf, warm green tones",
  },
  "service-samskaras": {
    file: "service-samskaras.jpg",
    alt: "Sacred fire ceremony with flowers",
    size: "1600 × 1200",
    hint: "Havan / sacred fire",
  },
    "service-home-deity-worship": {
    file: "service-home-deity-worship.jpg",
    alt: "Deity worship at home with flowers",
    size: "1600 × 1200",
    hint: "Home altar / deity",
  },
  "service-family-life-ashram": {
    file: "service-family-life-ashram.jpg",
    alt: "Family sitting together in devotional practice at home",
    size: "1600 × 1200",
    hint: "Family at home",
  },
  "service-education": {
    file: "service-education.jpg",
    alt: "Bhagavad Gita with tulasi beads",
    size: "1600 × 1200",
    hint: "Bhagavad Gita and beads",
  },
  "service-counselling": {
    file: "service-counselling.jpg",
    alt: "Personal spiritual guidance conversation",
    size: "1600 × 1200",
    hint: "Guidance / conversation",
  },
  "seminar-krishna-home": {
    file: "seminar-krishna-home.jpg",
    alt: "Creating a Krishna-conscious home seminar",
    size: "1200 × 1600",
    hint: "Portrait orientation",
  },
  "blog-grihastha": {
    file: "blog-grihastha.jpg",
    alt: "Family at home in devotional practice",
    size: "1600 × 1200",
    hint: "Family worship",
  },
  "blog-deity-worship": {
    file: "blog-deity-worship.jpg",
    alt: "Home deity worship",
    size: "1600 × 1200",
    hint: "Deity altar",
  },
  "blog-gita": {
    file: "blog-gita.jpg",
    alt: "Bhagavad Gita teachings for daily life",
    size: "1600 × 1200",
    hint: "Gita / study",
  },
  "blog-samskaras": {
    file: "blog-samskaras.jpg",
    alt: "Samskara ceremony",
    size: "1200 × 1600",
    hint: "Ceremony / offering",
  },
};
