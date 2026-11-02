"use client";
import { useEffect, useState } from "react";
import { CalendarDays, Check, Copy, MapPin, Share2, Shirt } from "lucide-react";
import { wedding as w } from "@/lib/config";
import Reveal from "./Reveal";
import Photo from "./Photo";
import Countdown from "./Countdown";
import Rsvp from "./Rsvp";
const Divider = () => <div className="my-8 flex items-center justify-center gap-3 text-gold"><span className="h-px w-16 bg-gold/60" /><span>❦</span><span className="h-px w-16 bg-gold/60" /></div>;
const Sec = ({ children, tone = "" }: { children: React.ReactNode; tone?: string }) => <section className={`px-6 py-24 text-center ${tone}`}><div className="mx-auto max-w-3xl"><Reveal>{children}</Reveal></div></section>;
const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: w.timeZone }).format(new Date(w.dateISO));
export default function Invitation() {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(w.siteUrl);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);
  const copy = async () => { try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {} };
  const wa = `https://wa.me/?text=${encodeURIComponent(`You are cordially invited to the wedding of ${w.bride.name} & ${w.groom.name}. Open your invitation: ${url}`)}`;
  return <div>
    <section className="relative flex min-h-screen items-center justify-center px-6 py-20 text-center">
      <div className="absolute inset-4 border border-gold/60 sm:inset-8" /><div className="absolute inset-6 border border-gold/30 sm:inset-10" />
      <Reveal className="relative">
        <p className="text-lg italic text-ink/70">Together with their families</p>
        <p className="mt-4 text-sm tracking-[0.3em] text-gold">REQUEST THE HONOUR OF YOUR PRESENCE</p>
        <p className="mt-6 italic text-ink/70">At the wedding celebration of</p>
        <h1 className="mt-4 font-script text-6xl leading-tight gold-text sm:text-8xl">{w.bride.name}<br /><span className="text-4xl">&amp;</span><br />{w.groom.name}</h1>
        <Divider /><p className="tracking-[0.3em] text-gold">{w.dateLabel.toUpperCase()}</p>
      </Reveal>
    </section>
    <Sec tone="bg-beige/50">
      <h2 className="font-script text-5xl gold-text">The Couple</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg italic">{w.intro}</p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">{[w.bride, w.groom].map(p => <div key={p.name}>
        <Photo src={p.photo} alt={`Portrait of ${p.name}`} sizes="256px" className="mx-auto aspect-[3/4] w-64 rounded-t-full" /><p className="mt-4 font-script text-4xl text-gold">{p.name}</p></div>)}</div>
    </Sec>
    <Sec>
      <CalendarDays className="mx-auto text-gold" size={44} strokeWidth={1.2} />
      <p className="mt-4 italic">{weekday}</p><h2 className="mt-2 text-4xl tracking-[0.2em] text-gold sm:text-5xl">{w.dateLabel.toUpperCase()}</h2>
      <div className="mt-10"><Countdown /></div>
    </Sec>
    <Sec tone="bg-beige/50">
      <MapPin className="mx-auto text-gold" size={40} strokeWidth={1.2} />
      <h2 className="mt-4 text-4xl tracking-[0.2em]">{w.venue.toUpperCase()}</h2><p className="mt-2 text-lg">{w.area}, {w.city}</p>
      <a href={w.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border border-gold px-8 py-3 tracking-[0.3em] text-gold transition hover:bg-gold hover:text-ivory">GET DIRECTIONS</a>
    </Sec>
    <Sec>
      <h2 className="font-script text-5xl gold-text">The Celebration</h2>
      <ol className="mx-auto mt-10 max-w-md border-l border-gold/60 text-left">{w.schedule.map(e => <li key={e.title} className="relative pb-8 pl-8 last:pb-0">
        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold" /><p className="text-xl">{e.title}</p><p className="text-gold">{e.time}</p><p className="text-sm text-ink/60">{e.note}</p></li>)}</ol>
    </Sec>
    <Sec tone="bg-sage/15">
      <p className="mx-auto max-w-xl font-script text-4xl leading-snug gold-text">Two hearts, two families, and one beautiful journey.</p>
      <p className="mx-auto mt-4 max-w-xl text-lg italic">We would be honoured to have you celebrate this special day with us.</p>
    </Sec>
    <Sec>
      <Shirt className="mx-auto text-gold" size={40} strokeWidth={1.2} /><h2 className="mt-4 text-3xl">{w.dressCode}</h2>
      <div className="mt-6 flex justify-center gap-3">{["#E9DBB8", "#8A9A7B", "#FBF7EF", "#A98233"].map(c => <span key={c} className="h-8 w-8 rounded-full border border-gold/50" style={{ background: c }} />)}</div>
    </Sec>
    <Sec tone="bg-beige/50">
      <h2 className="font-script text-5xl gold-text">Moments</h2>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">{w.gallery.map((g, i) => <Photo key={g} src={g} alt={`Gallery photo ${i + 1}`} sizes="(max-width: 640px) calc((100vw - 3.75rem) / 2), (max-width: 768px) calc((100vw - 4.5rem) / 3), 14rem" className="aspect-square" />)}</div>
    </Sec>
    <Sec><h2 className="font-script text-5xl gold-text">RSVP</h2><p className="mb-8 mt-2 italic">Kindly let us know if you can join us.</p><Rsvp /></Sec>
    <Sec tone="bg-gradient-to-b from-ivory to-champagne/60">
      <p className="italic">With Love &amp; Blessings</p>
      <h2 className="mt-4 font-script text-6xl gold-text">{w.bride.name} &amp; {w.groom.name}</h2>
      <p className="mt-4 tracking-[0.3em] text-gold">{w.dateLabel.toUpperCase()}</p><p className="mt-6">Thank you for being part of our story.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold px-5 py-2 text-gold hover:bg-gold hover:text-ivory"><Share2 size={16} />Share on WhatsApp</a>
        <button onClick={copy} className="inline-flex items-center gap-2 border border-gold px-5 py-2 text-gold hover:bg-gold hover:text-ivory">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Link copied" : "Copy invitation link"}</button>
      </div>
    </Sec>
  </div>;
}
