import QuotesCard from "./QuotesCard";
import SamskaraAccordion from "./SamskaraAccordion";
import TimelineImage from "./TimelineImage";
import { Container } from "./ui";
import { groups, quotes, quotesIntro, timeline } from "@/data/samskaraContent";

/** Extra sections shown only on the Samskaras service page. */
export default function SamskaraSections() {
  return (
    <Container className="space-y-16 py-14">
      <QuotesCard
        title="Srila Prabhupada on Samskaras"
        intro={quotesIntro}
        quotes={quotes}
      />

      <section>
        <h2 className="text-center text-2xl sm:text-3xl">{timeline.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-earth-soft">
          {timeline.intro}
        </p>
        <div className="mt-8">
          <TimelineImage file={timeline.file} alt={timeline.alt} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl sm:text-3xl">The Samskaras</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-earth-soft">
          Select a samskara to read about it.
        </p>
        <div className="mt-8">
          <SamskaraAccordion groups={groups} />
        </div>
      </section>
    </Container>
  );
}
