// smoothScroll.js
(function() {
  let targetScroll = window.scrollY;
  let currentScroll = window.scrollY;
  let velocity = 0;
  const ease = 0.07;   // smaller = slower catching up
  const damping = 1; // closer to 1 = longer glide

  function smoothScroll() {
    const delta = targetScroll - currentScroll;
    velocity = delta * ease;       // Move proportionally to the distance
    currentScroll += velocity;     // Update
    window.scrollTo(0, currentScroll);
    
    requestAnimationFrame(smoothScroll);
  }

  function onWheel(e) {
    e.preventDefault();
    targetScroll += e.deltaY;
    targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
  }

  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("wheel", onWheel, { passive: false });
    smoothScroll();
  });
})();