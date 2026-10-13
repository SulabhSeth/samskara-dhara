"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-sm border border-gold/40 bg-ivory px-3 py-2.5 text-sm text-earth placeholder:text-earth-soft/60 focus:border-forest focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div>
        <label htmlFor="name" className="mb-1 block text-xs text-earth-soft">
          Name
        </label>
        <input id="name" name="name" required className={field} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-xs text-earth-soft">
          Email
        </label>
        <input id="email" name="email" type="email" required className={field} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-xs text-earth-soft">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={field} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-forest py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      <p role="status" className="text-sm">
        {status === "sent" && (
          <span className="text-forest">Thank you — your message has been sent.</span>
        )}
        {status === "error" && (
          <span className="text-red-800">
            Something went wrong. Please try WhatsApp or email instead.
          </span>
        )}
      </p>
    </form>
  );
}
