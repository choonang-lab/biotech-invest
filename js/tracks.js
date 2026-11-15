/* Deep-dive tracks — practitioner-level specialisation in one therapeutic
   area (educational, NOT advice). The Atlas maps an area; a track trains you
   to judge a readout in it. Two layers, like the Atlas and Cases:
   - evergreen `lessons` (block schema: p / h / ul / callout / q+a exercise;
     optional `kind` tag). Worked examples quote fixed, published trial
     results (verified Nov 2026) — historical facts, not volatile data
   - a VOLATILE dated `bench` table of pivotal-trial results (each row has
     asOf + pending; pending = not yet source-verified).
   Lessons reference the table qualitatively; refresh only `bench` rows. */
window.TRACKS = {
  updated: '2026-Q4',
  intro: 'The Atlas tells you what an area is. A track trains you to judge a readout in it — the endpoints, the placebo rates, the benchmark results every new drug is measured against, and the failures that taught the field its rules. Specialists beat generalists in biotech because biology does not transfer between areas; pick a track and go deep.',
  disclaimer: 'Educational only. Trial figures are rounded, dated snapshots of published pivotal results, shown for calibration — not live data, and not a recommendation to buy, sell or hold any security. Benchmark rows were checked against the published trials in Nov 2026; any row marked "to verify" has not been.',
  tracks: [
    {
      id: 'immunology',
      name: 'Immunology & Inflammation',
      atlas: 'immunology',
      tagline: 'Skin, gut, joints and kidney — one cytokine map, a dozen endpoints, and placebo as the hidden variable.',
      plan: [
        'Time: the lessons and exercises take about 3 hours in all. The 8 weeks is the reading list at the bottom of this page — about 2–3 hours a week with the original papers',
        'Weeks 1–2 · Lessons 1–3 (endpoints and placebo), then read the psoriasis papers on the reading list',
        'Weeks 3–4 · Worked examples 4–6 (PIONEER, SUNSHINE/SUNRISE, BE HEARD), then read all three HS programmes and build your own table of placebo rates, HiSCR75 and dropouts',
        'Weeks 5–6 · Lessons 7–8 (read-across, which number is the primary), then the atopic dermatitis and alopecia papers',
        'Weeks 7–8 · Lessons 9–10 (post-mortems, power), then the UC papers and the two failure papers',
        'Ongoing · Lesson 11: log a dated prediction before every readout you follow, and score it afterwards'
      ],
      reading: {
        intro: 'The original papers behind every number in this track. Read the abstract first, then the results tables and the supplement — the supplement is where dropouts, subgroups and endpoint definitions live. Search the citation on PubMed to find each one.',
        weeks: [
          { week: 'Weeks 1–2 · Psoriasis', task: 'Notice that each trial has two co-primary endpoints (PASI plus a physician global score), and how small the placebo responses are.', papers: [
            'ERASURE and FIXTURE (secukinumab) — Langley et al., NEJM 2014',
            'UltIMMa-1 and UltIMMa-2 (risankizumab) — Gordon et al., Lancet 2018',
            'BE READY (bimekizumab) — Gordon et al., Lancet 2021;397:475'
          ] },
          { week: 'Weeks 3–4 · Hidradenitis suppurativa', task: 'Build your own table: placebo rate, drug rate, HiSCR75, discontinuations, for each of the six trials. Then explain the spread.', papers: [
            'PIONEER I and II (adalimumab) — Kimball et al., NEJM 2016;375:422',
            'SUNSHINE and SUNRISE (secukinumab) — Kimball et al., Lancet 2023;401:747',
            'BE HEARD I and II (bimekizumab) — Kimball et al., Lancet 2024;403:2504'
          ] },
          { week: 'Weeks 5–6 · Atopic dermatitis and alopecia', task: 'For each programme, find the primary endpoint and compare twin-trial results. Note how long alopecia trials must run.', papers: [
            'SOLO 1 and SOLO 2 (dupilumab) — Simpson et al., NEJM 2016',
            'ADvocate 1 and 2 (lebrikizumab) — Silverberg et al., NEJM 2023;388:1080',
            'Measure Up 1 and 2 (upadacitinib) — Guttman-Yassky et al., Lancet 2021;397:2151',
            'BRAVE-AA1 and AA2 (baricitinib) — King et al., NEJM 2022;386:1687',
            'ALLEGRO-2b/3 (ritlecitinib) — King et al., Lancet 2023;401:1518'
          ] },
          { week: 'Weeks 7–8 · Ulcerative colitis and the failures', task: 'Compare how each UC trial defines remission. Then read the two failures and write one sentence each on what could have warned you.', papers: [
            'GEMINI 1 (vedolizumab) — Feagan et al., NEJM 2013',
            'U-ACHIEVE and U-ACCOMPLISH (upadacitinib) — Danese et al., Lancet 2022',
            'INSPIRE and COMMAND (risankizumab) — Louis et al., JAMA 2024;332:881',
            'Secukinumab in Crohn\'s disease — Hueber et al., Gut 2012',
            'ORAL Surveillance (tofacitinib safety) — Ytterberg et al., NEJM 2022'
          ] }
        ]
      },
      bench: {
        asOf: '2026-Q4',
        note: 'Source-checked Nov 2026 against the published trials. Drug arm vs placebo at the primary timepoint, rounded. Compare placebo-adjusted differences — never raw responder rates across trials.',
        rows: [
          { area: 'Psoriasis', endpoint: 'PASI 90, wk 16', drug: 'Risankizumab (Skyrizi, IL-23)', trial: 'UltIMMa-1', d: 75, pb: 5, asOf: '2018', pending: false },
          { area: 'Psoriasis', endpoint: 'PASI 90, wk 16', drug: 'Bimekizumab (Bimzelx, IL-17A/F)', trial: 'BE READY', d: 91, pb: 1, asOf: '2021', pending: false },
          { area: 'Psoriasis', endpoint: 'PASI 75, wk 12', drug: 'Secukinumab 300 mg (Cosentyx, IL-17A)', trial: 'ERASURE', d: 82, pb: 5, asOf: '2014', pending: false },
          { area: 'Hidradenitis suppurativa', endpoint: 'HiSCR50, wk 12', drug: 'Adalimumab (Humira, TNF)', trial: 'PIONEER I', d: 42, pb: 26, asOf: '2016', pending: false },
          { area: 'Hidradenitis suppurativa', endpoint: 'HiSCR50, wk 12', drug: 'Adalimumab (Humira, TNF)', trial: 'PIONEER II', d: 59, pb: 28, asOf: '2016', pending: false },
          { area: 'Hidradenitis suppurativa', endpoint: 'HiSCR50, wk 16', drug: 'Secukinumab q2w (Cosentyx)', trial: 'SUNSHINE', d: 45, pb: 34, asOf: '2023', pending: false },
          { area: 'Hidradenitis suppurativa', endpoint: 'HiSCR50, wk 16', drug: 'Secukinumab q2w (Cosentyx)', trial: 'SUNRISE', d: 42, pb: 31, asOf: '2023', pending: false },
          { area: 'Hidradenitis suppurativa', endpoint: 'HiSCR50, wk 16', drug: 'Bimekizumab q2w (Bimzelx)', trial: 'BE HEARD I', d: 48, pb: 29, asOf: '2024', pending: false },
          { area: 'Hidradenitis suppurativa', endpoint: 'HiSCR50, wk 16', drug: 'Bimekizumab q2w (Bimzelx)', trial: 'BE HEARD II', d: 52, pb: 32, asOf: '2024', pending: false },
          { area: 'Atopic dermatitis', endpoint: 'EASI-75, wk 16 (key secondary; primary was IGA 0/1)', drug: 'Dupilumab (Dupixent, IL-4Rα)', trial: 'SOLO 1', d: 51, pb: 15, asOf: '2016', pending: false },
          { area: 'Atopic dermatitis', endpoint: 'EASI-75, wk 16 (key secondary; primary was IGA 0/1)', drug: 'Lebrikizumab (Ebglyss, IL-13)', trial: 'ADvocate 1', d: 59, pb: 16, asOf: '2023', pending: false },
          { area: 'Atopic dermatitis', endpoint: 'EASI-75, wk 16', drug: 'Upadacitinib 30 mg (Rinvoq, JAK1)', trial: 'Measure Up 1', d: 80, pb: 16, asOf: '2021', pending: false },
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 6 (secondary; primary was clinical response, 47% vs 26%)', drug: 'Vedolizumab (Entyvio, α4β7)', trial: 'GEMINI 1', d: 17, pb: 5, asOf: '2013', pending: false },
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 8', drug: 'Upadacitinib 45 mg (Rinvoq, JAK1)', trial: 'U-ACHIEVE', d: 26, pb: 5, asOf: '2022', pending: false },
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 12', drug: 'Risankizumab (Skyrizi, IL-23)', trial: 'INSPIRE', d: 20, pb: 6, asOf: '2024', pending: false },
          { area: 'Alopecia areata', endpoint: 'SALT ≤20, wk 36', drug: 'Baricitinib 4 mg (Olumiant, JAK1/2)', trial: 'BRAVE-AA1', d: 39, pb: 6, asOf: '2022', pending: false },
          { area: 'Alopecia areata', endpoint: 'SALT ≤20, wk 24', drug: 'Ritlecitinib 50 mg (Litfulo, JAK3/TEC)', trial: 'ALLEGRO-2b/3', d: 23, pb: 2, asOf: '2023', pending: false }
        ]
      },
      lessons: [
        {
          id: 'ii1',
          title: 'Why I&I rewards specialists',
          body: [
            { p: 'Immunology and inflammation (I&I) is the area where depth compounds fastest. The same handful of signalling pathways — TNF, IL-17, IL-23, IL-4/IL-13, JAK-STAT, B-cell signals like BAFF and APRIL — drive disease in the skin, gut, joints and kidney. Learn one pathway properly and you have learned something about five diseases.' },
            { p: 'It is also an area of unusually standardised measurement. Each disease has one or two accepted scoring systems, used in trial after trial for a decade or more. That means there is a benchmark for almost everything: once you know what the approved drugs achieved against placebo, you can judge a new result within minutes of the press release.' },
            { h: 'What makes it attractive' },
            { ul: [
              '"Pipeline in a product" — one drug that works on a pathway can be run across several diseases, each a separate commercial opportunity',
              'Big, chronic, reimbursed markets — patients stay on therapy for years, so a share point is worth a lot',
              'Big pharma appetite — the largest I&I franchises face patent cliffs, so buyers pay up for credible next-generation assets',
              'Transparent benchmarks — the standard of care is well documented, so the bar a new drug must clear is knowable in advance'
            ] },
            { h: 'What makes it dangerous' },
            { ul: [
              'Crowding — many companies chase the same validated pathway, and the fourth drug in a class rarely earns what the first did',
              'Placebo — response rates in some endpoints are high and variable enough to sink a genuinely active drug (lesson 3)',
              'Class safety — a safety finding for one drug can rewrite the label of every drug in its class',
              'Read-across that does not hold — a pathway that matters in one tissue can be irrelevant, or harmful, in another (lessons 7 and 9)'
            ] },
            { callout: 'In I&I the question is rarely "does the drug do anything?" It is "is it clearly better, safer or more convenient than what doctors already use, by enough to change a prescription?" Train yourself to ask the second question first.', kind: '' }
          ]
        },
        {
          id: 'ii2',
          title: 'The endpoint toolkit',
          body: [
            { p: 'Every I&I readout is reported in a disease-specific score. You cannot judge the result until you know what the score measures and how easy it is to move. The ones you will meet most:' },
            { ul: [
              '<strong>PASI (psoriasis)</strong> — area and severity of plaques. PASI 75/90/100 = the share of patients with a 75/90/100% improvement. Placebo barely moves it, so differences are large and clean',
              '<strong>EASI and IGA (atopic dermatitis)</strong> — EASI scores extent and severity; IGA 0/1 is a physician\'s global "clear or almost clear". IGA is stricter. Background topical steroids raise placebo rates',
              '<strong>HiSCR (hidradenitis suppurativa)</strong> — HiSCR50 = at least a 50% fall in abscesses plus inflammatory nodules, with no new abscesses or draining tunnels. It is a lenient, noisy count, and placebo rates are high. Newer trials also report HiSCR75 and HiSCR90 to separate drugs',
              '<strong>Mayo score (ulcerative colitis)</strong> — stool frequency, rectal bleeding and endoscopy. "Clinical remission" on the modified Mayo score is the usual primary; endoscopic and histologic healing are the harder, more durable measures',
              '<strong>SALT (alopecia areata)</strong> — percentage of scalp hair loss; SALT ≤20 means at most 20% of the scalp is still bald. Responses build slowly, so timepoints are long',
              '<strong>ACR20/50/70 (rheumatoid and psoriatic arthritis)</strong> — a composite of tender and swollen joints plus other measures; ACR20 is easy to hit, ACR50/70 separate drugs',
              '<strong>Proteinuria and eGFR (IgA nephropathy and other kidney disease)</strong> — protein in the urine as an early surrogate for accelerated approval; the slope of kidney function (eGFR) as the confirmatory measure'
            ] },
            { h: 'How an endpoint can flatter a drug' },
            { ul: [
              'A lenient threshold (HiSCR50, ACR20, PASI 75) shows a "win" that a strict one (HiSCR75, ACR70, PASI 100) would not',
              'An early timepoint catches the fastest drugs at their best; check what happens at one year',
              'A non-responder imputation choice, or how dropouts are counted, can move the headline by several points',
              'A responder rate and a mean change can tell different stories — a few big responders can carry the mean'
            ] },
            { q: 'A company headlines "PASI 75 in 80% of patients" for a new psoriasis drug. Why might that be less impressive than it sounds?', a: 'PASI 75 is the lenient threshold — modern IL-17 and IL-23 drugs are judged on PASI 90 and PASI 100, where the best drugs reach roughly three-quarters to nine-tenths of patients (see the table). A drug that leads with PASI 75 may be choosing the number that hides a gap at the stricter thresholds. Ask for PASI 90/100 and the physician global score, which is usually the co-primary.' },
            { callout: 'Before reading any I&I result, say out loud: which score, which threshold, at which week, and how are dropouts counted? If the press release does not tell you, that omission is information.', kind: 'warn' }
          ]
        },
        {
          id: 'ii3',
          title: 'Placebo is the hidden variable',
          body: [
            { p: 'Look down the benchmark table and compare the placebo column across diseases. In psoriasis, placebo patients almost never reach PASI 90. In hidradenitis suppurativa, a quarter to a third of placebo patients reach HiSCR50. That one fact explains much of why HS trials are hard to win and why psoriasis trials rarely fail.' },
            { p: 'Placebo response is not fixed — it varies from trial to trial with design choices. A drug that would clearly win against a low placebo can miss against a high one. So the most useful number in any I&I readout is the placebo-adjusted difference, and the most useful question before a readout is "what placebo rate should I expect here?"' },
            { h: 'What pushes placebo up' },
            { ul: [
              'Lenient, noisy endpoints — lesion counts that fluctuate naturally (HS) or subjective symptom scores',
              'Background therapy — patients allowed to keep topical steroids or other medicines improve on placebo too',
              'Regression to the mean — patients enrol when their disease is at its worst, then drift back towards average',
              'Trial geography and site mix — some regions and sites consistently show higher placebo rates',
              'Expectation — frequent visits, attention and hope improve symptom scores',
              'Era — as more effective treatments exist, the patients willing to enrol in placebo-controlled trials change'
            ] },
            { h: 'How to use it' },
            { ul: [
              'Compare drugs only on placebo-adjusted effects, and even then cautiously — cross-trial comparison is a weak form of evidence',
              'When a competitor reports, read its placebo arm as carefully as its drug arm. A high placebo in a competitor\'s trial is a warning for every trial in that disease, including the one you own',
              'Ask whether the trial is powered for the effect it is likely to see after a realistic placebo rate, not the effect in the company\'s slide deck'
            ] },
            { q: 'Your company\'s HS trial reads out next quarter. A competitor\'s HS trial just reported with a placebo HiSCR50 rate of 40% — above the 26–34% range in the table. Its stock rose because its drug arm was also high. What does this mean for your company?', a: 'It is a warning, not good news. A 40% placebo rate suggests recent HS trials (sites, regions, patient mix) may be running high placebo responses. If your company\'s trial sees something similar, its drug needs a higher absolute response to show the same difference — and it was probably powered assuming a lower placebo. Re-check the power assumptions (see lesson 10, on power) before the readout, not after.' },
            { callout: 'A competitor\'s positive readout is not automatically good news for your company. If it came with a high placebo rate, the bar your drug must clear may just have gone up.', kind: 'bad' }
          ]
        },
        {
          id: 'iw1',
          kind: 'Worked example',
          title: 'PIONEER I and II — same drug, two answers',
          body: [
            { p: 'Humira (adalimumab) won approval in hidradenitis suppurativa on two identical Phase 3 trials, PIONEER I and PIONEER II (Kimball, NEJM 2016). Same drug, same dose (40 mg weekly), same endpoint (HiSCR at week 12), same design. Here is what they found:' },
            { ul: [
              '<strong>PIONEER I</strong>: 41.8% on Humira vs 26.0% on placebo — a difference of about 16 points',
              '<strong>PIONEER II</strong>: 58.9% on Humira vs 27.6% on placebo — a difference of about 31 points'
            ] },
            { h: 'What to notice' },
            { ul: [
              'The placebo arms agree closely (26% and 28%). The drug arms differ by 17 points. Same drug, two trials, a near-doubling of the effect',
              'Neither number is "the" effect of Humira in HS. The honest benchmark is a range — roughly 16 to 31 points — not a single figure',
              'If PIONEER I had been the only trial, the drug would have looked modest. If PIONEER II had been the only one, it would have looked excellent'
            ] },
            { h: 'Why it matters for investing' },
            { p: 'Every single readout is one draw from a distribution. When a new drug reports one trial, you are seeing one draw, and twin trials of the same drug can land far apart. This is why regulators usually want two trials, and why you should hold a single Phase 2 result loosely — in either direction.' },
            { q: 'A new HS drug reports one Phase 3 trial with a HiSCR50 difference of 16 points over placebo. A commentator calls it "clearly worse than Humira". Is that fair?', a: 'No. 16 points is exactly what Humira itself delivered in PIONEER I. One trial cannot place a drug within the 16–31-point range Humira spans. To compare, you would want the second trial, the stricter thresholds (HiSCR75/90), consistency across subgroups, and safety — and even then cross-trial comparison is weak evidence.' },
            { callout: 'Benchmarks are ranges, not points. Before you call a result "better" or "worse" than the standard of care, check how far apart the standard of care\'s own twin trials landed.', kind: 'warn' }
          ]
        },
        {
          id: 'iw2',
          kind: 'Worked example',
          title: 'SUNSHINE and SUNRISE — reading dose arms and placebo drift',
          body: [
            { p: 'Cosentyx (secukinumab) was tested in HS in two twin Phase 3 trials, SUNSHINE and SUNRISE (Kimball, Lancet 2023). Each compared two dosing schedules — every 2 weeks (q2w) and every 4 weeks (q4w) — against placebo, on HiSCR at week 16.' },
            { ul: [
              '<strong>SUNSHINE</strong>: q2w 45.0% vs placebo 33.7% (significant); q4w 41.8% vs 33.7% (<strong>not</strong> significant)',
              '<strong>SUNRISE</strong>: q2w 42.3% vs placebo 31.2% (significant); q4w 46.1% vs 31.2% (significant)'
            ] },
            { h: 'Lesson 1 · Dose arms that disagree are usually noise' },
            { p: 'In SUNRISE the less frequent dose did better than the more frequent one; in SUNSHINE it failed. The same drug at a lower exposure cannot really be both better and worse. Read this as noise of a few points around a modest true effect — not as evidence that less frequent dosing works better. When dose arms flip order between twin trials, pool them in your head and look for the average.' },
            { h: 'Lesson 2 · Placebo drift' },
            { p: 'Placebo here ran at 31–34%, higher than PIONEER\'s 26–28% seven years earlier. Across HS trials, placebo has tended to sit higher in recent programmes. That shrinks differences: Cosentyx\'s q2w effect was about 11 points.' },
            { h: 'Lesson 3 · Small differences can still be approvable — and commercial' },
            { p: 'An 11-point difference looks small next to Humira\'s 16–31. Yet Cosentyx was approved for HS and became a real option, because it was the first IL-17 drug in a disease with few choices, and doctors already knew it from psoriasis. The commercial question is never only "how big is the effect?" but "how big compared with what doctors have today?"' },
            { q: 'Using only the numbers above, estimate the placebo-adjusted effect of Cosentyx q2w in HS across both trials.', a: 'SUNSHINE: 45.0 − 33.7 = 11.3 points. SUNRISE: 42.3 − 31.2 = 11.1 points. About 11 points, very consistent across the two trials — which is reassuring precisely because the q4w arms were not.' },
            { callout: 'Consistency between twin trials is worth as much as the size of the effect. Two 11-point results tell you more than one 20-point result and one failure.', kind: '' }
          ]
        },
        {
          id: 'iw3',
          kind: 'Worked example',
          title: 'BE HEARD — reading a readout end to end',
          body: [
            { p: 'Bimzelx (bimekizumab), which blocks both IL-17A and IL-17F, read out two HS Phase 3 trials, BE HEARD I and II (Kimball, Lancet 2024). Walk through it the way you would on readout day.' },
            { h: 'Step 1 · Set the bar before you look' },
            { ul: [
              'Humira (TNF): 16–31 points over placebo (PIONEER)',
              'Cosentyx (IL-17A): about 11 points (SUNSHINE/SUNRISE)',
              'Expected placebo in a modern HS trial: around 30%, give or take'
            ] },
            { h: 'Step 2 · Check the design' },
            { p: 'Most patients got the drug: BE HEARD I compared 289 patients on bimekizumab every 2 weeks with only 72 on placebo. A small placebo arm makes the placebo rate itself uncertain — with 72 patients, a 29% placebo rate has a 95% margin of roughly ±10 points. Keep that in mind when you compare placebo rates across trials.' },
            { h: 'Step 3 · The results' },
            { ul: [
              '<strong>BE HEARD I</strong>: 48% vs 29% on HiSCR50 at week 16 (odds ratio 2.23, p = 0.006) — about 19 points',
              '<strong>BE HEARD II</strong>: 52% vs 32% (odds ratio 2.29) — about 20 points. The every-4-weeks arm was also significant here (54% vs 32%)'
            ] },
            { h: 'Step 4 · Interpret' },
            { ul: [
              'About 19–20 points against placebo rates of 29–32% — similar placebo rates to SUNSHINE/SUNRISE (31–34%), which makes the comparison with Cosentyx\'s ~11 points less unfair than most cross-trial comparisons',
              'Consistent across the twin trials, unlike the Cosentyx dose arms',
              'Whether the extra benefit comes from blocking IL-17F or simply from blocking IL-17A more potently is still debated — and that debate decides how much credit other IL-17 drugs deserve'
            ] },
            { h: 'Step 5 · What you would still check' },
            { ul: [
              'Stricter thresholds (HiSCR75, HiSCR90) — they separate drugs better than HiSCR50',
              'Durability to week 48, and what happened to placebo patients who switched to drug',
              'Safety: fungal (candida) infections are a known IL-17 class effect, and blocking IL-17F as well may raise them'
            ] },
            { q: 'BE HEARD I had 72 patients on placebo, of whom 29% responded. Roughly what range could the "true" placebo rate plausibly lie in? (Hint: standard error ≈ √(p × (1 − p) / n).)', a: '√(0.29 × 0.71 / 72) ≈ 0.053, so about 5.3 points. A 95% range is about ±2 standard errors: roughly 19% to 40%. So the observed placebo rate is consistent with the full range seen across HS trials — which is why you compare differences, and why small placebo arms make single-trial comparisons fragile.' },
            { q: 'For the reading list: open the BE HEARD paper and find the HiSCR75 results. Is the placebo-adjusted gap on HiSCR75 larger or smaller than on HiSCR50, and why might that be?', a: 'Check the paper for the figures. The pattern to look for: placebo patients rarely reach the stricter threshold, so placebo rates fall faster than drug-arm rates as the bar rises. A drug with a real effect often shows a cleaner separation at HiSCR75 than at HiSCR50 — which is why newer trials report it, and why it is the better way to compare drugs.' },
            { callout: 'Readout-day order: bar first, design second, numbers third, interpretation last. Reading the numbers before setting the bar is how you end up anchored on the company\'s framing.', kind: 'warn' }
          ]
        },
        {
          id: 'ii4',
          title: 'Mechanism read-across: when it works, when it fails',
          body: [
            { p: 'Most I&I theses are read-across arguments: "this pathway works in disease A, the same cells are active in disease B, so it should work in B too." That reasoning is how the field finds new indications, and it is also how it loses money.' },
            { h: 'Read-across tends to hold when' },
            { ul: [
              'The two diseases share the same dominant cell types and cytokines in the affected tissue, shown in human tissue, not just in mice',
              'An approved drug on the same pathway already works in the new disease, so you are judging degree, not whether',
              'Genetics point the same way (for example, variants in the pathway alter disease risk)',
              'The drug reaches the tissue where disease lives at enough concentration'
            ] },
            { h: 'Read-across tends to fail when' },
            { ul: [
              'The pathway does different jobs in different tissues — in the gut, IL-17 helps protect the gut lining, so blocking it can make bowel inflammation worse (see lesson 9)',
              'The argument rests on one small study, or on a drug a big company quietly discontinued',
              'It assumes one part of a pathway "does not matter" based on data from a different disease',
              'A molecule\'s size, half-life or tissue penetration differs from the drug it is being compared with'
            ] },
            { q: 'An investor argues: "IL-23 drugs work in both psoriasis and Crohn\'s disease, so an IL-17 drug that works in psoriasis should work in Crohn\'s too." What is wrong with the argument?', a: 'It treats psoriasis success as proof the whole pathway works everywhere. IL-23 and IL-17 sit on the same axis, but they do different jobs in different tissues: in the gut, IL-17 helps maintain the barrier lining, so blocking it directly removes a protective signal, while blocking IL-23 upstream does not have the same effect. The secukinumab Crohn\'s trial (lesson 9) showed exactly this. Read-across has to be checked tissue by tissue.' },
            { callout: 'When an expert argues that a target "does not matter" in a disease, ask which disease the evidence comes from. Evidence carried from psoriasis into HS, or from joints into the gut, is weaker than it sounds.', kind: 'warn' }
          ]
        },
        {
          id: 'iw4',
          kind: 'Worked example',
          title: 'Which number is the primary? Endpoints in the wild',
          body: [
            { p: 'Press releases lead with the most flattering number. Your job is to find the primary endpoint — the one the trial was designed and powered to test — and read everything else in its light. Three real examples.' },
            { h: 'GEMINI 1 — response vs remission (Entyvio in ulcerative colitis, Feagan, NEJM 2013)' },
            { ul: [
              '<strong>Primary</strong>: clinical response at week 6 — 47.1% vs 25.5% (about 22 points)',
              'Secondary: clinical remission at week 6 — 16.9% vs 5.4% (about 11 points, or "three times placebo")',
              'Secondary: mucosal healing — 40.9% vs 24.8%'
            ] },
            { p: 'Notice that "three times the remission rate" and "11 points more patients in remission" describe the same result. Ratios flatter small numbers; always convert to an absolute difference.' },
            { h: 'ADvocate 1 — the stricter primary (Ebglyss in atopic dermatitis, Silverberg, NEJM 2023)' },
            { ul: [
              '<strong>Primary</strong>: IGA 0/1 (clear or almost clear skin) — 43.1% vs 12.7% (about 30 points)',
              'Key secondary: EASI-75 — 58.8% vs 16.2% (about 43 points)',
              'Twin trial ADvocate 2: EASI-75 52.1% vs 18.1% (about 34 points)'
            ] },
            { p: 'The stricter primary gives a smaller number. And the twin trial landed about 9 points lower on EASI-75 — the same twin-trial spread you saw with Humira in HS.' },
            { h: 'Measure Up 1 and 2 — twin trials of a strong drug (Rinvoq 30 mg in atopic dermatitis, Guttman-Yassky, Lancet 2021)' },
            { ul: [
              'Measure Up 1: EASI-75 79.7% vs 16.3% (about 63 points)',
              'Measure Up 2: EASI-75 72.9% vs 13.3% (about 60 points)'
            ] },
            { p: 'With a very large effect, the twin trials agree closely in difference even though the raw drug-arm rates differ by 7 points. Large effects are robust; small ones are fragile.' },
            { q: 'A company press release says: "Our UC drug tripled the rate of clinical remission versus placebo (9% vs 3%)." List the three questions you ask first.', a: '(1) Is remission the primary endpoint, or a secondary chosen for the headline? (2) What is the absolute difference? 6 points — below the roughly 11–21-point remission differences in the benchmark table for approved UC drugs. (3) What did the primary show, and was it significant? A tripling of a small number is still a small number.' },
            { callout: 'Find the primary first. Convert every ratio into an absolute difference. Then compare with the benchmark table — never with the press release\'s adjective.', kind: 'warn' }
          ]
        },
        {
          id: 'ii5',
          title: 'Post-mortems: failures that wrote the rules',
          body: [
            { p: 'The fastest way to build judgment is to study failures until you can see, in hindsight, what should have warned you. Four from I&I:' },
            { h: '1 · IL-17 blockade in Crohn\'s disease' },
            { p: 'IL-17 inhibitors work superbly in psoriasis, and IL-17 is present in inflamed gut tissue, so testing them in Crohn\'s disease looked logical. The secukinumab Crohn\'s trial was stopped: the drug did not help and appeared to worsen disease, and IL-17 drugs now carry warnings about inflammatory bowel disease. Lesson: IL-17 helps protect the gut lining. The same cytokine can be harmful in one tissue and protective in another.' },
            { h: '2 · The JAK safety reset' },
            { p: 'Oral JAK inhibitors arrived as convenient, potent pills for many I&I diseases. A large post-marketing safety study of tofacitinib versus TNF blockers in older rheumatoid arthritis patients with cardiovascular risk (ORAL Surveillance) found higher rates of major cardiac events, cancer and blood clots. Regulators added boxed warnings across the class and pushed JAKs behind other drugs in treatment guidelines. Lesson: class safety risk is shared — one drug\'s study can reprice every competitor.' },
            { h: '3 · Phase 2 promise, Phase 3 disappointment in UC' },
            { p: 'Etrolizumab (Roche), a gut-targeted integrin antibody, produced encouraging Phase 2 results in ulcerative colitis, then a large Phase 3 programme with mixed results that failed to show a clear edge over existing drugs; development in UC was stopped. Lesson: small Phase 2 UC trials, with variable placebo rates and endoscopy read by different people, often overstate the effect.' },
            { h: '4 · A discontinued "proof of concept"' },
            { p: 'Investors often cite a small, positive study of a drug that the big company running it later dropped. A discontinuation does not prove the drug failed — companies drop assets for portfolio reasons — but it means the people with the full data chose not to invest further. Lesson: weight a discontinued programme\'s signal down, and find out why it stopped before building a thesis on it.' },
            { callout: 'For every failure you study, write one sentence: "I could have seen this coming if I had checked ___." Those sentences become your personal checklist.', kind: '' }
          ]
        },
        {
          id: 'iw5',
          kind: 'Worked example',
          title: 'Power: will this trial be able to see it?',
          body: [
            { p: 'A trial can fail because the drug does not work — or because it was too small to detect an effect that is real. Before any readout you should know roughly how big a difference the trial can reliably detect. You do not need a statistics degree: the arithmetic below is enough to spot an underpowered trial.' },
            { h: 'The rule of thumb' },
            { p: 'For a responder endpoint with equal arms, 80% power and the usual 5% significance level, the patients needed per arm are roughly 7.85 × [p₁(1 − p₁) + p₂(1 − p₂)] ÷ (p₂ − p₁)², where p₁ is the placebo rate and p₂ the drug rate. What it gives:' },
            { ul: [
              'Placebo 5% → drug 20% (a typical UC remission gap): about 72 patients per arm',
              'Placebo 15% → drug 45% (a typical atopic dermatitis gap): about 33 per arm',
              'Placebo 30% → drug 50% (a strong HS result): about 90 per arm',
              'Placebo 30% → drug 45% (a solid HS result): about 160 per arm',
              'Placebo 30% → drug 40% (a modest HS result): about 350 per arm'
            ] },
            { p: 'This is why HS trials must be large and psoriasis trials can be small. A high placebo rate and a modest difference together drive the required size up sharply.' },
            { h: 'Turning it around: power for a given trial' },
            { p: 'With 100 patients per arm and 30% placebo, a trial has about 84% power if the drug truly reaches 50%, about 60% if it reaches 45%, and only about 43% if it reaches 42%. A trial designed for a strong effect is close to a coin flip for a merely good one.' },
            { q: 'A Phase 2 HS trial with 40 patients per arm reports HiSCR50 55% on drug vs 38% on placebo, "not statistically significant". The stock halves. Was the drug a failure?', a: 'Not necessarily. The difference is 17 points — within the benchmark range for approved HS drugs. But with 40 per arm the standard error of the difference is about 11 points, so the 95% confidence interval runs from roughly −4 to +39 points (p ≈ 0.12). The trial could not tell "no effect" from "very good effect". It was underpowered, not negative. What would help you judge: dose response across arms, the stricter thresholds, consistency in subgroups, and whether the company will fund a properly sized trial.' },
            { q: 'A Phase 3 HS trial has 120 patients per arm and was designed assuming placebo 30% and drug 50%. You think, from the benchmarks, a realistic result is placebo 35% and drug 45%. Roughly how likely is the trial to succeed if you are right?', a: 'Only about 36% (power for 35% vs 45% with 120 per arm). Even if the drug works modestly, the trial will more often miss than hit. This is how drugs with real activity fail Phase 3 — and why checking the design assumptions against the benchmark table is one of the highest-value things you can do before a readout.' },
            { callout: 'Before a readout, write down the effect the trial can reliably detect. If that is bigger than the effect you realistically expect, a miss is the likely outcome — whatever the biology.', kind: 'bad' }
          ]
        },
        {
          id: 'ii6',
          title: 'Reading a readout — and the prediction drill',
          body: [
            { p: 'Specialists do most of their work before the data arrives. The drill: for every readout you follow, write down a dated prediction, then score it. After twenty or thirty you will know whether you are too optimistic, too cautious, or well calibrated — and in which diseases.' },
            { h: 'Before the readout' },
            { ul: [
              'Benchmark: what did the standard-of-care drug achieve against placebo on this exact endpoint and timepoint? (use the table)',
              'Expected placebo: what placebo rate have recent trials in this disease shown, and does this design push it up or down?',
              'Power: given that placebo, is the trial large enough to detect the effect the drug realistically needs to be competitive?',
              'Dose: was the dose chosen from good Phase 1/2 exposure data, or is this a first test of the right dose?',
              'Your prediction: probability the primary endpoint hits, expected placebo-adjusted effect, and what result would be "good enough" commercially'
            ] },
            { h: 'After the readout' },
            { ul: [
              'Placebo-adjusted effect on the primary, compared with the benchmark — then the strict thresholds (HiSCR75, PASI 100, endoscopic remission)',
              'The placebo rate itself — high, low, or in line with expectations?',
              'Dropouts and how they were handled; safety signals, including class effects',
              'Durability: what happens at one year, and in the patients who switched from placebo?',
              'Score your prediction honestly, and note what you missed'
            ] },
            { h: 'A worked prediction (hypothetical)' },
            { p: 'Example Bio is about to report a Phase 2 HS trial: 200 patients randomised 1:1, primary endpoint HiSCR50 at week 16. Here is a complete entry of the kind you would log in the Decision journal the week before.' },
            { ul: [
              '<strong>Bar</strong>: approved drugs span about 11 points (Cosentyx) to 19–31 points (Bimzelx, Humira). To matter commercially in a crowded field, the drug needs roughly 20 points or more, plus good HiSCR75 separation',
              '<strong>Expected placebo</strong>: about 30%, with a plausible range of 25–38% given recent trials',
              '<strong>Power</strong>: 100 per arm gives about 84% power if the drug truly reaches 50%, about 60% at 45%, about 43% at 42%',
              '<strong>My view of the drug</strong>: mechanism well validated, dose chosen from good exposure data; I expect about 45% on drug, 30% on placebo',
              '<strong>Prediction</strong>: 60% chance the primary is significant; most likely difference 15 points (range 8–22); probability the difference is 20 points or more: 25%',
              '<strong>What would change my mind</strong>: placebo above 38%; HiSCR75 not separating; a dose arm that is clearly worse than the lower dose'
            ] },
            { p: 'Afterwards, score each part separately — the probability, the effect estimate and the placebo estimate. Over many entries you will see which of the three you systematically get wrong.' },
            { q: 'Example Bio reports: 47% vs 36%, p = 0.10. Score the prediction above.', a: 'The primary missed (you gave 60% to a hit — one data point, so neither right nor wrong on its own; it counts in your calibration over many predictions). Your effect estimate (15, range 8–22) captured the 11-point result. Your placebo estimate (30%) was too low — 36% was near the top of your range, and it is the main reason the trial missed. Lesson to log: in HS, assume a higher placebo rate than the older trials suggest.' },
            { callout: 'Log every prediction in the Decision journal before the data comes out. A prediction you only think about afterwards is not a prediction — it is a story.', kind: 'warn' }
          ]
        }
      ]
    },
    {
      id: 'cardiopulmonary',
      name: 'Cardiopulmonary',
      atlas: 'cardiometabolic',
      tagline: 'Pulmonary hypertension, heart failure and heart muscle — objective endpoints, a shifting standard of care, and the trap of the wrong patient group.',
      plan: [
        'Weeks 1–2 · The map: learn the five pulmonary hypertension groups, the HFpEF phenotypes and obstructive vs non-obstructive HCM (lesson 1)',
        'Weeks 3–4 · Endpoints: 6-minute walk distance, PVR, NT-proBNP, time to clinical worsening, peak VO2, KCCQ (lesson 2)',
        'Weeks 5–6 · Benchmarks: memorise the table below; notice how effect sizes shrink as background therapy stacks up (lesson 3)',
        'Weeks 7–8 · Post-mortems: the drugs that harmed patients in the wrong PH group, and the HFpEF graveyard (lesson 4)',
        'Ongoing · Log a dated prediction before every readout you follow; score it afterwards (lesson 6)'
      ],
      bench: {
        asOf: '2026-Q4',
        note: 'Source-checked Nov 2026 against the published trials. Rounded. For walk-distance trials the figure is the placebo-corrected change in metres; for outcome trials it is the hazard ratio (HR) for the composite primary endpoint (below 1 = fewer events on drug).',
        rows: [
          { area: 'PAH (WHO group 1)', endpoint: '6MWD Δ vs placebo, wk 16', drug: 'Bosentan (Tracleer, ERA) — monotherapy era', trial: 'BREATHE-1', delta: '+44 m', asOf: '2002', pending: false },
          { area: 'PAH (WHO group 1)', endpoint: '6MWD Δ vs placebo, wk 12', drug: 'Ambrisentan 10 mg (Letairis, ERA) — monotherapy era', trial: 'ARIES-1', delta: '+51 m', asOf: '2008', pending: false },
          { area: 'PAH (WHO group 1)', endpoint: '6MWD Δ vs placebo, wk 12 (peak, just after dosing; ≈+14 m at trough)', drug: 'Inhaled treprostinil (Tyvaso) — add-on to oral therapy', trial: 'TRIUMPH', delta: '+20 m', asOf: '2010', pending: false },
          { area: 'PAH (WHO group 1)', endpoint: '6MWD Δ vs placebo, wk 24', drug: 'Sotatercept (Winrevair, activin signalling) — add-on to dual/triple therapy', trial: 'STELLAR', delta: '+41 m', asOf: '2023', pending: false },
          { area: 'PAH (WHO group 1)', endpoint: 'Morbidity/mortality composite', drug: 'Macitentan 10 mg (Opsumit, ERA)', trial: 'SERAPHIN', delta: 'HR 0.55', asOf: '2013', pending: false },
          { area: 'PAH (WHO group 1)', endpoint: 'Morbidity/mortality composite', drug: 'Selexipag (Uptravi, IP receptor)', trial: 'GRIPHON', delta: 'HR 0.60', asOf: '2015', pending: false },
          { area: 'PAH (WHO group 1)', endpoint: 'Death, transplant or PAH hospitalisation', drug: 'Sotatercept (Winrevair) — high-risk patients', trial: 'ZENITH', delta: 'HR 0.24', asOf: '2025', pending: false },
          { area: 'PH-ILD (WHO group 3)', endpoint: '6MWD Δ vs placebo, wk 16', drug: 'Inhaled treprostinil (Tyvaso)', trial: 'INCREASE', delta: '+31 m (mean; ≈+21 m by median)', asOf: '2021', pending: false },
          { area: 'HFpEF', endpoint: 'CV death or HF hospitalisation', drug: 'Empagliflozin (Jardiance, SGLT2)', trial: 'EMPEROR-Preserved', delta: 'HR 0.79', asOf: '2021', pending: false },
          { area: 'HFpEF', endpoint: 'Worsening HF or CV death (driven by worsening HF; CV death alone not significant)', drug: 'Dapagliflozin (Farxiga, SGLT2)', trial: 'DELIVER', delta: 'HR 0.82', asOf: '2022', pending: false },
          { area: 'Obstructive HCM', endpoint: 'pVO2 + NYHA class responder, wk 30', drug: 'Mavacamten (Camzyos, myosin inhibitor)', trial: 'EXPLORER-HCM', d: 37, pb: 17, asOf: '2020', pending: false },
          { area: 'Obstructive HCM', endpoint: 'Peak VO2 Δ vs placebo, wk 24 (primary)', drug: 'Aficamten (myosin inhibitor)', trial: 'SEQUOIA-HCM', delta: '+1.7 mL/kg/min', asOf: '2024', pending: false }
        ]
      },
      lessons: [
        {
          id: 'cp1',
          title: 'The map: which patients, which disease',
          body: [
            { p: 'Cardiopulmonary investing goes wrong most often at the very first step: misunderstanding which patients a drug is for. "Pulmonary hypertension" (PH — high blood pressure in the lungs) is not one disease but five groups with different causes, and a drug that helps one group can harm another.' },
            { h: 'The five pulmonary hypertension groups' },
            { ul: [
              '<strong>Group 1 — pulmonary arterial hypertension (PAH)</strong>: a rare disease of the small lung arteries themselves. Almost every approved "PH drug" is a group 1 drug',
              '<strong>Group 2 — PH due to left heart disease</strong>: by far the largest group; the lungs back up because the left heart is failing. Lung-artery dilators can make this worse',
              '<strong>Group 3 — PH due to lung disease</strong> (COPD, interstitial lung disease / ILD): large, and newly treatable in PH-ILD',
              '<strong>Group 4 — chronic thromboembolic PH (CTEPH)</strong>: old clots in the lungs; surgery or balloon procedures can cure some',
              '<strong>Group 5</strong> — a mixed bag of other causes'
            ] },
            { h: 'Two neighbouring markets' },
            { ul: [
              '<strong>HFpEF</strong> (heart failure with preserved ejection fraction — a stiff heart that pumps normally but fills badly): huge, mixed, and historically a graveyard. Obesity, diabetes, kidney disease and lung congestion each define a different subgroup',
              '<strong>Hypertrophic cardiomyopathy (HCM)</strong>: a genetic thickening of the heart muscle. Obstructive HCM (the thickened wall blocks outflow) is where myosin inhibitors first won; non-obstructive HCM is a separate and harder question'
            ] },
            { callout: 'Every time a company says "pulmonary hypertension" or "heart failure", ask: which group, which phenotype? The size of the market and the odds of success both depend on the answer.', kind: 'warn' }
          ]
        },
        {
          id: 'cp2',
          title: 'The endpoint toolkit',
          body: [
            { p: 'Cardiopulmonary endpoints are more objective than those in psychiatry or pain, but each still has blind spots.' },
            { ul: [
              '<strong>6-minute walk distance (6MWD)</strong>: how far a patient walks in six minutes. The workhorse of PAH trials. Improvements of roughly 30 metres are usually treated as clinically meaningful. Fitter patients hit a ceiling, and motivation and coaching affect it',
              '<strong>Pulmonary vascular resistance (PVR)</strong>: measured by right-heart catheter. A direct measure of what PAH drugs target — a strong Phase 2 signal, but not an approval endpoint on its own',
              '<strong>NT-proBNP</strong>: a blood marker of strain on the heart. Cheap, objective, and a useful early read; it predicts outcomes but is not itself an outcome',
              '<strong>Time to clinical worsening / morbidity-mortality composites</strong>: death, hospitalisation, disease progression. Harder to win, more convincing, and now the standard for showing a drug changes the disease course',
              '<strong>Peak VO2 (pVO2)</strong>: oxygen use at peak exercise on a bike or treadmill test — the key HCM functional measure',
              '<strong>KCCQ</strong>: the Kansas City Cardiomyopathy Questionnaire, a patient-reported score of heart-failure symptoms and limits — central in HFpEF',
              '<strong>Hard outcomes (HR)</strong>: in large heart-failure trials, the hazard ratio for cardiovascular death or heart-failure hospitalisation is what changes prescribing'
            ] },
            { callout: 'A Phase 2 result on PVR or NT-proBNP is a hypothesis; a Phase 3 result on walk distance or outcomes is the test. Price the gap between them using the base rate, not the company\'s optimism.', kind: '' }
          ]
        },
        {
          id: 'cp3',
          title: 'The background-therapy squeeze',
          body: [
            { p: 'Look at the PAH rows in the benchmark table in date order. The early drugs, tested as monotherapy against placebo, added forty to fifty-plus metres of walk distance. Later drugs, tested on top of one or two existing medicines, typically added much less. The drugs did not necessarily get worse — the patients were already treated, so there was less room to improve.' },
            { p: 'This "background-therapy squeeze" is the central dynamic of a maturing therapeutic area. Each new drug is tested in patients already on the previous ones, effect sizes shrink, trials must get larger or switch to outcome endpoints, and the commercial question becomes "what does this add to what patients already take?"' },
            { h: 'How the bar moves' },
            { ul: [
              'A breakthrough resets the benchmark — once a drug with a new mechanism shows large add-on benefits and outcome data, every later entrant is judged against it, not against placebo',
              'Formulation and delivery become battlegrounds — for an established molecule, an easier device, fewer doses or better tolerability can win share, and these fights are often settled by patents and courts as much as by trials',
              'Outcome trials become the price of admission for a large market, which favours well-funded sponsors'
            ] },
            { callout: 'When you read a new add-on trial, compare it with other add-on trials, never with the monotherapy era. A twenty-metre gain on top of triple therapy can be more impressive than fifty metres on no therapy.', kind: 'warn' }
          ]
        },
        {
          id: 'cp4',
          title: 'Post-mortems: the wrong patients, the wrong trial',
          body: [
            { p: 'Cardiopulmonary history is full of drugs that worked in one population and failed — sometimes dangerously — when extended to the next. Four lessons:' },
            { h: '1 · PAH drugs in left-heart and lung-disease PH' },
            { p: 'Endothelin antagonists and other PAH vasodilators were tested in patients with heart failure, and in lung fibrosis. Several trials were neutral or stopped for harm: bosentan in chronic heart failure did not help and caused fluid retention; ambrisentan in idiopathic pulmonary fibrosis and riociguat in PH with idiopathic interstitial pneumonia were stopped early because patients did worse. Lesson: opening up the lung arteries does not help when the cause is upstream or downstream, and can make things worse.' },
            { h: '2 · Sildenafil in HFpEF' },
            { p: 'Sildenafil, approved for PAH, was tested in HFpEF on a plausible mechanism. The trial (RELAX) found no improvement in exercise capacity. Lesson: a mechanism that works in a rare, uniform disease often does not carry over to a large, mixed one.' },
            { h: '3 · TOPCAT and the geography problem' },
            { p: 'The spironolactone HFpEF trial TOPCAT missed its primary endpoint overall, but later analysis found striking differences by region: patients enrolled in some countries had event rates and blood drug levels suggesting many may not have had HFpEF or taken the drug. Lesson: where a trial enrols and how it checks diagnosis can decide the result — read the regional breakdown.' },
            { h: '4 · The HFpEF graveyard, and what finally worked' },
            { p: 'For years, drugs that helped heart failure with reduced ejection fraction failed in HFpEF. The first convincing wins came from SGLT2 inhibitors — originally diabetes drugs — in large outcome trials, and later from GLP-1 drugs in the obese HFpEF subgroup. Lesson: in a mixed disease, the winners often come from treating a common underlying driver (metabolism, obesity) rather than the heart itself.' },
            { callout: 'Before backing a drug moving into a new patient group, find the last three drugs that tried the same move and read how they ended.', kind: 'bad' }
          ]
        },
        {
          id: 'cp5',
          title: 'HCM and the second-entrant question',
          body: [
            { p: 'Hypertrophic cardiomyopathy shows a clean pattern seen across biotech: a first-in-class drug proves the mechanism, then the question becomes whether a second or third entrant can win share.' },
            { p: 'Cardiac myosin inhibitors reduce excess heart-muscle contraction. The first approved drug improved exercise capacity and symptoms in obstructive HCM, but because over-reducing contraction can weaken pumping, its label requires regular heart-scan monitoring under a restricted-access programme. That monitoring burden opened a door for follow-on drugs designed to be easier to manage.' },
            { h: 'How to judge a follow-on drug' },
            { ul: [
              'Efficacy parity: does it match the first drug on the same endpoints, in a comparable population?',
              'Safety margin: how often does pumping drop too far, and how quickly does the effect reverse if it does?',
              'Practical burden: dosing adjustments, scan frequency, drug interactions — these decide what busy cardiologists choose',
              'Expansion: the bigger prize is non-obstructive HCM and related diseases, which are separate, harder trials'
            ] },
            { callout: 'For a second entrant, the investment case is usually "same benefit, less hassle". Check that the hassle is real for doctors, and that the trial actually showed the difference.', kind: '' }
          ]
        },
        {
          id: 'cp6',
          title: 'Reading a readout — and the prediction drill',
          body: [
            { p: 'Same drill as every track: before the data, write a dated prediction; after, score it honestly.' },
            { h: 'Before the readout' },
            { ul: [
              'Which patient group exactly — PH group, HFpEF phenotype, obstructive or not — and what is the track record of drugs in that group?',
              'What background therapy are patients on, and which benchmark rows are truly comparable?',
              'Is the primary endpoint a surrogate (PVR, NT-proBNP), a functional measure (6MWD, pVO2) or an outcome (HR)?',
              'Is the trial large enough for the add-on effect it is likely to see?',
              'Your prediction: probability of hitting the primary, expected effect, and the result that would be commercially "good enough"'
            ] },
            { h: 'After the readout' },
            { ul: [
              'Effect versus the right benchmark (add-on vs add-on), and the consistency of secondary endpoints',
              'Regional and subgroup consistency — a result driven by one region or subgroup is fragile',
              'Safety signals specific to the mechanism (fluid retention, blood pressure drops, bleeding, reduced pumping)',
              'Score your prediction and record what you missed'
            ] },
            { callout: 'Log the prediction in the Decision journal before the data comes out, then score it. Calibration is the skill; the journal is the gym.', kind: 'warn' }
          ]
        }
      ]
    }
  ]
};
