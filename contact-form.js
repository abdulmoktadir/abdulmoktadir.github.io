(() => {
  const CONTACT_EMAIL = "abdul.moktadir@connect.polyu.hk";
  const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;

  function setHidden(form, name, value) {
    let field = form.querySelector(`input[name="${name}"]`);
    if (!field) {
      field = document.createElement("input");
      field.type = "hidden";
      field.name = name;
      form.appendChild(field);
    }
    field.value = value;
  }

  function setupReliableContactSubmit() {
    const form = document.querySelector("[data-contact-form]");
    const note = document.querySelector("[data-form-note]");
    if (!form) return;

    form.action = FORMSUBMIT_ENDPOINT;
    form.method = "POST";

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = data.get("name") || "Website visitor";
      const email = data.get("email") || "";
      const topic = data.get("topic") || "Website message";

      setHidden(form, "_subject", `${topic} from ${name}`);
      setHidden(form, "_replyto", email);
      setHidden(form, "_template", "table");
      setHidden(form, "_next", `${window.location.origin}${window.location.pathname}#contact`);

      if (note) {
        note.textContent = "Sending through FormSubmit. For the first test, check your inbox and confirm FormSubmit activation.";
      }

      HTMLFormElement.prototype.submit.call(form);
    }, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupReliableContactSubmit);
  } else {
    setupReliableContactSubmit();
  }
})();
