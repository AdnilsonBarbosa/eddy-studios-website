(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    const close = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    };
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") close();
    });
  }
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();