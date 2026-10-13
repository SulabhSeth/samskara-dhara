import type { Metadata } from "next";
import { Button, Card, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the spiritual journey, temple service, training, and experience behind Samskara Dhara, a Vaishnava initiative dedicated to samskaras, devotional living, and spiritual education.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Life of Devotion, Learning & Service"
        subtitle="Rooted in Krishna consciousness. Dedicated to sharing the wisdom of Vaishnava tradition."
      />

      <Container className="max-w-5xl space-y-12 py-14 leading-relaxed text-earth-soft">
        {/* Introduction */}
        <section className="mx-auto max-w-3xl space-y-5 text-lg">
          <p>
            Hare Krishna! My name is Sukavaka Das. Krishna consciousness has
            been an integral part of my life for more than 22 years. Over
            these years, my journey has been shaped by devotional practice,
            temple service, spiritual study, and the opportunity to serve
            and guide others in their spiritual lives.
          </p>

          <p>
            Through Samskara Dhara, I wish to share the wisdom and practices
            of Vaishnava tradition in a way that is meaningful, accessible,
            and relevant to individuals and families in their everyday lives.
            My aim is to help people understand not only the rituals and
            practices of our tradition, but also the spiritual principles
            and values behind them.
          </p>
        </section>

        {/* Spiritual Journey */}
        <section className="space-y-5">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              My Spiritual Journey
            </p>

            <h2 className="mt-3 font-serif text-3xl text-earth md:text-4xl">
              Learning Through Practice and Service
            </h2>

            <p className="mt-5">
              I have been a member of ISKCON for more than 22 years, during
              which Krishna consciousness has continued to guide my personal
              practice and service. For more than 10 years, I lived as a
              full-time brahmachari in ISKCON Punjabi Bagh temple, dedicating myself to
              devotional discipline, worship, study, and service.
            </p>

            <p className="mt-4">
              My years in temple life gave me the opportunity to deepen my
              understanding of devotional practices and participate in the
              daily service and spiritual culture of the Vaishnava community.
              I also served as a head pujari, taking responsibility for
              deity worship and related temple services.
            </p>

            <p className="mt-4">
              These experiences have shaped my understanding of devotional
              life as something that extends beyond formal worship. It is
              also expressed through our conduct, responsibilities, family
              relationships, service to others, and commitment to spiritual
              growth.
            </p>
          </div>
        </section>

        {/* Training and Study */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              Study & Training
            </p>

            <h2 className="mt-3 font-serif text-3xl text-earth md:text-4xl">
              A Foundation in Vaishnava Knowledge and Practice
            </h2>

            <p className="mt-5">
              Alongside practical devotional service, I have undertaken
              structured study and specialised training to strengthen my
              understanding of Vaishnava philosophy, deity worship, and
              traditional ceremonies.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Card className="h-full border border-antique/30 bg-ivory-deep/40">
              <h3 className="font-serif text-xl text-earth">
                Bhakti Shastri
              </h3>
              <p className="mt-3 text-sm">
                Completed Bhakti Shastri course to deepen my understanding
                of Srila Prabhupada's books.
              </p>
            </Card>

            <Card className="h-full border border-antique/30 bg-ivory-deep/40">
              <h3 className="font-serif text-xl text-earth">
                Deity Worship Training
              </h3>
              <p className="mt-3 text-sm">
                Undertook deity worship training in Mayapur, developing
                further knowledge of the principles and practices of
                devotional worship and service.
              </p>
            </Card>

            <Card className="h-full border border-antique/30 bg-ivory-deep/40">
              <h3 className="font-serif text-xl text-earth">
                Yajna Training
              </h3>
              <p className="mt-3 text-sm">
                Undertook yajna training in Mayapur, strengthening my
                understanding of traditional fire ceremonies and the
                practices associated with sacred observances.
              </p>
            </Card>

            <Card className="h-full border border-antique/30 bg-ivory-deep/40">
              <h3 className="font-serif text-xl text-earth">
                Temple Worship & Samskaras
              </h3>
              <p className="mt-3 text-sm">
                My experience in temple service and conducting traditional
                samskaras has helped me develop practical familiarity with
                ceremonies marking important stages and transitions in life.
              </p>
            </Card>
          </div>
        </section>

        {/* Guidance and Teaching */}
        <section className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Teaching, Guidance & Community Service
          </p>

          <h2 className="font-serif text-3xl text-earth md:text-4xl">
            Sharing Krishna Consciousness With Others
          </h2>

          <p>
            Over the years, I have been involved in counselling and guiding
            youth and congregation devotees in and around Delhi. I have also
            shared Vaishnava teachings through preaching, discussions, and
            educational activities within the congregation.
          </p>

          <p>
            My service includes conducting and explaining traditional
            samskaras, including Vivaha and other important family
            ceremonies, as well as helping devotees understand the
            significance and spiritual context of these observances.
          </p>

          <p>
            I also enjoy teaching and discussing Vaishnava philosophy,
            devotional practices, home deity worship, and the principles
            of grhastha ashram. I hope to help individuals and families
            cultivate spiritual understanding that supports their daily
            responsibilities and devotional lives.
          </p>
        </section>

        {/* Samskara Dhara Mission */}
        <section className="rounded-2xl border border-antique/30 bg-ivory-deep/50 p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            The Purpose of Samskara Dhara
          </p>

          <h2 className="mt-3 font-serif text-3xl text-earth md:text-4xl">
            Bringing Spiritual Tradition Into Everyday Life
          </h2>

          <div className="mt-5 space-y-4">
            <p>
              Samskara Dhara is an expression of my desire to make
              Vaishnava traditions, spiritual learning, and guidance for
              family life more accessible to those who wish to explore them.
            </p>

            <p>
              Through this initiative, I hope to support families seeking
              guidance with samskaras, individuals wishing to establish or
              deepen devotional home practices, and devotees interested in
              studying Srila Prabhupada's books.
            </p>

            <p>
              The initiative also creates opportunities to explore grhastha
              ashram culture, spiritual responsibilities, family life, and
              the practical application of Krishna consciousness.
            </p>

            <p>
              My intention is to approach this service with humility,
              respect for tradition, and a commitment to continued learning.
              Every enquiry is an opportunity to understand a person's needs
              and explore how the wisdom of Vaishnava tradition may be helpful.
            </p>
          </div>
        </section>

        {/* Accessibility and Donations */}
        <section className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            A Service Offered in the Spirit of Giving
          </p>

          <h2 className="font-serif text-3xl text-earth md:text-4xl">
            Spiritual Learning Should Be Accessible
          </h2>

          <p>
            Samskara Dhara follows a voluntary-donation model. There are
            no fixed fees for its services, seminars, and learning
            opportunities. Those who feel inspired and are able to
            contribute may support the continuation of this work.
          </p>

          <p>
            A person's ability to contribute does not determine their
            access to a service or learning opportunity. The intention
            is to make spiritual guidance and traditional knowledge
            accessible while allowing the community to support the
            initiative voluntarily.
          </p>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-antique/30 pt-10 text-center">
          <h2 className="font-serif text-3xl text-earth md:text-4xl">
            Let Us Connect in Service
          </h2>

          <p className="mx-auto mt-4 max-w-2xl">
            Whether you are seeking guidance for a samskara, interested
            in devotional home practices, or wishing to explore
            Vaishnava teachings, you are welcome to get in touch.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button href="/services" variant="solid">
              Explore Our Services
            </Button>

            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>

          <p className="mt-5 text-sm text-earth-soft/80">
            Based in Delhi NCR, India · In-person services by arrangement
            · Selected online sessions
          </p>
        </section>
      </Container>
    </>
  );
}