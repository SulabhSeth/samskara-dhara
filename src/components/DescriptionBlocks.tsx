import { SmallLotus } from "@/components/Icons";
import type { Block } from "@/data/blocks";

const body = "text-[15px] leading-8 text-earth-soft sm:text-base";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className={body}>
          {block.text}
        </p>
      );

    case "heading":
      return (
        <div key={i} className="pt-2">
          {block.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {block.eyebrow}
            </p>
          )}
          <h4 className="font-heading text-xl text-forest sm:text-2xl">{block.title}</h4>
          <span aria-hidden className="mt-2 block h-px w-14 bg-gold/60" />
        </div>
      );

    case "dayGroups":
      return (
        <div key={i}>
          {block.caption && (
            <p className="text-sm italic text-earth-soft">{block.caption}</p>
          )}
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {block.groups.map((g) => (
              <div
                key={g.label}
                className={`rounded-xl border p-5 ${
                  g.tone === "gold"
                    ? "border-gold/40 bg-gold/[0.10]"
                    : "border-forest/20 bg-forest/[0.05]"
                }`}
              >
                <p className="font-heading text-lg text-forest">{g.label}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.days.map((d) => (
                    <li
                      key={d}
                      className="inline-flex h-10 min-w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory px-3 text-sm font-semibold text-forest"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case "callout":
      return (
        <aside
          key={i}
          className="rounded-xl border border-gold/50 bg-[#f7efd9] p-5"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/25 text-forest"
            >
              ✧
            </span>
            <p className="font-heading text-lg text-forest">{block.title}</p>
          </div>
          <ul className="mt-3 space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-7 text-earth-soft">
                <SmallLotus className="mt-1.5 h-4 w-4 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      );

    case "terms":
      return (
        <div key={i} className="space-y-4">
          {block.intro && <p className={body}>{block.intro}</p>}
          <ol className="space-y-3">
            {block.items.map((t, n) => (
              <li
                key={t.name}
                className={`flex gap-4 rounded-xl border p-4 sm:p-5 ${
                  t.highlight
                    ? "border-gold/60 bg-gold/[0.10]"
                    : "border-gold/30 bg-ivory"
                }`}
              >
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-semibold text-ivory"
                >
                  {n + 1}
                </span>
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-heading text-lg text-forest">
                    {t.name}
                    {t.badge && (
                      <span className="rounded-full border border-gold/60 bg-ivory px-2.5 py-0.5 font-body text-[11px] font-semibold uppercase tracking-wider text-gold">
                        {t.badge}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-[15px] leading-7 text-earth-soft">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
          {block.outro && <p className={body}>{block.outro}</p>}
        </div>
      );

    case "passages":
      return (
        <details
          key={i}
          className="group overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-ivory via-[#fbf6e9] to-[#f3ead5]"
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory text-xl text-forest"
            >
              ❋
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {block.eyebrow}
              </span>
              <span className="mt-1 block font-heading text-2xl text-forest sm:text-3xl">
                {block.title}
              </span>
              <span className="mt-1 block text-sm text-earth-soft">
                {block.items.length} passages · tap to {" "}
                <span className="group-open:hidden">read</span>
                <span className="hidden group-open:inline">hide</span>
              </span>
            </span>
            <Chevron className="group-open:rotate-180" />
          </summary>

          <div className="border-t border-gold/25 px-4 pb-6 pt-5 sm:px-6">
            {block.intro && <p className={`${body} max-w-2xl`}>{block.intro}</p>}

            <ol className="relative mt-7 space-y-8 border-l border-gold/40 pl-5 sm:pl-8">
              {block.items.map((p, n) => (
                <li key={p.reference} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[34px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-forest text-[11px] font-semibold text-ivory ring-4 ring-[#fbf6e9] sm:-left-[46px]"
                  >
                    {n + 1}
                  </span>
                  {p.milestone && (
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      {p.milestone}
                    </p>
                  )}
                  <h5 className="font-heading text-lg text-forest sm:text-xl">{p.title}</h5>
                  <blockquote className={`${body} mt-2 border-l-2 border-gold/50 pl-3 sm:pl-4`}>
                    {p.text}
                  </blockquote>
                  <p className="mt-3 inline-flex rounded-full border border-forest/15 bg-forest/[0.05] px-3 py-1 text-xs font-semibold text-forest">
                    Śrīmad-Bhāgavatam {p.reference}
                  </p>
                </li>
              ))}
            </ol>

            {block.footnote && (
              <p className="mt-8 border-t border-gold/25 pt-4 text-xs leading-relaxed text-earth-soft">
                {block.footnote}
              </p>
            )}
          </div>
        </details>
      );
  }
}

/** Renders a samskara description: plain text or a list of rich blocks. */
export default function DescriptionBlocks({
  description,
}: {
  description: string | Block[];
}) {
  const blocks: Block[] =
    typeof description === "string"
      ? description
          .split(/\n\s*\n/)
          .map((t) => t.trim())
          .filter(Boolean)
          .map((text) => ({ type: "p" as const, text }))
      : description;

  return <div className="space-y-6">{blocks.map(renderBlock)}</div>;
}
