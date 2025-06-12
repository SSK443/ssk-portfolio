document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const yOffset = -80; // Adjust to navbar height
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});


const titles = [
  "FrontEnd Developer",
  "Web Developer",
  "UI Designer",
  "React Developer",
  "JavaScript Ninja",
];

let index = 0;
const textSpan = document.getElementById("animatedText");

setInterval(() => {
  index = (index + 1) % titles.length;

  // Remove and re-trigger the animation
  textSpan.style.animation = "none";
  void textSpan.offsetWidth; // force reflow
  textSpan.style.animation = "fadeSlideIn 0.6s ease forwards";

  textSpan.textContent = titles[index];
}, 2000);
