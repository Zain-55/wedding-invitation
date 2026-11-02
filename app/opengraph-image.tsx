import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Zaryab & Abu Bakar | Wedding Invitation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FBF7EF", padding: 36 }}>
      <div style={{ width: "100%", height: "100%", border: "4px solid #A98233", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#3A372F", fontFamily: "Georgia, serif" }}>
        <div style={{ fontSize: 26, letterSpacing: 8, color: "#A98233" }}>WEDDING INVITATION</div>
        <div style={{ fontSize: 96, marginTop: 24 }}>Zaryab &amp; Abu Bakar</div>
        <div style={{ fontSize: 38, marginTop: 20, color: "#6B6757" }}>22 December 2026 · Karachi</div>
      </div>
    </div>, size);
}
