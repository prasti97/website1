var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

function toogleMenu() {
  const mToogle = document.querySelector('.toogle');
  mToogle.classList.toggle('active');

  const nav = document.querySelector('.navigation');
  nav.classList.toggle('active');
}
