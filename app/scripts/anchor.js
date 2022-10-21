// При клике на .js-anchor страница плавно скроллится к блоку, указанному в его href
export default function anchor() {
  const links = document.querySelectorAll(".js-anchor");

  links.forEach(link => {
    const href = link.getAttribute("href");
    const element = document.querySelector(href);
    const elementPos = element.getBoundingClientRect().top;
    const offsetPos = elementPos + window.scrollY;

    link.addEventListener("click", e => {
      e.preventDefault();

      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    });
  });

  const prevents = document.querySelectorAll(".js-prevent");

  prevents.forEach(prevent => {
    prevent.addEventListener("click", e => {
      e.preventDefault();
    });
  });
}
