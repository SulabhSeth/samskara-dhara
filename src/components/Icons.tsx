import type { IconName } from "@/data/site";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function OfferingIcon({
  name,
  className = "h-9 w-9",
}: {
  name: IconName;
  className?: string;
}) {
  switch (name) {
    case "lotus":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <path d="M24 6c6 7 6 18 0 28-6-10-6-21 0-28Z" />
          <path d="M24 34C14 32 8 25 6 17c9 0 15 5 18 17Z" />
          <path d="M24 34c10-2 16-9 18-17-9 0-15 5-18 17Z" />
          <path d="M14 40h20" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <path d="M6 24 24 8l18 16" />
          <path d="M11 21v19h26V21" />
          <path d="M20 40V28h8v12" />
          <path d="M24 14v3" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <path d="M24 12c-4-3-10-4-16-3v27c6-1 12 0 16 3 4-3 10-4 16-3V9c-6-1-12 0-16 3Z" />
          <path d="M24 12v27" />
        </svg>
      );
    case "person":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
          <circle cx="24" cy="16" r="7" />
          <path d="M9 40c1-9 7-14 15-14s14 5 15 14" />
          <path d="M24 26v14" />
        </svg>
      );
  }
}

export function SmallLotus({ className = "h-5 w-5 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...common}>
      <path d="M24 8c5 6 5 16 0 26-5-10-5-20 0-26Z" />
      <path d="M24 34C16 32 10 26 8 18c8 0 14 5 16 16Z" />
      <path d="M24 34c8-2 14-8 16-16-8 0-14 5-16 16Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20Z" />
      <path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .5c-.8-.4-1.6-1.200-2-2l.5-1-1-2L9 9Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
      <path d="M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Z" />
      <circle cx="12" cy="9.500" r="2.500" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

export function SocialIcon({
  name,
  className = "h-5 w-5",
}: {
  name: "youtube" | "instagram" | "facebook";
  className?: string;
}) {
  if (name === "youtube")
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="m10 9.500 5 2.500-5 2.500v-5Z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.500" />
        <circle cx="16.800" cy="7.200" r=".6" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
      <path d="M14 8h2V5h-2.500A3.500 3.500 0 0 0 10 8.500V11H8v3h2v6h3v-6h2.300l.7-3h-3V8.500c0-.3.300-.5.500-.5Z" />
    </svg>
  );
}
