// 🌈 Smooth Scroll for Internal Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 🎇 Floating Petals Animation Generator
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.body.appendChild(petal);
  setTimeout(() => {
    petal.remove();
  }, 5000);
}
setInterval(createPetal, 300);

// 🌟 Scroll Reveal Effect
const reveals = document.querySelectorAll('section, .subject-header');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
}, { threshold: 0.3 });

reveals.forEach(section => {
  observer.observe(section);
});

// 🌀 Gyroscope-Based Parallax
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {
    const x = event.gamma / 90; // -1 to 1
    const y = event.beta / 90;
    document.body.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  });
}

// ✨ Rainbow Hover Glow for all links
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.textShadow = "0 0 5px #ff7eb3, 0 0 10px #ff758c, 0 0 15px #ff6e7f";
  });
  link.addEventListener('mouseleave', () => {
    link.style.textShadow = "none";
  });
});
