"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Quote } from "@/data/samskaraContent";

type Props = {
  title: string;
  intro: string;
  quotes: Quote[];
};

/** Banner card that opens a dialog with the quotes, one at a time. */
export default function QuotesCard({ title, intro, quotes }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const count = quotes.length;
  const quote = quotes[index];

  const open = () => {
    setIndex(0);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  function onKeyDown(e: KeyboardEvent<HTMLDialogElement>) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  return (
    <>
            <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="group relative block w-full overflow-hidden rounded-md bg-forest px-6 py-9 text-left text-ivory shadow-sm transition-colors hover:bg-forest-dark sm:px-10"
      >
        <div className="flex items-center justify-between gap-6">
          <div className="flex-1">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 right-6 font-heading text-[9rem] leading-none text-gold/25"
            >
              &rdquo;
            </span>
            <span className="relative block text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              Words of Srila Prabhupada
            </span>
            <span className="relative mt-3 block font-heading text-2xl sm:text-3xl">
              {title}
            </span>
            <span className="relative mt-3 block max-w-xl text-sm leading-relaxed text-ivory/80">
              {intro}
            </span>
            <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-light">
              Read the quotes
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>

          {/* Image placeholder: replace with your image in /public/images */}
          <div className="relative hidden h-48 w-44 shrink-0 overflow-hidden rounded-md sm:block">
            <img
              src="/images/prabhupada.jpg"
              alt="Srila Prabhupada"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </button>

      <dialog
        ref={dialog}
        aria-labelledby="quotes-title"
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        className="m-auto w-[min(92vw,44rem)] rounded-md border border-gold/50 bg-ivory p-0 text-earth backdrop:bg-forest-dark/70"
      >
        <div className="p-6 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <p
              id="quotes-title"
              className="text-xs font-medium uppercase tracking-[0.25em] text-gold"
            >
              {title}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close quotes"
              className="-m-2 rounded p-2 text-forest hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <blockquote className="mt-8 min-h-48" aria-live="polite">
            <p className="font-heading text-xl italic leading-relaxed text-forest sm:text-2xl">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="mt-5 text-sm text-earth-soft">
              — Srila Prabhupada, {quote.source}
            </footer>
          </blockquote>

          <div className="mt-8 flex items-center justify-between border-t border-gold/30 pt-5">
            <button
              type="button"
              onClick={prev}
              className="rounded-sm border border-forest/40 px-4 py-2 text-sm text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              ← Previous
            </button>
            <span className="text-xs text-earth-soft">
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={next}
              className="rounded-sm border border-forest/40 px-4 py-2 text-sm text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              Next →
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
