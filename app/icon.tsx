import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FBF7EF", border: "3px solid #A98233", borderRadius: 32, color: "#A98233", fontSize: 26, fontFamily: "Georgia, serif" }}>Z&amp;A</div>, size);
}
