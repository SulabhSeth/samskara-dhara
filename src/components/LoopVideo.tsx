"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
  /** Show the small play/pause button. Turn off when the video sits inside a link. */
  controls?: boolean;
};

/**
 * Short, silent, looping clip. Plays only while on screen, and not at all
 * when the visitor prefers reduced motion (they can start it manually).
 */
export default function LoopVideo({
  src,
  poster,
  label,
  className = "",
  controls = true,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <div className={`relative overflow-hidden bg-forest-dark ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {controls && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause video: ${label}` : `Play video: ${label}`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/70 bg-forest-dark/60 text-ivory backdrop-blur transition-colors hover:bg-forest-dark"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            {playing ? (
              <path d="M7 5h3.500v14H7V5Zm6.500 0H17v14h-3.500V5Z" />
            ) : (
              <path d="M8 5.500v13l11-6.500-11-6.500Z" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}
