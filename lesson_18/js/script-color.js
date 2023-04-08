window.onload = function () {
  const burgerIcon = document.querySelector('.menu-burger');
  const logo = document.querySelector('.header__logo');
  const sidebarLink = document.querySelector('.menu__sidebar-link');

  burgerIcon.addEventListener('click', function () {
    logo.classList.toggle('white');
    sidebarLink.classList.toggle('white');
  });
};

