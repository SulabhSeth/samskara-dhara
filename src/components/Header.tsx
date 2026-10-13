"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-11 w-auto" />
          <span className="leading-tight">
            <span className="block font-heading text-xl text-forest">
              {site.name}
            </span>
            <span className="block font-deva text-sm text-earth-soft">
              {site.devanagari}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                isActive(item.href)
                  ? "border-b border-gold pb-0.5 text-forest"
                  : "text-earth"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donations"
            className="rounded-sm bg-forest px-4 py-2 text-sm text-ivory transition-colors hover:bg-forest-dark"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-gold/30 bg-ivory md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {[...nav, { href: "/donations", label: "Donations" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-gold/15 py-3 text-sm ${
                    isActive(item.href) ? "text-forest" : "text-earth"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
