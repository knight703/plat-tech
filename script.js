const mainNav = document.querySelector('header'); // Use .main-nav, not #navbar
window.addEventListener('scroll', () => {
    mainNav.classList.toggle('scrolled', window.scrollY > 50); // smooth threshold
});

let historyIndex = 0;
const historySlides = document.querySelectorAll(".history-carousel .history-slide");

historySlides.forEach((slide, i) => {
    slide.style.opacity = i === 0 ? 1 : 0;
});

setInterval(() => {
    historySlides.forEach(s => s.style.opacity = 0);
    historySlides[historyIndex].style.opacity = 1;
    historyIndex = (historyIndex + 1) % historySlides.length;
}, 5000);
