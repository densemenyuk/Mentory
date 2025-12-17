// <!-- Initialize Swiper -->
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 12,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    344: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    359: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    639: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
