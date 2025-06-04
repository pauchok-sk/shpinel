export default function sliders() {
  const advSlider = document.querySelector(".s-adv__slider");

  if (advSlider) {
    const swiper = new Swiper(advSlider, {
      speed: 700,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: document.querySelector(".s-adv .slider-btn._prev"),
        nextEl: document.querySelector(".s-adv .slider-btn._next"),
      },
      pagination: {
        el: ".s-adv__pagination",
        clickable: true,
      },
    });
  }

  const servicesSlider = document.querySelector(".s-services__slider");

  if (servicesSlider) {
    const swiper = new Swiper(servicesSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: document.querySelector(".s-services .slider-btn._prev"),
        nextEl: document.querySelector(".s-services .slider-btn._next"),
      },
      // autoplay: {
      //   delay: 3500,
      // },
      pagination: {
        el: ".s-services .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }
}
