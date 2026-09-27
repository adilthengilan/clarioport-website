// Clarioport splash screen
window.addEventListener("load", () => {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;
  window.setTimeout(() => splash.classList.add("is-hidden"), 1700);
  window.setTimeout(() => splash.remove(), 2550);
});

// Bidirectional scroll reveal: blur in when entering, blur out when leaving.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.classList.remove("blur-out");
    } else {
      entry.target.classList.remove("visible");
      entry.target.classList.add("blur-out");
    }
  });
}, {
  threshold: 0.14,
  rootMargin: "0px 0px -7% 0px"
});

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
menu?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});
