export default function menu() {
  const menu = document.querySelector(".js-menu");
  const closeButton = menu.querySelector(".js-menu-close");

  menu.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "a") {
      menu.classList.remove("is-active");
    }
  });

  closeButton.addEventListener("click", () => {
    menu.classList.remove("is-active");
  });
}
