
(function () {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  let idx = 0;
  const show = i => { slides.forEach(s => s.classList.remove('active')); slides[i].classList.add('active'); };
  if (slides.length) show(0);
  setInterval(() => { idx = (idx + 1) % slides.length; show(idx); }, 5000);
})();
