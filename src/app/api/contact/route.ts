import { NextResponse } from "next/server";

/**
 * Validates an enquiry and acknowledges it.
 *
 * NOTE: there is no delivery step yet — nothing is emailed or stored. Wire a
 * provider (Resend, Postmark, SES…) in where marked before this goes live, or
 * enquiries will be accepted and silently dropped.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const { name, email, message, company, budget } = (payload ?? {}) as Record<
    string,
    unknown
  >;

  const errors: string[] = [];
  if (typeof name !== "string" || name.trim().length < 2) errors.push("name");
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("email");
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    errors.push("message");
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });
  }

  // TODO: deliver the enquiry. Until then it exists only in the server log.
  console.info("[contact] enquiry received", {
    name,
    email,
    company: company ?? null,
    budget: budget ?? null,
    length: (message as string).length,
  });

  return NextResponse.json({ ok: true });
}
