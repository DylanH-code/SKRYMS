// 'back to top' btn and function

const backToTop = document.getElementById("backToTop");

// Show button after scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll back to top smoothly
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




let currentLang = "en";

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  document.getElementById("langBtn").textContent = currentLang.toUpperCase();

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});

