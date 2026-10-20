"use client";

import Link from "next/link";
import { useState } from "react";
import DescriptionBlocks from "@/components/DescriptionBlocks";
import { SmallLotus } from "@/components/Icons";
import type { SamskaraGroup } from "@/data/samskaraContent";

/** Grouped accordion: click a samskara to read its description. One open at a time. */
export default function SamskaraAccordion({
  groups,
}: {
  groups: SamskaraGroup[];
}) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {groups.map((group, gi) => (
        <div key={group.title}>
          <div className="mb-3 flex items-center gap-4">
            <h3 className="font-heading text-xl">{group.title}</h3>
            <span
              aria-hidden
              className="h-px flex-1 bg-gold/30"
            />
          </div>

          <ul className="divide-y divide-gold/25 overflow-hidden rounded-md border border-gold/30 bg-ivory">
            {group.items.map((item, ii) => {
              const id = `samskara-${gi}-${ii}`;
              const isOpen = open === id;

              return (
                <li key={id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel`}
                    onClick={() => setOpen(isOpen ? null : id)}
                    className={`flex w-full items-center gap-4 px-5 py-4 text-left text-forest transition-colors hover:bg-ivory-deep/60 ${
                      isOpen ? "bg-ivory-deep/60" : ""
                    }`}
                  >
                    <SmallLotus className="h-5 w-5 shrink-0 text-gold" />

                    <span className="flex-1 text-base sm:text-lg">
                      {item.name}
                    </span>

                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id={`${id}-panel`}
                    role="region"
                    aria-label={item.name}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gold/20 bg-ivory-deep/30 px-5 pb-6 pt-5 sm:pl-14 sm:pr-6">
                        <DescriptionBlocks description={item.description} />

                        <div className="mt-6 border-t border-gold/25 pt-4">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 text-sm font-medium text-forest underline-offset-4 hover:text-gold hover:underline"
                          >
                            Enquire about this samskara <span aria-hidden>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
