const nav = document.getElementById("nav");
const links = document.getElementById("nav-links");
const toggle = document.getElementById("menu-toggle");
const copyBtn = document.getElementById("copy-ca");
const caText = document.getElementById("ca-text");
const toast = document.getElementById("toast");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

copyBtn.addEventListener("click", async () => {
  const value = caText.textContent.trim();
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const input = document.createElement("textarea");
    input.value = value;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  toast.classList.add("show");
  copyBtn.textContent = "Copied";
  setTimeout(() => {
    toast.classList.remove("show");
    copyBtn.textContent = "Copy";
  }, 1600);
});

window.addEventListener("scroll", () => {
  nav.style.boxShadow = window.scrollY > 8 ? "0 8px 24px rgba(0,0,0,0.04)" : "none";
});
