// EDIT EVERYTHING HERE. All wedding details live in this one file.
import { weddingImages } from "@/src/config/images";

export const wedding = {
  bride: { name: "Zaryab", photo: weddingImages.bride },
  groom: { name: "Abu Bakar", photo: weddingImages.groom },
  // Time not provided yet: countdown targets midnight (Karachi time). Change when known.
  dateISO: "2026-12-22T00:00:00+05:00",
  dateLabel: "22 December 2026",
  timeZone: "Asia/Karachi",
  venue: "Marina Club",
  area: "Clifton Phase 8",
  city: "Karachi, Pakistan",
  // Replace with the exact Google Maps share link once you have it.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Marina+Club+Clifton+Karachi",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  music: "/music/romantic.mp3", // add your own licensed track here
  intro: "Two souls who found each other, and two families who could not be happier. Their story is only beginning.",
  schedule: [
    { title: "Guest Arrival", time: "Time to be announced", note: "Be seated and welcomed" },
    { title: "Welcome & Reception", time: "Time to be announced", note: "Refreshments and greetings" },
    { title: "Wedding Celebration", time: "Time to be announced", note: "The ceremony" },
    { title: "Dinner", time: "Time to be announced", note: "A shared feast" },
    { title: "Farewell", time: "Time to be announced", note: "Blessings and goodbyes" },
  ],
  gallery: weddingImages.gallery,
  dressCode: "Formal & Traditional Attire",
};
export type Wedding = typeof wedding;
