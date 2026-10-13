import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { Container, PageHero } from "@/components/ui";
import { posts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Insights for a meaningful life.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog / Resources" title="Insights for a meaningful life." />
      <Container className="max-w-3xl py-14">
        <ul className="divide-y divide-gold/25">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex items-center gap-5 py-5"
              >
                <Photo
                  name={p.image}
                  sizes="160px"
                  className="h-20 w-28 shrink-0 rounded-sm"
                />
                <div>
                  <h2 className="font-heading text-lg text-forest group-hover:text-gold">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-xs text-earth-soft">{p.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
