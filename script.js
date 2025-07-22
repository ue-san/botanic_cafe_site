// ハンバーガーメニュー開閉
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("active");
});

// スムーズスクロール
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// スクロールでフェードイン
const fadeElements = document.querySelectorAll('.fade-in');
const handleScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// ページトップボタンの表示と動作
const toTopBtn = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
