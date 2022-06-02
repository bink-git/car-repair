const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
  autoplay: {
    delay: 3000,
  },
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});