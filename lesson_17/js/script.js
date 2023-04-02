const burgerMenu = document.querySelector('.menu__burger-icon');
const menuItems = document.querySelector('.menu__items--burger');

function toggleMenu() {
  burgerMenu.classList.toggle('active');
  menuItems.classList.toggle('menu__items--visible');
}

burgerMenu.addEventListener('click', toggleMenu);

function handleClickOutside(event) {
  if (!menuItems.contains(event.target) && !burgerMenu.contains(event.target)) {
    menuItems.classList.remove('menu__items--visible');
  }
}

burgerMenu.addEventListener('click', toggleMenu);
document.addEventListener('click', handleClickOutside);