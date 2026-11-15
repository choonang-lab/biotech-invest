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
        'Time: the 15 lessons and their exercises take about 5–6 hours in all. The 8 weeks is mostly the reading list at the bottom of this page — about 2–3 hours a week with the original papers',
        'Week 1 · Primers (lessons 1–2): the immune system and trial vocabulary in plain English. Re-read them whenever a term is unfamiliar; the Glossary has every term too',
        'Week 2 · Lessons 3–5 (why I&I, endpoints, placebo), then the psoriasis papers',
        'Weeks 3–4 · Worked examples 6–8 (PIONEER, SUNSHINE/SUNRISE, BE HEARD), then the three HS programmes — build your own table of placebo rates',
        'Weeks 5–6 · Lessons 9–12 (read-across, which number is the primary, the UC race, eczema and alopecia after Dupixent), then the eczema, alopecia and UC papers',
        'Weeks 7–8 · Lessons 13–14 (post-mortems, power), then the failure papers',
        'Ongoing · Lesson 15: log a dated prediction before every readout you follow, and score it afterwards'
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
          { week: 'Weeks 5–6 · The new contenders', task: 'For each, identify the axis it competes on (efficacy, convenience, safety, durability) and whether the data support it.', papers: [
            'True North (ozanimod in UC) — Sandborn et al., NEJM 2021',
            'ARTEMIS-UC (tulisokibart, TL1A) — NEJM 2024;391:1119',
            'ABTECT-1 and -2 (obefazimod) — company topline July 2025 and maintenance June 2026; read the full presentation from UEG Week 2026',
            'REZOLVE-AD (rezpegaldesleukin) — published in The Lancet; compare with the Phase 3 ZENITH AD design'
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
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 10', drug: 'Ozanimod (Zeposia, S1P modulator, oral)', trial: 'True North', d: 18, pb: 6, asOf: '2021', pending: false },
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 12', drug: 'Etrasimod (Velsipity, S1P modulator, oral)', trial: 'ELEVATE UC 52', d: 27, pb: 7, asOf: '2023', pending: false },
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 12 (Phase 2, cohort 1)', drug: 'Tulisokibart (TL1A antibody)', trial: 'ARTEMIS-UC', d: 26, pb: 1, asOf: '2024', pending: false },
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 8, 50 mg (pooled induction)', drug: 'Obefazimod (miR-124 enhancer, oral)', trial: 'ABTECT-1 & 2', delta: '+16 pts', asOf: '2025', pending: false },
          { area: 'Ulcerative colitis', endpoint: 'Clinical remission, wk 44, induction responders only (maintenance — not comparable to induction rows)', drug: 'Obefazimod 50 mg', trial: 'ABTECT maintenance', d: 51, pb: 10, asOf: '2026', pending: false },
          { area: 'Atopic dermatitis', endpoint: 'EASI-75, wk 16 (Phase 2b, top dose)', drug: 'Rezpegaldesleukin (Treg-stimulating IL-2)', trial: 'REZOLVE-AD', d: 42, pb: 17, asOf: '2025', pending: false },
          { area: 'Atopic dermatitis', endpoint: 'EASI-75, wk 24', drug: 'Rocatinlimab (anti-OX40)', trial: 'ROCKET-HORIZON', d: 33, pb: 14, asOf: '2024', pending: false },
          { area: 'Atopic dermatitis', endpoint: 'vIGA-AD 0/1 (clear or almost clear), wk 24, Q4W', drug: 'Amlitelimab (anti-OX40L)', trial: 'COAST 1', d: 21, pb: 9, asOf: '2025', pending: false },
          { area: 'Alopecia areata', endpoint: 'SALT ≤20, wk 36', drug: 'Baricitinib 4 mg (Olumiant, JAK1/2)', trial: 'BRAVE-AA1', d: 39, pb: 6, asOf: '2022', pending: false },
          { area: 'Alopecia areata', endpoint: 'SALT ≤20, wk 24', drug: 'Ritlecitinib 50 mg (Litfulo, JAK3/TEC)', trial: 'ALLEGRO-2b/3', d: 23, pb: 2, asOf: '2023', pending: false }
        ]
      },
      lessons: [
        {
          id: 'ip1',
          kind: 'Primer',
          title: 'The immune system in plain English',
          body: [
            { p: 'You do not need a medical degree for this track, but you do need a working picture of the immune system. This primer gives you just enough to follow every later lesson. Come back to it whenever a term is unfamiliar — every word in <strong>bold</strong> below appears again later.' },
            { h: 'Two arms: fast and generic, slow and specific' },
            { ul: [
              'The <strong>innate immune system</strong> is the first responder. Cells such as <strong>neutrophils</strong> and <strong>macrophages</strong> rush to any injury or infection and attack whatever looks foreign. Fast, but not targeted. Pus is mostly dead neutrophils',
              'The <strong>adaptive immune system</strong> is the specialist force. It takes days to gear up, but it learns to recognise one specific invader and remembers it. Its two main cell types are <strong>T cells</strong> and <strong>B cells</strong>'
            ] },
            { h: 'The cast of cells' },
            { ul: [
              '<strong>Helper T cells</strong> are the coordinators. They come in "flavours" named after the messages they send: <strong>Th1</strong> (fights bacteria and viruses inside cells), <strong>Th2</strong> (fights parasites; drives allergy and eczema), <strong>Th17</strong> (fights fungi and bacteria at skin and gut surfaces; drives psoriasis)',
              '<strong>Regulatory T cells (Tregs)</strong> are the brakes — peacekeepers that calm the other immune cells down. Too few, or weak ones, and the immune system attacks the body. Several new drugs try to boost Tregs rather than block attackers',
              '<strong>B cells</strong> make <strong>antibodies</strong> — Y-shaped proteins that stick to one specific target. Mature antibody factories are called <strong>plasma cells</strong>. Signals such as <strong>BAFF</strong> and <strong>APRIL</strong> keep B cells alive',
              '<strong>Killer T cells</strong> destroy infected or cancerous cells — more relevant to oncology than to this track'
            ] },
            { h: 'Cytokines: the messages' },
            { p: 'Immune cells talk to each other with small proteins called <strong>cytokines</strong>. Most have dull names: <strong>interleukins</strong> are numbered (IL-2, IL-4, IL-13, IL-17, IL-23…), plus a few others such as <strong>TNF</strong> (tumour necrosis factor). A cytokine works like a key: it fits a matching <strong>receptor</strong> (the lock) on the surface of another cell and switches on a programme inside it — inflame, multiply, attract more cells, make the skin itch.' },
            { p: 'Inside the receiving cell the message is relayed by enzymes. One important relay family is the <strong>JAKs</strong> (Janus kinases). Many different cytokines use JAKs to pass on their signal, which is why a JAK-blocking pill quiets many messages at once.' },
            { h: 'What goes wrong: inflammatory disease' },
            { p: 'In autoimmune and inflammatory disease the immune system attacks the body, or an inflammatory response switches on and does not switch off. Crucially, <strong>different diseases are driven by different branches</strong>, which is why a drug can be superb in one disease and useless in another:' },
            { ul: [
              '<strong>The IL-23 → Th17 → IL-17 axis</strong>: psoriasis (strongly), psoriatic arthritis, and partly hidradenitis suppurativa',
              '<strong>The Th2 axis — IL-4, IL-13, IL-31</strong>: atopic dermatitis (eczema), asthma, and itch',
              '<strong>TNF</strong>: a broad, upstream signal — rheumatoid arthritis, Crohn’s disease, ulcerative colitis, psoriasis, HS',
              '<strong>B cells, BAFF and APRIL</strong>: lupus and IgA nephropathy (a kidney disease)',
              '<strong>Immune cells homing to the gut</strong>: ulcerative colitis and Crohn’s disease',
              '<strong>Signals that tell T cells to attack hair follicles</strong> (relayed through JAKs): alopecia areata'
            ] },
            { h: 'The diseases in this track, in one line each' },
            { ul: [
              '<strong>Psoriasis</strong> — thick, red, scaly skin plaques; very responsive to IL-17 and IL-23 drugs',
              '<strong>Hidradenitis suppurativa (HS)</strong> — painful lumps, abscesses and draining tunnels under the skin of the armpits, groin and buttocks; hard to treat, few options',
              '<strong>Atopic dermatitis (AD)</strong> — eczema; dry, inflamed, intensely itchy skin; very common',
              '<strong>Alopecia areata (AA)</strong> — the immune system attacks hair follicles, causing patchy or total hair loss',
              '<strong>Ulcerative colitis (UC)</strong> — inflammation of the lining of the large bowel (colon), causing bleeding and urgent diarrhoea',
              '<strong>Crohn’s disease</strong> — inflammation that can affect any part of the gut, through the full thickness of the wall',
              '<strong>Rheumatoid arthritis (RA)</strong> — inflammation of the joints; the original market for TNF blockers'
            ] },
            { h: 'How drugs intervene' },
            { ul: [
              '<strong>Antibody drugs</strong> (names end in <strong>-mab</strong>, for monoclonal antibody) are injected and block one target precisely — a cytokine or its receptor. Many that block interleukins have "ki" inside the name: secukinumab, risankizumab, bimekizumab. A <strong>bispecific</strong> antibody blocks two targets at once',
              '<strong>Small-molecule pills</strong> enter cells. JAK inhibitors (names end in <strong>-citinib</strong>) block the relay inside the cell. Broad and powerful, but broad side effects too',
              '<strong>S1P modulators</strong> (pills) trap certain immune cells in the lymph nodes so they cannot reach the inflamed gut',
              '<strong>Integrin blockers</strong> (vedolizumab) stop immune cells from entering the gut wall — gut-specific, so few side effects elsewhere',
              '<strong>Engineered cytokines</strong> (names often end in <strong>-leukin</strong>) mimic or tune a natural signal — for example, versions of IL-2 designed to expand Tregs'
            ] },
            { q: 'A new drug blocks IL-13. Based only on the list above, which disease in this track would you expect it to help most, and which least?', a: 'Most: atopic dermatitis — IL-13 is a core Th2 signal, and approved IL-13 antibodies (Ebglyss, Adbry) work there. Least: psoriasis or HS, which are driven mainly by the IL-23/IL-17 axis. This "which branch drives which disease" reasoning is the first filter for any I&I drug.' },
            { q: 'Why might a JAK-inhibitor pill work in more diseases than an IL-17 antibody — and why might it have more side effects?', a: 'JAKs relay the signals of many different cytokines, so blocking them quiets several disease-driving branches at once — hence broad efficacy (eczema, alopecia, colitis, arthritis). But many of those same signals also do useful jobs (fighting infection, making blood cells), so blocking them broadly brings broader risks. An IL-17 antibody blocks one message, so it works in fewer diseases but with a narrower set of side effects.' },
            { callout: 'The single most useful question in I&I: which branch of the immune system drives this disease, and does the drug block that branch? Most failed read-across arguments skip it.', kind: '' }
          ]
        },
        {
          id: 'ip2',
          kind: 'Primer',
          title: 'Reading a trial: the vocabulary',
          body: [
            { p: 'Trial results come wrapped in jargon. This lesson translates the words you will meet in every readout, press release and paper — in this track and in the Cardiopulmonary track.' },
            { h: 'How a trial is built' },
            { ul: [
              '<strong>Randomised</strong>: a computer decides who gets the drug and who gets the comparator, so the groups are alike except for the treatment',
              '<strong>Placebo-controlled</strong>: the comparator is a dummy treatment that looks identical. <strong>Double-blind</strong>: neither patients nor doctors know who got what. <strong>Open-label</strong>: everyone knows — useful for safety, weak for efficacy',
              '<strong>Arms</strong>: the groups — e.g. high dose, low dose and placebo. A <strong>1:1</strong> or <strong>2:1</strong> ratio says how many patients go to drug for every one on placebo',
              '<strong>Induction</strong> and <strong>maintenance</strong>: common in bowel disease. Induction (8–12 weeks) asks "does it calm a flare?"; maintenance (to about a year) asks "does it keep it calm?" In a <strong>randomised-withdrawal</strong> design, patients who responded to induction are re-randomised to keep taking the drug or switch to placebo',
              '<strong>Extension study</strong>: after the main trial, patients may continue on drug (often open-label) to show durability and long-term safety'
            ] },
            { h: 'What is measured' },
            { ul: [
              '<strong>Primary endpoint</strong>: the one result the trial was designed and sized to test. Success or failure is judged on this',
              '<strong>Co-primary endpoints</strong>: two results that must both succeed (psoriasis trials usually pair PASI with a physician’s overall rating)',
              '<strong>Key secondary endpoints</strong>: pre-specified, tested in a fixed order after the primary. <strong>Exploratory</strong> or <strong>post-hoc</strong> analyses (decided after seeing the data) are hypotheses, not proof',
              '<strong>Responder endpoint</strong>: the share of patients crossing a threshold (e.g. "75% improvement"). <strong>Continuous endpoint</strong>: the average change (e.g. "metres walked")',
              '<strong>Surrogate endpoint</strong>: a lab or imaging measure expected to predict how patients feel or survive (e.g. protein in urine). <strong>Clinical endpoint</strong>: how patients feel, function or survive'
            ] },
            { h: 'The statistics, without the maths' },
            { ul: [
              '<strong>Placebo-adjusted difference</strong> (the "delta"): drug result minus placebo result. 48% vs 29% = 19 percentage points ("points")',
              '<strong>p-value</strong>: roughly, how surprising the result would be if the drug truly did nothing. Below 0.05 is the usual bar for "statistically significant". It is <em>not</em> the probability the drug works, and it says nothing about whether the effect is big enough to matter',
              '<strong>Confidence interval (CI)</strong>: the range of true effects consistent with the data. A 95% CI of 8 to 30 points means the real effect could plausibly be anywhere in that range. Wide intervals mean small or noisy trials',
              '<strong>Odds ratio (OR)</strong>: a ratio of odds, common in responder results. 48% responding means odds of 48:52 ≈ 0.92; 29% means 29:71 ≈ 0.41; their ratio ≈ 2.3. Above 1 favours the drug. Odds ratios look bigger than the plain difference — always convert back to points',
              '<strong>Hazard ratio (HR)</strong>: used for "time until something happens" (death, hospitalisation). HR 0.79 means that at any moment the drug group had about 21% lower risk of the event than placebo. Below 1 favours the drug',
              '<strong>Relative vs absolute</strong>: "halves the risk" can mean 2% → 1% (absolute 1 point) or 40% → 20% (absolute 20 points). Always ask for absolute',
              '<strong>NNT</strong> (number needed to treat): 1 ÷ the absolute difference. A 19-point difference gives an NNT of about 5 — treat five patients for one extra responder. A useful sense-check of how big an effect really is'
            ] },
            { h: 'The fine print that moves results' },
            { ul: [
              '<strong>ITT (intention-to-treat)</strong>: everyone randomised is counted in their group, whether or not they finished. The fair, standard analysis. <strong>Per-protocol</strong>: only patients who followed the plan — usually flatters the drug',
              '<strong>Non-responder imputation</strong>: patients who drop out are counted as failures. Strict and common in I&I. Other methods fill in missing data with estimates — read which one was used',
              '<strong>Multiplicity / hierarchical testing</strong>: the more things you test, the more "wins" you get by chance. So secondaries are tested in a fixed order, and once one fails, everything below it is only descriptive. A "positive secondary" after a failed primary does not count statistically',
              '<strong>Subgroup analysis</strong>: results in slices of patients (by age, region, prior treatment). Useful for spotting inconsistency; dangerous when used to rescue a failed trial',
              '<strong>Topline</strong>: the first, brief company announcement of results — usually the primary and a few secondaries. The full paper or conference presentation comes later and often changes the picture'
            ] },
            { q: 'A trial reports 52% vs 32% on its primary endpoint, odds ratio 2.29, p = 0.002. In plain English, what are the placebo-adjusted difference and the NNT?', a: 'Difference: 52 − 32 = 20 percentage points. NNT: 1 ÷ 0.20 = 5 — treat about five patients for one extra responder versus placebo. The odds ratio of 2.29 sounds like "more than twice as good", but the plain-English effect is 20 extra responders per 100 patients.' },
            { q: 'A company’s primary endpoint missed (p = 0.21), but its press release highlights a "statistically significant" improvement in a secondary endpoint (p = 0.03). How should you read that?', a: 'With hierarchical testing, once the primary fails, secondary results are descriptive only — the p = 0.03 does not carry its usual meaning, because the company could have picked the best of several secondaries. Treat it as a hypothesis for the next trial, not evidence that the drug works.' },
            { callout: 'Three conversions to do every time: odds ratio → difference in points; relative risk → absolute risk; difference → NNT. They turn impressive-sounding statistics into a plain sense of how much a drug helps.', kind: 'warn' }
          ]
        },
        {
          id: 'ii1',
          title: 'Why I&I rewards specialists',
          body: [
            { p: 'Immunology and inflammation (I&I) is the area where depth compounds fastest. The same handful of signalling pathways — TNF, IL-17, IL-23, IL-4/IL-13, the JAK relay, and B-cell signals like BAFF and APRIL (all explained in the primer, lesson 1) — drive disease in the skin, gut, joints and kidney. Learn one pathway properly and you have learned something about five diseases.' },
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
              'Placebo — response rates in some endpoints are high and variable enough to sink a genuinely active drug (lesson 5)',
              'Class safety — a safety finding for one drug can rewrite the label of every drug in its class',
              'Read-across that does not hold — a pathway that matters in one tissue can be irrelevant, or harmful, in another (lessons 9 and 13)'
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
              '<strong>PASI (psoriasis)</strong> — Psoriasis Area and Severity Index: a doctor scores how much skin is covered and how red, thick and scaly the plaques are. PASI 75/90/100 = the share of patients with a 75/90/100% improvement. Placebo barely moves it, so differences are large and clean',
              '<strong>EASI and IGA (atopic dermatitis)</strong> — EASI (Eczema Area and Severity Index) scores extent and severity; IGA 0/1 is a physician\'s global "clear or almost clear". IGA is stricter. Background topical steroids raise placebo rates',
              '<strong>HiSCR (hidradenitis suppurativa)</strong> — HiSCR50 = at least a 50% fall in abscesses plus inflammatory nodules, with no new abscesses or draining tunnels. It is a lenient, noisy count, and placebo rates are high. Newer trials also report HiSCR75 and HiSCR90 to separate drugs',
              '<strong>Mayo score (ulcerative colitis)</strong> — stool frequency, rectal bleeding and endoscopy (a camera passed into the bowel to look at the lining; the doctor grades redness, bleeding and ulcers from 0 to 3). "Clinical remission" on the modified Mayo score is the usual primary; endoscopic healing (a healed-looking lining on camera) and histologic healing (healed tissue under the microscope, from a biopsy) are the harder, more durable measures',
              '<strong>SALT (alopecia areata)</strong> — percentage of scalp hair loss; SALT ≤20 means at most 20% of the scalp is still bald. Responses build slowly, so timepoints are long',
              '<strong>ACR20/50/70 (rheumatoid and psoriatic arthritis)</strong> — named after the American College of Rheumatology; ACR20 means at least 20% improvement in tender and swollen joint counts plus several other measures; ACR20 is easy to hit, ACR50/70 separate drugs',
              '<strong>Proteinuria and eGFR (IgA nephropathy and other kidney disease)</strong> — proteinuria is protein leaking into the urine, a sign of kidney damage, used as an early surrogate for accelerated approval; eGFR (estimated glomerular filtration rate) measures how well the kidneys filter blood, and its rate of decline is the confirmatory measure'
            ] },
            { h: 'How an endpoint can flatter a drug' },
            { ul: [
              'A lenient threshold (HiSCR50, ACR20, PASI 75) shows a "win" that a strict one (HiSCR75, ACR70, PASI 100) would not',
              'An early timepoint catches the fastest drugs at their best; check what happens at one year',
              'How dropouts are counted (for example, non-responder imputation — see the vocabulary primer) can move the headline by several points',
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
            { q: 'Your company\'s HS trial reads out next quarter. A competitor\'s HS trial just reported with a placebo HiSCR50 rate of 40% — above the 26–34% range in the table. Its stock rose because its drug arm was also high. What does this mean for your company?', a: 'It is a warning, not good news. A 40% placebo rate suggests recent HS trials (sites, regions, patient mix) may be running high placebo responses. If your company\'s trial sees something similar, its drug needs a higher absolute response to show the same difference — and it was probably powered assuming a lower placebo. Re-check the power assumptions (see lesson 14, on power) before the readout, not after.' },
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
              'The pathway does different jobs in different tissues — in the gut, IL-17 helps protect the gut lining, so blocking it can make bowel inflammation worse (see lesson 13)',
              'The argument rests on one small study, or on a drug a big company quietly discontinued',
              'It assumes one part of a pathway "does not matter" based on data from a different disease',
              'A molecule\'s size, half-life or tissue penetration differs from the drug it is being compared with'
            ] },
            { q: 'An investor argues: "IL-23 drugs work in both psoriasis and Crohn\'s disease, so an IL-17 drug that works in psoriasis should work in Crohn\'s too." What is wrong with the argument?', a: 'It treats psoriasis success as proof the whole pathway works everywhere. IL-23 and IL-17 sit on the same axis, but they do different jobs in different tissues: in the gut, IL-17 helps maintain the barrier lining, so blocking it directly removes a protective signal, while blocking IL-23 upstream does not have the same effect. The secukinumab Crohn\'s trial (lesson 13) showed exactly this. Read-across has to be checked tissue by tissue.' },
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
          id: 'ix1',
          kind: 'Landscape',
          title: 'Ulcerative colitis: the race for pills and new targets',
          body: [
            { p: 'Ulcerative colitis is one of the most contested markets in I&I. For years the choice was injections or infusions — TNF blockers, vedolizumab, IL-23 antibodies. The new fight is over <strong>oral</strong> drugs (pills patients prefer) and over a new target, <strong>TL1A</strong>. Knowing the field lets you judge any newcomer.' },
            { h: 'The oral classes already approved' },
            { ul: [
              '<strong>JAK inhibitors</strong> — tofacitinib (Xeljanz, the first oral drug for long-term use in UC, approved for UC in 2018) and upadacitinib (Rinvoq). Highly effective and fast, but they carry the class boxed warnings from the ORAL Surveillance study (see post-mortems), so guidelines and insurers often place them after injectable biologics',
              '<strong>S1P modulators</strong> — ozanimod (Zeposia, approved for UC in 2021; True North: 18% vs 6% clinical remission at week 10) and etrasimod (Velsipity, approved 2023; ELEVATE UC 52: 27% vs 7% at week 12). They keep certain immune cells trapped in the lymph nodes. Convenient and well tolerated, but more modest in effect'
            ] },
            { h: 'TL1A — the target big pharma paid up for' },
            { p: '<strong>TL1A</strong> is a cytokine involved in both gut inflammation and <strong>fibrosis</strong> (scarring and narrowing of the bowel, a major problem in Crohn’s disease). After strong early data, three large pharma companies bought in during 2023: Merck acquired Prometheus Biosciences for about $10.8 billion (tulisokibart), Roche acquired US and Japan rights to Telavant’s antibody for $7.1 billion upfront (now afimkibart), and Sanofi partnered with Teva on duvakitug. In tulisokibart’s Phase 2 ARTEMIS-UC study, 26% vs 1% reached clinical remission in the main cohort (NEJM 2024). These are injectable antibodies — so they compete with the oral drugs on efficacy and the possibility of preventing scarring, not on convenience.' },
            { h: 'Obefazimod — a first-in-class pill' },
            { ul: [
              '<strong>Mechanism</strong>: an oral, once-daily drug from Abivax that increases production of <strong>miR-124</strong>, a small RNA molecule that acts as a natural brake on inflammation. A new mechanism — not a JAK or an S1P modulator',
              '<strong>Induction (ABTECT-1 and -2, July 2025)</strong>: at 50 mg, the placebo-adjusted clinical remission at week 8 was about 19 points in one trial and 13 in the other — about 16 pooled. Squarely in the range of approved advanced UC drugs, from a pill without a JAK warning',
              '<strong>Maintenance (June 2026)</strong>: among patients who had responded to induction, about 51% were in clinical remission at week 44 on either dose, versus about 10% on placebo — a very large difference',
              '<strong>The catch</strong>: cancer cases in the data hit the shares hard on the day of the maintenance readout, despite the efficacy. How regulators and doctors read that safety signal — and the full data presented in October 2026 — now matters as much as the efficacy'
            ] },
            { h: 'Reading maintenance numbers correctly' },
            { p: 'Maintenance results look much bigger than induction results because the patients are different. Only patients who already responded to the drug enter maintenance (the randomised-withdrawal design in the vocabulary primer). So a 51% maintenance remission rate cannot be compared with an 18% induction rate, and maintenance results from trials with different designs (re-randomised responders vs treat-through, different weeks) cannot be compared directly either. Compare maintenance with maintenance, in similar designs, and always note how responders were defined.' },
            { h: 'How to judge a new UC drug' },
            { ul: [
              'Induction: placebo-adjusted remission against the 11–21-point benchmark range, consistent across twin trials',
              'Maintenance: durability in responders, and steroid-free remission (patients off prednisone)',
              'Harder endpoints: endoscopic and histologic healing',
              'Safety: infections, blood clots, heart events, cancers — the issues that have shaped JAK use and now obefazimod',
              'Route and position: a pill with a clean safety profile can be used earlier, before injectables, which is a much bigger market'
            ] },
            { q: 'A new UC pill reports 50% clinical remission at week 44 versus 10% on placebo, and an approved injectable reported 20% vs 6% at week 12. Is the pill "more than twice as effective"?', a: 'No — these are different questions in different patients. The 50% is maintenance remission among patients who had already responded to induction; the 20% is induction remission in all comers. Compare the pill’s induction results with the injectable’s induction results, and maintenance with maintenance, in similar trial designs.' },
            { callout: 'In UC, the winning product is not just the most effective one — it is the one that can be used earliest. Safety decides how early a drug is used, so read the safety tables as closely as the efficacy.', kind: 'warn' }
          ]
        },
        {
          id: 'ix2',
          kind: 'Landscape',
          title: 'Eczema and alopecia: new mechanisms after Dupixent',
          body: [
            { p: 'Dupixent (approved for atopic dermatitis in 2017) transformed eczema treatment and became one of the world’s best-selling drugs. Every new eczema drug has to answer one question: why would a doctor choose this over Dupixent — or after it? The answers fall into a few groups.' },
            { h: 'Same pathway, different angle' },
            { ul: [
              '<strong>IL-13 antibodies</strong> — tralokinumab (Adbry, 2021) and lebrikizumab (Ebglyss). Dupixent blocks the shared receptor for IL-4 and IL-13; these block IL-13 alone. Similar biology, sometimes less frequent dosing',
              '<strong>IL-31</strong> — nemolizumab (Nemluvio), approved for prurigo nodularis (an intensely itchy nodule disease) in 2024 and atopic dermatitis later that year. IL-31 is the "itch cytokine", so the selling point is fast itch relief'
            ] },
            { h: 'Upstream targets: OX40 and OX40L' },
            { p: '<strong>OX40</strong> is a "keep going" signal on activated T cells, and <strong>OX40L</strong> is its partner on other immune cells. Blocking the pair aims to reset the immune response upstream — possibly allowing long gaps between doses and lasting remission off drug. Results have been a lesson in expectations: Amgen’s rocatinlimab met its Phase 3 endpoints (for example, EASI-75 33% vs 14% at week 24) but disappointed investors, and Amgen returned the drug to its partner Kyowa Kirin in February 2026. Sanofi’s amlitelimab met its first Phase 3 endpoints in 2025 (about 21–23% vs 9% reaching clear or almost clear skin) — positive, but read as modest, and the shares fell.' },
            { h: 'Boosting the brakes: Treg therapies' },
            { p: 'Most I&I drugs block an attacking signal. A newer idea is to strengthen the <strong>regulatory T cells</strong> (the brakes; see the primer). Low doses of <strong>IL-2</strong> preferentially expand Tregs, and engineered versions are designed to favour them further. Nektar’s <strong>rezpegaldesleukin (rezpeg)</strong> is the most advanced:' },
            { ul: [
              '<strong>REZOLVE-AD (Phase 2b eczema, June 2025)</strong>: met its primary endpoint — average EASI improvement of 53–61% across doses vs 31% on placebo at week 16; at the top dose, EASI-75 was 42% vs 17%',
              '<strong>REZOLVE-AA (Phase 2b alopecia, December 2025)</strong>: missed its primary endpoint (average SALT improvement about 28–30% vs 11%, not statistically significant). It reached significance only after excluding four patients with major eligibility violations — a post-hoc analysis, which does not rescue the primary (see the vocabulary primer)',
              '<strong>Phase 3</strong>: the ZENITH AD programme in eczema began in July 2026, with results expected around mid-2028'
            ] },
            { p: 'How to read a Treg drug: an EASI-75 of about 42% in Phase 2 sits below the strongest pills (upadacitinib about 80%) but in the range of injectable biologics. The case therefore rests less on peak efficacy and more on the hope of a different profile — durable responses, infrequent dosing, a cleaner safety record, and use in patients who failed other drugs. Those are exactly the things Phase 3 and long-term extension data must show.' },
            { h: 'Alopecia areata: the JAK era' },
            { ul: [
              'Three JAK inhibitors are approved for severe alopecia areata: baricitinib (Olumiant), ritlecitinib (Litfulo) and deuruxolitinib (Leqselvi, 2024). See the benchmark table for their SALT ≤20 rates',
              'All carry JAK class warnings, so a non-JAK drug with real efficacy would have an opening — which is why investors watch Treg and other mechanisms here',
              'Hair regrows slowly, so trials run 24–52 weeks, and the strict endpoint (SALT ≤20) is hard to hit in a small Phase 2'
            ] },
            { h: 'The "partial win" problem' },
            { p: 'Rezpeg shows a common pattern: a hit in one disease and a narrow miss in another. Investors tend to swing between "the miss proves nothing works" and "the miss was bad luck". The disciplined reading: treat each indication separately, give the miss its full weight in that indication, ask whether the trial was large enough to see a realistic effect (the power lesson), and note that the company’s Phase 3 spending follows the disease that worked.' },
            { q: 'An eczema drug reports EASI-75 of 42% vs 17% in Phase 2. Using the benchmark table, place it against approved drugs, and name two non-efficacy features that could still make it commercially important.', a: 'The 25-point difference sits below Dupixent (about 36 points), Ebglyss (about 43) and Rinvoq 30 mg (about 64) on cross-trial comparison — so it is not a peak-efficacy leader. It could still matter through less frequent dosing, durable responses after stopping, a cleaner safety profile than JAK pills, or efficacy in patients who failed existing biologics. Phase 3 has to prove those features, not just repeat the efficacy.' },
            { callout: 'After a category-defining drug, newcomers win on a different axis — convenience, safety, durability, or a patient group the leader serves poorly. Identify the axis first, then judge whether the data support it.', kind: '' }
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
        'Time: the 13 lessons and their exercises take about 4–5 hours in all. The 8 weeks is mostly the reading list at the bottom of this page — about 2–3 hours a week',
        'Week 1 · Primers: lesson 1 (heart and lungs in plain English) and the trial-vocabulary primer in the Immunology track; then lessons 2–3 (the patient groups, the four drug pathways)',
        'Week 2 · Lessons 4–5 (endpoints, the background-therapy squeeze), then the early PAH papers',
        'Weeks 3–4 · Worked examples 6–8 (sotatercept, inhaled treprostinil, patents and exclusivity), then the STELLAR, ZENITH and INCREASE papers',
        'Weeks 5–6 · Lessons 9–10 (post-mortems, TOPCAT), then the heart-failure papers',
        'Weeks 7–8 · Lessons 11–12 (HCM, power for walk-distance and outcome trials), then the HCM papers',
        'Ongoing · Lesson 13: log a dated prediction before every readout you follow, and score it afterwards'
      ],
      reading: {
        intro: 'The original papers behind the numbers in this track. Read the abstract, then the results tables and the supplement. Search the citation on PubMed to find each one.',
        weeks: [
          { week: 'Week 2 · PAH, the monotherapy era', task: 'Note how large walk-distance gains were when patients had no background therapy.', papers: [
            'BREATHE-1 (bosentan) — Rubin et al., NEJM 2002',
            'ARIES-1 and ARIES-2 (ambrisentan) — Galiè et al., Circulation 2008',
            'Minimal important difference for 6MWD in PAH — Mathai et al., AJRCCM 2012'
          ] },
          { week: 'Weeks 3–4 · Add-on, outcomes and the new class', task: 'For each trial, write down the background therapy, the endpoint and the result — then compare add-on with add-on.', papers: [
            'TRIUMPH (inhaled treprostinil) — McLaughlin et al., JACC 2010',
            'SERAPHIN (macitentan) — Pulido et al., NEJM 2013',
            'GRIPHON (selexipag) — Sitbon et al., NEJM 2015',
            'STELLAR (sotatercept) — Hoeper et al., NEJM 2023',
            'ZENITH (sotatercept) — Humbert et al., NEJM 2025',
            'HYPERION (sotatercept) — McLaughlin et al., NEJM 2025',
            'INCREASE (inhaled treprostinil in PH-ILD) — Waxman et al., NEJM 2021'
          ] },
          { week: 'Weeks 5–6 · Heart failure and its graveyard', task: 'Read TOPCAT with the regional analysis side by side, then compare with the two SGLT2 wins.', papers: [
            'TOPCAT (spironolactone) — Pitt et al., NEJM 2014; regional analysis — Pfeffer et al., Circulation 2015',
            'RELAX (sildenafil in HFpEF) — Redfield et al., JAMA 2013',
            'EMPEROR-Preserved (empagliflozin) — Anker et al., NEJM 2021',
            'DELIVER (dapagliflozin) — Solomon et al., NEJM 2022'
          ] },
          { week: 'Weeks 7–8 · Hypertrophic cardiomyopathy', task: 'Compare the safety monitoring in each label, and why MAPLE-HCM chose an active comparator.', papers: [
            'EXPLORER-HCM (mavacamten) — Olivotto et al., Lancet 2020',
            'SEQUOIA-HCM (aficamten) — Maron et al., NEJM 2024',
            'MAPLE-HCM (aficamten vs metoprolol) — Garcia-Pavia et al., NEJM 2025'
          ] }
        ]
      },
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
          { area: 'PAH (WHO group 1)', endpoint: 'Time to clinical worsening, newly diagnosed', drug: 'Sotatercept (Winrevair)', trial: 'HYPERION', delta: 'HR 0.24', asOf: '2025', pending: false },
          { area: 'PAH (WHO group 1)', endpoint: '6MWD Δ vs placebo, wk 24 (missed: p = 0.032 vs 0.025 threshold)', drug: 'Seralutinib (inhaled) — add-on', trial: 'PROSERA', delta: '+13 m', asOf: '2026', pending: false },
          { area: 'PH-ILD (WHO group 3)', endpoint: '6MWD Δ vs placebo, wk 16', drug: 'Inhaled treprostinil (Tyvaso)', trial: 'INCREASE', delta: '+31 m (mean; ≈+21 m by median)', asOf: '2021', pending: false },
          { area: 'IPF (lung scarring)', endpoint: 'FVC Δ vs placebo, wk 52', drug: 'Inhaled treprostinil (Tyvaso)', trial: 'TETON-2', delta: '+96 mL', asOf: '2025', pending: false },
          { area: 'IPF (lung scarring)', endpoint: 'FVC Δ vs placebo, wk 52', drug: 'Inhaled treprostinil (Tyvaso)', trial: 'TETON-1', delta: '+130 mL', asOf: '2026', pending: false },
          { area: 'HFpEF', endpoint: 'CV death, HF hospitalisation or aborted cardiac arrest (missed)', drug: 'Spironolactone', trial: 'TOPCAT', delta: 'HR 0.89', asOf: '2014', pending: false },
          { area: 'HFpEF', endpoint: 'CV death or HF hospitalisation', drug: 'Empagliflozin (Jardiance, SGLT2)', trial: 'EMPEROR-Preserved', delta: 'HR 0.79', asOf: '2021', pending: false },
          { area: 'HFpEF', endpoint: 'Worsening HF or CV death (driven by worsening HF; CV death alone not significant)', drug: 'Dapagliflozin (Farxiga, SGLT2)', trial: 'DELIVER', delta: 'HR 0.82', asOf: '2022', pending: false },
          { area: 'Obstructive HCM', endpoint: 'pVO2 + NYHA class responder, wk 30', drug: 'Mavacamten (Camzyos, myosin inhibitor)', trial: 'EXPLORER-HCM', d: 37, pb: 17, asOf: '2020', pending: false },
          { area: 'Obstructive HCM', endpoint: 'Peak VO2 Δ vs placebo, wk 24 (primary)', drug: 'Aficamten (Myqorzo, myosin inhibitor)', trial: 'SEQUOIA-HCM', delta: '+1.7 mL/kg/min', asOf: '2024', pending: false },
          { area: 'Obstructive HCM', endpoint: 'Peak VO2 Δ vs metoprolol (active comparator), wk 24', drug: 'Aficamten (Myqorzo)', trial: 'MAPLE-HCM', delta: '+2.3 mL/kg/min', asOf: '2025', pending: false }
        ]
      },
      lessons: [
        {
          id: 'cpp1',
          kind: 'Primer',
          title: 'Heart and lungs in plain English',
          body: [
            { p: 'This primer explains the plumbing behind every lesson in the track. If you have not yet read the trial-vocabulary primer, it is in the <a class="inline" href="#/tracks/immunology/ip2">Immunology track</a> and applies here too.' },
            { h: 'Two pumps in one heart' },
            { ul: [
              'The heart is two pumps side by side. The <strong>right side</strong> receives used, oxygen-poor blood from the body and pumps it a short distance to the lungs. The <strong>left side</strong> receives fresh, oxygen-rich blood from the lungs and pumps it out to the whole body',
              'The right side is built for a <strong>low-pressure</strong> job: the lung circulation normally offers little resistance. The left side is thick and strong because it must push blood around the entire body',
              'Blood travels from the right heart to the lungs through the <strong>pulmonary arteries</strong>, which branch into millions of tiny vessels around the air sacs, where blood picks up oxygen'
            ] },
            { h: 'Pulmonary hypertension: high pressure in the lung arteries' },
            { p: '<strong>Pulmonary hypertension (PH)</strong> means the blood pressure in the lung arteries is too high. It is unrelated to ordinary high blood pressure, which is measured in the arm. It is diagnosed by <strong>right-heart catheterisation</strong> — a thin tube passed through a vein into the right heart to measure pressures directly.' },
            { p: 'In <strong>pulmonary arterial hypertension (PAH)</strong>, the small lung arteries themselves thicken and narrow — called <strong>remodelling</strong>. The right heart, built for low pressure, must push ever harder. Over time it enlarges, weakens and fails. <strong>Right-heart failure</strong>, not the lungs, is what usually kills patients with PAH. That is why the key measures (lesson 4) track how well the right heart copes: how far patients can walk, how much resistance the lung arteries offer, and blood markers of heart strain.' },
            { p: 'PAH is rare and serious. Early symptoms — breathlessness and tiredness on exertion — are vague, so diagnosis is often delayed. Most PH is not PAH: it is a consequence of left-heart disease or lung disease (the "groups" in lesson 2).' },
            { h: 'Lung scarring: interstitial lung disease' },
            { p: '<strong>Interstitial lung disease (ILD)</strong> is a family of conditions in which the tissue between the air sacs becomes inflamed and scarred, making the lungs stiff. The best known is <strong>idiopathic pulmonary fibrosis (IPF)</strong> — progressive scarring with no known cause. Lung capacity is measured as <strong>FVC (forced vital capacity)</strong>: how much air you can blow out after the deepest breath. In IPF, FVC falls year after year, and slowing that fall is the standard trial goal. Many ILD patients also develop PH, called <strong>PH-ILD</strong>.' },
            { h: 'Heart failure: weak pump or stiff pump' },
            { ul: [
              '<strong>Ejection fraction (EF)</strong> is the share of blood the left heart pumps out with each beat — normally a little over half',
              '<strong>HFrEF</strong> (heart failure with reduced EF): a weak, baggy pump. Many drugs work here',
              '<strong>HFpEF</strong> (heart failure with preserved EF): the pump squeezes normally but is stiff and fills badly, so pressure backs up into the lungs. Common in older, overweight, diabetic or hypertensive patients, and historically very hard to treat'
            ] },
            { h: 'Hypertrophic cardiomyopathy: too much muscle' },
            { p: '<strong>Hypertrophic cardiomyopathy (HCM)</strong> is usually genetic: the heart muscle grows abnormally thick. In <strong>obstructive HCM</strong>, the thickened wall narrows the exit from the left heart, so blood must squeeze through — measured as the <strong>LVOT gradient</strong> (the pressure difference across the narrowing). <strong>Myosin</strong> is the motor protein that makes heart muscle contract; in HCM it is over-active. <strong>Myosin inhibitors</strong> turn it down, relaxing the muscle and widening the exit.' },
            { q: 'Why would a drug that relaxes and widens the lung arteries help a patient with PAH, but possibly harm a patient whose PH comes from a failing left heart?', a: 'In PAH the problem is in the lung arteries themselves, so opening them reduces the load on the right heart. In left-heart disease, blood backs up because the left heart cannot accept it. Opening the lung arteries sends more blood forward into a left heart that already cannot cope, which can worsen congestion and fluid in the lungs. Same drug, opposite logic — which is why the PH "group" matters so much.' },
            { callout: 'In PAH, follow the right heart. Every important measure — walk distance, artery resistance, heart-strain markers, survival — is ultimately a reading of how well the right heart is coping.', kind: '' }
          ]
        },
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
          id: 'cpx1',
          kind: 'Primer',
          title: 'PAH drugs: four pathways, many ways in',
          body: [
            { p: 'Almost every PAH drug works on one of four biological pathways. Knowing them lets you place any new drug in seconds — and understand why the fiercest competition is often about <em>how</em> a drug is delivered rather than <em>what</em> it is.' },
            { h: '1 · The endothelin pathway — block a squeeze signal' },
            { p: '<strong>Endothelin</strong> is a natural signal that narrows blood vessels and encourages their walls to thicken. PAH patients make too much of it. <strong>Endothelin receptor antagonists (ERAs)</strong> — bosentan, ambrisentan, macitentan — block it. They are pills. Watch-outs: fluid retention, liver effects (especially bosentan), and harm to unborn babies, so pregnancy must be prevented.' },
            { h: '2 · The nitric oxide pathway — boost a relax signal' },
            { p: '<strong>Nitric oxide</strong> relaxes vessel walls through a chemical messenger called <strong>cGMP</strong>. <strong>PDE5 inhibitors</strong> — sildenafil and tadalafil, the same molecules as Viagra and Cialis — stop cGMP being broken down. <strong>Riociguat</strong>, a <strong>soluble guanylate cyclase (sGC) stimulator</strong>, makes more of it. All pills. The two kinds are not combined, because together they can drop blood pressure dangerously.' },
            { h: '3 · The prostacyclin pathway — the most powerful, the hardest to deliver' },
            { p: '<strong>Prostacyclin</strong> is a natural vessel-relaxing signal that PAH patients lack. Drugs that replace it are the most potent of the classic treatments, but delivering them is hard:' },
            { ul: [
              '<strong>Epoprostenol</strong> lasts only minutes in the body, so it runs continuously into a vein through a permanent catheter and pump. Life-saving for the sickest patients, but a burden, with a risk of line infections',
              '<strong>Treprostinil</strong> is a more stable version that can be given by continuous infusion into a vein or under the skin, by <strong>inhalation</strong> (a nebuliser several times a day, or a dry-powder inhaler), or as a pill',
              '<strong>Iloprost</strong> is another inhaled version; <strong>selexipag</strong> is a pill that activates the prostacyclin receptor rather than replacing the molecule',
              'Side effects — headache, jaw pain, flushing, diarrhoea, and cough when inhaled — limit how far the dose can be raised. The dose patients can tolerate often decides how much benefit they get'
            ] },
            { h: '4 · Activin signalling — rebalancing growth, not just relaxing' },
            { p: 'The newest class works differently. <strong>Sotatercept</strong> is a "ligand trap" — an engineered protein that soaks up activin-family growth signals that drive the thickening of the artery walls. The hope is that it reverses some of the remodelling rather than only opening the vessels. It is an injection under the skin every three weeks. Watch-outs include bleeding and small dilated blood vessels in the skin.' },
            { h: 'How doctors combine them' },
            { p: 'Patients are graded by risk (walk distance, heart-strain blood markers, heart scans, symptoms). Most start on two pills from different pathways — typically an ERA plus a PDE5 inhibitor. Higher-risk patients add a prostacyclin-pathway drug, and the sickest get continuous infusions. Newer drugs are tested <strong>on top of</strong> this background, which is why their measured effects look smaller (lesson on the background-therapy squeeze).' },
            { h: 'Why delivery is a battlefield' },
            { p: 'Treprostinil itself has been around for decades; its original patents expired long ago. So competition between treprostinil products is about the <strong>delivery</strong>: inhaled versus pill versus pump, nebuliser versus dry-powder inhaler, how many breaths, how often, and how high a dose patients tolerate. Inhaling puts the drug straight into the lungs, so more reaches the target and less reaches the rest of the body. These products are protected — and attacked — mainly through patents on devices, formulations and methods of use, and through regulatory exclusivity (the patents lesson).' },
            { q: 'A company launches a new inhaler for an old PAH drug. Name three things that would decide whether doctors switch patients to it.', a: 'Any three of: convenience (number of sessions per day, time per session, device size, cleaning); tolerability (cough and throat irritation) and therefore the dose patients can reach; evidence that the higher reachable dose means more benefit; insurance coverage and price compared with the incumbent; and whether the incumbent has its own improved device. The molecule is the same, so the case is built entirely on delivery and access.' },
            { callout: 'When a PH company says "new drug", check whether it is a new molecule, a new pathway, or a new way of delivering an old molecule. Each has a completely different risk profile — and the third is often decided in court as much as in the clinic.', kind: 'warn' }
          ]
        },
        {
          id: 'cp2',
          title: 'The endpoint toolkit',
          body: [
            { p: 'Cardiopulmonary endpoints are more objective than those in psychiatry or pain, but each still has blind spots.' },
            { ul: [
              '<strong>6-minute walk distance (6MWD)</strong>: how far a patient walks in six minutes. The workhorse of PAH trials. Improvements of roughly 30 metres are usually treated as clinically meaningful. Fitter patients hit a ceiling, and motivation and coaching affect it',
              '<strong>Pulmonary vascular resistance (PVR)</strong>: how hard the lung arteries resist blood flow, measured by right-heart catheterisation (see the primer). A direct measure of what PAH drugs target — a strong Phase 2 signal, but not an approval endpoint on its own',
              '<strong>NT-proBNP</strong>: a blood marker released by heart muscle when it is stretched and strained — higher means a heart under more pressure. Cheap, objective, and a useful early read; it predicts outcomes but is not itself an outcome',
              '<strong>Time to clinical worsening / morbidity-mortality composites</strong>: a combined endpoint that counts the first of several bad events — death, hospitalisation, disease progression — and compares how soon they happen (reported as a hazard ratio; see the vocabulary primer). Harder to win, more convincing, and now the standard for showing a drug changes the disease course',
              '<strong>Peak VO2 (pVO2)</strong>: the most oxygen the body can use at maximum effort, measured on an exercise bike or treadmill with a breathing mask (a cardiopulmonary exercise test, CPET). Expressed in mL of oxygen per kg of body weight per minute; a gain of 1–2 is meaningful. The key HCM functional measure',
              '<strong>KCCQ</strong>: the Kansas City Cardiomyopathy Questionnaire — patients rate their own symptoms, physical limits and quality of life on a 0–100 scale; a 5-point change is noticeable to patients. Central in HFpEF',
              '<strong>Hard outcomes (HR)</strong>: events that unambiguously matter — death and hospitalisation. In large heart-failure trials, the hazard ratio for cardiovascular death or heart-failure hospitalisation is what changes prescribing'
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
          id: 'cpw1',
          kind: 'Worked example',
          title: 'Sotatercept — how a new class resets the bar',
          body: [
            { p: 'Sotatercept (Winrevair) is the clearest recent example of a breakthrough in a mature field. Merck bought its developer, Acceleron, for about $11.5 billion in 2021; the FDA approved it for PAH in March 2024 as the first <strong>activin signalling inhibitor</strong>. Three trials tell the story — each one teaching a different reading skill.' },
            { h: 'STELLAR — the functional win on top of everything else' },
            { ul: [
              'Patients already on background therapy (mostly two or three PAH drugs) were randomised to sotatercept or placebo',
              'Primary endpoint: change in 6-minute walk distance at week 24. Result: about <strong>+41 metres</strong> versus placebo (Hoeper, NEJM 2023)',
              'Why it mattered: add-on trials usually show 20–30 metres (see the benchmark table). Forty metres <em>on top of</em> double or triple therapy is a monotherapy-sized effect in an add-on trial'
            ] },
            { p: 'A reading tip from the paper: the figure is a <strong>Hodges-Lehmann estimate</strong> — a statistical method for the typical difference between groups. Each group’s own median change (+34 m on drug, +1 m on placebo) cannot simply be subtracted to get it. Always quote the between-group estimate.' },
            { h: 'ZENITH — the outcome win in the sickest patients' },
            { ul: [
              'High-risk patients; primary endpoint: time to death, lung transplant, or hospitalisation for worsening PAH',
              'Result: events in 17% on sotatercept vs 55% on placebo; <strong>hazard ratio 0.24</strong> — about a 76% lower risk at any moment (Humbert, NEJM 2025). Stopped early because the benefit was clear'
            ] },
            { h: 'HYPERION — earlier in the disease' },
            { ul: [
              'Patients diagnosed within the past year, on background therapy; primary endpoint: time to clinical worsening',
              'Result: events in 10.6% vs 36.9%; <strong>HR 0.24</strong> (McLaughlin, NEJM 2025)',
              'Two caveats a careful reader notices: the trial was stopped early mainly because ZENITH’s results made continuing placebo hard to justify; and most of the benefit came from fewer exercise-based deteriorations and hospitalisations — deaths were similar between groups'
            ] },
            { h: 'What a new class does to everyone else' },
            { ul: [
              'Every later PAH drug is now judged as an add-on to sotatercept-era care — a higher bar and smaller measurable effects',
              'Outcome data (fewer hospitalisations and deaths) become the expected standard, which favours large sponsors',
              'Delivery-focused competitors (new inhalers, new pills of old molecules) are fighting over a background-therapy slot rather than the headline'
            ] },
            { q: 'A competitor reports an add-on PAH trial with +13 m walk distance versus placebo, p = 0.03, but the trial’s pre-set significance threshold was 0.025. Did it succeed?', a: 'No. If a trial splits its significance level — for example to test two doses or two populations — the bar for each test is lower than 0.05, and 0.03 misses a 0.025 bar. This happened to seralutinib’s Phase 3 PROSERA trial in February 2026 (+13.3 m, p = 0.032 against a 0.025 threshold). And even had it passed, +13 m is well below the roughly 33 m usually treated as clinically meaningful, and far below sotatercept’s +41 m.' },
            { callout: 'A new class does not just add a drug — it moves the bar for every competitor. After a breakthrough, re-read every pipeline in the field as an add-on to the new standard.', kind: 'warn' }
          ]
        },
        {
          id: 'cpw2',
          kind: 'Worked example',
          title: 'Inhaled treprostinil: PH-ILD, IPF and the device race',
          body: [
            { p: 'Inhaled treprostinil is a case study in how one old molecule can be turned into a growing franchise by new indications and new devices — and how that franchise is contested.' },
            { h: 'Step 1 · A new indication: PH-ILD' },
            { ul: [
              'Tyvaso (United Therapeutics; nebulised treprostinil) was approved for PAH in 2009',
              'The INCREASE trial tested it in <strong>PH-ILD</strong> — pulmonary hypertension caused by lung scarring, a group where PAH drugs had often failed or harmed (see the post-mortems lesson). Result: about <strong>+31 m</strong> walk distance by the mean-based analysis (about +21 m by the median-based one) at week 16 (Waxman, NEJM 2021)',
              'In March 2021 Tyvaso became the first approved therapy for PH-ILD — a new, larger patient group for an old drug'
            ] },
            { p: 'Why inhaled worked where pills had failed: inhaled drug goes mainly to the parts of the lung that are still ventilated (getting air), so it opens the arteries next to working air sacs. A pill opens arteries everywhere, including beside scarred, airless tissue, which can send blood where it cannot pick up oxygen and lower oxygen levels.' },
            { h: 'Step 2 · A new device: dry powder' },
            { p: 'Nebulised Tyvaso needs a machine, several sessions a day and cleaning. <strong>Tyvaso DPI</strong>, a pocket dry-powder inhaler, was approved in May 2022. <strong>Yutrepia</strong> (Liquidia), a rival dry-powder treprostinil made with a particle-engineering process, received final FDA approval in May 2025 — after years of patent litigation and a wait for a regulatory exclusivity period to expire (next lesson).' },
            { h: 'Step 3 · A bigger indication: IPF' },
            { ul: [
              'The TETON trials tested inhaled treprostinil in <strong>idiopathic pulmonary fibrosis</strong> itself, measuring lung capacity (FVC; see the primer)',
              'TETON-2 (topline September 2025): about <strong>+96 mL</strong> FVC versus placebo at week 52',
              'TETON-1 (topline March 2026): about <strong>+130 mL</strong> versus placebo at week 52',
              'A reading tip: these are <em>differences between groups</em>. Lung capacity still fell in treated patients; it fell much less than on placebo. "+96 mL" does not mean patients’ lungs got bigger'
            ] },
            { h: 'What to take from it' },
            { ul: [
              'Indication expansion can matter more than the original approval — PH-ILD and IPF are much larger than PAH',
              'Two positive twin trials in a large indication is a strong position; the next questions are approval, pricing and how doctors combine it with existing IPF drugs',
              'Every new indication or device creates new patents, exclusivities and litigation — which decide who can sell into each group'
            ] },
            { q: 'A company says its inhaled drug "improved lung function by 130 mL" in an IPF trial. What do you check before repeating that?', a: 'Whether 130 mL is the change within the treated group or the difference versus placebo (in TETON-1 it is the difference — treated patients still declined, just less). Then: at what week, by what statistical method, and whether a twin trial agrees. Finally, compare with how much lung function patients on existing IPF drugs lose per year, to judge whether the difference matters clinically.' },
            { callout: 'In a delivery franchise, growth comes from new indications and new devices, and both come with new patents and fights. Track the label — which patients each product may legally be sold for — as closely as the trial data.', kind: '' }
          ]
        },
        {
          id: 'cpw3',
          kind: 'Worked example',
          title: 'Patents and exclusivity: how a drug fight is decided in court',
          body: [
            { p: 'For drugs built on old molecules, the decisive battles are often legal. You do not need to be a lawyer, but you do need to know the moving parts — because a single court ruling can be worth more than a Phase 3 trial.' },
            { h: 'The two kinds of protection' },
            { ul: [
              '<strong>Patents</strong> are granted by the patent office and enforced in court. They can cover the molecule, a formulation, a device, a manufacturing process, or a <strong>method of use</strong> (treating a particular disease in a particular way). A patent can be challenged as invalid (it should never have been granted) or avoided (the rival product does not infringe it)',
              '<strong>Regulatory exclusivity</strong> is granted by the FDA, separately from patents. It blocks rivals from relying on the originator’s data for a fixed period — for example, 5 years for a new chemical entity and <strong>3 years for a new clinical investigation</strong> (such as a new formulation or indication). It cannot be challenged in court the way a patent can; it simply has to run out'
            ] },
            { h: 'The usual battleground: Hatch-Waxman' },
            { ul: [
              'A rival that wants to copy or adapt an approved drug files with the FDA. If it builds on the existing drug’s safety data plus some studies of its own, it often uses a <strong>505(b)(2)</strong> application — a hybrid route common for new formulations of old molecules',
              'The originator lists its patents in the FDA’s <strong>Orange Book</strong>. The rival certifies that each patent is invalid or not infringed (a <strong>Paragraph IV</strong> certification)',
              'If the originator sues within 45 days, FDA approval is usually blocked for up to <strong>30 months</strong> (the "30-month stay") while the court decides',
              'The FDA can grant <strong>tentative approval</strong> — the product is approvable, but cannot be sold until the patents or exclusivity clear',
              'Separately, anyone can ask the patent office’s tribunal (<strong>PTAB</strong>) to cancel a patent through an <strong>inter partes review (IPR)</strong> — often faster and cheaper than court'
            ] },
            { h: 'Case study: Yutrepia vs Tyvaso' },
            { ul: [
              'Liquidia’s dry-powder treprostinil (Yutrepia) was challenged by United Therapeutics (Tyvaso) under Hatch-Waxman',
              'One key United Therapeutics patent (the "’793 patent") was found unpatentable by PTAB; the Federal Circuit appeals court affirmed in December 2023',
              'The FDA granted tentative approval in August 2024. Final approval waited for Tyvaso DPI’s 3-year exclusivity to end in May 2025 — <strong>an exclusivity, not a patent, set the launch date</strong>',
              'A second patent (the "’327 patent"), covering treatment of PH-ILD, was litigated separately. On 30 September 2026 the court found two of its claims valid and infringed',
              'In October 2026 the companies settled all litigation: Liquidia agreed to pay about $381 million in total and to remove PH-ILD from Yutrepia’s label, continuing to sell it for PAH'
            ] },
            { h: 'The lessons' },
            { ul: [
              'A "win" against one patent does not clear the field — each patent and each exclusivity is a separate gate',
              'Method-of-use patents can split a market by indication: a product can be free to sell for one disease and blocked for another',
              'Litigation outcomes are binary events with large consequences and no fixed date — they deserve the same scenario analysis as a trial readout',
              'Read the company’s own legal-proceedings note in each quarterly filing (10-Q) — it lists every case, its stage, and what the company says it can and cannot estimate'
            ] },
            { q: 'A company has won an invalidity ruling on one of its rival’s patents and says its launch is "cleared". What would you check?', a: 'Every other listed patent (are there method-of-use patents covering specific indications still in litigation?), any regulatory exclusivity and its expiry date, whether the ruling can still be appealed, and the trade-secret or other claims that sit outside patent law. In the Yutrepia case, a PTAB win on one patent was followed by an exclusivity wait and then a loss on a second, indication-specific patent.' },
            { callout: 'For delivery-based franchises, map every gate — each patent, each exclusivity, each pending case — with its date or its "no date". The legal map is part of the investment case, not a footnote.', kind: 'bad' }
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
          id: 'cpw4',
          kind: 'Worked example',
          title: 'TOPCAT — when the trial measured the wrong patients',
          body: [
            { p: 'TOPCAT tested spironolactone — an old, cheap pill that blocks the hormone aldosterone — in HFpEF (Pitt, NEJM 2014). It is the best example of how <em>where</em> and <em>how</em> a trial enrols can decide its result.' },
            { h: 'The headline' },
            { p: 'Primary endpoint (cardiovascular death, heart-failure hospitalisation or aborted cardiac arrest): 18.6% on spironolactone vs 20.4% on placebo; <strong>HR 0.89</strong>, 95% confidence interval 0.77 to 1.04, p = 0.14. The interval crosses 1, so: not statistically significant. A failed trial.' },
            { h: 'The regional split' },
            { ul: [
              'A follow-up analysis (Pfeffer, Circulation 2015) compared regions. Among <em>placebo</em> patients, the event rate was about 12.6 per 100 patient-years in the Americas but only about 2.3 in Russia and Georgia',
              'Real HFpEF patients have frequent events. A placebo group with so few suggests many enrolled patients may not have had the disease as defined',
              'In the Americas, spironolactone looked beneficial (HR about 0.82); in Russia and Georgia, no effect at all (HR about 1.10)',
              'A later check measured canrenone, a breakdown product of spironolactone that should be in the blood of anyone taking it: it was undetectable in about 30% of Russian participants who reported taking the drug, versus about 3% in the US and Canada (de Denus, NEJM 2017)'
            ] },
            { h: 'What it teaches' },
            { ul: [
              'Check the placebo event rate against what the disease should produce. Too low means wrong patients, or events not being captured',
              'Look at results by region — a large difference is a warning about enrolment or trial conduct, not just chance',
              'A failed trial can hide a working drug, and a positive one can hide a weak drug. The pre-specified primary result still governs: TOPCAT’s regional analysis is a strong hypothesis, not proof'
            ] },
            { q: 'A heart-failure trial reports its placebo arm had an event rate far below other trials in the same disease, and the drug "narrowly missed". What two follow-up questions do you ask?', a: '(1) How were patients selected and diagnosed — was there an objective entry test (such as a raised NT-proBNP) or only a doctor’s judgement? (2) How do results and event rates break down by region or site? Low placebo event rates shrink the trial’s power and often point to enrolment problems; regional splits show whether that is the explanation.' },
            { callout: 'The placebo arm is a quality check on the whole trial. If its event rate does not look like the disease, question the enrolment before you question the drug.', kind: 'warn' }
          ]
        },
        {
          id: 'cp5',
          title: 'HCM and the second-entrant question',
          body: [
            { p: 'Hypertrophic cardiomyopathy shows a clean pattern seen across biotech: a first-in-class drug proves the mechanism, then the question becomes whether a second or third entrant can win share.' },
            { p: 'Cardiac myosin inhibitors reduce excess heart-muscle contraction. The first approved drug improved exercise capacity and symptoms in obstructive HCM, but because over-reducing contraction can weaken pumping, its label requires regular heart-scan monitoring under a restricted-access safety programme (a REMS). That monitoring burden opened a door for follow-on drugs designed to be easier to manage.' },
            { h: 'How to judge a follow-on drug' },
            { ul: [
              'Efficacy parity: does it match the first drug on the same endpoints, in a comparable population?',
              'Safety margin: how often does pumping drop too far, and how quickly does the effect reverse if it does?',
              'Practical burden: dosing adjustments, scan frequency, drug interactions — these decide what busy cardiologists choose',
              'Expansion: the bigger prize is non-obstructive HCM and related diseases, which are separate, harder trials'
            ] },
            { h: 'The real numbers' },
            { ul: [
              '<strong>Mavacamten (Camzyos)</strong>, approved April 2022. EXPLORER-HCM: 37% vs 17% met a combined target of better peak VO2 and better symptom class at week 30 (Olivotto, Lancet 2020). Label: a boxed warning for heart failure and a <strong>REMS</strong> requiring heart scans (echocardiograms) to check pumping strength — treatment is not started if ejection fraction is below 55% and is paused if it falls below 50%',
              '<strong>Aficamten (Myqorzo)</strong>, approved December 2025. SEQUOIA-HCM: peak VO2 +1.7 mL/kg/min versus placebo at week 24 (Maron, NEJM 2024). MAPLE-HCM compared it head-to-head with metoprolol, a standard first-line beta-blocker: +2.3 mL/kg/min in aficamten’s favour (Garcia-Pavia, NEJM 2025). Its label also carries a boxed warning and a REMS, reported to be lighter than Camzyos’s'
            ] },
            { p: 'Notice what this does to the "less hassle" case: both drugs ended up with a REMS, so the difference became one of degree. And MAPLE-HCM was a smart trial choice — beating the cheap drug doctors try first is a stronger argument for first-line use than beating placebo.' },
            { q: 'Why might beating metoprolol head-to-head be commercially more valuable than another placebo-controlled win?', a: 'Doctors usually start obstructive HCM patients on a cheap beta-blocker such as metoprolol and move to newer drugs only if symptoms persist. Showing superiority over that first-line standard supports using the new drug earlier — a bigger market — and gives payers a direct comparison, which placebo trials cannot.' },
            { callout: 'For a second entrant, the investment case is usually "same benefit, less hassle". Check that the hassle is real for doctors, and that the trial actually showed the difference.', kind: '' }
          ]
        },
        {
          id: 'cpw5',
          kind: 'Worked example',
          title: 'Power: walk-distance and outcome trials',
          body: [
            { p: 'The Immunology track’s power lesson covered responder endpoints. Cardiopulmonary trials mostly use two other kinds: <strong>continuous</strong> measures such as metres walked, and <strong>event-driven</strong> trials that count deaths and hospitalisations. Each has its own rule of thumb.' },
            { h: 'Continuous endpoints (e.g. 6-minute walk)' },
            { p: 'Patients needed per arm ≈ 15.7 × SD² ÷ Δ², where Δ (delta) is the true difference you hope to detect and SD (standard deviation) is how much the result varies from patient to patient. Walk-distance changes vary a lot between people; assume, for illustration, an SD of 70 metres:' },
            { ul: [
              'Δ = 40 m (a monotherapy-era effect): about 48 patients per arm',
              'Δ = 30 m: about 85 per arm',
              'Δ = 20 m (a typical add-on effect): about 190 per arm'
            ] },
            { p: 'Halving the effect quadruples the trial. That is the background-therapy squeeze in numbers: as effects shrink, walk-distance trials must grow fast.' },
            { h: 'Event-driven trials (e.g. hazard ratio for death or hospitalisation)' },
            { p: 'Here what matters is the number of <strong>events</strong>, not patients. Events needed (1:1, 80% power) ≈ 31.4 ÷ (ln HR)², where ln is the natural logarithm:' },
            { ul: [
              'HR 0.55 (a big effect): about 90 events',
              'HR 0.70: about 250 events',
              'HR 0.80: about 630 events',
              'HR 0.90: about 2,800 events'
            ] },
            { p: 'If only a small share of patients have an event each year, you need many patients followed for years to collect enough events. That is why HFpEF outcome trials enrol thousands, and why a small biotech usually cannot run one alone.' },
            { q: 'A company’s Phase 3 add-on PAH trial has 120 patients per arm, powered for a 6-minute-walk gain of 35 m. From the benchmark table, recent add-on gains have been about 20 m (TRIUMPH) to 41 m (STELLAR). Is the trial safely powered?', a: 'Only if the drug is near the top of the add-on range. At 35 m and SD 70 m it needs about 63 patients per arm, so 120 gives comfortable power. But if the true effect is 20 m, it needs about 190 per arm, and with 120 per arm the power is only around 60%. The trial is well powered for a strong drug and close to a coin flip for an ordinary one — so the readout is really a test of whether the drug is strong.' },
            { q: 'An outcome trial expects HR 0.80 and an event rate of 10% of patients per year. Roughly how many patient-years of follow-up does it need?', a: 'About 630 events ÷ 0.10 events per patient-year ≈ 6,300 patient-years — for example, about 3,000 patients followed for just over two years. This is why outcome trials are the domain of large companies, and why a small company announcing one usually needs a partner or a large financing.' },
            { callout: 'Smaller expected effects make trials bigger, fast: halve the effect and you need four times the patients (or events). Check the size of the trial against a realistic effect before trusting it.', kind: 'bad' }
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
