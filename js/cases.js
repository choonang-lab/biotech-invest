/* Case Studies — real-company deep dives (educational, NOT advice).
   Two layers, like the Atlas: evergreen narrative in `lessons`, and a
   VOLATILE dated `facts` panel (each row has asOf + pending). Add companies
   to CASES.companies over time; refresh only the facts rows quarterly. */
window.CASES = {
  updated: '2025',
  intro: 'Real companies, studied for the judgment they teach — not the tips they give. Each case traces what happened, why, and what an investor could have seen. Dated figures are illustrative snapshots; the lessons are the point.',
  disclaimer: 'Educational case studies of real, public companies. Dated figures are illustrative snapshots, not live data. Nothing here is investment advice or a recommendation to buy, sell or hold any security.',
  companies: [
    {
      id: 'nektar',
      name: 'Nektar Therapeutics',
      ticker: 'NKTR',
      theme: 'Blow-up',
      tagline: 'A platform, a mega-deal, and a Phase 3 collapse — then a pivot.',
      facts: {
        asOf: '2025', pending: true,
        rows: [
          { label: 'Company', value: 'Nektar Therapeutics (NKTR) — a San Francisco biotech', asOf: '2025', pending: false },
          { label: 'Core platform', value: 'PEGylation — a drug-delivery chemistry that attaches polyethylene glycol (PEG) to a molecule to improve its half-life and properties; historically monetised through partnerships and royalties on partners\' products', asOf: '2025', pending: false },
          { label: 'The mega-deal (2018)', value: 'A Bristol Myers Squibb collaboration on bempegaldesleukin (bempeg, NKTR-214), an experimental IL-2 pathway agonist — one of the largest immuno-oncology deals of its era (≈$1.85B upfront plus a ≈$1.0B equity investment)', asOf: '2018', pending: true },
          { label: 'The collapse (2022)', value: 'The Phase 3 programme of bempeg + Opdivo failed to beat Opdivo alone (lead melanoma trial PIVOT IO-001); BMS ended the collaboration and Nektar cut a large share of its workforce (~70%)', asOf: '2022', pending: true },
          { label: 'Stock impact', value: 'Shares lost the large majority of their value versus the 2018-era highs', asOf: '2022', pending: true },
          { label: 'The pivot', value: 'Refocused on immunology — rezpegaldesleukin (rezpeg, NKTR-358), an IL-2 designed to expand regulatory T cells (Tregs) for autoimmune disease (e.g. atopic dermatitis, alopecia areata)', asOf: '2025', pending: true },
          { label: 'Survival question', value: 'For a post-blowup, catalyst-dependent biotech, cash runway vs burn is the central question — verify current cash position and rezpeg readout timing', asOf: '2025', pending: true }
        ]
      },
      lessons: [
        {
          id: 'nk1',
          title: 'The company & the platform',
          body: [
            { p: 'Nektar Therapeutics is a long-established biotech built around a platform rather than a single drug. Its core technology is PEGylation — a chemistry that attaches polyethylene glycol (PEG) to a drug molecule to change how the body handles it, typically extending its half-life so it can be dosed less often, or improving its stability and tolerability.' },
            { p: 'For years that made Nektar a classic "platform" company: it applied its chemistry to partners\' molecules and to its own, earning upfront payments, milestones and royalties when partnered products succeeded. Several approved drugs have used Nektar\'s technology. This is a real, if modest, business model — you monetise a capability across many shots on goal rather than betting everything on one.' },
            { h: 'Why the platform framing matters' },
            { ul: [
              'Platform value is diversified — many small royalty streams, lower single-point risk',
              'But it is also capped — you capture a slice of someone else\'s drug, not the whole prize',
              'The temptation is always to graduate from platform to product — to own a blockbuster outright',
              'That graduation is where a diversified, lower-risk company can quietly become a binary one'
            ] },
            { callout: 'Nektar spent years as a diversified platform business. The story that follows is what happened when it staked its identity on one wholly-owned drug — the move from "many small bets" to "one enormous bet" is the hinge of the whole case.', kind: '' }
          ]
        },
        {
          id: 'nk2',
          title: 'The mega-deal',
          body: [
            { p: 'Nektar\'s big swing was bempegaldesleukin — "bempeg" (NKTR-214), a PEGylated form of interleukin-2 (IL-2) designed to stimulate the immune system to fight cancer. It arrived at the peak of the immuno-oncology (IO) boom, when checkpoint inhibitors like Opdivo and Keytruda were transforming cancer treatment and every company wanted a drug that would combine with them.' },
            { p: 'In 2018 Nektar signed a landmark collaboration with Bristol Myers Squibb (BMS) to develop bempeg alongside BMS\'s Opdivo. The terms were enormous for a single asset — one of the largest upfront payments in IO history, plus a large equity investment (see the dated facts panel). Overnight, a mid-cap platform company had a big-pharma partner validating its lead drug and a balance sheet transformed.' },
            { h: 'Why it felt like de-risking' },
            { ul: [
              'A sophisticated big-pharma buyer had done deep diligence and paid up — surely that meant the science was sound?',
              'The cash removed financing risk for years — a rare luxury for a clinical-stage story',
              'Combining with an established checkpoint inhibitor felt like a lower-risk path than going it alone',
              'The IO wave made "boost the immune system alongside a checkpoint" the most fashionable thesis in oncology'
            ] },
            { callout: 'A giant upfront payment is validation of a deal\'s terms, not proof the drug works. BMS transferred cash to Nektar; it did not — could not — transfer away the scientific and clinical risk. That distinction is the trap at the heart of this case.', kind: 'warn' }
          ]
        },
        {
          id: 'nk3',
          title: 'The collapse',
          body: [
            { p: 'The excitement rested on early-phase data. Bempeg\'s Phase 1/2 results in melanoma looked striking, and the whole thesis assumed those results would carry into large, randomised Phase 3 trials. They did not.' },
            { p: 'Across 2022, the pivotal Phase 3 programme failed. In the lead melanoma trial (PIVOT IO-001) and other tumour types, adding bempeg to Opdivo did not beat Opdivo alone. The drug that was supposed to supercharge a checkpoint inhibitor added toxicity and cost without a convincing efficacy benefit. BMS and Nektar terminated the collaboration, and Nektar cut a large share of its workforce. The stock, which had commanded a rich valuation on the promise, lost the vast majority of its value.' },
            { h: 'What went wrong — and the warning signs' },
            { ul: [
              'The Phase 2-to-Phase 3 gap — uncontrolled or small early data flattered the drug; the randomised comparison against Opdivo-alone was the real test, and it is a much higher bar',
              'Mechanism doubts — sceptics had questioned whether bempeg truly delivered the IL-2 immune signal it claimed, and whether the early responses were really the drug at work',
              'Single-asset concentration — the company\'s value had come to rest almost entirely on one wholly-owned molecule and one partner',
              'A binary readout — a Phase 3 trial is close to all-or-nothing; concentrating a thesis on one is a position-sizing decision as much as a scientific one'
            ] },
            { callout: 'Bempeg is a textbook binary blow-up: a huge valuation built on early data and a marquee partnership, erased by the randomised trial that was always the true test. The partnership de-risked the balance sheet, never the biology.', kind: 'bad' }
          ]
        },
        {
          id: 'nk4',
          title: 'Reading the wreck & the pivot',
          body: [
            { p: 'After bempeg, Nektar did what surviving biotechs do — it regrouped around what was left. The interesting question for an investor is not just "what went wrong" but "is there a credible second act?" That turns on the remaining pipeline, the cash to fund it, and whether the new bet is genuinely different from the old one.' },
            { h: 'The pivot to immunology' },
            { p: 'Nektar refocused on immunology and its other IL-2 asset, rezpegaldesleukin ("rezpeg", NKTR-358). Cleverly, rezpeg is designed to do almost the opposite of bempeg: rather than revving up the immune system to attack cancer, it aims to expand regulatory T cells (Tregs) — the cells that calm the immune system — to treat autoimmune and inflammatory diseases such as atopic dermatitis and alopecia areata. The same IL-2 platform, pointed at a different problem.' },
            { h: 'How to underwrite a post-blowup pivot' },
            { ul: [
              'Cash runway vs burn — can the company fund its remaining programmes to their next meaningful readout without a dilutive raise from a position of weakness?',
              'Is the new mechanism independently credible — or is it the same unproven biology wearing a new indication?',
              'Concentration, again — has the company simply swapped one binary bet for another, or is there genuine diversification?',
              'Management credibility — the same team that oversold the last thesis is now selling the next one; weigh their track record'
            ] },
            { callout: 'A pivot is not a turnaround until the new asset delivers its own controlled, randomised evidence. Treat rezpeg on its own merits and its own data — the fact that it runs on the platform that already failed once is a reason for scrutiny, not comfort.', kind: '' }
          ]
        },
        {
          id: 'nk5',
          title: 'The investing lessons',
          body: [
            { p: 'Nektar is valuable precisely because it went wrong in instructive ways. Strip out the specifics and it is a compact syllabus of how binary biotech breaks — and how a disciplined investor could have sized the risk.' },
            { h: 'The transferable lessons' },
            { ul: [
              'Validation is not proof — a big-pharma upfront confirms a negotiation, not a mechanism; never let a marquee partner substitute for your own read of the data',
              'Mind the Phase 2-to-Phase 3 cliff — early, uncontrolled data is where drugs look best; the randomised trial against the real standard of care is where most fail',
              'Respect binary concentration — when one wholly-owned asset drives most of the value, a single readout can erase most of the company; that is a position-sizing problem, not just a science one',
              'Listen to credible sceptics — mechanism doubts and short-seller scrutiny of the data preceded the failure; dismissing all bears as noise is how you miss the signal',
              'Platform ≠ product — a diversified royalty platform and a single blockbuster bet are completely different risk profiles, even inside the same ticker'
            ] },
            { h: 'The reframing' },
            { p: 'The cleanest way to have engaged Nektar was to separate the two companies hiding inside it: a modest, diversified PEGylation platform, and a single high-variance IL-2 bet dressed up as de-risked by a mega-deal. Price them separately, size the binary accordingly, and a huge upfront payment reads as what it is — a transfer of cash, not a transfer of risk. Cross-reference the red-flag checklist and the rNPV and dilution tools to practise putting numbers on exactly this.' },
            { callout: 'One line to keep: a mega-deal moves money, not risk. Bempeg\'s partner-funded balance sheet was never a substitute for the randomised trial — and the randomised trial is always the thing that actually decides.', kind: '' }
          ]
        }
      ]
    }
  ]
};
