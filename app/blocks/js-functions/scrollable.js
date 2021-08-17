const getAbsoluteHeight = elem => {
  const styles = window.getComputedStyle(elem);
  const margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

  return Math.ceil(elem.offsetHeight + margin);
};

const scrollable = () => {
  const checkScrollable = () => {
    const scrollableWrappers = document.querySelectorAll(
      "[data-scrollable-wrapper]",
    );

    if (!scrollableWrappers.length) return;

    scrollableWrappers.forEach(wrapper => {
      const scrollableElement = wrapper.querySelector(
        "[data-scrollable-content]",
      );

      if (!scrollableElement) return;

      const elementHeight = getAbsoluteHeight(scrollableElement);

      if (elementHeight >= window.innerHeight) {
        wrapper.classList.add("is-active");
      } else {
        wrapper.classList.remove("is-active");
      }
    });
  };

  window.addEventListener("load", checkScrollable);
  window.addEventListener("resize", checkScrollable);
};

export default scrollable;
