import SimpleParallax from "simple-parallax-js";

export default function parallax() {
  const images = document.querySelectorAll("[data-parallax] img");

  new SimpleParallax(images, {
    scale: 1.75,
  });
}
