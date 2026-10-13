import fs from "node:fs";
import path from "node:path";
import MediaPlaceholder from "./MediaPlaceholder";

type Props = {
  /**
   * File name without extension, inside /public/videos/.
   * `<name>.mp4` is the video, `<name>.jpg` is the optional cover image.
   */
  name: string;
  title: string;
  hint?: string;
  className?: string;
};

function exists(file: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "videos", file));
  } catch {
    return false;
  }
}

/**
 * Longer self-hosted video with sound and the browser's own controls.
 * Nothing is downloaded except the first frame until the visitor presses play.
 */
export default function FullVideo({
  name,
  title,
  hint = "with sound",
  className = "aspect-video w-full",
}: Props) {
  const mp4 = `${name}.mp4`;
  const jpg = `${name}.jpg`;

  if (!exists(mp4)) {
    return (
      <MediaPlaceholder
        kind="video"
        hint={hint}
        detail={`public/videos/${mp4}`}
        label={title}
        className={className}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-forest-dark ${className}`}>
      <video
        src={`/videos/${mp4}`}
        poster={exists(jpg) ? `/videos/${jpg}` : undefined}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
