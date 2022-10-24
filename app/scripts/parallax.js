import SimpleParallax from "simple-parallax-js";

export default function parallax() {
  const images = document.querySelectorAll("[data-parallax] img");

  new SimpleParallax(images, {
    delay: 0.6,
    scale: 1.5,
    transition: "cubic-bezier(0,0,0,1)",
  });
}
