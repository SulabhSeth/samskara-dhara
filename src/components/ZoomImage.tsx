"use client";

import { useRef, useState, type PointerEvent } from "react";

type Props = {
  src: string;
  alt: string;
};

/**
 * Wide image with hover-zoom (mouse) and click / tap to open full screen.
 * In the full-screen view the image scrolls sideways on narrow screens so
 * small text stays readable.
 */
export default function ZoomImage({ src, alt }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  function onMove(e: PointerEvent<HTMLButtonElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }

  return (
    <>
      <button
        type="button"
        onPointerMove={onMove}
        onPointerLeave={() => setOrigin(null)}
        onClick={() => dialog.current?.showModal()}
        aria-label={`Enlarge image: ${alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-md border border-gold/40 bg-ivory"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full transition-transform duration-200 ease-out"
          style={
            origin
              ? { transform: "scale(2.2)", transformOrigin: `${origin.x}% ${origin.y}%` }
              : undefined
          }
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-gold/70 bg-forest-dark/70 px-3 py-1 text-xs text-ivory backdrop-blur">
          Hover to zoom · click to enlarge
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto max-h-[94vh] w-[96vw] max-w-[96vw] rounded-md border border-gold/50 bg-ivory p-0 backdrop:bg-forest-dark/80"
      >
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label="Close enlarged image"
          className="absolute right-3 top-3 z-10 rounded-full border border-gold/70 bg-forest-dark/80 p-2 text-ivory hover:bg-forest-dark"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <div className="max-h-[94vh] overflow-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="block h-auto w-full min-w-[900px]" />
        </div>
      </dialog>
    </>
  );
}
