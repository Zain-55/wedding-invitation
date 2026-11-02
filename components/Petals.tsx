"use client";
import { useEffect, useState } from "react";
type P = { l: number; s: number; d: number; delay: number; c: string };
export default function Petals() {
  const [p, setP] = useState<P[]>([]);
  useEffect(() => setP(Array.from({ length: 14 }, (_, i) => ({ l: Math.random() * 100, s: 8 + Math.random() * 10, d: 12 + Math.random() * 12, delay: -Math.random() * 20, c: i % 3 ? "#E9DBB8" : "#C9D1BC" }))), []);
  return <>{p.map((x, i) => <span key={i} className="petal" style={{ left: `${x.l}%`, width: x.s, height: x.s * 1.3, background: x.c, animationDuration: `${x.d}s`, animationDelay: `${x.delay}s` }} />)}</>;
}
