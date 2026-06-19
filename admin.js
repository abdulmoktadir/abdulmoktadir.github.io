(() => {
  const ADMIN_PASSWORD = "Mokta5";
  const ADMIN_SESSION_KEY = "abdul-site-admin-unlocked";
  const DELETED_STORAGE_KEY = "abdul-site-deleted-publications";

  let adminUnlocked = sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
  let deletedPublicationIds = [];
  let adminPanel;
  let adminTools;

  function loadDeletedPublications() {
    try {
      deletedPublicationIds = JSON.parse(localStorage.getItem(DELETED_STORAGE_KEY) || "[]");
    } catch (error) {
      deletedPublicationIds = [];
    }
  }

  function saveDeletedPublications() {
    localStorage.setItem(DELETED_STORAGE_KEY, JSON.stringify(deletedPublicationIds));
  }

  const originalMergePublications = mergePublications;
  mergePublications = function mergePublicationsWithDeletedFilter() {
    originalMergePublications();
    publications = publications.filter((publication) => !deletedPublicationIds.includes(publicationId(publication)));
  };

  const originalRenderPublications = renderPublications;
  renderPublications = function renderPublicationsWithAdminTools() {
    originalRenderPublications();
    if (adminUnlocked) addDeleteButtons();
  };

  function updateAdminPanel(message = "") {
    if (!adminPanel || !adminTools) return;
    adminPanel.querySelector("[data-admin-locked]").hidden = adminUnlocked;
    adminPanel.querySelector("[data-admin-unlocked]").hidden = !adminUnlocked;
    adminTools.hidden = !adminUnlocked;

    const note = adminPanel.querySelector("[data-admin-note]");
    if (note) note.textContent = message;

    const status = adminPanel.querySelector("[data-admin-status]");
    if (status) {
      status.textContent = deletedPublicationIds.length
        ? `${deletedPublicationIds.length} deleted publication${deletedPublicationIds.length === 1 ? "" : "s"} hidden in this browser.`
        : "No deleted publications are hidden in this browser.";
    }
  }

  function addDeleteButtons() {
    const list = document.querySelector("[data-publication-list]");
    if (!list) return;

    const visiblePublications = getFilteredPublications();
    Array.from(list.querySelectorAll(".publication-card")).forEach((card, index) => {
      const publication = visiblePublications[index];
      if (!publication || card.querySelector("[data-delete-publication]")) return;

      const actions = document.createElement("div");
      actions.className = "publication-actions";
      const existingAction = card.querySelector(".mini-button");
      if (existingAction) {
        existingAction.replaceWith(actions);
        actions.appendChild(existingAction);
      } else {
        card.appendChild(actions);
      }

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "mini-button danger";
      deleteButton.dataset.deletePublication = publicationId(publication);
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deletePublication(publication));
      actions.appendChild(deleteButton);
    });
  }

  function deletePublication(publication) {
    const id = publicationId(publication);
    if (!id) return;

    const confirmed = window.confirm(`Delete this publication from your editable publication list?\n\n${publication.title}`);
    if (!confirmed) return;

    const isImported = importedPublications.some((item) => publicationId(item) === id);
    const isBase = basePublications.some((item) => publicationId(item) === id);

    if (isImported) {
      importedPublications = importedPublications.filter((item) => publicationId(item) !== id);
      saveImportedPublications();
    }

    if ((isBase || !isImported) && !deletedPublicationIds.includes(id)) {
      deletedPublicationIds.push(id);
      saveDeletedPublications();
    }

    mergePublications();
    populateYears();
    renderPublications();
    updateAdminPanel("Publication deleted from this browser.");
  }

  function restoreDeletedPublications() {
    if (!deletedPublicationIds.length) {
      updateAdminPanel("There are no deleted publications to restore.");
      return;
    }

    const confirmed = window.confirm("Restore deleted built-in publications in this browser?");
    if (!confirmed) return;

    deletedPublicationIds = [];
    saveDeletedPublications();
    mergePublications();
    populateYears();
    renderPublications();
    updateAdminPanel("Deleted publications restored.");
  }

  function buildAdminPanel() {
    adminTools = document.querySelector("[data-admin-tools]");
    if (!adminTools) return;

    adminPanel = document.createElement("section");
    adminPanel.className = "admin-panel";
    adminPanel.innerHTML = `
      <div data-admin-locked>
        <div class="admin-panel-heading">
          <div>
            <p class="eyebrow">Admin</p>
            <h3>Publication editor</h3>
          </div>
        </div>
        <form class="admin-login" data-admin-form>
          <label>
            <span>Password</span>
            <input type="password" name="password" autocomplete="current-password" required />
          </label>
          <button class="button primary" type="submit">Unlock Edit</button>
        </form>
      </div>
      <div data-admin-unlocked hidden>
        <div class="admin-toolbar">
          <div>
            <p class="eyebrow">Admin mode</p>
            <h3>Publication editing unlocked</h3>
            <p class="form-note" data-admin-status></p>
          </div>
          <div class="admin-actions">
            <button class="button soft" type="button" data-restore-publications>Restore Deleted</button>
            <button class="button soft" type="button" data-admin-lock>Lock</button>
          </div>
        </div>
      </div>
      <p class="form-note" data-admin-note aria-live="polite"></p>
    `;

    adminTools.parentNode.insertBefore(adminPanel, adminTools);

    adminPanel.querySelector("[data-admin-form]").addEventListener("submit", (event) => {
      event.preventDefault();
      const password = new FormData(event.currentTarget).get("password");
      if (password !== ADMIN_PASSWORD) {
        updateAdminPanel("Incorrect password.");
        return;
      }
      adminUnlocked = true;
      sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      event.currentTarget.reset();
      updateAdminPanel("Admin mode unlocked.");
      renderPublications();
    });

    adminPanel.querySelector("[data-admin-lock]").addEventListener("click", () => {
      adminUnlocked = false;
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      updateAdminPanel("Admin mode locked.");
      renderPublications();
    });

    adminPanel.querySelector("[data-restore-publications]").addEventListener("click", restoreDeletedPublications);
    updateAdminPanel();
  }

  function initAdmin() {
    loadDeletedPublications();
    mergePublications();
    populateYears();
    buildAdminPanel();
    renderPublications();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdmin);
  } else {
    initAdmin();
  }
})();
