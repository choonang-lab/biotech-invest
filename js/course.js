/* Course content as data. Each module = { id, title, blurb, lessons[], quiz[] }.
   A lesson body is an array of blocks: {p}, {h}, {ul:[]}, {callout, kind}.
   Expand by adding modules/lessons here — no other file needs to change. */

window.COURSE = [
  {
    id: 'm0',
    title: 'Why biotech is its own game',
    blurb: 'Binary outcomes, probability thinking, and the three questions that govern everything.',
    lessons: [
      {
        id: 'm0l1',
        title: 'The binary nature of drug development',
        body: [
          { p: 'Most equities move on incremental news — a good quarter, a margin beat. Clinical-stage biotech is different: a single trial readout can move a stock 70% in either direction overnight. The outcome is closer to binary than continuous. The drug works, or it does not.' },
          { p: 'This changes everything about how you value and size positions. A discounted-cash-flow model assumes a smooth stream of earnings. A pre-revenue biotech has no earnings and a portfolio of coin-flips. You are not buying a business; you are buying a probability-weighted claim on a future business.' },
          { callout: 'Because outcomes are binary, position sizing is survival, not preference. A concentrated bet on one Phase 3 readout is a coin flip with your capital.', kind: 'warn' },
          { h: 'The three questions' },
          { p: 'Almost every biotech thesis reduces to three questions. Keep returning to them:' },
          { ul: [
            'Does the science actually work? (mechanism, trial data, biological plausibility)',
            'Can they fund it to the finish? (cash runway, dilution, financing risk)',
            'Is the market real? (unmet need, pricing, competition, addressable population)'
          ] },
          { p: 'A company can ace two of these and still be a bad investment if it fails the third. A brilliant drug from a company that runs out of cash six months before approval is a wipeout for shareholders even if the science was right.' }
        ]
      },
      {
        id: 'm0l2',
        title: 'Why DCF barely works here',
        body: [
          { p: 'The professional tool for pre-revenue biotech is not DCF but risk-adjusted net present value (rNPV): peak sales x probability of success x pricing, discounted back, minus the cost to get there. You will build one by hand in the valuation module.' },
          { p: 'The key insight: the probability of success term dominates. Moving a Phase 2 asset from a 30% to a 50% chance of eventual approval can matter more to value than doubling the peak sales estimate. This is why trial readouts, not revenue, are the catalysts that move these stocks.' },
          { callout: 'Learn the historical phase-success rates cold. They are the base rate that every thesis is really an argument against.', kind: '' }
        ]
      }
    ],
    quiz: [
      {
        q: 'A clinical-stage biotech has a promising drug but only 4 months of cash and a major trial readout 9 months away. Which of the three questions is the binding risk?',
        options: ['Does the science work?', 'Can they fund it to the finish?', 'Is the market real?', 'None — the drug is promising'],
        answer: 1,
        why: 'Financing risk is binding: they must raise (diluting you, likely on bad terms) before the catalyst that would prove the science. Great science cannot help if they run out of runway first.'
      },
      {
        q: 'Why does DCF struggle with pre-revenue biotech?',
        options: ['Interest rates are too volatile', 'There are no earnings to discount and outcomes are near-binary', 'Biotech companies do not file financials', 'DCF ignores the balance sheet'],
        answer: 1,
        why: 'No earnings stream exists yet, and the future is a probability-weighted set of binary outcomes — so pros use risk-adjusted NPV instead.'
      }
    ]
  },

  {
    id: 'm2',
    title: 'The development path & success rates',
    blurb: 'Phases, catalysts, FDA designations, and the base rates that anchor every thesis.',
    lessons: [
      {
        id: 'm2l1',
        title: 'From lab to approval',
        body: [
          { p: 'The regulatory path is the value engine of biotech. Each stage a drug clears removes risk and re-rates the company. Know the sequence and what each stage tests:' },
          { ul: [
            'Preclinical — animal and lab data; file an IND to begin human trials',
            'Phase 1 — safety and dosing, small healthy-volunteer or patient group',
            'Phase 2 — does it work? First efficacy signal; the highest-attrition stage',
            'Phase 3 — large, confirmatory, expensive; the make-or-break trial',
            'Regulatory review — FDA/EMA assess; a PDUFA date sets the decision deadline',
            'Approval & launch — then the commercial game begins'
          ] },
          { callout: 'Phase 2 is where the most assets die. A drug that "works in Phase 1" has mostly only been shown to be safe.', kind: 'warn' }
        ]
      },
      {
        id: 'm2l2',
        title: 'Base rates: the numbers to memorize',
        body: [
          { p: 'Across all therapeutic areas, only roughly 1 in 10 drugs that enter Phase 1 eventually reaches approval. Two landmark studies pin the number down: Hay et al. (2014) found a 10.4% likelihood of approval from Phase 1; the BIO/BioMedTracker study (Thomas et al., 2016) found 9.6%. The rate varies enormously by area — and that variation is where judgment lives.' },
          { ul: [
            'Overall Phase 1 to approval: about 10% (Hay 10.4%, BIO 9.6% — an order of magnitude, not a precise constant)',
            'Oncology is well below average — cancer is hard and trials are long',
            'Rare disease and drugs with a validated biomarker tend to do better',
            'Phase 2 is the deadliest transition (~31% success) — the single biggest probability gate, where drugs go to die'
          ] },
          { p: 'Treat these as base rates. When a promoter tells you a drug is "almost certain" to be approved, you are being asked to bet against a 90% historical failure rate. Sometimes that bet is right — but you should know you are making it.' },
          { callout: 'Every bullish thesis is implicitly an argument for why THIS drug beats the base rate. Make that argument explicit.', kind: '' }
        ]
      },
      {
        id: 'm2l3',
        title: 'Catalysts and FDA designations',
        body: [
          { h: 'Catalysts that move stocks' },
          { ul: [
            'Trial data readouts (the big ones)',
            'FDA meeting outcomes, PDUFA decision dates, Advisory Committee (AdComm) votes',
            'Complete Response Letters (CRLs) — a rejection; often brutal for the stock',
            'Partnerships, licensing deals, and buyouts'
          ] },
          { h: 'Designations — signal vs. hype' },
          { p: 'Fast Track, Breakthrough Therapy, Orphan Drug, and Accelerated Approval can speed things up or grant exclusivity — but they are not approvals and do not guarantee one. Promoters love to wave a designation as if it were a green light. It is not.' },
          { callout: 'Breakthrough designation speeds review; it does not mean the drug will work. Read designations as "the FDA is willing to move faster," not "the FDA has decided."', kind: 'warn' }
        ]
      }
    ],
    quiz: [
      {
        q: 'Roughly what fraction of drugs entering Phase 1 eventually get approved?',
        options: ['About 50%', 'About 10%', 'About 80%', 'About 30%'],
        answer: 1,
        why: 'Around 1 in 10 — and lower in oncology. This base rate anchors every valuation.'
      },
      {
        q: 'A company touts its new Breakthrough Therapy designation. What does that actually tell you?',
        options: ['The drug is approved', 'The drug is guaranteed to work', 'The FDA will review it faster, nothing more', 'Peak sales will be high'],
        answer: 2,
        why: 'Designations expedite review or grant exclusivity. They are not approvals and say nothing definitive about whether the drug works.'
      },
      {
        q: 'Which transition is the single biggest probability gate?',
        options: ['Preclinical to Phase 1', 'Phase 1 to Phase 2', 'Phase 2 to Phase 3', 'Approval to launch'],
        answer: 2,
        why: 'Phase 2 to Phase 3 — the confirmatory efficacy gate — is where the most assets fail.'
      }
    ]
  },

  {
    id: 'm6',
    title: 'Wins, failures & scams',
    blurb: 'Case studies and a reusable red-flag checklist. The most memorable module.',
    lessons: [
      {
        id: 'm6l1',
        title: 'Learning from the record',
        body: [
          { h: 'Wins worth studying' },
          { ul: [
            'Vertex in cystic fibrosis — a validated target and biomarker, methodically executed',
            'The mRNA platform proving out at pandemic scale',
            'GLP-1s (the obesity/diabetes wave) — a large real market meeting a working mechanism'
          ] },
          { h: 'Honest failures' },
          { p: 'Not every loss is a scam. Great science regularly fails a Phase 3 for good biological reasons — the Alzheimer\'s field is a graveyard of rational, well-funded bets that did not work. Studying honest failures teaches you humility about base rates.' },
          { h: 'The scam playbook' },
          { p: 'Fraud in biotech has recognizable patterns. Theranos never published peer-reviewed data and hid behind secrecy. Micro-cap pump-and-dumps use paid promotion, reverse-merger shells, and insider selling into retail hype. The next module tool — the red-flag checklist — turns these patterns into a score you can apply to any company.' },
          { callout: 'Secrecy where you would expect peer review is the loudest single red flag. Real science invites scrutiny.', kind: 'bad' }
        ]
      },
      {
        id: 'm6l2',
        title: 'Case study — a win: validated biology, patiently executed',
        body: [
          { p: 'The archetypal biotech win is not a lucky lottery ticket — it is a company that picked a disease with a clear genetic cause, aimed at a validated target, measured progress with an objective biomarker, and then executed patiently over years across a family of drugs rather than betting everything on one.' },
          { h: 'What made it work' },
          { ul: [
            'A disease driven by a known, well-understood mutation — the biology was legible, not hopeful',
            'A biomarker that showed the drug was engaging its target, so trials read out objectively',
            'A platform approach — successive, better drugs and combinations, not a single shot',
            'A large, underserved patient population willing to pay for a real benefit'
          ] },
          { callout: 'The lesson: durable winners usually stack the odds — validated target, objective biomarker, real market — rather than relying on any one of them. This is the profile the science module told you to look for.', kind: '' }
        ]
      },
      {
        id: 'm6l3',
        title: 'Case study — an honest failure: great science, hard biology',
        body: [
          { p: 'Not every large loss is a fraud. Some of biotech\'s most expensive failures were rigorous, well-funded programs run by serious scientists — they simply ran into biology that did not cooperate. Neurodegeneration (Alzheimer\'s especially) is the classic example: a plausible hypothesis, huge investment, and a long line of Phase 3 trials that missed.' },
          { h: 'Why it still failed' },
          { ul: [
            'The underlying hypothesis was plausible but not truly validated in humans',
            'Endpoints were slow and subjective, so signals were hard to read',
            'The disease is biologically complex — one target may not be enough'
          ] },
          { callout: 'The lesson: an honest failure is what the base rate looks like from the inside. This is why you diversify shots on goal and never size a single readout as if it were a sure thing — even brilliant teams lose to the biology.', kind: 'warn' }
        ]
      },
      {
        id: 'm6l4',
        title: 'Case study — a scam: secrecy dressed as innovation',
        body: [
          { p: 'The most instructive frauds are not crude — they are polished. The prototype (Theranos is the famous one, but the pattern recurs in micro-caps) pairs a compelling story and prestigious backers with a refusal to let anyone verify the core claim. The tell was never the pitch; it was the secrecy.' },
          { h: 'The pattern, generalized' },
          { ul: [
            'Extraordinary claims with no peer-reviewed data — results live only in press releases and demos',
            'Secrecy justified as protecting "proprietary" technology, blocking independent validation',
            'Star board members or promoters substituting for evidence',
            'In micro-caps: paid promotion, reverse-merger shells, and insiders selling into the hype they create'
          ] },
          { p: 'Run any of these through the red-flag checklist tool in this app. One flag is noise; several stacked together is the shape of a scam. The defense is boring and reliable: demand independent, peer-reviewed evidence for the central claim, and treat secrecy where scrutiny belongs as disqualifying.' },
          { callout: 'The lesson: you do not need to detect fraud from the inside. You only need to notice that the one thing that would prove the claim is precisely the thing you are not allowed to see.', kind: 'bad' }
        ]
      },
      {
        id: 'm6l5',
        title: 'Real case — a win: Vertex and cystic fibrosis',
        body: [
          { p: 'The textbook validated-target win is Vertex Pharmaceuticals. Cystic fibrosis is caused by known mutations in a single protein (CFTR) — legible biology, not a hopeful guess. Vertex built a serial franchise against it: Kalydeco (2012), Orkambi (2015), Symdeko (2018), and Trikafta/Kaftrio (2019-20), reaching FY2024 revenue of about $11B, almost entirely from CF.' },
          { p: 'Notice the profile: a validated target, an objective way to measure benefit, a real unmet need, and patient execution across a family of drugs rather than one shot. In April 2026, label extensions pushed its reach to roughly 95% of US CF patients.' },
          { callout: 'The catch the bulls under-weight: around 86% of product revenue still comes from one disease. Even a great validated-target franchise can be a concentration bet — a win and a diversified business are not the same thing.', kind: 'warn' }
        ]
      },
      {
        id: 'm6l6',
        title: 'Real case — an honest failure: the Alzheimer\'s amyloid record',
        body: [
          { p: 'Not every large loss is fraud. Alzheimer\'s is the textbook "base rate from the inside." A peer-reviewed review (Kim et al., 2022) counted roughly 98 failed Phase 2/3 compounds against just 2 approvals since 2003 — about a 2% success rate, close to nine times worse than the ~18% rate across all therapeutics.' },
          { p: 'These were rigorous, well-funded programs by serious teams. Many amyloid drugs even hit their biological target — and still produced no cognitive benefit. Aducanumab (Aduhelm) is the emblem: its two Phase 3 trials gave directly conflicting results (one showed slowing, one showed none), were halted for futility and then revived, won a controversial accelerated approval in 2021 over the FDA advisory committee\'s objection, and were discontinued by 2024.' },
          { callout: 'Target engagement is not clinical benefit. An honest failure is what the base rate looks like from the inside — which is exactly why you diversify shots on goal and never size one readout as a sure thing.', kind: 'bad' }
        ]
      },
      {
        id: 'm6l7',
        title: 'Real case — a scam: Theranos and the cost of secrecy',
        body: [
          { p: 'Theranos is the canonical biotech fraud. In 2018 the SEC charged the company and its leaders with raising more than $700M from investors on false claims that its analyzer could run a broad panel of tests from a finger-prick. In reality the device could perform only a few tests; most were run on modified commercial machines made by others. The founders were later criminally convicted.' },
          { p: 'The tell was never the pitch — it was the secrecy. Extraordinary claims lived in demos and press, never in peer-reviewed data, and "proprietary technology" was used to block independent verification.' },
          { callout: 'Secrecy where you would expect peer review is the loudest single red flag. You do not need to detect fraud from the inside — only to notice that the one thing that would prove the claim is exactly what you are not allowed to see.', kind: 'bad' }
        ]
      },
      {
        id: 'm6l8',
        title: 'Real case — a scam: the microcap pump-and-dump pattern',
        body: [
          { p: 'In 2018 the SEC charged a group of 10 individuals and 10 entities in a scheme that allegedly generated over $27M from 2013 to 2018, leaving retail investors holding near-worthless stock. (The defendants settled without admitting or denying the allegations.) It is the textbook microcap pump-and-dump, and the pattern is what matters.' },
          { ul: [
            'Acquire large blocks of a thinly-traded stock at a steep discount',
            'Inflate the price with paid promotion and manipulative trading that fakes volume',
            'Dump the shares onto retail investors drawn in by the hype'
          ] },
          { callout: 'One red flag is noise; several stacked — reverse merger, paid promotion, insider selling, suspicious volume — is the shape of a pump-and-dump. Run any name through the red-flag checklist before the story rushes you.', kind: 'bad' }
        ]
      },
      {
        id: 'm6l9',
        title: 'Real case — a blow-up: safety can undo an approval (Vioxx)',
        body: [
          { p: 'Not every disaster is a failed trial or a fraud. Merck\'s painkiller Vioxx (rofecoxib) was approved and a blockbuster — then undone by safety. Launched in 1999, it was voluntarily withdrawn worldwide on 30 September 2004 after the APPROVe trial showed roughly double the cardiovascular risk versus placebo, a signal that emerged only after about 18 months of use.' },
          { p: 'The fallout outlived the drug: Merck later settled around 27,000 US lawsuits for $4.85 billion (2007). An approval had felt like the finish line; it was not.' },
          { callout: 'An approval is not permanent. Post-marketing safety is a latent, binary risk that can pull a profitable drug from the market years later — and attach billions in liability. "Approved" is not the same as "safe forever."', kind: 'bad' }
        ]
      },
      {
        id: 'm6l10',
        title: 'Real case — a blow-up: the CRL, a hard negative catalyst',
        body: [
          { p: 'A Complete Response Letter (CRL) is the FDA declining to approve a drug as submitted. It is one of the sharpest negative catalysts in biotech — and, critically, a good trial does not make you immune to one.' },
          { p: 'Corcept Therapeutics fell about 50% in a single session (31 December 2025), erasing roughly $3.6B in market value, after a CRL for relacorilant in Cushing\'s syndrome — even though its pivotal GRACE trial had met its primary endpoint; the FDA wanted more efficacy evidence. Separately, Fortress Biotech dropped about 34% (1 October 2025) after a CRL that cited only manufacturing (cGMP) deficiencies, with no efficacy or safety concerns at all.' },
          { ul: [
            'A positive pivotal trial does not guarantee approval',
            'The failure point can be manufacturing (CMC), not the science',
            'A CRL resolves a binary the market was pricing optimistically — hence the violent gap down'
          ] },
          { callout: 'Regulatory risk is binary and it is not only clinical. Ask what has to go right at the FDA — the efficacy bar AND manufacturing readiness — before an approval, not just whether the trial "worked". (A CRL is often indication-specific; relacorilant was later approved in a different cancer.)', kind: 'warn' }
        ]
      },
      {
        id: 'm6l11',
        title: 'Real case — a blow-up: the patent cliff',
        body: [
          { p: 'The most predictable blow-up in pharma is the patent cliff: a blockbuster loses exclusivity and cheaper copies erase most of its revenue. It is legal, expected, and still brutal.' },
          { ul: [
            'Humira (AbbVie) — the best-selling drug ever (~$200B lifetime). US exclusivity ended 31 January 2023; global sales fell about 32% ($21.2B to $14.4B) in one year as biosimilars entered.',
            'Lipitor (Pfizer) — peaked near $12.9B (2006); US patent expired November 2011; revenue collapsed from ~$13B to under $3B within a few years as small-molecule generics took the market.',
            'Revlimid (Celgene/BMS) — the nuance: patent-litigation settlements let generics enter in 2022 but capped near 86% of the brand price under volume limits, softening the cliff into a managed descent to 2026.'
          ] },
          { callout: 'A patent cliff is a known, datable event — which is exactly why it drives the M&amp;A engine: big pharma must keep buying pipeline to replace it. For a small molecule the fall is fast and steep (generics can take ~90%); for a biologic it is slower. Either way, concentration unwinds violently at the cliff.', kind: 'warn' }
        ]
      },
      {
        id: 'm6l12',
        title: 'Real case — a blow-up: an honest Phase 3 flop (GlycoMimetics)',
        body: [
          { p: 'The cleanest recent "honest Phase 3 flop" is GlycoMimetics and its lead drug uproleselan. On 6 May 2024 the company reported that its global, randomized, double-blind, placebo-controlled Phase 3 study in 388 patients with relapsed/refractory AML did not meet its primary endpoint of overall survival. Median survival was 13.0 months on the drug versus 12.3 months on placebo — a hazard ratio of 0.89 whose confidence interval crossed 1.0, i.e. not statistically significant.' },
          { p: 'This was neither fraud nor a sloppy trial: it was a large, well-controlled study that simply showed the drug did not help enough. Note what uproleselan already carried — FDA Breakthrough Therapy and Fast Track designations; neither is an approval, and neither predicted the result. Uproleselan then failed a second pivotal trial the same year — a frontline-AML study missing its event-free-survival endpoint in October 2024 — leaving the company (with roughly $31M in cash) holding a broken lead asset.' },
          { p: 'For the sheer scale a binary readout can reach, look at Immutep: when its Phase 3 lung-cancer trial (its drug combined with Keytruda) was stopped early for futility in March 2026, the shares fell roughly 88% in a single session — most of the company\'s value gone in a day.' },
          { callout: 'Clinical outcomes are near-binary: a well-run pivotal trial can still return a marginal, non-significant result — and take the whole thesis with it. Designations speed the FDA up; they do not tell you the drug works. Size single-readout bets accordingly.', kind: 'bad' }
        ]
      }
    ],
    quiz: [
      {
        q: 'A pre-clinical company avoids peer-reviewed publication, is promoted heavily by paid newsletters, and reached the market via a reverse merger. Best read?',
        options: ['Undiscovered gem', 'Several classic scam red flags stacked together', 'Normal for early biotech', 'Buy before the crowd notices'],
        answer: 1,
        why: 'Secrecy, paid promotion, and a reverse-merger shell are three signature pump-and-dump red flags. Individually noisy; together, a pattern.'
      },
      {
        q: 'Corcept\'s pivotal trial met its primary endpoint, yet the stock fell ~50% in a day. What happened?',
        options: ['The trial was secretly fraudulent', 'The FDA issued a Complete Response Letter (CRL) — a positive trial does not guarantee approval', 'A patent expired', 'Insiders dumped shares'],
        answer: 1,
        why: 'A CRL is a hard negative catalyst. Meeting an endpoint is not the same as clearing the FDA — the regulator can still want more evidence, or find manufacturing (CMC) faults, as with Fortress Biotech.'
      },
      {
        q: 'Vioxx was an approved blockbuster, then withdrawn in 2004 and settled for $4.85B. The lesson?',
        options: ['Approvals are permanent once granted', 'An approval is not the finish line — post-marketing safety is a latent binary risk', 'Safety never affects marketed drugs', 'Only fraud causes withdrawals'],
        answer: 1,
        why: 'Post-marketing safety signals can pull a profitable, approved drug years after launch and attach billions in liability. "Approved" is not "safe forever".'
      },
      {
        q: 'GlycoMimetics\' uproleselan held FDA Breakthrough Therapy and Fast Track designations, yet its Phase 3 in AML missed its primary endpoint. What does that show?',
        options: ['The designations were revoked improperly', 'Designations expedite review but do not predict whether a drug works', 'The trial must have been fraudulent', 'Breakthrough drugs cannot fail'],
        answer: 1,
        why: 'Fast Track and Breakthrough speed the FDA up; they say nothing about efficacy. A well-run pivotal trial can still return a marginal, non-significant result — clinical outcomes are near-binary.'
      }
    ]
  },

  /* --- Stubbed modules: titles present so the map is visible; add lessons to activate --- */
  {
    id: 'm1',
    title: 'The science & the pipeline',
    blurb: 'Modalities, therapeutic areas, and mechanisms — enough to read a company\'s story.',
    lessons: [
      {
        id: 'm1l1',
        title: 'Modalities — the kinds of drugs',
        body: [
          { p: 'You do not need a biology degree, but you do need to know what kind of thing a company is building, because each modality has different economics, manufacturing risk, and failure modes. The main families:' },
          { ul: [
            'Small molecules — classic pills; cheap to make, often oral, but can hit unintended targets',
            'Biologics / antibodies — large engineered proteins; precise, usually injected, harder and costlier to manufacture',
            'Cell & gene therapy — re-engineer or replace cells/genes; potentially one-time cures, but complex, expensive, and durability is often unproven',
            'RNA (mRNA, siRNA) — instruct or silence the body\'s own machinery; proven at scale by mRNA vaccines',
            'Radiopharmaceuticals — deliver radiation to targeted cells; a fast-growing oncology area'
          ] },
          { callout: 'Modality tells you the risk shape. A one-time gene therapy priced in the millions faces reimbursement and durability questions a daily pill never does.', kind: '' }
        ]
      },
      {
        id: 'm1l2',
        title: 'Therapeutic areas — where the drug plays',
        body: [
          { p: 'The disease area shapes the odds, the trial length, and the market. A few you will meet constantly:' },
          { ul: [
            'Oncology — the largest area by far; long trials, below-average success rates, huge markets',
            'Immunology & inflammation — big, durable franchises (think autoimmune diseases)',
            'Neuroscience / CNS — enormous unmet need but a graveyard of failures; the brain is hard',
            'Rare / orphan disease — small populations, but high prices, faster paths, and better odds',
            'Metabolic — the GLP-1 obesity and diabetes wave is the defining recent example'
          ] },
          { callout: 'Area sets your base rate. Oncology runs below the ~10% average; rare disease with a clear genetic cause tends to run above it. Anchor POS to the area before you get excited.', kind: 'warn' }
        ]
      },
      {
        id: 'm1l3',
        title: 'Mechanism, target & biomarker',
        body: [
          { p: 'A company\'s "story" is really three linked claims: a target (the biological thing the drug acts on), a mechanism of action (how acting on it should help), and ideally a biomarker (a measurable signal that the drug is doing what it should).' },
          { p: 'Validated targets and biomarkers de-risk a program dramatically. If a target is already proven to drive a disease, and a biomarker lets a trial read out early and objectively, the odds improve and the story is legible. Vague mechanisms with no biomarker are where hype hides.' },
          { h: 'Questions to ask of any pipeline' },
          { ul: [
            'Is the target validated, or is this the first drug to test the whole idea?',
            'Is there a biomarker that shows the drug is engaging the target?',
            'Does the mechanism plausibly connect to a benefit patients feel?'
          ] },
          { callout: 'Buzzwords over biology is a red flag. A legible mechanism with a biomarker beats a grand story with neither.', kind: 'bad' }
        ]
      }
    ],
    quiz: [
      {
        q: 'A company\'s lead asset is a one-time gene therapy priced in the millions. Which risk is distinctive to this modality (vs. a daily pill)?',
        options: ['It cannot be patented', 'Durability of effect and reimbursement/payment model', 'It has no manufacturing cost', 'It skips clinical trials'],
        answer: 1,
        why: 'One-time therapies raise questions a chronic pill never does: does the effect last, and how does a healthcare system pay a multi-million-dollar one-off? Manufacturing is also complex, not free.'
      },
      {
        q: 'Why does the therapeutic area matter before you judge a specific drug?',
        options: ['It sets marketing costs only', 'It anchors your base-rate probability of success', 'It determines the ticker symbol', 'It has no effect on odds'],
        answer: 1,
        why: 'Success rates vary widely by area — oncology below average, rare genetic disease above. The area is your starting POS before any drug-specific analysis.'
      },
      {
        q: 'Which pipeline is most legible / de-risked, other things equal?',
        options: ['A grand mechanism with no biomarker', 'A validated target with a biomarker that shows target engagement', 'A drug that treats many unrelated diseases', 'A press-release-only program'],
        answer: 1,
        why: 'A validated target plus a biomarker means the biology is proven and trials can read out objectively — the opposite of buzzwords-over-biology.'
      }
    ]
  },
  {
    id: 'm3',
    title: 'Reading the financials',
    blurb: 'Runway, burn, dilution, going-concern language, and trading-below-cash traps.',
    lessons: [
      {
        id: 'm3l1',
        title: 'Cash runway & burn — the survival clock',
        body: [
          { p: 'A pre-revenue biotech is a machine that converts cash into data. The single most useful number you can compute is how long that machine can run: cash and equivalents divided by net burn per quarter. That is the runway.' },
          { p: 'Find both numbers in the latest 10-Q or 10-K. Cash sits at the top of the balance sheet (include short-term investments / marketable securities). Net burn is roughly the cash used in operations per quarter — do not trust management\'s rosy "cash runway into 2027" guidance; compute it yourself from the last two or three quarters, because burn usually rises as trials scale.' },
          { callout: 'Under ~12 months of runway is a financing overhang. The market often caps the stock until the raise clears, because everyone knows dilution is coming.', kind: 'warn' },
          { p: 'The runway calculator in this app does exactly this, and checks whether the runway reaches the next catalyst. That last part is the whole game: a company that must raise BEFORE its value-creating readout is negotiating from weakness.' }
        ]
      },
      {
        id: 'm3l2',
        title: 'Dilution — how biotechs actually fund themselves',
        body: [
          { p: 'Biotechs have no profits, so they fund development by selling new shares. Every raise issues stock, and each new share shrinks every existing share\'s claim on the company. This is dilution, and it is the default cost of being a shareholder here — not an occasional accident.' },
          { h: 'The forms it takes' },
          { ul: [
            'Follow-on offerings — a block of new shares, often at a discount to market',
            'At-the-market (ATM) programs — a steady dribble of shares sold into the open market',
            'Convertible notes and warrants — debt or sweeteners that become shares later'
          ] },
          { p: 'Watch the share count trend across several filings, not just the price. A stock that looks "cheap" can have doubled its share count in two years — the value per share was quietly cut in half regardless of what the chart shows.' },
          { callout: 'The best-funded biotechs raise into strength — right after good news, at a high price, diluting less. The weakest raise into weakness, when they have no choice.', kind: '' }
        ]
      },
      {
        id: 'm3l3',
        title: 'Reading the filing: risk factors & going concern',
        body: [
          { p: 'The most honest section of any biotech filing is the one nobody markets: Risk Factors, and the going-concern language in the notes. Companies are legally required to disclose what could sink them, so this is where the real story lives.' },
          { h: 'Going concern' },
          { p: 'If auditors write that there is "substantial doubt about the company\'s ability to continue as a going concern," take it seriously. It is a formal statement that, on current cash and plans, the company may not survive twelve months. It almost always means a dilutive raise, an asset sale, or worse is imminent.' },
          { h: 'What to scan for' },
          { ul: [
            'Going-concern flags in the auditor\'s notes',
            'Language about needing "additional capital" to fund operations',
            'Debt covenants, milestone obligations, and royalty commitments',
            'Customer / partner concentration (one deal is the whole business)'
          ] },
          { callout: 'A going-concern warning plus a near-term catalyst is a classic setup: the company is racing its own bank balance. Sometimes it wins. Size accordingly.', kind: 'bad' }
        ]
      },
      {
        id: 'm3l4',
        title: 'Trading below cash — value or trap?',
        body: [
          { p: 'Occasionally a biotech\'s market cap falls below the cash on its balance sheet — the market is valuing the entire pipeline at less than zero. This screams "bargain," and sometimes it is. More often it is a trap, and understanding why is a core skill.' },
          { h: 'Why the market may be right' },
          { ul: [
            'The cash is being burned fast — by the time you own it, much of it is gone',
            'A failed trial means the pipeline really is worth little, and management may still burn the cash chasing it',
            'Overhang: a raise or a wind-down will convert that cash into more shares or legal costs'
          ] },
          { p: 'The question is never "is it below cash?" but "what will management DO with the cash, and how fast is it leaving?" A disciplined team that returns cash or pursues a real asset is different from one that will incinerate it on a dead program.' },
          { callout: 'Enterprise value (market cap minus net cash) is the number that matters, not the headline market cap. Below-cash is a starting question, not an answer.', kind: 'warn' }
        ]
      }
    ],
    quiz: [
      {
        q: 'A biotech has $120M cash, burns $30M per quarter, and its pivotal readout is 15 months away. What is the key issue?',
        options: ['Nothing — plenty of cash', 'Only 10 months of runway, so it must raise before the readout', 'The burn rate is too low', 'It should buy back stock'],
        answer: 1,
        why: '$120M / $30M = 4 quarters = ~12 months of runway, short of the 15-month catalyst. They must raise from a position of weakness before the value-creating event.'
      },
      {
        q: 'A stock is flat but its share count rose 90% over two years. What has most likely happened to value per share?',
        options: ['It grew with the company', 'It was roughly halved by dilution', 'It is unaffected by share count', 'It doubled'],
        answer: 1,
        why: 'Nearly doubling the shares without a matching rise in value cuts each share\'s claim roughly in half — even though the price looks unchanged.'
      },
      {
        q: 'A company trades below its net cash. Best first question?',
        options: ['Buy immediately — free pipeline', 'How fast is the cash burning and what will management do with it?', 'Ignore it — always a trap', 'Check the ticker symbol'],
        answer: 1,
        why: 'Below-cash is a starting question. What matters is the burn rate and whether management will preserve, return, or incinerate that cash.'
      }
    ]
  },
  {
    id: 'm4',
    title: 'The players & the ecosystem',
    blurb: 'Big pharma, micro-caps, the M&A logic driving buyouts, and the picks-and-shovels.',
    lessons: [
      {
        id: 'm4l1',
        title: 'The cast: from micro-cap to big pharma',
        body: [
          { p: 'Biotech is not one kind of company. Where a company sits on this spectrum tells you what actually drives its stock:' },
          { ul: [
            'Clinical-stage micro-caps — one or a few assets, no revenue, binary and volatile; the stock is the pipeline',
            'Platform companies — a technology (e.g. an RNA or antibody platform) meant to generate many drugs; you are betting on the engine, not one shot',
            'Mid-cap biotech — has an approved product or two and real revenue; less binary, still growth-driven',
            'Big pharma — diversified, profitable, dividend-paying; grows by acquiring innovation as much as inventing it'
          ] },
          { callout: 'Match your analysis to the tier. Runway and single-readout risk dominate a micro-cap; for big pharma, the patent cliff and pipeline replenishment matter more.', kind: '' }
        ]
      },
      {
        id: 'm4l2',
        title: 'The patent cliff & the M&A engine',
        body: [
          { p: 'The single force that shapes the whole ecosystem is the patent cliff. A blockbuster drug loses exclusivity after its patents expire, and cheap generics or biosimilars then erase most of its revenue — often 80%+ within a couple of years. Big pharma lives in perpetual fear of the cliff.' },
          { p: 'That fear is the buyer. Rather than invent everything in-house, big pharma replenishes its pipeline by acquiring smaller companies with promising or approved drugs. This is why M&A is a structural feature, not an occasional event — and why a de-risked mid-cap with a strong asset can become a takeover target.' },
          { h: 'What makes a company acquisition-attractive' },
          { ul: [
            'A drug that fills a gap left by an expiring blockbuster',
            'De-risked data (positive Phase 3, or already approved)',
            'A large or fast-growing market the acquirer can sell into',
            'A platform that could generate follow-on products'
          ] },
          { callout: 'A takeout premium can be a real source of return — but investing FOR a buyout is speculation. Buy a company worth owning on its own; treat M&A as upside, not the thesis.', kind: 'warn' }
        ]
      },
      {
        id: 'm4l3',
        title: 'Picks and shovels: CROs, CDMOs and tools',
        body: [
          { p: 'In a gold rush, selling picks and shovels can beat digging. Biotech has an equivalent: companies that enable drug development without betting on any single drug working.' },
          { ul: [
            'CROs (Contract Research Organizations) — run clinical trials for others; paid whether or not the drug succeeds',
            'CDMOs (Contract Development & Manufacturing Organizations) — make the drug substance at scale',
            'Tools & instruments — sequencing, lab equipment, reagents used across the whole industry'
          ] },
          { p: 'These businesses trade more like normal companies — real revenue, less binary risk — because they earn from the industry\'s activity rather than any one trial\'s outcome. They are more cyclical (biotech funding drives their demand) but they sidestep the coin-flip.' },
          { callout: 'If you want biotech exposure without single-asset binary risk, the enablers are one way to get it — you are buying the industry\'s activity, not a specific readout.', kind: '' }
        ]
      }
    ],
    quiz: [
      {
        q: 'Why is M&A a structural, recurring feature of big pharma rather than an occasional event?',
        options: ['Regulators require it', 'The patent cliff forces continual pipeline replenishment, often by acquisition', 'It is cheaper than selling drugs', 'Generics companies force mergers'],
        answer: 1,
        why: 'Blockbusters lose exclusivity and revenue at the patent cliff, so big pharma must constantly refill its pipeline — buying smaller innovators is the main way it does so.'
      },
      {
        q: 'A CRO that runs trials for many drug developers has which key advantage over a clinical-stage biotech?',
        options: ['It never needs cash', 'It earns revenue whether or not any single drug succeeds', 'It is guaranteed FDA approval', 'It has no competition'],
        answer: 1,
        why: 'Picks-and-shovels businesses profit from industry activity, not from one trial\'s binary outcome — so they carry far less single-asset risk.'
      },
      {
        q: 'How should a potential buyout factor into a thesis on a de-risked mid-cap?',
        options: ['It should be the entire reason to buy', 'As upside on a company worth owning anyway — not the core thesis', 'It is irrelevant', 'Only if the CEO promises a sale'],
        answer: 1,
        why: 'Investing purely for a takeout is speculation. Buy something worth owning on its merits and treat an acquisition premium as a bonus.'
      }
    ]
  },
  {
    id: 'm5',
    title: 'Valuation & how pros think',
    blurb: 'Build an rNPV, see why probability dominates, and read the buy-the-rumor pattern.',
    lessons: [
      {
        id: 'm5l1',
        title: 'Building an rNPV by hand',
        body: [
          { p: 'Risk-adjusted net present value is the workhorse of biotech valuation. Strip away the spreadsheet and it is four numbers multiplied together, then discounted to today:' },
          { ul: [
            'Peak annual sales — the most the drug earns at commercial maturity',
            'A value multiple — a rough proxy for the stream of profits that peak sales imply',
            'Probability of success (POS) — the chance the drug actually reaches market',
            'A discount back to today — because value years away is worth less now'
          ] },
          { p: 'Unrisked value = peak sales x multiple. Risk-adjusted value = that x POS. Present value = risk-adjusted value discounted over the years to launch. The rNPV toy in this app does exactly this so you can feel how the levers move.' },
          { callout: 'Pros do this per program and per phase, with a separate POS at each stage and the trial costs subtracted. The logic is identical — just more rows.', kind: '' }
        ]
      },
      {
        id: 'm5l2',
        title: 'Why probability dominates',
        body: [
          { p: 'Here is the insight that separates biotech from ordinary equity valuation: the probability-of-success term usually moves value more than the peak-sales estimate. Analysts argue endlessly over peak sales, but a single trial readout that shifts POS from 30% to 60% can double the rNPV overnight — no revenue number changed.' },
          { p: 'This is why clinical-stage stocks trade on data readouts, not on sales. Each phase a drug clears is a step-change in POS, and the stock re-rates to match. It also explains the brutal gap-downs: a failed Phase 3 does not trim the estimate, it collapses POS toward zero and takes most of the value with it.' },
          { callout: 'Test it in the rNPV toy: halve the probability, then instead halve peak sales. Probability almost always hurts more. Respect the base rates from the development-path module — they are your starting POS.', kind: 'warn' },
          { p: 'Practical consequence for sizing: because outcomes are binary and POS is the swing factor, a single clinical-stage name is a coin flip with your capital. Diversification across shots on goal is not timidity here — it is how you survive to let the math play out.' }
        ]
      },
      {
        id: 'm5l3',
        title: 'Catalysts and buy-the-rumor, sell-the-news',
        body: [
          { p: 'Because value concentrates around POS-changing events, biotech has a well-worn trading pattern: a stock runs up into an anticipated catalyst on hope, then sells off when the news lands — even when the news is good — as the people who bought the rumor take profits.' },
          { h: 'Why it happens' },
          { ul: [
            'Anticipation is priced in before the event; the readout only removes uncertainty',
            'A good-but-not-great result can still disappoint a stock priced for perfection',
            'Event-driven traders exit once the binary resolves, whatever the outcome'
          ] },
          { p: 'The lesson is not to trade the pattern — it is to know what is already priced in before an event. If a stock has tripled into a readout, a positive result may do little and a negative one is catastrophic. The reward is asymmetric against you. Ask what expectation the price already embeds.' },
          { callout: 'A great drug and a great investment are different questions. If success is already in the price, even good news can lose you money.', kind: 'bad' }
        ]
      }
    ],
    quiz: [
      {
        q: 'A Phase 2 readout shifts a drug\'s probability of success from 25% to 50%, with peak-sales estimates unchanged. What happens to its rNPV?',
        options: ['Barely moves — sales did not change', 'Roughly doubles', 'Falls', 'Cannot be determined'],
        answer: 1,
        why: 'rNPV scales with POS. Doubling the probability roughly doubles the risk-adjusted value, even though no revenue estimate changed. That is why readouts, not sales, move these stocks.'
      },
      {
        q: 'Which input do analysts fight over most because it swings rNPV the hardest?',
        options: ['The discount rate', 'Probability of success', 'The company\'s office lease', 'Share count'],
        answer: 1,
        why: 'POS is usually the dominant lever — a change there moves value more than an equivalent change in peak sales.'
      },
      {
        q: 'A stock has tripled going into a pivotal readout. The drug hits its endpoint but the stock falls. Best explanation?',
        options: ['The result was secretly bad', 'Success was already priced in — buy the rumor, sell the news', 'rNPV does not apply', 'The FDA rejected it'],
        answer: 1,
        why: 'When a good outcome is already embedded in the price, resolving the uncertainty triggers profit-taking. Knowing what is priced in matters as much as the result.'
      }
    ]
  },
  {
    id: 'm7',
    title: 'Putting it together',
    blurb: 'Run a full thesis end-to-end, pre-mortem it, and build the journal habit.',
    lessons: [
      {
        id: 'm7l1',
        title: 'A thesis, end to end',
        body: [
          { p: 'Everything in this course collapses into one repeatable checklist. Run any company through it and you will have a real thesis instead of a hunch. Answer the three governing questions, in order:' },
          { h: '1. Does the science work?' },
          { ul: [
            'What modality and therapeutic area? What is the base-rate POS for that area?',
            'Is the target validated and is there a biomarker? Or is this buzzwords over biology?',
            'What does the actual trial data say — and at what phase?'
          ] },
          { h: '2. Can they fund it to the finish?' },
          { ul: [
            'Compute the runway (use the calculator). Does it reach the next catalyst?',
            'How much dilution is coming, and from strength or weakness?',
            'Any going-concern flag in the filings?'
          ] },
          { h: '3. Is the market real?' },
          { ul: [
            'Peak sales, pricing, competition, size of the unmet need',
            'Now build a rough rNPV (use the toy). Which lever is the thesis really betting on?',
            'What is already priced in before the next catalyst?'
          ] },
          { callout: 'A thesis that cannot answer all three is not finished. A weak answer on any one — especially funding — can sink an otherwise great story.', kind: 'warn' }
        ]
      },
      {
        id: 'm7l2',
        title: 'The pre-mortem & the journal habit',
        body: [
          { p: 'Before you commit, run a pre-mortem: imagine it is a year from now and the investment failed. Write down exactly why. Forcing yourself to name the failure modes in advance is the single best defense against your own optimism.' },
          { ul: [
            'The Phase 3 misses its primary endpoint',
            'They raise at a 40% discount right before the readout',
            'A competitor reads out first with better data',
            'The FDA demands another trial (a CRL)'
          ] },
          { p: 'Then write it all down in the Decision Journal in this app — your thesis, the catalyst and date, and the pre-mortem — BEFORE the event resolves. When the catalyst lands, come back and compare. This closes the loop: it is how you learn whether you were right for the right reasons, or just lucky.' },
          { callout: 'Judgment compounds only if you record the bet before you know the outcome. Hindsight rewrites memory; the journal does not.', kind: '' },
          { p: 'That habit — thesis, pre-mortem, review — is the whole point of this gym. The calculators and modules give you the tools; the journal is where they turn into skill.' },
          { callout: 'Ready to see it end to end? The Capstone walkthrough runs a full fictional company through all three questions with the numbers computed inline — open it from the home screen or the menu.', kind: '' }
        ]
      }
    ],
    quiz: [
      {
        q: 'You have run a company through the three questions but cannot estimate its runway or dilution. What is the state of your thesis?',
        options: ['Complete — the science is enough', 'Incomplete — the funding question is unanswered and can sink it', 'Complete if peak sales are high', 'Irrelevant — just follow the catalyst'],
        answer: 1,
        why: 'All three questions must be answered. An unanswered funding question is exactly where great science still becomes a wipeout.'
      },
      {
        q: 'What is the purpose of writing a pre-mortem in the journal BEFORE a catalyst resolves?',
        options: ['To predict the exact stock price', 'To name failure modes in advance and later learn if you were right for the right reasons', 'To guarantee a profit', 'To satisfy a regulator'],
        answer: 1,
        why: 'Recording the thesis and its risks before the outcome is known defends against optimism and hindsight bias — it is how judgment actually compounds.'
      }
    ]
  }
];

/* Glossary — extend freely */
window.GLOSSARY = [
  { t: 'IND', d: 'Investigational New Drug application — filed with the FDA to begin human trials.' },
  { t: 'PDUFA date', d: 'The deadline by which the FDA aims to decide on a marketing application. A hard catalyst date.' },
  { t: 'CRL', d: 'Complete Response Letter — the FDA declining to approve as submitted. Usually a sharp negative catalyst.' },
  { t: 'AdComm', d: 'Advisory Committee — an external expert panel that votes to advise the FDA (non-binding, but influential).' },
  { t: 'rNPV', d: 'Risk-adjusted net present value — peak sales x probability of success x pricing, discounted, minus cost.' },
  { t: 'Runway', d: 'How long a company can operate before it runs out of cash: cash divided by burn rate.' },
  { t: 'Burn rate', d: 'Net cash a company consumes per period (typically per quarter).' },
  { t: 'Dilution', d: 'Issuing new shares to raise cash, reducing each existing share\'s claim on the company.' },
  { t: 'Going concern', d: 'An auditor flag that there is substantial doubt the company can continue operating — a serious warning.' },
  { t: 'Orphan drug', d: 'Designation for a drug treating a rare disease, granting incentives and market exclusivity.' },
  { t: 'Breakthrough Therapy', d: 'FDA designation to expedite review of a promising drug. Speeds review; not an approval.' },
  { t: 'Peak sales', d: 'Estimated maximum annual revenue a drug reaches at commercial maturity.' },
  { t: 'Follow-on offering', d: 'A sale of a new block of shares by an already-public company to raise cash, often at a discount to market.' },
  { t: 'ATM program', d: 'At-the-market offering — selling new shares gradually into the open market at prevailing prices; a steady source of dilution.' },
  { t: 'Enterprise value', d: 'Market cap minus net cash (plus debt). What the market is really paying for the business itself, not the cash on hand.' },
  { t: 'Warrant', d: 'A right to buy shares at a set price later; often attached to a raise as a sweetener, and dilutive when exercised.' },
  { t: 'Convertible note', d: 'Debt that can convert into shares later; funds the company now and dilutes shareholders if converted.' },
  { t: 'Financing overhang', d: 'Downward pressure on a stock from an expected dilutive raise; often caps the price until the raise clears.' },
  { t: 'Probability of success (POS)', d: 'The estimated chance a drug reaches approval. In rNPV it is usually the dominant lever — moving it moves value more than peak-sales estimates.' },
  { t: 'Catalyst', d: 'An event that changes a company\'s probability of success or value: a trial readout, PDUFA date, AdComm vote, or deal.' },
  { t: 'Buy the rumor, sell the news', d: 'The pattern where a stock runs up into an anticipated catalyst and sells off once it resolves — sometimes even on good news, because success was already priced in.' },
  { t: 'Modality', d: 'The type of drug: small molecule, biologic/antibody, cell & gene therapy, RNA, radiopharmaceutical. Each has different economics and risks.' },
  { t: 'Small molecule', d: 'A conventional low-molecular-weight drug, often an oral pill; cheap to make but can hit unintended targets.' },
  { t: 'Biologic', d: 'A large engineered protein (e.g. an antibody); precise and usually injected, but harder and costlier to manufacture.' },
  { t: 'Gene therapy', d: 'A treatment that adds, edits, or silences genes — potentially a one-time cure, but complex, costly, and often unproven for durability.' },
  { t: 'Mechanism of action (MoA)', d: 'How a drug produces its effect — the biological chain from the target it acts on to the benefit a patient feels.' },
  { t: 'Target', d: 'The specific biological molecule (protein, gene) a drug acts on. A validated target is one already proven to drive the disease.' },
  { t: 'Biomarker', d: 'A measurable signal (in blood, imaging, genetics) showing a drug is engaging its target or a disease is responding; lets trials read out objectively.' },
  { t: 'Patent cliff', d: 'The sharp revenue drop when a drug loses patent exclusivity and generics/biosimilars enter — often erasing most sales within a couple of years.' },
  { t: 'Biosimilar', d: 'A close (not identical) copy of a biologic drug, allowed after the original loses exclusivity; the biologics analogue of a generic.' },
  { t: 'CRO', d: 'Contract Research Organization — runs clinical trials on behalf of drug developers; a picks-and-shovels business paid regardless of trial outcome.' },
  { t: 'CDMO', d: 'Contract Development & Manufacturing Organization — makes drug substance at scale for other companies.' },
  { t: 'Platform company', d: 'A biotech built around a reusable technology (e.g. mRNA, antibody engineering) meant to generate many drugs, not just one.' },
  { t: 'Takeout premium', d: 'The extra price an acquirer pays over market to buy a company; a potential source of return but a speculative basis for a thesis.' },
  { t: 'Pre-mortem', d: 'Imagining an investment has already failed and writing down why, before committing — a discipline against optimism and hindsight bias.' },
  { t: 'Primary endpoint', d: 'The main pre-specified outcome a trial is designed to measure; whether the drug hits it usually decides success or failure.' },
  { t: 'Blockbuster', d: 'A drug generating roughly $1B+ in annual sales. Their patent expiries create the cliffs big pharma must replace.' },
  { t: 'Generic', d: 'A cheaper copy of a small-molecule drug allowed after patent exclusivity ends, which erodes most of the original\'s sales.' },
  { t: 'Reverse merger', d: 'Going public by merging into an existing shell company rather than a normal IPO; sometimes legitimate, but a common vehicle for pump-and-dumps.' },
  { t: 'Pump-and-dump', d: 'A scheme that hypes a stock (often via paid promotion) so insiders can sell into the inflated price before it collapses.' },
  { t: 'Fast Track', d: 'FDA designation that speeds development and review of drugs for serious conditions. Expedites process; not an approval.' },
  { t: 'Accelerated approval', d: 'FDA pathway allowing approval on a surrogate endpoint (e.g. a biomarker), with confirmatory trials required afterward.' },
  { t: 'CMC / cGMP', d: 'Chemistry, Manufacturing & Controls and current Good Manufacturing Practice — how a drug is made at quality/scale. Manufacturing faults alone can trigger a CRL even when the science is fine.' }
];

/* Rules of thumb — the course distilled. { g: group, r: rule, why: reason }. */
window.RULES = [
  { g: 'The three questions', r: 'Every thesis answers three things, in order: does the science work, can they fund it to the finish, is the market real?', why: 'A great answer on two and a weak one on the third — usually funding — is still a wipeout.' },
  { g: 'The three questions', r: 'A weak funding answer sinks a great science answer.', why: 'Running out of cash six months before approval wipes out shareholders even when the drug works.' },

  { g: 'Development odds', r: 'Only ~1 in 10 drugs entering Phase 1 reaches approval — lower in oncology, higher for rare disease with a validated biomarker.', why: 'This base rate is what every bullish thesis is really arguing against. Make that argument explicit.' },
  { g: 'Development odds', r: 'Phase 2 to Phase 3 is the steepest gate.', why: 'It is the confirmatory-efficacy step where the most assets die; a Phase 1 pass mostly just showed safety.' },
  { g: 'Development odds', r: 'A designation (Breakthrough, Fast Track) speeds review — it is not an approval.', why: 'Promoters wave designations like green lights. They only mean the FDA will move faster.' },

  { g: 'Financials', r: 'Runway = cash / quarterly burn. Under ~12 months is a financing overhang.', why: 'The market often caps the stock until the raise clears, because everyone knows dilution is coming.' },
  { g: 'Financials', r: 'Check whether the runway reaches the next catalyst.', why: 'A company that must raise before its value-creating readout negotiates from weakness.' },
  { g: 'Financials', r: 'Compute burn yourself from recent filings; do not trust "cash into 2027" guidance.', why: 'Burn rises as trials scale, so guidance understates it more often than not.' },
  { g: 'Financials', r: 'Watch the share-count trend, not just the price.', why: 'A stock that looks cheap may simply have diluted its way there.' },
  { g: 'Financials', r: 'Enterprise value (market cap minus net cash) is the number that matters, not headline market cap.', why: 'Below-cash is a starting question — what matters is how fast the cash burns and what management does with it.' },

  { g: 'Valuation', r: 'Probability of success usually moves rNPV more than the peak-sales estimate.', why: 'A readout that shifts POS can double value overnight with no revenue change — why data, not sales, drives these stocks.' },
  { g: 'Valuation', r: 'Know what is already priced in before a catalyst.', why: 'Buy the rumor, sell the news: if success is in the price, even good news can lose you money.' },
  { g: 'Valuation', r: 'Size binary bets small; diversify shots on goal.', why: 'Outcomes are near-binary, so a single clinical-stage name is a coin flip with your capital.' },

  { g: 'Ecosystem', r: 'The patent cliff is the engine: big pharma must keep buying innovation to replace expiring blockbusters.', why: 'That structural need is why M&A recurs — and why a de-risked asset can become a takeover target.' },
  { g: 'Ecosystem', r: 'Treat a buyout as upside on a company worth owning anyway, never the core thesis.', why: 'Investing purely for a takeout is speculation.' },
  { g: 'Ecosystem', r: 'Picks-and-shovels (CROs, CDMOs, tools) earn from industry activity, not one trial\'s outcome.', why: 'They sidestep single-asset binary risk if you want biotech exposure without the coin flip.' },

  { g: 'Scams & red flags', r: 'Secrecy where you would expect peer review is the loudest single red flag.', why: 'Real science invites scrutiny; the tell is that the one thing that would prove the claim is what you cannot see.' },
  { g: 'Scams & red flags', r: 'One red flag is noise; several stacked (paid promotion + reverse merger + insider selling) is a pattern.', why: 'That stack is the shape of a pump-and-dump.' },

  { g: 'Discipline', r: 'Write the thesis and a pre-mortem BEFORE the catalyst resolves.', why: 'Hindsight rewrites memory; the journal does not. It is how judgment compounds instead of just luck.' },
  { g: 'Discipline', r: 'A great drug and a great investment are different questions.', why: 'Price, funding, and expectations decide the second one — not just the biology.' }
];
