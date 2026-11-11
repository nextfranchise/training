/**
 * NEXT FRANCHISE - INTERACTION & UI ENGINE
 * Modals with focus traps, count-up stats, accordions, tabs, flip cards, 
 * toggle switches, and progress management.
 */

const NFStore = {
  key: "nf-sr-training-v1",
  
  get() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : { read: {}, quizzes: {}, gates: {} };
    } catch (e) {
      console.warn("Storage fallback to memory", e);
      return this._memStore || { read: {}, quizzes: {}, gates: {} };
    }
  },

  set(data) {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {
      this._memStore = data;
    }
  },

  markRead(moduleId) {
    const state = this.get();
    if (!state.read) state.read = {};
    state.read[moduleId] = true;
    this.set(state);
  },

  saveQuiz(moduleId, score, passed, stars) {
    const state = this.get();
    if (!state.quizzes) state.quizzes = {};
    const existing = state.quizzes[moduleId];
    if (!existing || score > existing.score) {
      state.quizzes[moduleId] = { score, passed, stars, date: new Date().toISOString() };
      this.set(state);
    }
  },

  toggleGate(gateIndex) {
    const state = this.get();
    if (!state.gates) state.gates = {};
    state.gates[gateIndex] = !state.gates[gateIndex];
    this.set(state);
    return state.gates[gateIndex];
  }
};

// 1. Accessible Modal System
const NFModal = {
  activeModal: null,
  lastFocus: null,

  open(title, htmlContent) {
    let overlay = document.getElementById("nfModalOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "nfModalOverlay";
      overlay.className = "modal-overlay";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title" id="nfModalTitle"></h3>
            <button class="modal-close-btn" id="nfModalCloseBtn" aria-label="Close modal">&times;</button>
          </div>
          <div class="modal-body" id="nfModalBody"></div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector("#nfModalCloseBtn").addEventListener("click", () => NFModal.close());
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) NFModal.close();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.classList.contains("open")) {
          NFModal.close();
        }
      });
    }

    this.lastFocus = document.activeElement;
    document.getElementById("nfModalTitle").innerText = title;
    document.getElementById("nfModalBody").innerHTML = htmlContent;
    overlay.classList.add("open");

    const focusable = overlay.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (focusable.length) focusable[0].focus();
  },

  close() {
    const overlay = document.getElementById("nfModalOverlay");
    if (overlay) overlay.classList.remove("open");
    if (this.lastFocus) this.lastFocus.focus();
  }
};

// 2. Count-Up Animation
function initCountUps() {
  const elements = document.querySelectorAll("[data-count-to]");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = "true";
        const target = parseInt(entry.target.dataset.countTo, 10);
        const prefix = entry.target.dataset.prefix || "";
        const suffix = entry.target.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const current = Math.floor(progress * target);
          entry.target.innerText = `${prefix}${current}${suffix}`;
          if (progress < 1) requestAnimationFrame(step);
          else entry.target.innerText = `${prefix}${target}${suffix}`;
        }
        requestAnimationFrame(step);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
}

// 3. Reusable Component Initializers
function initTabs() {
  document.querySelectorAll(".tabs-container").forEach(container => {
    const buttons = container.querySelectorAll(".tab-btn");
    const contents = container.querySelectorAll(".tab-content");

    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        if (contents[index]) contents[index].classList.add("active");
      });
    });
  });
}

function initAccordions() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const isOpen = item.classList.contains("open");
      
      const parent = item.parentElement;
      if (parent.dataset.single === "true") {
        parent.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("open"));
      }
      
      item.classList.toggle("open", !isOpen);
    });
  });
}

function initFlipCards() {
  document.querySelectorAll(".flip-card-container").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });
}

function initStrongWeakToggles() {
  document.querySelectorAll(".toggle-sw-card").forEach(card => {
    const weakBtn = card.querySelector(".toggle-btn.weak");
    const strongBtn = card.querySelector(".toggle-btn.strong");
    const weakPanel = card.querySelector(".toggle-panel.weak");
    const strongPanel = card.querySelector(".toggle-panel.strong");

    if (weakBtn && strongBtn) {
      weakBtn.addEventListener("click", () => {
        weakBtn.classList.add("active");
        strongBtn.classList.remove("active");
        weakPanel.classList.add("active");
        strongPanel.classList.remove("active");
      });

      strongBtn.addEventListener("click", () => {
        strongBtn.classList.add("active");
        weakBtn.classList.remove("active");
        strongPanel.classList.add("active");
        weakPanel.classList.remove("active");
      });
    }
  });
}

function initScrollReveals() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  initCountUps();
  initTabs();
  initAccordions();
  initFlipCards();
  initStrongWeakToggles();
  initScrollReveals();
});