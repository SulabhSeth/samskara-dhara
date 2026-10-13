import type { Metadata } from "next";
import { SmallLotus } from "@/components/Icons";
import { Button, Container, Note, PageHero } from "@/components/ui";
import { samskaras } from "@/data/site";

export const metadata: Metadata = {
  title: "Samskaras & Ceremonies",
  description:
    "Traditional Vaishnava samskaras — guidance and performance with a focus on authenticity, simplicity and understanding.",
};

export default function SamskarasPage() {
  return (
    <>
      <PageHero
        eyebrow="Samskaras & Ceremonies"
        title="Sacred rites for life's important moments."
        subtitle="We offer guidance and performance of traditional samskaras, with a focus on authenticity, simplicity and understanding."
      />
      <Container className="max-w-2xl py-14">
        <ul className="space-y-4">
          {samskaras.map((s) => (
            <li
              key={s}
              className="flex items-center gap-4 border-b border-gold/25 pb-4 text-lg text-forest"
            >
              <SmallLotus />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-6">
          <Note>
            Each service begins with a discussion of the occasion, the
            family&apos;s requirements and the appropriate preparations.
          </Note>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </Container>
    </>
  );
}
