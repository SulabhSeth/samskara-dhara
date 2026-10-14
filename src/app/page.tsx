import Link from "next/link";
import Logo from "@/components/Logo";
import { OfferingIcon } from "@/components/Icons";
import Clip from "@/components/Clip";
import Photo from "@/components/Photo";
import FullVideo from "@/components/FullVideo";
import { Button, Container } from "@/components/ui";
import { offerings, services } from "@/data/site";


const glimpseIds = [
  "samskaras",
  "home-deity-worship",
  "family-life-ashram",
  "education",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Photo
          name="hero-bg"
          hideIfMissing
          priority
          sizes="100vw"
          className="absolute inset-0 opacity-20"
        />
        <Container className="relative py-20 text-center sm:py-28">
          <Logo className="mx-auto h-20 w-auto animate-fade-in" />
          {/* <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Hero
          </p> */}
          <h1 className="mx-auto mt-4 max-w-3xl animate-fade-up text-4xl leading-tight sm:text-6xl">
            Sacred Traditions. Krishna Conscious Living. Spiritual Growth.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-earth-soft">
            Bringing the wisdom of Vaishnava tradition into everyday life —
            through sacred ceremonies, devotional home practices, grhastha
            guidance and spiritual education.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/services">Explore Our Services</Button>
            <Button href="/seminars" variant="outline">
              Join a Seminar
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-center text-3xl">Our Offerings</h2>
          <ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {offerings.map((o) => (
              <li key={o.title}>
                <Link
                  href={o.href}
                  className="group flex h-full flex-col items-center rounded-md border border-gold/30 bg-ivory px-4 py-8 text-center transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
                >
                  <span className="text-gold transition-colors group-hover:text-forest">
                    <OfferingIcon name={o.icon} className="h-11 w-11" />
                  </span>
                  <span className="mt-4 text-sm font-medium leading-snug text-forest">
                    {o.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      {/* <section className="py-8">
        <Container className="max-w-4xl text-center">
          <h2 className="text-3xl">A Warm Welcome</h2>
          <p className="mx-auto mt-3 max-w-xl text-earth-soft">
            A short introduction to Samskara Dhara and what we offer.
          </p>
          <div className="mt-8">
            <FullVideo
  name="welcome"
  title="Welcome to Samskara Dhara"
  className="aspect-video w-full rounded-md border border-gold/30"
/>
          </div>
        </Container>
      </section> */}

      {/* <section className="py-16">
        <Container>
          <h2 className="text-center text-3xl">Glimpses of Our Services</h2>
          <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {services
              .filter((s) => glimpseIds.includes(s.id))
              .map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className="group block overflow-hidden rounded-md border border-gold/30 bg-ivory transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
                  >
                    <Clip
                      name={s.id}
                      label={`${s.title} — short video`}
                      hint="1920 × 1080, 5–15 s"
                      sizes="(min-width: 768px) 25vw, 50vw"
                      controls={false}
                      className="aspect-[4/5] w-full"
                    />
                    <span className="block px-4 py-4 text-center text-sm font-medium leading-snug text-forest">
                      {s.title}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </Container>
      </section> */}

      <section className="py-8">
        <Container className="max-w-3xl">
          <div className="rounded-md border border-gold/30 bg-ivory-deep/60 p-8 text-center sm:p-10">
            <h2 className="text-2xl">A Voluntary Offering</h2>
            <p className="mt-4 leading-relaxed text-earth-soft">
              All services, seminars and learning programmes are offered on a
              voluntary donation basis. There are no fixed fees, and a
              person&apos;s ability to contribute does not determine their
              access to the service.
            </p>
            <div className="mt-6">
              <Button href="/donations" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-md">
            <Photo name="quote-banner" sizes="(min-width: 1152px) 1152px, 100vw" className="h-72 w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-forest-dark/45 px-6 text-center">
              <p className="max-w-xl font-heading text-xl italic leading-relaxed text-ivory sm:text-2xl">
                Grhastha , grhastha is an asrama. Asrama. 
                Asrama means where spiritual culture is made. That is called asrama - (Srila Prabhupada Lecture, Honolulu) 
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
