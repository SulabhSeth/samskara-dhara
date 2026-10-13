import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { GlobeIcon, MailIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Samskara Dhara.",
};

export default function ContactPage() {
  const rows = [
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      value: site.whatsapp,
      href: site.whatsappLink,
    },
    {
      icon: <MailIcon />,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    { icon: <PinIcon />, label: "Location", value: site.location },
    { icon: <GlobeIcon />, label: "Global", value: site.global },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Have a question, or want to know more about a service, seminar or course? Feel free to reach out."
      />
      <Container className="grid gap-12 py-14 md:grid-cols-2">
        <ul className="space-y-6">
          {rows.map((r) => (
            <li key={r.label} className="flex items-start gap-4">
              <span className="mt-0.5 text-forest">{r.icon}</span>
              <div className="text-sm">
                <p className="text-earth-soft">{r.label}</p>
                {r.href ? (
                  <a href={r.href} className="text-forest hover:text-gold">
                    {r.value}
                  </a>
                ) : (
                  <p className="text-forest">{r.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-md border border-gold/30 bg-ivory p-6">
          <h2 className="mb-5 text-xl">Send a Message</h2>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
