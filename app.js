const STORAGE_KEY = "abdul-site-imported-publications";

const projects = [
  { area: "circularity", label: "Waste Management 5.0", title: "Circular waste upcycling decision support", description: "An intelligent model for resilient and sustainable waste management in the Waste Management 5.0 era.", year: "2026", progress: 92, tags: ["Circular economy", "Upcycling", "MCDM"] },
  { area: "esg", label: "ESG assessment", title: "Global oil and gas ESG performance model", description: "A novel environmental, social, and governance assessment model for high-impact industrial sectors.", year: "2026", progress: 86, tags: ["ESG", "Performance", "Policy"] },
  { area: "supply", label: "Carbon neutrality", title: "Carbon reduction in the leather supply chain", description: "Climate mitigation strategies and policy implications for carbon-neutral leather supply chains.", year: "2025", progress: 81, tags: ["Leather supply chain", "Carbon", "Climate policy"] },
  { area: "esg", label: "Social sustainability", title: "Social life cycle decision-making for green hydrogen", description: "A social sustainability assessment model for evaluating green hydrogen production pathways.", year: "2025", progress: 74, tags: ["Green hydrogen", "Social LCA", "Sustainability"] },
  { area: "industry", label: "New energy systems", title: "Industry 4.0 and Industry 5.0 implementation challenges", description: "Decision frameworks for new energy systems, impact assessment, and emerging-economy policy practice.", year: "2023", progress: 88, tags: ["Industry 5.0", "Energy systems", "Fuzzy models"] },
  { area: "supply", label: "Supply chain resilience", title: "Semiconductor supply chain resilience", description: "An integrated decomposed fuzzy set Delphi, WINGS, and QFD model for resilience strategy design.", year: "2024", progress: 79, tags: ["Semiconductors", "Resilience", "WINGS"] }
];

const basePublications = [
  { title: "Towards resilient and sustainable waste management: An intelligent decision support model for circular waste upcycling in the waste management 5.0 era", year: 2026, type: "article", venue: "Computers & Industrial Engineering", impact: 6.5, authors: "Moktadir, M. A., Ayub, Y., and Ren, J.", doi: "https://doi.org/10.1016/j.cie.2026.112084", tags: ["Q1", "waste upcycling", "decision support"] },
  { title: "A Novel Environmental, Social, and Governance Performance Assessment Model for the Global Oil and Gas Sector", year: 2026, type: "article", venue: "Business Strategy and the Environment", impact: 13.3, authors: "Moktadir, M. A., Lu, S., and Ren, J.", doi: "https://doi.org/10.1002/bse.70614", tags: ["Q1", "ESG", "oil and gas"] },
  { title: "Carbon Reduction Strategies for the Leather Supply Chain: Implications for Climate Change Mitigation Policy Toward Carbon Neutrality", year: 2025, type: "article", venue: "Sustainable Development", impact: 8.2, authors: "Moktadir, M. A. and Ren, J.", doi: "", tags: ["Q1", "leather supply chain", "carbon neutrality"] },
  { title: "An Innovative Social Life Cycle Decision-Making Model for Assessing Social Sustainability: A Case of Green Hydrogen Production", year: 2025, type: "article", venue: "Sustainable Development", impact: 8.2, authors: "Moktadir, M. A. and Ren, J.", doi: "", tags: ["Q1", "social LCA", "green hydrogen"] },
  { title: "A decision support framework for safe and sustainable by-design practices promoting circularity in waste-to-energy supply chains", year: 2025, type: "article", venue: "Sustainable Production and Consumption", impact: 9.6, authors: "Moktadir, M. A., Zhou, J., Ren, J., and Toniolo, S.", doi: "https://doi.org/10.1016/j.spc.2025.01.019", tags: ["Q1", "waste-to-energy", "circularity"] },
  { title: "Monetizing and selection of sustainable tannery sludge-to-energy technology using a simulation-based integrated MCDM model with life cycle techno-economic-ESG analysis", year: 2024, type: "article", venue: "Chemical Engineering Journal", impact: 13.2, authors: "Moktadir, M. A., Ren, J., Ayub, Y., and Shi, T.", doi: "https://doi.org/10.1016/j.cej.2024.154724", tags: ["Q1", "tannery sludge", "techno-economic ESG"] },
  { title: "Modeling the semiconductor supply chain resilience: an integrated decomposed fuzzy set Delphi, WINGS and QFD approach", year: 2024, type: "article", venue: "International Journal of Production Research", impact: 9.2, authors: "Khan, S. A. R., Moktadir, M. A., and Ren, J.", doi: "", tags: ["Q1", "semiconductor", "resilience"] },
  { title: "Impacts of Industry 4.0 and Industry 5.0 on the new energy sector: Analyzing challenges using an integrated decision making approach", year: 2023, type: "article", venue: "Renewable and Sustainable Energy Reviews", impact: 15.9, authors: "Khan, S. A. R., Moktadir, M. A., and others", doi: "https://doi.org/10.1016/j.rser.2023.113157", tags: ["Q1", "Industry 5.0", "new energy"] },
  { title: "Circular economy practices in the leather industry: A practical step towards sustainable development", year: 2020, type: "article", venue: "Journal of Cleaner Production", impact: 11.1, authors: "Moktadir, M. A., Kumar, A., Ali, S. M., and others", doi: "", tags: ["Q1", "leather", "circular economy"] },
  { title: "An integrated approach for modeling barriers to sustainable supply chain management in leather industry", year: 2018, type: "article", venue: "Journal of Cleaner Production", impact: 11.1, authors: "Moktadir, M. A., Ali, S. M., Rajesh, R., and Paul, S. K.", doi: "", tags: ["Q1", "supply chain", "barriers"] }
];

const courses = [
  { code: "ILET 1101", title: "Engineering Materials", term: "University of Dhaka", description: "Materials properties, selection, and engineering applications for leather and industrial systems." },
  { code: "ILET 2204", title: "Operations Research", term: "University of Dhaka", description: "Decision modeling, optimization, and quantitative methods for industrial engineering problems." },
  { code: "ISE topics", title: "Sustainable Supply Chain Analytics", term: "Research mentoring", description: "MCDM, fuzzy modeling, ESG assessment, circular economy, and publication-oriented research supervision." }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const safe = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

let activeArea = "all";
let activeType = "all";
let importedPublications = [];
let publications = [...basePublications];

function normalizeDoi(value) {
  return String(value || "").trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").replace(/^doi:\s*/i, "");
}

function doiUrl(doi) {
  const clean = normalizeDoi(doi);
  return clean ? `https://doi.org/${clean}` : "";
}

function publicationId(pub) {
  return normalizeDoi(pub.doi || pub.title).toLowerCase();
}

function mergePublications() {
  const seen = new Set();
  publications = [...importedPublications, ...basePublications].filter((pub) => {
    const id = publicationId(pub);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

function loadImportedPublications() {
  try {
    importedPublications = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (error) {
    importedPublications = [];
  }
  mergePublications();
}

function saveImportedPublications() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(importedPublications));
}

function renderProjects() {
  const grid = $("[data-project-grid]");
  const visible = projects.filter((project) => activeArea === "all" || project.area === activeArea);
  grid.innerHTML = visible.map((project) => `
    <article class="project-card">
      <div class="project-topline"><span class="project-label">${safe(project.label)}</span><span class="project-year">${safe(project.year)}</span></div>
      <h3>${safe(project.title)}</h3>
      <p>${safe(project.description)}</p>
      <div class="project-meter" aria-label="${project.progress}% progress"><span style="width:${project.progress}%"></span></div>
      <div class="tag-row">${project.tags.map((tag) => `<span>${safe(tag)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function populateYears() {
  const select = $("[data-publication-tools] select[name='year']");
  const selected = select.value || "all";
  const years = [...new Set(publications.map((publication) => publication.year).filter(Boolean))].sort((a, b) => b - a);
  select.innerHTML = `<option value="all">All years</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
  select.value = years.includes(Number(selected)) ? selected : "all";
}

function getFilteredPublications() {
  const form = $("[data-publication-tools]");
  const query = form.search.value.trim().toLowerCase();
  const year = form.year.value;
  const sort = form.sort.value;
  const filtered = publications.filter((publication) => {
    const text = [publication.title, publication.venue, publication.authors, ...(publication.tags || [])].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesYear = year === "all" || Number(year) === publication.year;
    const matchesType = activeType === "all" || activeType === publication.type;
    return matchesQuery && matchesYear && matchesType;
  });
  return filtered.sort((a, b) => {
    if (sort === "impact") return (b.impact || 0) - (a.impact || 0);
    if (sort === "title") return a.title.localeCompare(b.title);
    return (b.year || 0) - (a.year || 0);
  });
}

function renderPublications() {
  const list = $("[data-publication-list]");
  const count = $("[data-result-count]");
  const visible = getFilteredPublications();
  count.textContent = `${visible.length} result${visible.length === 1 ? "" : "s"}`;
  if (!visible.length) {
    list.innerHTML = `<article class="publication-card"><div><h3>No publications found</h3><p class="publication-meta">Try another search, year, or type filter.</p></div></article>`;
    return;
  }
  list.innerHTML = visible.map((publication) => {
    const link = doiUrl(publication.doi);
    const typeLabel = publication.imported ? "Imported DOI" : publication.type;
    return `
      <article class="publication-card ${publication.imported ? "is-imported" : ""}">
        <div>
          <h3>${safe(publication.title)}</h3>
          <p class="publication-meta">${safe(publication.authors)} | ${safe(publication.venue)} | ${safe(publication.year)} | ${safe(typeLabel)}</p>
          <div class="tag-row">${(publication.tags || []).map((tag) => `<span>${safe(tag)}</span>`).join("")}</div>
        </div>
        ${link ? `<a class="mini-button" href="${safe(link)}" target="_blank" rel="noreferrer">DOI</a>` : `<span class="mini-button muted">No DOI</span>`}
      </article>
    `;
  }).join("");
}

function renderCourses() {
  $("[data-course-list]").innerHTML = courses.map((course) => `
    <article class="course-card">
      <span class="course-code">${safe(course.code)}</span>
      <div><h3>${safe(course.title)}</h3><p>${safe(course.description)}</p></div>
      <span class="course-term">${safe(course.term)}</span>
    </article>
  `).join("");
}

function setupFilters() {
  $$("[data-area]").forEach((button) => {
    button.addEventListener("click", () => {
      activeArea = button.dataset.area;
      $$("[data-area]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-selected", item === button ? "true" : "false");
      });
      renderProjects();
    });
  });

  $$("[data-type]").forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.type;
      $$("[data-type]").forEach((item) => item.classList.toggle("is-active", item === button));
      renderPublications();
    });
  });

  $("[data-publication-tools]").addEventListener("input", renderPublications);
  $("[data-publication-tools]").addEventListener("change", renderPublications);
  $("[data-publication-tools]").addEventListener("submit", (event) => event.preventDefault());
}

function crossrefYear(item) {
  const dates = item["published-print"] || item["published-online"] || item.published || item.created || item.issued;
  return Number(dates?.["date-parts"]?.[0]?.[0]) || new Date().getFullYear();
}

function crossrefAuthors(item) {
  if (!Array.isArray(item.author) || !item.author.length) return "Author information unavailable";
  return item.author.slice(0, 8).map((author) => [author.given, author.family].filter(Boolean).join(" ")).join(", ");
}

function inferPublicationType(crossrefType, selectedType) {
  if (selectedType !== "auto") return selectedType;
  if (/proceedings|conference/i.test(crossrefType || "")) return "conference";
  if (/chapter|book/i.test(crossrefType || "")) return "chapter";
  return "article";
}

async function importPublicationByDoi(form, note) {
  const formData = new FormData(form);
  const doi = normalizeDoi(formData.get("doi"));
  if (!doi) {
    note.textContent = "Please enter a DOI.";
    return;
  }
  if (publications.some((publication) => publicationId(publication) === doi.toLowerCase())) {
    note.textContent = "This DOI is already listed.";
    return;
  }
  note.textContent = "Looking up DOI metadata...";
  const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}?mailto=abdul.moktadir%40connect.polyu.hk`);
  if (!response.ok) throw new Error(`Crossref returned ${response.status}`);
  const item = (await response.json()).message;
  const publication = {
    title: item.title?.[0] || doi,
    year: crossrefYear(item),
    type: inferPublicationType(item.type, formData.get("type")),
    venue: item["container-title"]?.[0] || item.publisher || "Publication venue unavailable",
    impact: 0,
    authors: crossrefAuthors(item),
    doi: doiUrl(doi),
    tags: ["imported", item.type || "DOI"].filter(Boolean),
    imported: true
  };
  importedPublications.unshift(publication);
  saveImportedPublications();
  mergePublications();
  populateYears();
  renderPublications();
  form.reset();
  note.textContent = "Publication imported and saved in this browser.";
}

function copyText(text, button) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  button.focus();
}

function setupDoiImport() {
  const form = $("[data-doi-form]");
  const note = $("[data-doi-note]");
  const exportButton = $("[data-export-publications]");
  const clearButton = $("[data-clear-publications]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    try {
      await importPublicationByDoi(form, note);
    } catch (error) {
      note.textContent = "DOI import failed. Check the DOI and try again.";
    } finally {
      button.disabled = false;
    }
  });

  exportButton.addEventListener("click", () => {
    if (!importedPublications.length) {
      note.textContent = "No imported publications to copy.";
      return;
    }
    copyText(JSON.stringify(importedPublications, null, 2), exportButton);
    note.textContent = "Imported-publication JSON copied.";
  });

  clearButton.addEventListener("click", () => {
    if (!importedPublications.length) {
      note.textContent = "No imported publications to clear.";
      return;
    }
    if (!window.confirm("Clear DOI imports saved in this browser?")) return;
    importedPublications = [];
    saveImportedPublications();
    mergePublications();
    populateYears();
    renderPublications();
    note.textContent = "Imported publications cleared from this browser.";
  });
}

function setupContactForm() {
  const form = $("[data-contact-form]");
  const note = $("[data-form-note]");
  if (!form) return;

  form.addEventListener("submit", () => {
    const data = new FormData(form);
    const subject = form.querySelector('input[name="_subject"]');
    let replyTo = form.querySelector('input[name="_replyto"]');

    if (!replyTo) {
      replyTo = document.createElement("input");
      replyTo.type = "hidden";
      replyTo.name = "_replyto";
      form.appendChild(replyTo);
    }

    if (subject) subject.value = `${data.get("topic")} from ${data.get("name")}`;
    replyTo.value = data.get("email") || "";
    if (note) note.textContent = "Submitting securely. If this is the first message, confirm the FormSubmit email in your inbox or spam folder.";
  });
}

function setupNavigation() {
  const toggle = $("[data-menu-toggle]");
  const nav = $("[data-nav]");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-lock", open);
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  $$("[data-nav] a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-lock");
  }));
}

function setupTheme() {
  const saved = localStorage.getItem("academic-site-theme");
  if (saved) document.documentElement.dataset.theme = saved;
  $("[data-theme-toggle]").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "" : "dark";
    if (next) document.documentElement.dataset.theme = next;
    else delete document.documentElement.dataset.theme;
    localStorage.setItem("academic-site-theme", next);
  });
}

function updatePlanner() {
  const credits = Number($("[data-credit-load]").value);
  const hours = credits * 3;
  $("[data-credit-value]").textContent = credits;
  $("[data-hours-value]").textContent = hours;
  const reading = Math.min(100, Math.round(hours * 2.2));
  const projects = Math.min(100, Math.round(hours * 1.6));
  const discussion = Math.min(100, Math.round(hours * 1.1));
  $("[data-bar='reading']").style.setProperty("--bar-width", `${reading}%`);
  $("[data-bar='projects']").style.setProperty("--bar-width", `${projects}%`);
  $("[data-bar='discussion']").style.setProperty("--bar-width", `${discussion}%`);
  $("[data-planner-breakdown]").innerHTML = [`${Math.round(hours * 0.4)} hrs reading and preparation`, `${Math.round(hours * 0.35)} hrs projects and assessment`, `${Math.round(hours * 0.25)} hrs discussion and supervision`].map((item) => `<li>${item}</li>`).join("");
}

function setupCounters() {
  const counters = $$("[data-count]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counters.forEach((counter) => counter.textContent = `${new Intl.NumberFormat("en-US").format(Number(counter.dataset.count))}${counter.dataset.suffix || ""}`);
    return;
  }
  counters.forEach((counter) => {
    const end = Number(counter.dataset.count);
    const start = performance.now();
    const duration = 900;
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const value = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      counter.textContent = `${new Intl.NumberFormat("en-US").format(value)}${counter.dataset.suffix || ""}`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

function init() {
  setupNavigation();
  setupTheme();
  loadImportedPublications();
  setupFilters();
  setupDoiImport();
  setupContactForm();
  populateYears();
  renderProjects();
  renderCourses();
  renderPublications();
  updatePlanner();
  setupCounters();
  $("[data-credit-load]").addEventListener("input", updatePlanner);
}

document.addEventListener("DOMContentLoaded", init);
