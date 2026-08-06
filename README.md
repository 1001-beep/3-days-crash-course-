# Dee Graphics Academy — Crash Course Site

Next.js (App Router) + Tailwind site for the free 3-day Graphic Design Crash Course.

## Structure

- `app/page.tsx` — homepage (flyer, 3-night overview, how to join)
- `app/curriculum/[night]/[course]/[title]/page.tsx` — auto-generated lesson page for every title
- `lib/curriculum.ts` — **all course data lives here.** Nights → Courses → Titles → lesson content (Markdown). To add or edit a lesson, edit the `content` field for that title. Set `content: null` for a title that isn't written yet — the site shows a "coming soon" placeholder automatically.
- `components/NightCard.tsx` — the dropdown card (Course → Titles) shown on the homepage
- `public/logo.png`, `public/flyer.png` — brand assets

## Adding remaining lesson content

Open `lib/curriculum.ts`, find the title by its `slug`, and replace `PLACEHOLDER` (or `content: null`) with a Markdown string — same format as the finished lessons already in the file. No other file needs to change; the page for that title is generated automatically.

## Run locally

```
npm install
npm run dev
```

## Deploy

Push to GitHub, then import the repo in Vercel — no extra config needed.
