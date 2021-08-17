// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
import OverlayScrollbars from "overlayscrollbars";

export default function scrollbar() {
  const scrollbars = document.querySelectorAll(".js-scrollbar");

  OverlayScrollbars(scrollbars, {
    className: "os-theme-dark",
    scrollbars: {
      clickScrolling: true,
    },
  });
}
