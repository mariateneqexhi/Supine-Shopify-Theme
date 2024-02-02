let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    860: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
  reverse: true,
});

new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    }
    return;
  }
  if (!swiper.autoplay.running) {
    swiper.autoplay.start();
  }
}).observe(document.getElementById('shopify-section-costumers'));
