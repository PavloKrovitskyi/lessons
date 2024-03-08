window.onload = function () {
  const burgerIcon = document.querySelector('.menu-burger');
  const logo = document.querySelector('.header__logo');


  burgerIcon.addEventListener('click', function () {
    logo.classList.toggle('white');
  });
};

