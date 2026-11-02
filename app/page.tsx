"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Envelope from "@/components/Envelope";
import Petals from "@/components/Petals";
import Invitation from "@/components/Invitation";
import { wedding } from "@/lib/config";
export default function Home() {
  const [opened, setOpened] = useState(false);
  const [muted, setMuted] = useState(false);
  const [hasAudio, setHasAudio] = useState(Boolean(wedding.music));
  const audio = useRef<HTMLAudioElement>(null);
  const open = () => { setOpened(true); audio.current?.play().catch(() => {}); };
  const toggle = () => { const a = audio.current; if (!a) return; a.muted = !muted; setMuted(!muted); };
  return <>
    {wedding.music && <audio ref={audio} src={wedding.music} loop preload="none" onError={() => setHasAudio(false)} />}
    <AnimatePresence>{!opened && <Envelope key="env" onOpen={open} />}</AnimatePresence>
    {opened && <motion.main initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
      <Petals /><Invitation />
      {hasAudio && (
        <button onClick={toggle} aria-label={muted ? "Unmute music" : "Mute music"} className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full border border-gold bg-ivory/90 text-gold flex items-center justify-center shadow">
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
    </motion.main>}
  </>;
}
