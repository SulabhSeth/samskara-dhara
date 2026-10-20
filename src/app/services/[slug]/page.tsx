import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Clip from "@/components/Clip";
import { SmallLotus } from "@/components/Icons";
import FullVideo from "@/components/FullVideo";
import { Button, Container, Note, PageHero } from "@/components/ui";
import { serviceDetails } from "@/data/serviceDetails";
import { services } from "@/data/site";
import SamskaraSections from "@/components/SamskaraSections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);
  return service
    ? { title: service.title, description: service.description }
    : {};
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        subtitle={service.description}
      />
      {slug === "samskaras" && <SamskaraSections />}

      {/* <Container className="py-14">
        <Clip
          name={service.id}
          label={`${service.title} — short video`}
          hint="1920 × 1080, 5–15 s, silent"
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="aspect-video w-full rounded-md border border-gold/30"
        />
      </Container> */}

      <Container className="grid gap-12 pb-14 md:grid-cols-[1fr_1.2fr]">
        <div>
          {slug !== "samskaras" && (
  <>
    <h2 className="text-2xl">What this includes</h2>
    <ul className="mt-6 space-y-4">
      ...your existing list items...
    </ul>
  </>
)}
          <ul className="mt-6 space-y-4">
            {detail.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-forest">
                <SmallLotus className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-6">
            <Note>
              Each service begins with a conversation about your needs and the
              appropriate preparations. Offered on a voluntary donation basis.
            </Note>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Get in Touch</Button>
              {detail.related && (
                <Button href={detail.related.href} variant="outline">
                  {detail.related.label}
                </Button>
              )}
            </div>
          </div>
        </div>

        <div>
          {/* <h2 className="text-2xl">Watch in full</h2> */}
          <div className="mt-6">
            {/* <Container className="py-14">
        <Clip
          name={service.id}
          label={`${service.title} — short video`}
          hint="1920 × 1080, 5–15 s, silent"
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="aspect-video w-full rounded-md border border-gold/30"
        />
      </Container> */}
            
            {/* <FullVideo
  name={`${service.id}-full`}
  title={`${service.title} — full video`}
  className="aspect-video w-full rounded-md border border-gold/30"
/> */}
          </div>
        </div>
      </Container>

      {detail.glimpses && (
      <section className="border-t border-gold/30 bg-ivory-deep/60 py-14">
        <Container>
          <h2 className="text-center text-2xl">Glimpses</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Clip
                key={n}
                name={`${service.id}-${n}`}
                label={`${service.title} — glimpse ${n}`}
                hint="1350 × 1080, 5–10 s"
                className="aspect-[4/5] w-full rounded-md border border-gold/30"
              />
            ))}
          </div>
        </Container>
      </section>
       )}
    </>
  );
}
