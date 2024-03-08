const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
  searchInput.style.display = 'block';
  searchInput.focus();
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value;
    // відправляємо запит на сервер та відображаємо результати на сторінці
  }
});

document.addEventListener('click', (event) => {
  const isClickInside = searchIcon.contains(event.target) || searchInput.contains(event.target);
  if (!isClickInside) {
    searchInput.style.display = 'none';
  }
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;

  if (targetElement.closest('.menu-icon')) {
    document.documentElement.classList.toggle('menu-open');
    e.preventDefault();
  }

});



