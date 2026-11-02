"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/lib/config";
export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [step, setStep] = useState<"closed" | "opening">("closed");
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 700); return () => clearTimeout(t); }, []);
  const start = () => { if (step === "opening") return; setStep("opening"); onOpen(); };
  return <motion.div exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 1 }}
    className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-b from-ivory to-champagne/60 px-4">
    {!ready ? <p className="font-script text-5xl gold-text animate-pulse">Z &amp; A</p> : <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative w-[88vw] max-w-md aspect-[3/2]" style={{ perspective: 1000 }}>
        {/* card sliding out */}
        <motion.div className="absolute inset-x-4 top-2 bottom-2 bg-ivory border border-gold/50 flex flex-col items-center justify-center text-center"
          animate={step === "opening" ? { y: "-70%", scale: 1.08 } : { y: 0 }} transition={{ delay: 0.9, duration: 1.3 }}>
          <p className="tracking-[0.3em] text-xs text-gold">YOU ARE INVITED</p>
          <p className="font-script text-4xl gold-text mt-2">{wedding.bride.name} &amp; {wedding.groom.name}</p>
        </motion.div>
        {/* envelope body */}
        <div className="absolute inset-0 bg-beige shadow-2xl border border-gold/40" style={{ clipPath: "polygon(0 0,50% 55%,100% 0,100% 100%,0 100%)", top: "0" }} />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-champagne/80" style={{ clipPath: "polygon(0 100%,50% 0,100% 100%)" }} />
        {/* flap */}
        <motion.div className="absolute inset-x-0 top-0 h-[55%] bg-champagne border-gold/40 origin-top"
          style={{ clipPath: "polygon(0 0,100% 0,50% 100%)", backfaceVisibility: "hidden" }}
          animate={step === "opening" ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 10 }} transition={{ duration: 0.9 }} />
        {step === "closed" && <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-20 h-16 w-16 rounded-full bg-gradient-to-br from-[#D8BC74] to-[#8C6A22] shadow-lg flex items-center justify-center font-script text-2xl text-ivory">Z&amp;A</div>}
      </motion.div>
      <p className="mt-10 font-script text-4xl gold-text">{wedding.bride.name} &amp; {wedding.groom.name}</p>
      <button onClick={start} disabled={step === "opening"} className="mt-6 border border-gold bg-gold px-10 py-3 tracking-[0.3em] text-ivory text-sm hover:bg-ivory hover:text-gold transition disabled:opacity-50">OPEN INVITATION</button>
      <button onClick={start} className="mt-4 text-sm text-ink/60 underline underline-offset-4">Skip animation</button>
    </>}
  </motion.div>;
}
