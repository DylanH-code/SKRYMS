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


// ===== AUTOMATIC LANGUAGE DETECTION =====
(function autoLanguageRedirect() {
  // Prevent infinite redirect loop
  if (sessionStorage.getItem("langSet")) return;

  const browserLang = navigator.language || navigator.userLanguage;

  if (browserLang.startsWith("es") && !location.pathname.includes("/es/")) {
    sessionStorage.setItem("langSet", "true");
    location.href = "/es/home_es.html";
  }

  if (browserLang.startsWith("en") && !location.pathname.includes("/en/")) {
    sessionStorage.setItem("langSet", "true");
    location.href = "/en/home.html";
  }
})();



const langBtn = document.getElementById("langBtn");

langBtn.addEventListener("click", () => {
  const isEnglish = document.documentElement.lang === "en";
  sessionStorage.setItem("langSet", "true");

  location.href = isEnglish
    ? "/es/home_es.html"
    : "/en/home.html";
});
