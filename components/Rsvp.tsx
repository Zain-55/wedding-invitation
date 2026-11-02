"use client";
import { useState } from "react";
type State = { kind: "idle" } | { kind: "sending" } | { kind: "saved" } | { kind: "demo" } | { kind: "error"; msg: string };
export default function Rsvp() {
  const [s, setS] = useState<State>({ kind: "idle" });
  const [att, setAtt] = useState<"accept" | "decline">("accept");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = new FormData(e.currentTarget); setS({ kind: "sending" });
    try {
      const r = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: f.get("name"), guests: Number(f.get("guests")), attending: att, message: f.get("message") }) });
      const d = await r.json();
      if (!r.ok) return setS({ kind: "error", msg: d.error ?? "Something went wrong" });
      setS(d.saved ? { kind: "saved" } : { kind: "demo" });
    } catch { setS({ kind: "error", msg: "Network error. Please try again." }); }
  }
  if (s.kind === "saved") return <p className="font-script text-4xl gold-text">Thank you, your response is saved.</p>;
  if (s.kind === "demo") return <p className="text-ink/80">Demo mode: your response was <strong>not</strong> saved. The couple has not connected storage yet.</p>;
  const field = "w-full border border-gold/50 bg-ivory px-4 py-3 focus:outline-none focus:border-gold";
  return <form onSubmit={submit} className="mx-auto max-w-md space-y-4 text-left">
    <label className="block">Your name<input name="name" required maxLength={100} className={field} /></label>
    <label className="block">Number of guests<input name="guests" type="number" min={1} max={20} defaultValue={1} className={field} /></label>
    <div className="grid grid-cols-2 gap-3">{(["accept", "decline"] as const).map(v => <button type="button" key={v} onClick={() => setAtt(v)} aria-pressed={att === v}
      className={`border py-3 transition ${att === v ? "bg-gold text-ivory border-gold" : "border-gold/50 text-gold"}`}>{v === "accept" ? "Joyfully accept" : "Regretfully decline"}</button>)}</div>
    <label className="block">Message (optional)<textarea name="message" rows={3} maxLength={500} className={field} /></label>
    {s.kind === "error" && <p role="alert" className="text-red-700">{s.msg}</p>}
    <button disabled={s.kind === "sending"} className="w-full bg-gold py-3 tracking-[0.3em] text-ivory disabled:opacity-60">{s.kind === "sending" ? "SENDING" : "SEND RSVP"}</button>
  </form>;
}
