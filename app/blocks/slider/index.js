// https://idangero.us/swiper/api/
import Swiper from "swiper";

const {globalOptions} = window;

export default function slider() {
  const defaultOptions = {
    speed: 700,
    observer: true,
    autoHeight: true,
    observeParents: true,
    keyboard: {
      enabled: true,
    },
  };

  const defaultSliders = document.querySelectorAll(".js-slider");
  const freeSliders = document.querySelectorAll(".js-slider-free");
  const freeTabsSliders = document.querySelectorAll(".js-slider-free-tabs");

  const renderDefaultSlider = slider => {
    const container = slider.querySelector(".js-slider-container");
    const arrowPrev = slider.querySelector(".js-slider-button-prev");
    const arrowNext = slider.querySelector(".js-slider-button-next");
    const paginationContainer = slider.querySelector(".js-slider-dots");

    new Swiper(container, {
      ...defaultOptions,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      roundLengths: true,
      pagination: {
        el: paginationContainer,
        clickable: true,
        bulletClass: "slider__dot",
        bulletActiveClass: "is-active",
      },
      navigation: {
        prevEl: arrowPrev,
        nextEl: arrowNext,
      },
    });
  };

  const renderFreeSlider = slider => {
    const container = slider.querySelector(".js-slider-container");

    new Swiper(container, {
      ...defaultOptions,
      slidesPerView: 1.2,
      spaceBetween: 30,
      freeMode: true,
      slideToClickedSlide: true,
      breakpoints: {
        [globalOptions.sizes.xs]: {
          slidesPerView: 1.6,
        },
        [globalOptions.sizes.sm]: {
          slidesPerView: 4.2,
          spaceBetween: 18,
        },
        [globalOptions.sizes.md]: {
          slidesPerView: 4.2,
        },
        [globalOptions.sizes.lg]: {
          slidesPerView: 4,
        },
      },
    });
  };

  const renderFreeTabsSlider = slider => {
    const container = slider.querySelector(".js-slider-container");

    new Swiper(container, {
      ...defaultOptions,
      slidesPerView: 1.2,
      spaceBetween: 30,
      freeMode: true,
      slideToClickedSlide: true,
      breakpoints: {
        [globalOptions.sizes.xs]: {
          slidesPerView: 2,
        },
      },
    });
  };

  defaultSliders.forEach(renderDefaultSlider);
  freeSliders.forEach(renderFreeSlider);
  freeTabsSliders.forEach(renderFreeTabsSlider);
}
