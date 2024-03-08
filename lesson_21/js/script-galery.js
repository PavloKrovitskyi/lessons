// Отримуємо кнопки та елемент галереї
const column3Btn = document.querySelector('.menu-column__button.column-3');
const column4Btn = document.querySelector('.menu-column__button.column-4');
const galleryEl = document.querySelector('.galery__body');
const moreArticlesBtn = document.querySelector('.galery__wrapper-button-more-articles');
const cards = document.querySelectorAll('.galery__card');
const button = document.querySelector('.galery__button-more-articles');

// Встановлюємо обробники подій на кнопки
column3Btn.addEventListener('click', function () {
  // Змінюємо стилі елементу галереї на відповідні для 3 стовпців
  galleryEl.style.gridTemplateColumns = 'repeat(3, 1fr)';
  // Змінюємо стилі кнопки moreArticlesBtn на відповідні для 3 стовпців
  moreArticlesBtn.style.gridColumn = 'span 3';

  // код для показу усіх карток
  // cards.forEach(function (card) {
  //   card.classList.add('shown');
  // });

  // Показуємо усі картки з класом .galery__card
  cards.forEach(function (card, index) {
    if (index < 6) {
      card.classList.add('shown');
    } else {
      card.classList.remove('shown');
    }
    const galleryBodyEl = document.querySelector('.galery__body');
    galleryBodyEl.style.columnGap = '1.875rem';
    galleryBodyEl.style.rowGap = '2.75rem';
  });
  const cardTitleEls = document.querySelectorAll('.card__title');
  cardTitleEls.forEach(function (cardTitleEl) {
    cardTitleEl.style.fontSize = '1.5625rem';
  });
});

column4Btn.addEventListener('click', function () {
  // Змінюємо стилі елементу галереї на відповідні для 4 стовпців
  galleryEl.style.gridTemplateColumns = 'repeat(4, 1fr)';
  // Змінюємо стилі кнопки moreArticlesBtn на відповідні для 4 стовпців
  moreArticlesBtn.style.gridColumn = 'span 4';
  // Показуємо лише перші 8 карток з класом .galery__card
  cards.forEach(function (card, index) {
    if (index < 8) {
      card.classList.add('shown');
    } else {
      card.classList.remove('shown');
    }
    // Змінюємо стиль елементів всередині карточки
    const cardElements = card.querySelectorAll('.card__description, .card__autor');
    cardElements.forEach(function (element) {
      element.style.gap = '0.3125rem';
      element.style.paddingTop = '0.3125rem';
    });
    const cards = document.querySelectorAll('.galery__card');
    cards.forEach(function (card) {
      card.style.gap = '10px';
    });
    const galleryBodyEl = document.querySelector('.galery__body');
    galleryBodyEl.style.columnGap = '0.9375rem';
    galleryBodyEl.style.rowGap = '1.875rem';
  });
  const cardTitleEls = document.querySelectorAll('.card__title');
  cardTitleEls.forEach(function (cardTitleEl) {
    cardTitleEl.style.fontSize = '1.25rem';
  });


});


// Код для кнопки "Показати більше"
button.addEventListener('click', function () {
  cards.forEach(function (card, index) {
    if (index >= 6) { // показати картки, які індекс більше або рівний 6
      card.classList.add('shown');
    }
  });
});