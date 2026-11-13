/* Next Franchise · Sr Consultant Training · app shell: router, icons, pop-up cards, widgets and the Brain Train engine. */
(function () {
  'use strict';
  var NF = window.NF, C = NF.content, $ = function (s, r) { return (r || document).querySelector(s); },
    $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var peso = function (n) { return '₱' + Math.round(n).toLocaleString('en-US'); };

  /* ---------- saved progress (this browser only) ---------- */
  var KEY = 'nf-sr-training-v1', S = { bt: {}, checks: {}, seen: {}, scores: {}, notes: {} };
  try { var raw = localStorage.getItem(KEY); if (raw) { var p = JSON.parse(raw); for (var k in S) if (p[k]) S[k] = p[k]; } } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- icons ---------- */
  var I = {
    heart: 'M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z',
    cube: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12v9M12 12L4 7.5',
    trend: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    loop: 'M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3',
    bars: 'M5 21V4M10 21v-10M15 21v-6M20 21v-3',
    speak: 'M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM12 7v4M12 14h.01',
    spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z',
    pin: 'M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
    user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    compass: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM16 8l-2 6-6 2 2-6z',
    flag: 'M4 22V4M4 4h13l-2 4 2 4H4',
    book: 'M2 5h7a3 3 0 0 1 3 3v12a2.5 2.5 0 0 0-2.5-2.5H2zM22 5h-7a3 3 0 0 0-3 3v12a2.5 2.5 0 0 1 2.5-2.5H22z',
    calcheck: 'M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM16 3v4M8 3v4M3 10h18M9 15l2 2 4-4',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 7v5l3 2',
    target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 12h.01',
    bag: 'M6 8h12l1 13H5L6 8zM9 8V6a3 3 0 0 1 6 0v2',
    list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
    pencil: 'M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4',
    folder: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    back: 'M19 12H5M11 6l-6 6 6 6',
    check: 'M5 12.5l4.5 4.5L19 7.5',
    x: 'M6 6l12 12M18 6L6 18',
    brain: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z',
    store: 'M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6',
    key: 'M15 7a4 4 0 1 1-3.9 5H8v3H5v3H2v-3l7.1-7.1A4 4 0 0 1 15 7zM16 8h.01',
    trophy: 'M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3M12 13v4M8 20h8M10 17h4',
    calc: 'M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01',
    doc: 'M7 3h7l5 5v13H7V3zM14 3v5h5M10 13h6M10 17h6',
    users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
    search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
    flip: 'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5',
    quote: 'M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6',
    alert: 'M12 3l10 18H2L12 3zM12 10v5M12 18h.01',
    copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
    chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z'
  };
  function ic(n) { return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="' + (I[n] || I.check) + '"/></svg>'; }
  NF.ic = ic;

  /* ---------- skills helpers ---------- */
  var skillByName = {};
  C.skills.forEach(function (s, i) { var m = NF.skillMeta[s.name]; s.g = m[0]; s.ic = m[1]; s.focus = !!m[2]; s.i = i; skillByName[s.name.toLowerCase()] = s; });
  function tagsHtml(str) {
    if (/^all 13/i.test(str.trim())) return '<span class="tag tag-all">' + esc(str.trim()) + '</span>';
    return str.split(/,\s*/).filter(Boolean).map(function (n) {
      var s = skillByName[n.trim().toLowerCase()];
      return s ? '<button class="tag" data-g="' + s.g + '" data-skill="' + s.i + '">' + esc(s.name) + '</button>' : '<span class="tag">' + esc(n.trim()) + '</span>';
    }).join('');
  }

  /* ---------- modal (pop-up cards) ---------- */
  var modal = $('#modal'), box = $('#modalBox'), lastFocus = null;
  function openModal(html, g) {
    lastFocus = document.activeElement;
    box.innerHTML = html; if (g) box.setAttribute('data-g', g); else box.removeAttribute('data-g');
    hydrate(box); modal.classList.add('open'); modal.scrollTop = 0; document.body.style.overflow = 'hidden';
    var x = $('.modal-x', box); if (x) x.focus();
  }
  function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.modal-x')) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  function markSeen(key) { if (!S.seen[key]) { S.seen[key] = 1; save(); } $$('[data-seen="' + key + '"]').forEach(function (el) { el.classList.add('is-seen'); }); }
  function row(label, text, icn) { return '<div class="mrow"><h4>' + (icn ? ic(icn) : '') + label + '</h4><p>' + esc(text) + '</p></div>'; }

  function openSkill(i) {
    var s = C.skills[i], n = C.skills.length;
    openModal('<div class="modal-head"><div><span class="lbl">' + NF.groups[s.g] + (s.focus ? ' · Sr focus skill' : '') + '</span><h2 id="modalTitle">' + ic(s.ic) + esc(s.name) + '</h2><p class="sub">' + esc(s.what) + '</p></div><button class="modal-x" aria-label="Close">×</button></div>' +
      '<div class="modal-body"><div class="bigq">' + ic('chat') + '<span>' + esc(s.q) + '</span></div>' +
      row('Why it matters for a Sr', s.why, 'target') +
      '<div class="mrow"><h4>' + ic('store') + 'Scenario (illustrative)</h4><p class="scenario">' + esc(s.scenario) + '</p></div>' +
      '<div class="pm"><div class="good"><h4>' + ic('check') + "When it's present</h4><p>" + esc(s.present) + '</p></div><div class="bad"><h4>' + ic('x') + "When it's missing</h4><p>" + esc(s.missing) + '</p></div></div>' +
      '<div class="drill"><h4>' + ic('pencil') + 'Drill</h4><p>' + esc(s.drill) + '</p></div>' +
      row('Where it shows in the Blueprint', s.blueprint, 'doc') + row("Where it's practiced", s.practiced, 'calcheck') + '</div>' +
      '<div class="modal-foot"><button class="btn line sm" data-skill="' + ((i + n - 1) % n) + '">' + ic('back') + esc(C.skills[(i + n - 1) % n].name) + '</button><button class="btn dark sm" data-skill="' + ((i + 1) % n) + '">' + esc(C.skills[(i + 1) % n].name) + ic('arrow') + '</button></div>', s.g);
    markSeen('skill-' + i);
  }
  function openCard(i) {
    var c = C.cards[i], n = C.cards.length, part = C.parts[c.part], pv = C.cards[(i + n - 1) % n], nx = C.cards[(i + 1) % n];
    var lab = function (x) { return (x.num ? x.num + ' ' : '') + x.name; };
    openModal('<div class="modal-head"><div><span class="lbl">' + esc(part.title) + ' · taught in ' + esc(part.taught) + '</span><h2 id="modalTitle">' + esc(lab(c)) + '</h2></div><button class="modal-x" aria-label="Close">×</button></div>' +
      '<div class="modal-body"><div class="bigq">' + ic('chat') + '<span>' + esc(c.q) + '</span></div>' +
      row('Why it matters', c.why, 'target') + row('How it is written', c.how, 'pencil') + row('Where the answer comes from', c.src, 'search') +
      '<div class="pm"><div class="good"><h4>' + ic('check') + 'Strong example</h4><p>' + esc(c.strong) + '</p></div><div class="bad"><h4>' + ic('x') + 'Weak version</h4><p>' + esc(c.weak) + '</p></div></div>' +
      '<div class="drill"><h4>' + ic('shield') + 'Quality check</h4><p>' + esc(c.check) + '</p></div>' +
      row('Feeds into', c.feeds, 'arrow') + '<div class="mrow"><h4>' + ic('brain') + 'Meta Skills it demands</h4><p class="tags">' + tagsHtml(c.skills) + '</p></div></div>' +
      '<div class="modal-foot"><button class="btn line sm" data-card="' + pv.i + '">' + ic('back') + esc(lab(pv)) + '</button><button class="btn dark sm" data-card="' + nx.i + '">' + esc(lab(nx)) + ic('arrow') + '</button></div>');
    markSeen('card-' + i);
  }
  C.cards.forEach(function (c, i) { c.i = i; });
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-skill]'); if (t) { openSkill(+t.getAttribute('data-skill')); return; }
    t = e.target.closest('[data-card]'); if (t) { openCard(+t.getAttribute('data-card')); return; }
    t = e.target.closest('[data-goto]'); if (t) { var el = document.getElementById(t.getAttribute('data-goto')); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    t = e.target.closest('[data-reveal]'); if (t) { t.closest('.door').classList.add('open'); return; }
    t = e.target.closest('.flip'); if (t) { t.classList.toggle('on'); return; }
  });

  var toastT; function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 2200); }

  /* ---------- components ---------- */
  var comp = {};
  comp.connect = function (el) {
    el.innerHTML = '<div class="connect">' + NF.groupOrder.map(function (g) {
      return '<div class="connect-col" data-g="' + g + '"><h3>' + NF.groups[g] + '</h3>' + C.skills.filter(function (s) { return s.g === g; }).map(function (s) { return '<button class="skill-chip" data-skill="' + s.i + '">' + ic(s.ic) + esc(s.name) + '</button>'; }).join('') + '</div>';
    }).join('') + '</div><div class="bar-row"><button class="skill-chip" data-g="bar" data-skill="' + skillByName['radical outcomes'].i + '">' + ic('trend') + 'Radical Outcomes</button><p><strong>The bar all of them aim at.</strong> A 5 to 10X change in what the customer or franchisee cares about, not a 10% improvement.</p></div>';
  };
  comp['skills-grid'] = function (el) {
    var order = NF.groupOrder.concat(['bar']), cur = 'all';
    function draw() {
      var list = C.skills.slice().sort(function (a, b) { return order.indexOf(a.g) - order.indexOf(b.g); }).filter(function (s) { return cur === 'all' || (cur === 'focus' ? s.focus : s.g === cur); });
      el.innerHTML = '<div class="filter-row"><button data-f="all">All 13</button>' + order.map(function (g) { return '<button data-f="' + g + '">' + NF.groups[g] + '</button>'; }).join('') + '<button data-f="focus">Sr focus (7)</button></div><div class="skills-grid">' +
        list.map(function (s) { return '<button class="skill-card' + (S.seen['skill-' + s.i] ? ' is-seen' : '') + '" data-g="' + s.g + '" data-skill="' + s.i + '" data-seen="skill-' + s.i + '">' + (s.focus ? '<span class="focus">SR FOCUS</span>' : '') + '<span class="ic-wrap">' + ic(s.ic) + '</span><span class="grp">' + NF.groups[s.g] + '</span><h3>' + esc(s.name) + '</h3><p class="q">' + esc(s.q) + '</p><span class="seen" title="Opened">' + ic('check') + '</span></button>'; }).join('') + '</div>';
      $$('[data-f]', el).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-f') === cur); b.onclick = function () { cur = b.getAttribute('data-f'); draw(); }; });
    }
    draw();
  };
  comp.loop = function (el) {
    var cur = 0, R = 140, cx = 180, cy = 180;
    var nodes = NF.loop.map(function (s, i) { var a = (i / 8) * 2 * Math.PI - Math.PI / 2; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
    var svg = '<svg viewBox="0 0 360 360" role="img" aria-label="The eight steps of the Problem-Solving Loop, arranged in a circle"><circle cx="180" cy="180" r="140" fill="none" stroke="rgba(189,159,79,.55)" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/><text x="180" y="170" text-anchor="middle" fill="#BD9F4F" font-family="Montserrat, sans-serif" font-weight="800" font-size="13" letter-spacing="2">PROBLEM</text><text x="180" y="190" text-anchor="middle" fill="#fff" font-family="Montserrat, sans-serif" font-weight="800" font-size="22">CARD</text><text x="180" y="210" text-anchor="middle" fill="#AEB6C2" font-family="DM Sans, sans-serif" font-size="11">then Part 5 Advisory</text>' +
      nodes.map(function (p, i) { return '<g class="loop-node" data-i="' + i + '" tabindex="0" role="button" aria-label="Step ' + (i + 1) + ': ' + esc(NF.loop[i].n) + '"><circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="27"/><text x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '">' + (i + 1) + '</text></g>'; }).join('') + '</svg>';
    el.innerHTML = '<div class="loop"><div>' + svg + '</div><div class="loop-detail" aria-live="polite"></div></div>';
    function draw() {
      var s = NF.loop[cur];
      $$('.loop-node', el).forEach(function (n, i) { n.classList.toggle('on', i === cur); });
      $('.loop-detail', el).innerHTML = '<span class="n">Step ' + (cur + 1) + ' of 8 · about ' + s.m + ' minutes</span><h3>' + esc(s.n) + '</h3><p>' + esc(s.d) + '</p><p class="tags">' + tagsHtml(s.s.join(', ')) + '</p><p class="chk"><strong>What gets checked:</strong> ' + esc(s.c) + '</p><div class="loop-nav"><button class="btn ghost sm" data-d="-1">' + ic('back') + 'Back</button><button class="btn sm" data-d="1">Next step' + ic('arrow') + '</button></div>';
      $$('[data-d]', el).forEach(function (b) { b.onclick = function () { cur = (cur + +b.getAttribute('data-d') + 8) % 8; draw(); }; });
    }
    $$('.loop-node', el).forEach(function (n) { var go = function () { cur = +n.getAttribute('data-i'); draw(); }; n.onclick = go; n.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }; });
    draw();
  };
  comp.road = function (el) {
    var cur = 0;
    function draw() {
      var r = NF.road[cur];
      el.innerHTML = '<div class="road">' + NF.road.map(function (s, i) { return '<button class="road-stop' + (i === cur ? ' on' : '') + (i < cur ? ' done' : '') + (s.gate ? ' gate' : '') + '" data-i="' + i + '" aria-pressed="' + (i === cur) + '"><span class="road-dot">' + ic(s.ic) + '</span><b>' + s.k + '</b><span>' + s.t + '</span></button>'; }).join('') + '</div>' +
        '<div class="road-panel"><div><h3>' + r.k + ': ' + r.t + '</h3><ul>' + r.items.map(function (x) { return '<li><b>' + x[0] + '</b><span>' + esc(x[1]) + '</span></li>'; }).join('') + '</ul><p class="muted small" style="margin-top:10px"><em>' + esc(r.note) + '</em></p></div><div class="cta-row" style="margin:0"><a class="btn dark" href="#' + r.to + '">Open ' + (r.to2 ? 'Financial Goals' : 'this part') + ic('arrow') + '</a>' + (r.to2 ? '<a class="btn line" href="#' + r.to2 + '">Open the Blueprint' + ic('arrow') + '</a>' : '') + '</div></div>';
      $$('.road-stop', el).forEach(function (b) { b.onclick = function () { cur = +b.getAttribute('data-i'); draw(); }; });
    }
    draw();
  };
  comp.modules = function (el) {
    el.innerHTML = '<div class="modules">' + NF.routes.slice(1).map(function (r) {
      var done = r.bts.filter(function (b) { return S.bt[b]; }).length;
      return '<a class="module" href="#' + r.id + '"><span class="wk"><span>' + r.wk + '</span><span>' + done + ' of ' + r.bts.length + ' Brain Trains</span></span><h3>' + r.title + '</h3><p>' + r.blurb + '</p><span class="mbar"><i style="width:' + (100 * done / r.bts.length) + '%"></i></span><span class="go">' + (done ? (done === r.bts.length ? 'Review' : 'Continue') : 'Start') + ic('arrow') + '</span></a>';
    }).join('') + '</div>';
  };
  comp.flips = function (el) {
    el.innerHTML = '<div class="flips">' + C.compare.map(function (r) {
      var s = skillByName[r[3].toLowerCase()];
      return '<button class="flip" aria-label="' + esc(r[0]) + ': flip to compare"><span class="flip-in"><span class="flip-f"><span class="lbl">' + esc(r[0]) + ' · Traditional</span><h3>' + esc(r[1]) + '</h3><span class="hint">' + ic('flip') + 'Flip for NF</span></span><span class="flip-b"><span class="lbl">' + esc(r[0]) + ' · NF consultant</span><h3>' + esc(r[2]) + '</h3><span class="tags"><span class="tag" data-g="' + s.g + '">' + esc(s.name) + '</span></span><span class="hint">' + ic('flip') + 'Flip back</span></span></span></button>';
    }).join('') + '</div>';
  };
  comp.mult = function (el) {
    el.innerHTML = '<div class="mult"><label class="field" for="multR">Branches sold with the same mistake in the system: <strong id="multN" style="color:var(--ink);font-size:1.3rem;font-family:var(--display)"></strong><input type="range" id="multR" min="1" max="60" value="1"></label><div class="mult-dots" aria-hidden="true"></div><p id="multT"></p></div>';
    var r = $('#multR', el);
    function draw() { var n = +r.value; $('#multN', el).textContent = n; $('.mult-dots', el).innerHTML = new Array(n + 1).join('<i></i>'); $('#multT', el).innerHTML = n === 1 ? 'In one business, a consulting mistake stays in that business.' : 'The same mistake now sits in <strong>' + n + ' branches</strong>, and ' + n + ' franchisees are paying for it, many of them OFWs, retirees and families putting in their life savings.'; }
    r.oninput = draw; draw();
  };
  comp.explorer = function (el) {
    var cur = 0;
    function draw() {
      var p = C.parts[cur];
      el.innerHTML = '<div class="parts-tabs" role="tablist">' + C.parts.map(function (x, i) { var n = C.cards.filter(function (c) { return c.part === i; }).length; return '<button role="tab" aria-selected="' + (i === cur) + '" class="' + (i === cur ? 'on' : '') + '" data-i="' + i + '">' + esc(x.title.replace(/^Part (\d): /, 'Part $1 · ')) + '<small>' + n + (n === 1 ? ' card' : ' cards') + ' · ' + esc(x.taught) + '</small></button>'; }).join('') + '</div>' +
        '<div class="part-intro"><p>' + esc(p.intro) + '</p><p class="tags">' + tagsHtml(p.skills) + '</p></div><div class="bcards">' +
        C.cards.filter(function (c) { return c.part === cur; }).map(function (c) { return '<button class="bcard' + (S.seen['card-' + c.i] ? ' is-seen' : '') + '" data-card="' + c.i + '" data-seen="card-' + c.i + '"><span class="num">' + (c.num || '★') + '</span><h3>' + esc(c.name) + '</h3><p>' + esc(c.q) + '</p><span class="seen" title="Opened">' + ic('check') + '</span></button>'; }).join('') + '</div>';
      $$('.parts-tabs button', el).forEach(function (b) { b.onclick = function () { cur = +b.getAttribute('data-i'); draw(); }; });
    }
    draw();
  };
  comp.mode1 = function (el) {
    var D = { lowest: [823000, 176000, 385650], typical: [823000, 325000, 433650], highest: [823000, 570000, 463650] }, cur = 'typical', max = 1856650;
    function draw() {
      var d = D[cur], t25 = d[0] + d[1], t26 = t25 + d[2];
      el.innerHTML = '<div class="calc"><div class="bt-row" style="justify-content:space-between"><h3>Snaxxville, one store</h3><div class="seg">' + ['lowest', 'typical', 'highest'].map(function (k) { return '<button class="' + (k === cur ? 'on' : '') + '" data-k="' + k + '">' + (k === 'typical' ? 'Typical site' : k[0].toUpperCase() + k.slice(1) + '-cost site') + '</button>'; }).join('') + '</div></div>' +
        '<div class="hbar"><div class="hbar-row"><div class="lab"><span>Total cash before opening (2.6)</span><span>' + peso(t26) + '</span></div><div class="hbar-track"><i class="c-pack" style="width:' + (100 * d[0] / max) + '%"></i><i class="c-third" style="width:' + (100 * d[1] / max) + '%"></i><i class="c-dep" style="width:' + (100 * d[2] / max) + '%"></i></div></div></div>' +
        '<div class="legend"><span><i class="c-pack"></i>Franchise Package, fixed: ' + peso(d[0]) + ' (₱500,000 fee + ₱323,000 set-up)</span><span><i class="c-third"></i>Third-party costs: ' + peso(d[1]) + '</span><span><i class="c-dep"></i>Deposits, opening inventory, revolving fund: ' + peso(d[2]) + '</span></div>' +
        '<div class="out"><div><b>' + peso(d[0]) + '</b><span>2.4 Franchise Package. The same in every town.</span></div><div><b>' + peso(t25) + '</b><span>2.5 Total investment. The payback base.</span></div><div><b>' + peso(t26) + '</b><span>2.6 Total cash before opening. What must be in the bank.</span></div></div>' +
        '<p class="small muted">Construction moves most: ₱100,000 for a fitted site to ₱400,000 for a bare 50 sqm.</p></div>';
      $$('[data-k]', el).forEach(function (b) { b.onclick = function () { cur = b.getAttribute('data-k'); draw(); }; });
    }
    draw();
  };
  comp.breakeven = function (el) {
    el.innerHTML = '<div class="calc"><h3>Break-even, by hand</h3><div class="calc-grid">' +
      '<label class="field" for="beF">Fixed costs a month (₱)<input id="beF" type="number" value="116217" min="0"></label><label class="field" for="beD">Direct costs (% of sales)<input id="beD" type="number" value="48" min="0" max="99"></label><label class="field" for="beV">Variable expenses (% of sales)<input id="beV" type="number" value="15" min="0" max="99"></label><label class="field" for="beT">Average ticket (₱)<input id="beT" type="number" value="225" min="1"></label><label class="field" for="beFee">Fixed monthly fee to franchisor (₱)<input id="beFee" type="number" value="30000" min="0"></label></div>' +
      '<p id="beLine" class="small"></p><div class="out" id="beOut"></div><button class="btn line sm" id="beReset" style="justify-self:start">Reset to Snaxxville</button></div>';
    var ids = ['beF', 'beD', 'beV', 'beT', 'beFee'], def = [116217, 48, 15, 225, 30000];
    function draw() {
      var v = ids.map(function (i) { return parseFloat($('#' + i, el).value) || 0; }), m = 1 - (v[1] + v[2]) / 100;
      if (m <= 0) { $('#beLine', el).textContent = 'Costs take 100% of sales or more, so there is no break-even.'; $('#beOut', el).innerHTML = ''; return; }
      var be = v[0] / m, tx = be / (v[3] || 1) / 30;
      $('#beLine', el).innerHTML = 'Each peso of sales leaves <strong>' + Math.round(m * 100) + ' centavos</strong> to cover fixed costs. ' + peso(v[0]) + ' ÷ ' + m.toFixed(2) + ' = <strong>' + peso(be) + '</strong> a month.';
      $('#beOut', el).innerHTML = '<div><b>' + peso(be) + '</b><span>Break-even sales a month</span></div><div><b>' + tx.toFixed(1) + '</b><span>Transactions a day (30 days)</span></div><div><b>' + peso(be * 12) + '</b><span>A year: ' + (be * 12 >= 3e6 ? 'above ₱3M, so VAT' : 'below ₱3M, so 3% percentage tax') + '</span></div><div><b>' + (v[4] / be * 100).toFixed(1) + '%</b><span>The fixed fee as a share of sales at break-even</span></div>';
    }
    ids.forEach(function (i) { $('#' + i, el).oninput = draw; });
    $('#beReset', el).onclick = function () { ids.forEach(function (i, k) { $('#' + i, el).value = def[k]; }); draw(); };
    draw();
  };
  comp.tax = function (el) {
    el.innerHTML = '<div class="calc"><h3>The tax switch at ₱3M</h3><label class="field" for="taxR">Monthly sales: <strong id="taxM" style="color:var(--ink);font-family:var(--display);font-size:1.2rem"></strong><input type="range" id="taxR" min="150000" max="400000" step="10000" value="240000"></label><div class="out" id="taxO"></div></div>';
    var r = $('#taxR', el);
    function draw() { var m = +r.value, y = m * 12, vat = y > 3e6; $('#taxM', el).textContent = peso(m); $('#taxO', el).innerHTML = '<div><b>' + peso(y) + '</b><span>Annual sales</span></div><div style="background:' + (vat ? 'var(--g-honest)' : 'var(--g-human)') + '"><b style="color:#fff">' + (vat ? 'VAT' : '3% percentage tax') + '</b><span style="color:#fff">' + (vat ? 'Above ₱3M: must register for VAT' : 'Below ₱3M in annual sales') + '</span></div>'; }
    r.oninput = draw; draw();
  };
  comp.trace = function (el) {
    var T = [['Pitch deck', 'The revenue slide says: "Payback in 13 months."', 'A promise a buyer will act on. Where does it come from?'], ['Card 3.9', 'Power Economics: Projections. Snaxxville at Target: ₱146,787 net income a month, payback 13 months from signing.', 'The card takes every figure from the approved workbook only.'], ['Ramp-Up', 'Pre-opening months plus the months to recover line 2.5. 7.8 months at steady state becomes 13 months from signing.', 'The payback to quote is counted from signing.'], ['Mode 2 + Mode 1', 'Target is 120 transactions a day at a ₱225 ticket: ₱810,000 a month. The payback base is line 2.5: ₱1,148,000 at a typical site.', 'Target must sit at or below what the best real branch has sold.'], ['Branch Data', 'Catubig sells ₱861,607 a month at 109 transactions a day; Laoang ₱726,268 at 116. Weighted ticket ₱224, used as ₱225. Ingredients 45% and packaging 3% come from the recipe costing.', 'The trail ends in evidence: card 2.3 Proof. The Blueprint holds.']], cur = 0;
    function draw() {
      el.innerHTML = '<div class="trace"><div class="trace-path">' + T.map(function (t, i) { return (i ? '<span class="arr">→</span>' : '') + '<button class="' + (i === cur ? 'on' : i < cur ? 'past' : '') + '" data-i="' + i + '">' + t[0] + '</button>'; }).join('') + '</div><p class="quote">' + esc(T[cur][1]) + '</p><p class="muted">' + esc(T[cur][2]) + '</p><div class="bt-row">' + (cur < T.length - 1 ? '<button class="btn dark sm" data-i="' + (cur + 1) + '">Trace it one step back' + ic('arrow') + '</button>' : '<span class="light green">Trail complete</span><button class="btn line sm" data-i="0">Start again</button>') + '</div></div>';
      $$('[data-i]', el).forEach(function (b) { b.onclick = function () { cur = +b.getAttribute('data-i'); draw(); }; });
    }
    draw();
  };
  comp.scores = function (el) {
    var focusFirst = C.skills.slice().sort(function (a, b) { return (b.focus - a.focus) || (a.i - b.i); });
    function draw() {
      var f4 = 0, rest = true, any = false;
      focusFirst.forEach(function (s) { var v = (S.scores[s.name] || {}).l || 0; if (v) any = true; if (s.focus && v === 4) f4++; if (v < 3) rest = false; });
      var ok = f4 >= 5 && rest;
      el.innerHTML = '<div class="scoregrid">' + focusFirst.map(function (s) {
        var sc = S.scores[s.name] || {};
        return '<div class="scorerow' + (s.focus ? ' focus' : '') + '"><span class="nm">' + esc(s.name) + (s.focus ? '<small>TARGET 4</small>' : '<small style="background:var(--line);color:var(--muted)">3+</small>') + '</span><span class="lv" role="group" aria-label="Level for ' + esc(s.name) + '">' + [1, 2, 3, 4].map(function (n) { return '<button class="' + (sc.l === n ? 'on' : '') + '" data-s="' + s.i + '" data-l="' + n + '" aria-pressed="' + (sc.l === n) + '">' + n + '</button>'; }).join('') + '</span><input type="text" id="ev' + s.i + '" data-ev="' + s.i + '" placeholder="One line of evidence: an artifact, a quote or a client outcome" value="' + esc(sc.e || '') + '" aria-label="Evidence for ' + esc(s.name) + '"></div>';
      }).join('') + '</div><div class="gate-status ' + (ok ? 'yes' : 'no') + '" style="margin-top:14px">' + ic(ok ? 'check' : 'key') + '<span>Gate item 1: Level 4 on <strong>' + f4 + ' of 7</strong> Sr focus skills (needs 5), ' + (rest ? 'and Level 3 or higher on the rest.' : any ? 'and at least one skill is still below Level 3.' : 'and nothing is scored yet.') + ' Remember: no evidence, no score.</span></div>';
      $$('[data-l]', el).forEach(function (b) { b.onclick = function () { var s = C.skills[+b.getAttribute('data-s')], l = +b.getAttribute('data-l'); S.scores[s.name] = S.scores[s.name] || {}; S.scores[s.name].l = S.scores[s.name].l === l ? 0 : l; save(); draw(); }; });
      $$('[data-ev]', el).forEach(function (inp) { inp.onchange = function () { var s = C.skills[+inp.getAttribute('data-ev')]; S.scores[s.name] = S.scores[s.name] || {}; S.scores[s.name].e = inp.value; save(); }; });
    }
    draw();
  };
  comp.problemcard = function (el) {
    var F = [['client', 'Client · problem', '[Client] · [short name]', 0], ['voice', '1. In their voice', '"I am … and the problem is …"', 1], ['assume', '2. Assumptions (see B2)', 'Each one marked Heard, Inferred, Client-said or Confirmed', 1], ['chain', '3. Causal chain', 'A → B → C → loss. Why it repeats:', 1], ['link', '4. The one link', 'Attack: …   Not yet: …', 1], ['outcome', '5. Outcome', '2X: …   10X: …   They would feel: …', 1], ['evidence', '6. First-hand evidence', 'Who · where · by when', 0], ['proof', '7. Next proof', 'Proof · owner · date', 0], ['weak', "8. What's weak here", '', 1], ['lands', 'Lands in Blueprint', '5.1 Upgrade / 5.2 Risk / other', 0], ['appb', 'Goes to Appendix B', '', 0]];
    S.notes.pc = S.notes.pc || {};
    el.innerHTML = '<div class="calc"><div class="bt-row" style="justify-content:space-between"><h3>Problem Card (B1), practice copy</h3><span class="small muted">Saved in this browser only. Do not type real client names here.</span></div><div class="calc-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">' + F.map(function (f) { var v = esc(S.notes.pc[f[0]] || ''); return '<label class="field" for="pc-' + f[0] + '">' + f[1] + (f[3] ? '<textarea id="pc-' + f[0] + '" placeholder="' + esc(f[2]) + '">' + v + '</textarea>' : '<input id="pc-' + f[0] + '" type="text" placeholder="' + esc(f[2]) + '" value="' + v + '">') + '</label>'; }).join('') + '</div><div class="bt-row"><button class="btn dark sm" id="pcCopy">' + ic('copy') + 'Copy as text</button><button class="btn line sm" id="pcClear">Clear</button></div></div>';
    F.forEach(function (f) { $('#pc-' + f[0], el).oninput = function () { S.notes.pc[f[0]] = this.value; save(); }; });
    $('#pcCopy', el).onclick = function () {
      var txt = 'PROBLEM CARD\n' + F.map(function (f) { return f[1] + ': ' + (S.notes.pc[f[0]] || ''); }).join('\n');
      try { navigator.clipboard.writeText(txt).then(function () { toast('Problem Card copied'); }, function () { toast('Copy was blocked. Select the text and copy it by hand.'); }); } catch (e) { toast('Copy was blocked. Select the text and copy it by hand.'); }
    };
    $('#pcClear', el).onclick = function () { S.notes.pc = {}; save(); comp.problemcard(el); };
  };
  comp.tabs = function (el) {
    var btns = $$('.tabs button', el), panes = $$('[data-pane]', el);
    function show(i) { btns.forEach(function (b, k) { b.classList.toggle('on', k === i); b.setAttribute('aria-selected', k === i); }); panes.forEach(function (p, k) { p.classList.toggle('on', k === i); }); }
    btns.forEach(function (b, i) { b.onclick = function () { show(i); }; }); show(0);
  };

  /* ---------- Brain Train ---------- */
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function expand(items) {
    var out = [];
    items.forEach(function (it) {
      if (it.t === 'sort') shuffle(it.items).forEach(function (x) { out.push({ t: 'mcq', q: it.q, ctx: x.x, o: it.buckets, a: x.b, why: x.why, rowOpts: true, keep: true }); });
      else if (it.t === 'skillq') shuffle(C.skills).slice(0, it.n).forEach(function (s) {
        var opts = shuffle([s].concat(shuffle(C.skills.filter(function (o) { return o !== s; })).slice(0, 3)));
        out.push({ t: 'mcq', q: 'Which Meta Skill asks this question?', ctx: s.q, o: opts.map(function (o) { return o.name; }), a: opts.indexOf(s), why: s.name + ': ' + s.what, keep: true });
      });
      else out.push(it);
    });
    return out;
  }
  function brainTrain(el) {
    var id = el.getAttribute('data-bt'), def = NF.bt[id]; if (!def) return;
    var items, cur, score, marks;
    function head() {
      return '<div class="bt-head"><span class="bt-badge">' + ic('brain') + 'Brain Train</span><h3>' + esc(def.title) + '</h3>' + (items ? '<div class="bt-dots" aria-hidden="true">' + items.map(function (_, i) { return '<i class="' + (marks[i] === 1 ? 'ok' : marks[i] === 0 ? 'no' : i === cur ? 'cur' : '') + '"></i>'; }).join('') + '</div>' : '') + '</div>';
    }
    function intro() {
      var best = S.bt[id];
      el.innerHTML = head() + '<p>' + (best ? 'Your best so far: <strong>' + best.s + ' of ' + best.n + '</strong>. Go again to beat it.' : 'A short exercise on what you just read. You get the reason after every answer.') + '</p><div class="bt-row"><button class="btn" data-a="start">' + (best ? 'Train again' : 'Start') + ic('arrow') + '</button></div>';
      $('[data-a=start]', el).onclick = start;
    }
    function start() { items = expand(def.items); cur = 0; score = 0; marks = []; show(); }
    function done(ok, why) {
      marks[cur] = ok ? 1 : 0; if (ok) score++;
      var w = document.createElement('div'); w.innerHTML = '<div class="bt-why"><b>' + (ok ? 'Right. ' : 'Not quite. ') + '</b>' + esc(why) + '</div><div class="bt-row" style="margin-top:12px"><button class="btn" data-a="next">' + (cur < items.length - 1 ? 'Next' : 'See my score') + ic('arrow') + '</button></div>';
      el.appendChild(w); var d = $('.bt-dots', el); if (d) d.children[cur].className = ok ? 'ok' : 'no';
      var nb = $('[data-a=next]', el); nb.onclick = function () { cur++; if (cur < items.length) show(); else finish(); }; nb.focus();
    }
    function show() {
      var it = items[cur], h = head() + '<p class="bt-q">' + (cur + 1) + '. ' + esc(it.q) + '</p>' + (it.ctx ? '<p class="bt-ctx">' + esc(it.ctx) + '</p>' : '');
      if (it.t === 'mcq') {
        var order = it.keep ? it.o.map(function (_, i) { return i; }) : shuffle(it.o.map(function (_, i) { return i; }));
        el.innerHTML = h + '<div class="bt-opts' + (it.rowOpts ? ' row' : '') + '">' + order.map(function (i) { return '<button class="bt-opt" data-i="' + i + '">' + esc(it.o[i]) + '</button>'; }).join('') + '</div>';
        $$('.bt-opt', el).forEach(function (b) { b.onclick = function () { var i = +b.getAttribute('data-i'); $$('.bt-opt', el).forEach(function (x) { x.disabled = true; if (+x.getAttribute('data-i') === it.a) x.classList.add('ok'); }); if (i !== it.a) b.classList.add('no'); done(i === it.a, it.why); }; });
      } else if (it.t === 'order') {
        var pos = 0, miss = 0;
        el.innerHTML = h + '<div class="bt-seq"><em>Tap the steps in order. They line up here.</em></div><div class="bt-opts row">' + shuffle(it.seq).map(function (s) { return '<button class="bt-opt" data-v="' + esc(s) + '">' + esc(s) + '</button>'; }).join('') + '</div>';
        $$('.bt-opt', el).forEach(function (b) { b.onclick = function () {
          if (b.getAttribute('data-v') === it.seq[pos]) { var q = $('.bt-seq', el); if (!pos) q.innerHTML = ''; q.insertAdjacentHTML('beforeend', '<span>' + (pos + 1) + '. ' + esc(it.seq[pos]) + '</span>'); b.disabled = true; b.classList.add('ok'); pos++; if (pos === it.seq.length) done(miss <= 1, (miss ? miss + ' wrong ' + (miss === 1 ? 'tap' : 'taps') + ' on the way. ' : '') + it.why); }
          else { miss++; b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); }
        }; });
      } else if (it.t === 'num') {
        el.innerHTML = h + '<form class="bt-row"><label class="small" for="' + id + '-n">Your answer' + (it.unit ? ' (' + esc(it.unit) + ')' : '') + '</label><input class="bt-num" id="' + id + '-n" inputmode="decimal" autocomplete="off"><button class="btn" type="submit">Check</button></form>';
        $('form', el).onsubmit = function (e) { e.preventDefault(); var inp = $('.bt-num', el), v = parseFloat(inp.value.replace(/[₱,%\s]/g, '')); if (isNaN(v)) { inp.focus(); return; } inp.disabled = true; $('button', this).disabled = true; done(Math.abs(v - it.a) <= it.tol + 1e-9, it.why); };
      }
    }
    function finish() {
      var n = items.length, best = S.bt[id];
      if (!best || score > best.s || best.n !== n) S.bt[id] = { s: Math.max(score, best && best.n === n ? best.s : 0), n: n }; save(); progress();
      var pct = score / n;
      el.innerHTML = head() + '<div class="bt-result"><span class="score">' + score + ' / ' + n + '</span><p>' + (pct === 1 ? 'Clean run. Now try it on your live client.' : pct >= .7 ? 'Solid. Re-read the reasons you missed, then go again.' : 'Worth another pass. Scroll up, re-read the section, and train again.') + '</p><div class="bt-row"><button class="btn" data-a="again">Train again</button></div></div>';
      $('[data-a=again]', el).onclick = start; items = null;
    }
    intro();
  }

  /* ---------- hydrate a piece of the page ---------- */
  function hydrate(root) {
    $$('[data-ic]', root).forEach(function (e) { e.outerHTML = ic(e.getAttribute('data-ic')); });
    $$('[data-skilltags]', root).forEach(function (e) { e.innerHTML = tagsHtml(e.getAttribute('data-skilltags')); e.removeAttribute('data-skilltags'); });
    $$('[data-c]', root).forEach(function (e) { var f = comp[e.getAttribute('data-c')]; if (f) f(e); });
    $$('[data-bt]', root).forEach(brainTrain);
    $$('[data-check]', root).forEach(function (inp) { var k = inp.getAttribute('data-check'); inp.checked = !!S.checks[k]; inp.onchange = function () { S.checks[k] = inp.checked ? 1 : 0; save(); }; });
    $$('.tbl', root).forEach(function (t) { if (t.closest('[data-form]')) t.classList.add('form'); });
  }

  /* ---------- progress ---------- */
  function progress() {
    var all = Object.keys(NF.bt), done = all.filter(function (b) { return S.bt[b]; }).length, pct = Math.round(100 * done / all.length);
    $('#progText').textContent = done + '/' + all.length; $('#progBar').style.width = pct + '%';
    $('.progress-pill').title = done + ' of ' + all.length + ' Brain Train exercises completed';
  }

  /* ---------- router ---------- */
  var view = $('#view'), nav = $('#nav'), spy;
  nav.innerHTML = NF.routes.map(function (r) { return '<a href="#' + r.id + '">' + r.nav.replace(/^Week /, '') + '</a>'; }).join('');
  function render() {
    var id = (location.hash || '#home').slice(1), idx = NF.routes.findIndex(function (r) { return r.id === id; });
    if (idx < 0) { idx = 0; id = 'home'; }
    var r = NF.routes[idx], prev = NF.routes[idx - 1], next = NF.routes[idx + 1];
    view.innerHTML = (NF.views[id] || '') + '<div class="wrap nextprev">' + (prev ? '<a class="btn line" href="#' + prev.id + '">' + ic('back') + prev.nav + '</a>' : '<span></span>') + (next ? '<a class="btn dark" href="#' + next.id + '">Next: ' + next.nav + ic('arrow') + '</a>' : '<a class="btn dark" href="#home">Back to the start' + ic('arrow') + '</a>') + '</div>';
    hydrate(view);
    // sub navigation from the sections of this view
    var secs = $$('section[data-nav]', view), holder = $('.subnav .wrap', view);
    if (holder) {
      holder.innerHTML = secs.map(function (s, i) { s.id = s.id || id + '-s' + i; return '<button data-goto="' + s.id + '">' + esc(s.getAttribute('data-nav')) + '</button>'; }).join('');
      if (spy) spy.disconnect();
      if ('IntersectionObserver' in window) {
        spy = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) $$('button', holder).forEach(function (b) { var on = b.getAttribute('data-goto') === e.target.id; b.classList.toggle('on', on); if (on && b.scrollIntoView && holder.scrollWidth > holder.clientWidth) holder.scrollLeft = b.offsetLeft - 40; }); }); }, { rootMargin: '-25% 0px -65% 0px' });
        secs.forEach(function (s) { spy.observe(s); });
      }
    }
    $$('a', nav).forEach(function (a) { if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    nav.classList.remove('open'); $('#navToggle').setAttribute('aria-expanded', 'false');
    document.title = (id === 'home' ? '' : r.title + ' · ') + 'Sr Consultant Training';
    window.scrollTo(0, 0); progress();
  }
  window.addEventListener('hashchange', render);
  $('#navToggle').onclick = function () { var o = nav.classList.toggle('open'); this.setAttribute('aria-expanded', o); };

  /* brand logo: show the real logo when it loads, keep the text mark when it cannot */
  var logo = $('#brandLogo'), fb = $('#brandFallback');
  function useLogo() { if (logo.naturalWidth > 0) { logo.hidden = false; fb.style.display = 'none'; } }
  logo.addEventListener('load', useLogo); if (logo.complete) useLogo();

  render();
})();
