import Link from "next/link";
import { cacheLife } from "next/cache";
import Logo from "./Logo";
import { SocialIcon } from "./Icons";
import { nav, site } from "@/data/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/30 bg-ivory-deep/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-12 text-center sm:px-8">
        <Logo className="h-14 w-auto" />
        <p className="mt-3 font-heading text-2xl text-forest">{site.name}</p>
        <p className="font-deva text-earth-soft">{site.devanagari}</p>
        <p className="mt-2 font-heading text-sm italic text-earth-soft">
          {site.tagline}
        </p>

        <div className="mt-6 flex gap-4 text-forest">
          {(Object.keys(site.social) as (keyof typeof site.social)[]).map((k) => (
            <a
              key={k}
              href={site.social[k]}
              aria-label={k}
              className="rounded-full border border-forest/30 p-2 transition-colors hover:bg-forest hover:text-ivory"
            >
              <SocialIcon name={k} />
            </a>
          ))}
        </div>

        <nav aria-label="Footer" className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-earth-soft">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
          <Link href="/donations" className="hover:text-gold">
            Donations
          </Link>
        </nav>

        <p className="mt-6 text-xs text-earth-soft/80">
          © <CopyrightYear /> {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
