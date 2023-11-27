// Отримайте всі обгортки полів для введення на задній стороні картки
let inputWrappers = document.querySelectorAll('.form-3d__body .form-3d__side--back .form-3d__item');

// Для кожної обгортки
for (let i = 0; i < inputWrappers.length; i++) {
  // Отримайте поле для введення та textarea всередині обгортки
  let fields = inputWrappers[i].querySelectorAll('input, textarea');

  for (let j = 0; j < fields.length; j++) {
    // Коли поле для введення або textarea отримує фокус
    fields[j].addEventListener('focus', function () {
      // Додайте клас 'no-hover' до картки, щоб зупинити обертання
      document.querySelector('.form-3d').classList.add('hover-pause');
    });

    // Коли поле для введення або textarea втрачає фокус
    fields[j].addEventListener('blur', function () {
      // Видаліть клас 'no-hover' з картки, щоб дозволити обертання
      document.querySelector('.form-3d').classList.remove('hover-pause');
    });
  }
}

// =======================================================================================================
// код для валідації форми
document.getElementById('my-form').addEventListener('submit', function (event) {
  let fields = document.querySelectorAll('[data-validate]');

  for (let i = 0; i < fields.length; i++) {
    // додавання елементу span з класом error-message текст береться з значення датаатрибуту data-validate
    if (!fields[i].nextElementSibling || fields[i].nextElementSibling.className !== 'error-message') {
      fields[i].insertAdjacentHTML('afterend', '<span class="error-message"></span>');
    }

    // перевірка чи поле не пусте і чи не = placeholder
    if (fields[i].value == "" || fields[i].value == fields[i].placeholder) {
      event.preventDefault();
      let errorMessage = fields[i].getAttribute('data-validate');
      let errorElement = fields[i].nextElementSibling;
      // поява тексту помилки
      errorElement.textContent = errorMessage;
      errorElement.style.visibility = 'visible';
      errorElement.style.opacity = '1';
    }

    fields[i].addEventListener('focus', function () {
      let errorElement = fields[i].nextElementSibling;
      // зникнення тексту помилки при фокусі на полі вводу
      errorElement.style.visibility = 'hidden';
      errorElement.style.opacity = '0';
    });

    fields[i].addEventListener('blur', function () {
      if (fields[i].value == "" || fields[i].value == fields[i].placeholder) {
        let errorMessage = fields[i].getAttribute('data-validate');
        let errorElement = fields[i].nextElementSibling;
        // поява тексту помилки при втраті фокусу та пустому полі чи плейсхолдері
        errorElement.textContent = errorMessage;
        errorElement.style.visibility = 'visible';
        errorElement.style.opacity = '1';
      }
    });
  }
});
