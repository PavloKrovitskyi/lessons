
document.addEventListener("click", function (e) {
  const targetElement = e.target;

  if (targetElement.closest('.menu-burger')) {
    document.documentElement.classList.toggle('menu-open');
    e.preventDefault();
  }

})

// код для появи картинок
var s = 0.3; // початкова затримка у секундах
var cards = document.querySelectorAll(".gallery__card");
cards.forEach(function (card, index) {
  card.style.transitionDelay = s * (1 + index) + 's';
});

var gallery = document.querySelector(".gallery");
var galleryTop = gallery.offsetTop;
var galleryHeight = gallery.offsetHeight;

if (window.matchMedia("(min-width: 768.98px)").matches) {
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > galleryTop + galleryHeight / 2 - window.innerHeight) {
      cards.forEach(function (card) {
        card.style.opacity = '1';
      });
    }
  });

}
