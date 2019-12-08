const mainNav = document.getElementById('js-menu');
const navBurgerToggle = document.getElementById('js-burger');

navBurgerToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});
