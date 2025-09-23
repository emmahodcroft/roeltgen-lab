
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('hidden'));
});
