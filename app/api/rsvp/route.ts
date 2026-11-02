import { NextResponse } from "next/server";
// Set RSVP_WEBHOOK_URL (e.g. a Google Apps Script web app that appends to a Sheet) to store responses.
// Without it, this runs in DEMO MODE and nothing is saved.
export async function POST(req: Request) {
  let b: { name?: string; guests?: number; attending?: string; message?: string };
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  const name = String(b.name ?? "").trim().slice(0, 100);
  const guests = Math.min(Math.max(Number(b.guests) || 1, 1), 20);
  const attending = b.attending === "decline" ? "decline" : "accept";
  const message = String(b.message ?? "").trim().slice(0, 500);
  if (!name) return NextResponse.json({ error: "Please enter your name" }, { status: 400 });
  const url = process.env.RSVP_WEBHOOK_URL;
  if (!url) return NextResponse.json({ saved: false, demo: true });
  try {
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, guests, attending, message, at: new Date().toISOString() }) });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ saved: true, demo: false });
  } catch { return NextResponse.json({ error: "Could not save your response. Please try again." }, { status: 502 }); }
}
