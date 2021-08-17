export default function list() {
  const nav = document.querySelectorAll(".js-nav");
  const sections = [...document.querySelectorAll("[data-section]")].filter(
    section => section.id,
  );
  let navLinks;

  const changeLinkState = () => {
    let index = sections.length;

    // eslint-disable-next-line no-empty
    while (--index && window.scrollY + 1 < sections[index].offsetTop) {}

    nav.forEach(list => {
      navLinks = list.querySelectorAll(".js-anchor");
      navLinks.forEach(link => link.classList.remove("is-active"));
      navLinks[index].classList.add("is-active");
    });
  };

  window.addEventListener("load", changeLinkState);
  window.addEventListener("scroll", changeLinkState, {passive: true});
}
