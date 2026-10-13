import { NextResponse } from "next/server";

type Payload = { name?: unknown; email?: unknown; message?: unknown };

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 422 });
  }

  // TODO: deliver the message (e.g. Resend, Nodemailer/SMTP, or a Google Sheet webhook).
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
