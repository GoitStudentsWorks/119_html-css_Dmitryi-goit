const menuButton = document.querySelector('[data-menu-open]');
const closeButton = document.querySelector('[data-menu-close]');
const menu = document.querySelector('.mob-menu');
const body = document.body;

menuButton.addEventListener('click', () => {
  menu.classList.add('is-open');
  body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('is-open');
  body.style.overflow = '';
});