// Toggle responsive navbar (optional future use)
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".menu-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("active");
    });
  }
});
