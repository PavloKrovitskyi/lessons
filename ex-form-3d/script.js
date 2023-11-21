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

// ===
document.getElementById('my-form').addEventListener('submit', function (event) {
  // Отримайте всі поля для введення з атрибутом data-validate
  let fields = document.querySelectorAll('[data-validate]');

  for (let i = 0; i < fields.length; i++) {
    // Якщо поле введення порожнє або дорівнює placeholder
    if (fields[i].value == "" || fields[i].value == fields[i].placeholder) {
      event.preventDefault();
      // Отримайте повідомлення про помилку з атрибута data-validate
      let errorMessage = fields[i].getAttribute('data-validate');
      // Відобразіть повідомлення про помилку під полем введення
      let errorElement = fields[i].nextElementSibling;
      errorElement.textContent = errorMessage;
      errorElement.style.display = 'block';
    }

    // Коли поле для введення отримує фокус
    fields[i].addEventListener('focus', function () {
      // Сховайте повідомлення про помилку
      let errorElement = fields[i].nextElementSibling;
      errorElement.style.display = 'none';
    });

    // Коли поле для введення втрачає фокус
    fields[i].addEventListener('blur', function () {
      // Якщо поле введення порожнє або дорівнює placeholder
      if (fields[i].value == "" || fields[i].value == fields[i].placeholder) {
        // Отримайте повідомлення про помилку з атрибута data-validate
        let errorMessage = fields[i].getAttribute('data-validate');
        // Відобразіть повідомлення про помилку
        let errorElement = fields[i].nextElementSibling;
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
      }
    });
  }
});



// document.getElementById('my-form').addEventListener('submit', function (event) {
//   // Отримайте всі поля для введення з атрибутом data-validate
//   let fields = document.querySelectorAll('[data-validate]');

//   for (let i = 0; i < fields.length; i++) {
//     // Якщо поле введення порожнє
//     if (fields[i].value == "") {
//       event.preventDefault();
//       // Отримайте повідомлення про помилку з атрибута data-validate
//       let errorMessage = fields[i].getAttribute('data-validate');
//       // Відобразіть повідомлення про помилку під полем введення
//       let errorElement = fields[i].nextElementSibling;
//       errorElement.textContent = errorMessage;
//       errorElement.style.display = 'block';
//     }
//   }
// });