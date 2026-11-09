const hamburgerButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', () => {
  const isExpanded =
    hamburgerButton.getAttribute('aria-expanded') === 'true';

  hamburgerButton.setAttribute(
    'aria-expanded',
    !isExpanded
  );

  menu.classList.toggle('is-active');
});
