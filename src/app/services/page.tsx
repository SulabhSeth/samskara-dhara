import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { Container, PageHero, TextLink } from "@/components/ui";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sacred ceremonies, practical guidance and spiritual learning offered by Samskara Dhara.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Sacred ceremonies, practical guidance, spiritual learning."
      />
      <Container className="py-14">
        <ul className="space-y-8">
          {services.map((s) => (
            <li
              key={s.id}
              id={s.id}
              className="grid scroll-mt-24 items-center gap-6 rounded-md border border-gold/30 bg-ivory p-5 sm:grid-cols-[220px_1fr] sm:p-6"
            >
              <Photo
                name={s.image}
                sizes="(min-width: 640px) 220px, 100vw"
                className="h-44 w-full rounded-sm sm:h-40"
              />
              <div>
                <h2 className="text-2xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-earth-soft">
                  {s.description}
                </p>
                <div className="mt-4">
                  <TextLink href={s.href}>{s.cta}</TextLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
