import type { Metadata, Viewport } from "next";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { wedding } from "@/lib/config";
const script = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--f-script" });
const serif = Cormorant_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--f-serif" });
const title = "Zaryab & Abu Bakar | Wedding Invitation";
const description = "You are cordially invited to celebrate our wedding on 22 December 2026.";
export const metadata: Metadata = {
  metadataBase: new URL(wedding.siteUrl), title, description,
  openGraph: { title, description, type: "website", url: "/", siteName: "Zaryab & Abu Bakar" },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { themeColor: "#FBF7EF" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${script.variable} ${serif.variable}`}>{children}</body></html>;
}
