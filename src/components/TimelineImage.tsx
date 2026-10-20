import fs from "node:fs";
import path from "node:path";
import ZoomImage from "./ZoomImage";

type Props = {
  /** File inside /public/images/ */
  file: string;
  alt: string;
};

function exists(file: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "images", file));
  } catch {
    return false;
  }
}

/** Zoomable timeline image, or a placeholder until the file is added. */
export default function TimelineImage({ file, alt }: Props) {
  if (exists(file)) return <ZoomImage src={`/images/${file}`} alt={alt} />;

  return (
    <div
      className="flex aspect-[16/7] w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-gold/60 bg-ivory-deep p-4 text-center"
      role="img"
      aria-label={`Image placeholder: ${alt}`}
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.8" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </svg>
      <span className="text-[11px] font-medium uppercase tracking-wider text-earth-soft">
        Samskara timeline · wide image, 2400 px or wider
      </span>
      <code className="text-[10px] text-forest/70">public/images/{file}</code>
    </div>
  );
}
