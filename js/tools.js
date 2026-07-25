/* Interactive tools. Each exposes render(container) and reads/writes its own DOM.
   Pure calculators — no live market data by design; you type the numbers in. */

window.TOOLS = {};

/* ---- Cash runway calculator ---- */
TOOLS.runway = function (el) {
  el.innerHTML = [
    '<div class="hero"><h1>Cash runway calculator</h1>',
    '<p class="muted">The most useful number in clinical-stage biotech: how many quarters until they must raise. Runway = cash / quarterly burn.</p></div>',
    '<div class="card">',
    fld('cash', 'Cash &amp; equivalents ($M)', 'e.g. 180'),
    fld('burn', 'Net burn per quarter ($M)', 'e.g. 45'),
    fld('months', 'Months until next major catalyst', 'e.g. 9'),
    '<button class="btn" id="calc">Calculate</button>',
    '<div id="out" class="spacer"></div>',
    '</div>'
  ].join('');

  el.querySelector('#calc').onclick = function () {
    var cash = num('cash'), burn = num('burn'), catalyst = num('months');
    var out = el.querySelector('#out');
    if (!(cash > 0) || !(burn > 0)) {
      out.innerHTML = '<div class="callout warn">Enter positive cash and burn values.</div>';
      return;
    }
    var quarters = cash / burn;
    var months = quarters * 3;
    var cls = months >= 18 ? 'good' : months >= 9 ? 'warn' : 'bad';
    var verdict;
    if (months < 6) verdict = 'Critical — a raise is imminent and likely dilutive on weak terms.';
    else if (months < 12) verdict = 'Tight — financing overhang. Expect dilution before the next milestone.';
    else if (months < 18) verdict = 'Adequate — watch for a raise into strength after good news.';
    else verdict = 'Comfortable — funded through likely near-term catalysts.';

    var gap = '';
    if (catalyst > 0) {
      var reaches = months >= catalyst;
      gap = '<div class="callout ' + (reaches ? '' : 'bad') + '">'
        + (reaches
          ? 'Runway (' + months.toFixed(0) + ' mo) covers the ' + catalyst + '-month catalyst. They can likely reach the readout without raising first.'
          : 'Runway (' + months.toFixed(0) + ' mo) does NOT reach the ' + catalyst + '-month catalyst. They must raise BEFORE the value-creating event — a classic weak-hand setup.')
        + '</div>';
    }

    out.innerHTML = [
      '<div class="grid2 spacer">',
      '<div class="card"><div class="muted small">Runway</div><div class="metric ' + cls + '">' + months.toFixed(0) + ' mo</div><div class="muted small">' + quarters.toFixed(1) + ' quarters</div></div>',
      '<div class="card"><div class="muted small">Read</div><div>' + verdict + '</div></div>',
      '</div>', gap,
      '<p class="small muted">Rule of thumb: under ~12 months of runway is a financing overhang — the stock is often capped until the raise clears. Cross-check burn against the last few 10-Qs; guidance understates it more often than not.</p>'
    ].join('');
  };
};

/* ---- rNPV valuation model (multi-stage) ---- */
TOOLS.rnpv = function (el) {
  // Per-phase defaults: transition success (%) and trial cost ($M), rough base rates.
  var STAGES = [
    { key: 'p1', name: 'Phase 1', pos: 52, cost: 25 },
    { key: 'p2', name: 'Phase 2', pos: 29, cost: 50 },
    { key: 'p3', name: 'Phase 3', pos: 58, cost: 250 },
    { key: 'fl', name: 'Filing', pos: 91, cost: 5 }
  ];
  var STARTS = ['Entering Phase 1', 'Entering Phase 2', 'Entering Phase 3', 'Filed / under review'];

  function stageRows(fromIdx) {
    return STAGES.slice(fromIdx).map(function (s) {
      return '<div class="row" style="gap:10px;align-items:flex-end">'
        + '<label class="field" style="flex:1;margin:8px 0"><span>' + s.name + ' success (%)</span><input id="pos_' + s.key + '" type="number" inputmode="decimal" value="' + s.pos + '"></label>'
        + '<label class="field" style="flex:1;margin:8px 0"><span>' + s.name + ' cost ($M)</span><input id="cost_' + s.key + '" type="number" inputmode="decimal" value="' + s.cost + '"></label>'
        + '</div>';
    }).join('');
  }

  el.innerHTML = [
    '<div class="hero"><h1>rNPV valuation model</h1>',
    '<p class="muted">A multi-stage risk-adjusted NPV: each remaining phase has its own probability of success and trial cost. It compounds the odds, discounts the payoff, and subtracts risk-adjusted costs. Teaches where value leaks — not a price target.</p></div>',
    '<div class="card">',
    fld('peak', 'Est. peak annual sales ($M)', 'e.g. 1200'),
    fld('mult', 'Value multiple on peak sales (x)', 'e.g. 3'),
    fld('yrs', 'Years until launch', 'e.g. 8'),
    fld('disc', 'Discount rate (%)', 'e.g. 12'),
    '<label class="field"><span>Current stage (which phases remain)</span><select id="start">',
    STARTS.map(function (s, i) { return '<option value="' + i + '">' + s + '</option>'; }).join(''),
    '</select></label>',
    '<div class="muted small" style="margin:4px 0 2px">Per-phase success &amp; cost (pre-filled with base rates — edit freely):</div>',
    '<div id="stages">' + stageRows(0) + '</div>',
    '<button class="btn" id="calc">Estimate rNPV</button>',
    '<div id="out" class="spacer"></div>',
    '</div>'
  ].join('');

  el.querySelector('#start').onchange = function () {
    el.querySelector('#stages').innerHTML = stageRows(+this.value);
  };

  el.querySelector('#calc').onclick = function () {
    var peak = num('peak'), mult = num('mult'), yrs = num('yrs'), disc = num('disc') / 100;
    var fromIdx = +document.getElementById('start').value;
    var active = STAGES.slice(fromIdx);
    var out = el.querySelector('#out');
    if (!(peak > 0) || !(mult > 0)) {
      out.innerHTML = '<div class="callout warn">Enter positive peak sales and value multiple.</div>';
      return;
    }
    var compound = 1, reach = 1, riskCost = 0, weak = active[0];
    active.forEach(function (s) {
      var p = num('pos_' + s.key) / 100;
      var c = num('cost_' + s.key);
      riskCost += c * reach;   // you pay this cost only if you reach the phase
      reach *= p;              // probability of advancing past it
      compound *= p;
      if (num('pos_' + s.key) < num('pos_' + weak.key)) weak = s;
    });
    var unrisked = peak * mult;
    var valueAtLaunch = unrisked * compound;
    var pvValue = valueAtLaunch / Math.pow(1 + disc, yrs > 0 ? yrs : 0);
    var rnpv = pvValue - riskCost;
    var cls = rnpv > 0 ? 'good' : 'bad';

    out.innerHTML = [
      '<div class="grid2 spacer">',
      '<div class="card"><div class="muted small">Compounded probability of success</div><div class="metric warn">' + (compound * 100).toFixed(1) + '%</div><div class="muted small">product of the remaining phases</div></div>',
      '<div class="card"><div class="muted small">Unrisked value (peak &times; multiple)</div><div class="metric">$' + fmt(unrisked) + 'M</div></div>',
      '</div>',
      '<div class="grid2">',
      '<div class="card"><div class="muted small">PV of risk-adjusted sales</div><div class="metric">$' + fmt(pvValue) + 'M</div></div>',
      '<div class="card"><div class="muted small">Risk-adjusted cost to get there</div><div class="metric">$' + fmt(riskCost) + 'M</div></div>',
      '</div>',
      '<div class="card"><div class="muted small">rNPV (PV of sales &minus; risk-adjusted cost)</div><div class="metric ' + cls + '">$' + fmt(rnpv) + 'M</div></div>',
      '<div class="callout">The steepest gate is <strong>' + weak.name + '</strong> at ' + num('pos_' + weak.key) + '%. Most of the risk-adjustment happens there — which is exactly why a ' + weak.name + ' readout re-rates the stock the most. Nudge that one number and watch the rNPV swing far more than an equal change to peak sales.</div>',
      '<p class="small muted">A teaching model, not a price target. Costs are treated as near-term (lightly discounted); real models time each phase and argue endlessly over every input — which is the whole game.</p>'
    ].join('');
  };
};

/* ---- Red-flag checklist ---- */
TOOLS.redflags = function (el) {
  var flags = [
    { t: 'No peer-reviewed data; results only in press releases', w: 'high' },
    { t: 'Heavy paid promotion / stock-promotion newsletters', w: 'high' },
    { t: 'Reached market via reverse merger into a shell', w: 'high' },
    { t: 'Insiders selling into retail hype', w: 'high' },
    { t: 'Claims to treat many unrelated diseases ("platform cures all")', w: 'high' },
    { t: 'Going-concern warning in the latest filing', w: 'high' },
    { t: 'Under ~12 months of cash runway with no partner', w: 'med' },
    { t: 'Frequent, dilutive at-the-market raises', w: 'med' },
    { t: 'Management with a history of failed/penny-stock ventures', w: 'med' },
    { t: 'Vague mechanism of action; buzzwords over biology', w: 'med' },
    { t: 'Constantly shifting trial endpoints or timelines', w: 'med' },
    { t: 'No credible institutional or specialist-fund ownership', w: 'med' }
  ];
  el.innerHTML = [
    '<div class="hero"><h1>Red-flag checklist</h1>',
    '<p class="muted">Score any company against the classic scam and blow-up patterns. High-weight flags count double. This surfaces pattern risk — it is not a verdict.</p></div>',
    '<div class="card" id="list">',
    flags.map(function (f, i) {
      return '<label class="check"><input type="checkbox" data-w="' + f.w + '" id="f' + i + '">'
        + '<span>' + f.t + ' <span class="tag ' + f.w + '">' + (f.w === 'high' ? 'HIGH' : 'MED') + '</span></span></label>';
    }).join(''),
    '<div id="score" class="spacer"></div>',
    '</div>'
  ].join('');

  var max = flags.reduce(function (s, f) { return s + (f.w === 'high' ? 2 : 1); }, 0);
  function tally() {
    var got = 0;
    el.querySelectorAll('#list input').forEach(function (c) {
      if (c.checked) got += c.dataset.w === 'high' ? 2 : 1;
    });
    var pct = Math.round(got / max * 100);
    var cls = got === 0 ? 'good' : pct < 25 ? 'warn' : 'bad';
    var msg = got === 0 ? 'No flags checked yet.'
      : pct < 25 ? 'A few flags — note them and dig deeper, especially any HIGH ones.'
      : pct < 50 ? 'Meaningful pattern risk. Any single HIGH flag deserves a hard look.'
      : 'Multiple stacked red flags. This is the shape of a pump-and-dump. Extreme caution.';
    el.querySelector('#score').innerHTML =
      '<div class="card"><div class="muted small">Flag score</div><div class="metric ' + cls + '">' + got + ' / ' + max + '</div><div>' + msg + '</div></div>';
  }
  el.querySelectorAll('#list input').forEach(function (c) { c.onchange = tally; });
  tally();
};

/* ---- Dilution simulator ---- */
TOOLS.dilution = function (el) {
  el.innerHTML = [
    '<div class="hero"><h1>Dilution simulator</h1>',
    '<p class="muted">Biotechs fund themselves by selling shares. See what a raise does to your slice of the company — especially when it prices at a discount, as they usually do.</p></div>',
    '<div class="card">',
    fld('shares', 'Shares outstanding before (M)', 'e.g. 100'),
    fld('price', 'Current share price ($)', 'e.g. 8'),
    fld('raise', 'Raise size ($M)', 'e.g. 120'),
    fld('disc', 'Discount to market (%)', 'e.g. 15'),
    '<button class="btn" id="calc">Simulate</button>',
    '<div id="out" class="spacer"></div>',
    '</div>'
  ].join('');

  el.querySelector('#calc').onclick = function () {
    var shares = num('shares'), price = num('price'), raise = num('raise'), disc = num('disc');
    var out = el.querySelector('#out');
    if (!(shares > 0) || !(price > 0) || !(raise > 0)) {
      out.innerHTML = '<div class="callout warn">Enter positive shares, price, and raise size.</div>';
      return;
    }
    var effPrice = price * (1 - (disc > 0 ? disc : 0) / 100);
    if (!(effPrice > 0)) { out.innerHTML = '<div class="callout warn">Discount cannot be 100% or more.</div>'; return; }
    var newShares = raise / effPrice;      // in millions (raise $M / $ per share)
    var total = shares + newShares;
    var dilutionPct = newShares / total * 100;
    var afterStake = shares / total;       // a 1.00% holder now owns this many %
    var cls = dilutionPct < 10 ? 'good' : dilutionPct < 25 ? 'warn' : 'bad';
    var discNote = disc > 0
      ? 'Priced at $' + effPrice.toFixed(2) + ' (a ' + disc + '% discount to $' + price.toFixed(2) + '), the raise transfers value to new investors — existing holders are diluted more than a fair-price raise would.'
      : 'At a fair price this dilutes ownership but not per-share value one-for-one. Most real raises price at a discount — add one above to see the effect.';

    out.innerHTML = [
      '<div class="grid2 spacer">',
      '<div class="card"><div class="muted small">New shares issued</div><div class="metric">' + newShares.toFixed(1) + 'M</div><div class="muted small">total ' + total.toFixed(1) + 'M after</div></div>',
      '<div class="card"><div class="muted small">Ownership dilution</div><div class="metric ' + cls + '">' + dilutionPct.toFixed(1) + '%</div><div class="muted small">a 1.00% stake &rarr; ' + afterStake.toFixed(2) + '%</div></div>',
      '</div>',
      '<div class="callout ' + (disc > 0 ? 'warn' : '') + '">' + discNote + '</div>',
      '<p class="small muted">Watch the share-count trend across filings, not just the price: repeated raises compound. A stock that looks cheap may simply have diluted its way there.</p>'
    ].join('');
  };
};

/* ---- Phase-success probability lookup (illustrative historical base rates) ---- */
TOOLS.phases = function (el) {
  // Approximate, rounded historical figures (order-of-magnitude teaching values,
  // in the spirit of published clinical-success studies). NOT live or precise.
  var AREAS = [
    { a: 'All indications', loa: 8 },
    { a: 'Oncology', loa: 5 },
    { a: 'Hematology', loa: 24 },
    { a: 'Infectious disease', loa: 13 },
    { a: 'Autoimmune / inflammation', loa: 12 },
    { a: 'Metabolic (incl. diabetes)', loa: 9 },
    { a: 'Cardiovascular', loa: 12 },
    { a: 'Neurology / CNS', loa: 6 },
    { a: 'Rare / orphan disease', loa: 17 }
  ];
  // Generic phase-transition ladder (all-indications average), as context.
  var LADDER = [
    { t: 'Phase 1 &rarr; Phase 2', p: 52 },
    { t: 'Phase 2 &rarr; Phase 3', p: 29 },
    { t: 'Phase 3 &rarr; filing', p: 58 },
    { t: 'Filing &rarr; approval', p: 91 }
  ];

  el.innerHTML = [
    '<div class="hero"><h1>Phase-success lookup</h1>',
    '<p class="muted">Approximate historical odds a drug reaches approval, by area. Use these as base rates: every bullish thesis is an argument for why one drug beats them.</p></div>',
    '<div class="card">',
    '<label class="field"><span>Therapeutic area</span><select id="area">',
    AREAS.map(function (x, i) { return '<option value="' + i + '">' + x.a + '</option>'; }).join(''),
    '</select></label>',
    '<div id="out"></div>',
    '</div>',
    '<div class="card"><h3 style="margin-top:0">Phase-transition ladder (all-indications average)</h3>',
    LADDER.map(function (s) {
      return '<div class="check"><span>' + s.t + '</span><span class="tag" style="margin-left:auto">' + s.p + '%</span></div>';
    }).join(''),
    '<p class="small muted">Multiply the ladder and you land near the ~8% all-indications figure. The Phase 2&rarr;3 rung is the steepest fall — the biggest gate.</p></div>',
    '<div class="callout warn">These are rounded, illustrative base rates for learning — not live data, not precise, and they vary by source and period. Treat them as the starting odds you argue against, never as a forecast for a specific drug.</div>'
  ].join('');

  function draw() {
    var x = AREAS[+document.getElementById('area').value];
    var cls = x.loa >= 15 ? 'good' : x.loa >= 8 ? 'warn' : 'bad';
    var rel = x.loa > 8 ? 'above' : x.loa < 8 ? 'below' : 'at';
    document.getElementById('out').innerHTML =
      '<div class="grid2 spacer"><div class="card"><div class="muted small">Phase 1 &rarr; approval</div><div class="metric ' + cls + '">~' + x.loa + '%</div></div>'
      + '<div class="card"><div class="muted small">Vs. the ~8% average</div><div>' + (rel === 'at' ? 'About average.' : 'Runs ' + rel + ' the all-indications average — factor that into your starting probability of success.') + '</div></div></div>';
  }
  document.getElementById('area').onchange = draw;
  draw();
};

/* helpers */
function fld(id, label, ph) {
  return '<label class="field"><span>' + label + '</span><input id="' + id + '" type="number" inputmode="decimal" placeholder="' + (ph || '') + '"></label>';
}
function num(id) { var v = parseFloat(document.getElementById(id).value); return isNaN(v) ? 0 : v; }
function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
