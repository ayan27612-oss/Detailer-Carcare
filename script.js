const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.service-card, .experience-title, .experience-copy, .showcase-large, .showcase-small, .visit-panel');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
