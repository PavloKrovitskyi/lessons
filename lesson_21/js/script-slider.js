"use strict";

window.addEventListener("load", windowLoaded);

function windowLoaded() {
  if (document.querySelector(".main__slider")) {
    new Swiper(".main__slider", {
      loop: true,
      speed: 1000,
      parallax: true,
      // mousewheel: true,
      keyboard: true,
      touchEventsTarget: 'wrapper',
      touchRatio: 1,
      autoplay: { // Доданий параметр для автоматичного перемикання слайдів
        delay: 5000, // Час між перемиканнями в мілісекундах
        disableOnInteraction: true // Чи має автопрокрутка зупинятися при взаємодії користувача зі слайдером
      },
      on: {
        init: function () {
          document.documentElement.classList.add("loaded");
        },
      },
    });
  }
}
