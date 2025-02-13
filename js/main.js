function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
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

  handleFloatingButton();
}

init();

const options = {
  threshold: 0.5, // 언제 옵션이 감지가 되었는지 정의할 수 있음 (0~1 사이의 값)
};

// 화면에 등장하는 요소를 관찰
const observer = new IntersectionObserver((entries) => {
  // 특정 섹션이 나타나면 실행되는 콜백함수
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((item) => {
        item.classList.remove('active-link');
      });
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));

const scrollReveal = ScrollReveal({
  delay: 200,
  origin: 'top',
  distance: '60px',
  duration: 2000,
});
scrollReveal.reveal('.home__data, .about__img, .skills__text');
scrollReveal.reveal('.home__img, .about__data, .skills__img', { delay: 400 });
scrollReveal.reveal('.skills__data, .work__link, .contact__input', {
  interval: 200,
});

const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type('안녕하세요! <br />')
  .type('<strong class="home__title-color">프론트엔드 개발자</strong> <br />')
  .type('<strong class="home__title-color">Elli</strong>', { delay: 300 })
  .delete(4, { delay: 300 })
  .type('<strong class="home__title-color">이유진</strong>입니다.')
  .go();

// 이메일 클라이언트 열기
const $contactForm = document.getElementById('contactForm');
$contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $contactForm.name.value;
  const subject = $contactForm.subject.value;
  const message = $contactForm.message.value;
  const to = 'elli.stdev@gmail.com';

  // 이메일 클라이언트 열기
  location.href = `mailto:${encodeURIComponent(
    to,
  )}?subject=[${encodeURIComponent(name)}님 문의] ${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(message)}`;
});
