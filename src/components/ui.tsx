import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-forest text-ivory hover:bg-forest-dark"
      : "border border-forest/50 text-forest hover:bg-forest hover:text-ivory";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm font-medium text-forest underline-offset-4 hover:text-gold hover:underline"
    >
      {children} <span aria-hidden>→</span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-gold/30 bg-ivory-deep/60">
      <Container className="py-16 text-center sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="animate-fade-up text-4xl sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-earth-soft">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-gold/30 bg-ivory p-6 shadow-[0_1px_0_rgba(180,148,82,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md bg-ivory-deep px-5 py-4 text-sm leading-relaxed text-earth-soft">
      {children}
    </p>
  );
}
