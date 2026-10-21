/**
 * Building blocks for samskara descriptions.
 * A description can be a plain string (paragraphs separated by a blank line)
 * or an array of these blocks for a richer layout.
 */
export type Block =
  /** A normal paragraph. */
  | { type: "p"; text: string }
  /** A section heading, with an optional small gold label above it. */
  | { type: "heading"; title: string; eyebrow?: string }
  /** Cards with a row of day "chips" in each (e.g. auspicious days). */
  | {
      type: "dayGroups";
      caption?: string;
      groups: { label: string; days: string[]; tone?: "forest" | "gold" }[];
    }
  /** Highlighted box with a short bulleted list. */
  | { type: "callout"; title: string; items: string[] }
  /** Numbered cards, each with a name and a short explanation. */
  | {
      type: "terms";
      intro?: string;
      items: { name: string; text: string; badge?: string; highlight?: boolean }[];
      outro?: string;
    }
  /** Collapsible timeline of scripture passages, each with its reference. */
  | {
      type: "passages";
      eyebrow: string;
      title: string;
      intro?: string;
      footnote?: string;
      items: { title: string; reference: string; text: string; milestone?: string }[];
    }
  /** Numbered mantra cards: the mantra in large type, what to do beneath. */
  | {
      type: "mantraSteps";
      title?: string;
      intro?: string;
      /** Number shown on the first card (default 1). */
      startAt?: number;
      items: { mantra: string; action: string; suffix?: string }[];
    }
  /** A Sanskrit / Bengali verse, centred, with optional translation and reference. */
  | {
      type: "verse";
      /** Small gold label above the verse, e.g. "Lord Caitanya". */
      title?: string;
      lines: string[];
      translation?: string;
      reference?: string;
    }
  /** A titled box that opens and closes, holding more blocks. */
  | { type: "collapsible"; title: string; summary?: string; blocks: Block[] };
