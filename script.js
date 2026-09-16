const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = navAnchors
  .map((anchor) => document.querySelector(anchor.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = () => {
  const current = sections
    .slice()
    .reverse()
    .find((section) => section.getBoundingClientRect().top <= 120);

  navAnchors.forEach((anchor) => {
    anchor.classList.toggle("active", current && anchor.getAttribute("href") === `#${current.id}`);
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

const copyButton = document.querySelector(".copy-email");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "Email copied";
    } catch {
      copyButton.textContent = email;
    }
    window.setTimeout(() => {
      copyButton.textContent = "Copy email";
    }, 1800);
  });
}

// ===== Abstract toggle on publication cards =====
document.querySelectorAll(".abstract-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const card = toggle.closest(".pub-card");
    const abstract = card && card.querySelector(".pub-abstract");
    if (!abstract) return;
    const open = abstract.hasAttribute("hidden");
    if (open) {
      abstract.removeAttribute("hidden");
    } else {
      abstract.setAttribute("hidden", "");
    }
    toggle.classList.toggle("open", open);
  });
});

// ===== Publication filters: DOMAIN x METHOD (combined) =====
(function setupPublicationFilters() {
  const section = document.querySelector("#publications");
  if (!section) return;

  const groups = Array.from(section.querySelectorAll(".filter-grid > div"));
  const cards = Array.from(section.querySelectorAll(".pub-card"));
  const countEl = section.querySelector(".result-count");
  if (!groups.length || !cards.length) return;

  const allLabels = ["All domains", "All methods"];
  const state = groups.map(() => null); // null = 该组当前未选具体项（即 All）

  const apply = () => {
    let shown = 0;
    cards.forEach((card) => {
      const tags = Array.from(card.querySelectorAll(".pub-tags span")).map((s) =>
        s.textContent.trim()
      );
      const ok = groups.every((group, i) => {
        const sel = state[i];
        return !sel || sel === allLabels[i] || tags.includes(sel);
      });
      card.style.display = ok ? "" : "none";
      if (ok) shown += 1;
    });
    if (countEl) {
      countEl.textContent = `${shown} result${shown === 1 ? "" : "s"}`;
    }
  };

  groups.forEach((group, i) => {
    const chips = Array.from(group.querySelectorAll(".filter-chip"));
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        state[i] = chip.textContent.trim();
        apply();
      });
    });
  });

  apply();
})();

// ===== News filter =====
(function setupNewsFilter() {
  const section = document.querySelector("#news");
  if (!section) return;

  const chips = Array.from(section.querySelectorAll(".news-filter .filter-chip"));
  const rows = Array.from(section.querySelectorAll(".news-row"));
  if (!chips.length) return;

  const labelToClass = {
    "🌐 All": null,
    "🧪 Research": "research",
    "🎤 Presentation": "presentation",
    "🏫 Milestone": "milestone",
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const cls = labelToClass[chip.textContent.trim()];
      rows.forEach((row) => {
        const badge = row.querySelector(".news-badge");
        const ok = !cls || (badge && badge.classList.contains(cls));
        row.style.display = ok ? "" : "none";
      });
    });
  });
})();
