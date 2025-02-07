function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function init() {
  const $navToggle = document.getElementById('nav__toggle');
  console.log($navToggle);
  $navToggle.addEventListener('click', () => {
    // menu toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__list');
  $navLinkList.forEach((item) => {
    item.addEventListener('click', () => {
      toggleMenu();
    });
  });
}

init();
