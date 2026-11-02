"use client";
import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  objectPosition?: string;
};

export default function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  objectPosition = "center",
}: PhotoProps) {
  const [bad, setBad] = useState(false);
  return <div className={`relative overflow-hidden bg-beige border border-gold/50 ${className}`}>
    {bad ? <div role="img" aria-label={`${alt} unavailable`} className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ivory to-champagne/60 px-3 text-center text-sm text-gold/70">
      <ImageIcon aria-hidden="true" />
      <span>{process.env.NODE_ENV === "development" ? `Missing image: ${decodeURIComponent(src.split("/").pop() ?? src)}` : "Photo unavailable"}</span>
    </div> : <Image src={src} alt={alt} fill sizes={sizes} onError={() => setBad(true)} className="object-cover" style={{ objectPosition }} />}
  </div>;
}
