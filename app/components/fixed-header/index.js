export default function fixedHeader() {
  const fixedHeader = document.querySelector(".js-fixed-header");

  const checkWindowScroll = () => {
    if (window.scrollY > fixedHeader.offsetHeight) {
      fixedHeader.classList.add("is-active");
    } else {
      fixedHeader.classList.remove("is-active");
    }
  };

  window.addEventListener("load", checkWindowScroll);
  window.addEventListener("scroll", checkWindowScroll, {
    passive: true,
  });
}
