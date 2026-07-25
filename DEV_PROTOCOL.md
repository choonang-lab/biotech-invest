# DEV_PROTOCOL — how to develop this app unattended

This file is self-contained. A loop, a scheduled agent, or a fresh session can
follow it with no other context. Do exactly one backlog item per iteration.

## Each iteration
1. Read `BACKLOG.md`. Pick the **first unchecked** item (top = highest value).
2. Implement it (see invariants). Keep changes scoped to that one item.
3. **Verify** (mandatory — see below). If verification fails, fix before ticking.
4. In `BACKLOG.md`: check the box, and move the line to `## Done` with today's date and a one-line note.
5. If content was added, update the glossary so no new jargon is left undefined.
6. Stop the iteration. (The driver decides when the next one starts.)

## Stop condition
When every box under all sections except `## Done` is checked, the backlog is
complete. Do NOT invent new scope on your own — instead append proposed ideas
under a new `## Proposed (needs human OK)` heading and stop. Adding polish is
fine; adding whole new features or changing the product's nature is not.

## Verification (required every iteration)
- Serve with the **no-store dev server** (defeats HTTP caching): `cd ~/biotech-invest && (python3 devserver.py 8731 >/tmp/btgym.log 2>&1 &)` (reuse if already up). Do NOT use plain `http.server` — it caches and you will verify stale content.
- **Bump the `?v=N` query on the asset refs in index.html whenever you change any js/*.js or css/*.css.** The preview browser caches asset URLs hard; a new `?v=` is the only reliable bust. Increment N (currently 2) across css + all three script tags together.
- Load `http://localhost:8731/index.html?b<N>#/...` in the browser preview (add a unique query on index.html too so the document itself reloads). If a stale service worker lingers, clear it once: in the page console run getRegistrations()→unregister and caches.keys()→delete.
- Confirm **zero console errors** (read_console_messages, onlyErrors).
- Hash navigation renders on the next tick — set the hash via a real navigate (or in one call, then read the DOM in a SEPARATE call). Do not query the DOM in the same call that sets the hash.
- If you touched content: confirm the new module/lesson/quiz renders and the quiz scores correctly (click the correct option, confirm the "Correct." callout).
- If you touched a tool: run it with sample inputs and confirm the math is right.
- If any check fails, the item is not done.

## Invariants — never violate
- **Educational only. No investment advice, no buy/sell/hold, no price targets.**
- **No live market data / no tickers / no network calls for prices.** The user types numbers in. This is the product's core boundary — do not cross it.
- Content is **data**: add modules/lessons/quiz/glossary by editing `js/course.js` only. Never hardcode content into app.js.
- Vanilla JS, **single-quote strings**, no frameworks, no build step, no new dependencies.
- Preserve existing user state: the localStorage key is `btgym.v1` and the state shape in app.js — do not rename or break it. If state shape must change, migrate, don't wipe.
- Keep it offline-first: if you add a file, add it to the `ASSETS` list in `sw.js`. The SW is **network-first** (fresh online, cache offline) — keep it that way. On release, bump `CACHE` in sw.js and the `?v=` in index.html together.
- Match existing code style, block-renderer schema ({p}/{h}/{ul}/{callout}), and tone (plain, base-rate-honest, no hype).

## Industry Atlas — data-layer rules (js/atlas.js)
- **Two layers, kept separate.** Evergreen prose lives in `ATLAS` (framework lessons + area deep-dives, same block schema as course.js). Volatile facts (market size, key players, landmark drugs, franchises, M&A status) live ONLY in `ATLAS_DATA` — never hardcode a figure into a lesson.
- **Every volatile fact is dated.** Each carries an `asOf` quarter (e.g. '2026-Q2') and a `pending` boolean (true = not yet verified / needs refresh). The area page renders "as of" badges from these; `pending` shows a "to verify" marker.
- **Area pages = dated panel + evergreen lessons.** The panel (`atlasPanel`) auto-renders from `ATLAS_DATA`; lessons stay figure-free so they never go stale.
- **Building an area:** research-verify the figures FIRST (cite sources), fill `ATLAS_DATA.areas.<id>` (set values, `asOf`, clear `pending` on verified fields), THEN write the evergreen lessons that reference the area qualitatively.
- **atlas.js** is in sw.js `ASSETS` and gets the same `?v=` bump as other js on any change.

## Quarterly ATLAS_DATA refresh run
A refresh is its own kind of iteration (can be triggered ~quarterly or after major M&A). Steps: re-verify each area's figures via research (approvals, sales rank, ownership changes), update the values and bump each `asOf`, clear/set `pending`, and bump `ATLAS_DATA.updated`. **Touch ONLY ATLAS_DATA — never the prose.** Verify the panels render and note what changed.

## Content quality bar
- Lessons teach how to *think*, not what to buy. Every bullish idea should be framed against the base rate.
- Quizzes explain the reasoning in `why` for both right and wrong answers.
- Use callouts (kind: 'warn' / 'bad' / '') for the one thing a reader must remember.

## Handy facts (kept here so runs don't have to re-derive)
- Runway math: cash / quarterly burn. <12 mo = financing overhang.
- Phase 1 → approval base rate ≈ 10% overall; lower in oncology; higher for rare disease / validated biomarker. Phase 2→3 is the biggest gate.
- rNPV lever: probability-of-success usually moves value more than peak-sales estimates.
