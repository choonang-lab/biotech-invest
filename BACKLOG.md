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

## Industry Atlas — Tier 2.5 (MASH + Nephrology, user-approved 2026-07-24)
2 areas (tier:2.5, "T2.5" badge). **FIGURES VERIFIED & APPLIED (2026-07-24, ?v=57)** — 112-agent pass: MASH Rezdiffra first-approved (Mar 2024) ≈$958M FY2025 (≈the whole current MASH market), semaglutide won FDA MASH label; nephrology Farxiga $7.66B FY2024 (AZ's largest), Filspari $410M FY2025 (+144%, IgA nephropathy), Tarpeyo full approval Dec 2023. Market sizes + some drugs (Jardiance/Kerendia/Fabhalta/tolvaptan/roxadustat/FGF21) stayed unverified → pending. Deep-dive lessons evergreen, no research.
### MASH (metabolic liver disease) — DONE (2026-07-24), 5-lesson deep dive, verified, ?v=56
- [x] `mash2` — why MASH was a graveyard (multifactorial biology, biopsy endpoints, Intercept OCA/Gilead selonsertib failures)
- [x] `mash3` — the breakthrough & mechanism landscape (Rezdiffra THR-β first approval; FGF21; pipeline)
- [x] `mash4` — the GLP-1 disruption (will incretins eat MASH? treating the cause vs the liver)
- [x] `mash5` — the investing angle (discount the projected TAM; GLP-1 overhang; biopsy-gated uptake; respect the history)
### Nephrology / renal — DONE (2026-07-24), 5-lesson deep dive, verified, ?v=58
- [x] `neph2` — the SGLT2 cardiorenal revolution (diabetes drug → kidney/heart; label expansion; convergence)
- [x] `neph3` — the IgA nephropathy wave (Tarpeyo/Filspari/Fabhalta; crowded fast; first-mover fragility)
- [x] `neph4` — ADPKD, anemia & the roxadustat lesson (regional regulatory divergence — FDA rejection)
- [x] `neph5` — the investing angle (which story: SGLT2 giant franchise / crowded IgAN race / specialist niche)

**TIER-2.5 COMPLETE (2026-07-24).** MASH + Nephrology = verified panels + 5-lesson deep dives (10 lessons). Atlas now has 11 areas (Tier-1 ×4 + Tier-2 ×5 + Tier-2.5 ×2). ?v=58. NOT YET PUSHED to GitHub — needs `git push` to reach the live site.

## Industry Atlas — Aesthetics (1st Tier-3, user-approved 2026-07-24) — DONE
Area built (tier:3, "T3" badge; ATLAS_DATA.areas.aesthetics + aes1–aes5). Distinctive lesson: the CASH-PAY CONSUMER model (unique in the Atlas). Deep-dive lessons evergreen prose, verified render (headings/callouts/lists, 0 console errors). **Figures VERIFIED & applied (research pass wf_9f53e761-cab, FY2024 filings, 25/25 claims confirmed):** Allergan Aesthetics segment ≈$5.18B, Botox Cosmetic ≈$2.72B (vs Botox Therapeutic ≈$3.28B — larger), Juvederm ≈$1.18B (−15%), Galderma ≈$4.41B + Mar-2024 SIX IPO (GALD), Evolus/Jeuveau ≈$266M (+32%), Revance/Daxxify acquired by Crown Labs (Aug 2024). STILL pending: total market size (no primary source; ≈$18B DataM analyst est. only) + Merz (private, undisclosed). ?v=62, sw CACHE btgym-v5.
- [x] `aes2` — the cash-pay consumer model (no payer → pricing power; DTC marketing & loyalty programs Allē/ASPIRE; elastic discretionary demand)
- [x] `aes3` — the brand moat (Botox: expired patents yet dominant; injector/patient trust, biologic complexity; durable ≠ permanent)
- [x] `aes4` — the toolkit, dual-use molecules & the players (4 categories; neurotoxin therapeutic-vs-aesthetic dual market; AbbVie/Galderma/Merz/Revance/Evolus)
- [x] `aes5` — the investing angle (consumer-discretionary lens — brand/share, demand cycle, retention, challengers win share not trials)

## Industry Atlas — Non-opioid Pain (2nd Tier-3, user-approved 2026-07-26)
Area built (tier:3, "T3" badge; ATLAS_DATA.areas.pain + pain1–pain5). Distinctive framing: the opioid crisis → huge WANTED market for non-addictive analgesia, but a GRAVEYARD (placebo response + brain-entangled safety failures, e.g. NGF/tanezumab), and the investing twist = the REIMBURSEMENT CRUX (clean label ≠ commercial win; priced against near-free generics). Breakthrough anchor: Vertex Journavx/suzetrigine (Nav1.8) FDA-approved Jan 2025 — first new-class acute pain drug in decades. Deep-dive lessons evergreen prose. Figures `pending` — research pass verifying (apply when returns).
- [x] `pain2` — the opioid shadow & unmet need (addiction liability; regulatory tailwind; why old non-opioids fall short)
- [x] `pain3` — the analgesia graveyard (placebo response; efficacy-vs-CNS-safety trap; NGF/tanezumab joint-safety failure) [warn callout]
- [x] `pain4` — toolkit & the sodium-channel breakthrough (generic NSAIDs/gabapentinoids/SNRIs/anesthetics; Nav1.8/Nav1.7 peripheral blockers; Journavx 2025; Vertex/Pacira/Heron)
- [x] `pain5` — investing angle (reimbursement crux — payer access/pricing vs cheap generics; acute beachhead → chronic prize)
**Figures VERIFIED & applied (research pass wf_3d752e03-13b, primary sources — FDA + Vertex/Pacira/Heron filings):** Journavx (suzetrigine) FDA-approved 30 Jan 2025, first-in-class Nav1.8, not DEA-scheduled, ≈$33M net sales first 9mo 2025; Exparel ≈$549M + Pacira total ≈$701M + Zilretta ≈$118M FY2024; Heron Zynrelef ≈$25.5M FY2024 (+44%); tanezumab NGF killed by 19-1 FDA adcom Mar 2021; Lilly re-entered Nav1.8 via SiteOne buy (up to $1.0B, May 2025). pain5 enriched with the NOPAIN-style bundled-payment reimbursement reform (evergreen framing). STILL pending: market size (no reliable figure survived — reframed to the verified point that branded non-opioid is a small slice) + Lyrica historic peak (unverified). ?v=64, sw btgym-v7.

## Industry Atlas — Women's Health (3rd Tier-3, user-approved 2026-07-26)
Area built (tier:3, "T3" badge; ATLAS_DATA.areas.womens + wh1–wh5). Distinctive framing: a market shaped by historical NEGLECT (women excluded from trials until ~early 1990s; menopause/endometriosis under-researched & under-diagnosed) → huge unmet need, BUT a commercial minefield (the 2002 WHI safety scare that froze hormone therapy for ~20 yrs; stigma; small effective markets; flops — Addyi "female Viagra", Makena withdrawal 2023). Investing twist: unmet need ≠ market — underwrite the diagnosed/reimbursed/de-stigmatised path. Modern toolkit: GnRH antagonists (endometriosis/fibroids), NK3 antagonists (non-hormonal menopause, Veozah/fezolinetant 2023), neuroactive steroids (PPD). wh3 has a warn callout. Deep-dive lessons evergreen prose. Figures `pending` — research pass verifying.
- [x] `wh2` — the neglect & the opportunity (trial exclusion; diagnostic delay; under-treated menopause; why unmet need is real)
- [x] `wh3` — the commercial minefield (WHI/HRT safety-scare overhang; stigma; small markets; Addyi & Makena cautionary cases) [warn callout]
- [x] `wh4` — modern toolkit & players (GnRH antagonists; NK3/Veozah; PPD neurosteroids; contraception/fertility; Organon/AbbVie/Astellas/Sumitomo/Bayer/Ferring)
- [x] `wh5` — investing angle (effective market vs prevalence; reimbursement vs generic hormones; stigma/diagnosis gap; safety-overhang risk; durability)
**Figures VERIFIED & applied (research pass wf_27d8b52e-acb, primary sources — Astellas/Organon/Sumitomo filings + FDA):** Veozah (fezolinetant) FDA-approved May 2023, first-in-class non-hormonal NK3 antagonist, ≈$230M (¥33.8B) global sales FY2024; Bayer Lynkuet (elinzanetant, first dual NK1/NK3) approved Oct 2025; Nexplanon record ≈$963M FY2024, Organon FY2024 rev ≈$6.4B / women's-health franchise ≈$1.78B; **Organon agreed to be acquired by Sun Pharma ≈$11.75B EV (Apr 2026)**; Sumitomo acquired Myovant ≈$1.7B (Mar 2023); Makena withdrawn 2023 after PROLONG failed; Zurzuvae (zuranolone) approved for PPD Aug 2023 but CRL for MDD; Addyi flop + WHI-2002 HRT drop confirmed. AbbVie Orilissa NOT separately disclosed (folded into "all other"). STILL pending: market size (no reliable figure survived — reframed to "hard to size", anchored to Organon's ≈$1.78B franchise for scale). ?v=66, sw btgym-v9.

## Case Studies module (NEW, user-approved 2026-07-26)
Standalone section mirroring the Atlas architecture: new `js/cases.js` (`window.CASES`), routes `#/cases`, `#/cases/<company>`, `#/cases/<company>/<lesson>`; views viewCases/viewCase/viewCaseLesson + casePanel (dated facts rows w/ asOf+pending badges); wired into router, drawer nav, home tile, index.html script tags, sw ASSETS. Two-layer like Atlas: evergreen narrative lessons + VOLATILE dated `facts` panel. Add companies over time; refresh only facts rows.
- [x] **Nektar Therapeutics (NKTR)** — 1st case, theme "Blow-up". 5 lessons (nk1 company+PEGylation platform → nk2 the 2018 BMS bempeg mega-deal → nk3 the 2022 Phase 3 collapse [bad callout] → nk4 reading the wreck + rezpeg immunology pivot → nk5 investing lessons). Distinctive teaching: "a mega-deal moves money, not risk"; platform≠product; Phase 2→3 cliff; binary concentration; validation≠proof. Evergreen prose; dated facts panel figures `pending` — research pass verifying (BMS deal ≈$1.85B upfront + ≈$1B equity, PIVOT IO-001 melanoma failure 2022, ~70% layoffs, rezpeg current status, cash). Verified: index/detail/lesson render, home tile + drawer link, 0 console errors. ?v=68, sw btgym-v11.
- [ ] Future case candidates (not started): pick next company (wins / honest failures / scams / blow-ups).

## Atlas roadmap (remaining)
- [x] All 4 Tier-1 areas (Oncology, Cardiometabolic, Immunology, Neuroscience) — done, verified panels.
- [x] **Cross-cutting reference layers** (2026-07-24) — window.MODALITIES (9 evergreen modality cards: small molecule→mAb→ADC→bispecific→CAR-T→gene therapy→RNA→peptide→radiopharma, each with what/good-at/limits/moat/examples) + window.ATLAS_PLAYERS (12 dated big-pharma profiles from the verified area passes — focus/flagship/cliff/M&A, with asOf+pending badges). New viewModalities/viewPlayers, routes #/atlas/modalities & /players, Atlas-landing "Cross-cutting reference" section. Verified: 9 + 12 render, zero console errors, ?v=45.
- [x] **Microbiome modality card** (2026-07-26) — added 10th MODALITIES card "Live biotherapeutic (microbiome)": defined bacterial consortia / fecal-microbiota products; novel mechanism validated by first FDA approvals (2022-23); limits = hard to define/manufacture, poorly-understood mechanism, trial graveyard, unproven reimbursement; examples Rebyota (Ferring) & Vowst (Seres/Nestlé) for recurrent C. difficile. Evergreen (no figures/research). Verified 10 cards render, 0 console errors. ?v=67, sw btgym-v10.
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
