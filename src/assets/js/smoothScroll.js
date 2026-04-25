let targetScroll = window.pageYOffset;
let currentScroll = window.pageYOffset;

window.addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevents default jumpy scroll
    targetScroll += e.deltaY;
    // Keep target within page bounds
    targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
}, { passive: false });

function update() {
    // Linear Interpolation (LERP) for smoothness
    currentScroll += (targetScroll - currentScroll) * 0.1; 
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(update);
}
update();
