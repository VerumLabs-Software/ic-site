export default function list() {
  const nav = document.querySelectorAll(".js-nav");
  const fixedHeader = document.querySelector(".js-fixed-header");
  const sections = [...document.querySelectorAll("[data-section]")].filter(
    section => section.id,
  );

  let navLinks;
  let fixedHeaderOffsetTop = 0;

  if (fixedHeader) {
    fixedHeaderOffsetTop = fixedHeader.getBoundingClientRect().top;
  }

  const changeLinkState = () => {
    let index = sections.length;

    // eslint-disable-next-line no-empty
    while (
      --index &&
      window.scrollY + 1 - fixedHeaderOffsetTop < sections[index].offsetTop
      // eslint-disable-next-line no-empty
    ) {}

    nav.forEach(list => {
      navLinks = list.querySelectorAll(".js-anchor");
      navLinks.forEach(link => link.classList.remove("is-active"));
      navLinks[index]?.classList.add("is-active");
    });
  };

  changeLinkState();
  window.addEventListener("scroll", changeLinkState, {passive: true});
}
