// https://idangero.us/swiper/api/
import Swiper from "swiper";
import {createVideoBlock} from "../video-block";

const {globalOptions} = window;

const API_KEY = "AIzaSyBE5rt_cEGFQ6tn-M43PPcWeEuoVCqZcOo";

const headers = {
  "Content-Type": "application/json",
};

const getParsedDuration = input => {
  const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let totalSeconds;

  if (reptms.test(input)) {
    const matches = reptms.exec(input);

    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);

    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  }

  return totalSeconds;
};

export const createSlide = data => {
  const slide = document.createElement("div");
  const videoBlock = createVideoBlock(data);

  slide.classList.add("slider__slide", "swiper-slide");

  slide.appendChild(videoBlock);

  return slide;
};

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

    const swiper = new Swiper(container, {
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

    if (slider.id === "slider-youtube") {
      const playlistItemsUrl = new URL(
        "https://www.googleapis.com/youtube/v3/playlistItems",
      );

      playlistItemsUrl.search = new URLSearchParams({
        key: API_KEY,
        maxResults: 50,
        playlistId: "PLtbWm39DbODxgbVRU8odMGWVK3yOMdwVF",
        part: ["snippet"].join(","),
      });

      fetch(playlistItemsUrl, {
        headers,
        method: "GET",
      })
        .then(res => res.json())
        .then(data => {
          const videoIds = [];

          for (const item of data.items) {
            const {snippet} = item;
            videoIds.push(snippet.resourceId.videoId);
          }

          const videosUrl = new URL(
            "https://www.googleapis.com/youtube/v3/videos",
          );

          videosUrl.search = new URLSearchParams({
            key: API_KEY,
            id: videoIds.join(","),
            part: ["snippet", "contentDetails"].join(","),
          });

          fetch(videosUrl, {
            headers,
            method: "GET",
          })
            .then(res => res.json())
            .then(data => {
              swiper.removeAllSlides();

              for (const item of data.items) {
                const {
                  snippet: {title, channelTitle, thumbnails},
                  contentDetails: {duration},
                } = item;

                const parsedDuration = getParsedDuration(duration);

                const time = new Date(parsedDuration * 1000)
                  .toISOString()
                  .substring(14, 19);

                const slide = createSlide({
                  time,
                  title,
                  subtitle: channelTitle,
                  link: `https://youtube.com/watch?v=${item.id}`,
                  image: {
                    src: (
                      thumbnails.maxres ||
                      thumbnails.standard ||
                      thumbnails.high ||
                      thumbnails.medium ||
                      thumbnails.default
                    ).url,
                    alt: title,
                  },
                });

                swiper.appendSlide(slide);
              }
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
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
