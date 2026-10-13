import type { Metadata } from "next";
import { Button, Card, Container, PageHero } from "@/components/ui";
import { donationMethods } from "@/data/site";

export const metadata: Metadata = {
  title: "Donations",
  description:
    "Support the continuation of Samskara Dhara through voluntary contributions.",
};

export default function DonationsPage() {
  return (
    <>
      <PageHero eyebrow="Donations" title="Support the Continuation" />
      <Container className="max-w-2xl space-y-8 py-14">
        <p className="leading-relaxed text-earth-soft">
          If you feel inspired to support this initiative, your voluntary
          contribution helps sustain spiritual education, ceremonies and
          community learning.
        </p>
        <Card className="bg-ivory-deep/60">
          <h2 className="text-xl">Ways to Donate</h2>
          <ul className="mt-4 space-y-3 text-sm text-earth">
            {donationMethods.map((m) => (
              <li key={m} className="flex items-center gap-3 border-b border-gold/20 pb-3 last:border-0">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-earth-soft">
            Payment details (UPI ID, bank account) will be shared here or on
            request.
          </p>
        </Card>
        <p className="text-sm text-earth-soft">
          All services are offered on a voluntary basis. There are no fixed
          fees.
        </p>
        <Button href="/contact?subject=donation" variant="outline">
          Contact Us
        </Button>
      </Container>
    </>
  );
}
