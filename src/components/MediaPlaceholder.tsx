type Props = {
  /** Which icon to show. */
  kind: "video" | "youtube";
  /** Short subject / purpose, e.g. "Short silent clip". */
  hint: string;
  /** Where to put the file, or what to fill in. */
  detail: string;
  label: string;
  className?: string;
};

/** Dashed placeholder used until a video file or YouTube ID is supplied. */
export default function MediaPlaceholder({
  kind,
  hint,
  detail,
  label,
  className = "",
}: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-1 overflow-hidden border border-dashed border-gold/60 bg-ivory-deep p-3 text-center ${className}`}
      role="img"
      aria-label={`Video placeholder: ${label}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/70 text-gold">
        <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M8 5.5v13l11-6.500-11-6.500Z" />
        </svg>
      </span>
      <span className="mt-1 text-[11px] font-medium uppercase tracking-wider text-earth-soft">
        {kind === "youtube" ? "YouTube video" : "Short video"} · {hint}
      </span>
      <code className="max-w-full truncate text-[10px] text-forest/70">{detail}</code>
    </div>
  );
}
