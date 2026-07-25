# Development backlog — Biotech Thinking Gym

Worked top to bottom. One unchecked item = one iteration. Tick the box and add a
one-line note when done. Highest-value items first. See DEV_PROTOCOL.md for how.

## Content — flesh out stubbed modules (highest value)
_All stub modules complete — see Done._

## Content — enrich existing
_Glossary coverage complete — see Done._

## Features
_All feature items complete — see Done._

## Polish
_All polish items complete — see Done._

## Round 2 — next features (user-approved 2026-07-24)
_All round-2 items complete — see Done._

## Round 3 — next features (user-approved 2026-07-24)
_All round-3 items complete — see Done._

## Industry Atlas — build-out (user-approved 2026-07-24)
Architecture done (js/atlas.js): evergreen prose in ATLAS; volatile figures in ATLAS_DATA (dated, `pending` flags, "as of" badges). Part A framework (5 lessons) done. Now build the Oncology Tier-1 deep dive + verify its figures. **Do the figure-verification item FIRST** so lessons can reference verified numbers.
- [x] **Verify Oncology figures** (2026-07-24) — research pass verified 13 claims (3-0): market ≈$252B 2024 (IQVIA), ~$441B by 2029; Keytruda ≈$25B FY2023 anti-PD-1 (Merck); AZ oncology $20.3B + Calquence $3.1B FY2024 (SEC 10-K); Pfizer/Seagen close Dec 2023 ~$43B → Padcev/Adcetris/Tivdak/Tukysa; MOA/owners for Opdivo/Enhertu/checkpoints. Applied to ATLAS_DATA.oncology, pending cleared (Roche still pending). Refuted a bogus $190.6B figure. Panel verified, ?v=26. (Pass hit rate limit resets 2am SGT; Darzalex/Opdivo exact revenue left unstated.)
- [x] **Oncology deep-dive: Immuno-oncology** (2026-07-24) — lesson onc2 in atlas.js: checkpoints (PD-1/PD-L1/CTLA-4), why IO became a franchise war (label breadth + trials, not the molecule), biomarkers & combinations, IO crowding. Evergreen, figures kept in panel. Verified renders, zero console errors, ?v=27.
- [x] **Oncology deep-dive: Targeted therapy** (2026-07-24) — lesson onc3: driver mutations (EGFR/ALK/BRAF/HER2/KRAS), kinase inhibitors, biomarker-enriched trials (better odds), resistance & the next-gen treadmill, small-molecule cliff risk. Verified renders, zero console errors, ?v=28.
- [x] **Oncology deep-dive: ADCs** (2026-07-24) — lesson onc4: antibody/linker/payload "guided missile", bystander effect expanding eligible patients, Enhertu (AZ/Daiichi) + the Seagen buyout as modality moats (linker/manufacturing hard to copy). Verified renders, zero console errors, ?v=29.
- [x] **Oncology deep-dive: Cell therapy & bispecifics** (2026-07-24) — lesson onc5: CAR-T as a "living drug" (heme wins, solid-tumor wall, per-patient manufacturing economics/toxicity), bispecific T-cell engagers as the off-the-shelf scalable alternative; "watch whether a modality can scale". Verified renders, zero console errors, ?v=30.
- [x] **Oncology deep-dive: the investing angle** (2026-07-24) — lesson onc6: where the moats are (biomarker franchises, modality engineering, label breadth, next-gen treadmill) vs risks (crowding, line-of-therapy, cliff, binary readouts), applying the six questions + rNPV/runway tools to oncology. Removed the onc1 "being built out" placeholder. Verified: 6-lesson deep dive complete, zero console errors, ?v=31.

**INDUSTRY ATLAS build-out COMPLETE (2026-07-24).** Architecture (evergreen ATLAS + dated ATLAS_DATA), Part A framework (5 lessons), Oncology data panel (verified figures), and Oncology deep dive (6 lessons) all done. Atlas roadmap section (future areas, cross-cutting layers, quarterly refresh) left for when approved.

## Industry Atlas — Cardiometabolic/GLP-1 (user-approved 2026-07-24)
Area scaffolded (ATLAS_DATA.cardiometabolic + card1 intro) with figures verified in the earlier GLP-1 research pass (Novo/Lilly duopoly, semaglutide/tirzepatide, Lilly Q1'26 Mounjaro $8.7B/Zepbound $4.2B, GLP-1 ≈$71B cumulative US to 2024). Deep-dive lessons are evergreen prose — no research needed. (Optional: a scoped pass could nail the annual market-size figure, currently `pending`.)
- [x] **Cardiometabolic deep-dive: the GLP-1 mechanism & the obesity wave** (2026-07-24) — lesson card2: what GLP-1 (and GLP-1/GIP) agonists do, diabetes→obesity TAM expansion, oral vs injectable, supply as the binding constraint/moat, label expansion. Verified renders, zero console errors, ?v=33.
- [x] **Cardiometabolic deep-dive: the Novo vs Lilly duopoly** (2026-07-24) — lesson card3: how two peptide/manufacturing incumbents came to own it, tirzepatide's dual-agonist edge, next-gen (triple agonists, oral GLP-1, amylin), "priced for perfection" + manufacturing/data moats. Verified, zero console errors, ?v=34.
- [x] **Cardiometabolic deep-dive: beyond GLP-1** (2026-07-24) — lesson card4: SGLT2 (diabetes→CV→renal expansion), insulins, statins/PCSK9 lipid-CV franchises, and the metabolism/heart/kidney convergence; label expansion as the value driver. Verified, zero console errors, ?v=35.
- [x] **Cardiometabolic deep-dive: the investing angle** (2026-07-24) — lesson card5: how the game flips from "will the science work?" to "how big/durable/priced-in?" — chronic de-risked franchises vs priced-for-perfection, duopoly erosion, incretin patent cliffs, access/pricing risk. Verified: 5-lesson deep dive complete, zero console errors, ?v=36.

**CARDIOMETABOLIC/GLP-1 build-out COMPLETE (2026-07-24).** Data panel (verified Novo/Lilly figures; annual market size still pending) + 5-lesson deep dive done. Atlas now has 2 areas (Oncology, Cardiometabolic).

## Industry Atlas — Immunology & Inflammation (user-approved 2026-07-24)
Area scaffolded (ATLAS_DATA.immunology + imm1 intro). Humira patent-cliff verified earlier; drug/MOA/owner identities are textbook-stable; market size + current revenues flagged `pending` (a scoped research pass is verifying them — apply results to ATLAS_DATA when it returns; if rate-limited, leave pending). Deep-dive lessons are evergreen prose — no research needed.
- [x] **I&I deep-dive: the cytokine map** (2026-07-24) — lesson imm2: mechanism classes (anti-TNF backbone, IL-23/IL-12-23, IL-17, IL-4/13, oral JAK), matching cytokine to disease, more-selective-target displacement pattern. Verified renders, zero console errors, ?v=38.
- [x] **I&I deep-dive: the Humira playbook** (2026-07-24) — lesson imm3: how AbbVie survived the biggest patent cliff by pre-launching better next-gen successors (Skyrizi IL-23 + Rinvoq JAK) and cannibalizing Humira on purpose. ALSO applied verified I&I figures to ATLAS_DATA panel (Humira $9.0B/Skyrizi $11.7B/Rinvoq $6.0B/combined $17.7B FY2024, Stelara $10.4B, Cosentyx $6.1B, market ≈$108B; $212B refuted; Dupixent revenue still pending). Verified renders, zero console errors, ?v=39.
- [x] **I&I deep-dive: biosimilars, JAK safety & indication expansion** (2026-07-24) — lesson imm4: slow biologic biosimilar erosion (Humira -⅓ yr1 vs generic -90%; Stelara now), the JAK class boxed-warning saga (safety→later lines), and indication expansion as value compounding ("value = sum of labels on a slow erosion clock"). Verified, zero console errors, ?v=40.
- [x] **I&I deep-dive: the investing angle** (2026-07-24) — lesson imm5: displacement risk (disruptor vs disrupted), biosimilar-timing calendar, the own-your-successor test, safety-driven positioning; value a drug as a sum of indications on the erosion clock. Verified: 5-lesson deep dive complete, zero console errors, ?v=41.

**IMMUNOLOGY & INFLAMMATION build-out COMPLETE (2026-07-24).** Verified data panel (Humira/Skyrizi/Rinvoq/Stelara/Cosentyx FY2024, market ≈$108B; Dupixent revenue still pending) + 5-lesson deep dive. Atlas now has 3 areas (Oncology, Cardiometabolic, Immunology).

## Industry Atlas — Neuroscience/CNS (user-approved 2026-07-24)
Area scaffolded (ATLAS_DATA.neuroscience + neu1 intro). Alzheimer's honest-failure record verified earlier; drug/MOA/owner identities textbook-stable; market size + revenues flagged `pending` (a scoped research pass is verifying them — apply to ATLAS_DATA when it returns; if rate-limited leave pending). Deep-dive lessons are evergreen prose — no research needed.
- [x] **CNS deep-dive: why the brain is hard** (2026-07-24) — lesson neu2: BBB, poorly-understood biology, slow/subjective endpoints + placebo, heterogeneity; Alzheimer's graveyard (98 fails vs 2, ~9x worse); discount CNS probabilities. Verified, zero console errors.
- [x] **CNS deep-dive: the disease battlegrounds & franchises** (2026-07-24) — lesson neu3: MS (anti-CD20 Ocrevus), migraine (CGRP), Alzheimer's (anti-amyloid Leqembi/Kisunla), psychiatry breakthrough (muscarinic Cobenfy/KarXT), SMA (Spinraza/Zolgensma). Verified.
- [x] **CNS deep-dive: the mechanism shift & the M&A wave** (2026-07-24) — lesson neu4: symptomatic→disease-modifying, novel targets, genetic medicines; big pharma buying de-risked CNS mechanisms. Verified.
- [x] **CNS deep-dive: the investing angle** (2026-07-24) — lesson neu5: risks (graveyard base rate, subjective endpoints, Aduhelm controversy, runway) vs rewards (durable MS/migraine franchises, fast re-rating, M&A exit); size small, discipline over conviction. Verified: 5-lesson deep dive complete, zero console errors, ?v=43.

**NEUROSCIENCE/CNS build-out COMPLETE (2026-07-24).** VERIFIED data panel (market ≈$127B 2025; Kesimpta $3.2B MS, Zolgensma $1.2B + Spinraza $1.5B SMA, Biogen MS ~$4.3B, Leqembi ~$0.6B; BMS/Karuna $14B for Cobenfy; BIO neurology LoA 5.9% vs 7.9% — graveyard confirmed; Ocrevus/CGRP still pending) + 5-lesson deep dive. Atlas now has ALL 4 Tier-1 areas: Oncology, Cardiometabolic, Immunology, Neuroscience — all with verified panels.

## Industry Atlas — Tier 2 comprehensive (user-approved 2026-07-24)
4 Tier-2 areas scaffolded. **FIGURES VERIFIED & APPLIED (2026-07-24, ?v=48)** — combined research pass returned 25 primary-sourced FY2024 figures (3-0): BioMarin Voxzogo $735M / Roctavian $26M-then-withdrawn; Vertex CF ≈$11B; Sanofi ERTs; Gilead HIV $19.6B/Biktarvy $13.4B; Sovaldi $84k cure-paradox; Gardasil $8.6B; Comirnaty −52%/Spikevax $3.1B; Trelegy £2.7B; Dupixent €13.1B (first COPD biologic); Altuviiio €682M. Applied to all 4 panels (pending→false). STILL pending: the 4 market-size TAMs + Hemlibra/Casgevy/Ofev/Alexion/Shingrix revenues. Deep-dive lessons are evergreen prose — no research.
### Rare & Orphan Disease — DONE (2026-07-24), 5-lesson deep dive, verified, ?v=47
- [x] `rare2` — why rare disease beats the base rate (genetic causation, biomarkers, orphan incentives)
- [x] `rare3` — the modality toolkit (ERT, gene therapy/editing, antisense/RNAi, mutation-specific molecules)
- [x] `rare4` — orphan pricing & reimbursement (price IS the market; reimbursement is the real risk)
- [x] `rare5` — the investing angle (high-probability/capped-upside/durable-moat; size by patients×price)
### Infectious Disease & Vaccines — DONE (2026-07-24), 5-lesson deep dive, verified, ?v=49
- [x] `inf2` — the broken economics of antibiotics (reserve use → no revenue; market failure; pull incentives)
- [x] `inf3` — the cure paradox (HCV: curing shrinks the market) + durable HIV; chronic beats cured commercially
- [x] `inf4` — vaccines (mRNA platform, episodic/policy-driven demand, the COVID boom-bust)
- [x] `inf5` — the investing angle (read market structure first: durable/self-limiting/episodic/broken)
### Respiratory — DONE (2026-07-24), 5-lesson deep dive, verified, ?v=50
- [x] `resp2` — the inhaled-device moat (device delivery hard to copy; Advair resisted generics)
- [x] `resp3` — the biologic shift in severe asthma/COPD (type-2 inflammation; Dupixent COPD; immunology overlap)
- [x] `resp4` — fibrosis & pulmonary hypertension (specialist niches, antifibrotics, IPF white space)
- [x] `resp5` — the investing angle (which layer: device franchise / type-2 biologic / specialist niche)
### Hematology (non-malignant) — DONE (2026-07-24), 5-lesson deep dive, verified, ?v=51
- [x] `hem2` — hemophilia: factor → antibody (Hemlibra) → gene therapy; convenience beats sophistication
- [x] `hem3` — sickle cell & the CRISPR moment (Casgevy, first CRISPR medicine; slow ramp)
- [x] `hem4` — the commercial reality of one-time cures (Roctavian withdrawn; curative ≠ commercial)
- [x] `hem5` — the investing angle (modality-disruption + rare-disease economics; convenience/durability/reimbursement)

**TIER-2 COMPREHENSIVE COMPLETE (2026-07-24).** All 4 areas (Rare, Infectious, Respiratory, Hematology) = verified data panels + 5-lesson deep dives (20 lessons). Atlas now has 8 areas + Part A + cross-cutting reference. ?v=51.

## Industry Atlas — Ophthalmology (5th Tier-2, user-approved 2026-07-24)
Area scaffolded (ATLAS_DATA.ophthalmology + oph1 intro). Figures `pending` — scoped research pass verifying market size + drug/player revenues; apply when it returns. Deep-dive lessons evergreen — no research.
- [x] `oph2` — the anti-VEGF durability war (dosing-interval competition Eylea vs Vabysmo; Eylea HD biosimilar defense; convenience decides)
- [x] `oph3` — new mechanisms open markets (complement for geographic atrophy; the eye as gene-therapy frontier — Luxturna)
- [x] `oph4` — glaucoma, dry eye & the specialist buy-and-bill channel
- [x] `oph5` — the investing angle (durability moat, biosimilar clock, first-in-indication value, gene-therapy optionality)

**OPHTHALMOLOGY (5th Tier-2) build-out COMPLETE (2026-07-24).** 5-lesson deep dive verified, ?v=53. Panel figures pending — research pass running. Atlas now has 9 areas (Tier-1 ×4 + Tier-2 ×5).

## Atlas roadmap (remaining)
- [x] All 4 Tier-1 areas (Oncology, Cardiometabolic, Immunology, Neuroscience) — done, verified panels.
- [x] **Cross-cutting reference layers** (2026-07-24) — window.MODALITIES (9 evergreen modality cards: small molecule→mAb→ADC→bispecific→CAR-T→gene therapy→RNA→peptide→radiopharma, each with what/good-at/limits/moat/examples) + window.ATLAS_PLAYERS (12 dated big-pharma profiles from the verified area passes — focus/flagship/cliff/M&A, with asOf+pending badges). New viewModalities/viewPlayers, routes #/atlas/modalities & /players, Atlas-landing "Cross-cutting reference" section. Verified: 9 + 12 render, zero console errors, ?v=45.
- Optional: quarterly ATLAS_DATA refresh — nail residual `pending` figures (oncology Darzalex/Opdivo, cardiometabolic annual market size, immunology Dupixent, CNS Ocrevus/CGRP, and pending player rows Novo/Roche/Sanofi/Amgen).

## Done
<!-- move finished items here with a date and one-line note -->
- [x] **Module 3 — Reading the financials** (2026-07-24) — 4 lessons (runway/burn, dilution, going-concern, below-cash trap) + 3-question quiz; added 6 glossary terms. Verified: renders, quiz scores, zero console errors.
- [x] **Module 5 — Valuation & how pros think** (2026-07-24) — 3 lessons (rNPV build, why probability dominates, buy-the-rumor) + 3-question quiz; added 3 glossary terms (POS, catalyst, buy-the-rumor). Verified: renders, quiz scores, zero console errors.
- [x] **Module 1 — The science & the pipeline** (2026-07-24) — 3 lessons (modalities, therapeutic areas, mechanism/target/biomarker) + 3-question quiz; added 7 glossary terms. Verified: renders, quiz scores, zero console errors.
- [x] **Module 4 — The players & the ecosystem** (2026-07-24) — 3 lessons (company tiers, patent cliff & M&A engine, CRO/CDMO picks-and-shovels) + 3-question quiz; added 6 glossary terms. Verified: renders, quiz scores, zero console errors.
- [x] **Module 7 — Putting it together** (2026-07-24) — 2 lessons (end-to-end 3-question thesis checklist, pre-mortem & journal habit) + 2-question quiz; added 1 glossary term. All 8 modules now have content. Verified: renders, quiz scores, zero console errors.
- [x] **Module 6 case studies** (2026-07-24) — added 3 case-study lessons (a win: validated biology; an honest failure: hard neuro biology; a scam: secrecy dressed as innovation), each ending in the lesson it teaches. Verified: renders, zero console errors.
- [x] **Glossary coverage audit** (2026-07-24) — audited lesson jargon; added 7 terms (primary endpoint, blockbuster, generic, reverse merger, pump-and-dump, Fast Track, accelerated approval). Now 42 terms. Verified: search works, zero console errors.
- [x] **Spaced-repetition review** (2026-07-24) — missed quiz questions record to a Leitner deck (state.review, additive); new #/review view re-serves them (correct advances box, graduates at box 3; wrong resets to 1). Added home tile with due-count + drawer link. Verified full cycle: miss→box1→box2→graduate→empty, zero console errors. Also fixed home copy "Seven"→"Eight" modules.
- [x] **Dilution simulator** (2026-07-24) — new TOOLS.dilution (shares, price, raise, discount) → new share count, ownership dilution %, and "a 1.00% stake → X%"; discount branch flags value transfer. Wired into drawer + home tile. Caught & fixed a labeling bug (retention factor shown as 85% instead of 0.85%). Verified both branches + zero console errors.
- [x] **Phase-success lookup** (2026-07-24) — new TOOLS.phases: area selector → approximate Phase 1→approval base rate (oncology ~5% flagged below the ~8% average, rare ~17% above) plus a phase-transition ladder, with a clear "illustrative, not live/precise" caveat. Wired into drawer + home tile. Verified: selector updates, zero console errors.
- [x] **PNG icons** (2026-07-24) — rendered icon-512.png via qlmanage from icon.svg, downscaled icon-192.png via sips (exact 192/512 dims). Added both to sw.js ASSETS, bumped CACHE to v3. Verified: all 3 manifest icons resolve 200, icon renders correctly (teal flask), zero console errors.

---
**ROUND 1 COMPLETE (2026-07-24).** All content (8 modules, 42 glossary terms, 3 Module-6 case studies), all 5 tools (runway, rNPV, dilution, phase-success, red-flag checklist), spaced-repetition review, and PWA polish (network-first SW, versioned assets, PNG icons) done and verified.

### Round 2
- [x] **Deeper rNPV model** (2026-07-24) — rebuilt TOOLS.rnpv as multi-stage: phase selector (which phases remain) + per-phase POS & cost inputs (base-rate defaults), computing compounded POS, PV of risk-adjusted sales, risk-adjusted cost, and rNPV = PV − cost; callout names the steepest gate. Renamed "toy"→"model" in drawer/tile. Verified against hand calc (entering P2: 15.3%/$223M/$123M/$99M; full pipeline compounds to 8.0% = base rate), zero console errors.
- [x] **Rules-of-thumb cheat sheet** (2026-07-24) — added window.RULES to course.js (20 rules, each with a why) + viewCheatsheet grouping by theme (7 groups: three questions, dev odds, financials, valuation, ecosystem, scams, discipline). New #/cheatsheet route + drawer link + home tile. Verified: 20 rules render in 7 groups, zero console errors.
- [x] **Journal export/import** (2026-07-24) — journal view now has a Backup card: Export JSON ({type,version,entries}), Export Markdown, Import JSON (FileReader, validates, de-dupes by co|when|thesis, merges). All local via Blob/URL — no network. Verified: merge adds only new (1 of 2), MD formats, bad import caught, exports fire clean, zero console errors. Cleared test data after.
- [x] **Capstone case walkthrough** (2026-07-24) — new viewCapstone (#/capstone): 6-step guided stepper analysing fictional "Meridian Therapeutics" through the 3 questions with runway/rNPV/dilution computed inline (12mo runway, 15.3% POS, $64M rNPV, 12.3% dilution — all hand-verified). Clearly labelled fictional; Back/Next/Finish→journal. Wired to home tile + drawer + a Module 7 callout. Verified: stepper nav, correct math, zero console errors.

---
**ROUND 2 COMPLETE (2026-07-24).** All 4 user-approved features done and verified: deeper multi-stage rNPV model, rules-of-thumb cheat sheet (20 rules), journal export/import (local backup), and the capstone case walkthrough.

### Round 3
- [x] **Global search** (2026-07-24) — new viewSearch (#/search): one input searches lessons (title+body via lessonText helper), glossary, and rules at once; results tagged Lesson/Term/Rule and link to source. Added drawer link + home tile. Verified: cross-source hits (dilution→7, POS→6), min-length guard, result click lands on the right lesson, zero console errors.
- [x] **More capstone cases** (2026-07-24) — generalised viewCapstone to a 3-case picker sharing calc()/standardSteps()/scamSteps(): Meridian (coherent oncology thesis), Cirrus Bio (great science but 6mo runway < 11mo catalyst → funding is the binding constraint, 30.8% dilution), Apex NovaCure (5-step red-flag scam walkthrough). "All cases" back-nav from step 1. Verified: picker, Cirrus funding-fails math, scam 5 steps, zero console errors.
- [x] **Exam mode** (2026-07-24) — new viewExam (#/exam): 20 questions interleaved across all modules (deterministic, no Math.random), one at a time with feedback + progress; wrong answers feed the review deck via addMiss; summary shows score vs 70% pass threshold; stores state.exam.bestPct (additive) for the certificate. Home tile shows best %. Verified: 20/20 perfect (nothing to review), 0/20 fail (20→review, best held at 100), zero console errors.
- [x] **Completion certificate** (2026-07-24) — new viewCertificate (#/certificate): gated on overallPct — <100% shows a "still to do" checklist; at 100% shows a printable certificate (modules 8/8, quizzes passed, exam best score) with a persisted name field (state.certName, additive) + window.print(). Added @media print CSS, home tile at 100%, drawer link. Verified: gate at 0%, unlock at 100%, live name persistence, exam line, home tile appears, zero console errors.

---
**ROUND 3 COMPLETE (2026-07-24).** All 4 user-approved features done and verified: global search, more capstone cases (3-case picker), exam mode, and completion certificate. Any further ideas go under a new "## Proposed (needs human OK)" heading per DEV_PROTOCOL.
- [x] Cache-bust + network-first SW (2026-07-24) — switched SW to network-first (fresh online, cache offline), added `?v=` versioned asset refs in index.html, and a no-store `devserver.py` for reliable dev verification. Replaces the old CACHE-bump-only plan.
