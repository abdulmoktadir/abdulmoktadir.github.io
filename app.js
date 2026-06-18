const projects = [
  {
    area: "circularity",
    label: "Waste Management 5.0",
    title: "Circular waste upcycling decision support",
    description: "An intelligent model for resilient and sustainable waste management in the Waste Management 5.0 era.",
    year: "2026",
    progress: 92,
    tags: ["Circular economy", "Upcycling", "MCDM"],
  },
  {
    area: "esg",
    label: "ESG assessment",
    title: "Global oil and gas ESG performance model",
    description: "A novel environmental, social, and governance assessment model for high-impact industrial sectors.",
    year: "2026",
    progress: 86,
    tags: ["ESG", "Performance", "Policy"],
  },
  {
    area: "supply",
    label: "Carbon neutrality",
    title: "Carbon reduction in the leather supply chain",
    description: "Climate mitigation strategies and policy implications for carbon-neutral leather supply chains.",
    year: "2025",
    progress: 81,
    tags: ["Leather supply chain", "Carbon", "Climate policy"],
  },
  {
    area: "esg",
    label: "Social sustainability",
    title: "Social life cycle decision-making for green hydrogen",
    description: "A social sustainability assessment model for evaluating green hydrogen production pathways.",
    year: "2025",
    progress: 74,
    tags: ["Green hydrogen", "Social LCA", "Sustainability"],
  },
  {
    area: "industry",
    label: "New energy systems",
    title: "Industry 4.0 and Industry 5.0 implementation challenges",
    description: "Decision frameworks for new energy systems, impact assessment, and emerging-economy policy practice.",
    year: "2023",
    progress: 88,
    tags: ["Industry 5.0", "Energy systems", "Fuzzy models"],
  },
  {
    area: "supply",
    label: "Supply chain resilience",
    title: "Semiconductor supply chain resilience",
    description: "An integrated decomposed fuzzy set Delphi, WINGS, and QFD model for resilience strategy design.",
    year: "2024",
    progress: 79,
    tags: ["Semiconductors", "Resilience", "WINGS"],
  },
];

const publications = [
  {
    title: "Towards resilient and sustainable waste management: An intelligent decision support model for circular waste upcycling in the waste management 5.0 era",
    year: 2026,
    type: "article",
    venue: "Computers & Industrial Engineering",
    impact: 6.5,
    authors: "Moktadir, M. A., Ayub, Y., & Ren, J.",
    doi: "https://doi.org/10.1016/j.cie.2026.112084",
    tags: ["Q1", "waste upcycling", "decision support"],
  },
  {
    title: "A Novel Environmental, Social, and Governance Performance Assessment Model for the Global Oil and Gas Sector",
    year: 2026,
    type: "article",
    venue: "Business Strategy and the Environment",
    impact: 13.3,
    authors: "Moktadir, M. A., Lu, S., & Ren, J.",
    doi: "https://doi.org/10.1002/bse.70614",
    tags: ["Q1", "ESG", "oil and gas"],
  },
  {
    title: "Carbon Reduction Strategies for the Leather Supply Chain: Implications for Climate Change Mitigation Policy Toward Carbon Neutrality",
    year: 2025,
    type: "article",
    venue: "Sustainable Development",
    impact: 8.2,
    authors: "Moktadir, M. A., & Ren, J.",
    doi: "",
    tags: ["Q1", "leather supply chain", "carbon neutrality"],
  },
  {
    title: "An Innovative Social Life Cycle Decision-Making Model for Assessing Social Sustainability: A Case of Green Hydrogen Production",
    year: 2025,
    type: "article",
    venue: "Sustainable Development",
    impact: 8.2,
    authors: "Moktadir, M. A., & Ren, J.",
    doi: "",
    tags: ["Q1", "social LCA", "green hydrogen"],
  },
  {
    title: "A decision support framework for safe and sustainable by-design practices promoting circularity in waste-to-energy supply chains",
    year: 2025,
    type: "article",
    venue: "Sustainable Production and Consumption",
    impact: 9.6,
    authors: "Moktadir, M. A., Zhou, J., Ren, J., & Toniolo, S.",
    doi: "https://doi.org/10.1016/j.spc.2025.01.019",
    tags: ["Q1", "waste-to-energy", "circularity"],
  },
  {
    title: "Monetizing and selection of sustainable tannery sludge-to-energy technology using a simulation-based integrated MCDM model with life cycle techno-economic-ESG analysis",
    year: 2024,
    type: "article",
    venue: "Chemical Engineering Journal",
    impact: 13.2,
    authors: "Moktadir, M. A., Ren, J., Ayub, Y., & Shi, T.",
    doi: "https://doi.org/10.1016/j.cej.2024.155428",
    tags: ["Q1", "tannery sludge", "techno-economic ESG"],
  },
  {
    title: "Towards green logistics: An innovative decision support model for zero-emission transportation modes development",
    year: 2024,
    type: "article",
    venue: "Transportation Research Part E: Logistics and Transportation Review",
    impact: 8.8,
    authors: "Moktadir, M. A., & Ren, J.",
    doi: "https://doi.org/10.1016/j.tre.2024.103648",
    tags: ["Q1", "green logistics", "zero-emission transport"],
  },
  {
    title: "Global semiconductor supply chain resilience challenges and mitigation strategies",
    year: 2024,
    type: "article",
    venue: "International Journal of Production Economics",
    impact: 10,
    authors: "Moktadir, M. A., & Ren, J.",
    doi: "https://doi.org/10.1016/j.ijpe.2024.109280",
    tags: ["Q1", "semiconductors", "resilience"],
  },
  {
    title: "Machine Learning-Based Decomposed Fuzzy Set Model for Analyzing Key Performance Indicators in the Waste-to-Energy Supply Chain",
    year: 2025,
    type: "conference",
    venue: "11th IFAC Conference on Manufacturing Modelling, Management and Control",
    impact: 0,
    authors: "Moktadir, M. A., Ayub, Y., & Ren, J.",
    doi: "",
    tags: ["conference", "machine learning", "waste-to-energy"],
  },
  {
    title: "Resilience Challenges Mitigation Strategies for Waste Management 5.0 Driven Circular Waste Upcycling Process",
    year: 2024,
    type: "conference",
    venue: "51st International Conference on Computers and Industrial Engineering",
    impact: 0,
    authors: "Moktadir, M. A., Ayub, Y., & Ren, J.",
    doi: "",
    tags: ["best paper", "CIE51", "circular waste"],
  },
  {
    title: "Transportation Mode Selection Framework for Apparel Industries: A Fuzzy AHP Approach",
    year: 2017,
    type: "chapter",
    venue: "Selected Issues in Economics and Finance, Cambridge Scholar Publishing",
    impact: 0,
    authors: "Ali, S. M., Kabir, G., Ali, A., Shake, M. S., & Moktadir, M. A.",
    doi: "http://www.cambridgescholars.com/selected-studies-on-economics-and-finance",
    tags: ["book chapter", "Fuzzy AHP", "transport mode selection"],
  },
];

const courses = [
  {
    code: "ISE 318",
    title: "Industrial Engineering Techniques and Methods",
    term: "2024-25",
    description: "Undergraduate course in Industrial and Systems Engineering at PolyU.",
  },
  {
    code: "ISE2001",
    title: "Introduction to Enterprise Computing",
    term: "2023-24",
    description: "Undergraduate laboratory teaching support in Industrial and Systems Engineering.",
  },
  {
    code: "ISE200",
    title: "Data Management",
    term: "2023-24",
    description: "Undergraduate course teaching support at The Hong Kong Polytechnic University.",
  },
  {
    code: "LPE506",
    title: "Materials Management of Leather Products Manufacturing",
    term: "2022",
    description: "Graduate course for M.Sc. Engineering in Leather Products Engineering.",
  },
  {
    code: "LPE501",
    title: "Modernization of Leather Products Manufacturing",
    term: "2022",
    description: "Graduate course at the Institute of Leather Engineering and Technology, University of Dhaka.",
  },
  {
    code: "FE502",
    title: "Optimization Techniques of Footwear Manufacturing",
    term: "2021",
    description: "Graduate course for M.Sc. Engineering in Footwear Engineering.",
  },
];

const state = {
  area: "all",
  type: "all",
  search: "",
  year: "all",
  sort: "newest",
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function renderProjects() {
  const grid = $("[data-project-grid]");
  const filtered = state.area === "all" ? projects : projects.filter((project) => project.area === state.area);

  grid.innerHTML = filtered
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-topline">
            <span class="project-label">${project.label}</span>
            <span class="project-year">${project.year}</span>
          </div>
          <div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
          <div class="project-meter" aria-label="${project.progress}% complete">
            <span style="width: ${project.progress}%"></span>
          </div>
          <div class="tag-row">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderCourses() {
  const list = $("[data-course-list]");
  list.innerHTML = courses
    .map(
      (course) => `
        <article class="course-card">
          <span class="course-code">${course.code}</span>
          <div>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
          </div>
          <span class="course-term">${course.term}</span>
        </article>
      `
    )
    .join("");
}

function populateYears() {
  const select = $('[name="year"]');
  const years = [...new Set(publications.map((publication) => publication.year))].sort((a, b) => b - a);
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    select.appendChild(option);
  });
}

function citationFor(publication) {
  const doi = publication.doi ? ` ${publication.doi}` : "";
  return `${publication.authors} (${publication.year}). ${publication.title}. ${publication.venue}.${doi}`;
}

function renderPublications() {
  const search = state.search.trim().toLowerCase();
  let filtered = publications.filter((publication) => {
    const matchesType = state.type === "all" || publication.type === state.type;
    const matchesYear = state.year === "all" || publication.year === Number(state.year);
    const searchable = [publication.title, publication.venue, publication.authors, ...publication.tags]
      .join(" ")
      .toLowerCase();
    return matchesType && matchesYear && searchable.includes(search);
  });

  if (state.sort === "impact") {
    filtered = filtered.sort((a, b) => b.impact - a.impact || b.year - a.year);
  } else if (state.sort === "title") {
    filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered = filtered.sort((a, b) => b.year - a.year || b.citations - a.citations);
  }

  const list = $("[data-publication-list]");
  const count = $("[data-result-count]");
  count.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    list.innerHTML = `
      <article class="publication-card">
        <div>
          <h3>No matching publications</h3>
          <p class="publication-meta">Try another topic, year, or publication type.</p>
        </div>
      </article>
    `;
    return;
  }

  list.innerHTML = filtered
    .map(
      (publication, index) => `
        <article class="publication-card">
          <div>
            <h3>${publication.title}</h3>
            <p class="publication-meta">${publication.authors} | ${publication.venue} | ${publication.year} | ${publication.impact ? `Impact factor ${publication.impact}` : "Proceeding or chapter"}</p>
            <div class="tag-row">
              <span>${publication.type}</span>
              ${publication.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
          <button type="button" data-copy-index="${index}">Copy Cite</button>
        </article>
      `
    )
    .join("");

  $$("[data-copy-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const publication = filtered[Number(button.dataset.copyIndex)];
      copyText(citationFor(publication), button);
    });
  });
}

async function copyText(text, button) {
  const original = button.textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.left = "-9999px";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    button.textContent = "Copied";
  } catch (error) {
    button.textContent = "Copy failed";
  }
  window.setTimeout(() => {
    button.textContent = original;
  }, 1600);
}

function updatePlanner() {
  const credits = Number($("[data-credit-load]").value);
  const hours = credits * 3;
  const reading = Math.round(hours * 0.38);
  const projects = Math.round(hours * 0.42);
  const discussion = Math.max(1, hours - reading - projects);

  $("[data-credit-value]").textContent = credits;
  $("[data-hours-value]").textContent = hours;
  $('[data-bar="reading"]').style.setProperty("--bar-width", `${Math.min(100, reading * 4)}%`);
  $('[data-bar="projects"]').style.setProperty("--bar-width", `${Math.min(100, projects * 4)}%`);
  $('[data-bar="discussion"]').style.setProperty("--bar-width", `${Math.min(100, discussion * 6)}%`);
  $("[data-planner-breakdown]").innerHTML = `
    <li>${reading} hours lecture preparation and reading</li>
    <li>${projects} hours laboratories, projects, and assessment</li>
    <li>${discussion} hours student supervision and mentoring</li>
  `;
}

function setupNavigation() {
  const menuButton = $("[data-menu-toggle]");
  const nav = $("[data-nav]");

  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-lock", open);
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  $$("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-lock");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });

  const sections = $$("main section[id]");
  const links = $$("[data-nav] a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
  );
  sections.forEach((section) => observer.observe(section));
}

function setupTheme() {
  const button = $("[data-theme-toggle]");
  const root = document.documentElement;

  try {
    const saved = localStorage.getItem("academic-theme");
    if (saved) root.dataset.theme = saved;
  } catch (error) {
    /* Local files can restrict storage in some browsers. */
  }

  button.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("academic-theme", next);
    } catch (error) {
      return;
    }
  });
}

function setupFilters() {
  $$("[data-area]").forEach((button) => {
    button.addEventListener("click", () => {
      state.area = button.dataset.area;
      $$("[data-area]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      renderProjects();
    });
  });

  const tools = $("[data-publication-tools]");
  tools.addEventListener("input", (event) => {
    const target = event.target;
    if (target.name === "search") state.search = target.value;
    if (target.name === "year") state.year = target.value;
    if (target.name === "sort") state.sort = target.value;
    renderPublications();
  });

  $$("[data-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.type = button.dataset.type;
      $$("[data-type]").forEach((item) => item.classList.toggle("is-active", item === button));
      renderPublications();
    });
  });
}

function setupContactForm() {
  const form = $("[data-contact-form]");
  const note = $("[data-form-note]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`${data.get("topic")} from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
    const link = document.createElement("a");
    link.href = `mailto:abdul.moktadir@connect.polyu.hk?subject=${subject}&body=${body}`;
    link.textContent = "Open email draft";

    note.textContent = "Draft ready: ";
    note.appendChild(link);
  });
}

function setupCounters() {
  const counters = $$("[data-count]");
  const formatCount = (counter, value) =>
    `${new Intl.NumberFormat("en-US").format(value)}${counter.dataset.suffix || ""}`;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counters.forEach((counter) => {
      counter.textContent = formatCount(counter, Number(counter.dataset.count));
    });
    return;
  }

  counters.forEach((counter) => {
    const end = Number(counter.dataset.count);
    const duration = 900;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = formatCount(counter, Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

function init() {
  setupNavigation();
  setupTheme();
  setupFilters();
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
