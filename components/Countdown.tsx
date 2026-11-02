"use client";
import { useEffect, useState } from "react";
import { wedding } from "@/lib/config";
export default function Countdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => { const t = () => setLeft(new Date(wedding.dateISO).getTime() - Date.now()); t(); const i = setInterval(t, 1000); return () => clearInterval(i); }, []);
  if (left === null) return <div className="h-24" />;
  if (left <= 0) return <p className="font-script text-4xl gold-text">The celebration has begun</p>;
  const s = Math.floor(left / 1000);
  const units = [["Days", Math.floor(s / 86400)], ["Hours", Math.floor(s / 3600) % 24], ["Minutes", Math.floor(s / 60) % 60], ["Seconds", s % 60]] as const;
  return <div className="flex justify-center gap-3 sm:gap-6">{units.map(([l, v]) => <div key={l} className="w-16 sm:w-24 border border-gold/60 bg-ivory py-3">
    <div className="text-3xl sm:text-5xl text-gold tabular-nums">{String(v).padStart(2, "0")}</div><div className="text-xs sm:text-sm text-ink/60">{l}</div></div>)}</div>;
}
