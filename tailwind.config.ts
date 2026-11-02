import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ivory: "#FBF7EF", champagne: "#E9DBB8", gold: "#A98233", beige: "#EFE6D6", sage: "#8A9A7B", ink: "#3A372F" },
    fontFamily: { script: ["var(--f-script)"], serif: ["var(--f-serif)", "Georgia", "serif"] },
  } },
} satisfies Config;
