import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { images, type ImageKey } from "@/data/images";

type Props = {
  /** Slot name from src/data/images.ts */
  name: ImageKey;
  /** Sizing/shape classes, e.g. "h-48 w-full" or "aspect-[4/3] w-full". */
  className?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  priority?: boolean;
  /** Render nothing (instead of a placeholder) while the file is missing. */
  hideIfMissing?: boolean;
};

function exists(file: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "images", file));
  } catch {
    return false;
  }
}

/**
 * Shows /public/images/<file> when it exists, otherwise a clearly labelled
 * placeholder that tells you which file to add and at what size.
 */
export default function Photo({
  name,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  hideIfMissing = false,
}: Props) {
  const slot = images[name];

  if (exists(slot.file)) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={`/images/${slot.file}`}
          alt={slot.alt}
          fill
          sizes={sizes}
          quality={90}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  if (hideIfMissing) return null;

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-1 overflow-hidden border border-dashed border-gold/60 bg-ivory-deep p-3 text-center ${className}`}
      role="img"
      aria-label={`Image placeholder: ${slot.alt}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.8" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-wider text-earth-soft">
        {slot.hint}
      </span>
      <span className="text-[11px] text-earth-soft/80">{slot.size} px</span>
      <code className="max-w-full truncate text-[10px] text-forest/70">
        public/images/{slot.file}
      </code>
    </div>
  );
}
