/* App core: hash router, localStorage state, progress, and views. */

var KEY = 'btgym.v1';
var state = load();

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch (e) { return {}; }
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

/* ---- spaced-repetition review deck (simple Leitner) ---- */
function reviewKey(mid, qi) { return mid + ':' + qi; }
function addMiss(mid, qi) {
  state.review = state.review || {};
  state.review[reviewKey(mid, qi)] = { mid: mid, qi: qi, box: 1 };
  save();
}
function reviewDeck() {
  var r = state.review || {};
  return Object.keys(r).map(function (k) { return r[k]; }).filter(function (it) {
    var m = COURSE.find(function (x) { return x.id === it.mid; });
    return m && m.quiz && m.quiz[it.qi];
  });
}
function gradeReview(mid, qi, correct) {
  state.review = state.review || {};
  var k = reviewKey(mid, qi);
  var it = state.review[k];
  if (!it) return;
  if (correct) { it.box = (it.box || 1) + 1; if (it.box >= 3) delete state.review[k]; }
  else { it.box = 1; }
  save();
}

/* ---- progress helpers ---- */
function doneLessons(mod) {
  return mod.lessons.filter(function (l) { return state['lesson.' + l.id]; }).length;
}
function modComplete(mod) {
  if (!mod.lessons.length) return false;
  return doneLessons(mod) === mod.lessons.length && (!mod.quiz.length || state['quiz.' + mod.id]);
}
function overallPct() {
  var mods = COURSE.filter(function (m) { return m.lessons.length; });
  if (!mods.length) return 0;
  var done = mods.filter(modComplete).length;
  return Math.round(done / mods.length * 100);
}
function refreshPill() {
  document.getElementById('progressPill').textContent = overallPct() + '%';
}

/* ---- block renderer for lessons ---- */
function block(b) {
  if (b.p) return '<p>' + b.p + '</p>';
  if (b.h) return '<h3>' + b.h + '</h3>';
  if (b.ul) return '<ul>' + b.ul.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  if (b.callout != null) return '<div class="callout ' + (b.kind || '') + '">' + b.callout + '</div>';
  return '';
}

/* ---- views ---- */
var app = document.getElementById('app');

function viewHome() {
  var pct = overallPct();
  app.innerHTML = [
    '<div class="hero">',
    '<span class="pill">Educational</span><span class="pill">Offline-ready</span>',
    '<h1>Biotech &amp; Pharma Investing</h1>',
    '<p class="muted">A gym for judgment. Learn how the science, the regulatory path, the financials, and the scams actually work — then practice on real tools. No tips, no live prices; you bring the numbers, it teaches you to reason.</p>',
    '<div class="spacer"></div><div class="row"><button class="btn" data-nav="#/modules">Start the course</button>',
    '<button class="btn ghost" data-nav="#/tools/runway">Try a calculator</button></div>',
    '</div>',
    '<div class="card"><div class="row spread"><strong>Your progress</strong><span class="muted">' + pct + '% complete</span></div>',
    '<div class="mod bar" style="margin-top:10px"><i style="width:' + pct + '%"></i></div></div>',
    '<div class="grid2">',
    tile('Course modules', 'Eight modules from first principles to a full mock thesis.', '#/modules'),
    (pct === 100 ? tile('Certificate &#127891;', 'Course complete — view your certificate.', '#/certificate') : ''),
    tile('Capstone walkthrough', 'Analyse a fictional company end to end.', '#/capstone'),
    tile('Industry Atlas', 'Map the sector: areas, market size, players, MOA.', '#/atlas'),
    tile('Review deck' + (reviewDeck().length ? ' — ' + reviewDeck().length + ' due' : ''), 'Spaced repetition of the quiz questions you missed.', '#/review'),
    tile('Final exam' + (state.exam ? ' — best ' + state.exam.bestPct + '%' : ''), 'A cumulative test drawn from every module.', '#/exam'),
    tile('Cash runway calculator', 'How many quarters until they must raise?', '#/tools/runway'),
    tile('rNPV valuation model', 'Per-phase odds and costs; see where value leaks.', '#/tools/rnpv'),
    tile('Dilution simulator', 'What a share raise does to your slice.', '#/tools/dilution'),
    tile('Phase-success lookup', 'Base-rate odds of approval, by area.', '#/tools/phases'),
    tile('Red-flag checklist', 'Score any company against the scam playbook.', '#/tools/redflags'),
    tile('Decision journal', 'Log a thesis before a catalyst; review after.', '#/journal'),
    tile('Rules of thumb', 'The whole course distilled to a cheat sheet.', '#/cheatsheet'),
    tile('Search', 'Find any lesson, term, or rule at once.', '#/search'),
    tile('Glossary', 'The terms you will meet constantly.', '#/glossary'),
    '</div>'
  ].join('');
}
function tile(t, d, nav) {
  return '<div class="card mod" data-nav="' + nav + '"><div class="meta"><div class="t">' + t + '</div><div class="muted small">' + d + '</div></div></div>';
}

function viewModules() {
  app.innerHTML = '<div class="hero"><h1>Course modules</h1><p class="muted">Work top to bottom — each builds on the last. Modules without lessons yet are on the roadmap.</p></div>'
    + COURSE.map(function (m, i) {
      var total = m.lessons.length;
      var done = doneLessons(m);
      var pct = total ? Math.round(done / total * 100) : 0;
      var complete = modComplete(m);
      var soon = total === 0 ? '<span class="pill">Roadmap</span>' : '';
      return '<div class="card mod" data-nav="' + (total ? '#/module/' + m.id : '#/modules') + '">'
        + '<div class="num ' + (complete ? 'done' : '') + '">' + (complete ? '&#10003;' : (i + 1)) + '</div>'
        + '<div class="meta"><div class="t">' + m.title + ' ' + soon + '</div>'
        + '<div class="muted small">' + m.blurb + '</div>'
        + (total ? '<div class="bar"><i style="width:' + pct + '%"></i></div><div class="muted small" style="margin-top:4px">' + done + '/' + total + ' lessons' + (m.quiz.length ? (state['quiz.' + m.id] ? ' &middot; quiz passed' : ' &middot; quiz pending') : '') + '</div>' : '')
        + '</div></div>';
    }).join('');
}

function viewModule(id) {
  var m = COURSE.find(function (x) { return x.id === id; });
  if (!m) return viewModules();
  app.innerHTML = '<div class="hero"><h1>' + m.title + '</h1><p class="muted">' + m.blurb + '</p></div>'
    + m.lessons.map(function (l) {
      var done = state['lesson.' + l.id];
      return '<div class="card mod" data-nav="#/lesson/' + m.id + '/' + l.id + '">'
        + '<div class="num ' + (done ? 'done' : '') + '">' + (done ? '&#10003;' : '&#8250;') + '</div>'
        + '<div class="meta"><div class="t">' + l.title + '</div></div></div>';
    }).join('')
    + (m.quiz.length
      ? '<div class="card mod" data-nav="#/quiz/' + m.id + '"><div class="num ' + (state['quiz.' + m.id] ? 'done' : '') + '">' + (state['quiz.' + m.id] ? '&#10003;' : '?') + '</div><div class="meta"><div class="t">Module quiz</div><div class="muted small">' + m.quiz.length + ' questions</div></div></div>'
      : '');
}

function viewLesson(mid, lid) {
  var m = COURSE.find(function (x) { return x.id === mid; });
  var l = m && m.lessons.find(function (x) { return x.id === lid; });
  if (!l) return viewModules();
  var done = state['lesson.' + l.id];
  app.innerHTML = '<div class="card lesson"><h2>' + l.title + '</h2>'
    + l.body.map(block).join('')
    + '<div class="spacer"></div><div class="row spread">'
    + '<button class="btn ghost small" data-nav="#/module/' + m.id + '">Back</button>'
    + '<button class="btn small" id="mark">' + (done ? '&#10003; Completed' : 'Mark complete') + '</button>'
    + '</div></div>';
  document.getElementById('mark').onclick = function () {
    state['lesson.' + l.id] = true; save(); refreshPill();
    var next = m.lessons[m.lessons.indexOf(l) + 1];
    location.hash = next ? '#/lesson/' + m.id + '/' + next.id : '#/module/' + m.id;
  };
}

function viewQuiz(mid) {
  var m = COURSE.find(function (x) { return x.id === mid; });
  if (!m || !m.quiz.length) return viewModules();
  var answers = {};
  render();
  function render() {
    app.innerHTML = '<div class="hero"><h1>' + m.title + ' — quiz</h1><p class="muted">Answer to see the reasoning. Missed ones are worth revisiting.</p></div>'
      + m.quiz.map(function (q, qi) {
        var chosen = answers[qi];
        return '<div class="card"><strong>' + (qi + 1) + '. ' + q.q + '</strong>'
          + q.options.map(function (opt, oi) {
            var cls = '';
            if (chosen != null) {
              if (oi === q.answer) cls = 'correct';
              else if (oi === chosen) cls = 'wrong';
            }
            return '<button class="qopt ' + cls + '" data-q="' + qi + '" data-o="' + oi + '"' + (chosen != null ? ' disabled' : '') + '>' + opt + '</button>';
          }).join('')
          + (chosen != null ? '<div class="callout ' + (chosen === q.answer ? '' : 'warn') + '">' + (chosen === q.answer ? 'Correct. ' : 'Not quite. ') + q.why + '</div>' : '')
          + '</div>';
      }).join('')
      + (Object.keys(answers).length === m.quiz.length ? finish() : '');
    app.querySelectorAll('.qopt').forEach(function (b) {
      b.onclick = function () {
        var qi = +b.dataset.q, oi = +b.dataset.o;
        if (answers[qi] == null && oi !== m.quiz[qi].answer) addMiss(m.id, qi);
        answers[qi] = oi; render();
      };
    });
    var done = app.querySelector('#done');
    if (done) done.onclick = function () { state['quiz.' + m.id] = true; save(); refreshPill(); location.hash = '#/module/' + m.id; };
  }
  function finish() {
    var right = m.quiz.filter(function (q, qi) { return answers[qi] === q.answer; }).length;
    return '<div class="card"><div class="row spread"><div><div class="muted small">Score</div><div class="metric">' + right + '/' + m.quiz.length + '</div></div>'
      + '<button class="btn" id="done">Save &amp; finish</button></div></div>';
  }
}

function viewReview() {
  var session = reviewDeck();
  if (!session.length) {
    app.innerHTML = '<div class="hero"><h1>Review</h1><p class="muted">Questions you miss in module quizzes collect here for spaced repetition.</p></div>'
      + '<div class="card"><p>Nothing to review right now. Miss a quiz question and it will show up here — answer it correctly a couple of times and it graduates out.</p>'
      + '<button class="btn ghost" data-nav="#/modules">Back to modules</button></div>';
    return;
  }
  var answered = {};
  render();
  function render() {
    app.innerHTML = '<div class="hero"><h1>Review — ' + session.length + ' due</h1><p class="muted">Missed questions, re-served. Get one right to advance it; a couple of passes and it graduates out of the deck.</p></div>'
      + session.map(function (it) {
        var m = COURSE.find(function (x) { return x.id === it.mid; });
        var q = m.quiz[it.qi];
        var k = reviewKey(it.mid, it.qi);
        var chosen = answered[k];
        return '<div class="card"><div class="muted small">' + m.title + ' &middot; box ' + (it.box || 1) + '</div><strong>' + q.q + '</strong>'
          + q.options.map(function (opt, oi) {
            var cls = '';
            if (chosen != null) {
              if (oi === q.answer) cls = 'correct';
              else if (oi === chosen) cls = 'wrong';
            }
            return '<button class="qopt ' + cls + '" data-k="' + k + '" data-o="' + oi + '"' + (chosen != null ? ' disabled' : '') + '>' + opt + '</button>';
          }).join('')
          + (chosen != null ? '<div class="callout ' + (chosen === q.answer ? '' : 'warn') + '">' + (chosen === q.answer ? 'Correct — advancing. ' : 'Not quite — back to box 1. ') + q.why + '</div>' : '')
          + '</div>';
      }).join('')
      + '<div class="card"><div class="row spread"><span class="muted small">Answered items update their box automatically.</span><button class="btn ghost small" data-nav="#/">Done</button></div></div>';
    app.querySelectorAll('.qopt').forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.k, oi = +b.dataset.o;
        var it = (state.review || {})[k];
        if (answered[k] == null) {
          var m = COURSE.find(function (x) { return x.id === (it ? it.mid : null); });
          var correct = it && oi === m.quiz[it.qi].answer;
          answered[k] = oi;
          if (it) gradeReview(it.mid, it.qi, correct);
        }
        render();
      };
    });
  }
}

function viewExam() {
  // Interleave questions across modules (deterministic "shuffle-lite" — no Math.random).
  var pool = [];
  var maxQ = COURSE.reduce(function (a, m) { return Math.max(a, m.quiz.length); }, 0);
  for (var qi = 0; qi < maxQ; qi++) {
    COURSE.forEach(function (m) { if (m.quiz[qi]) pool.push({ mid: m.id, qi: qi, q: m.quiz[qi] }); });
  }
  var idx = 0, answers = {}, finished = false;
  render();

  function score() { return pool.filter(function (it, k) { return answers[k] === it.q.answer; }).length; }

  function render() {
    if (finished) return renderSummary();
    var item = pool[idx], q = item.q, chosen = answers[idx];
    app.innerHTML = '<div class="hero"><h1>Final exam</h1><p class="muted">Questions from every module, mixed together. Miss one and it goes to your review deck.</p></div>'
      + '<div class="card"><div class="muted small">Question ' + (idx + 1) + ' of ' + pool.length + '</div><div class="mod bar" style="margin:8px 0 4px"><i style="width:' + ((idx + 1) / pool.length * 100) + '%"></i></div></div>'
      + '<div class="card"><strong>' + q.q + '</strong>'
      + q.options.map(function (opt, oi) {
        var cls = '';
        if (chosen != null) { if (oi === q.answer) cls = 'correct'; else if (oi === chosen) cls = 'wrong'; }
        return '<button class="qopt ' + cls + '" data-o="' + oi + '"' + (chosen != null ? ' disabled' : '') + '>' + opt + '</button>';
      }).join('')
      + (chosen != null ? '<div class="callout ' + (chosen === q.answer ? '' : 'warn') + '">' + (chosen === q.answer ? 'Correct. ' : 'Not quite. ') + q.why + '</div>' : '')
      + '</div>'
      + (chosen != null ? '<div class="row spread"><span class="muted small">' + (idx + 1) + '/' + pool.length + '</span><button class="btn" id="ex_next">' + (idx < pool.length - 1 ? 'Next' : 'See score') + '</button></div>' : '');
    app.querySelectorAll('.qopt').forEach(function (b) {
      b.onclick = function () {
        var oi = +b.dataset.o;
        if (answers[idx] == null && oi !== q.answer) addMiss(item.mid, item.qi);
        answers[idx] = oi; render();
      };
    });
    var n = document.getElementById('ex_next');
    if (n) n.onclick = function () {
      if (idx < pool.length - 1) { idx++; render(); window.scrollTo(0, 0); }
      else { finished = true; recordExam(); render(); window.scrollTo(0, 0); }
    };
  }
  function recordExam() {
    var right = score(), pct = Math.round(right / pool.length * 100);
    var best = (state.exam && state.exam.bestPct) || 0;
    state.exam = { lastPct: pct, lastRight: right, total: pool.length, bestPct: Math.max(best, pct) };
    save();
  }
  function renderSummary() {
    var right = score(), pct = Math.round(right / pool.length * 100), pass = pct >= 70, missed = pool.length - right;
    app.innerHTML = '<div class="hero"><h1>Exam complete</h1></div>'
      + '<div class="card"><div class="muted small">Score</div><div class="metric ' + (pass ? 'good' : 'bad') + '">' + right + ' / ' + pool.length + '</div>'
      + '<div>' + pct + '% — ' + (pass ? 'pass (70% threshold).' : 'below the 70% pass threshold.') + '</div></div>'
      + (missed > 0
        ? '<div class="callout">' + missed + ' missed question' + (missed === 1 ? '' : 's') + ' added to your review deck for spaced repetition.</div>'
        : '<div class="callout">Perfect run — nothing to review.</div>')
      + '<div class="row"><button class="btn" data-nav="#/review">Go to review</button><button class="btn ghost" id="ex_retake">Retake</button><button class="btn ghost" data-nav="#/">Home</button></div>';
    var r = document.getElementById('ex_retake');
    if (r) r.onclick = function () { idx = 0; answers = {}; finished = false; render(); window.scrollTo(0, 0); };
  }
}

function viewJournal() {
  var entries = state.journal || [];
  app.innerHTML = '<div class="hero"><h1>Decision journal</h1><p class="muted">Write your thesis and what would make you wrong BEFORE the catalyst. Revisit after it resolves. This is where judgment compounds.</p></div>'
    + '<div class="card">'
    + '<label class="field"><span>Company / ticker</span><input id="j_co" placeholder="e.g. ACME Bio"></label>'
    + '<label class="field"><span>Thesis — why this beats the base rate</span><textarea id="j_th"></textarea></label>'
    + '<label class="field"><span>Catalyst &amp; date</span><input id="j_cat" placeholder="e.g. Phase 2 readout, Q4"></label>'
    + '<label class="field"><span>What would make me wrong (pre-mortem)</span><textarea id="j_pm"></textarea></label>'
    + '<button class="btn" id="j_save">Save entry</button></div>'
    + '<div class="card"><div class="row spread"><strong>Backup</strong><span class="muted small">' + entries.length + ' entr' + (entries.length === 1 ? 'y' : 'ies') + '</span></div>'
    + '<p class="small muted">Your journal lives only in this browser. Export it to keep a copy; import to restore or move devices. All local — nothing leaves your machine.</p>'
    + '<div class="row"><button class="btn ghost small" id="j_json">Export JSON</button>'
    + '<button class="btn ghost small" id="j_md">Export Markdown</button>'
    + '<label class="btn ghost small" for="j_file" style="cursor:pointer">Import JSON</label>'
    + '<input id="j_file" type="file" accept="application/json,.json" style="display:none"></div>'
    + '<div id="j_import_status" class="small muted" style="margin-top:8px"></div></div>'
    + '<div id="j_list">' + renderEntries(entries) + '</div>';
  document.getElementById('j_save').onclick = function () {
    var co = document.getElementById('j_co').value.trim();
    if (!co) return;
    entries = state.journal || [];
    entries.unshift({
      co: co, th: val('j_th'), cat: val('j_cat'), pm: val('j_pm'),
      when: new Date().toISOString().slice(0, 10)
    });
    state.journal = entries; save();
    location.hash = '#/journal'; route();
  };
  function val(id) { return document.getElementById(id).value.trim(); }

  // ---- backup: export / import (all local, no network) ----
  document.getElementById('j_json').onclick = function () {
    var data = JSON.stringify({ type: 'btgym.journal', version: 1, entries: state.journal || [] }, null, 2);
    downloadFile('decision-journal.json', 'application/json', data);
  };
  document.getElementById('j_md').onclick = function () {
    downloadFile('decision-journal.md', 'text/markdown', journalToMarkdown(state.journal || []));
  };
  document.getElementById('j_file').onchange = function (e) {
    var f = e.target.files[0];
    var status = document.getElementById('j_import_status');
    if (!f) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var parsed = JSON.parse(reader.result);
        var list = Array.isArray(parsed) ? parsed : parsed.entries;
        var added = mergeJournal(list);
        status.textContent = added + ' new entr' + (added === 1 ? 'y' : 'ies') + ' imported.';
        route();
      } catch (err) {
        status.textContent = 'Could not read that file — expected a journal JSON export.';
      }
    };
    reader.readAsText(f);
  };
}

function downloadFile(name, mime, text) {
  var blob = new Blob([text], { type: mime });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 0);
}
function journalToMarkdown(entries) {
  if (!entries.length) return '# Decision journal\n\n_No entries yet._\n';
  return '# Decision journal\n\n' + entries.map(function (e) {
    return '## ' + (e.co || 'Untitled') + ' (' + (e.when || '') + ')\n\n'
      + (e.cat ? '**Catalyst:** ' + e.cat + '\n\n' : '')
      + (e.th ? '**Thesis:** ' + e.th + '\n\n' : '')
      + (e.pm ? '**Pre-mortem:** ' + e.pm + '\n\n' : '');
  }).join('---\n\n');
}
function mergeJournal(list) {
  if (!Array.isArray(list)) throw new Error('not a list');
  var cur = state.journal || [];
  var keyOf = function (e) { return (e.co || '') + '|' + (e.when || '') + '|' + (e.th || ''); };
  var seen = {};
  cur.forEach(function (e) { seen[keyOf(e)] = true; });
  var added = 0;
  list.forEach(function (e) {
    if (e && typeof e.co === 'string') {
      var norm = { co: e.co, th: e.th || '', cat: e.cat || '', pm: e.pm || '', when: e.when || '' };
      var k = keyOf(norm);
      if (!seen[k]) { cur.push(norm); seen[k] = true; added++; }
    }
  });
  state.journal = cur; save();
  return added;
}

function renderEntries(entries) {
  if (!entries.length) return '<p class="muted small">No entries yet.</p>';
  return entries.map(function (e, i) {
    return '<div class="card"><div class="row spread"><strong>' + esc(e.co) + '</strong><span class="muted small">' + e.when + '</span></div>'
      + (e.cat ? '<div class="small"><span class="tag">Catalyst</span> ' + esc(e.cat) + '</div>' : '')
      + (e.th ? '<p class="small"><em>Thesis:</em> ' + esc(e.th) + '</p>' : '')
      + (e.pm ? '<p class="small"><em>Pre-mortem:</em> ' + esc(e.pm) + '</p>' : '')
      + '<button class="btn ghost small" data-del="' + i + '">Delete</button></div>';
  }).join('');
}

function viewGlossary() {
  app.innerHTML = '<div class="hero"><h1>Glossary</h1><input id="gsearch" placeholder="Search terms..."></div><div id="glist"></div>';
  function draw(q) {
    q = (q || '').toLowerCase();
    document.getElementById('glist').innerHTML = GLOSSARY
      .filter(function (g) { return !q || g.t.toLowerCase().indexOf(q) >= 0 || g.d.toLowerCase().indexOf(q) >= 0; })
      .map(function (g) { return '<div class="card"><strong>' + g.t + '</strong><div class="muted small">' + g.d + '</div></div>'; })
      .join('') || '<p class="muted small">No match.</p>';
  }
  document.getElementById('gsearch').oninput = function () { draw(this.value); };
  draw('');
}

function viewCapstone() {
  var M = function (n) { return '$' + Math.round(n).toLocaleString('en-US') + 'M'; };
  function calc(CO) {
    var runwayMo = CO.cash / CO.burn * 3;
    var compound = 1, reach = 1, riskCost = 0;
    CO.stages.forEach(function (s) { riskCost += s.cost * reach; reach *= s.pos; compound *= s.pos; });
    var unrisked = CO.peak * CO.mult;
    var pv = unrisked * compound / Math.pow(1 + CO.disc, CO.yrsToLaunch);
    var eff = CO.price * (1 - CO.discountPct / 100);
    var newSh = CO.raise / eff, total = CO.sharesOut + newSh;
    return {
      runwayMo: runwayMo, reaches: runwayMo >= CO.catalystMo, compound: compound,
      pv: pv, riskCost: riskCost, rnpv: pv - riskCost, dil: newSh / total * 100, after: CO.sharesOut / total
    };
  }
  function standardSteps(CO, c, narr) {
    return [
      { t: 'Meet the company', h: '<p><span class="pill">Fictional — for practice only</span></p>' + narr.intro },
      { t: 'Q1 — Does the science work?', h: narr.science },
      { t: 'Q2 — Can they fund it to the finish?', h:
        '<p>Cash ' + M(CO.cash) + ', burning ' + M(CO.burn) + ' per quarter. Runway = cash / burn:</p>'
        + '<div class="grid2"><div class="card"><div class="muted small">Runway</div><div class="metric ' + (c.runwayMo >= 18 ? 'good' : c.runwayMo >= 9 ? 'warn' : 'bad') + '">' + c.runwayMo.toFixed(0) + ' mo</div></div>'
        + '<div class="card"><div class="muted small">Next catalyst</div><div class="metric">' + CO.catalystMo + ' mo</div></div></div>'
        + '<div class="callout ' + (c.reaches ? 'warn' : 'bad') + '">' + (c.reaches
          ? 'Runway (' + c.runwayMo.toFixed(0) + ' mo) reaches the ' + CO.catalystMo + '-month readout, but not by much — a financing overhang. Expect a raise near the edge.'
          : 'Runway (' + c.runwayMo.toFixed(0) + ' mo) does NOT reach the ' + CO.catalystMo + '-month readout. They must raise from weakness BEFORE the value-creating event — the classic weak-hand setup.') + '</div>' },
      { t: 'Q3 — Is the market real? (rNPV)', h:
        '<p>Peak sales ' + M(CO.peak) + ', a ' + CO.mult + '&times; multiple, ' + CO.yrsToLaunch + ' years to launch at ' + (CO.disc * 100) + '%. The remaining phases compound:</p>'
        + '<div class="grid2"><div class="card"><div class="muted small">Compounded POS</div><div class="metric warn">' + (c.compound * 100).toFixed(1) + '%</div></div>'
        + '<div class="card"><div class="muted small">rNPV (PV &minus; cost)</div><div class="metric ' + (c.rnpv > 0 ? 'good' : 'bad') + '">' + M(c.rnpv) + '</div></div></div>'
        + '<div class="muted small">PV of risk-adjusted sales ' + M(c.pv) + ' minus ' + M(c.riskCost) + ' of risk-adjusted cost.</div>' + narr.market },
      { t: 'The dilution you should expect', h:
        '<p>A raise of ' + M(CO.raise) + ' at a ' + CO.discountPct + '% discount to the $' + CO.price + ' price:</p>'
        + '<div class="grid2"><div class="card"><div class="muted small">Ownership dilution</div><div class="metric ' + (c.dil >= 25 ? 'bad' : 'warn') + '">' + c.dil.toFixed(1) + '%</div></div>'
        + '<div class="card"><div class="muted small">A 1.00% stake becomes</div><div class="metric">' + c.after.toFixed(2) + '%</div></div></div>'
        + '<div class="callout ' + (c.dil >= 25 ? 'bad' : 'warn') + '">Factor this in before the readout, not after. A discounted raise into weakness hits existing holders with both dilution and value transfer.</div>' },
      { t: 'Pre-mortem & how the thesis comes together', h:
        '<p>Imagine it is a year out and this failed. The likely reasons:</p><ul>' + narr.premortem.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'
        + narr.conclusion
        + '<div class="callout">The tools give you the numbers; your judgment — written down before the catalyst — turns them into skill. Log a thesis in the Decision Journal and revisit it after the readout.</div>'
        + '<p class="small muted">Reminder: ' + CO.name + ' is fictional and this is educational only — not investment advice.</p>' }
    ];
  }
  function scamSteps(name) {
    return [
      { t: 'Meet the company', h: '<p><span class="pill">Fictional — for practice only</span></p>'
        + '<p><strong>' + name + '</strong> is a preclinical company whose promotional deck claims a single platform that treats <em>multiple cancers and Alzheimer\'s</em>. It went public via a <strong>reverse merger</strong> and is heavily featured in paid stock newsletters.</p>' },
      { t: 'Q1 — Does the science work?', h: '<p>Before any math, run the red-flag checklist. ' + name + ' stacks several flags at once:</p>'
        + '<ul><li>No peer-reviewed data — results live only in press releases</li><li>Claims to treat many unrelated diseases (platform cures all)</li><li>Reached the market via a reverse-merger shell</li><li>Heavy paid promotion; insiders selling into the hype</li></ul>'
        + '<div class="callout bad">Verdict: the science question fails at the first gate. Secrecy where you would expect peer review is the loudest single red flag.</div>' },
      { t: 'Why you stop here', h: '<p>Notice what just happened — you never reached Questions 2 and 3. The reported cash, burn, and "peak sales" all come from promotional materials. Numbers you cannot trust are not worth modelling.</p>'
        + '<div class="callout bad">One red flag is noise. This many stacked together is the shape of a pump-and-dump. The rNPV of a fabricated story is meaningless.</div>' },
      { t: 'The checklist verdict', h: '<p>Score ' + name + ' on the Red-flag checklist tool and it lights up with several HIGH-weight flags. The defense is boring and reliable: demand independent, peer-reviewed evidence for the central claim, and treat secrecy where scrutiny belongs as disqualifying.</p>' },
      { t: 'The lesson', h: '<p>You do not need to detect fraud from the inside. You only need to notice that the one thing that would prove the claim is exactly the thing you are not allowed to see.</p>'
        + '<div class="callout">Most of investing is saying no. The checklist exists so a polished story cannot rush you past the questions that matter.</div>'
        + '<p class="small muted">Reminder: ' + name + ' is fictional and this is educational only — not investment advice.</p>' }
    ];
  }

  var CASES = [
    { tag: 'Plausible oncology — a coherent thesis', kind: 'standard',
      data: { name: 'Meridian Therapeutics', cash: 140, burn: 35, catalystMo: 10, sharesOut: 120, price: 7, raise: 100, discountPct: 15, peak: 900, mult: 3, yrsToLaunch: 7, disc: 0.12,
        stages: [{ n: 'Phase 2', pos: 0.29, cost: 50 }, { n: 'Phase 3', pos: 0.58, cost: 250 }, { n: 'Filing', pos: 0.91, cost: 5 }] },
      narr: {
        intro: '<p><strong>Meridian Therapeutics</strong> is a clinical-stage oncology company: a small molecule against a <em>validated</em> target, with a biomarker, entering <strong>Phase 2</strong>. You will run it through the three questions using the same tools as the rest of the app.</p>',
        science: '<p>Oncology sits <em>below</em> the ~10% average — cancer is hard. But the target is <strong>validated</strong> and there is a <strong>biomarker</strong>, so Phase 2 can read out objectively.</p><div class="callout">Verdict: plausible, not a lottery ticket — the legible profile the science module said to look for.</div>',
        market: '<div class="callout">The thesis is really a bet on the <strong>Phase 2 readout</strong> — clearing it would re-rate that POS sharply upward. That is where the value is.</div>',
        premortem: ['The Phase 2 misses its primary endpoint (the base-rate outcome)', 'They raise at a steep discount right before the readout', 'A competitor reads out first with better data'],
        conclusion: '<p>Legible science, a tight-but-workable balance sheet, and a positive rNPV that hinges almost entirely on one readout — with dilution coming either way. That is a <em>coherent thesis</em>, not a verdict. Whether it is a good <em>investment</em> depends on what is already priced in and how you size a binary bet.</p>' } },
    { tag: 'Micro-cap — great science, wrong balance sheet', kind: 'standard',
      data: { name: 'Cirrus Bio', cash: 30, burn: 15, catalystMo: 11, sharesOut: 40, price: 3, raise: 40, discountPct: 25, peak: 600, mult: 3.5, yrsToLaunch: 6, disc: 0.13,
        stages: [{ n: 'Phase 2', pos: 0.40, cost: 45 }, { n: 'Phase 3', pos: 0.65, cost: 200 }, { n: 'Filing', pos: 0.91, cost: 5 }] },
      narr: {
        intro: '<p><strong>Cirrus Bio</strong> is a micro-cap in a <em>rare genetic disease</em> — a validated target and a small but high-priced market, entering <strong>Phase 2</strong>. The science looks good. The balance sheet does not.</p>',
        science: '<p>Rare disease with a clear genetic cause runs <em>above</em> the average base rate, and the target is validated. On the science alone, this is the strong end of the spectrum.</p><div class="callout">Verdict: the most attractive of the three questions here — which is exactly why the trap is so easy to fall into.</div>',
        market: '<div class="callout warn">Note the rNPV can be positive and the science sound — and it still may not matter. The next question is the binding one.</div>',
        premortem: ['They run out of cash and raise at a punishing discount before the readout', 'A down-round wipes out most of your ownership', 'Dilution stacks across several raises to the finish line'],
        conclusion: '<p>Great science, a real market — and a balance sheet that forces a raise from weakness before the value-creating event. The binding constraint is <strong>Question 2</strong>. This is how a promising drug still becomes a poor shareholder outcome: you were right about the biology and still lost.</p>' } },
    { tag: 'A promotional red-flag stack', kind: 'scam', data: { name: 'Apex NovaCure' } }
  ];

  var caseIdx = null, i = 0;
  render();
  function stepsFor(cs) { return cs.kind === 'scam' ? scamSteps(cs.data.name) : standardSteps(cs.data, calc(cs.data), cs.narr); }
  function renderPicker() {
    app.innerHTML = '<div class="hero"><h1>Capstone: analyse a company</h1><p class="muted">Pick a fictional case and walk it end to end through the three questions. Each teaches a different pattern.</p></div>'
      + CASES.map(function (cs, idx) {
        return '<div class="card mod" data-pick="' + idx + '"><div class="num">' + (idx + 1) + '</div><div class="meta"><div class="t">' + cs.data.name + '</div><div class="muted small">' + cs.tag + '</div></div></div>';
      }).join('');
    app.querySelectorAll('[data-pick]').forEach(function (el) {
      el.onclick = function () { caseIdx = +el.getAttribute('data-pick'); i = 0; render(); window.scrollTo(0, 0); };
    });
  }
  function render() {
    if (caseIdx === null) return renderPicker();
    var cs = CASES[caseIdx], steps = stepsFor(cs), s = steps[i];
    app.innerHTML = '<div class="hero"><h1>' + cs.data.name + '</h1><p class="muted">Fictional case &middot; ' + cs.tag + '</p></div>'
      + '<div class="card"><div class="muted small">Step ' + (i + 1) + ' of ' + steps.length + ' &middot; ' + s.t + '</div>'
      + '<div class="mod bar" style="margin:8px 0 4px"><i style="width:' + ((i + 1) / steps.length * 100) + '%"></i></div></div>'
      + '<div class="card lesson"><h2>' + s.t + '</h2>' + s.h + '</div>'
      + '<div class="row spread">'
      + '<button class="btn ghost small" id="cap_back">' + (i === 0 ? 'All cases' : 'Back') + '</button>'
      + (i < steps.length - 1
        ? '<button class="btn" id="cap_next">Next</button>'
        : '<button class="btn" data-nav="#/journal">Finish &rarr; open journal</button>')
      + '</div>';
    document.getElementById('cap_back').onclick = function () { if (i === 0) { caseIdx = null; } else { i--; } render(); window.scrollTo(0, 0); };
    var n = document.getElementById('cap_next'); if (n) n.onclick = function () { if (i < steps.length - 1) { i++; render(); window.scrollTo(0, 0); } };
  }
}

function viewCertificate() {
  var mods = COURSE.filter(function (m) { return m.lessons.length; });
  var pct = overallPct();
  if (pct < 100) {
    var remaining = mods.filter(function (m) { return !modComplete(m); });
    app.innerHTML = '<div class="hero"><h1>Certificate</h1><p class="muted">Complete every module and its quiz to unlock your certificate.</p></div>'
      + '<div class="card"><div class="row spread"><strong>Progress</strong><span class="muted">' + pct + '% complete</span></div><div class="mod bar" style="margin-top:10px"><i style="width:' + pct + '%"></i></div></div>'
      + '<div class="card"><h3 style="margin-top:0">Still to do</h3>'
      + remaining.map(function (m) {
        var ll = m.lessons.length - doneLessons(m), qz = m.quiz.length && !state['quiz.' + m.id];
        var bits = [];
        if (ll) bits.push(ll + ' lesson' + (ll > 1 ? 's' : ''));
        if (qz) bits.push('quiz');
        return '<div class="check"><span>' + m.title + '</span><span class="muted small" style="margin-left:auto">' + bits.join(' + ') + '</span></div>';
      }).join('')
      + '</div><div class="row"><button class="btn" data-nav="#/modules">Back to modules</button></div>';
    return;
  }
  var quizzesPassed = mods.filter(function (m) { return m.quiz.length && state['quiz.' + m.id]; }).length;
  var quizzesTotal = mods.filter(function (m) { return m.quiz.length; }).length;
  var exam = state.exam;
  var name = state.certName || '';
  var attr = function (s) { return esc(s).replace(/"/g, '&quot;'); };
  var date = new Date().toISOString().slice(0, 10);
  app.innerHTML = '<div class="hero"><h1>Certificate of completion</h1><p class="muted">You have finished every module and quiz. Nicely done.</p></div>'
    + '<div class="card" id="cert" style="text-align:center;border:2px solid var(--accent);padding:28px">'
    + '<div style="font-size:34px">&#129514;</div>'
    + '<div class="muted small" style="letter-spacing:2px;text-transform:uppercase;margin-top:6px">Biotech Thinking Gym</div>'
    + '<h2 style="margin:8px 0 2px">Certificate of Completion</h2>'
    + '<p class="muted small">This certifies that</p>'
    + '<div id="cert_who" class="metric" style="font-size:24px">' + (name ? esc(name) : '—') + '</div>'
    + '<p class="small">has completed the Biotech &amp; Pharma Investing course:</p>'
    + '<div class="grid2" style="margin:12px 0"><div class="card"><div class="muted small">Modules</div><div class="metric good">' + mods.length + '/' + mods.length + '</div></div>'
    + '<div class="card"><div class="muted small">Quizzes passed</div><div class="metric good">' + quizzesPassed + '/' + quizzesTotal + '</div></div></div>'
    + (exam
      ? '<div class="callout">Final exam best score: <strong>' + exam.bestPct + '%</strong>' + (exam.bestPct >= 70 ? ' — passed.' : ' — keep practising to pass (70%).') + '</div>'
      : '<div class="callout warn">Take the Final exam to add your score here.</div>')
    + '<p class="small muted">' + date + ' &middot; educational course — not investment advice</p>'
    + '</div>'
    + '<label class="field"><span>Your name (appears on the certificate)</span><input id="cert_name" value="' + attr(name) + '" placeholder="Type your name"></label>'
    + '<div class="row"><button class="btn" id="cert_print">Print / save as PDF</button>' + (exam ? '' : '<button class="btn ghost" data-nav="#/exam">Take the exam</button>') + '</div>';
  var inp = document.getElementById('cert_name');
  inp.oninput = function () { state.certName = this.value; save(); document.getElementById('cert_who').textContent = this.value || '—'; };
  document.getElementById('cert_print').onclick = function () { window.print(); };
}

function lessonText(l) {
  return l.body.map(function (b) {
    if (b.p) return b.p;
    if (b.h) return b.h;
    if (b.ul) return b.ul.join(' ');
    if (b.callout != null) return b.callout;
    return '';
  }).join(' ');
}

function viewSearch() {
  app.innerHTML = '<div class="hero"><h1>Search</h1><input id="q" placeholder="Search lessons, glossary, rules..." autocomplete="off"></div><div id="sres"></div>';
  var el = document.getElementById('q');
  el.oninput = function () { draw(this.value); };
  el.focus();
  draw('');
  function draw(q) {
    q = (q || '').trim().toLowerCase();
    var res = document.getElementById('sres');
    if (q.length < 2) { res.innerHTML = '<p class="muted small">Type at least two characters to search across every lesson, term, and rule.</p>'; return; }
    var out = [];
    COURSE.forEach(function (m) {
      m.lessons.forEach(function (l) {
        if ((m.title + ' ' + l.title + ' ' + lessonText(l)).toLowerCase().indexOf(q) >= 0) {
          out.push({ type: 'Lesson', nav: '#/lesson/' + m.id + '/' + l.id, title: l.title, sub: m.title });
        }
      });
    });
    GLOSSARY.forEach(function (g) {
      if ((g.t + ' ' + g.d).toLowerCase().indexOf(q) >= 0) out.push({ type: 'Term', nav: '#/glossary', title: g.t, sub: g.d });
    });
    RULES.forEach(function (r) {
      if ((r.r + ' ' + r.why).toLowerCase().indexOf(q) >= 0) out.push({ type: 'Rule', nav: '#/cheatsheet', title: r.r, sub: r.g });
    });
    if (!out.length) { res.innerHTML = '<p class="muted small">No matches for &ldquo;' + esc(q) + '&rdquo;.</p>'; return; }
    res.innerHTML = '<p class="muted small">' + out.length + ' result' + (out.length === 1 ? '' : 's') + '</p>'
      + out.map(function (o) {
        return '<div class="card mod" data-nav="' + o.nav + '"><div class="meta"><div class="t">' + esc(o.title) + ' <span class="tag">' + o.type + '</span></div><div class="muted small">' + esc(o.sub) + '</div></div></div>';
      }).join('');
  }
}

function viewCheatsheet() {
  var groups = [];
  RULES.forEach(function (r) {
    var g = groups.find(function (x) { return x.g === r.g; });
    if (!g) { g = { g: r.g, items: [] }; groups.push(g); }
    g.items.push(r);
  });
  app.innerHTML = '<div class="hero"><h1>Rules of thumb</h1><p class="muted">The whole course distilled to the lines worth keeping. Skim before you analyse a company; each rule traces back to a module.</p></div>'
    + groups.map(function (grp) {
      return '<div class="card"><h3 style="margin-top:0">' + grp.g + '</h3>'
        + grp.items.map(function (r) {
          return '<div class="callout" style="margin:10px 0"><strong>' + r.r + '</strong><div class="muted small" style="margin-top:4px">' + r.why + '</div></div>';
        }).join('')
        + '</div>';
    }).join('');
}

function viewTool(name) {
  if (TOOLS[name]) TOOLS[name](app);
  else viewHome();
}

function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

/* ---- Industry Atlas ---- */
function findAreaDef(aid) { return ATLAS.areas.find(function (a) { return a.id === aid; }); }

function atlasPanel(data) {
  var badge = function (f) { return (f && f.asOf) ? ' <span class="tag' + (f.pending ? ' med' : '') + '">as of ' + f.asOf + (f.pending ? ' &middot; to verify' : '') + '</span>' : ''; };
  var toVerify = data.pending ? ' <span class="tag med">to verify</span>' : '';
  var moa = (data.moaClasses || []).map(function (m) { return '<li>' + m + '</li>'; }).join('');
  var drugs = (data.landmarkDrugs || []).map(function (x) { return '<div class="check"><span><strong>' + x.name + '</strong> — <span class="muted">' + x.moa + '</span></span></div>'; }).join('');
  var players = (data.keyPlayers || []).map(function (p) { return '<div class="check"><span>' + p.name + (p.franchise ? ' — <span class="muted">' + p.franchise + '</span>' : '') + '</span></div>'; }).join('');
  return '<div class="card"><div class="row spread"><strong>At a glance</strong><span class="muted small">snapshot ' + data.asOf + '</span></div>'
    + '<div class="grid2 spacer">'
    + '<div class="card"><div class="muted small">Market size' + badge(data.marketSize) + '</div><div class="metric">' + (data.marketSize ? data.marketSize.value : '—') + '</div><div class="muted small">' + (data.marketSize && data.marketSize.note ? data.marketSize.note : '') + '</div></div>'
    + '<div class="card"><div class="muted small">Dominant MOAs / modalities</div><ul class="small">' + moa + '</ul></div>'
    + '</div>'
    + '<h3>Landmark drugs' + toVerify + '</h3>' + drugs
    + '<h3>Key players' + toVerify + '</h3>' + players
    + '<p class="small muted">Figures are a dated, illustrative snapshot — not live data; refreshed periodically (quarterly).</p></div>';
}

function viewAtlas() {
  var d = ATLAS_DATA;
  app.innerHTML = '<div class="hero"><h1>Industry Atlas</h1><p class="muted">' + ATLAS.framework.intro + '</p><div class="spacer"></div><span class="pill">Snapshot ' + d.updated + '</span><span class="pill">Figures dated &amp; refreshed</span></div>'
    + '<div class="card"><div class="muted small">' + d.disclaimer + '</div></div>'
    + '<h3 style="margin:18px 4px 6px">Part A — How to read the landscape</h3>'
    + ATLAS.framework.lessons.map(function (l) { return '<div class="card mod" data-nav="#/atlas/L/' + l.id + '"><div class="meta"><div class="t">' + l.title + '</div></div></div>'; }).join('')
    + '<h3 style="margin:18px 4px 6px">The Atlas — by therapeutic area</h3>'
    + ATLAS.areas.map(function (a) { return '<div class="card mod" data-nav="#/atlas/A/' + a.id + '"><div class="num">T' + a.tier + '</div><div class="meta"><div class="t">' + a.title + '</div><div class="muted small">' + a.blurb + '</div></div></div>'; }).join('')
    + '<h3 style="margin:18px 4px 6px">Cross-cutting reference</h3>'
    + '<div class="card mod" data-nav="#/atlas/modalities"><div class="meta"><div class="t">Modality reference</div><div class="muted small">Small molecule &rarr; mAb &rarr; ADC &rarr; cell/gene &rarr; RNA — what each is good at and its moat.</div></div></div>'
    + '<div class="card mod" data-nav="#/atlas/players"><div class="meta"><div class="t">Big-pharma players</div><div class="muted small">The majors — flagship franchises, cliff exposure, M&amp;A appetite.</div></div></div>';
}

function viewAtlasLesson(lid) {
  var l = ATLAS.framework.lessons.find(function (x) { return x.id === lid; });
  if (!l) return viewAtlas();
  app.innerHTML = '<div class="card lesson"><h2>' + l.title + '</h2>' + l.body.map(block).join('')
    + '<div class="spacer"></div><button class="btn ghost small" data-nav="#/atlas">Back to Atlas</button></div>';
}

function viewAtlasArea(aid) {
  var a = findAreaDef(aid);
  if (!a) return viewAtlas();
  var data = ATLAS_DATA.areas[a.dataKey || a.id];
  app.innerHTML = '<div class="hero"><h1>' + a.title + '</h1><p class="muted">' + a.blurb + '</p></div>'
    + (data ? atlasPanel(data) : '')
    + '<h3 style="margin:18px 4px 6px">Deep dive</h3>'
    + a.lessons.map(function (l) { return '<div class="card mod" data-nav="#/atlas/A/' + a.id + '/' + l.id + '"><div class="meta"><div class="t">' + l.title + '</div></div></div>'; }).join('')
    + '<div class="spacer"></div><button class="btn ghost small" data-nav="#/atlas">Back to Atlas</button>';
}

function viewAtlasAreaLesson(aid, lid) {
  var a = findAreaDef(aid);
  var l = a && a.lessons.find(function (x) { return x.id === lid; });
  if (!l) return viewAtlasArea(aid);
  app.innerHTML = '<div class="card lesson"><h2>' + l.title + '</h2>' + l.body.map(block).join('')
    + '<div class="spacer"></div><button class="btn ghost small" data-nav="#/atlas/A/' + aid + '">Back to ' + a.title + '</button></div>';
}

function viewModalities() {
  app.innerHTML = '<div class="hero"><h1>Modality reference</h1><p class="muted">The kinds of drug — what each is good at, what it costs, and how defensible it is. The modality is often the moat, or the liability.</p></div>'
    + MODALITIES.map(function (m) {
      return '<div class="card"><h3 style="margin-top:0">' + m.name + '</h3><p class="small">' + m.what + '</p>'
        + '<p class="small"><strong>Good at:</strong> ' + m.good + '</p>'
        + '<p class="small"><strong>Limits:</strong> ' + m.limits + '</p>'
        + '<p class="small"><strong>Moat:</strong> ' + m.moat + '</p>'
        + '<p class="small muted">e.g. ' + m.examples + '</p></div>';
    }).join('')
    + '<button class="btn ghost small" data-nav="#/atlas">Back to Atlas</button>';
}

function viewPlayers() {
  var d = ATLAS_PLAYERS;
  app.innerHTML = '<div class="hero"><h1>Big-pharma players</h1><p class="muted">Who the majors are — their flagship franchises, cliff exposure and appetite for M&amp;A. Figures are a dated snapshot, not live data.</p><div class="spacer"></div><span class="pill">Snapshot ' + d.updated + '</span></div>'
    + d.entries.map(function (p) {
      var badge = ' <span class="tag' + (p.pending ? ' med' : '') + '">as of ' + p.asOf + (p.pending ? ' &middot; to verify' : '') + '</span>';
      return '<div class="card"><div class="row spread"><strong>' + p.name + '</strong><span class="muted small">' + p.focus + badge + '</span></div>'
        + '<p class="small"><strong>Flagship:</strong> ' + p.flagship + '</p>'
        + '<p class="small"><strong>Cliff:</strong> ' + p.cliff + '</p>'
        + '<p class="small"><strong>M&amp;A:</strong> ' + p.mna + '</p></div>';
    }).join('')
    + '<p class="small muted">Franchises, revenues and cliffs shift with every earnings report and deal — treat this as a dated, illustrative snapshot, refreshed periodically.</p>'
    + '<button class="btn ghost small" data-nav="#/atlas">Back to Atlas</button>';
}

/* ---- router ---- */
function route() {
  var h = location.hash || '#/';
  var p = h.replace(/^#\//, '').split('/');
  refreshPill();
  if (p[0] === '' ) viewHome();
  else if (p[0] === 'modules') viewModules();
  else if (p[0] === 'module') viewModule(p[1]);
  else if (p[0] === 'lesson') viewLesson(p[1], p[2]);
  else if (p[0] === 'quiz') viewQuiz(p[1]);
  else if (p[0] === 'review') viewReview();
  else if (p[0] === 'exam') viewExam();
  else if (p[0] === 'certificate') viewCertificate();
  else if (p[0] === 'tools') viewTool(p[1]);
  else if (p[0] === 'atlas') {
    if (p[1] === 'modalities') viewModalities();
    else if (p[1] === 'players') viewPlayers();
    else if (p[1] === 'L') viewAtlasLesson(p[2]);
    else if (p[1] === 'A' && p[3]) viewAtlasAreaLesson(p[2], p[3]);
    else if (p[1] === 'A') viewAtlasArea(p[2]);
    else viewAtlas();
  }
  else if (p[0] === 'journal') viewJournal();
  else if (p[0] === 'search') viewSearch();
  else if (p[0] === 'capstone') viewCapstone();
  else if (p[0] === 'cheatsheet') viewCheatsheet();
  else if (p[0] === 'glossary') viewGlossary();
  else viewHome();
  window.scrollTo(0, 0);
}

/* ---- global click handling: data-nav + journal delete ---- */
document.addEventListener('click', function (e) {
  var nav = e.target.closest('[data-nav]');
  if (nav) { location.hash = nav.getAttribute('data-nav'); return; }
  var del = e.target.closest('[data-del]');
  if (del) {
    var i = +del.getAttribute('data-del');
    state.journal.splice(i, 1); save(); route();
  }
});

/* ---- drawer ---- */
var drawer = document.getElementById('drawer');
var scrim = document.getElementById('scrim');
function toggleDrawer(open) {
  drawer.classList.toggle('open', open);
  scrim.classList.toggle('open', open);
}
document.getElementById('menuBtn').onclick = function () { toggleDrawer(!drawer.classList.contains('open')); };
scrim.onclick = function () { toggleDrawer(false); };
drawer.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) toggleDrawer(false); });

/* ---- boot ---- */
window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  });
}
