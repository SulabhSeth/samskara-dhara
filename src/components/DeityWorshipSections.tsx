import DescriptionBlocks from "./DescriptionBlocks";
import QuotesCard from "./QuotesCard";
import { Container } from "./ui";
import { acamana, quotes, quotesIntro, wakeUp } from "@/data/deityWorshipContent";

/** Extra sections shown only on the Home Deity Worship service page. */
export default function DeityWorshipSections() {
  return (
    <Container className="space-y-16 py-14">
      <QuotesCard
        title="Srila Prabhupada on Deity Worship"
        intro={quotesIntro}
        quotes={quotes}
      />

      <section className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl sm:text-3xl">Basic Ācamana</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-earth-soft">
          Purification before approaching the Lord.
        </p>
        <div className="mt-8">
          <DescriptionBlocks description={acamana} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl sm:text-3xl">Waking Up the Lord</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-earth-soft">
          Morning mantras to gently wake the Deities.
        </p>
        <div className="mt-8">
          <DescriptionBlocks description={wakeUp} />
        </div>
      </section>
    </Container>
  );
}
