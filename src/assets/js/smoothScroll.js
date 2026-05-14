let current = 0;
let target = 0;
const ease = 0.1; // Lower = smoother/slower

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  target += e.deltaY;
}, { passive: false });

function smoothScroll() {
  current += (target - current) * ease;
  window.scrollTo(0, current);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();
