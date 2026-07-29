# Reframe / Field Guide

A local-first interview study and practice system for a Reframe Systems DFMA Engineer phone interview.

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## GitHub Pages

The production build uses `/Interview_simulator/` as its public base path.
`npm run build` writes the normal `dist` artifact and refreshes the compiled
root `index.html` and `assets/` files used by branch-based GitHub Pages.

The included GitHub Actions workflow can also deploy `dist` if the repository's
Pages source is later changed to **GitHub Actions**.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

## Content and data

- Editable study content: `src/data/content.ts`
- Application data types: `src/types.ts`
- Local persistence and import/export: `src/lib/storage.ts`
- Rule-based answer scoring: `src/lib/scoring.ts`

Progress, answers, confidence ratings, selections, mock results, and checklist state are stored in browser `localStorage`. Use Export before clearing browser data or moving to another device.

## Browser compatibility

The first version does not record audio. Browser speech recognition is not exposed because support and behavior vary considerably across browsers; typed transcripts are fully supported and remain local. Printing uses the browser print dialog. Import/export uses standard browser file APIs.
