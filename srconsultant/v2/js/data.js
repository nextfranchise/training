/* Site structure, Meta Skill groups, the Problem-Solving Loop and every Brain Train exercise.
   Edit this file to change questions or navigation. Teaching-page text lives in content.js. */
window.NF = window.NF || {};

NF.routes = [
  { id: 'home', nav: 'Start here', bts: ['bt-program'] },
  { id: 'meta-skills', nav: 'Week 1 · Meta Skills', wk: 'Week 1', title: 'The 13 Meta Skills', blurb: 'Why they matter, how an NF consultant differs from a traditional one, and a teaching page for each of the 13.', bts: ['bt-why', 'bt-tradnf', 'bt-dino', 'bt-skills'] },
  { id: 'financial-goals', nav: 'Week 2A · Financial Goals', wk: 'Week 2A', title: 'The Financial Goals', blurb: 'Build and challenge the workbook every Blueprint number comes from: Mode 1, Mode 2, Ramp-Up and the red flags.', bts: ['bt-inputs', 'bt-mode1', 'bt-mode2', 'bt-ramp', 'bt-flags'] },
  { id: 'blueprint', nav: 'Week 2B · Blueprint', wk: 'Week 2B', title: 'The Franchise Blueprint', blurb: 'How the Blueprint works, then all 36 teaching pages card by card, each with a strong and a weak version.', bts: ['bt-how', 'bt-p13', 'bt-p46'] },
  { id: 'problem-solving', nav: 'Week 3 · The Loop', wk: 'Week 3', title: 'Putting them together', blurb: 'Run the eight-step Problem-Solving Loop on a real problem, then practice the hard conversation with an owner.', bts: ['bt-loop', 'bt-candor'] },
  { id: 'capstone', nav: 'Week 4 · Capstone', wk: 'Week 4 and after', title: 'Capstone and certification', blurb: 'Present to the owner, get an honest score, write the 90-day plan, and work toward the six-item Sr gate.', bts: ['bt-capstone', 'bt-gate'] },
  { id: 'toolkit', nav: 'Toolkit', wk: 'Reference', title: 'Toolkit', blurb: 'Templates B1 to B9, the rubric and your own score sheet, the role-play briefs and the case pack.', bts: ['bt-status'] }
];

NF.groups = {
  direction: 'Set direction', focus: 'Sharpen focus', evidence: 'Turn it into evidence',
  honest: 'Keep it honest', speed: 'Speed it up', human: 'Keep it human', bar: 'The bar'
};
/* group, icon and whether it is one of the seven Sr focus skills (Appendix C) */
NF.skillMeta = {
  'Customer Obsession': ['direction', 'heart', 0], 'First Principles': ['direction', 'cube', 0],
  'Power Law': ['focus', 'bars', 1], 'Systems Thinking': ['focus', 'loop', 1],
  'Ground Commando': ['evidence', 'pin', 0], 'Relentless Execution': ['evidence', 'calcheck', 0], 'Learning Acuity': ['evidence', 'book', 1],
  'Radical Candor': ['honest', 'speak', 1], 'AI Integration': ['speed', 'spark', 0],
  'Follow the Good': ['human', 'compass', 1], 'Whole Person': ['human', 'user', 0], 'Deeply Personal Leadership': ['human', 'flag', 1],
  'Radical Outcomes': ['bar', 'trend', 1]
};
NF.groupOrder = ['direction', 'focus', 'evidence', 'honest', 'speed', 'human'];

NF.road = [
  { k: 'Week 1', t: 'Meta Skills', ic: 'brain', to: 'meta-skills', items: [['S1', 'Why the Meta Skills matter, and all 13'], ['S2', 'All 13 at work']], note: 'Case: Dino Crew' },
  { k: 'Week 2', t: 'Goals + Blueprint', ic: 'calc', to: 'financial-goals', to2: 'blueprint', items: [['S3', 'Financial Goals (4 hrs)'], ['S4', 'Blueprint Parts 1 to 3 (4 hrs)'], ['S5', 'Blueprint Parts 4 to 6 (4 hrs)']], note: 'Cases: Snaxxville and four more NF Blueprints' },
  { k: 'Week 3', t: 'Mixed together', ic: 'loop', to: 'problem-solving', items: [['S6', 'The Problem-Solving Loop'], ['S7', 'The hard conversation']], note: 'Case: Teamworks' },
  { k: 'Week 4', t: 'Capstone', ic: 'trophy', to: 'capstone', items: [['S8', 'Advisory to the owner'], ['S9', 'Scoring and 90-day plan']], note: 'Your own live client' },
  { k: 'Months 2 to 4', t: 'Implementation', ic: 'calcheck', to: 'capstone', items: [['Weekly', 'Peer check, reflection log, co-led client talk'], ['Monthly', 'Scoring and Learning Dividend']], note: 'Proved on live Blueprints' },
  { k: 'Gate', t: 'Sr certified', ic: 'key', to: 'capstone', gate: 1, items: [['6', 'gate items, each with evidence']], note: 'When the evidence is there, not on a fixed date' }
];

NF.loop = [
  { n: "Customer's voice", d: 'Say it as "I am the franchisee…", not "the client wants…"', s: ['Customer Obsession'], m: 5, c: 'Starts with "I am…"; no solution in the sentence' },
  { n: 'Assumptions', d: 'Mark each one Heard, Inferred, Client-said or Confirmed.', s: ['First Principles'], m: 10, c: 'At least eight; Client-said not treated as Confirmed' },
  { n: 'Causal chain', d: 'A leads to B leads to C, and why it repeats.', s: ['Systems Thinking'], m: 15, c: 'The chain loops back; causes, not a list of symptoms' },
  { n: 'One link', d: 'One fix. The rest goes on the "not yet" list.', s: ['Power Law'], m: 5, c: 'Only one; the "not yet" list exists' },
  { n: '10X outcome', d: 'The 2X version, then the 10X version and the feeling.', s: ['Radical Outcomes'], m: 10, c: 'A change the person would notice, and a named feeling' },
  { n: 'First-hand evidence', d: 'Who to talk to, which unit to visit.', s: ['Ground Commando'], m: 5, c: 'Named people or units, not "do more research"' },
  { n: 'Next proof', d: 'One proof, one owner, one date.', s: ['Relentless Execution'], m: 5, c: 'One proof, one owner, one date' },
  { n: 'Meta Skills check', d: 'Run the 13-row check. Any "no" is a revision.', s: ['Radical Candor', 'Learning Acuity'], m: 5, c: 'At least one honest "What\'s weak here" line' }
];

/* ---------- Brain Train ----------
   t: 'mcq' (o options, a index of the right one), 'sort' (buckets + items), 'order' (seq in the right order),
      'num' (a answer, tol tolerance), 'skillq' (n auto-built "which Meta Skill asks this?" questions) */
NF.bt = {
  'bt-program': { title: 'The program in five questions', items: [
    { t: 'mcq', q: 'How is the first month built?', o: ['9 sessions over four weeks, with homework on a live client', '13 sessions, one per Meta Skill', 'A two-day workshop and an exam', 'Self-paced reading with no sessions'], a: 0, why: 'Nine sessions, two a week (three in week 2). Sessions 3 to 5 run four hours. Homework is 2 to 3 hours a week, always on a live client.' },
    { t: 'mcq', q: 'Which Meta Skill is the bar all the others aim at?', o: ['Customer Obsession', 'Radical Outcomes', 'Relentless Execution', 'First Principles'], a: 1, why: 'Radical Outcomes: a 5 to 10X change in what the customer or franchisee cares about, not a 10% improvement.' },
    { t: 'mcq', q: 'Ground rule 3 says a fact we did not see or hear is…', o: ['Left out of the Blueprint for good', 'Marked Inferred until confirmed', 'Fine if the owner said it', 'Moved to the pitch deck'], a: 1, why: 'No invented facts. It stays Inferred until someone confirms it.' },
    { t: 'mcq', q: 'Every session ends in action. What does that look like?', o: ['A summary email', 'A longer to-do list', 'One next proof, one owner, one date', 'A new version of the deck'], a: 2, why: 'Ground rule 5. It is also step 7 of the Problem-Solving Loop.' },
    { t: 'mcq', q: 'When is a trainee certified as Sr?', o: ['At the end of week 4', 'After exactly three months', 'When all six gate items have evidence', 'When the capstone is presented'], a: 2, why: 'Certification comes when the evidence is there, not on a fixed date.' }
  ] },
  'bt-why': { title: 'Why the Meta Skills come first', items: [
    { t: 'mcq', q: 'The Meta Skills are best described as…', o: ['Techniques for filling in the template', 'Habits of thought', 'A scoring system for clients', 'A sales script'], a: 1, why: 'They decide what a consultant notices, what they ask, and what they refuse to write down without evidence.' },
    { t: 'mcq', q: 'Why does a consulting mistake cost more in franchising?', o: ['Franchise clients pay higher fees', 'It is copied into every branch that is sold, and franchisees pay for it', 'Franchise law is stricter', 'Owners read reports more closely'], a: 1, why: 'A mistake in one business stays there. In a franchise system it is copied into every branch sold, often paid for with life savings.' },
    { t: 'mcq', q: "In the founder's story, nine branches opened in three years. What happened next?", o: ['All nine were franchised', 'Six closed in two years, and the hired fix did not reach the root cause', 'Three closed and six doubled their sales', 'The brand was sold'], a: 1, why: 'A large franchise developer was hired, and the fix did not reach the root cause. That is why Next Franchise exists.' }
  ] },
  'bt-tradnf': { title: 'Traditional or NF?', items: [
    { t: 'sort', q: 'Which consultant is this?', buckets: ['Traditional consultant', 'NF consultant'], items: [
      { x: 'Copies sales, ROI and payback figures into the package as given.', b: 0, why: 'The NF consultant marks every figure Heard, Inferred, Client-said or Confirmed (First Principles).' },
      { x: 'Starts from the life of the end customer and the future franchisee.', b: 1, why: 'Customer Obsession. The traditional start is the owner\'s deck, menu and growth target.' },
      { x: 'Hands the owner a long list of everything that could be better.', b: 0, why: 'Power Law asks for one or two priorities and a "not yet" list.' },
      { x: 'Leaves one next proof, one owner and one date, and follows up.', b: 1, why: 'Relentless Execution. The traditional move is to hand over the report.' },
      { x: 'Softens the bad news to keep the client happy.', b: 0, why: 'Radical Candor says it plainly, with the reason and a next step.' },
      { x: 'Draws the chain until it loops and fixes the link that keeps it going.', b: 1, why: 'Systems Thinking, instead of fixing the symptom at the branch that complained.' },
      { x: 'Sells the biggest package to every interested buyer.', b: 0, why: 'Follow the Good: sell what the client needs, and turn away buyers who are not ready.' },
      { x: 'Uses AI to draft, then labels every line no one has verified.', b: 1, why: 'AI Integration. Pasting AI or desk research into the report is the traditional habit.' }
    ] }
  ] },
  'bt-dino': { title: 'Dino Crew: your move', items: [
    { t: 'mcq', q: 'Training has not started. What is the NF first move?', o: ['Send a memo quoting the training clause and the penalties', 'Meet the franchisees and ask how they train today and what gets in the way', 'Rebuild the training platform', 'Raise the royalty to fund trainers'], a: 1, why: 'Customer Obsession and Ground Commando: start from the franchisees\' day before writing any memo.' },
    { t: 'mcq', q: 'Someone says "the franchisees are just not interested". How do you treat that?', o: ['As Confirmed, because it explains everything', 'As an assumption until it is heard from them', 'As a reason to enforce penalties', 'As something to leave out'], a: 1, why: 'First Principles: every reason is an assumption until it is heard from the franchisees themselves.' },
    { t: 'mcq', q: 'What happens to the contract clause in the NF answer?', o: ['It is deleted', 'It is the first thing sent', 'It stays, as the floor rather than the first move', 'It is replaced by a bonus'], a: 2, why: 'The rule is right. On its own it changes nothing, because no one asked why training had not started.' },
    { t: 'mcq', q: 'Which of these is a real next proof?', o: ['"Franchisees will be reminded about training."', '"Training compliance to improve this quarter."', '"Every current team member has an account and a first module done by a set date, owned by a named training champion."', '"Next steps: to be discussed."'], a: 2, why: 'One proof, one owner, one date. The others cannot be checked.' }
  ] },
  'bt-skills': { title: 'Name the skill, spot the habit', items: [
    { t: 'skillq', n: 6 },
    { t: 'sort', q: 'Is the Meta Skill present or missing here?', buckets: ['Present', 'Missing'], items: [
      { x: '"Next steps: TBD."', b: 1, why: 'Relentless Execution is missing. There is no proof, owner or date.' },
      { x: 'An explicit "not yet" list the owner has seen.', b: 0, why: 'Power Law at work: one or two priorities, and the rest parked in the open.' },
      { x: "A persona copied from the owner's deck.", b: 1, why: 'Customer Obsession is missing. Nobody heard this customer.' },
      { x: 'Field quotes with names and dates.', b: 0, why: 'Ground Commando: first-hand contact, recorded with template B9.' },
      { x: 'Agreeing with the owner in the room and complaining after.', b: 1, why: 'Radical Candor is missing.' },
      { x: 'An outcome with a named feeling: peace of mind, pride, kampante.', b: 0, why: 'Radical Outcomes needs the emotional layer, and a way to show it happened.' }
    ] }
  ] },
  'bt-inputs': { title: 'Inputs, steps and colours', items: [
    { t: 'mcq', q: 'The pitch deck shows a payback that differs from the workbook. What happens?', o: ['The deck wins, it is client-facing', 'The workbook wins and the others are corrected', 'Average the two', 'Ask the franchisee which they prefer'], a: 1, why: 'The workbook is the source of truth for every number in the Blueprint, the pitch deck and the Franchise Agreement.' },
    { t: 'order', q: 'Put the four steps of building the workbook in order.', seq: ['Diagnose', 'Iterate', 'Build', 'Clarify and version'], why: 'Each step ends with something the team can check before the next one starts.' },
    { t: 'sort', q: 'Which cell colour is this?', buckets: ['Blue', 'Black', 'Green', 'Yellow'], items: [
      { x: 'Payroll of ₱64,000, taken from the back-office interview.', b: 0, why: 'Blue is an input taken from the client or a document.' },
      { x: 'Break-even sales.', b: 1, why: 'Black is a formula. Break-even is solved by formula, never typed in.' },
      { x: 'A value in Mode 2 that is pulled from the Assumptions tab.', b: 2, why: 'Green is a link to another tab.' },
      { x: 'Permits at the Smart Fill default of ₱25,000 to ₱35,000.', b: 3, why: 'Yellow is an estimate. The clarification round exists to turn yellow cells blue.' }
    ] },
    { t: 'mcq', q: 'The Financial Goals skill in Claude builds the workbook fast. What stays with the Sr?', o: ['The formatting', 'The arithmetic', 'Every input, every red flag and every client conversation about them', 'Nothing'], a: 2, why: 'The skill does the arithmetic. It will build a tidy workbook on a wrong ticket. The Sr owns the inputs.' }
  ] },
  'bt-mode1': { title: 'Mode 1: what it costs to open', items: [
    { t: 'num', q: 'Snaxxville, typical site. Franchise Package ₱823,000 plus third-party costs ₱325,000. What is line 2.5, the payback base?', unit: '₱', a: 1148000, tol: 0, why: '₱823,000 + ₱325,000 = ₱1,148,000. Line 2.5 is the package plus third-party costs.' },
    { t: 'num', q: 'Now add deposits, opening inventory and the revolving fund of ₱433,650. What is line 2.6, total cash before opening?', unit: '₱', a: 1581650, tol: 0, why: '₱1,148,000 + ₱433,650 = ₱1,581,650. This is what the franchisee needs in the bank.' },
    { t: 'mcq', q: 'Why is the package the same in every town but the total investment is not?', o: ['The Franchise Fee changes by region', 'Third-party costs, deposits and working capital vary with the site', 'Tax rates differ by town', 'The owner discounts some towns'], a: 1, why: 'Only what the franchisee pays the franchisor is fixed. Construction moves most: ₱100,000 for a fitted site to ₱400,000 for a bare 50 sqm.' },
    { t: 'mcq', q: 'K-Street Evo City: package ₱799,000, total cash before opening ₱3,156,317 at a typical site. The package is about what share of the cash needed?', o: ['About a quarter', 'About half', 'About three quarters', 'Nearly all of it'], a: 0, why: 'A Readiness Check built on the package price qualifies people who cannot afford to open.' },
    { t: 'mcq', q: 'What is the NF default for working capital?', o: ['1 month of sales', '3 months of fixed costs', '6 months of rent', '10% of the package'], a: 1, why: 'A revolving fund of 3 months of fixed costs. It must cover the deepest cumulative loss in Ramp-Up.' }
  ] },
  'bt-mode2': { title: 'Mode 2: break-even by hand', items: [
    { t: 'num', q: "Snaxxville's fixed costs are ₱116,217 a month. Direct costs take 48% of sales and variable expenses 15%. What are break-even sales a month? (Round to the nearest peso.)", unit: '₱', a: 314100, tol: 150, why: 'Each peso of sales leaves 37 centavos. ₱116,217 ÷ 0.37 = about ₱314,099 a month.' },
    { t: 'num', q: 'At a ₱225 ticket and 30 days a month, how many transactions a day is ₱314,099?', unit: 'a day', a: 46.5, tol: 0.2, why: '₱314,099 ÷ ₱225 ÷ 30 = 46.5 transactions a day.' },
    { t: 'num', q: 'The fixed ₱30,000 monthly fee is 3.7% of sales at Target (₱810,000). What percent of sales is it at break-even (₱314,099)?', unit: '%', a: 9.6, tol: 0.15, why: '₱30,000 ÷ ₱314,099 = 9.6%. A fee that looks light at Target lands hard on a weak unit. That goes to 4.2 Fair Share.' },
    { t: 'mcq', q: 'What is the rule for the Target column?', o: ['The owner\'s hoped-for sales', 'At or below what the best real branch has actually sold', '20% above Conservative', 'The industry average'], a: 1, why: 'If Target did not come from a real branch, it is a flag.' },
    { t: 'mcq', q: 'A unit sells ₱260,000 a month. Which business tax applies?', o: ['3% percentage tax', 'VAT registration', 'No business tax', 'It depends on the town'], a: 1, why: '₱260,000 × 12 = ₱3.12M, above the ₱3M threshold. At ₱240,000 a month (₱2.88M) it would pay the 3% percentage tax.' },
    { t: 'mcq', q: 'Which level should a buyer plan their life on?', o: ['Break-even', 'Conservative', 'Target', 'Optimistic'], a: 1, why: 'Conservative is a unit that opens in an ordinary site and never becomes a star. Optimistic is shown for range, never sold as likely.' }
  ] },
  'bt-ramp': { title: 'Ramp-Up and the offer', items: [
    { t: 'mcq', q: 'Snaxxville at Target pays back in 7.8 months at steady state and 13 months from signing. Which goes in front of a buyer?', o: ['7.8 months', '13 months', 'The average, about 10', 'Neither'], a: 1, why: "Both are true. Only 13 is honest, because the buyer's money leaves on the day they sign." },
    { t: 'mcq', q: 'What must cover the deepest cumulative loss before the unit turns?', o: ['The Franchise Fee', 'The revolving fund in Mode 1', 'A bank loan taken later', 'The franchisor'], a: 1, why: 'If that money is not in Mode 1, the franchisee runs out before the unit turns.' },
    { t: 'num', q: 'Snaxxville perk A cuts the monthly system fee from ₱30,000 to ₱15,000 for the first 6 months. What is it worth to the franchisee?', unit: '₱', a: 90000, tol: 0, why: '₱15,000 saved × 6 months = ₱90,000. It costs Snaxxville the same, and payback stays at 13 months at Target.' },
    { t: 'mcq', q: "K-Street's waived renewal fee is worth ₱118,750 but arrives at month 61. What does it do for payback?", o: ['Cuts it by six months', 'Nothing', 'Doubles it', 'Makes it negative'], a: 1, why: "A perk's value and its effect on payback are different questions. The buyer should hear both answers." },
    { t: 'mcq', q: 'With no opening history, what climb does Ramp-Up assume for a services brand such as therapy or education?', o: ['About 3 months', 'About 6 months', 'About 18 months', 'About 36 months'], a: 2, why: 'About 6 months for food, about 18 for services. Use the client\'s own opening history when it exists.' }
  ] },
  'bt-flags': { title: 'Red-flag clinic', items: [
    { t: 'sort', q: 'Rate the flag.', buckets: ['Green', 'Amber', 'Red'], items: [
      { x: 'Snaxxville: payback 13 months from signing at Target.', b: 0, why: 'Healthy is 12 to 18 months from signing.' },
      { x: 'Snaxxville: gross margin 52%, under its 55% target, with shakes not yet costed.', b: 1, why: 'Inside the healthy 50 to 55% band but under target with a gap in the costing: amber, and a question for the client.' },
      { x: 'K-Street Evo City: payback 27 months at Target and 53 at Conservative.', b: 2, why: 'Red, and a conversation about the site, not about raising the levels.' }
    ] },
    { t: 'mcq', q: 'A payback comes out red. A colleague suggests raising Target. What do you ask?', o: ['"How high can we go?"', '"What evidence would let you raise Target?"', '"Can we hide the Conservative column?"', '"Will the owner notice?"'], a: 1, why: 'If there is no evidence, the fix is in the package, the fees or the site, or it is an honest no.' },
    { t: 'mcq', q: "Snaxxville's recipe costing had two cells typed over. Recomputed, the burger costs ₱22.67, not ₱19.62. Which check caught it?", o: ['Fees at break-even', 'The source data itself: recomputed, not copied', 'Rent on mall sites', 'Legal blockers'], a: 1, why: 'Recompute the source data. A tidy workbook on a typed-over cell is still wrong.' },
    { t: 'mcq', q: 'The clarification round is…', o: ['A spreadsheet clean-up task', 'A Radical Candor conversation', 'Optional when the owner is busy', 'Done after the franchisee signs'], a: 1, why: 'Say the hard sentences while the numbers can still change, not after a franchisee has signed.' }
  ] },
  'bt-how': { title: 'How the Blueprint works', items: [
    { t: 'mcq', q: 'Who reads the Franchise Blueprint?', o: ['Prospective franchisees', 'The franchisor and the Next Franchise team only', 'The public', 'Investors on a crowdfunding platform'], a: 1, why: 'It is internal. Franchisees never see it, and everything they do see is built from it.' },
    { t: 'order', q: 'Put the build process in order.', seq: ['Client documents', 'Questionnaires', 'Interviews', 'Financial Goals workbook', 'Clarify with client', 'Build Blueprint', 'Discuss and update'], why: 'The Blueprint comes after the approved workbook, and it is discussed and updated before anything is sold.' },
    { t: 'mcq', q: 'The research says the town cannot support Target. What changes first?', o: ['The Blueprint', 'The workbook, which is corrected and versioned', 'The pitch deck', 'Nothing, the owner decides'], a: 1, why: 'The research never overwrites the workbook. The Sr takes it to the client, the workbook is corrected, and the Blueprint follows.' },
    { t: 'mcq', q: 'A territory demand score comes to 4 out of 10. What does that mean?', o: ['Sell fewer territories', 'The rule is wrong', 'Raise the marketing budget', 'Round it up to 7'], a: 1, why: 'Below 7 means the rule is wrong. K-Street scored 4/10 and switched to a rent rule.' },
    { t: 'mcq', q: 'The Blueprint asks the same questions for two customers. Who are they?', o: ['The owner and the lawyer', 'The end customer (Part 1) and the franchisee (Part 3)', 'The crew and the supplier', 'NF and the client'], a: 1, why: 'The end customer decides whether a unit sells. The franchisee decides whether a unit is bought and run well.' },
    { t: 'mcq', q: 'You trace a promise in the pitch deck back toward its evidence and the trail breaks. What does that tell you?', o: ['The deck needs a redesign', 'The Blueprint is not finished', 'The promise should be made bigger', 'Nothing'], a: 1, why: 'That is the trace test: deck, to card, to evidence.' }
  ] },
  'bt-p13': { title: 'Strong card or weak card? (Parts 1 to 3)', items: [
    { t: 'sort', q: 'Strong or weak?', buckets: ['Strong', 'Weak'], items: [
      { x: '1.1 · "Our target market is students and young professionals aged 18–35, middle income, who love good food."', b: 1, why: 'A segment, not a person. Nothing a crew member could recognise.' },
      { x: '3.1 · "You\'ll recognise me because I ask how many months until I get my money back before I ask about the menu."', b: 0, why: 'First person, grounded in who has actually asked, and it names their first question.' },
      { x: '3.4 · "Pains: competition, rising costs, finding staff, marketing, location."', b: 1, why: 'Five frictions, no chain, no cause. A Pain DNA is one or two failure sequences.' },
      { x: '2.3 · Palapag at 26 transactions a day and the campus kiosk at 12 are shown too.', b: 0, why: 'Proof includes the weak units, because "a weak location stays small".' },
      { x: '3.1 · "Investors with ₱2M capital who want passive income."', b: 1, why: 'That is the franchisee most likely to fail.' },
      { x: '1.4 · "The binding constraint is supply logistics, not demand."', b: 0, why: 'Market Evidence ends by naming the binding constraint in one line.' },
      { x: '2.1 · "Founded in 2017 by a passionate entrepreneur with a dream to serve every Filipino."', b: 1, why: 'No cost, no lesson, nothing a franchisee can use.' }
    ] },
    { t: 'num', q: 'Territory rule. Conservative volume is 100 transactions a day, so 700 a week. At a conservative 3% weekly penetration, how many people does a town need?', unit: 'people', a: 23333, tol: 400, why: '700 ÷ 0.03 = about 23,000 people. That is Snaxxville\'s rule.' },
    { t: 'mcq', q: 'K-Street dropped the population rule for mall counters. What replaced it?', o: ['Required Sales = rent ÷ 0.12', 'Foot traffic counts', 'A 50,000-person minimum', 'No rule at all'], a: 0, why: '"A mall counter does not serve a municipality; it serves the people inside the building." Rent above 20% of realistic sales is fatal.' },
    { t: 'mcq', q: 'A prospect scores 6 out of 10 on the Readiness Check. What does the card say?', o: ['Sign, then train them', 'Below 7, do not sign', 'Sign at a higher fee', 'Let the owner decide by feel'], a: 1, why: 'The score is based on what the prospect has done: funds shown, site found, branch visited.' }
  ] },
  'bt-p46': { title: 'Fairness and the honest offer (Parts 4 to 6)', items: [
    { t: 'sort', q: 'Would this pass the Offer audit?', buckets: ['Honest, keep it', 'Rewrite it'], items: [
      { x: '"Guaranteed ROI in 12 months or your money back."', b: 1, why: 'A guarantee on sales or income is a promise no franchisor controls.' },
      { x: '"If the crew has not passed certification by opening day, the trainer stays at our cost until they do."', b: 0, why: 'It covers only what the franchisor controls.' },
      { x: '"Only 5 slots left!" with no real limit behind it.', b: 1, why: 'False scarcity works once and then destroys trust in every later batch.' },
      { x: '"Only 2 openings a month, because that is what the team can certify while running its own branches."', b: 0, why: 'Real scarcity from capacity, and the owner could show the limit if asked.' },
      { x: 'A countdown that resets every month.', b: 1, why: 'Urgency is only credible if the next batch really pays more or gets less.' },
      { x: '"There is no discount countdown and no price that rises next month."', b: 0, why: "K-Street's Proving Two refuses false urgency." }
    ] },
    { t: 'mcq', q: "Three fee designs at break-even. Whose fee is the whole profit there?", o: ["Snaxxville's fixed ₱30,000 fee", "Teamworks' ₱100 per session", "The White Bucket's 5% royalty and 2% Marketing Fund", 'None of them'], a: 2, why: 'At 66 covers a day the royalty and fund are the whole profit, so a slow opening is where the fee bites hardest.' },
    { t: 'mcq', q: 'Which row belongs in 5.1 Foundation Upgrades?', o: ['"Improved the branding."', '"Contract term from 2 to 5 years, because at 2 years a slower store would barely recover its investment."', '"Owner plans to open 100 branches."', '"Updated the fonts."'], a: 1, why: 'Each row changes a decision, a number or a risk, with a reason tied to evidence.' },
    { t: 'mcq', q: 'What does the owner sign as the foundation?', o: ['Part 6 only', 'Parts 1 to 5 and the appendices; the Offer is approved separately', 'The pitch deck', 'Everything in one signature'], a: 1, why: 'Part 6 sits outside the foundation. Each offer version is approved on its own and replaces the last.' },
    { t: 'mcq', q: 'A claim in the body has a source that does not support it. Where does it go?', o: ['It stays, with "(to be confirmed)"', 'It is dropped from the body', 'It moves to the pitch deck', 'It moves to Part 6'], a: 1, why: 'K-Street removed "Filipinos eat Korean food 2–3 times a month" because its cited source does not support it.' }
  ] },
  'bt-loop': { title: 'Run the Loop', items: [
    { t: 'order', q: 'Put the eight steps of the Problem-Solving Loop in order.', seq: ["Customer's voice", 'Assumptions', 'Causal chain', 'One link', '10X outcome', 'First-hand evidence', 'Next proof', 'Meta Skills check'], why: 'Every client problem runs through the same eight steps and ends as a Problem Card.' },
    { t: 'mcq', q: '"One fix; the rest goes on \'not yet\'." Which Meta Skill is behind this step?', o: ['Systems Thinking', 'Power Law', 'Ground Commando', 'Whole Person'], a: 1, why: 'Step 4, One link.' },
    { t: 'mcq', q: 'Which is an acceptable answer for step 6, First-hand evidence?', o: ['"Do more research."', '"Talk to the Laoang crew lead and one regular customer by Friday."', '"Ask AI for a summary."', '"Re-read the owner\'s deck."'], a: 1, why: 'Named people or units, not "do more research".' },
    { t: 'mcq', q: 'In step 2 you list assumptions. What should you watch for?', o: ['Fewer than three', 'Client-said treated as Confirmed', 'Too many sources', 'Using the owner\'s words'], a: 1, why: 'At least eight assumptions, and Client-said is not Confirmed. Step 2 almost always shows the problem was framed from the owner\'s view.' },
    { t: 'mcq', q: 'Where do accepted Problem Cards go?', o: ['The pitch deck', 'Blueprint Part 5 Advisory', 'The Franchise Agreement', 'Appendix A'], a: 1, why: 'They become 5.1 Upgrades or 5.2 Risks. Anything still open goes to Appendix B.' }
  ] },
  'bt-candor': { title: 'The hard conversation', items: [
    { t: 'order', q: 'Put the three moves of candor in order.', seq: ['Name the weak point', 'Say why it matters', 'Offer the next step'], why: 'Plainly, with evidence for the franchisee or customer, and with a way forward the owner can say yes to.' },
    { t: 'mcq', q: 'Role-play 1. Your rule says a unit needs about 25,000 people; the town has 15,000 and scores 5/10. The owner says "The numbers are just estimates." What do you do first?', o: ['Repeat the numbers louder', 'Give in, the owner knows the food', 'Ask about the owner\'s situation, then show the evidence and offer a better town or a smaller format', 'Refuse to continue the engagement'], a: 2, why: 'Ask before telling. Then evidence, not opinion, and a next step.' },
    { t: 'mcq', q: 'Role-play 2. The owner wants "Guaranteed payback in 18 months or we refund the franchise fee." What do you offer?', o: ['The same guarantee at 24 months', 'A guarantee on what the franchisor controls: training, opening support or supply terms', 'No guarantee at all, and no alternative', 'A guarantee on sales instead'], a: 1, why: 'Keep the franchisee in the room: who gets hurt if the guarantee fails? Then offer a controllable guarantee that still sounds strong.' },
    { t: 'mcq', q: 'Role-play 3. A prospect has the money but scores 5/10 on readiness and would use the family\'s entire savings. What path do you give the owner?', o: ['A flat no, with a lecture', 'Sign now and train later', 'A "not yet" with clear conditions', 'Let the prospect decide alone'], a: 2, why: 'Below 7 means do not sign. A respectful path beats a flat no, and it treats the prospect as a whole person.' },
    { t: 'mcq', q: 'When do you name a Meta Skill to an owner?', o: ['At the start, to set the agenda', 'Only after the owner has used it', 'Never', 'Whenever they disagree'], a: 1, why: 'Facilitate by asking before telling, and keep the owner\'s words.' }
  ] },
  'bt-capstone': { title: 'Capstone ready?', items: [
    { t: 'mcq', q: 'During the peer check, the Revise rows are read aloud. What may you answer?', o: ['"Let me explain why I did that."', '"What I will change is…"', '"The client asked for it."', 'Nothing at all'], a: 1, why: 'No defending. The same rule applies in pair reviews and card clinics.' },
    { t: 'mcq', q: 'When is a section done?', o: ['When the owner stops asking questions', 'When every row of the Meta Skills check reads Pass', 'When it has ten upgrades', 'When time runs out'], a: 1, why: 'Fix time exists for this.' },
    { t: 'mcq', q: 'Which Advisory passes?', o: ['Twelve upgrades in the order they were found', 'One or two upgrades, each with a cause', 'A restatement of the owner\'s plan', 'Upgrades in wording only'], a: 1, why: 'Power Law applies to the Advisory too.' },
    { t: 'mcq', q: 'The "owner" pushes back hard on your payback figure, and the workbook supports you. What does passing look like?', o: ['Change the figure to keep the peace', 'Hold your position where the evidence supports it, and change it where it does not', 'Get harsher until they agree', 'Skip the slide'], a: 1, why: 'Hold without becoming harsh or giving in.' },
    { t: 'mcq', q: 'In your self-assessment you give yourself a 4 on Radical Candor but have nothing to show for it. What is the score?', o: ['4', '3', 'No score', '1'], a: 2, why: 'No evidence, no score.' }
  ] },
  'bt-gate': { title: 'The Sr gate', items: [
    { t: 'mcq', q: 'Gate item 1 asks for…', o: ['Level 4 on all 13', 'Level 4 on at least five of the seven Sr focus skills, and Level 3 or higher on the rest', 'Level 3 on everything', 'A passing exam'], a: 1, why: 'The seven Sr focus skills are Systems Thinking, Power Law, Radical Candor, Radical Outcomes, Follow the Good, Learning Acuity and Deeply Personal Leadership.' },
    { t: 'mcq', q: 'How many Problem Cards must be accepted into Part 5 Advisory?', o: ['One', 'At least three, across at least two brands', 'Ten on one brand', 'None'], a: 1, why: 'Gate item 2.' },
    { t: 'sort', q: 'Which rubric level is this?', buckets: ['1 Unaware', '2 Aware', '3 Practicing', '4 Embodied'], items: [
      { x: "Spots it in someone else's Blueprint; inconsistent in their own.", b: 1, why: 'Level 2, Aware.' },
      { x: 'Applies it unprompted, coaches others in it, and catches it missing in the owner\'s or the lead\'s framing.', b: 3, why: 'Level 4, Embodied.' },
      { x: 'Applies it when prompted; their sections pass the Meta Skills check.', b: 2, why: 'Level 3, Practicing.' }
    ] },
    { t: 'mcq', q: 'A trainee has not improved on their focus skills, and client load is the cause. What happens?', o: ['They leave the program', 'The load is reduced', 'They train on weekends', 'The gate is lowered'], a: 1, why: 'The training only works if there is time to practice.' }
  ] },
  'bt-status': { title: 'Heard, Inferred, Client-said or Confirmed?', items: [
    { t: 'sort', q: 'Mark the status.', buckets: ['Heard', 'Inferred', 'Client-said', 'Confirmed'], items: [
      { x: 'The owner says "mall traffic drives our sales". Nobody has checked the sales report yet.', b: 2, why: 'A belief handed over as fact is Client-said until a source confirms it.' },
      { x: 'On your branch visit a crew member tells you regulars order the same shake after 3pm.', b: 0, why: 'You heard it first-hand. Record it with the name and date (B9).' },
      { x: 'An AI draft says the province "has strong demand for affordable coffee". No source, no interview.', b: 1, why: 'AI-drafted lines are Inferred until a human confirms them.' },
      { x: "The town's population, taken from the latest PSA census, with the source recorded.", b: 3, why: 'Verified at its source.' },
      { x: 'Nobody has logged in to the training platform, so you conclude franchisees are not interested.', b: 1, why: 'A conclusion no one has heard from the franchisees is Inferred.' },
      { x: 'The owner estimates that a new branch opens in "about two weeks".', b: 2, why: 'Client-said. In the manual\'s scenario the last three openings took six to eight weeks.' }
    ] }
  ] }
};
