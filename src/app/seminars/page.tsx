import type { Metadata } from "next";
import Link from "next/link";
import { SmallLotus } from "@/components/Icons";
import Photo from "@/components/Photo";
import { Button, Card, Container, PageHero } from "@/components/ui";
import { courses, upcomingSeminars } from "@/data/site";

export const metadata: Metadata = {
  title: "Seminars & Courses",
  description:
    "Seminars and structured courses on deity worship, grhastha culture and Bhagavad Gita.",
};

export default function SeminarsPage() {
  return (
    <>
      <PageHero eyebrow="Seminars & Courses" title="Learn. Practise. Grow." />
      <Container className="grid gap-12 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-2xl">Join our seminars and structured courses on:</h2>
          <ul className="mt-6 space-y-4">
            {courses.map((c) => (
              <li key={c} className="flex items-center gap-3 text-forest">
                <SmallLotus />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl">Upcoming Seminars</h2>
          <div className="mt-6 space-y-5">
            {upcomingSeminars.map((s) => (
              <Card key={s.title} className="flex gap-4">
                <Photo
                  name="seminar-krishna-home"
                  sizes="240px"
                  className="h-36 w-44 shrink-0 rounded-sm"
                />
                <div>
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-1 text-xs text-earth-soft">
                    {s.date} · {s.mode}
                  </p>
                  <p className="text-xs text-earth-soft">Duration: {s.duration}</p>
                  <div className="mt-3">
                    <Button href="/contact?subject=seminar" variant="outline" className="!px-4 !py-2 text-xs">
                      Register Interest
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-5 text-sm">
            <Link href="/seminars" className="text-forest underline-offset-4 hover:underline">
              View All Upcoming Seminars →
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
