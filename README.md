# Wedding Invitation (Next.js 14)
## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run lint     # TypeScript check
## Edit details / timings
Everything is in `lib/config.ts` (names, date, venue, schedule times, maps link, music path).
Countdown targets `dateISO`; add the real start time, e.g. `2026-12-22T19:00:00+05:00`.
## Photos
Keep the couple photos in `public/images/`: `zaryab.jpg`, `abu bakar.jpg`, and `moments (1).jpg` through `moments (6).jpg`. Their paths are centralized in `src/config/images.ts`; missing photos show a placeholder instead of a broken image. Add music at `public/music/romantic.mp3` (use a track you have rights to).
## RSVP
Demo mode by default: responses are NOT saved and the form says so. To save them, deploy a Google Apps Script web app
that appends the posted JSON (`name, guests, attending, message, at`) to a Sheet, then set env var `RSVP_WEBHOOK_URL`.
## Deploy on Vercel
1. Push to GitHub, import the repo at vercel.com/new.
2. Add env vars: `NEXT_PUBLIC_SITE_URL` = your final https URL (used for the WhatsApp preview image), optional `RSVP_WEBHOOK_URL`.
3. Deploy, then redeploy once after setting the final URL.
## WhatsApp
Send your https Vercel (or custom domain) URL in a chat. The preview card uses `app/opengraph-image.tsx`
(replace with `public/og.png` + metadata if you want a photo). WhatsApp caches previews; test with a fresh chat.
