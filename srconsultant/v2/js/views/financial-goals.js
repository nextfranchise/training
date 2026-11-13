window.NF = window.NF || {}; NF.views = NF.views || {};
NF.views["financial-goals"] = `<section class="hero view-hero"><div class="wrap">
  <span class="eyebrow">Week 2A · Session 3 · 4 hours</span>
  <h1>The Financial Goals</h1>
  <p class="lede">The workbook is the client's numbers in one file: what a unit costs to open, what it earns at each sales level, how long it takes to pay back, and what every perk in the offer costs. Week 2 opens here because every number in the Blueprint comes from it.</p>
  <p class="tags" style="margin-top:16px" data-skilltags="First Principles, Radical Candor, Follow the Good, AI Integration"></p>
</div></section>
<div class="subnav"><div class="wrap"></div></div>

<section class="section" data-nav="Source of truth"><div class="wrap">
  <div class="sec-head"><span class="kicker">Topic 1</span><h2>The source of truth, and who owns it</h2><p>The workbook is built after the interviews and before the Blueprint. When the Blueprint, the pitch deck or the Franchise Agreement disagree with it, the workbook wins and the others are corrected.</p></div>
  <div class="split">
    <div class="stack">
      <div class="callout dark"><strong style="color:var(--gold)">The rule.</strong> No number goes into the workbook without a source, and no workbook figure goes to the client without the Sr being able to explain where it came from.</div>
      <div class="prose"><p>The workbook is built with NF's Financial Goals skill in Claude, so the arithmetic and the formatting are fast. <strong>The judgment is not.</strong> The skill will build a tidy workbook on a wrong ticket, a typed-over recipe cell or a Target nobody has ever sold.</p><p>The Sr owns every input, every red flag and every conversation with the client about them. A franchisee will put their savings on these numbers; the Sr is the last person who can stop a wrong one.</p></div>
    </div>
    <div class="stack">
      <h4><span data-ic="list"></span>The four steps</h4>
      <div class="chain">
        <div class="chain-step"><span class="num">1</span><div><h3>Diagnose</h3><p class="small">Before any spreadsheet: the locked inputs, the critical gaps, the red flags rated green, amber or red, the proposed structure, and the next step. <em>Produces a one-page diagnosis the team agrees before building.</em></p></div></div>
        <div class="chain-step"><span class="num">2</span><div><h3>Iterate</h3><p class="small">Agree the structure and key figures as draft tables. Every figure is recomputed by script, never by hand or by eye. <em>Produces agreed Mode 1 and Mode 2 tables.</em></p></div></div>
        <div class="chain-step"><span class="num">3</span><div><h3>Build</h3><p class="small">Tab by tab, every formula linked to the Assumptions tab, then recalculate and confirm there are no errors. <em>Produces [Brand]_Financial_Goals_2026_v[X].xlsx.</em></p></div></div>
        <div class="chain-step"><span class="num">4</span><div><h3>Clarify and version</h3><p class="small">Send the clarification list and a short message; update from the answers; raise the version and write the version note. <em>Produces an approved workbook, ready for the Blueprint.</em></p></div></div>
      </div>
    </div>
  </div>
  <h3 style="margin:30px 0 12px">The inputs: where every value comes from</h3>
  <div class="tblwrap"><table class="tbl"><thead><tr><th>Input</th><th>What it gives the workbook</th><th>Example</th></tr></thead><tbody><tr><th scope="row">Owner interview</th><td>Package price, fee design, term, the offer the owner has in mind</td><td>Snaxxville: ₱823,000 package; a fixed ₱30,000 monthly system and marketing fee; no royalty</td></tr><tr><th scope="row">Back-office interview</th><td>Payroll, operating expenses, supplier and commissary terms</td><td>Snaxxville payroll of ₱64,000, the top of Ms. Aiza's ₱60,000 to ₱64,000 range, including government contributions</td></tr><tr><th scope="row">Branch-operations interview</th><td>Days open, crew size, how past openings ramped</td><td>Snaxxville branches open 6 to 7 days a week, so the model uses 30 days a month</td></tr><tr><th scope="row">Branch sales data</th><td>The average ticket, the volume, and the evidence for each level</td><td>Apr to Sep 2026 sales and transactions for all four Snaxxville branches; weighted ticket ₱224, used as ₱225</td></tr><tr><th scope="row">Recipe or service costing</th><td>The direct-cost percentage, item by item</td><td>Snaxxville ingredients 45% and packaging 3% of sales, from the recipe costing</td></tr><tr><th scope="row">Quotes, receipts, permits, lease offers</th><td>Third-party costs and deposits</td><td>K-Street Evo City: the Ayala Malls lease offer set the rent rule, deposits and common-area charges</td></tr><tr><th scope="row">Client corrections</th><td>Changes after each review</td><td>Snaxxville v0.4: levels moved to 100, 120 and 148 transactions a day after Ms. Aiza's comments</td></tr></tbody></table></div>
  <h3 style="margin:30px 0 12px">The colour code</h3>
  <div class="cells">
    <div class="cell blue"><span class="sw">₱64,000</span><b>Blue</b><span class="small">An input taken from the client or a document.</span></div>
    <div class="cell black"><span class="sw">=B4/0.37</span><b>Black</b><span class="small">A formula.</span></div>
    <div class="cell green"><span class="sw">=Assumptions!C9</span><b>Green</b><span class="small">A link to another tab.</span></div>
    <div class="cell yellow"><span class="sw">10% of sales</span><b>Yellow</b><span class="small">An estimate: a Smart Fill default or a figure still to confirm.</span></div>
  </div>
  <p class="muted" style="margin-top:12px">A workbook with yellow cells is a draft. The clarification round exists to turn them blue. Every new version carries a version note at the top of the Assumptions tab saying what changed and why.</p>
  <div class="bt" data-bt="bt-inputs"></div>
</div></section>

<section class="section alt" data-nav="Tab by tab"><div class="wrap">
  <div class="sec-head"><span class="kicker">Topic 2</span><h2>The workbook, tab by tab</h2><p>Each tab answers one question. Investment Range and Offer Scenarios are built only for clients raising money through crowdfunding or private investors.</p></div>
  <div class="tblwrap"><table class="tbl"><thead><tr><th>Tab</th><th>The question it answers</th><th>What the Sr checks</th></tr></thead><tbody><tr><th scope="row">Assumptions</th><td>What did we assume, and where did each value come from?</td><td>Every value has a source; every yellow cell is on the clarification list</td></tr><tr><th scope="row">Mode 1 CapEx</th><td>What does it cost to open one unit?</td><td>The package is fixed; third-party costs are lowest, typical and highest by cost driver; working capital is 3 months of fixed costs</td></tr><tr><th scope="row">Mode 2 P&amp;L</th><td>What does one unit earn in a month?</td><td>Break-even is solved by formula; Target is at or below the best real branch; the tax switch works</td></tr><tr><th scope="row">Ramp-Up</th><td>When does it make money, and when is the money back?</td><td>Payback is counted from signing; the deepest loss is covered by working capital</td></tr><tr><th scope="row">Branch Data</th><td>What have real units actually sold?</td><td>Figures are as given by the client, with the weak units included</td></tr><tr><th scope="row">COGS Basis</th><td>What does each item really cost?</td><td>Recipe cells recomputed; selling prices match the actual menu or price list</td></tr><tr><th scope="row">Investment Range</th><td>How much does the site change the investment?</td><td>Optional: built only for clients raising money through crowdfunding or private investors. The range a buyer will actually face, and payback at each end of it</td></tr><tr><th scope="row">Offer Scenarios</th><td>What does each perk cost, and what does it change?</td><td>Optional: built only for clients raising money through crowdfunding or private investors. Every perk valued and costed; the package price unchanged</td></tr></tbody></table></div>
</div></section>

<section class="section" data-nav="Mode 1"><div class="wrap">
  <div class="sec-head"><span class="kicker">Topic 3 · Mode 1 CapEx</span><h2>What it costs to open</h2><p>Mode 1 separates what the franchisee pays the franchisor from what they pay everyone else, because only the first is fixed. Switch the site and watch which parts of the bar move.</p></div>
  <div data-c="mode1"></div>
  <div class="grid g4" style="margin-top:18px">
    <div class="card"><h3>Franchise Package</h3><p class="small">Fixed in every town: 1.1 the Franchise Fee (name, system, training, support) plus 1.2 the Set-up Fee (what the franchisor supplies, itemised).</p></div>
    <div class="card"><h3>Third-party costs</h3><p class="small">Paid directly by the franchisee and vary with the site. Shown as lowest, typical and highest, with the cost driver named: site condition, size, seats, distance from HQ, the LGU's fees.</p></div>
    <div class="card"><h3>Deposits and working capital</h3><p class="small">Rent advance and deposits, opening inventory, and a revolving fund of 3 months of fixed costs.</p></div>
    <div class="card"><h3>The summary lines</h3><p class="small">2.4 the Franchise Package, 2.5 package plus third-party costs (the payback base), 2.6 total cash before opening.</p></div>
  </div>
  <h3 style="margin:30px 0 12px">What to watch: the package is never the figure a buyer needs</h3>
  <div class="vs" style="max-width:640px"><div><h4>K-Street Evo City · package</h4><b class="big">₱799,000</b><p class="small">The headline figure.</p></div><div><h4 style="color:var(--gold)">Total cash before opening, typical site</h4><b class="big">₱3,156,317</b><p class="small">The package is about a quarter of the cash the franchisee must have.</p></div></div>
  <p class="callout warn" style="margin-top:16px">A Readiness Check (3.7) built on the package price qualifies people who cannot afford to open. When you hear "the investment is ₱823,000", ask: <strong>"Is that what the franchisee needs in the bank?"</strong></p>
  <div class="bt" data-bt="bt-mode1"></div>
</div></section>

<section class="section alt" data-nav="Mode 2"><div class="wrap">
  <div class="sec-head"><span class="kicker">Topic 4 · Mode 2 P&amp;L</span><h2>What one unit earns</h2><p>The monthly P&amp;L of one unit at steady volume, in five columns. The columns are the heart of the workbook, so each one has a rule.</p></div>
  <div class="tblwrap"><table class="tbl"><thead><tr><th>Column</th><th>What it is</th><th>The rule</th></tr></thead><tbody><tr><th scope="row">Break-even</th><td>The sales where profit is zero</td><td>Solved by formula, never typed in</td></tr><tr><th scope="row">Level 1 Conservative</th><td>A unit that opens in an ordinary site and never becomes a star</td><td>What a buyer should plan their life on</td></tr><tr><th scope="row">Level 2 Target</th><td>What a well-run unit should reach</td><td>At or below what the best real branch has actually sold</td></tr><tr><th scope="row">Level 3 Optimistic</th><td>A strong unit in a strong site</td><td>Shown for range, never sold as likely</td></tr><tr><th scope="row">Reference (optional)</th><td>The owner's own projection, if they have one</td><td>Shown for comparison only, never a level. K-Street's Evo City deck projected ₱802,560 a month; the workbook keeps it as a reference column</td></tr></tbody></table></div>
  <p class="muted small" style="margin:12px 0 26px">Rows run in the same order in every workbook: A revenue; B direct costs; C gross profit; D fixed operating expenses; E variable operating expenses; F profit (EBITDA, income tax, net income after tax); G ROI (payback, which is line 2.5 divided by the monthly profit).</p>
  <h3 style="margin-bottom:12px">Snaxxville, monthly</h3>
  <div class="tblwrap"><table class="tbl"><thead><tr><th>Snaxxville, monthly</th><th>Break-even</th><th>Conservative</th><th>Target</th><th>Optimistic</th></tr></thead><tbody><tr><th scope="row">Transactions a day</th><td>46.5</td><td>100</td><td>120</td><td>148</td></tr><tr><th scope="row">Sales</th><td>₱314,099</td><td>₱675,000</td><td>₱810,000</td><td>₱999,000</td></tr><tr><th scope="row">Gross margin</th><td>52%</td><td>52%</td><td>52%</td><td>52%</td></tr><tr><th scope="row">EBITDA</th><td>–</td><td>₱133,533</td><td>₱183,483</td><td>₱253,413</td></tr><tr><th scope="row">Net income after tax</th><td>–</td><td>₱106,827</td><td>₱146,787</td><td>₱202,731</td></tr><tr><th scope="row">Payback, steady state</th><td>–</td><td>10.7 months</td><td>7.8 months</td><td>5.7 months</td></tr><tr><th scope="row">Payback from signing</th><td>–</td><td>16 months</td><td>13 months</td><td>11 months</td></tr></tbody></table></div>
  <div class="split" style="margin-top:28px">
    <div class="stack"><div data-c="breakeven"></div><p class="callout"><strong>Do the break-even by hand once.</strong> A trainee who can do this on paper can tell when a formula is wrong.</p></div>
    <div class="stack"><div data-c="tax"></div>
      <div class="card"><h3><span data-ic="alert"></span>State the basis</h3><p class="small">Most workbooks run to net income after tax. K-Street Evo City v2 runs to EBITDA only, on the client's instruction, because income tax is borne by each profit-share holder. Either can be right, but the version note and the Blueprint must say which one, and a payback on EBITDA must never be compared with a payback on net income.</p></div>
    </div>
  </div>
  <div class="bt" data-bt="bt-mode2"></div>
</div></section>

<section class="section" data-nav="Ramp-Up and offer"><div class="wrap">
  <div class="sec-head"><span class="kicker">Topic 5 · Ramp-Up and Offer Scenarios</span><h2>The payback to quote, and what each perk costs</h2><p>A new unit does not open at steady volume. Ramp-Up plays the P&amp;L month by month, from signing through the pre-opening months and the climb to each level: about 6 months for food and about 18 for services such as therapy and education, or the client's own opening history when it exists.</p></div>
  <div class="calc" style="margin-bottom:18px">
    <h3>Snaxxville at Target: two true numbers, one honest one</h3>
    <div class="hbar">
      <div class="hbar-row"><div class="lab"><span>Payback at steady state</span><span>7.8 months</span></div><div class="hbar-track"><i style="width:43.3%;background:#8FA3BF"></i></div></div>
      <div class="hbar-row"><div class="lab"><span>Payback from signing <span class="light green">quote this one</span></span><span>13 months</span></div><div class="hbar-track"><i style="width:72.2%;background:var(--gold)"></i></div></div>
      <div class="hbar-row"><div class="lab"><span>Healthy band from signing</span><span>12 to 18 months</span></div><div class="hbar-track"><i style="width:66.6%;background:transparent"></i><i style="width:33.4%;background:var(--good-bg);border:1.5px dashed var(--good)"></i></div></div>
    </div>
    <p>Only 13 is honest to put in front of a buyer, because the buyer's money leaves on the day they sign, not on the day the store reaches 120 transactions.</p>
  </div>
  <div class="grid g3">
    <div class="card"><h3><span data-ic="trend"></span>First profitable month</h3><p>When the unit starts making money after tax.</p></div>
    <div class="card"><h3><span data-ic="alert"></span>Deepest cumulative loss</h3><p>The worst point before the unit turns, which the revolving fund in Mode 1 must cover.</p></div>
    <div class="card"><h3><span data-ic="calcheck"></span>Payback from signing</h3><p>Pre-opening months plus the months to recover line 2.5. This is the payback to quote.</p></div>
  </div>
  <h3 style="margin:30px 0 12px">Offer Scenarios: value and effect on payback are different questions</h3>
  <div class="grid g2">
    <div class="card"><h3>Snaxxville perk A</h3><p>A reduced system fee of ₱15,000 for the first 6 months.</p><div class="out"><div><b>₱90,000</b><span>Worth to the franchisee, and the cost to Snaxxville</span></div><div><b>13 / 16</b><span>Months to payback at Target and Conservative: unchanged</span></div></div></div>
    <div class="card"><h3>K-Street option B</h3><p>A waived renewal fee.</p><div class="out"><div><b>₱118,750</b><span>Worth to the franchisee</span></div><div><b>Month 61</b><span>When it arrives, so it does nothing for payback</span></div></div></div>
  </div>
  <p class="muted" style="margin-top:12px">Every founding perk in Part 6 is valued and costed here before it is offered, and payback is re-run with the perk in place. The offer never changes the package price. The buyer should hear both answers honestly.</p>
  <div class="bt" data-bt="bt-ramp"></div>
</div></section>

<section class="section alt" data-nav="Red flags"><div class="wrap">
  <div class="sec-head"><span class="kicker">Topic 6</span><h2>The red flags</h2><p>Run every check on every version. A flag is not a reason to hide a number; it is a conversation with the client before the Blueprint is written.</p></div>
  <div class="flags">
    <div class="flag amber"><h3>Gross margin (food)</h3><span class="healthy">Healthy: 50 to 55%</span><p>Snaxxville is at 52%, under its 55% target, with shakes not yet costed.</p><span class="lights"><span class="light amber">Amber · a question for the client</span></span></div>
    <div class="flag mixed"><h3>Payback from signing</h3><span class="healthy">Healthy: 12 to 18 months</span><p>Snaxxville 13 months at Target. K-Street Evo City 27 months at Target and 53 at Conservative: a conversation about the site, not about raising the levels.</p><span class="lights"><span class="light green">Snaxxville green</span><span class="light red">K-Street red</span></span></div>
    <div class="flag"><h3>Payback against the term and the lease</h3><span class="healthy">Healthy: well inside the 5-year term and the lease</span><p>At K-Street Evo City's Conservative level the payback base is not recovered within the current lease, which ends in April 2029.</p></div>
    <div class="flag"><h3>Fees at break-even</h3><span class="healthy">Healthy: royalty 5 to 8%; total take under about 20% of sales</span><p>Snaxxville's fixed ₱30,000 fee is 3.7% of sales at Target but 9.6% at break-even.</p></div>
    <div class="flag"><h3>Rent (mall sites)</h3><span class="healthy">Healthy: occupancy at or below 12% of sales; mall quota met</span><p>K-Street Evo City occupancy is 12.9% at Target, and the Conservative level falls just below the mall's ₱510,400 monthly quota.</p></div>
    <div class="flag"><h3>The source data itself</h3><span class="healthy">Healthy: recomputed, not copied</span><p>Snaxxville's recipe costing had two cells typed over; recomputed, the burger costs ₱22.67, not ₱19.62.</p></div>
    <div class="flag"><h3>Legal blockers</h3><span class="healthy">Healthy: none open</span><p>K-Street: the system fee in the model differs from the Franchise Agreement, and the profit-share seats need Legal Counsel before any is sold.</p></div>
    <div class="flag"><h3>Estimates</h3><span class="healthy">Healthy: none left yellow at approval</span><p>Every Smart Fill default confirmed or replaced in the clarification round.</p></div>
  </div>
  <p class="callout warn" style="margin-top:18px"><strong>Common trap: fixing a red payback by raising the levels.</strong> Ask "What evidence would let you raise Target?" If there is none, the fix is in the package, the fees or the site, or it is an honest no.</p>
  <h3 style="margin:30px 0 12px">Philippine standards built into the workbook</h3>
  <p class="muted" style="margin-bottom:12px">These are NF's defaults. A client's own figures replace them whenever they exist, and every default stays yellow until confirmed.</p>
  <div class="tblwrap"><table class="tbl"><thead><tr><th>Item</th><th>NF default</th></tr></thead><tbody><tr><th scope="row">Royalty</th><td>5 to 8% of sales; the franchisor's total take under about 20%</td></tr><tr><th scope="row">Franchise term</th><td>5 years; renewal fee 25 to 50% of the Franchise Fee</td></tr><tr><th scope="row">Business tax</th><td>3% percentage tax below ₱3M annual sales; VAT registration above</td></tr><tr><th scope="row">Income tax</th><td>Corporate income tax of 20% or 25% depending on the company, and the 2% minimum corporate income tax where it applies; confirm with the client's accountant</td></tr><tr><th scope="row">Working capital</th><td>3 months of fixed costs</td></tr><tr><th scope="row">Smart Fill, when the client has no figure</th><td>Permits ₱25,000 to ₱35,000; rent about 10% of sales; utilities 5 to 8%; local store marketing 2 to 3%. Always yellow until confirmed</td></tr></tbody></table></div>
  <div class="bt" data-bt="bt-flags"></div>
</div></section>

<section class="section" data-nav="Clarify, then Blueprint"><div class="wrap">
  <div class="sec-head"><span class="kicker">Topic 7</span><h2>The clarification round, then into the Blueprint</h2><p>When the first full workbook is ready, the Sr sends the client a short list: every yellow cell, every red flag and every figure that could not be traced, each written as one question the owner can answer. A short message goes with it, for example on Viber: what changed, what is needed, and by when.</p></div>
  <div class="callout dark" style="margin-bottom:26px"><strong style="color:var(--gold)">This is a Radical Candor conversation, not a spreadsheet task.</strong> "Your Target is above anything a branch has sold" and "at Conservative the unit misses the mall's sales quota" are hard sentences for an owner to hear. Say them in the clarification round, while the numbers can still change, not after a franchisee has signed.</div>
  <h3 style="margin-bottom:12px">From the workbook to the Blueprint card</h3>
  <div class="maplist">
    <div><span>Branch Data and the main-branch P&amp;L</span><i>→</i><span>2.3 Proof: Unit Performance</span></div>
    <div><span>Average ticket and sales mix, checked against the price ceiling in 1.2</span><i>→</i><span>2.4 How a Unit Makes Money</span></div>
    <div><span>Conservative volume</span><i>→</i><span>1.3 Power Territory (the territory rule)</span></div>
    <div><span>Break-even and the ramp-up</span><i>→</i><span>3.4 Power Pain DNA and 3.6 Power Delta 10X</span></div>
    <div><span>Total cash before opening (2.6)</span><i>→</i><span>3.7 Readiness Check</span></div>
    <div><span>Mode 2 levels and payback from signing</span><i>→</i><span>3.9 Power Economics: Projections</span></div>
    <div><span>Mode 1, and the Investment Range when built</span><i>→</i><span>3.10 Power Economics: Investment</span></div>
    <div><span>Fees as a share of sales at each level</span><i>→</i><span>4.2 Fair Share</span></div>
    <div><span>Term, renewal and fees</span><i>→</i><span>4.4 Franchise Terms</span></div>
    <div><span>The changes between versions</span><i>→</i><span>5.1 Foundation Upgrades</span></div>
    <div><span>Offer Scenarios, only when the tab is built</span><i>→</i><span>6.3 Value stack and 6.6 Founding perks</span></div>
  </div>
  <p class="muted" style="margin-top:14px">Try this before Session 3: if the ticket were ₱200 instead of ₱225, which Blueprint cards would change?</p>
</div></section>

<section class="section alt" data-nav="Session 3"><div class="wrap">
  <div class="sec-head"><span class="kicker">In the room</span><h2>Session 3</h2></div>
  <article class="session" id="session-3"><header class="session-h"><span class="session-n">S3</span><div><h3>The Financial Goals</h3><p class="session-meta"><span data-ic="clock"></span>240 minutes · 4 hours</p></div></header><p class="session-purpose">Learn how NF builds a client&#x27;s Financial Goals workbook, how to read and challenge every tab, and how to run the clarification round, so every number in the Blueprint can be trusted.</p><p class="tags" data-skilltags="First Principles, Radical Candor, Follow the Good, AI Integration, Systems Thinking, Relentless Execution"></p><div class="session-cols"><div><h4><span data-ic="target"></span>By the end, you can</h4><ul class="ticks"><li>Write the Step 1 diagnosis from a client&#x27;s inputs</li><li>Build Mode 1 for two different sites</li><li>Compute break-even by hand and check it against the workbook</li><li>Tell steady-state payback from payback from signing</li><li>Cost a founding perk</li><li>Run the red-flag checks</li><li>Write a clarification list and message to the owner</li></ul></div><div><h4><span data-ic="bag"></span>What is prepared for this session</h4><p class="small">The Financial Goals teaching pages. Snaxxville_Financial_Goals_2026_v0_4 and KStreet_EvoCity_Financial_Goals_2026_v2, on screen and printed by tab. The NF Financial Goals skill set up in Claude. Calculators. Trainees bring their live client&#x27;s branch sales, operating expenses and costing, and their Session 2 field notes for Session 4.</p></div></div><details class="agenda"><summary><span data-ic="list"></span>Timed agenda <span class="muted">(11 segments)</span></summary><ol class="timeline"><li class=""><span class="tl-time">0:00–0:15</span><div><strong>Why the workbook comes first</strong><p>Trace Snaxxville&#x27;s 13-month payback to its sources</p><p class="tags" data-skilltags="First Principles, Systems Thinking"></p></div></li><li class=""><span class="tl-time">0:15–0:40</span><div><strong>Inputs and the diagnosis</strong><p>The inputs, the four steps; sort Snaxxville&#x27;s inputs; write the diagnosis</p><p class="tags" data-skilltags="First Principles, AI Integration"></p></div></li><li class=""><span class="tl-time">0:40–1:20</span><div><strong>Mode 1</strong><p>Package versus third-party costs; build two sites; package versus total cash</p><p class="tags" data-skilltags="First Principles, Radical Candor"></p></div></li><li class="brk"><span class="tl-time">1:20–1:30</span><div><strong>Break</strong></div></li><li class=""><span class="tl-time">1:30–2:20</span><div><strong>Mode 2</strong><p>Five columns and their rules; break-even by hand; fees at break-even; the tax switch</p><p class="tags" data-skilltags="First Principles, Systems Thinking"></p></div></li><li class=""><span class="tl-time">2:20–2:45</span><div><strong>Ramp-Up</strong><p>Steady-state payback versus payback from signing; the deepest loss</p><p class="tags" data-skilltags="Radical Candor, Follow the Good"></p></div></li><li class="brk"><span class="tl-time">2:45–2:55</span><div><strong>Break</strong></div></li><li class=""><span class="tl-time">2:55–3:20</span><div><strong>Offer Scenarios</strong><p>Cost a perk; design one; value versus effect on payback</p><p class="tags" data-skilltags="Follow the Good"></p></div></li><li class=""><span class="tl-time">3:20–3:40</span><div><strong>Red-flag clinic</strong><p>Every check on K-Street Evo City v2</p><p class="tags" data-skilltags="Radical Candor, Follow the Good"></p></div></li><li class=""><span class="tl-time">3:40–3:55</span><div><strong>The clarification round</strong><p>Clarification list and message to the owner</p><p class="tags" data-skilltags="Radical Candor, Relentless Execution"></p></div></li><li class=""><span class="tl-time">3:55–4:00</span><div><strong>Close</strong><p>Homework</p></div></li></ol></details><div class="hw"><div><h4><span data-ic="pencil"></span>Homework <span class="due">due Session 4</span></h4><p>For your live client, write the Step 1 diagnosis from the inputs you have. If the client already has a workbook, run every red-flag check on it, rate each one, and trace three figures in its Blueprint or pitch deck back to their cells. If it does not, build Mode 1 and Mode 2 with the Financial Goals skill and check break-even by hand. Write the clarification list and the message to the owner, and have your facilitator review them before anything is sent.</p></div><div><h4><span data-ic="folder"></span>Evidence to collect</h4><p>The diagnosis, the red-flag table with ratings, the break-even check, the three traced figures, the clarification list and the message.</p></div></div></article>
</div></section>
`;
