/* Industry Atlas.
   TWO layers, deliberately separated so refresh runs stay cheap:
   1) ATLAS_DATA — VOLATILE facts (market size, players, drugs). Every figure carries
      an `asOf` quarter and a `pending` flag. A quarterly refresh loop re-verifies and
      updates ONLY this object + the dates. Prose never changes.
   2) ATLAS — EVERGREEN content: the framework module (Part A) and per-area deep dives,
      using the same block schema as course.js ({p}/{h}/{ul}/{callout}). */

window.ATLAS_DATA = {
  updated: '2026-Q3',
  disclaimer: 'Market sizes, rankings and franchises below are a dated, illustrative snapshot — NOT live data. Each figure is stamped with the year/quarter it reflects and refreshed periodically; treat them as teaching examples, not current numbers.',
  areas: {
    oncology: {
      asOf: '2024-25',
      pending: false,
      /* Verified 2026-Q3: IQVIA Global Oncology Trends 2025; company 10-Ks; Pfizer/Seagen release. */
      marketSize: { value: '≈ $252B', note: '2024 global cancer-medicine spending (IQVIA); ~$441B projected by 2029', asOf: '2024', pending: false },
      /* MOA/modality CLASSES are stable categories — not pending. */
      moaClasses: [
        'Checkpoint inhibitors (anti-PD-1 / PD-L1 / CTLA-4)',
        'Targeted small molecules (kinase inhibitors)',
        'Antibody-drug conjugates (ADCs)',
        'CAR-T &amp; other cell therapies',
        'Bispecific antibodies (e.g. T-cell engagers)',
        'Immunomodulators (IMiDs) &amp; hormonal therapy',
        'Cytotoxic chemotherapy (legacy backbone)'
      ],
      landmarkDrugs: [
        { name: 'Keytruda (pembrolizumab)', moa: 'anti-PD-1 checkpoint inhibitor, Merck — ≈$25B FY2023, top-selling oncology drug', asOf: '2023', pending: false },
        { name: 'Opdivo (nivolumab)', moa: 'anti-PD-1 checkpoint inhibitor, Bristol Myers Squibb', asOf: '2026-Q3', pending: false },
        { name: 'Enhertu (trastuzumab deruxtecan)', moa: 'HER2-directed ADC, AstraZeneca / Daiichi Sankyo', asOf: '2026-Q3', pending: false },
        { name: 'Calquence (acalabrutinib)', moa: 'BTK inhibitor, AstraZeneca — ≈$3.1B FY2024', asOf: '2024', pending: false },
        { name: 'Darzalex (daratumumab)', moa: 'anti-CD38 mAb, multiple myeloma, Johnson &amp; Johnson', asOf: '2026-Q3', pending: false }
      ],
      keyPlayers: [
        { name: 'Merck', franchise: 'Keytruda (anti-PD-1)', asOf: '2026-Q3', pending: false },
        { name: 'AstraZeneca', franchise: 'oncology ≈$20.3B FY2024 — Tagrisso, Calquence, Enhertu (with Daiichi Sankyo)', asOf: '2024', pending: false },
        { name: 'Pfizer', franchise: 'acquired Seagen (Dec 2023, ≈$43B) — ADCs: Padcev, Adcetris, Tivdak, Tukysa', asOf: '2023', pending: false },
        { name: 'Bristol Myers Squibb', franchise: 'Opdivo, CAR-T cell therapy', asOf: '2026-Q3', pending: false },
        { name: 'Johnson &amp; Johnson', franchise: 'Darzalex (myeloma)', asOf: '2026-Q3', pending: false },
        { name: 'Roche / Genentech', franchise: 'broad oncology + ADCs', asOf: '2026-Q3', pending: true }
      ]
    },
    cardiometabolic: {
      asOf: '2024-26Q1',
      pending: false,
      /* Verified: earlier GLP-1 research pass (semaglutide/tirzepatide, Novo/Lilly, Lilly Q1'26). Annual market-size figure still to verify. */
      marketSize: { value: '≈ $70B+ (GLP-1 class)', note: 'semaglutide + tirzepatide ≈$71B cumulative US revenue through 2024; full annual cardiometabolic market larger — to verify', asOf: '2024', pending: true },
      moaClasses: [
        'GLP-1 receptor agonists (incretins)',
        'Dual GLP-1 / GIP agonists (and emerging triple agonists)',
        'SGLT2 inhibitors (diabetes, cardiovascular, renal)',
        'Insulins (foundational diabetes therapy)',
        'DPP-4 inhibitors',
        'Statins &amp; PCSK9 inhibitors (lipids / cardiovascular)'
      ],
      landmarkDrugs: [
        { name: 'Ozempic / Wegovy / Rybelsus (semaglutide)', moa: 'GLP-1 receptor agonist, Novo Nordisk', asOf: '2026-Q1', pending: false },
        { name: 'Mounjaro / Zepbound (tirzepatide)', moa: 'GLP-1/GIP dual agonist, Eli Lilly', asOf: '2026-Q1', pending: false },
        { name: 'Jardiance / Farxiga', moa: 'SGLT2 inhibitors (diabetes / CV / renal)', asOf: '2026-Q1', pending: true },
        { name: 'Repatha / statins', moa: 'PCSK9 inhibitor &amp; lipid-lowering (cardiovascular)', asOf: '2026-Q1', pending: true }
      ],
      keyPlayers: [
        { name: 'Novo Nordisk', franchise: 'semaglutide (Ozempic / Wegovy) — GLP-1 leader', asOf: '2026-Q1', pending: false },
        { name: 'Eli Lilly', franchise: 'tirzepatide — Mounjaro ≈$8.7B / Zepbound ≈$4.2B (Q1 2026); +56% YoY revenue', asOf: '2026-Q1', pending: false },
        { name: 'AstraZeneca / Boehringer', franchise: 'SGLT2 (Farxiga / Jardiance)', asOf: '2026-Q1', pending: true }
      ]
    },
    immunology: {
      asOf: '2024',
      pending: false,
      /* Verified 2026-Q3: AbbVie & J&J & Novartis FY2024 filings/PRs; market ≈$108B (Precedence, medium). Dupixent revenue still to verify. */
      marketSize: { value: '≈ $108B', note: '2024 global immunology market (approx., market-research estimate); a $212B alternative figure was refuted', asOf: '2024', pending: false },
      moaClasses: [
        'Anti-TNF (the original biologic backbone)',
        'IL inhibitors — IL-17, IL-23, IL-12/23, IL-4 / IL-13',
        'JAK inhibitors (oral small molecules)',
        'B-cell / T-cell targeted &amp; integrin inhibitors',
        'Conventional DMARDs &amp; corticosteroids (legacy)'
      ],
      landmarkDrugs: [
        { name: 'Skyrizi (risankizumab)', moa: 'anti-IL-23, AbbVie — ≈$11.7B FY2024 (+51%), a Humira successor', asOf: '2024', pending: false },
        { name: 'Stelara (ustekinumab)', moa: 'anti-IL-12/23, Johnson &amp; Johnson — ≈$10.4B FY2024, declining on biosimilars', asOf: '2024', pending: false },
        { name: 'Humira (adalimumab)', moa: 'anti-TNF, AbbVie — ≈$9.0B FY2024, down from ~$21B peak after 2023 biosimilars', asOf: '2024', pending: false },
        { name: 'Rinvoq (upadacitinib)', moa: 'oral JAK inhibitor, AbbVie — ≈$6.0B FY2024 (+50%)', asOf: '2024', pending: false },
        { name: 'Dupixent (dupilumab)', moa: 'anti-IL-4 / IL-13, Sanofi / Regeneron', asOf: '2026-Q1', pending: true }
      ],
      keyPlayers: [
        { name: 'AbbVie', franchise: 'Humira → Skyrizi ($11.7B) + Rinvoq ($6.0B) = ≈$17.7B combined FY2024; 2027 outlook >$31B', asOf: '2024', pending: false },
        { name: 'Johnson &amp; Johnson', franchise: 'Immunology ≈$17.8B FY2024 — Stelara, Tremfya', asOf: '2024', pending: false },
        { name: 'Novartis', franchise: 'Cosentyx (IL-17A) ≈$6.1B FY2024', asOf: '2024', pending: false },
        { name: 'Sanofi / Regeneron', franchise: 'Dupixent', asOf: '2026-Q1', pending: true },
        { name: 'Amgen', franchise: 'Enbrel + biosimilars', asOf: '2026-Q1', pending: true }
      ]
    },
    neuroscience: {
      asOf: '2024-25',
      pending: false,
      /* Verified 2026-Q3: Novartis/Biogen/Eisai FY2024-25 filings; BMS-Karuna deal; BIO success-rate data. */
      marketSize: { value: '≈ $127B', note: '2025 global CNS treatment market (approx.; research estimates $126–139B, highly fragmented)', asOf: '2025', pending: false },
      moaClasses: [
        'Anti-CD20 &amp; immunomodulators (multiple sclerosis)',
        'Anti-amyloid antibodies (Alzheimer\'s — disease-modifying)',
        'CGRP antagonists (migraine)',
        'Monoaminergic &amp; muscarinic agents (psychiatry)',
        'Antisense &amp; gene therapy (SMA and other genetic CNS disease)',
        'Ion-channel modulators (epilepsy)'
      ],
      landmarkDrugs: [
        { name: 'Kesimpta (ofatumumab)', moa: 'anti-CD20, multiple sclerosis, Novartis — ≈$3.2B FY2024 (+49%)', asOf: '2024', pending: false },
        { name: 'Ocrevus (ocrelizumab)', moa: 'anti-CD20, multiple sclerosis, Roche', asOf: '2026-Q1', pending: true },
        { name: 'Leqembi (lecanemab)', moa: 'anti-amyloid antibody, Alzheimer\'s, Eisai / Biogen — early ramp (~$0.6B global FY2025)', asOf: '2025', pending: false },
        { name: 'Cobenfy (xanomeline-trospium / KarXT)', moa: 'muscarinic agonist, schizophrenia — first new mechanism in decades; BMS via $14B Karuna deal (2023)', asOf: '2024', pending: false },
        { name: 'Zolgensma / Spinraza', moa: 'SMA — gene therapy (Zolgensma ≈$1.2B FY2024, Novartis) / antisense (Spinraza ≈$1.5B, Biogen)', asOf: '2024', pending: false }
      ],
      keyPlayers: [
        { name: 'Biogen', franchise: 'MS franchise ≈$4.3B (declining), Spinraza ≈$1.5B, Leqembi (with Eisai)', asOf: '2024', pending: false },
        { name: 'Novartis', franchise: 'Kesimpta ≈$3.2B (MS) + Zolgensma ≈$1.2B (SMA)', asOf: '2024', pending: false },
        { name: 'Bristol Myers Squibb', franchise: 'Cobenfy (schizophrenia) — acquired Karuna for $14B (2023)', asOf: '2024', pending: false },
        { name: 'Roche', franchise: 'Ocrevus (MS)', asOf: '2026-Q1', pending: true },
        { name: 'AbbVie', franchise: 'migraine (Ubrelvy / Qulipta), Vraylar, Botox', asOf: '2026-Q1', pending: true }
      ]
    },
    rare: {
      asOf: '2024', pending: false,
      /* Verified FY2024: BioMarin & Sanofi filings; Vertex CF from earlier pass. Market size + Alexion/Ultragenyx still to verify. */
      marketSize: { value: '≈ $200B+', note: 'orphan-drug market — high prices, small populations; annual figure to verify', asOf: '2024', pending: true },
      moaClasses: [
        'Enzyme replacement therapy (ERT)',
        'Gene therapy (AAV)',
        'Antisense &amp; RNAi',
        'Mutation-specific small molecules',
        'Complement inhibitors'
      ],
      landmarkDrugs: [
        { name: 'Trikafta (CFTR modulator)', moa: 'cystic fibrosis, Vertex — the ≈$11B CF franchise', asOf: '2024', pending: false },
        { name: 'Voxzogo (vosoritide)', moa: 'achondroplasia, BioMarin — ≈$735M FY2024 (+56%)', asOf: '2024', pending: false },
        { name: 'Fabrazyme / Nexviazyme', moa: 'enzyme replacement (Fabry / Pompe), Sanofi Genzyme — ≈€1.0B / €0.67B FY2024', asOf: '2024', pending: false },
        { name: 'Roctavian', moa: 'hemophilia A gene therapy, BioMarin — only ≈$26M FY2024, later withdrawn (slow-uptake case)', asOf: '2024', pending: false },
        { name: 'Soliris / Ultomiris', moa: 'complement (C5) inhibitors, Alexion / AstraZeneca', asOf: '2026-Q1', pending: true }
      ],
      keyPlayers: [
        { name: 'Vertex', franchise: 'cystic fibrosis (≈$11B franchise)', asOf: '2024', pending: false },
        { name: 'BioMarin', franchise: 'rare disease ≈$2.85B FY2024 (Voxzogo $735M)', asOf: '2024', pending: false },
        { name: 'Sanofi (Genzyme)', franchise: 'lysosomal-storage ERTs (Fabrazyme, Nexviazyme)', asOf: '2024', pending: false },
        { name: 'Alexion (AstraZeneca)', franchise: 'complement — Soliris / Ultomiris', asOf: '2026-Q1', pending: true },
        { name: 'Ultragenyx', franchise: 'ultra-rare metabolic', asOf: '2026-Q1', pending: true }
      ]
    },
    infectious: {
      asOf: '2024', pending: false,
      /* Verified FY2024: Gilead, Merck, Pfizer, Moderna filings; Sovaldi pricing from Senate report. Market size + GSK/Sanofi vaccines still to verify. */
      marketSize: { value: '≈ $100B+', note: 'anti-infectives + vaccines (excl. pandemic spikes); annual figure to verify', asOf: '2024', pending: true },
      moaClasses: [
        'Antivirals (HIV, hepatitis)',
        'Vaccines — mRNA / protein / viral vector',
        'Antibiotics &amp; antifungals',
        'Long-acting injectables',
        'Monoclonal antibodies (RSV and others)'
      ],
      landmarkDrugs: [
        { name: 'Biktarvy', moa: 'HIV single-tablet regimen, Gilead — ≈$13.4B FY2024 (+13%)', asOf: '2024', pending: false },
        { name: 'Gardasil / Gardasil 9', moa: 'HPV vaccine, Merck — ≈$8.6B FY2024 (sharp 2025 decline expected, China)', asOf: '2024', pending: false },
        { name: 'Comirnaty / Spikevax', moa: 'mRNA COVID vaccines — Comirnaty ≈$5.35B (−52%) / Spikevax ≈$3.1B FY2024 (the post-pandemic collapse)', asOf: '2024', pending: false },
        { name: 'Sovaldi / Harvoni', moa: 'hepatitis C cure, Gilead — launched at $84,000/course: the "cure paradox"', asOf: '2015', pending: false }
      ],
      keyPlayers: [
        { name: 'Gilead', franchise: 'HIV ≈$19.6B (Biktarvy $13.4B); the HCV cure', asOf: '2024', pending: false },
        { name: 'Merck', franchise: 'Gardasil ≈$8.6B, antivirals', asOf: '2024', pending: false },
        { name: 'Pfizer / BioNTech', franchise: 'Comirnaty $5.35B (−52% YoY)', asOf: '2024', pending: false },
        { name: 'Moderna', franchise: 'Spikevax $3.1B; total revenue fell from $6.8B to $3.2B', asOf: '2024', pending: false },
        { name: 'GSK / Sanofi', franchise: 'vaccines (Shingrix, flu, RSV)', asOf: '2026-Q1', pending: true }
      ]
    },
    respiratory: {
      asOf: '2024', pending: false,
      /* Verified FY2024: GSK, AstraZeneca, Sanofi filings. Market size + IPF antifibrotics still to verify. */
      marketSize: { value: '≈ $60B+', note: 'asthma / COPD + fibrosis; device-driven; annual figure to verify', asOf: '2024', pending: true },
      moaClasses: [
        'Inhaled corticosteroids &amp; bronchodilators (device-based)',
        'Biologics — anti-IL-5, anti-IgE, anti-TSLP',
        'Anti-IL-4 / IL-13 (type-2 inflammation)',
        'Antifibrotics (idiopathic pulmonary fibrosis)',
        'Pulmonary vasodilators (pulmonary hypertension)'
      ],
      landmarkDrugs: [
        { name: 'Trelegy Ellipta', moa: 'triple inhaler (COPD / asthma), GSK — ≈£2.7B FY2024 (+23%)', asOf: '2024', pending: false },
        { name: 'Dupixent', moa: 'anti-IL-4 / IL-13, Sanofi / Regeneron — ≈€13.1B FY2024; first biologic for COPD (Sept 2024)', asOf: '2024', pending: false },
        { name: 'Fasenra / Nucala', moa: 'anti-IL-5 (severe eosinophilic asthma), AstraZeneca / GSK — ≈$1.69B / £1.78B FY2024', asOf: '2024', pending: false },
        { name: 'Ofev / Esbriet', moa: 'antifibrotics (IPF), Boehringer / Roche', asOf: '2026-Q1', pending: true }
      ],
      keyPlayers: [
        { name: 'GSK', franchise: 'Trelegy ≈£2.7B, Nucala ≈£1.78B', asOf: '2024', pending: false },
        { name: 'AstraZeneca', franchise: 'Symbicort ≈$2.9B, Fasenra ≈$1.7B, Breztri ≈$1.0B, Tezspire', asOf: '2024', pending: false },
        { name: 'Sanofi / Regeneron', franchise: 'Dupixent ≈€13.1B (asthma + first COPD biologic)', asOf: '2024', pending: false },
        { name: 'Boehringer Ingelheim', franchise: 'Spiriva, Ofev (IPF)', asOf: '2026-Q1', pending: true },
        { name: 'Roche', franchise: 'Esbriet (IPF)', asOf: '2026-Q1', pending: true }
      ]
    },
    hematology: {
      asOf: '2024', pending: false,
      /* Verified FY2024: Sanofi Altuviiio & BioMarin Roctavian. Hemlibra/Casgevy revenue + market size still to verify. */
      marketSize: { value: '≈ $40B+', note: 'benign blood disorders (hemophilia, sickle cell, thalassemia...); annual figure to verify', asOf: '2024', pending: true },
      moaClasses: [
        'Clotting-factor replacement',
        'Factor-mimetic bispecific antibodies',
        'Gene therapy (AAV / CRISPR)',
        'RNAi',
        'Complement &amp; other targeted agents'
      ],
      landmarkDrugs: [
        { name: 'Altuviiio (efanesoctocog alfa)', moa: 'long-acting factor VIII, Sanofi — ≈€682M FY2024, rapidly displacing older factors', asOf: '2024', pending: false },
        { name: 'Roctavian', moa: 'hemophilia A gene therapy, BioMarin — only ≈$26M FY2024, later withdrawn (one-time-cure friction)', asOf: '2024', pending: false },
        { name: 'Hemlibra (emicizumab)', moa: 'factor-mimetic bispecific (hemophilia A), Roche', asOf: '2026-Q1', pending: true },
        { name: 'Casgevy (exa-cel)', moa: 'CRISPR gene editing (sickle cell / thalassemia), Vertex / CRISPR Therapeutics', asOf: '2026-Q1', pending: true }
      ],
      keyPlayers: [
        { name: 'Roche', franchise: 'Hemlibra', asOf: '2026-Q1', pending: true },
        { name: 'Vertex / CRISPR Therapeutics', franchise: 'Casgevy — first CRISPR medicine', asOf: '2026-Q1', pending: true },
        { name: 'Sanofi', franchise: 'hemophilia — Altuviiio ≈€682M (displacing Eloctate)', asOf: '2024', pending: false },
        { name: 'BioMarin', franchise: 'Roctavian gene therapy ($26M, later withdrawn)', asOf: '2024', pending: false },
        { name: 'Novo Nordisk', franchise: 'hemophilia (factor products)', asOf: '2026-Q1', pending: true }
      ]
    },
    ophthalmology: {
      asOf: '2024-25', pending: false,
      /* Verified 2026-Q3: Regeneron/Bayer/Roche filings + trade press; market $42B (Polaris, medium). Lucentis revenue to verify. */
      marketSize: { value: '≈ $42B', note: '2025 global ophthalmic drug market (approx., retina-led; vendor range $38–46B)', asOf: '2025', pending: false },
      moaClasses: [
        'Anti-VEGF (and anti-VEGF / Ang-2 bispecific) — retinal disease',
        'Complement inhibitors — geographic atrophy',
        'Gene therapy — inherited retinal disease',
        'Prostaglandin analogs &amp; pressure-lowering (glaucoma)',
        'Anti-inflammatory / immunomodulators (dry eye)'
      ],
      landmarkDrugs: [
        { name: 'Eylea / Eylea HD (aflibercept)', moa: 'anti-VEGF (wet AMD, DME), Regeneron / Bayer — ≈$9.5B worldwide FY2024, the largest eye drug; Eylea HD (8mg) defends via longer dosing intervals', asOf: '2024', pending: false },
        { name: 'Vabysmo (faricimab)', moa: 'anti-VEGF / Ang-2 bispecific, Roche — ≈$4.3B FY2024, the fastest-growing anti-VEGF', asOf: '2024', pending: false },
        { name: 'Syfovre / Izervay', moa: 'complement inhibitors, geographic atrophy — the first-ever treatments (Syfovre ≈$612M FY2024, Apellis; Izervay, Astellas)', asOf: '2024', pending: false },
        { name: 'Luxturna (voretigene)', moa: 'gene therapy, inherited retinal disease, Roche / Spark — first FDA gene therapy for a genetic disease (2017)', asOf: '2024', pending: false },
        { name: 'Lucentis (ranibizumab)', moa: 'anti-VEGF (now facing biosimilars), Roche / Novartis', asOf: '2026-Q1', pending: true }
      ],
      keyPlayers: [
        { name: 'Regeneron', franchise: 'Eylea / Eylea HD ≈$9.5B (anti-VEGF leader)', asOf: '2024', pending: false },
        { name: 'Roche / Genentech', franchise: 'Vabysmo ≈$4.3B, Lucentis, Susvimo', asOf: '2024', pending: false },
        { name: 'Apellis', franchise: 'Syfovre ≈$612M (geographic atrophy)', asOf: '2024', pending: false },
        { name: 'Astellas (Iveric Bio)', franchise: 'Izervay (GA) — acquired Iveric for $5.9B (2023)', asOf: '2024', pending: false },
        { name: 'AbbVie (Allergan)', franchise: 'dry eye &amp; glaucoma — acquired Allergan for $63B (2020)', asOf: '2024', pending: false }
      ]
    },
    mash: {
      asOf: '2024-25', pending: false,
      /* Verified: Madrigal filings (Rezdiffra); Novo/Lilly MASH trials. Future-market projection unverified. */
      marketSize: { value: '≈ $1B now', note: 'current approved-MASH sales ≈ Rezdiffra alone ($958M FY2025); large FUTURE potential — projections unverified', asOf: '2025', pending: false },
      moaClasses: [
        'Thyroid hormone receptor-β (THR-β) agonists',
        'GLP-1 / incretins (from cardiometabolic)',
        'FGF21 analogs',
        'Pan-PPAR agonists',
        '(historically) FXR agonists — largely failed'
      ],
      landmarkDrugs: [
        { name: 'Rezdiffra (resmetirom)', moa: 'THR-β agonist, Madrigal — the first FDA-approved MASH drug (Mar 2024); ≈$958M FY2025 (first full year)', asOf: '2025', pending: false },
        { name: 'Semaglutide (Wegovy)', moa: 'GLP-1, Novo Nordisk — won an FDA MASH label (ESSENCE Phase 3); incretins expanding in', asOf: '2025', pending: false },
        { name: 'Obeticholic acid (Ocaliva)', moa: 'FXR agonist, Intercept — rejected for MASH (a notable failure)', asOf: '2024', pending: false }
      ],
      keyPlayers: [
        { name: 'Madrigal', franchise: 'Rezdiffra ≈$958M FY2025 — the first MASH drug', asOf: '2025', pending: false },
        { name: 'Novo Nordisk', franchise: 'semaglutide — FDA MASH label', asOf: '2025', pending: false },
        { name: 'Eli Lilly', franchise: 'tirzepatide (SYNERGY-NASH Phase 2)', asOf: '2024', pending: false },
        { name: 'Akero / 89bio', franchise: 'FGF21 analogs (clinical-stage)', asOf: '2026-Q1', pending: true }
      ]
    },
    nephrology: {
      asOf: '2024-25', pending: false,
      /* Verified: AstraZeneca Farxiga $7.66B FY2024; Travere Filspari FY2025. Market size + several drugs still to verify. */
      marketSize: { value: '≈ $20B+', note: 'CKD + IgA nephropathy + ADPKD + renal anemia — fragmented; annual figure to verify', asOf: '2024', pending: true },
      moaClasses: [
        'SGLT2 inhibitors (cardiorenal protection)',
        'Non-steroidal mineralocorticoid-receptor antagonists (finerenone)',
        'Endothelin antagonists (IgA nephropathy)',
        'Complement inhibitors (IgA nephropathy)',
        'HIF-PH inhibitors (renal anemia)',
        'Vasopressin antagonists (ADPKD)'
      ],
      landmarkDrugs: [
        { name: 'Farxiga (dapagliflozin)', moa: 'SGLT2 inhibitor — cardiorenal / CKD, AstraZeneca — ≈$7.66B FY2024 (AZ\'s largest product)', asOf: '2024', pending: false },
        { name: 'Filspari (sparsentan)', moa: 'endothelin / angiotensin blocker, IgA nephropathy, Travere — ≈$410M FY2025 (+144%)', asOf: '2025', pending: false },
        { name: 'Jardiance (empagliflozin)', moa: 'SGLT2 inhibitor — cardiorenal / CKD, Boehringer / Lilly', asOf: '2026-Q1', pending: true },
        { name: 'Kerendia (finerenone)', moa: 'non-steroidal MRA, diabetic kidney disease, Bayer', asOf: '2026-Q1', pending: true },
        { name: 'Fabhalta / Tarpeyo', moa: 'IgA nephropathy — complement (Novartis) / gut-targeted budesonide (Calliditas, full approval Dec 2023)', asOf: '2026-Q1', pending: true }
      ],
      keyPlayers: [
        { name: 'AstraZeneca', franchise: 'Farxiga ≈$7.66B FY2024 (SGLT2 / cardiorenal leader)', asOf: '2024', pending: false },
        { name: 'Travere', franchise: 'Filspari ≈$410M FY2025 (IgA nephropathy)', asOf: '2025', pending: false },
        { name: 'Bayer', franchise: 'Kerendia (finerenone)', asOf: '2026-Q1', pending: true },
        { name: 'Novartis', franchise: 'Fabhalta (IgA nephropathy)', asOf: '2026-Q1', pending: true },
        { name: 'Boehringer / Lilly', franchise: 'Jardiance', asOf: '2026-Q1', pending: true }
      ]
    },
    aesthetics: {
      asOf: 'FY2024', pending: false,
      marketSize: { value: '≈ $18B', note: 'global medical aesthetics (injectables + energy devices), 2024 — analyst estimate (DataM Intelligence), NOT a filing figure; treat as approximate. Cash-pay &amp; discretionary', asOf: '2024', pending: true },
      moaClasses: [
        'Botulinum toxin (neurotoxin) injectables',
        'Hyaluronic-acid dermal fillers',
        'Collagen stimulators / biostimulators (e.g. poly-L-lactic acid)',
        'Energy-based devices (body contouring, skin tightening)',
        'Topical &amp; regenerative skincare'
      ],
      landmarkDrugs: [
        { name: 'Botox Cosmetic (onabotulinumtoxinA)', moa: 'the category-defining aesthetic neurotoxin, AbbVie / Allergan — FY2024 net sales ≈ $2.72B (its separate Botox Therapeutic line, for migraine / spasticity, is larger at ≈ $3.28B)', asOf: 'FY2024', pending: false },
        { name: 'Juvederm Collection', moa: 'hyaluronic-acid dermal fillers, AbbVie / Allergan — FY2024 net sales ≈ $1.18B (down ~15% on softer consumer demand &amp; destocking)', asOf: 'FY2024', pending: false },
        { name: 'Dysport / Restylane', moa: 'neurotoxin / HA filler, Galderma Injectable Aesthetics (double-digit growth)', asOf: 'FY2024', pending: false },
        { name: 'Daxxify (daxibotulinumtoxinA)', moa: 'longer-acting neurotoxin challenger, Revance (acquired by Crown Laboratories, deal announced Aug 2024)', asOf: '2024', pending: false }
      ],
      keyPlayers: [
        { name: 'AbbVie (Allergan Aesthetics)', franchise: 'market leader — Botox Cosmetic, Juvederm, CoolSculpting; Aesthetics segment FY2024 net revenues ≈ $5.18B (down 2.2%)', asOf: 'FY2024', pending: false },
        { name: 'Galderma', franchise: 'Dysport, Restylane, Sculptra; FY2024 net sales ≈ $4.41B; IPO on SIX Swiss Exchange Mar 2024 (GALD)', asOf: 'FY2024', pending: false },
        { name: 'Merz Aesthetics', franchise: 'Xeomin, Belotero, Ultherapy — privately held (revenue not disclosed)', asOf: '2024', pending: true },
        { name: 'Evolus', franchise: 'Jeuveau ("newtox"); FY2024 net revenue ≈ $266M (+32%)', asOf: 'FY2024', pending: false },
        { name: 'Revance', franchise: 'Daxxify + RHA fillers; acquired by Crown Laboratories (announced Aug 2024)', asOf: '2024', pending: false }
      ]
    },
    pain: {
      asOf: '2024-25', pending: false,
      marketSize: { value: 'small &amp; branded', note: 'no reliable market-size figure survived verification — treat as illustrative. The key point IS verified: the broad pain market is dominated by cheap generics, so the branded non-opioid slice is modest — the leading specialist (Pacira) had ≈$701M total revenue in FY2024, not tens of billions', asOf: '2024', pending: true },
      moaClasses: [
        'Peripheral sodium-channel blockers (Nav1.8 / Nav1.7)',
        'NSAIDs &amp; COX-2 inhibitors (mostly generic)',
        'Gabapentinoids (pregabalin, gabapentin — off-patent)',
        'SNRIs for chronic / neuropathic pain (e.g. duloxetine)',
        'Local &amp; long-acting anesthetics (e.g. bupivacaine) and topicals (lidocaine, capsaicin)'
      ],
      landmarkDrugs: [
        { name: 'Journavx (suzetrigine, VX-548)', moa: 'first-in-class Nav1.8 inhibitor for acute pain — non-opioid, not DEA-scheduled; Vertex; FDA-approved 30 Jan 2025 (first new pain class in 20+ years). Early launch: ≈$33M net sales in the first 9 months of 2025', asOf: '2025', pending: false },
        { name: 'Exparel (liposomal bupivacaine)', moa: 'long-acting local anesthetic for post-surgical pain, Pacira — ≈$549M net product sales FY2024', asOf: 'FY2024', pending: false },
        { name: 'Lyrica (pregabalin)', moa: 'gabapentinoid for neuropathic pain — former mega-blockbuster, now off-patent/generic (historic peak sales not verified here)', asOf: '2025', pending: true },
        { name: 'Tanezumab (NGF antibody)', moa: 'anti-NGF for osteoarthritis — discontinued after an FDA advisory committee voted 19-1 against its risk/benefit (Mar 2021), Pfizer / Lilly', asOf: '2021', pending: false }
      ],
      keyPlayers: [
        { name: 'Vertex Pharmaceuticals', franchise: 'Journavx (suzetrigine) — the non-opioid acute-pain breakthrough; deep Nav pipeline (Phase 3 in diabetic peripheral neuropathy ongoing)', asOf: '2025', pending: false },
        { name: 'Pacira BioSciences', franchise: 'Exparel ≈$549M + Zilretta ≈$118M; total revenue ≈$701M FY2024 — the non-opioid pain specialist', asOf: 'FY2024', pending: false },
        { name: 'Pfizer / Eli Lilly', franchise: 'historic NGF (tanezumab) — discontinued 2021; Lilly re-entered the Nav1.8 space via SiteOne acquisition (up to $1.0B, May 2025)', asOf: '2025', pending: false },
        { name: 'Heron Therapeutics', franchise: 'Zynrelef (non-opioid post-operative analgesia) — ≈$25.5M net revenue FY2024 (+44%)', asOf: 'FY2024', pending: false }
      ]
    },
    womens: {
      asOf: '2024-25', pending: false,
      marketSize: { value: 'hard to size', note: 'no reliable global figure survived verification — highly definition-dependent (contraception, menopause, endometriosis/fibroids, fertility, maternal health). For scale, the leading pure-play (Organon) had a women\'s-health franchise of ≈$1.78B in FY2024', asOf: '2024', pending: true },
      moaClasses: [
        'GnRH antagonists (endometriosis &amp; uterine fibroids)',
        'NK3-receptor antagonists (non-hormonal menopause / hot flashes)',
        'Hormonal therapies (contraception &amp; menopausal hormone therapy)',
        'Neuroactive steroids (postpartum depression)',
        'Fertility hormones (IVF / assisted reproduction)'
      ],
      landmarkDrugs: [
        { name: 'Veozah (fezolinetant)', moa: 'first-in-class non-hormonal NK3-receptor antagonist for menopausal hot flashes; Astellas; FDA-approved May 2023; ≈$230M global sales FY2024. Bayer\'s Lynkuet (elinzanetant), the first dual NK1/NK3 antagonist, followed in Oct 2025', asOf: 'FY2024', pending: false },
        { name: 'Orilissa / Myfembree', moa: 'GnRH antagonists for endometriosis &amp; fibroids — elagolix (AbbVie; revenue folded into "all other"), relugolix combo (Myfembree, Sumitomo — via its ≈$1.7B Myovant buy, Mar 2023)', asOf: '2024', pending: false },
        { name: 'Nexplanon', moa: 'long-acting contraceptive implant — Organon\'s cornerstone franchise; record ≈$963M FY2024 sales', asOf: 'FY2024', pending: false },
        { name: 'Makena (17-OHPC)', moa: 'preterm-birth drug WITHDRAWN 2023 (incl. all generics) after the confirmatory PROLONG trial showed no benefit — a cautionary case', asOf: '2023', pending: false }
      ],
      keyPlayers: [
        { name: 'Organon', franchise: 'women\'s-health-focused Merck spin-off (2021); FY2024 revenue ≈$6.4B, women\'s-health franchise ≈$1.78B (Nexplanon ≈$963M). Agreed to be acquired by Sun Pharma (≈$11.75B EV) Apr 2026', asOf: '2026', pending: false },
        { name: 'AbbVie', franchise: 'Orilissa / Oriahnn (elagolix) for endometriosis &amp; fibroids (revenue not separately disclosed)', asOf: '2024', pending: false },
        { name: 'Astellas', franchise: 'Veozah (fezolinetant) — non-hormonal menopause; ≈$230M FY2024', asOf: 'FY2024', pending: false },
        { name: 'Sumitomo (Myovant)', franchise: 'Myfembree / Orgovyx (relugolix); acquired Myovant for ≈$1.7B (Mar 2023)', asOf: '2024', pending: false },
        { name: 'Bayer / Ferring', franchise: 'Bayer\'s Lynkuet (elinzanetant) non-hormonal menopause, approved Oct 2025; contraception (Bayer); fertility (Ferring)', asOf: '2025', pending: false }
      ]
    }
  }
};

window.ATLAS = {
  framework: {
    intro: 'A repeatable lens for reading any therapeutic area — the diseases, the market, the mechanisms, the drugs, the players. Learn the six questions once and you can map an area this Atlas never covers.',
    lessons: [
      {
        id: 'fw1',
        title: 'How the industry is wired',
        body: [
          { p: 'Before any single company, learn the shape of the industry it lives in. A drug travels a long value chain, and money and risk sit very differently at each stage:' },
          { ul: [
            'Discovery &amp; preclinical — cheap, high-attrition science',
            'Clinical development (Phase 1-3) — where most cash and most risk concentrate',
            'Regulatory review — the binary gate (approval, or a CRL)',
            'Manufacturing (CMC) — quality at scale; a real, underrated failure point',
            'Commercialization — sales, pricing, and the fight for formulary access'
          ] },
          { h: 'The segments' },
          { ul: [
            'Big pharma — integrated, profitable, sells and acquires',
            'Biotech — innovation engines, often pre-revenue and binary',
            'Generics &amp; biosimilars — the post-patent-cliff scavengers',
            'CROs / CDMOs — services and manufacturing (picks and shovels)',
            'Payers, PBMs &amp; governments — who actually pay, and set the price'
          ] },
          { callout: 'The patient almost never pays the sticker price. To understand pricing power, follow the money to the payers and pharmacy-benefit managers — they decide what a drug is really worth.', kind: '' }
        ]
      },
      {
        id: 'fw2',
        title: 'Sizing a market from first principles',
        body: [
          { p: 'Never memorize a market size — build one. A headline "$50B market" tells you nothing about the drug in front of you. Peak revenue is a chain of assumptions, and each link is a place a thesis can be wrong:' },
          { p: 'Peak sales ≈ eligible patients × diagnosis rate × treatment (penetration) rate × net price × treatment duration.' },
          { ul: [
            'Eligible patients — prevalence/incidence in the specific indication and line of therapy',
            'Diagnosis &amp; treatment rates — how many are actually found and treated',
            'Net price — after rebates to payers/PBMs, not the list price',
            'Duration &amp; competition — how long patients stay on, and who splits the market'
          ] },
          { callout: 'This chain is the front end of your rNPV. A defensible peak-sales number comes from building it up — not from quoting a total-addressable-market slide.', kind: 'warn' }
        ]
      },
      {
        id: 'fw3',
        title: 'MOA &amp; modality as a competitive lens',
        body: [
          { p: 'Two properties of a drug decide its durability, its margins, and who can copy it: the mechanism of action (what it does) and the modality (what kind of molecule it is).' },
          { ul: [
            'Validated vs novel target — a proven target is lower-risk but more crowded',
            'Small molecule — cheap, often oral, but faces fast generic erosion at the cliff',
            'Biologic (mAb, etc.) — harder to copy; biosimilar erosion is slower',
            'Cell &amp; gene therapy — potentially one-time cures, but complex, costly, and durability-uncertain',
            'First-in-class opens a market; best-in-class often takes it'
          ] },
          { callout: 'Ask of any drug: who else can build this, and how fast? Modality is either a moat or a liability — it tells you how defensible the revenue really is.', kind: '' }
        ]
      },
      {
        id: 'fw4',
        title: 'Reading a competitive set',
        body: [
          { p: 'No drug exists alone. It competes against the current standard of care and against everything in the pipeline behind it. Map that set before you value anything.' },
          { ul: [
            'Standard of care today — what does this actually displace?',
            'First-in-class vs fast-followers and best-in-class contenders',
            'Lifecycle — launch, ramp, peak, then the patent cliff',
            'The cliff itself — a known, datable end to exclusivity'
          ] },
          { callout: 'A great drug into a crowded class is a completely different bet from the same drug into white space. The competitive set, not the biology alone, sets the ceiling.', kind: 'warn' }
        ]
      },
      {
        id: 'fw5',
        title: 'The six-question template',
        body: [
          { p: 'Every area page in this Atlas answers the same six questions, in the same order. Internalize them and you can read a therapeutic area cold:' },
          { ul: [
            '1. The diseases &amp; who gets them (epidemiology, unmet need)',
            '2. Market size — a dated snapshot, built with the method above',
            '3. Dominant MOAs &amp; modalities',
            '4. Landmark drugs — the ones that defined the field',
            '5. Key players &amp; their franchises',
            '6. The investing angle — where is the moat, the cliff, the white space'
          ] },
          { callout: 'The framework is evergreen; the figures are a dated snapshot. In this Atlas, every market size and player ranking carries an "as of" quarter and is refreshed periodically — read them as illustration, never as live data.', kind: '' }
        ]
      }
    ]
  },
  areas: [
    {
      id: 'oncology',
      title: 'Oncology',
      tier: 1,
      dataKey: 'oncology',
      blurb: 'The largest and most complex area — big enough to be its own industry.',
      lessons: [
        {
          id: 'onc1',
          title: 'Oncology — the shape of the battlefield',
          body: [
            { p: 'Oncology is the biggest therapeutic area and, for investors, almost a sector unto itself: the deepest pipelines, the most approvals, premium pricing — and, notably, below-average clinical success rates because cancer is hard.' },
            { h: 'How to slice it' },
            { ul: [
              'By tumor type — solid tumors (lung, breast, GI, GU...) vs hematologic (leukemia, lymphoma, myeloma)',
              'By line of therapy — first-line vs relapsed/refractory (later lines are smaller, tougher markets)',
              'By mechanism — the MOA classes in the panel above: checkpoint inhibitors, targeted kinase inhibitors, ADCs, cell therapy, bispecifics, and the chemo/hormonal backbone'
            ] },
            { callout: 'Oncology is where "validated target + biomarker" pays off at industrial scale — the precision-oncology idea from the science module. The deep-dive lessons below take each sub-battlefield in turn, and the at-a-glance panel above is refreshed each quarter.', kind: '' }
          ]
        },
        {
          id: 'onc2',
          title: 'Immuno-oncology — releasing the brakes',
          body: [
            { p: 'Immuno-oncology (IO) is the mechanism that reshaped cancer treatment and created some of the industry\'s largest franchises. The idea: tumours hide from the immune system by flipping an "off" switch on T cells. Checkpoint inhibitors block that switch and let the immune system attack the cancer.' },
            { h: 'The checkpoints' },
            { ul: [
              'PD-1 (on the T cell) and PD-L1 (on the tumour) — the dominant axis; the anti-PD-1 antibodies are the blockbusters',
              'CTLA-4 — an earlier, separate brake; often combined with anti-PD-1 for deeper responses at the cost of more toxicity'
            ] },
            { h: 'Why it became a franchise war' },
            { p: 'The science was first-in-class, but the market was won on execution. The leading anti-PD-1 (see the panel) pulled ahead by running an enormous trial programme across dozens of tumour types and lines of therapy, and by pairing the drug with chemotherapy — turning one molecule into dozens of approved uses. A rival anti-PD-1 with similar biology captured far less, because it moved slower on labels and combinations.' },
            { h: 'Biomarkers &amp; combinations' },
            { ul: [
              'PD-L1 expression, tumour mutational burden (TMB), and MSI-high status help predict who responds — precision meeting immunotherapy',
              'IO + chemo, IO + IO, and IO + targeted agents are the standard way to expand into new indications'
            ] },
            { callout: 'The moat in IO is not the molecule — many me-too PD-1 antibodies exist. It is the breadth of the label and the trial data behind it. First-in-class opened the market; relentless best-in-class execution took it.', kind: '' }
          ]
        },
        {
          id: 'onc3',
          title: 'Targeted therapy — precision oncology',
          body: [
            { p: 'Where immuno-oncology unleashes the immune system broadly, targeted therapy does the opposite: it attacks one specific molecular driver the tumour depends on. This is precision oncology — match the drug to the mutation, and treat only the patients whose cancer carries it.' },
            { h: 'The playbook' },
            { ul: [
              'Find a driver mutation the cancer is "addicted" to — EGFR, ALK, ROS1, BRAF, HER2, KRAS and others',
              'Block it, usually with a small-molecule kinase inhibitor (an oral pill)',
              'Use a companion biomarker test to select the patients who will actually respond'
            ] },
            { p: 'Because the biomarker enriches the trial for likely responders, these studies are smaller, faster, and carry a higher probability of success than untargeted trials — the base-rate advantage the science module described, in practice. EGFR-mutant lung cancer, ALK-positive lung cancer, BRAF-mutant melanoma and HER2-positive breast cancer are all examples where a driver-matched drug became a franchise.' },
            { h: 'Resistance &amp; the next-gen cycle' },
            { p: 'Tumours evolve. They acquire new mutations that escape the drug, so the field answers with next-generation inhibitors aimed at the resistance mutation of the last generation. That creates durable, renewable franchises — but also a treadmill where standing still means losing to the next molecule.' },
            { callout: 'Precision oncology is where "validated target + biomarker" pays off: enriched trials mean better odds and faster approvals. The catch — these are small molecules, so they face resistance AND the patent cliff. The moat is the franchise of successive generations, not any single pill.', kind: 'warn' }
          ]
        },
        {
          id: 'onc4',
          title: 'Antibody-drug conjugates — guided missiles',
          body: [
            { p: 'Antibody-drug conjugates (ADCs) are the modality that re-rated oncology in the last decade. The idea is elegant: bolt a potent cytotoxic "payload" onto an antibody that homes in on a tumour marker. The antibody is the guidance system; the chemo is the warhead. You get chemotherapy delivered largely to the cancer instead of the whole body.' },
            { h: 'The three parts (and where it gets hard)' },
            { ul: [
              'Antibody — targets a tumour antigen (e.g. HER2)',
              'Linker — holds the payload stable in the blood, releases it inside the tumour cell; the hardest engineering',
              'Payload — a cytotoxic too toxic to give on its own'
            ] },
            { p: 'Newer ADCs also exploit the "bystander effect" — the released payload leaks into neighbouring tumour cells — which let a HER2-directed ADC work even in low-HER2 tumours that older drugs could not touch. That expansion of eligible patients is what turned ADCs from a niche into a franchise-class modality.' },
            { h: 'Why it reshaped the competitive map' },
            { p: 'Two moves define the era: a HER2-directed ADC (an AstraZeneca / Daiichi Sankyo collaboration) redrew the breast-cancer landscape, and a large pharma paid a premium to acquire a pure-play ADC specialist to buy the platform and its marketed drugs rather than build it (see the key-players panel). ADCs are hard to copy well — the linker and manufacturing are real moats.' },
            { callout: 'ADCs show why modality is a competitive lens: a better delivery system can revive an old target and expand the treatable population. The moat is engineering (linker, payload, manufacturing), which is why the winners were bought, not cloned.', kind: '' }
          ]
        },
        {
          id: 'onc5',
          title: 'Cell therapy &amp; bispecifics — engineering the immune system',
          body: [
            { p: 'The most futuristic corner of oncology turns the immune system itself into the drug. Two approaches dominate: CAR-T cell therapy and bispecific antibodies.' },
            { h: 'CAR-T — a living drug' },
            { p: 'CAR-T takes a patient\'s own T cells, engineers them to recognise a tumour antigen, multiplies them, and infuses them back. In blood cancers (leukaemia, lymphoma, myeloma) the results can be dramatic — durable remissions in patients who had run out of options. But the economics are brutal, and that is the investing story:' },
            { ul: [
              'Bespoke manufacturing per patient — expensive, slow, and hard to scale',
              'List prices in the hundreds of thousands, straining payers',
              'Serious toxicities (cytokine release syndrome) needing specialist centres',
              'Solid tumours have largely resisted CAR-T — the biology is much harder there'
            ] },
            { h: 'Bispecifics — an off-the-shelf alternative' },
            { p: 'Bispecific antibodies (T-cell engagers) grab a T cell with one arm and a tumour cell with the other, forcing them together — much of the benefit of cell therapy, but as an off-the-shelf drug you can manufacture in batches rather than one patient at a time. That manufacturability is why bispecifics are spreading fast into the same blood cancers.' },
            { callout: 'Cell therapy is a case study in "great science, hard economics": efficacy is real, but per-patient manufacturing caps the market and the margins. Watch whether a modality can SCALE — off-the-shelf usually beats bespoke on commercial reach, even at similar efficacy.', kind: 'warn' }
          ]
        },
        {
          id: 'onc6',
          title: 'The oncology investing angle',
          body: [
            { p: 'Now put the framework to work. "Cancer is a big market" is not an insight — everyone knows it. The edge is judging which sub-battlefield, which line of therapy, and which modality has a real moat, and what the competitive set already prices in.' },
            { h: 'Where the moats are' },
            { ul: [
              'Biomarker-defined franchises — a validated target plus a companion test means enriched trials (better odds) and a defensible niche',
              'Modality engineering — ADC linkers and cell-therapy manufacturing are genuinely hard to copy',
              'Label breadth — the IO lesson: one molecule turned into dozens of approved uses is a durable moat',
              'Successive generations — the targeted-therapy treadmill renews a franchise as resistance emerges'
            ] },
            { h: 'Where the risks are' },
            { ul: [
              'Crowding — a great drug into a packed class (yet another PD-1) is a weak bet; check who is already there',
              'Line of therapy — later lines are smaller, tougher markets; always ask which line the trial actually targets',
              'The cliff — small-molecule targeted drugs fall fast at patent expiry',
              'Binary readouts — an honest Phase 3 flop (see the GlycoMimetics case) can erase the thesis; size accordingly'
            ] },
            { p: 'Applying the tools: size the market with the first-principles chain (eligible patients by indication AND line, not a headline TAM), feed a defensible peak-sales number into the rNPV model, and map the competitive set before you value anything. Oncology carries premium prices and premium multiples — which cuts both ways.' },
            { callout: 'This is the whole gym pointed at one area: the six questions, the base rates, the runway and rNPV tools, and the red-flag and case-study lessons — all applied to the largest, most crowded market in the industry.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'cardiometabolic',
      title: 'Cardiometabolic &amp; GLP-1',
      tier: 1,
      dataKey: 'cardiometabolic',
      blurb: 'Diabetes, obesity, cardiovascular &amp; lipids — an oncology-scale market outside cancer.',
      lessons: [
        {
          id: 'card1',
          title: 'Cardiometabolic — the shape of the area',
          body: [
            { p: 'Cardiometabolic covers the diseases of metabolism and the heart — type 2 diabetes, obesity, cardiovascular disease and lipids. For investors it is one of the most attractive areas because the patient populations are enormous and the conditions are chronic: patients often take the drugs for life, which means durable, recurring revenue.' },
            { p: 'The defining event of the era is the GLP-1 wave. Incretin drugs (semaglutide, tirzepatide) that began as diabetes treatments turned out to drive dramatic weight loss, opening a vast obesity market almost overnight. Two companies — Novo Nordisk and Eli Lilly — dominate it (see the panel).' },
            { h: 'How to slice it' },
            { ul: [
              'Diabetes — GLP-1s, SGLT2 inhibitors, insulins, DPP-4 inhibitors',
              'Obesity — the GLP-1 land grab, now the fastest-growing prize',
              'Cardiovascular &amp; lipids — statins, PCSK9 inhibitors, antithrombotics',
              'The categories are converging: GLP-1s and SGLT2s increasingly show cardiovascular and renal benefits too'
            ] },
            { callout: 'Cardiometabolic is a rare oncology-scale market OUTSIDE cancer — huge chronic populations and durable revenue. The GLP-1 wave is the clearest recent example of a validated mechanism meeting a massive real market: the science module\'s "win" profile, at its largest. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'card2',
          title: 'The GLP-1 mechanism &amp; the obesity wave',
          body: [
            { p: 'GLP-1 is a gut hormone the body releases after eating. It nudges the pancreas to release insulin, slows how fast the stomach empties, and signals the brain that you are full. Drugs that mimic it — GLP-1 receptor agonists — were designed to lower blood sugar in type 2 diabetes. The surprise was how much weight patients also lost.' },
            { h: 'From diabetes drug to obesity blockbuster' },
            { p: 'That weight-loss side effect turned out to be the main event. The same molecule, at a higher dose and with a separate brand, became an obesity treatment — and obesity is a vastly larger population than diabetes. One franchise, two enormous markets. The dual GLP-1/GIP agonists (adding a second gut hormone) push weight loss further still.' },
            { h: 'Why it became a land grab' },
            { ul: [
              'Total addressable market exploded — hundreds of millions of people with obesity, most previously untreated by drugs',
              'Injectable weekly dosing worked; oral versions aim to widen access further',
              'Demand outran supply — manufacturing capacity (fill-finish of injectables) became the binding constraint, not demand',
              'Emerging data on cardiovascular, renal and other benefits keeps expanding the label'
            ] },
            { callout: 'This is a textbook TAM expansion: a validated mechanism found a second market an order of magnitude larger than the first. When demand outstrips supply, the bottleneck — and the moat — shifts to manufacturing scale.', kind: '' }
          ]
        },
        {
          id: 'card3',
          title: 'The Novo vs Lilly duopoly',
          body: [
            { p: 'The GLP-1 market is, for now, effectively a duopoly: Novo Nordisk (semaglutide) and Eli Lilly (tirzepatide). Two companies with decades of peptide and injectable-manufacturing expertise came to own the two biggest metabolic markets in medicine — see the panel for their franchises.' },
            { h: 'How two firms came to own it' },
            { ul: [
              'Deep peptide chemistry and injectable fill-finish know-how that latecomers cannot quickly replicate',
              'First-movers who invested early and heavily in manufacturing capacity',
              'Lilly\'s dual GLP-1/GIP agonist showed greater weight loss — a genuine best-in-class edge',
              'Label breadth across diabetes AND obesity, now expanding into cardiovascular and renal'
            ] },
            { h: 'The competition and the next wave' },
            { ul: [
              'Triple agonists (adding glucagon) chasing even deeper weight loss',
              'Oral small-molecule GLP-1s — cheaper and easier to scale than injectables',
              'Amylin analogues and combinations; a long line of challengers racing in'
            ] },
            { callout: 'A duopoly with real moats — manufacturing scale, trial data, brand — is durable, but it trades priced for perfection. The risk is not that GLP-1 fails; it is that best-in-class is a moving target as next-gen entrants pile in. Watch manufacturing scale and head-to-head data, not the molecule alone.', kind: 'warn' }
          ]
        },
        {
          id: 'card4',
          title: 'Beyond GLP-1 — the rest of cardiometabolic',
          body: [
            { p: 'GLP-1 dominates the headlines, but cardiometabolic is broader — and the other classes are large, durable franchises in their own right.' },
            { h: 'Diabetes, beyond incretins' },
            { ul: [
              'SGLT2 inhibitors — began as diabetes drugs, then proved cardiovascular and kidney benefits, expanding into heart failure and chronic kidney disease (a label-expansion story much like GLP-1)',
              'Insulins — the foundational diabetes therapy; a mature, price-pressured but essential market',
              'DPP-4 inhibitors — older oral agents, now largely genericized'
            ] },
            { h: 'Cardiovascular &amp; lipids' },
            { ul: [
              'Statins — the archetypal blockbuster class, now generic (recall the Lipitor patent cliff)',
              'PCSK9 inhibitors and newer lipid-lowering agents for patients statins cannot control',
              'Antithrombotics and heart-failure drugs round out the CV franchises'
            ] },
            { p: 'The through-line is convergence: GLP-1s and SGLT2s increasingly show benefits across metabolism, heart and kidney, so the old boundaries between "diabetes", "cardiology" and "renal" are blurring into one cardiometabolic continuum.' },
            { callout: 'Do not let the GLP-1 spotlight hide the rest. SGLT2 inhibitors show the same lesson — a mechanism that keeps finding new indications compounds into a durable franchise. Label expansion, not just the launch, is where much of the value accrues.', kind: '' }
          ]
        },
        {
          id: 'card5',
          title: 'The cardiometabolic investing angle',
          body: [
            { p: 'Run the six questions across cardiometabolic and a distinctive profile emerges: unlike binary clinical-stage biotech, this is a market of huge, chronic, mostly de-risked franchises. The bets look different here.' },
            { h: 'What makes it attractive' },
            { ul: [
              'Enormous chronic populations on lifelong therapy — durable, recurring revenue',
              'Validated mechanisms with room to expand across diabetes, obesity, heart and kidney',
              'The winners are large, profitable incumbents — lower blow-up risk than a single-asset micro-cap'
            ] },
            { h: 'Where the risks hide' },
            { ul: [
              'Priced for perfection — the leaders trade at premium multiples; disappointment, not disaster, is the risk',
              'The duopoly moat can erode — oral GLP-1s and next-gen agonists could reset best-in-class',
              'Patent cliffs on the big incretins are datable events that will invite generics/biosimilars',
              'Pricing and access — payer/PBM pushback and political pressure on high-volume, high-cost drugs'
            ] },
            { p: 'Applying the tools: the runway/dilution lessons matter less for the profitable incumbents and more for the challengers trying to break in; the rNPV lens shifts from "does it work?" (largely answered) to "how big, how durable, and what is already in the price?" And the patent-cliff module tells you when the durable revenue turns.' },
            { callout: 'Cardiometabolic flips the usual biotech question. It is rarely "will the science work?" — it is "how large and durable is the franchise, how deep is the moat, and how much is already priced in?" A different game from clinical-stage bets, played on the same board.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'immunology',
      title: 'Immunology &amp; Inflammation',
      tier: 1,
      dataKey: 'immunology',
      blurb: 'Autoimmune &amp; inflammatory disease — home of the best-selling drug in history.',
      lessons: [
        {
          id: 'imm1',
          title: 'Immunology &amp; inflammation — the shape of the area',
          body: [
            { p: 'Immunology and inflammation (I&amp;I) covers the diseases where the immune system attacks the body\'s own tissues or over-reacts: rheumatoid arthritis, psoriasis, inflammatory bowel disease, atopic dermatitis, asthma and many more. The drugs dial that over-active immune response back down.' },
            { p: 'It is one of the largest and most durable areas in the industry, because the diseases are chronic — patients stay on therapy for years — and the biologics that treat them command premium prices. The field was built on cytokine blockade, and it produced the best-selling drug in history (Humira; see the panel).' },
            { h: 'The disease battlegrounds' },
            { ul: [
              'Rheumatology — rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis',
              'Dermatology — psoriasis and atopic dermatitis (eczema)',
              'Gastroenterology — Crohn\'s disease and ulcerative colitis',
              'Respiratory / allergy — asthma and other type-2 inflammatory conditions'
            ] },
            { callout: 'A single I&amp;I biologic often spans many of these diseases — one molecule, a dozen indications. That is why label expansion drives so much of the value here, and why the winners are broad franchises rather than single-disease drugs. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'imm2',
          title: 'The cytokine map — anti-TNF, ILs and JAK',
          body: [
            { p: 'To read immunology you need a rough map of the immune signals — cytokines — that the drugs block. The field has advanced by climbing this map, from broad early targets toward more selective ones with better safety.' },
            { h: 'The mechanism classes' },
            { ul: [
              'Anti-TNF — the original biologic backbone (Humira, Enbrel); broad and effective across many diseases, but not selective',
              'IL-23 and IL-12/23 — powerful in psoriasis and inflammatory bowel disease (Skyrizi, Stelara)',
              'IL-17 — psoriasis and spondyloarthritis (Cosentyx)',
              'IL-4 / IL-13 — the type-2 / allergic axis driving atopic dermatitis and asthma (Dupixent)',
              'JAK inhibitors — oral small molecules that block signalling inside the cell (Rinvoq); convenient, but carry a safety trade-off'
            ] },
            { h: 'Matching mechanism to disease' },
            { p: 'Different diseases are driven by different cytokines, so there is no single "best" drug — the answer is disease-specific. IL-23 dominates psoriasis; the IL-4/IL-13 axis dominates atopic dermatitis; TNF still anchors rheumatoid arthritis and much of IBD. The recurring pattern is a more selective target displacing the older, broader one.' },
            { callout: 'I&amp;I is a mechanism map, not one market. The winning move has repeatedly been a more selective cytokine that unseats the incumbent (IL-23 over TNF in psoriasis). Know which cytokine drives which disease and you can read the competitive set at a glance.', kind: '' }
          ]
        },
        {
          id: 'imm3',
          title: 'The Humira playbook — surviving the biggest patent cliff',
          body: [
            { p: 'Humira (adalimumab, an anti-TNF) became the best-selling drug in history. But AbbVie knew the US patent cliff was coming when biosimilars arrived in 2023 — and its response is the industry\'s best case study in cliff management.' },
            { p: 'Instead of riding Humira down, AbbVie pre-built two successors and shifted prescribing to them before the cliff hit: Skyrizi (a more selective IL-23 inhibitor) and Rinvoq (an oral JAK inhibitor). By 2024 the two together were already roughly twice Humira\'s shrunken revenue (see the panel), and AbbVie guides the pair well past Humira\'s old peak.' },
            { h: 'Why it worked' },
            { ul: [
              'Started early — grew the successors for years before the cliff, not after it',
              'Chose genuinely better next-gen mechanisms (IL-23, oral JAK), not me-toos',
              'Spanned the same indications, so patients could switch within the franchise rather than to a competitor'
            ] },
            { callout: 'This is the playbook for surviving a patent cliff: do not defend the old blockbuster — deliberately cannibalize it with a better next-generation drug you own. The cliff is a datable event (see the patent-cliff module), so the winners prepare for it years ahead.', kind: '' }
          ]
        },
        {
          id: 'imm4',
          title: 'Biosimilars, JAK safety &amp; indication expansion',
          body: [
            { p: 'Three forces shape the economics of an I&amp;I franchise: how fast biosimilars erode it, the safety cloud over the oral JAK class, and how far a single drug can expand across indications.' },
            { h: 'Biosimilar erosion — slower than generics' },
            { p: 'Biologics do not fall off a cliff as fast as small molecules. Biosimilars are hard to make, harder to switch patients onto, and priced at a smaller discount, so erosion is a slower grind than the near-total collapse of a small-molecule generic. Humira lost about a third of revenue in year one, not ninety percent — and Stelara is now walking the same slower path.' },
            { h: 'The JAK safety saga' },
            { p: 'Oral JAK inhibitors are convenient — pills, not injections — but a large safety study of one JAK drug flagged higher risks of serious cardiovascular events, cancer and clots, and the FDA applied a boxed warning across the class. That pushed JAKs to later lines of therapy behind the biologics, a reminder that convenience does not override safety.' },
            { h: 'Indication expansion compounds value' },
            { p: 'The offsetting force is breadth. Because these drugs target immune pathways shared across many diseases, one molecule can be approved in psoriasis, then psoriatic arthritis, then IBD, then more. Each new indication adds a new market to the same drug — which is why label expansion, not just the launch, drives the franchise.' },
            { callout: 'Model an I&amp;I drug as a portfolio of indications on a slow biosimilar clock, with a safety profile that sets its place in the treatment order. The value is the sum of the labels, discounted by how — and how fast — the moat erodes.', kind: 'warn' }
          ]
        },
        {
          id: 'imm5',
          title: 'The I&amp;I investing angle',
          body: [
            { p: 'Run the six questions across immunology and, like cardiometabolic, the profile is franchises rather than coin-flips: large, chronic, mostly de-risked markets. But I&amp;I has its own distinctive levers.' },
            { h: 'What to weigh' },
            { ul: [
              'Displacement risk — a more selective mechanism can unseat the incumbent (IL-23 over TNF); ask whether a franchise is the disruptor or the disrupted',
              'Biosimilar timing — a slow erosion clock, but a datable one; know when each big biologic loses exclusivity',
              'The successor pipeline — the Humira playbook shows the winners own their own replacement; does the incumbent have one?',
              'Safety-driven positioning — a boxed warning (JAK) can cap a drug\'s market by pushing it down the treatment order'
            ] },
            { p: 'Applying the tools: value an I&amp;I drug as a sum of indications, each with its own competitive set, on the slow biosimilar clock; the rNPV question is less "does it work?" and more "how many labels, how durable, and who is the next-gen threat?" The patent-cliff and case-study modules (Humira) do much of the heavy lifting here.' },
            { callout: 'I&amp;I rewards mapping the mechanism-versus-disease grid and the biosimilar calendar. The edge is spotting displacement early — the next selective cytokine that unseats today\'s leader — and knowing whether the incumbent already owns its successor.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'neuroscience',
      title: 'Neuroscience &amp; CNS',
      tier: 1,
      dataKey: 'neuroscience',
      blurb: 'The brain and nervous system — biotech\'s graveyard, and its biggest recent comeback.',
      lessons: [
        {
          id: 'neu1',
          title: 'Neuroscience — the shape of the area',
          body: [
            { p: 'Neuroscience (CNS) covers the brain and nervous system — split into neurology (Alzheimer\'s, Parkinson\'s, multiple sclerosis, epilepsy, migraine, ALS, spinal muscular atrophy) and psychiatry (depression, schizophrenia, bipolar disorder). The unmet need is vast, but historically this has been the hardest area in the industry to drug.' },
            { p: 'CNS earned a reputation as a graveyard. The blood-brain barrier blocks many drugs from reaching their target, the underlying disease biology is often poorly understood, and the endpoints — cognition, mood, behaviour — are slow and subjective. Alzheimer\'s is the emblem: decades of failures (see the honest-failure case study). But a recent wave of breakthroughs has revived the field.' },
            { h: 'The battlegrounds' },
            { ul: [
              'Neurology — MS, migraine, Alzheimer\'s, Parkinson\'s, epilepsy, and rare genetic disease (SMA, ALS)',
              'Psychiatry — depression, schizophrenia, bipolar disorder'
            ] },
            { callout: 'CNS is high-risk, high-reward: the base rates are brutal (the graveyard), but the winners build durable franchises against enormous unmet need — and recent breakthroughs (anti-amyloid antibodies, the first new schizophrenia mechanism in decades, genetic medicines for SMA) show the graveyard is not permanent. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'neu2',
          title: 'Why the brain is hard',
          body: [
            { p: 'CNS earned its graveyard reputation for concrete, structural reasons — not bad luck. Four in particular make the brain uniquely difficult to drug:' },
            { ul: [
              'The blood-brain barrier physically keeps most molecules out of the brain',
              'The biology is poorly understood — we still do not fully know what causes Alzheimer\'s or depression',
              'Endpoints are slow and subjective — cognition, mood and behaviour, measured over months, with high placebo responses',
              'The diseases are heterogeneous — one diagnosis can hide many different underlying causes'
            ] },
            { p: 'The result is below-average success rates and long, expensive trials. Alzheimer\'s is the emblem: the honest-failure case study documented roughly 98 failed Phase 2/3 compounds against just 2 approvals — about nine times worse than the all-drug rate — and many drugs hit their biological target without helping patients at all.' },
            { callout: 'CNS is where base rates bite hardest. Discount CNS probabilities below the industry average, treat any single readout as a genuine coin flip, and be sceptical of subjective endpoints with high placebo responses.', kind: 'warn' }
          ]
        },
        {
          id: 'neu3',
          title: 'The disease battlegrounds &amp; franchises',
          body: [
            { p: 'Despite the difficulty, CNS has produced large, durable franchises. A tour of the main battlegrounds and the mechanisms that won them:' },
            { ul: [
              'Multiple sclerosis — anti-CD20 antibodies (Ocrevus) and other immunomodulators; among the biggest CNS drugs',
              'Migraine — CGRP antagonists (both preventive antibodies and acute pills) transformed a huge, long-underserved market',
              'Alzheimer\'s — after decades of failure, anti-amyloid antibodies (Leqembi, Kisunla) finally slowed decline modestly: disease-modifying, controversial, but a first',
              'Psychiatry — long dominated by old monoamine drugs (SSRIs, antipsychotics), now disrupted by the first genuinely new schizophrenia mechanism in decades — a muscarinic agonist (Cobenfy / KarXT)',
              'Rare genetic CNS — antisense and gene therapy (Spinraza, Zolgensma) turned spinal muscular atrophy from fatal into treatable'
            ] },
            { callout: 'The winning move in CNS is usually a genuinely new mechanism against a validated biology — CGRP for migraine, anti-CD20 for MS, muscarinic for schizophrenia. Where the biology is understood, CNS pays off big; where it is not (much of neurodegeneration), it stays a graveyard.', kind: '' }
          ]
        },
        {
          id: 'neu4',
          title: 'The mechanism shift &amp; the M&amp;A wave',
          body: [
            { p: 'CNS is in the middle of a mechanistic transition — and big pharma is buying its way into it.' },
            { ul: [
              'From symptomatic to disease-modifying — old CNS drugs treated symptoms (dopamine for Parkinson\'s, monoamines for depression); the frontier is modifying the disease itself (amyloid antibodies)',
              'New targets — after decades stuck on the same receptors, novel targets are finally working (muscarinic for schizophrenia, CGRP for migraine)',
              'Genetic medicines — antisense oligonucleotides and gene therapy attack rare CNS disease at the RNA/DNA level (SMA)'
            ] },
            { p: 'Because in-house CNS research is so risky, big pharma increasingly acquires de-risked CNS assets rather than build them. Recent multi-billion-dollar deals bought novel mechanisms outright — a muscarinic schizophrenia platform, other CNS targets — echoing the players/M&amp;A module: the patent cliff and pipeline gaps drive the buying.' },
            { callout: 'Watch the mechanism, not the disease name. The CNS winners of recent years share a pattern — a new, validated mechanism — and big pharma\'s willingness to pay up for them (the M&amp;A wave) signals where the field thinks the value is.', kind: '' }
          ]
        },
        {
          id: 'neu6',
          title: 'Special topic — psychedelics: a thinking-gym case study',
          body: [
            { p: 'Psychedelics — psilocybin, MDMA, ketamine-derived and next-generation analogs — are in development for depression, PTSD and addiction, all areas of huge unmet need in the CNS graveyard. They are also one of the most hyped, speculative corners of biotech, which makes them a perfect place to apply the whole gym to a single field.' },
            { h: 'Three features that make them unusual' },
            { ul: [
              'The drug-plus-therapy model — many require supervised dosing plus hours of trained-therapist time and clinic infrastructure. You are selling a protocol, not a pill — hard to scale and hard to reimburse (closer to cell therapy\'s delivery problem than to a prescription)',
              'Regulatory &amp; scheduling overhang — as Schedule I substances, approval requires rescheduling and a fraught FDA/DEA path',
              'Weak value capture — you cannot patent a naturally-occurring molecule; the real IP is in formulations and next-generation analogs'
            ] },
            { h: 'The cautionary tale' },
            { p: 'In 2024, Lykos Therapeutics\' MDMA-assisted therapy for PTSD received an FDA Complete Response Letter after an advisory committee voted against it — citing functional unblinding (patients could tell whether they got the drug) and trial-conduct concerns. A vivid reminder that a program with dramatic-looking results can still fail the FDA, especially with subjective endpoints and an unusual trial design.' },
            { h: 'The hype cycle' },
            { p: 'Psychedelics drew a large speculative wave around 2020-21 (Compass Pathways, ATAI, MindMed and others), then many cratered as timelines slipped and the science proved hard. It is a textbook run through the red-flag, base-rate and buy-the-rumor lessons. The frontier now is "non-hallucinogenic" psychedelics — keeping the antidepressant / neuroplasticity benefit without the trip, which would turn a supervised protocol into a scalable pill. (Ketamine\'s approved cousin, esketamine, already showed a version of the market exists.)' },
            { callout: 'Psychedelics is where the whole gym meets a hyped, speculative field. Ask the hard questions: can it scale beyond a supervised protocol? Can it clear the FDA\'s subjective-endpoint bar? Is the IP defensible? And what is already priced in? This is exactly the kind of narrative that rewards base-rate discipline and red-flag skepticism over conviction.', kind: 'warn' }
          ]
        },
        {
          id: 'neu5',
          title: 'The CNS investing angle',
          body: [
            { p: 'CNS is the highest-variance area in this Atlas: brutal base rates and binary readouts on one side, enormous unmet need and durable franchises on the other.' },
            { h: 'The risks' },
            { ul: [
              'The graveyard base rate — discount probabilities hard, especially in neurodegeneration',
              'Subjective endpoints and high placebo responses make readouts noisy',
              'Regulatory controversy — the Aduhelm accelerated-approval saga added uncertainty to the whole class',
              'Long, expensive trials strain runway'
            ] },
            { h: 'The rewards' },
            { ul: [
              'Once you win, franchises are durable (MS, migraine)',
              'A validated new mechanism can re-rate a stock fast (CGRP, muscarinic)',
              'M&amp;A provides an exit — big pharma pays up for de-risked CNS mechanisms'
            ] },
            { p: 'Applying the tools: size single CNS bets small (binary and below-average odds), lean on the base-rate and honest-failure lessons, be sceptical of subjective-endpoint stories, and treat validated-mechanism franchises differently from neurodegeneration moonshots.' },
            { callout: 'CNS is where the whole gym matters most — base rates, position sizing, red flags on subjective endpoints, honest-failure humility, and the M&amp;A lens. High variance rewards discipline more than conviction.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'rare',
      title: 'Rare &amp; Orphan Disease',
      tier: 2,
      dataKey: 'rare',
      blurb: 'Small-population genetic disease — where the base rates flip in your favour.',
      lessons: [
        {
          id: 'rare1',
          title: 'Rare &amp; orphan disease — the shape of the area',
          body: [
            { p: 'Rare (orphan) disease covers thousands of small-population conditions, most with a genetic cause — cystic fibrosis, hemophilia, lysosomal storage disorders, Duchenne and many more. Each is tiny; collectively they affect hundreds of millions of people.' },
            { p: 'For investors it is a distinctive and often attractive corner. A validated genetic cause means clearer biology and objective biomarkers, trials are small and fast, orphan-drug incentives (extended exclusivity, tax credits) sweeten the economics, and prices are high. The result: success rates run ABOVE the industry average — the mirror image of CNS.' },
            { ul: [
              'Genetic causation gives legible biology and a validated target',
              'Biomarkers make trials smaller, faster and more objective',
              'Orphan incentives add exclusivity and financial support',
              'Premium (often six/seven-figure) pricing for tiny populations'
            ] },
            { callout: 'Rare disease flips the base-rate lesson: validated targets and biomarkers push the odds up. But the populations are tiny, so the ceiling is pricing, not volume — which raises reimbursement and access questions. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'rare2',
          title: 'Why rare disease beats the base rate',
          body: [
            { p: 'Rare disease is the one area where the odds favour you, and the reason is causation. Most rare diseases have a single, known genetic cause — so the target is validated before you even start, the opposite of the "is this the right target?" uncertainty that sinks so many programs.' },
            { ul: [
              'Genetic causation → a validated target and legible biology',
              'A biomarker (often the missing protein or enzyme) → objective, faster trials',
              'Small, well-defined populations → smaller trials and motivated, easy-to-find patients',
              'Orphan incentives → extended exclusivity, tax credits, fee waivers, priority-review vouchers'
            ] },
            { p: 'Together these lift success rates above the industry average and shorten timelines. It is the science module\'s "validated target + biomarker" lesson operating with the wind at its back.' },
            { callout: 'Rare disease inverts the base rate: a single-gene cause, a clear biomarker and orphan designation let you discount the failure rate. The flip side — the population is small, so value must come from price, not volume.', kind: '' }
          ]
        },
        {
          id: 'rare3',
          title: 'The modality toolkit',
          body: [
            { p: 'Because rare diseases are genetically defined, they have become the proving ground for the most advanced modalities. The toolkit maps directly to the molecular defect:' },
            { ul: [
              'Enzyme replacement therapy (ERT) — infuse the missing enzyme (lysosomal storage disorders)',
              'Antisense &amp; RNAi — silence or correct a faulty gene\'s message (SMA, amyloidosis)',
              'Gene therapy — deliver a working copy of the gene (AAV — hemophilia, SMA)',
              'Gene editing — fix the DNA directly (CRISPR)',
              'Mutation-specific small molecules — correct a defective protein (CFTR modulators in cystic fibrosis)'
            ] },
            { p: 'Each modality suits a different kind of defect, and rare disease is usually where a new modality earns its first approval before spreading to larger indications.' },
            { callout: 'Rare disease is the modality frontier: the same tools (ERT, RNA, gene therapy/editing, mutation-specific molecules) later expand into bigger markets, so a rare-disease pipeline is often a preview of where a modality is headed. Match the modality to the molecular defect.', kind: '' }
          ]
        },
        {
          id: 'rare4',
          title: 'Orphan pricing &amp; reimbursement',
          body: [
            { p: 'With tiny populations, the whole economic model rests on price. Orphan drugs routinely cost hundreds of thousands of dollars a year, and one-time gene therapies have carried multi-million-dollar price tags — the highest in all of medicine.' },
            { h: 'The logic, and the friction' },
            { ul: [
              'Why prices are high — development cost spread over few patients, high unmet need, no alternatives, value framed against a lifetime of disease',
              'Why payers push back — one-time cures strain budgets (pay once, benefit for years, an accounting mismatch), so outcomes-based and instalment deals emerge',
              'Access varies widely by country and payer'
            ] },
            { p: 'The reimbursement question is often the real risk, not the science: a curative therapy that payers will not fund at scale is a commercial disappointment even when the biology is perfect (the hematology area shows exactly this).' },
            { callout: 'In rare disease, price IS the market. The binding question is usually "will payers fund it, and how fast?" — reimbursement and access, not efficacy, are where the thesis most often breaks.', kind: 'warn' }
          ]
        },
        {
          id: 'rare5',
          title: 'The rare-disease investing angle',
          body: [
            { p: 'Rare disease offers a distinctive risk/reward: better odds and durable niche monopolies, capped by small populations and reimbursement risk.' },
            { h: 'Attractive' },
            { ul: [
              'Above-average success rates and a validated-target profile',
              'Orphan exclusivity creates near-monopolies with premium, durable pricing',
              'A reliable M&amp;A magnet — big pharma buys rare-disease franchises for their steady cash flows'
            ] },
            { h: 'Constraints' },
            { ul: [
              'Tiny total market — even at high prices, the ceiling is low',
              'Reimbursement and access risk; ultra-rare populations can be too small to be commercial',
              'Gene-therapy durability and uptake remain uncertain'
            ] },
            { p: 'Applying the tools: size the market by patients × price (not volume); the rNPV leans on a higher probability of success but a capped peak; treat reimbursement as a core risk; and value the M&amp;A optionality as real but not the thesis.' },
            { callout: 'Rare disease rewards a different calculus — high probability, capped upside, durable moat. The edge is judging the reimbursement path and the true addressable population, not whether the drug works.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'infectious',
      title: 'Infectious Disease &amp; Vaccines',
      tier: 2,
      dataKey: 'infectious',
      blurb: 'Antivirals, antibiotics &amp; vaccines — the industry\'s strangest economics.',
      lessons: [
        {
          id: 'inf1',
          title: 'Infectious disease &amp; vaccines — the shape of the area',
          body: [
            { p: 'This area covers the drugs that fight pathogens — antivirals (HIV, hepatitis), antibiotics and antifungals — and vaccines, from routine childhood shots to pandemic response and the mRNA platform.' },
            { p: 'It is the most economically unusual area in the Atlas. The science can be spectacular — HIV went from fatal to chronic, hepatitis C became curable, mRNA vaccines arrived at pandemic speed — yet the business models are strange and often broken. That tension is exactly what makes it a rich teaching area.' },
            { ul: [
              'Chronic antivirals (HIV) — durable, high-value franchises',
              'Curative antivirals (hepatitis C) — a cure that shrank its own market',
              'Antibiotics — enormous need, but broken economics',
              'Vaccines — episodic, policy-driven demand'
            ] },
            { callout: 'Infectious disease teaches that market structure can matter more than the science. A cure can destroy its own market, a life-saving antibiotic can bankrupt its maker, and a vaccine can boom then bust. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'inf2',
          title: 'The broken economics of antibiotics',
          body: [
            { p: 'The clearest case of "market structure over science" is antibiotics. Society badly needs new ones — resistance keeps rising — yet developing them is a reliable way to go bankrupt.' },
            { h: 'The paradox' },
            { ul: [
              'A new antibiotic must be held in reserve, used sparingly to slow resistance — so low volume, little revenue',
              'It competes against dirt-cheap generics that work for most infections',
              'Courses last days, not a lifetime — no recurring revenue',
              'Several biotechs won approval for a novel antibiotic and went bankrupt anyway'
            ] },
            { p: 'The incentive is inverted: the more responsibly a new antibiotic is used, the less money it makes. This is a genuine market failure, which is why governments are experimenting with "pull" incentives — subscription ("Netflix-style") payments and market-entry rewards — to fix it.' },
            { callout: 'Antibiotics are the textbook proof that great science is not a good business. A life-saving drug can bankrupt its maker because the market is structured to minimise its use. When the unit economics are broken, no amount of clinical success rescues the thesis.', kind: 'bad' }
          ]
        },
        {
          id: 'inf3',
          title: 'The cure paradox &amp; durable HIV',
          body: [
            { p: 'Infectious disease contains a paradox found almost nowhere else: a cure can be a worse business than a chronic treatment. Hepatitis C is the case study.' },
            { p: 'Gilead\'s hepatitis-C drugs cured the disease in weeks — a genuine medical triumph — priced around $84,000 a course. Revenue exploded, then fell away: by curing patients, the drug shrank its own pool. A chronic therapy bills every year; a cure bills once and removes the customer.' },
            { p: 'Contrast HIV — not cured but controlled, so patients take antiretrovirals for life. That is a durable, recurring franchise, and today Gilead\'s HIV business dwarfs what is left of its hepatitis-C cure (see the panel).' },
            { callout: 'Commercially, chronic beats cured. A cure is better for patients and can be worse for revenue durability. When you value an infectious-disease drug, ask whether it treats forever or cures once — the two have opposite revenue shapes.', kind: 'warn' }
          ]
        },
        {
          id: 'inf4',
          title: 'Vaccines — episodic, policy-driven demand',
          body: [
            { p: 'Vaccines run on episodic, policy-driven demand — unlike the steady chronic franchises found elsewhere in the industry.' },
            { ul: [
              'Routine vaccines (childhood, shingles, HPV) — steady, but dependent on official recommendations',
              'Pandemic vaccines — enormous spikes then collapse (COVID mRNA vaccines went from tens of billions to a fraction as governments stopped buying — see the panel)',
              'The mRNA platform — fast to design and proven at pandemic scale, now chasing flu, RSV and more'
            ] },
            { p: 'Demand is set by governments and health authorities — recommendations, stockpiles, mandates — not individual prescribing. So policy and politics are core risks: a recommendation change, or a shipment pause (as Merck saw with Gardasil in China), can swing revenue sharply.' },
            { callout: 'Vaccines are policy-driven and episodic. The COVID boom-and-bust is the lesson — a pandemic can mint a fortune, then evaporate it. Model vaccine revenue as lumpy and policy-exposed, not a smooth annuity.', kind: 'warn' }
          ]
        },
        {
          id: 'inf5',
          title: 'The infectious-disease investing angle',
          body: [
            { p: 'Infectious disease is where market structure matters more than the science — the through-line of the whole area. The bets divide sharply by revenue shape.' },
            { ul: [
              'Durable — chronic antivirals (HIV): lifelong, recurring, defensible franchises',
              'Self-limiting — a curative drug (hepatitis C): revenue can collapse as it succeeds',
              'Episodic — vaccines: lumpy, policy-exposed, with pandemic optionality',
              'Broken — antibiotics: avoid unless "pull" incentives change the math'
            ] },
            { p: 'Applying the tools: for a treatment, ask chronic vs curative (the revenue shape); for a vaccine, model policy and episodic demand rather than an annuity; for antibiotics, check whether the unit economics even work; and treat pandemic upside as a real but unpredictable call option.' },
            { callout: 'In infectious disease, read the market structure first. The same clinical success can be a durable annuity, a self-limiting spike, a policy-driven lump, or a money-loser. Structure, not efficacy, decides the investment.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'respiratory',
      title: 'Respiratory',
      tier: 2,
      dataKey: 'respiratory',
      blurb: 'Asthma, COPD &amp; fibrosis — home of the device moat.',
      lessons: [
        {
          id: 'resp1',
          title: 'Respiratory — the shape of the area',
          body: [
            { p: 'Respiratory covers the lungs and airways — asthma and COPD (huge chronic markets), plus specialist areas such as idiopathic pulmonary fibrosis and pulmonary hypertension.' },
            { p: 'Much of the market runs on inhaled devices, and that is its distinctive investing feature: inhalers are hard to copy exactly, so respiratory franchises stay durable long after the molecule\'s patent lapses. Meanwhile biologics have transformed severe disease, overlapping the immunology type-2 story (Dupixent appears in both).' },
            { ul: [
              'Asthma / COPD — inhaled maintenance therapy plus biologics for severe disease',
              'Fibrosis — idiopathic pulmonary fibrosis and its antifibrotics',
              'Pulmonary hypertension — a specialist, high-value niche'
            ] },
            { callout: 'Respiratory adds a new kind of moat to your toolkit: the device / formulation moat. A drug-device combination can resist generics in a way a pure small molecule cannot. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'resp2',
          title: 'The inhaled-device moat',
          body: [
            { p: 'Respiratory\'s distinctive feature is the inhaler. Most asthma and COPD drugs are delivered by a device — and that device is a real, durable moat, because inhalers resist generics in a way plain pills do not.' },
            { h: 'Why it is hard to copy' },
            { ul: [
              'A generic must match not just the molecule but the device\'s dose delivery, particle size and handling — a high regulatory bar',
              'Patients and doctors are loyal to a familiar device and technique',
              'Combination inhalers (two or three drugs in one) add further complexity to copy'
            ] },
            { p: 'The result: respiratory franchises often keep meaningful share for years after the molecule\'s patent lapses — the old Advair/Seretide inhaler famously resisted generics long past expiry. The moat is the drug-device combination, not the chemistry alone.' },
            { callout: 'Respiratory adds the device / formulation moat to your toolkit. When the delivery system is hard to replicate, a drug can defy the patent cliff. Ask not just "when does the patent expire?" but "how copyable is the device?"', kind: '' }
          ]
        },
        {
          id: 'resp3',
          title: 'The biologic shift in severe disease',
          body: [
            { p: 'While inhalers dominate everyday asthma and COPD, biologics have transformed severe disease — the patients who fail on inhalers. This overlaps the immunology story directly: much of severe asthma is type-2 inflammation, the same axis as atopic dermatitis.' },
            { ul: [
              'Anti-IL-5 — eosinophilic asthma (Nucala, Fasenra)',
              'Anti-IgE — allergic asthma (Xolair)',
              'Anti-TSLP — broad severe asthma (Tezspire)',
              'Anti-IL-4 / IL-13 — Dupixent, in severe asthma and, from 2024, the first biologic approved for COPD'
            ] },
            { p: 'These are high-value add-on therapies that expanded the market upward into severe patients who previously had few options — and Dupixent\'s move into COPD opened a large new indication (see the panel).' },
            { callout: 'Severe respiratory disease is really an immunology market — type-2 inflammation. The same biologic can span dermatology, asthma and now COPD, so label expansion across the type-2 diseases is where the franchise value compounds.', kind: '' }
          ]
        },
        {
          id: 'resp4',
          title: 'Fibrosis &amp; pulmonary hypertension',
          body: [
            { p: 'Beyond the big asthma/COPD market sit two smaller, high-value specialist niches: pulmonary fibrosis and pulmonary hypertension.' },
            { ul: [
              'Idiopathic pulmonary fibrosis (IPF) — a progressive, fatal scarring of the lung; antifibrotics (Ofev, Esbriet) slow it but do not cure it, leaving serious unmet need and active next-gen competition',
              'Pulmonary arterial hypertension (PAH) — a rare vascular disease treated with vasodilators and newer mechanisms; a durable specialist franchise'
            ] },
            { p: 'These behave more like rare/specialist markets than the mass respiratory business — smaller populations, premium prices, and large unmet need still to fill. A drug that actually reversed lung fibrosis would be transformative.' },
            { callout: 'Fibrosis and pulmonary hypertension are the specialist, high-unmet-need corner of respiratory — closer to rare disease in economics. The white space (a truly disease-modifying IPF drug) is large, which is why the pipeline is crowded.', kind: '' }
          ]
        },
        {
          id: 'resp5',
          title: 'The respiratory investing angle',
          body: [
            { p: 'Respiratory blends a durable, device-protected base with a biologic growth layer and specialist niches — so the first question is which layer you are buying.' },
            { h: 'Attractive' },
            { ul: [
              'Device moats give unusual durability past the patent cliff',
              'Biologics add a high-value growth layer in severe disease (Dupixent\'s COPD entry expands it further)',
              'Specialist niches (IPF, PAH) offer premium, defensible franchises'
            ] },
            { h: 'Watch' },
            { ul: [
              'Inhaler generics do eventually erode share',
              'Severe-disease biologics compete in a crowded type-2 field (overlap with immunology)',
              'IPF / PAH pipelines are racing for the same white space'
            ] },
            { p: 'Applying the tools: for inhaled franchises, weigh the device moat as much as the patent date; for severe-disease biologics, read the competitive set across ALL the type-2 indications; for IPF/PAH, treat them like specialist/rare bets.' },
            { callout: 'Respiratory rewards knowing which layer you are buying — a durable device franchise, a type-2 biologic in a crowded field, or a specialist niche. The device moat is the distinctive edge; the biologics are where it overlaps immunology.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'hematology',
      title: 'Hematology (non-malignant)',
      tier: 2,
      dataKey: 'hematology',
      blurb: 'Benign blood disorders — the real-world test of gene therapy.',
      lessons: [
        {
          id: 'hem1',
          title: 'Hematology (non-malignant) — the shape of the area',
          body: [
            { p: 'This covers benign (non-cancer) blood disorders — hemophilia, sickle cell disease, thalassemia and immune thrombocytopenia. Blood cancers — leukaemia, lymphoma, myeloma — sit in Oncology instead.' },
            { p: 'It is a small area with outsized importance for investors, because it is the clearest real-world test of the newest modalities. Casgevy — the first CRISPR medicine — treats sickle cell disease; hemophilia has cycled through factor replacement, antibody mimetics, and now gene therapy.' },
            { ul: [
              'Hemophilia — the shift from factor replacement to antibody mimetics to gene therapy',
              'Sickle cell &amp; thalassemia — the gene-editing frontier',
              'Other benign disorders — immune thrombocytopenia and more'
            ] },
            { callout: 'Hematology makes the modality reference concrete — especially the promise and the messy commercial reality of one-time cures: curative, but with slow uptake and hard reimbursement. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'hem2',
          title: 'Hemophilia — factor to antibody to gene therapy',
          body: [
            { p: 'Hemophilia A (a missing clotting factor VIII) is the clearest illustration of modality disruption inside a single disease. It has cycled through three generations of technology, each displacing the last:' },
            { ul: [
              'Factor replacement — infuse the missing factor VIII several times a week (the original standard; long-acting versions like Altuviiio extended the dosing interval)',
              'Factor-mimetic antibody — Roche\'s Hemlibra mimics factor VIII\'s job with a bispecific antibody dosed as infrequently as monthly under the skin, disrupting the factor market on convenience',
              'Gene therapy — deliver a working factor-VIII gene once (BioMarin\'s Roctavian), aiming for a functional cure'
            ] },
            { p: 'Each generation traded up on convenience or durability — and the commercial winner has often been the one that is easiest to live with, not the most advanced. Hemlibra took huge share from factor products on convenience alone.' },
            { callout: 'Hemophilia is a live case of modality disruption within one disease. Convenience often beats sophistication: the factor-mimetic antibody disrupted infusions, and gene therapy promises a cure — but "curative" and "commercial" are not the same thing.', kind: '' }
          ]
        },
        {
          id: 'hem3',
          title: 'Sickle cell &amp; the CRISPR moment',
          body: [
            { p: 'Sickle cell disease and beta-thalassemia — inherited disorders of hemoglobin — became the proving ground for gene editing. In 2023, Casgevy (exa-cel) became the first approved CRISPR medicine, developed by Vertex and CRISPR Therapeutics.' },
            { p: 'It works by editing a patient\'s own blood stem cells to switch fetal hemoglobin back on, then re-infusing them — a one-time, potentially curative treatment for a disease that previously had few options. It is a genuine scientific milestone.' },
            { ul: [
              'The process is complex — cells harvested, edited, the patient conditioned with chemotherapy, then re-infused',
              'It is delivered only at specialist centres',
              'The price runs into the low millions, and uptake is gated by capacity and reimbursement'
            ] },
            { callout: 'Casgevy is a landmark — the first CRISPR medicine — and a preview of gene editing spreading to other genetic diseases. But a scientific first is not an instant commercial success: complexity, capacity and price make the ramp slow.', kind: '' }
          ]
        },
        {
          id: 'hem4',
          title: 'The commercial reality of one-time cures',
          body: [
            { p: 'Hematology is where the gene-therapy dream meets the commercial ground, and the lesson is sobering: a one-time cure can be a difficult business.' },
            { ul: [
              'The accounting mismatch — pay millions once, benefit for years; payers resist the huge upfront cost',
              'Slow uptake — complex delivery, limited centres, patient and physician caution',
              'Small eligible populations, and a "one and done" model with no recurring revenue — each patient must be found and treated anew'
            ] },
            { p: 'The clearest evidence: BioMarin\'s Roctavian, a hemophilia gene therapy, generated only a tiny sum, was narrowed to a few markets, and was ultimately withdrawn after no buyer emerged (see the panel). The science worked; the market did not.' },
            { callout: '"Curative" and "commercial" are different questions. A one-time cure faces reimbursement friction, slow uptake and no recurring revenue — so a scientifically perfect gene therapy can still be a commercial disappointment. This is the modality-reference warning made real.', kind: 'bad' }
          ]
        },
        {
          id: 'hem5',
          title: 'The hematology investing angle',
          body: [
            { p: 'Benign hematology is a small area that punches above its weight as a lesson: it is where the newest modalities are tested against real-world economics.' },
            { h: 'Attractive' },
            { ul: [
              'High-value, genetically defined diseases with clear biology and premium pricing',
              'Modality disruption creates winners (Hemlibra); big pharma buys de-risked heme assets',
              'Rare/orphan economics apply — near-monopolies in small populations'
            ] },
            { h: 'Watch' },
            { ul: [
              'One-time cures face slow uptake and reimbursement friction (Roctavian)',
              'Small populations cap the total market',
              'The disruptor can itself be disrupted (factor → antibody → gene therapy)'
            ] },
            { p: 'Applying the tools: judge a heme drug on convenience and durability as much as efficacy (the market rewards the easiest-to-live-with option); for gene therapies, treat the commercial ramp and reimbursement as the core risk, not the biology; and size by patients × price with rare-disease economics.' },
            { callout: 'Hematology is the modality-reference and rare-disease lessons combined. The edge is judging which modality wins commercially — usually the most convenient, durable and reimbursable — not the most scientifically advanced.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'ophthalmology',
      title: 'Ophthalmology',
      tier: 2,
      dataKey: 'ophthalmology',
      blurb: 'Diseases of the eye — where the competitive edge is how rarely you have to inject.',
      lessons: [
        {
          id: 'oph1',
          title: 'Ophthalmology — the shape of the area',
          body: [
            { p: 'Ophthalmology covers diseases of the eye. For investors the centre of gravity is the retina: wet age-related macular degeneration (wet AMD), diabetic macular edema and diabetic retinopathy are large, ageing-driven markets treated with injections into the eye — and that is where most of the value sits.' },
            { p: 'Around that core are several distinct segments: geographic atrophy (advanced dry AMD, newly treatable), glaucoma (a large but generic-heavy pressure-lowering market), dry eye disease, and inherited retinal disease — the eye being an ideal target for gene therapy.' },
            { h: 'How to slice it' },
            { ul: [
              'Retinal disease — anti-VEGF injections (the money); the competitive axis is dosing interval',
              'Geographic atrophy — complement inhibitors created a market from nothing',
              'Glaucoma &amp; dry eye — large, largely commoditised chronic segments',
              'Inherited retinal disease — the gene-therapy frontier (the eye is immune-privileged and contained)'
            ] },
            { callout: 'Ophthalmology has a distinctive competitive rule: because treatment means an injection into the eye, the winning drug is often the one you have to give least often. Durability — the dosing interval — is the moat. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'oph2',
          title: 'The anti-VEGF durability war',
          body: [
            { p: 'The core of ophthalmology investing is wet AMD and diabetic macular edema, treated with anti-VEGF drugs injected directly into the eye. It is a large, ageing-driven market — and the competition runs on an unusual axis.' },
            { p: 'Because every dose is an injection into the eyeball, patients and physicians dislike frequent visits. So the battleground is not raw efficacy — the drugs work similarly — but durability: how long you can go between injections. Fewer injections wins.' },
            { ul: [
              'Eylea (Regeneron / Bayer) — long the dominant anti-VEGF',
              'Vabysmo (Roche) — a bispecific (anti-VEGF + Ang-2) that extended the dosing interval and took share fast',
              'Eylea HD — Regeneron\'s higher-dose reformulation, designed to match longer intervals AND defend against Eylea biosimilars'
            ] },
            { p: 'Notice the pattern: Eylea HD is the patent-cliff playbook (own your successor) with an ophthalmology twist — reformulate the same molecule into a longer-acting version to blunt biosimilars.' },
            { callout: 'In wet AMD, best-in-class means the fewest injections. Durability — the dosing interval — is the moat, not efficacy. It is the clearest market in the industry where convenience, not potency, decides the winner.', kind: '' }
          ]
        },
        {
          id: 'oph3',
          title: 'New mechanisms open markets',
          body: [
            { p: 'Two frontiers show how a new mechanism creates value in the eye — one by opening a previously untreatable market, the other by pioneering a whole modality.' },
            { h: 'Complement inhibitors &amp; geographic atrophy' },
            { p: 'Geographic atrophy (advanced dry AMD) had no approved treatment for decades. Complement inhibitors (Syfovre, Izervay), targeting the complement immune pathway, became the first drugs to slow it — creating a market from nothing. That is the classic first-in-a-new-indication value, though with a slower, harder clinical and commercial story than wet AMD.' },
            { h: 'The eye as gene-therapy frontier' },
            { p: 'The eye is an almost ideal gene-therapy target — small, contained and immune-privileged (less likely to trigger an immune reaction). Luxturna, for an inherited retinal disease, was the first FDA-approved gene therapy for a genetic disease in the US — a landmark, even though its market is tiny.' },
            { callout: 'The eye rewards new mechanisms: complement inhibitors turned an untreatable disease into a market, and gene therapy found an ideal organ. Watch for first-in-indication drugs (huge value when they work) and the eye\'s role as the proving ground for genetic medicine.', kind: '' }
          ]
        },
        {
          id: 'oph4',
          title: 'Glaucoma, dry eye &amp; the specialist channel',
          body: [
            { p: 'Beyond the retina sit large chronic segments that behave very differently — and a distinctive commercial channel that shapes the whole area.' },
            { ul: [
              'Glaucoma — lowering eye pressure with daily drops; a huge patient population but largely genericised (a commodity), with newer sustained-release and device attempts to add value',
              'Dry eye disease — very common but lower-value, a crowded field of anti-inflammatory drops (Restasis and successors)'
            ] },
            { h: 'The delivery channel' },
            { p: 'Retinal drugs are injected into the eye by retina specialists in-office — a "buy-and-bill" model where the physician purchases the drug and is reimbursed for administering it. That specialist-administered channel (not a pharmacy pill) shapes competition: it favours established players with physician relationships, and it makes reimbursement codes and switching costs matter as much as the data.' },
            { callout: 'Ophthalmology splits into commoditised chronic drops (glaucoma, dry eye) and high-value specialist-injected retina drugs. The buy-and-bill, physician-administered channel is a structural feature — reimbursement and specialist relationships, not just efficacy, drive uptake.', kind: '' }
          ]
        },
        {
          id: 'oph5',
          title: 'The ophthalmology investing angle',
          body: [
            { p: 'Ophthalmology offers durable, specialist-protected franchises with an unusually legible competitive rule — but also biosimilar exposure and segment-specific dynamics.' },
            { h: 'Attractive' },
            { ul: [
              'Durability / convenience is a legible moat — fewest injections wins',
              'The specialist buy-and-bill channel protects incumbents',
              'First-in-new-indication drugs (complement for geographic atrophy) create markets',
              'The eye is a gene-therapy frontier with real optionality'
            ] },
            { h: 'Watch' },
            { ul: [
              'Biosimilars hit the big anti-VEGF drugs (hence the Eylea HD defense)',
              'Glaucoma and dry eye are commoditised, generic-heavy segments',
              'Geographic-atrophy drugs face a slower, harder clinical and commercial story than wet AMD'
            ] },
            { p: 'Applying the tools: value a retinal drug on its dosing interval as much as its efficacy; treat the biosimilar timeline and the next-gen reformulation like a patent cliff; weigh the specialist channel\'s stickiness; and treat gene-therapy or first-in-indication assets as high-value optionality.' },
            { callout: 'Ophthalmology\'s edge is unusually clear — durability wins, the specialist channel protects, and new mechanisms open markets. Read the dosing interval, the biosimilar clock, and whether a drug is first in its indication.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'mash',
      title: 'Metabolic Liver Disease (MASH)',
      tier: 2.5,
      dataKey: 'mash',
      blurb: 'Fatty-liver disease — a huge market, a graveyard history, and a first approval at last.',
      lessons: [
        {
          id: 'mash1',
          title: 'MASH — the shape of the area',
          body: [
            { p: 'MASH — metabolic dysfunction-associated steatohepatitis, formerly called NASH — is fatty-liver disease driven by metabolism: a build-up of fat and inflammation in the liver that can progress to fibrosis, cirrhosis and liver cancer. It is tied to obesity and type 2 diabetes, so the potential population is enormous — and it overlaps heavily with cardiometabolic.' },
            { p: 'For two decades MASH was a graveyard: a huge anticipated market and a long line of Phase 3 failures, because the biology is multifactorial and the endpoints (measured by liver biopsy) are brutal. Then, in 2024, the first drug was finally approved.' },
            { ul: [
              'Why it was hard — multifactorial disease, slow invasive biopsy endpoints, and many failed mechanisms',
              'Why now — the first approval (a thyroid-receptor-β agonist) cracked it',
              'The twist — the GLP-1 wave is spilling in: semaglutide and tirzepatide show liver benefit'
            ] },
            { callout: 'MASH is the "huge market, brutal history, finally cracked" story. The tension: a first-in-class drug just opened the market, but the GLP-1s that treat the underlying obesity may end up dominating it. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'mash2',
          title: 'Why MASH was a graveyard',
          body: [
            { p: 'For two decades MASH (then called NASH) was one of biotech\'s most notorious graveyards — a market everyone knew would be huge, and a pipeline that kept failing. Understanding why is a lesson in itself.' },
            { ul: [
              'Multifactorial biology — MASH is driven by fat, inflammation AND fibrosis at once, so a drug hitting one pathway often failed to move the whole disease',
              'Brutal endpoints — approval required liver biopsies showing fibrosis regression, a slow, invasive, variable measure with a high placebo response',
              'A long list of high-profile failures — Intercept\'s obeticholic acid (an FXR agonist) was rejected despite years of effort; Gilead\'s selonsertib and others failed in Phase 3'
            ] },
            { p: 'The graveyard reputation kept many investors away — which made the eventual first approval all the more notable.' },
            { callout: 'MASH is a case study in why a huge market is not enough. Multifactorial biology plus biopsy endpoints made it a graveyard for years. When an area has a brutal endpoint and a validated-but-complex biology, discount the pipeline heavily until someone actually clears the bar.', kind: 'warn' }
          ]
        },
        {
          id: 'mash3',
          title: 'The breakthrough &amp; mechanism landscape',
          body: [
            { p: 'In 2024 the first FDA-approved MASH drug arrived: Rezdiffra (resmetirom), a thyroid hormone receptor-β (THR-β) agonist from Madrigal. It acts in the liver to improve fat metabolism and, crucially, showed fibrosis improvement on biopsy — clearing the bar that had defeated so many.' },
            { p: 'Rezdiffra opened the market, but it is one entry in a broad mechanistic landscape still in development:' },
            { ul: [
              'THR-β agonists (Rezdiffra) — the first-approved class',
              'FGF21 analogs (Akero\'s efruxifermin, 89bio\'s pegozafermin) — strong fibrosis data in trials',
              'GLP-1 and incretins — from cardiometabolic, treating the metabolic root (next lesson)',
              'Pan-PPAR agonists and others in the pipeline'
            ] },
            { callout: 'Rezdiffra proved MASH is druggable — a genuine first-in-class win. But it is the opening move: FGF21 analogs and, above all, the incretins are coming, so the first approval does not settle who wins the market.', kind: '' }
          ]
        },
        {
          id: 'mash4',
          title: 'The GLP-1 disruption',
          body: [
            { p: 'The biggest question hanging over MASH is not whether it is druggable — Rezdiffra answered that — but whether the GLP-1 drugs will simply absorb it.' },
            { p: 'MASH is largely a consequence of obesity and metabolic disease. GLP-1 and dual agonists (semaglutide, tirzepatide) treat that root cause — and trials (such as semaglutide\'s ESSENCE) show they improve MASH too. If a patient is already on a GLP-1 for weight and diabetes and it also clears their liver disease, does a dedicated liver drug get squeezed out?' },
            { ul: [
              'The case for GLP-1s eating MASH — they treat the cause, huge existing patient overlap, one drug for many problems',
              'The case for dedicated drugs — not everyone tolerates or responds to GLP-1s; liver-directed drugs (THR-β, FGF21) may add fibrosis benefit on top; combinations are likely'
            ] },
            { callout: 'MASH is where the GLP-1 wave collides with a new market. The investing question is less "does the drug work?" and more "will the incretins that treat the cause leave room for a dedicated liver drug?" Treating the root cause can eat a downstream market.', kind: 'warn' }
          ]
        },
        {
          id: 'mash5',
          title: 'The MASH investing angle',
          body: [
            { p: 'MASH is a high-variance, high-overlap bet: a genuinely huge potential market with a brutal history, a first approval, and a giant metabolic shadow over it.' },
            { h: 'Attractive' },
            { ul: [
              'Enormous eligible population (tied to obesity and diabetes)',
              'First-in-class proof that it is druggable, with several mechanisms showing strong data',
              'M&amp;A interest — the big metabolic players want a liver play'
            ] },
            { h: 'Watch' },
            { ul: [
              'The market size is still largely a projection, not realised sales',
              'Biopsy endpoints and label restrictions gate uptake',
              'The GLP-1 overhang could cap dedicated drugs; the graveyard history demands humility'
            ] },
            { p: 'Applying the tools: treat the market size as a projection to be discounted, not a given; weigh the GLP-1 overhang as a structural competitor; for clinical-stage FGF21 and next-gen names, respect the historical base rate; and price the incumbent-metabolic-giant threat.' },
            { callout: 'MASH rewards separating "druggable" (now proven) from "big commercial market" (still uncertain). The GLP-1 overhang and biopsy-gated uptake mean a scientific win may not translate to the projected billions. Discount the TAM, respect the history.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'nephrology',
      title: 'Nephrology / Renal',
      tier: 2.5,
      dataKey: 'nephrology',
      blurb: 'Kidney disease — a long-stagnant area suddenly turned into a hotspot.',
      lessons: [
        {
          id: 'neph1',
          title: 'Nephrology — the shape of the area',
          body: [
            { p: 'Nephrology covers kidney disease — chronic kidney disease (CKD, often driven by diabetes and hypertension), plus specific conditions like IgA nephropathy and polycystic kidney disease (ADPKD), and the anemia and mineral problems that come with failing kidneys.' },
            { p: 'It was long one of the most underserved areas — for decades, little beyond blood-pressure control and dialysis. Then it became one of the hottest: SGLT2 inhibitors proved they protect the kidneys (expanding out of diabetes into CKD), and a wave of new drugs hit rare kidney diseases such as IgA nephropathy.' },
            { ul: [
              'SGLT2 inhibitors\' cardiorenal data unlocked CKD (a big overlap with cardiometabolic)',
              'Non-steroidal MRAs (finerenone) for diabetic kidney disease',
              'A burst of IgA nephropathy approvals — endothelin antagonists, complement inhibitors, gut-targeted budesonide',
              'ADPKD and renal anemia as further specialist niches'
            ] },
            { callout: 'Nephrology is the "graveyard to hotspot" story — a long-stagnant area revitalised when a mechanism (SGLT2\'s cardiorenal protection) unlocked it and rare kidney diseases became druggable. It also shows the cardiometabolic convergence from the kidney\'s side. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'neph2',
          title: 'The SGLT2 cardiorenal revolution',
          body: [
            { p: 'Nephrology\'s revival began with a discovery nobody planned. SGLT2 inhibitors were designed as diabetes drugs — they make the kidney excrete glucose. Then large trials found they dramatically protected the kidneys AND the heart, even in people without diabetes.' },
            { p: 'That turned a diabetes pill into a kidney and heart-failure drug. Farxiga (dapagliflozin) and Jardiance (empagliflozin) won chronic-kidney-disease and heart-failure indications, and Farxiga became AstraZeneca\'s single largest product (see the panel) — driven substantially by this expansion beyond diabetes.' },
            { ul: [
              'The pattern — a mechanism that keeps finding new indications (diabetes → heart failure → CKD) compounds into a mega-franchise',
              'The convergence — SGLT2s blur the line between diabetes, cardiology and nephrology (the cardiometabolic continuum, seen from the kidney)'
            ] },
            { callout: 'The SGLT2 story is the label-expansion lesson at its most dramatic — a diabetes drug that became a cornerstone of kidney and heart care. When a mechanism protects multiple organs, the indications and the revenue compound. It also single-handedly revived nephrology as an investable area.', kind: '' }
          ]
        },
        {
          id: 'neph3',
          title: 'The IgA nephropathy wave',
          body: [
            { p: 'While SGLT2s revived the broad CKD market, one specific rare kidney disease — IgA nephropathy — went from neglected to one of the most crowded races in the industry in just a few years.' },
            { p: 'IgA nephropathy (an immune disorder that damages the kidney\'s filters) had almost no targeted treatments. Then a burst of approvals arrived, each with a different mechanism:' },
            { ul: [
              'Gut-targeted budesonide (Tarpeyo) — dampening the immune source',
              'Endothelin / angiotensin blockade (Filspari) — protecting the filter (a fast-growing launch, see the panel)',
              'Complement inhibitors (Fabhalta and others) — hitting the immune pathway',
              'Several more mechanisms in late-stage trials'
            ] },
            { p: 'A disease with no drugs became a disease with several competing mechanisms almost overnight — a mini gold rush, and a reminder that a validated target attracts a crowd fast.' },
            { callout: 'IgA nephropathy shows how quickly a neglected rare disease becomes crowded once it is druggable. Multiple mechanisms now compete for the same patients — great for patients, but a warning that "first approval" is not a durable monopoly when rivals with different mechanisms are close behind.', kind: 'warn' }
          ]
        },
        {
          id: 'neph4',
          title: 'ADPKD, anemia &amp; the roxadustat lesson',
          body: [
            { p: 'Beyond CKD and IgA nephropathy, nephrology has several specialist niches — and one instructive regulatory cautionary tale.' },
            { ul: [
              'ADPKD (polycystic kidney disease) — a genetic disease; tolvaptan (Jynarque) slows cyst growth, a durable specialist franchise',
              'Renal anemia — failing kidneys cause anemia; long treated with EPO agents, with oral HIF-PH inhibitors as a newer class',
              'Hyperkalemia, mineral-bone disease and dialysis-adjacent markets round it out'
            ] },
            { h: 'The roxadustat lesson' },
            { p: 'Roxadustat, an oral HIF-PH inhibitor for renal anemia, was approved in China and Europe but rejected by the FDA (2021) over safety concerns — a reminder that regulators in different regions can reach opposite conclusions, and that a drug approved elsewhere is not a sure thing in the US.' },
            { callout: 'Nephrology\'s niches (ADPKD, anemia) are specialist, durable markets — but roxadustat is the cautionary tale: approval in one region does not guarantee approval in another. Regional regulatory divergence is a real, underrated risk.', kind: 'warn' }
          ]
        },
        {
          id: 'neph5',
          title: 'The nephrology investing angle',
          body: [
            { p: 'Nephrology went from graveyard to hotspot, which shapes the opportunity: revived broad markets, a crowded rare-disease race, and specialist niches.' },
            { h: 'Attractive' },
            { ul: [
              'SGLT2s created durable mega-franchises through organ-spanning label expansion',
              'A wave of rare-kidney-disease approvals brings orphan economics; big pharma has re-entered',
              'The cardiometabolic overlap brings scale'
            ] },
            { h: 'Watch' },
            { ul: [
              'IgA nephropathy is already crowded — first-mover advantage is fragile',
              'Much of the value (SGLT2s) accrues to cardiometabolic incumbents, not pure-play nephrology',
              'Regional regulatory divergence (roxadustat); CKD trials are long and expensive'
            ] },
            { p: 'Applying the tools: treat SGLT2 / broad-CKD as a label-expansion franchise owned by metabolic giants; for IgA nephropathy names, map the crowded competitive set (several mechanisms, same patients); apply rare-disease economics to the orphan kidney diseases; and weight regional regulatory risk.' },
            { callout: 'Nephrology rewards knowing which story you are buying — a diabetes-giant\'s organ-spanning franchise (SGLT2), a crowded rare-disease race (IgA nephropathy), or a specialist niche (ADPKD). The revival is real, but so is the crowding and the cardiometabolic overlap.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'aesthetics',
      title: 'Aesthetics',
      tier: 3,
      dataKey: 'aesthetics',
      blurb: 'Botox, fillers &amp; body contouring — the consumer business inside pharma.',
      lessons: [
        {
          id: 'aes1',
          title: 'Aesthetics — the consumer business inside pharma',
          body: [
            { p: 'Medical aesthetics covers cosmetic treatments of the face and body — wrinkle-reducing neurotoxins (Botox and its rivals), hyaluronic-acid dermal fillers, and energy-based body-contouring devices. It sits inside pharma but behaves like nothing else in it.' },
            { p: 'The reason: it is almost entirely CASH-PAY. There is no insurer, no pharmacy-benefit manager, no formulary — patients pay out of pocket for a discretionary purchase. That single fact flips the economics: aesthetics runs like a consumer-brand business, not a reimbursed-medicine business.' },
            { ul: [
              'Cash-pay — no payer, so real pricing power sits with the brand',
              'Brand- and marketing-driven — Botox is a household name, not just a molecule',
              'A practitioner / med-spa channel — sold via dermatologists, plastic surgeons and clinics',
              'Discretionary and recession-sensitive demand — the opposite of essential medicines'
            ] },
            { callout: 'Aesthetics is the one corner of pharma that behaves like consumer goods. Analyse it with a consumer lens — brand, demand elasticity, discretionary spend — not the usual clinical-and-reimbursement lens. The deep-dive lessons below unpack it.', kind: '' }
          ]
        },
        {
          id: 'aes2',
          title: 'The cash-pay consumer model',
          body: [
            { p: 'Everything strange about aesthetics traces back to one structural fact: the patient pays. Because there is no insurer between the company and the customer, none of the usual pharma reimbursement machinery exists — no formulary negotiation, no prior authorization, no pharmacy-benefit-manager rebate, no national price reference. The list price and the pocket price are the same thing.' },
            { h: 'What disappears when the payer disappears' },
            { ul: [
              'No formulary access to win — a launch does not live or die on getting onto a payer\'s covered list',
              'No PBM rebate erosion — the gap between "list" and "net" price that crushes rebated drugs simply is not there',
              'No coverage cliff — demand is not switched off by a plan dropping the product',
              'But also no safety net — if the consumer decides not to spend, nothing compels the purchase'
            ] },
            { h: 'What the company competes on instead' },
            { p: 'With no payer to persuade, the fight moves to the two parties who actually decide: the injector and the consumer. Companies build demand the way consumer brands do — direct-to-consumer marketing, brand awareness, and loyalty programs. AbbVie\'s Allē and Galderma\'s ASPIRE, for example, are points-based rewards programs that make patients loyal to a brand across repeat visits, much like an airline frequent-flyer scheme.' },
            { p: 'They also compete for the practitioner. Because treatments are delivered in a clinic or med-spa, the injector\'s preference, training, and commercial relationship with the company heavily shape which brand a patient receives. Winning the channel (dermatologists, plastic surgeons, med-spas) is as important as winning the consumer.' },
            { h: 'The trade-off: elastic, discretionary demand' },
            { p: 'The flip side of cash-pay pricing power is demand fragility. A neurotoxin touch-up is one of the easiest purchases in all of healthcare to postpone. That makes aesthetics genuinely cyclical — volumes soften when consumer confidence falls and recover when it returns, behaving more like premium discretionary spending (think a nice handbag or a spa membership) than like medicine. Treatments are also priced per-session and repeat every few months, so the model rewards retention: the lifetime value of a loyal patient dwarfs a single visit.' },
            { callout: 'Cash-pay is a double-edged sword. It hands companies real pricing power and clean, rebate-free revenue — but it ties demand to consumer confidence and to two gatekeepers (injector and patient) that classic reimbursed pharma never has to court.', kind: '' }
          ]
        },
        {
          id: 'aes3',
          title: 'The brand moat — durability without a patent',
          body: [
            { p: 'The most counter-intuitive lesson in aesthetics: the flagship product keeps dominating long after its patents expire. Botox has been off its core composition-of-matter patent protection for many years, yet still commands the leading share of the facial-neurotoxin market. In classic pharma, patent expiry means generics and a revenue cliff. Here it barely dents the leader. Understanding why is the whole point of the area.' },
            { h: 'Why the moat survives patent loss' },
            { ul: [
              'Brand recognition — "Botox" became the generic verb for the whole category; consumers ask for it by name, which no challenger\'s marketing can easily undo',
              'Injector familiarity and trust — practitioners are trained on, comfortable with, and confident in the dosing and safety profile of the incumbent; switching carries clinical and reputational risk for a cash-paying patient\'s face',
              'Biologic complexity — neurotoxins are biologics, not simple small molecules, so there is no cheap, automatically-substitutable "generic" the way there is for a pill; a rival must run its own trials and build its own brand',
              'Loyalty and switching friction — rewards programs and a satisfied patient\'s "if it works, don\'t change it" instinct keep repeat visits with the same brand'
            ] },
            { h: 'How the moat differs from a drug patent' },
            { p: 'A patent is a legal, time-limited monopoly — precise, defensible in court, and guaranteed to end. A brand-plus-channel moat is fuzzier and softer, but potentially far more durable because it has no expiry date. It is eroded, not by a calendar, but by competitors slowly chipping at share with lower prices, novel benefits (e.g. faster onset or longer duration), or better practitioner economics. The moat is real, but it is defended every day, not by the patent office.' },
            { h: 'What can weaken it' },
            { p: 'The moat is not invincible. Newer neurotoxins compete on differentiated claims — longer duration or quicker onset — and on price and injector incentives. A meaningful clinical or safety differentiator, aggressive channel deals, or a shift in what practitioners recommend can move share over time. The investor\'s job is to watch whether challengers are actually converting trials into durable share, or merely launching.' },
            { callout: 'Aesthetics proves that a moat need not be a patent. Brand, channel trust, and biologic complexity can defend a franchise for decades past IP expiry — but "durable" is not "permanent". Track share, not just the patent estate.', kind: '' }
          ]
        },
        {
          id: 'aes4',
          title: 'The toolkit, dual-use molecules & the players',
          body: [
            { p: 'The aesthetics toolkit is small and well-defined. Knowing the handful of categories, and who leads each, is most of what you need to read the competitive map.' },
            { h: 'The four categories' },
            { ul: [
              'Neurotoxins (botulinum toxin injectables) — relax specific muscles to soften dynamic wrinkles; the anchor category and the biggest brands',
              'Dermal fillers (mostly hyaluronic-acid gels) — restore lost volume and contour; sold as franchises alongside neurotoxins',
              'Collagen stimulators / biostimulators — prompt the skin to rebuild its own collagen over months for gradual volumizing',
              'Energy-based & body-contouring devices — light, radiofrequency, ultrasound or cooling used for skin tightening and fat reduction; a capital-equipment and consumables business, distinct from injectables'
            ] },
            { h: 'Dual-use molecules — the same drug, two markets' },
            { p: 'A defining quirk: several aesthetic molecules are also serious therapeutics. Botulinum toxin is the clearest case — the same class of drug treats chronic migraine, muscle spasticity, cervical dystonia, overactive bladder and excessive sweating, and separately smooths frown lines. Companies literally split reporting into a therapeutic franchise (reimbursed, payer-driven, medical) and a cosmetic franchise (cash-pay, consumer-driven). One molecule, two completely different business models running side by side. When you read a neurotoxin\'s sales, always ask which half you are looking at — the therapeutic and aesthetic halves behave nothing alike.' },
            { h: 'The players' },
            { ul: [
              'AbbVie (Allergan Aesthetics) — the market leader, home of Botox / Botox Cosmetic, the Juvederm filler family, and CoolSculpting body contouring; acquired via the Allergan deal',
              'Galderma — a dermatology-focused pure-play (Dysport neurotoxin, Restylane and Sculptra) that returned to the public markets via a 2024 IPO',
              'Merz Aesthetics — privately held, with Xeomin (a "naked" neurotoxin), the Belotero fillers and Ultherapy energy devices',
              'Challenger neurotoxins — Revance (Daxxify, marketed on longer duration), Evolus (Jeuveau, a price-competitive "newtox"), among others, all trying to convert differentiation into share against the incumbent'
            ] },
            { callout: 'Read the map in two moves: first place a product in one of the four categories, then ask whether the molecule is dual-use — because a neurotoxin\'s therapeutic and aesthetic halves are effectively two different companies stapled together.', kind: '' }
          ]
        },
        {
          id: 'aes5',
          title: 'The investing angle — a consumer-discretionary lens',
          body: [
            { p: 'Because aesthetics behaves like premium consumer goods, the sharpest mistake an investor can make is to value it with a pure biotech playbook. There is no binary trial readout that re-rates the stock overnight and no patent cliff that zeroes a franchise. The questions that matter are the ones you would ask of a consumer-brand business.' },
            { h: 'What actually drives the numbers' },
            { ul: [
              'Brand strength and share — is the flagship holding, gaining or slowly ceding share? Share trend matters more than the patent estate',
              'Volume and the consumer cycle — treatment volumes track consumer confidence; soft quarters in a downturn are cyclical, not structural, if the brand is intact',
              'Pricing power and mix — can the company hold price and shift patients toward premium products without losing volume?',
              'Retention economics — loyalty-program engagement and repeat-visit rates signal the lifetime value that underpins the model',
              'Channel health — injector and med-spa relationships, and the training pipeline that feeds new demand'
            ] },
            { h: 'Where the risks really sit' },
            { p: 'The threats are competitive and macro, not regulatory-binary. New neurotoxins compete on duration, onset and price and can erode the incumbent\'s share gradually. A consumer recession compresses discretionary volumes across the category. And "newtox" price competition can pressure the whole neurotoxin price umbrella even for the leader. None of these is a cliff — each is a slow grind that shows up in share and margin, so the discipline is to track the trend over several quarters, not to wait for a single catalyst.' },
            { h: 'The reframing' },
            { p: 'Value the durable franchises like consumer staples with a discretionary tilt — steady, cash-generative, brand-moated, but cyclical. Value the challengers like consumer-brand start-ups — the whole thesis is whether marketing and differentiation can convert into durable share against an entrenched name, which is a marketing-and-channel bet, not a science bet. In both cases the analytical toolkit is elasticity, brand and share, not phase-transition probabilities.' },
            { callout: 'Aesthetics rewards the consumer-goods investor\'s instincts: buy durable brands with pricing power, respect the demand cycle, and judge challengers by whether they win share — not by whether their trial reads out. Reach for the biotech binary here and you will misprice it.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'pain',
      title: 'Non-opioid Pain',
      tier: 3,
      dataKey: 'pain',
      blurb: 'A vast unmet need, a graveyard of failures, and a hard-won breakthrough — the hunt for pain relief without addiction.',
      lessons: [
        {
          id: 'pain1',
          title: 'Non-opioid pain — huge need, hard science',
          body: [
            { p: 'Pain is one of the most common reasons people seek medical care, yet the drugs to treat it are strikingly limited. For decades the strongest tools were opioids — hugely effective, but addictive and, at scale, the cause of a public-health catastrophe. That shadow reframed the whole field: the prize is no longer just relieving pain, it is relieving pain WITHOUT the addiction liability.' },
            { p: 'Non-opioid pain is therefore defined less by a single organ or disease and more by a mission — to replace or reduce opioid use with medicines that are effective but not habit-forming. It spans acute pain (after surgery or injury) and chronic pain (osteoarthritis, low-back pain, neuropathic pain), each with its own biology and its own commercial reality.' },
            { ul: [
              'A genuinely enormous patient population — pain is near-universal',
              'A powerful societal tailwind — pressure to move away from opioids',
              'But punishing science — pain has proven one of the hardest areas to drug safely',
              'And a distinctive commercial catch — it competes against cheap, entrenched generics'
            ] },
            { callout: 'The opioid crisis turned "non-addictive pain relief" into one of medicine\'s highest-value goals. But the field is a graveyard, and even a clean win faces a pricing problem the deep-dive lessons below unpack.', kind: '' }
          ]
        },
        {
          id: 'pain2',
          title: 'The opioid shadow & the unmet need',
          body: [
            { p: 'To understand the modern non-opioid pain field, start with why opioids became a problem. Opioids are powerful analgesics, but they act on the brain\'s reward circuitry — which is exactly what makes them addictive. Widespread prescribing, dependence, and a shift to illicit supply produced an epidemic of addiction and overdose deaths. The medical, regulatory, and social response reshaped how pain is treated.' },
            { h: 'What the crisis changed' },
            { ul: [
              'Prescribing pressure — guidelines and payers push to limit opioid use, especially for acute and post-surgical pain',
              'A regulatory tailwind — regulators actively encourage development of non-addictive alternatives',
              'A reframed goal — "as effective as an opioid, without the abuse potential" became the target product profile',
              'A commercial opening — a large, motivated market for any drug that credibly delivers that profile'
            ] },
            { h: 'Why "just use the old drugs" is not enough' },
            { p: 'The existing non-opioid options each fall short somewhere. NSAIDs (ibuprofen, naproxen) work for mild-to-moderate pain but carry gastrointestinal, kidney, and cardiovascular risks and a ceiling on efficacy. Gabapentinoids and antidepressants help some chronic and neuropathic pain but have their own side effects and inconsistent benefit. None matches an opioid\'s power for severe acute pain. That gap — strong efficacy without addiction — is the unmet need the whole field is chasing.' },
            { callout: 'The opioid epidemic did not just create a health crisis; it created a durable, high-value commercial opening. The company that fills the "opioid-strength, non-addictive" gap is selling into a market that patients, doctors, regulators and payers all WANT to exist.', kind: '' }
          ]
        },
        {
          id: 'pain3',
          title: 'Why pain is hard — the analgesia graveyard',
          body: [
            { p: 'If the need is so large and so wanted, why are there so few new pain drugs? Because pain is one of the most treacherous areas in all of drug development. The failures are instructive — and they are the reason a genuine breakthrough is so valuable.' },
            { h: 'The big obstacles' },
            { ul: [
              'A huge placebo response — pain is subjective and self-reported, so placebo groups often improve dramatically, making it very hard to prove a drug actually works',
              'The efficacy-vs-safety trap — many pain pathways run through the brain and spinal cord, so blocking pain often also causes sedation, dizziness, mood effects or abuse potential',
              'Separating the signal — showing a new drug beats both placebo AND an active comparator, in a noisy endpoint, demands large, expensive trials',
              'Chronic-pain biology is tangled — it involves nerves rewiring over time, not a single clean target'
            ] },
            { h: 'A cautionary tale: the NGF antibodies' },
            { p: 'The clearest recent lesson is the anti-NGF class. Nerve growth factor drives pain signalling, and antibodies against it (tanezumab, fasinumab) were genuinely effective for osteoarthritis pain — a major potential market. But in trials some patients developed rapidly progressive joint damage, and the programmes were ultimately discontinued despite years of investment. A drug can work on pain and still fail on safety in a way no one fully predicted.' },
            { p: 'The graveyard is why investors should treat pain assets with unusual skepticism on efficacy (beware the placebo response) and unusual vigilance on safety (the side effect that kills the drug often appears late). It is also why a validated, clean mechanism — when one finally arrives — commands a premium.' },
            { callout: 'Pain is a graveyard for two structural reasons: a placebo response that masks real efficacy, and pain pathways so entangled with the brain that safety failures are common and often late. Discount bold efficacy claims; scrutinise the safety database hard.', kind: 'warn' }
          ]
        },
        {
          id: 'pain4',
          title: 'The toolkit & the sodium-channel breakthrough',
          body: [
            { p: 'The established non-opioid toolkit is a patchwork, and most of it is generic. Knowing the categories — and where the genuine innovation is now happening — is the key to reading the field.' },
            { h: 'The existing categories (mostly generic)' },
            { ul: [
              'NSAIDs &amp; COX-2 inhibitors — first-line for mild-to-moderate pain; cheap and generic',
              'Gabapentinoids (pregabalin, gabapentin) — for neuropathic pain; former blockbusters, now off-patent',
              'Antidepressants (SNRIs like duloxetine) — for chronic and neuropathic pain',
              'Local &amp; long-acting anesthetics (e.g. liposomal bupivacaine) and topicals (lidocaine, capsaicin) — for localised and post-surgical pain'
            ] },
            { h: 'The breakthrough: peripheral sodium channels' },
            { p: 'The most important recent advance targets sodium channels — the Nav1.8 and Nav1.7 channels that carry pain signals along nerves OUTSIDE the brain. Because these channels sit in the peripheral nervous system, blocking them can relieve pain WITHOUT acting on the brain\'s reward circuitry — so, in principle, without addiction and without the CNS side effects that sank earlier drugs. This is the mechanistic holy grail the field chased for years.' },
            { p: 'In early 2025 that idea became real: Vertex\'s suzetrigine (marketed as Journavx), a Nav1.8 inhibitor, was approved for acute pain — the first genuinely new class of acute pain medicine in decades, and a non-opioid one. It validated the peripheral-sodium-channel approach and opened a pipeline of follow-on molecules (including efforts in chronic and neuropathic pain).' },
            { h: 'The players' },
            { ul: [
              'Vertex — the leader of the sodium-channel wave (Journavx / suzetrigine) with a deep Nav pipeline; a rare big biotech betting heavily on pain',
              'Pacira BioSciences — a non-opioid pain specialist (Exparel long-acting local anesthetic; Zilretta for osteoarthritis)',
              'Heron Therapeutics and others — non-opioid post-surgical analgesia',
              'Pfizer / Lilly — the cautionary NGF (tanezumab) history; big pharma has largely been burned here before'
            ] },
            { callout: 'The toolkit is old and mostly generic — which is exactly why the peripheral sodium-channel mechanism matters. Blocking pain in the nerves without touching the brain is what makes "effective but non-addictive" scientifically possible, and Journavx\'s 2025 approval proved it can be done.', kind: '' }
          ]
        },
        {
          id: 'pain5',
          title: 'The investing angle — the reimbursement crux',
          body: [
            { p: 'Non-opioid pain has the most seductive setup in the Atlas — a near-universal disease, a societal push away from opioids, and a freshly validated mechanism. And yet the investing lesson is a cautionary one: in pain, a clean scientific win does not automatically become a commercial one. The reason is the competition it is priced against.' },
            { h: 'The reimbursement crux' },
            { p: 'A new non-opioid analgesic does not compete against nothing — it competes against generic opioids, NSAIDs and gabapentinoids that cost pennies. To justify a branded price, it must convince payers that avoiding addiction and side effects is worth paying a large premium for. That is a value-capture problem: non-addictiveness is a benefit to society and to the health system broadly, but the payer writing the cheque may still gate access on price. Formulary position, prior-authorisation hurdles, and how much of the label\'s promise translates into paid prescriptions matter as much as the trial result.' },
            { p: 'This is such a real barrier that policymakers have legislated to fix it. A recurring problem has been that hospitals are paid a single bundled fee for a surgery, giving them no incentive to buy a pricier non-opioid on top — so recent US reforms have begun carving non-opioid analgesics OUT of the surgical bundle for separate reimbursement. When the commercial fate of a validated drug hinges on payment-policy plumbing like this, you are looking at an access-driven market, not a science-driven one.' },
            { h: 'What to actually watch' },
            { ul: [
              'Payer access &amp; pricing — is the drug on formularies at a tier patients can afford, or buried behind prior authorisation?',
              'Real-world uptake vs the label — approval is the start; the question is whether prescriptions and reimbursement follow',
              'The efficacy bar — did it beat placebo AND a real comparator convincingly, given pain\'s placebo problem?',
              'The safety database — depth and duration, because the drug-killing side effect often shows up late (remember NGF)',
              'Breadth of the franchise — acute pain is a beachhead; the bigger prize is extending a validated mechanism into large chronic-pain markets'
            ] },
            { h: 'The reframing' },
            { p: 'Value a pain asset on the gap between its addressable population and its reimbursed reality. The science can be genuinely novel and the label genuinely clean, and the stock can still disappoint if payers will not pay a premium over generics. The winners are drugs that are not just non-addictive, but demonstrably worth their price to the system — and, ideally, a validated mechanism that can travel from a small acute-pain beachhead into far larger chronic-pain markets.' },
            { callout: 'Pain\'s trap for investors is assuming a clean label equals a big market. It does not: the drug is priced against near-free generics, so reimbursement and real-world uptake — not just the trial — decide whether a scientific breakthrough becomes a commercial one.', kind: '' }
          ]
        }
      ]
    },
    {
      id: 'womens',
      title: 'Women\'s Health',
      tier: 3,
      dataKey: 'womens',
      blurb: 'A long-neglected market catching up — huge unmet needs, but a commercial track record that demands discipline.',
      lessons: [
        {
          id: 'wh1',
          title: 'Women\'s health — a neglected market catching up',
          body: [
            { p: 'Women\'s health, as a therapeutic area, covers conditions specific to or disproportionately affecting women across the life course — contraception, menopause, endometriosis and uterine fibroids, fertility, maternal and postpartum health, and post-menopausal bone loss (gynecologic cancers are usually mapped under oncology).' },
            { p: 'What makes it distinctive is not a shared biology but a shared history: neglect. For decades women were under-represented in clinical research, and conditions affecting hundreds of millions were under-studied, under-diagnosed and commercially overlooked. That legacy created enormous unmet need — but also a fraught commercial track record that every investor here has to respect.' },
            { ul: [
              'Vast, under-served populations — menopause touches roughly half of everyone who lives long enough; endometriosis affects on the order of one in ten women',
              'A history of under-investment and under-diagnosis relative to disease burden',
              'A recent surge of interest and capital ("women\'s health" / FemTech) trying to close the gap',
              'But a commercial minefield — small markets, stigma, safety-scare overhangs, and notorious flops'
            ] },
            { callout: 'Women\'s health is the Atlas\'s clearest case of a market defined by historical neglect: the unmet need is real and large, yet turning it into durable commercial franchises has proven unusually hard. Holding both truths at once is the whole skill.', kind: '' }
          ]
        },
        {
          id: 'wh2',
          title: 'The neglect & the opportunity',
          body: [
            { p: 'The modern women\'s-health opportunity is a direct consequence of how the field was historically treated. Understanding the neglect explains both the size of the unmet need and why it is only now being addressed.' },
            { h: 'The historical gap' },
            { ul: [
              'Women were routinely excluded from clinical trials until US policy changes in the early 1990s pushed for their inclusion — so much foundational drug data was generated in men',
              'Conditions like endometriosis are notorious for long diagnostic delays, often many years from first symptoms',
              'Menopause — a universal transition — has been strikingly under-treated, with few dedicated modern therapies until recently',
              'Research funding and commercial investment long lagged the disease burden these conditions carry'
            ] },
            { h: 'Why the opportunity is real' },
            { p: 'Neglect leaves large, identifiable populations with poorly-met needs — which is the raw material of a genuine market. Several conditions affect enormous numbers of people, are chronic or span years of life, and have inadequate existing options. When under-diagnosis is the norm, better awareness and diagnosis can expand the treated population for years. And a cultural shift — patients and clinicians treating these conditions as legitimate medical problems rather than things to endure — is a slow but powerful tailwind.' },
            { callout: 'The investment case starts from a structural fact: decades of neglect left big populations under-served. That is the opportunity. But "large unmet need" is the beginning of the analysis, not the end — the next lesson shows why it so often failed to convert.', kind: '' }
          ]
        },
        {
          id: 'wh3',
          title: 'The commercial minefield',
          body: [
            { p: 'If the unmet need is so large, why has women\'s health been such a difficult place to build durable franchises? Because the area carries a set of commercial hazards that repeatedly turned real medical need into disappointing sales. This is the lesson that keeps investors honest.' },
            { h: 'The safety-scare overhang' },
            { p: 'The defining example is menopausal hormone therapy. For years it was widely prescribed — until a large study (the Women\'s Health Initiative, results from 2002) linked certain hormone therapy to raised risks, triggering a collapse in use almost overnight. Later re-analysis painted a more nuanced, age-dependent picture, but the damage was done: a whole category was under-used for two decades on the strength of one alarming headline. A single safety scare can freeze a market far longer, and far more broadly, than the underlying data warrants.' },
            { h: 'The other hazards' },
            { ul: [
              'Fragmented, sometimes small markets — many conditions are real but support a smaller branded market than the raw prevalence suggests',
              'Stigma and under-treatment — conditions patients are reluctant to discuss stay under-diagnosed and under-treated even when therapies exist',
              'Reimbursement and pricing pressure — especially where cheap generic hormones or contraceptives set the price anchor',
              'A track record of high-profile flops and withdrawals'
            ] },
            { h: 'Cautionary cases' },
            { p: 'The history is littered with them. A drug marketed as a "female Viagra" for low sexual desire drew enormous attention but sold poorly, hampered by modest efficacy, side effects and restrictions. A long-standing preterm-birth drug was pulled from the US market in 2023 after a confirmatory trial failed to show benefit — a reminder that even entrenched women\'s-health products can rest on thin evidence. Each is a warning that attention and need do not guarantee a commercial win.', },
            { callout: 'Women\'s health punishes the naive "huge unmet need = huge market" thesis. Safety scares, stigma, small effective markets, and a real history of flops mean you must underwrite the COMMERCIAL path — not just the medical need.', kind: 'warn' }
          ]
        },
        {
          id: 'wh4',
          title: 'The modern toolkit & the players',
          body: [
            { p: 'Despite the hazards, the last several years have delivered a genuine wave of innovation — new mechanisms addressing conditions that had few good options. Knowing the modern toolkit and who owns it is how you read the field today.' },
            { h: 'The modern mechanisms' },
            { ul: [
              'GnRH antagonists for endometriosis and uterine fibroids — oral hormone-modulating drugs (e.g. elagolix, relugolix combinations) that gave these conditions their first new branded options in years',
              'NK3-receptor antagonists for menopause — a non-hormonal way to treat hot flashes, sidestepping the hormone-therapy safety overhang (fezolinetant was the first approved; others are in development)',
              'Neuroactive steroids for postpartum depression — a new, rapid-acting oral option in an area long neglected',
              'Contraception and fertility — long-acting contraceptives and IVF hormones, the durable backbone of the field'
            ] },
            { h: 'The players' },
            { ul: [
              'Organon — spun off from Merck in 2021 explicitly as a women\'s-health-focused company (contraception like Nexplanon, fertility, plus biosimilars)',
              'AbbVie — Orilissa / Oriahnn (elagolix) in endometriosis and fibroids',
              'Astellas — Veozah (fezolinetant), the non-hormonal menopause breakthrough',
              'Sumitomo (Myovant) — Myfembree / Orgovyx (relugolix)',
              'Bayer and Ferring — long-standing contraception, menopause and fertility franchises'
            ] },
            { callout: 'The mechanisms finally match the need: GnRH antagonists for endometriosis and fibroids, and a non-hormonal option for menopause that dodges the hormone-therapy scare. The science has caught up — the open question is always whether the commercial market does too.', kind: '' }
          ]
        },
        {
          id: 'wh5',
          title: 'The investing angle',
          body: [
            { p: 'Women\'s health offers a seductive pitch — enormous under-served populations, a cultural tailwind, and fresh mechanisms — wrapped around a hard-won lesson: unmet need is necessary but nowhere near sufficient. The discipline here is to underwrite the path from medical need to reimbursed, durable revenue.' },
            { h: 'What to underwrite' },
            { ul: [
              'Effective market size, not prevalence — how many patients are diagnosed, treated, AND on a branded drug, versus the headline population',
              'Reimbursement &amp; pricing — is there a cheap generic hormone or contraceptive setting the price anchor the new drug must beat?',
              'The stigma / diagnosis gap — is the condition one patients and doctors will actively treat, or quietly tolerate?',
              'Safety-overhang risk — could one study or scare freeze the category, as happened to hormone therapy?',
              'Durability — does the condition support years of treatment (chronic, life-stage) or is it a one-off?'
            ] },
            { h: 'The reframing' },
            { p: 'Treat "large unmet need" as the setup, not the thesis. The winners in women\'s health are the drugs that convert genuine need into a diagnosed, reimbursed, de-stigmatised market — often by offering a clearly better or safer mechanism (like a non-hormonal menopause therapy) that gives patients and payers a concrete reason to switch. The renewed capital and attention flowing into the space is a real tailwind, but it does not repeal the commercial hazards; it just makes disciplined underwriting more valuable.' },
            { callout: 'The women\'s-health investor\'s edge is refusing to stop at "the need is huge." Underwrite the market that actually gets diagnosed, reimbursed and treated — and respect that a single safety scare can freeze the whole category. Need is the setup; the commercial path is the thesis.', kind: '' }
          ]
        }
      ]
    }
  ]
};

/* Cross-cutting reference 1 — MODALITY reference (evergreen; properties don't drift). */
window.MODALITIES = [
  { name: 'Small molecule', what: 'A low-molecular-weight chemical, usually an oral pill.',
    good: 'Cheap to make, oral, can reach targets inside cells and cross the blood-brain barrier.',
    limits: 'Less selective (off-target effects); fast, near-total generic erosion at the patent cliff.',
    moat: 'Weak once the patent expires — generics can take ~90%.',
    examples: 'Statins, kinase inhibitors, SGLT2s, oral GLP-1s.' },
  { name: 'Monoclonal antibody (mAb)', what: 'A large engineered protein that binds one specific target.',
    good: 'Highly selective, long half-life (dosed weekly to monthly).',
    limits: 'Injected; cannot easily reach intracellular targets or the brain; costly to manufacture.',
    moat: 'Manufacturing know-how plus a slow biosimilar ramp (erosion is gentler than generics).',
    examples: 'Humira, Keytruda, the checkpoint inhibitors.' },
  { name: 'Antibody-drug conjugate (ADC)', what: 'An antibody carrying a potent cytotoxic payload, joined by a linker.',
    good: 'Delivers chemo largely to the tumour; the bystander effect can widen eligible patients.',
    limits: 'Complex chemistry and manufacturing; toxicity from payload release.',
    moat: 'Linker and payload engineering are hard to copy — the reason ADC specialists get acquired.',
    examples: 'Enhertu, Padcev.' },
  { name: 'Bispecific antibody', what: 'An antibody with two different binding arms.',
    good: 'Can grab a T cell with one arm and a tumour with the other (T-cell engagers); off-the-shelf.',
    limits: 'Engineering complexity; toxicity (cytokine release).',
    moat: 'Format and manufacturing IP.',
    examples: 'T-cell engagers in blood cancers.' },
  { name: 'Cell therapy (CAR-T)', what: 'A patient\'s own immune cells, engineered to attack the cancer.',
    good: 'Dramatic, sometimes curative responses in blood cancers.',
    limits: 'Bespoke per-patient manufacturing, very high cost, serious toxicity; solid tumours resist it.',
    moat: 'Manufacturing and logistics — but per-patient economics cap the market.',
    examples: 'CAR-T in leukaemia, lymphoma, myeloma.' },
  { name: 'Gene therapy', what: 'Adds, replaces or edits a gene, often delivered by a viral vector.',
    good: 'Potentially a one-time cure for a genetic disease.',
    limits: 'Extremely costly, durability often unproven, immunogenicity, hard to manufacture.',
    moat: 'Vector and manufacturing platform.',
    examples: 'Zolgensma (spinal muscular atrophy).' },
  { name: 'RNA therapeutics', what: 'mRNA, siRNA or antisense oligonucleotides that instruct or silence the cell\'s own machinery.',
    good: 'Can drug "undruggable" targets, silence genes, and be designed fast (mRNA vaccines).',
    limits: 'Delivery is the hard part (lipid nanoparticles); durability varies by type.',
    moat: 'Delivery technology and sequence IP.',
    examples: 'mRNA COVID vaccines, Spinraza (antisense), siRNA cholesterol drugs.' },
  { name: 'Peptide', what: 'A short chain of amino acids, often mimicking a natural hormone.',
    good: 'Selective, potent; can reproduce hormone signalling (e.g. GLP-1).',
    limits: 'Usually injected; oral formulation is difficult; manufacturing scale can bottleneck supply.',
    moat: 'Formulation (making it oral) and manufacturing capacity.',
    examples: 'Semaglutide, tirzepatide (the GLP-1 franchises).' },
  { name: 'Radiopharmaceutical', what: 'A targeting molecule linked to a radioactive isotope.',
    good: 'Delivers radiation directly to specific cells; pairs a diagnostic and therapy (theranostics).',
    limits: 'Isotope supply chain (short half-life), specialist administration centres.',
    moat: 'Isotope supply and targeting IP.',
    examples: 'Targeted radioligand therapy in prostate cancer.' },
  { name: 'Live biotherapeutic (microbiome)', what: 'Live micro-organisms — a defined bacterial consortium or a processed fecal-microbiota product — given to reshape the gut microbiome.',
    good: 'A genuinely novel mechanism (tuning the body\'s own microbial ecosystem); the first FDA approvals (2022-23) validated the category, with potential reach into immune, metabolic and gut-brain conditions.',
    limits: 'Living organisms are hard to define and manufacture consistently; the mechanism is often poorly understood; a graveyard of failed trials and uncertain colonisation/durability; reimbursement for a "bug as a drug" is unproven.',
    moat: 'Strain selection and manufacturing know-how plus hard-won clinical validation — but a nascent, still-unsettled barrier to entry.',
    examples: 'Rebyota (Ferring) and Vowst (Seres / Nestle) — the first approved microbiome therapies, both for preventing recurrent C. difficile infection.' }
];

/* Cross-cutting reference 2 — big-pharma PLAYER profiles (VOLATILE; dated, refreshable).
   Figures drawn from the verified area research passes; refresh with ATLAS_DATA. */
window.ATLAS_PLAYERS = {
  updated: '2024-25',
  entries: [
    { name: 'Merck', focus: 'Oncology-led', flagship: 'Keytruda (anti-PD-1) ≈$25B FY2023 — often the best-selling drug in the world', cliff: 'Large Keytruda exclusivity loss looms later this decade', mna: 'Actively acquiring to fill the coming gap', asOf: '2023', pending: false },
    { name: 'AbbVie', focus: 'Immunology, aesthetics, neuroscience', flagship: 'Skyrizi ≈$11.7B + Rinvoq ≈$6.0B (FY2024), plus Botox & migraine', cliff: 'Already survived the Humira cliff via its successors', mna: 'Acquisitive (Cerevel, ImmunoGen)', asOf: '2024', pending: false },
    { name: 'Eli Lilly', focus: 'Cardiometabolic, Alzheimer\'s', flagship: 'Tirzepatide — Mounjaro ≈$8.7B / Zepbound ≈$4.2B (Q1 2026); +56% YoY revenue', cliff: 'Long runway on incretins', mna: 'Bolt-ons around metabolism & neuro', asOf: '2026-Q1', pending: false },
    { name: 'Novo Nordisk', focus: 'Diabetes & obesity (pure-play)', flagship: 'Semaglutide (Ozempic / Wegovy) — the GLP-1 leader', cliff: 'Incretin patents years out; next-gen competition is the risk', mna: 'Buying manufacturing & next-gen obesity assets', asOf: '2026-Q1', pending: true },
    { name: 'Johnson & Johnson', focus: 'Diversified (Pharma + MedTech)', flagship: 'Immunology ≈$17.8B (Stelara, Tremfya); oncology (Darzalex)', cliff: 'Stelara biosimilar erosion underway', mna: 'Steady tuck-ins', asOf: '2024', pending: false },
    { name: 'AstraZeneca', focus: 'Oncology & respiratory', flagship: 'Oncology ≈$20.3B FY2024 — Tagrisso, Calquence, Enhertu (with Daiichi Sankyo)', cliff: 'Diversified; manageable', mna: 'Active in oncology & rare disease', asOf: '2024', pending: false },
    { name: 'Roche', focus: 'Oncology, neuroscience, diagnostics', flagship: 'Broad oncology + ADCs; Ocrevus (MS)', cliff: 'Older oncology biologics facing biosimilars', mna: 'Selective', asOf: '2026-Q1', pending: true },
    { name: 'Novartis', focus: 'Focused RxPharma (post-Sandoz spin-off)', flagship: 'Cosentyx ≈$6.1B (IL-17), Kesimpta ≈$3.2B (MS), Zolgensma ≈$1.2B (SMA)', cliff: 'Entresto exclusivity loss', mna: 'Frequent bolt-ons', asOf: '2024', pending: false },
    { name: 'Bristol Myers Squibb', focus: 'Oncology, cardiovascular, neuroscience', flagship: 'Opdivo, Eliquis; Cobenfy (schizophrenia)', cliff: 'Heavy — Eliquis & Revlimid cliffs pressure the base', mna: 'Buying growth (Karuna $14B for Cobenfy)', asOf: '2024', pending: false },
    { name: 'Pfizer', focus: 'Post-COVID reset, oncology pivot', flagship: 'Acquired Seagen ($43B, 2023) for ADCs; broad portfolio', cliff: 'Several mid-decade losses of exclusivity', mna: 'Large-scale (Seagen)', asOf: '2023', pending: false },
    { name: 'Sanofi / Regeneron', focus: 'Immunology, vaccines, ophthalmology', flagship: 'Dupixent (anti-IL-4/13); Eylea (Regeneron)', cliff: 'Dupixent has a long runway', mna: 'Partnership-driven', asOf: '2026-Q1', pending: true },
    { name: 'Amgen', focus: 'Biologics, biosimilars, obesity entrant', flagship: 'Enbrel, Repatha, biosimilars; MariTide in obesity', cliff: 'Legacy biologics eroding', mna: 'Acquisitive (Horizon)', asOf: '2026-Q1', pending: true }
  ]
};
