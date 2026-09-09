# Battula Uday Kiran — Portfolio

A cinematic, dark-themed developer portfolio built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Where to edit things

- **All copy (experience, projects, skills, achievements, education)** — `src/data/resume.ts`
- **Links (email, phone, GitHub, LinkedIn, project repos, resume PDF)** — `src/data/links.ts`
- **Your photo** — drop a file at `public/profile.jpg` (used in the hero and about sections; falls back to a monogram until it exists)
- **Your resume PDF** — drop a file at `public/resume.pdf` (the "Download Resume" button in the hero links here)

## Notes

- The Projects section uses a sticky "stacked card" scroll effect — each project pins in place and the next one slides up to cover it.
- Colors, fonts, and type scale are defined as Tailwind theme tokens in `tailwind.config.js` (`gold`, `goldSoft`, `ink`, `surface`, `paper`, `mute`) if you want to retheme.
- The contact form has no backend — submitting it opens the visitor's email client with a pre-filled message (via a `mailto:` link), addressed to the email in `links.ts`.
