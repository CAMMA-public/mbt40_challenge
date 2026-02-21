# Mbt40 Challenge

Official website for the MultiBypass Surgical Action Triplet Challenge (MICCAI 2026 EndoVis).

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui

## Local development

```sh
npm install
npm run dev -- --host --port 8020
```

Then open http://localhost:8020.

## Deploy to GitHub Pages

- Vite base path is set to `/mbt40_challenge/` in `vite.config.ts` for project pages.
- Workflow `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on pushes to `main` (or manual dispatch).
- In repository settings, enable Pages with source “GitHub Actions.”
- After the first successful run, the site will be served at `https://camma-public.github.io/mbt40_challenge/`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Project structure

- `src/pages` — top-level routes (home, challenge, dataset, submission, etc.)
- `src/components` — shared layout and UI components
- `src/assets` — static images and logos
