/*----------------Variaveis----------------*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup:1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper_pag",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper_next",
      prevEl: ".swiper_prev",
    },
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      790: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup:2
      },
      1100: {
        slidesPerGroup:3,
        slidesPerView: 3
      }
    }
});

var swiper_02 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup:1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper2_pag",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper2_next",
    prevEl: ".swiper2_prev",
  },
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
  breakpoints: {
    790: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup:2
    },
    1100: {
      slidesPerGroup:3,
      slidesPerView: 3
    }
  }
});

var params = {
  container: document.getElementById('anima_inte'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/json/integrantes.json'
};

/*----------------Events----------------*/

lottie.loadAnimation(params);