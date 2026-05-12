// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.mission-block, .metric-card, .team-card, .partner-card').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.07}s`;
  observer.observe(el);
});

// Subtle electrode pulse animation
const electrodes = document.querySelectorAll('.electrode');
if (electrodes.length) {
  setInterval(() => {
    electrodes.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        setTimeout(() => el.style.opacity = '0.7', 200);
      }, i * 150);
    });
  }, 2000);
}
