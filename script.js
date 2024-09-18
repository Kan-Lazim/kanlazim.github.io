gsap.registerPlugin(ScrollTrigger);

// Scroll Animasyonları
gsap.utils.toArray('.slide-in').forEach((elem) => {
  gsap.from(elem, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Hero Bölümü için Fade-in Animasyonu
window.addEventListener('load', () => {
  document.querySelector('.fade-in').classList.add('show');
});

// Yumuşak Kaydırma
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
// Slider işlevselliği
const sliderContainer = document.getElementById('slider-container');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
  sliderContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  sliderContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
