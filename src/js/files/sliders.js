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
        prevEl: ".s-adv .slider-btn._prev",
        nextEl: ".s-adv .slider-btn._next",
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
        prevEl: ".s-services .slider-btn._prev",
        nextEl: ".s-services .slider-btn._next",
      },
      autoplay: {
        delay: 3500,
      },
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

  const reviewsSlider = document.querySelector(".s-reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: ".s-reviews .slider-btn._prev",
        nextEl: ".s-reviews .slider-btn._next",
      },
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".s-reviews .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  const materialsSlider = document.querySelector(".s-materials__slider");

  if (materialsSlider) {
    const swiper = new Swiper(materialsSlider, {
      speed: 700,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: ".s-materials .slider-btn._prev",
        nextEl: ".s-materials .slider-btn._next",
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }
}
