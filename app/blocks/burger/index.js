export default function burger() {
  const burger = document.querySelector(".js-burger");
  const menu = document.querySelector(".js-menu");

  burger?.addEventListener("click", () => {
    menu.classList.add("is-active");
  });
}
