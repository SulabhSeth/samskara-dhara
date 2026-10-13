import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import LoopVideo from "./LoopVideo";
import MediaPlaceholder from "./MediaPlaceholder";

type Props = {
  /**
   * File name without extension, inside /public/videos/.
   * `<name>.mp4` is the clip, `<name>.jpg` is its poster (or a still photo
   * if no mp4 exists).
   */
  name: string;
  /** Accessible description of the clip. */
  label: string;
  /** Short note shown on the placeholder. */
  hint?: string;
  className?: string;
  sizes?: string;
  /** Show play/pause button (turn off inside links). */
  controls?: boolean;
};

function exists(file: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "videos", file));
  } catch {
    return false;
  }
}

/**
 * Plays /public/videos/<name>.mp4 as a muted loop when it exists; falls back to
 * /public/videos/<name>.jpg as a photo; otherwise shows a labelled placeholder.
 */
export default function Clip({
  name,
  label,
  hint = "5–15 s, silent",
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  controls = true,
}: Props) {
  const mp4 = `${name}.mp4`;
  const jpg = `${name}.jpg`;

  if (exists(mp4)) {
    return (
      <LoopVideo
        src={`/videos/${mp4}`}
        poster={exists(jpg) ? `/videos/${jpg}` : undefined}
        label={label}
        className={className}
        controls={controls}
      />
    );
  }

  if (exists(jpg)) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={`/videos/${jpg}`}
          alt={label}
          fill
          sizes={sizes}
          quality={90}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <MediaPlaceholder
      kind="video"
      hint={hint}
      detail={`public/videos/${mp4}`}
      label={label}
      className={className}
    />
  );
}
