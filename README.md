# Biotech & Pharma Investing — Thinking Gym

A mobile-ready **PWA** (installable, works offline) for learning how to *think* about biotech and pharma investing — not a source of tips or advice, but a gym for judgment.

> **Educational only.** No live market data, no investment advice, no buy/sell/hold. You bring the numbers; the app teaches you how to reason about them.

## What's inside

- **8-module course** — from "why biotech is binary" through the development path, financials, valuation, the players, wins/failures/scams, and putting it all together — each with a scored quiz.
- **5 interactive tools** — cash-runway calculator, a multi-stage rNPV valuation model, dilution simulator, phase-success lookup, and a red-flag checklist.
- **Real case studies** — fact-checked wins, honest failures, scams, and blow-ups (Vertex, Alzheimer's amyloid, Theranos, Vioxx, patent cliffs, and more).
- **Industry Atlas** — a map of the sector: a "how to read the landscape" framework plus deep dives on **9 therapeutic areas** (Oncology, Cardiometabolic/GLP-1, Immunology, Neuroscience, Rare Disease, Infectious Disease, Respiratory, Hematology, Ophthalmology), a modality reference, and big-pharma player profiles. Market figures are **dated, illustrative snapshots** — not live data.
- **Spaced-repetition review**, a **decision journal** (with export/import), a **final exam**, a **completion certificate**, and global search.

## Run it locally

It's plain static files — no build step. Serve the folder with any static server:

```bash
python3 devserver.py 8731
```

Then open `http://localhost:8731`. (`devserver.py` disables caching so edits show up immediately during development.)

## Install on your phone

Open the deployed site in a mobile browser and choose **"Add to Home Screen"** — it installs as a standalone app and works offline.

## Tech

Vanilla JavaScript, no framework, no dependencies. Content lives as data (`js/course.js`, `js/atlas.js`), so the course and Atlas expand by editing data, not code. Offline support via a network-first service worker (`sw.js`).

## Data & freshness

Volatile figures (market sizes, drug revenues, franchises) live in a separate, dated `ATLAS_DATA` layer with an "as of" quarter on every number, so they can be refreshed periodically without touching a word of the lessons.
