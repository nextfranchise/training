/**
 * NEXT FRANCHISE - SHARED LAYOUT & RIGHT OFF-CANVAS DRAWER
 * Injects top bar, right drawer navigation, in-page scroll tracker, and footer.
 */

(function () {
  const STORE_KEY = "nf-sr-training-v1";

  function getProgress() {
    try {
      const data = localStorage.getItem(STORE_KEY);
      return data ? JSON.parse(data) : { read: {}, quizzes: {} };
    } catch (e) {
      return { read: {}, quizzes: {} };
    }
  }

  function getCurrentFile() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    return page.toLowerCase();
  }

  function initLayout() {
    const modules = window.NF_MODULES || [];
    const supplementary = window.NF_SUPPLEMENTARY || [];
    const currentFile = getCurrentFile();
    const progress = getProgress();
    const readCount = Object.keys(progress.read || {}).length;
    const totalCount = modules.length;
    const percentage = totalCount > 0 ? Math.round((readCount / totalCount) * 100) : 0;

    // Active title
    const activeMod = modules.find(m => m.file === currentFile) || 
                      supplementary.find(s => s.file === currentFile);
    const centerTitle = activeMod ? `${activeMod.id ? activeMod.id + ' · ' : ''}${activeMod.title}` : 'Franchise Architect Training';

    // 1. Top Bar Element
    const topbar = document.createElement("header");
    topbar.className = "nf-topbar";
    topbar.innerHTML = `
      <div class="container nf-topbar-inner">
        <a href="index.html" class="nf-brand-link" title="Next Franchise Training Home">
          <img src="https://nextfranchise.github.io/nextfranchise/assets/NF%20WHITE%20NO%20BG.png" alt="Next Franchise" class="nf-logo-img">
        </a>
        
        <div class="topbar-center-title">${centerTitle}</div>

        <div class="topbar-actions">
          <div class="progress-pill" title="${readCount} of ${totalCount} modules completed">
            <svg class="progress-ring-svg" viewBox="0 0 36 36">
              <path class="progress-ring-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              <path class="progress-ring-circle" stroke-dasharray="100, 100" stroke-dashoffset="${100 - percentage}" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            </svg>
            <span>${readCount}/${totalCount}</span>
          </div>

          <button class="menu-toggle-btn" id="menuToggleBtn" aria-label="Open Navigation Drawer">
            ${window.getIcon('menu', '', 16)}
            <span>Menu</span>
          </button>
        </div>
      </div>
      <div class="scroll-progress-container">
        <div class="scroll-progress-bar" id="scrollProgressBar"></div>
      </div>
    `;

    // 2. Right Off-Canvas Drawer Element
    const drawer = document.createElement("aside");
    drawer.className = "nf-drawer";
    drawer.id = "nfRightDrawer";

    let navHTML = `
      <div class="drawer-header">
        <div class="drawer-title-group">
          <h3>Training Navigator</h3>
          <p>Manual v1.2 · 4-Week Track</p>
        </div>
        <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close drawer">&times;</button>
      </div>
      <div class="drawer-body">
    `;

    let currentGroup = "";
    modules.forEach(mod => {
      if (mod.weekLabel !== currentGroup) {
        currentGroup = mod.weekLabel;
        navHTML += `<div class="drawer-section-title">${currentGroup}</div><nav class="drawer-nav-list">`;
      }

      const isActive = mod.file === currentFile;
      const isRead = !!(progress.read && progress.read[mod.id]);
      const quizData = progress.quizzes && progress.quizzes[mod.id];
      const isPassed = quizData && quizData.passed;

      navHTML += `
        <div class="drawer-nav-item ${isActive ? 'active' : ''}">
          <a href="${mod.file}">
            <div class="drawer-item-left">
              <span class="drawer-item-icon">${window.getIcon(mod.icon, '', 16)}</span>
              <span class="drawer-item-text">${mod.id}: ${mod.title}</span>
            </div>
            <div class="drawer-badges">
              <span class="status-tick ${isRead ? 'completed' : ''}" title="${isRead ? 'Completed' : 'Unread'}">
                ${isRead ? window.getIcon('check', '', 10) : ''}
              </span>
              <span class="quiz-star ${isPassed ? 'passed' : ''}" title="${isPassed ? 'Brain Train Passed' : 'Incomplete'}">
                ${window.getIcon('star', '', 12)}
              </span>
            </div>
          </a>
        </div>
      `;
    });
    navHTML += `</nav>`;

    if (supplementary.length > 0) {
      navHTML += `<div class="drawer-section-title">Resources & Hub</div><nav class="drawer-nav-list">`;
      supplementary.forEach(sup => {
        const isActive = sup.file === currentFile;
        navHTML += `
          <div class="drawer-nav-item ${isActive ? 'active' : ''}">
            <a href="${sup.file}">
              <div class="drawer-item-left">
                <span class="drawer-item-icon">${window.getIcon(sup.icon, '', 16)}</span>
                <span class="drawer-item-text">${sup.title}</span>
              </div>
            </a>
          </div>
        `;
      });
      navHTML += `</nav>`;
    }

    navHTML += `
      </div>
      <div class="drawer-footer">
        <a href="index.html" style="font-size:0.75rem; color:#8C96A5; text-decoration:none;">&larr; Home Portal</a>
        <button class="footer-reset-btn" id="drawerResetBtn">Reset Progress</button>
      </div>
    `;

    drawer.innerHTML = navHTML;

    // 3. Drawer Backdrop Overlay
    const backdrop = document.createElement("div");
    backdrop.className = "drawer-backdrop";
    backdrop.id = "drawerBackdrop";

    // 4. Footer Element
    const footer = document.createElement("footer");
    footer.className = "nf-footer";
    footer.innerHTML = `
      <div class="container nf-footer-inner">
        <div class="footer-notice">
          <strong>Internal and confidential. Do not share outside Next Franchise.</strong><br>
          Client figures belong to those clients and must not be reused for another brand. (Manual v1.2, Effective November 2026)
        </div>
        <div>
          <button class="footer-reset-btn" id="resetProgressBtn">Reset my training progress</button>
        </div>
      </div>
    `;

    // 5. Attach into DOM cleanly
    const appShell = document.querySelector(".app-shell");
    if (appShell) {
      appShell.insertBefore(topbar, appShell.firstChild);
      appShell.appendChild(footer);
    } else {
      document.body.prepend(topbar);
      document.body.appendChild(footer);
    }
    document.body.appendChild(drawer);
    document.body.appendChild(backdrop);

    // 6. Drawer Event Handlers
    function openDrawer() {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }

    const menuBtn = document.getElementById("menuToggleBtn");
    if (menuBtn) menuBtn.addEventListener("click", openDrawer);

    const closeBtn = document.getElementById("drawerCloseBtn");
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

    backdrop.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        closeDrawer();
      }
    });

    // Reset Progress Handlers
    function resetAllProgress() {
      if (confirm("Reset all read states, checklist items, and quiz scores?")) {
        localStorage.removeItem(STORE_KEY);
        window.location.reload();
      }
    }

    const resetBtn = document.getElementById("resetProgressBtn");
    if (resetBtn) resetBtn.addEventListener("click", resetAllProgress);

    const drawerReset = document.getElementById("drawerResetBtn");
    if (drawerReset) drawerReset.addEventListener("click", resetAllProgress);

    // In-page scroll progress tracker
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const bar = document.getElementById("scrollProgressBar");
      if (bar) bar.style.width = `${scrolled}%`;
    }, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLayout);
  } else {
    initLayout();
  }
})();