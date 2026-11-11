/**
 * NEXT FRANCHISE - BRAIN TRAIN ENGINE
 * Supports: mcq, truefalse, match, sort, order, spot, calc
 * Delivers immediate feedback, non-judgmental explanations, star rankings, 
 * and persistent local progress.
 */

class BrainTrain {
  constructor(containerId, dataId, moduleId) {
    this.container = document.getElementById(containerId);
    this.moduleId = moduleId;
    this.currentIndex = 0;
    this.score = 0;
    this.questions = [];
    this.answered = [];

    const scriptTag = document.getElementById(dataId);
    if (scriptTag) {
      try {
        this.questions = JSON.parse(scriptTag.textContent);
      } catch (e) {
        console.error("Brain Train JSON parse error", e);
      }
    }

    if (this.container && this.questions.length > 0) {
      this.init();
    }
  }

  init() {
    this.currentIndex = 0;
    this.score = 0;
    this.answered = [];
    this.renderQuestion();
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    const total = this.questions.length;

    let html = `
      <div class="nf-card brain-train-card gold-edge">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
          <div style="font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:var(--nf-gold-dark);">
            Brain Train · Question ${this.currentIndex + 1} of ${total}
          </div>
          <div style="display:flex; gap:6px;">
            ${this.questions.map((_, i) => `
              <div style="width:10px; height:10px; border-radius:50%; background:${
                i < this.currentIndex ? 'var(--nf-gold)' : i === this.currentIndex ? 'var(--nf-navy)' : 'var(--nf-border)'
              };"></div>
            `).join('')}
          </div>
        </div>

        <h3 style="font-size:var(--text-xl); margin-bottom:1.5rem; color:var(--nf-navy);">${q.q}</h3>
        <div id="quizInteractionArea">
    `;

    // Render by type
    if (q.type === "mcq") {
      html += `
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${q.options.map((opt, idx) => `
            <button class="btn btn-quiz-opt" data-opt="${idx}" style="text-align:left; justify-content:flex-start; padding:12px 18px; border:1px solid var(--nf-border); border-radius:var(--radius-md); background:var(--nf-surface);">
              <span style="font-weight:700; color:var(--nf-gold-dark); margin-right:12px;">${String.fromCharCode(65 + idx)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
      `;
    } else if (q.type === "truefalse") {
      html += `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
          <button class="btn btn-quiz-opt" data-bool="true" style="padding:16px; border:1px solid var(--nf-border); border-radius:var(--radius-md); font-weight:700; background:var(--nf-surface);">
            TRUE
          </button>
          <button class="btn btn-quiz-opt" data-bool="false" style="padding:16px; border:1px solid var(--nf-border); border-radius:var(--radius-md); font-weight:700; background:var(--nf-surface);">
            FALSE
          </button>
        </div>
      `;
    } else if (q.type === "spot") {
      const showStrongFirst = Math.random() > 0.5;
      html += `
        <div style="display:flex; flex-direction:column; gap:14px;">
          <button class="btn btn-spot-opt" data-version="${showStrongFirst ? 'strong' : 'weak'}" style="text-align:left; padding:16px; border:1px solid var(--nf-border); border-radius:var(--radius-lg); background:var(--nf-surface); display:block;">
            <div style="font-weight:700; font-size:0.75rem; text-transform:uppercase; color:var(--nf-muted); margin-bottom:6px;">Version 1</div>
            <div>${showStrongFirst ? q.strong : q.weak}</div>
          </button>
          <button class="btn btn-spot-opt" data-version="${showStrongFirst ? 'weak' : 'strong'}" style="text-align:left; padding:16px; border:1px solid var(--nf-border); border-radius:var(--radius-lg); background:var(--nf-surface); display:block;">
            <div style="font-weight:700; font-size:0.75rem; text-transform:uppercase; color:var(--nf-muted); margin-bottom:6px;">Version 2</div>
            <div>${showStrongFirst ? q.weak : q.strong}</div>
          </button>
        </div>
      `;
    } else if (q.type === "calc") {
      html += `
        <div style="display:flex; flex-direction:column; gap:12px; max-width:320px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-weight:800; font-size:1.25rem;">${q.unit || '₱'}</span>
            <input type="number" id="calcInput" class="calc-text-input" style="padding:12px; border:1px solid var(--nf-border); border-radius:var(--radius-md); font-size:1.1rem; width:100%;" placeholder="Enter amount">
          </div>
          <button class="btn btn-navy" id="calcSubmitBtn">Check Calculation</button>
        </div>
      `;
    } else if (q.type === "order") {
      const shuffled = [...q.items].map((item, origIdx) => ({ item, origIdx })).sort(() => Math.random() - 0.5);
      html += `
        <div style="margin-bottom:12px; font-size:var(--text-xs); color:var(--nf-muted);">
          Tap / click items in their proper sequential order:
        </div>
        <div id="orderItemsPool" style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
          ${shuffled.map((obj, i) => `
            <button class="btn order-item-btn" data-orig="${obj.origIdx}" style="text-align:left; justify-content:flex-start; padding:10px 14px; border:1px solid var(--nf-border); border-radius:var(--radius-md); background:var(--nf-surface);">
              ${obj.item}
            </button>
          `).join('')}
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-sm btn-secondary" style="color:var(--nf-navy); border-color:var(--nf-border);" id="orderResetBtn">Reset Order</button>
          <button class="btn btn-sm btn-navy" id="orderSubmitBtn">Confirm Order</button>
        </div>
      `;
    } else if (q.type === "sort") {
      html += `
        <div style="margin-bottom:12px; font-size:var(--text-xs); color:var(--nf-muted);">
          Tap an item below, then tap the bucket it belongs to:
        </div>
        <div id="sortItemsPool" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px;">
          ${q.items.map((item, idx) => `
            <button class="chip sort-item-btn" data-idx="${idx}" data-target-bucket="${item.b}">
              ${item.t}
            </button>
          `).join('')}
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px;">
          ${q.buckets.map((bName, bIdx) => `
            <div class="sort-bucket" data-bidx="${bIdx}" style="background:var(--nf-cream); border:2px dashed var(--nf-border); border-radius:var(--radius-md); padding:12px; min-height:120px;">
              <div style="font-weight:700; font-size:0.8rem; text-transform:uppercase; color:var(--nf-navy); margin-bottom:8px;">${bName}</div>
              <div class="sort-bucket-items" style="display:flex; flex-direction:column; gap:6px;"></div>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-navy" id="sortSubmitBtn">Submit Sorting</button>
      `;
    } else if (q.type === "match") {
      const lefts = q.pairs.map((p, i) => ({ text: p[0], id: i }));
      const rights = q.pairs.map((p, i) => ({ text: p[1], id: i })).sort(() => Math.random() - 0.5);
      html += `
        <div style="margin-bottom:12px; font-size:var(--text-xs); color:var(--nf-muted);">
          Tap an item on the left, then tap its matching pair on the right:
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
          <div id="matchLeftList" style="display:flex; flex-direction:column; gap:8px;">
            ${lefts.map(l => `
              <button class="btn match-left-btn" data-id="${l.id}" style="text-align:left; justify-content:flex-start; padding:10px; border:1px solid var(--nf-border); border-radius:var(--radius-md); background:var(--nf-surface); font-size:var(--text-xs);">
                ${l.text}
              </button>
            `).join('')}
          </div>
          <div id="matchRightList" style="display:flex; flex-direction:column; gap:8px;">
            ${rights.map(r => `
              <button class="btn match-right-btn" data-id="${r.id}" style="text-align:left; justify-content:flex-start; padding:10px; border:1px solid var(--nf-border); border-radius:var(--radius-md); background:var(--nf-surface); font-size:var(--text-xs);">
                ${r.text}
              </button>
            `).join('')}
          </div>
        </div>
        <button class="btn btn-navy" id="matchSubmitBtn">Verify Matches</button>
      `;
    }

    html += `
        </div>
        <div id="quizFeedbackArea" style="margin-top:1.5rem; display:none;"></div>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachHandlers(q);
  }

  attachHandlers(q) {
    if (q.type === "mcq") {
      this.container.querySelectorAll(".btn-quiz-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const selected = parseInt(btn.dataset.opt, 10);
          const isCorrect = selected === q.answer;
          this.submitAnswer(isCorrect, q.why);
        });
      });
    } else if (q.type === "truefalse") {
      this.container.querySelectorAll(".btn-quiz-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const selected = btn.dataset.bool === "true";
          const isCorrect = selected === q.answer;
          this.submitAnswer(isCorrect, q.why);
        });
      });
    } else if (q.type === "spot") {
      this.container.querySelectorAll(".btn-spot-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const isCorrect = btn.dataset.version === "strong";
          this.submitAnswer(isCorrect, q.why);
        });
      });
    } else if (q.type === "calc") {
      const submit = this.container.querySelector("#calcSubmitBtn");
      submit.addEventListener("click", () => {
        const val = parseFloat(this.container.querySelector("#calcInput").value);
        const tolerance = q.tolerance ? q.answer * q.tolerance : 1;
        const isCorrect = Math.abs(val - q.answer) <= tolerance;
        this.submitAnswer(isCorrect, q.why);
      });
    } else if (q.type === "order") {
      const orderPool = this.container.querySelector("#orderItemsPool");
      const chosen = [];
      orderPool.querySelectorAll(".order-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          btn.style.opacity = "0.4";
          btn.disabled = true;
          chosen.push(parseInt(btn.dataset.orig, 10));
        });
      });

      this.container.querySelector("#orderResetBtn").addEventListener("click", () => {
        this.renderQuestion();
      });

      this.container.querySelector("#orderSubmitBtn").addEventListener("click", () => {
        let isCorrect = chosen.length === q.items.length;
        for (let i = 0; i < chosen.length; i++) {
          if (chosen[i] !== i) isCorrect = false;
        }
        this.submitAnswer(isCorrect, q.why);
      });
    } else if (q.type === "sort") {
      let activeItem = null;
      const placements = {};

      this.container.querySelectorAll(".sort-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          this.container.querySelectorAll(".sort-item-btn").forEach(b => b.style.outline = "none");
          btn.style.outline = "2px solid var(--nf-gold)";
          activeItem = btn;
        });
      });

      this.container.querySelectorAll(".sort-bucket").forEach(bucket => {
        bucket.addEventListener("click", () => {
          if (activeItem) {
            const bIdx = parseInt(bucket.dataset.bidx, 10);
            bucket.querySelector(".sort-bucket-items").appendChild(activeItem);
            placements[activeItem.dataset.idx] = bIdx;
            activeItem.style.outline = "none";
            activeItem = null;
          }
        });
      });

      this.container.querySelector("#sortSubmitBtn").addEventListener("click", () => {
        let isCorrect = Object.keys(placements).length === q.items.length;
        q.items.forEach((item, idx) => {
          if (placements[idx] !== item.b) isCorrect = false;
        });
        this.submitAnswer(isCorrect, q.why);
      });
    } else if (q.type === "match") {
      let activeLeft = null;
      const pairsFound = {};

      this.container.querySelectorAll(".match-left-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          this.container.querySelectorAll(".match-left-btn").forEach(b => b.style.outline = "none");
          btn.style.outline = "2px solid var(--nf-gold)";
          activeLeft = btn.dataset.id;
        });
      });

      this.container.querySelectorAll(".match-right-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          if (activeLeft !== null) {
            pairsFound[activeLeft] = btn.dataset.id;
            btn.style.borderColor = "var(--nf-gold)";
            btn.style.background = "var(--nf-gold-light)";
            activeLeft = null;
          }
        });
      });

      this.container.querySelector("#matchSubmitBtn").addEventListener("click", () => {
        let isCorrect = Object.keys(pairsFound).length === q.pairs.length;
        for (let left in pairsFound) {
          if (left !== pairsFound[left]) isCorrect = false;
        }
        this.submitAnswer(isCorrect, q.why);
      });
    }
  }

  submitAnswer(isCorrect, why) {
    if (isCorrect) this.score++;
    this.answered.push({ isCorrect, why, q: this.questions[this.currentIndex].q });

    const feedback = this.container.querySelector("#quizFeedbackArea");
    feedback.style.display = "block";
    feedback.innerHTML = `
      <div class="callout ${isCorrect ? 'green' : 'amber'}" style="margin:0 0 1rem 0;">
        <div style="font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
          ${isCorrect ? getIcon('check', '', 18) + ' Correct' : 'Not quite. Here is the thinking:'}
        </div>
        <div style="font-size:var(--text-sm);">${why}</div>
      </div>
      <button class="btn btn-navy" id="nextQuizBtn">
        ${this.currentIndex < this.questions.length - 1 ? 'Next Question' : 'View Results'}
      </button>
    `;

    this.container.querySelector("#nextQuizBtn").addEventListener("click", () => {
      this.currentIndex++;
      if (this.currentIndex < this.questions.length) {
        this.renderQuestion();
      } else {
        this.renderResults();
      }
    });

    this.container.querySelector("#quizInteractionArea").style.pointerEvents = "none";
  }

  renderResults() {
    const total = this.questions.length;
    const pct = Math.round((this.score / total) * 100);
    const passed = pct >= 70;
    
    let stars = 0;
    if (pct >= 100) stars = 3;
    else if (pct >= 85) stars = 2;
    else if (pct >= 70) stars = 1;

    // Save score
    if (this.moduleId) {
      NFStore.saveQuiz(this.moduleId, pct, passed, stars);
    }

    let html = `
      <div class="nf-card gold-edge" style="text-align:center; padding:3rem 1.5rem;">
        <div style="font-size:var(--text-xs); font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:var(--nf-gold-dark); margin-bottom:0.5rem;">
          Brain Train Results
        </div>
        <h2 style="font-size:var(--text-3xl); margin-bottom:1rem; color:var(--nf-navy);">
          ${passed ? 'Benchmark Achieved!' : 'Revisit & Strengthen'}
        </h2>
        
        <div style="font-size:var(--text-4xl); font-weight:800; color:${passed ? 'var(--nf-success)' : 'var(--nf-amber)'}; margin-bottom:0.5rem;">
          ${pct}%
        </div>
        <p style="color:var(--nf-muted); margin-bottom:1.5rem;">You scored ${this.score} out of ${total} correct.</p>

        <div style="display:flex; justify-content:center; gap:8px; margin-bottom:2rem; font-size:2rem; color:var(--nf-gold);">
          ${[1, 2, 3].map(s => `
            <span style="opacity:${s <= stars ? 1 : 0.2};">${getIcon('star', '', 32)}</span>
          `).join('')}
        </div>

        ${!passed ? `
          <div class="callout amber" style="text-align:left; max-width:540px; margin:0 auto 2rem auto;">
            <strong>Passing requirement is 70%.</strong><br>
            Review the cards and sections above, then retry to earn your gold certification star.
          </div>
        ` : ''}

        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
          <button class="btn btn-navy" id="quizRetryBtn">Retry Brain Train</button>
          <a href="index.html" class="btn btn-primary">Return to Journey</a>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.container.querySelector("#quizRetryBtn").addEventListener("click", () => {
      this.init();
    });
  }
}