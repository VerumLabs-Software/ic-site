const {Typewriter} = window;

export default function sectionEmpowering() {
  const DEFAULT_PAUSE_MS = 2000;
  const typewriterData = [
    {
      icon: "size",
      text: "easy",
    },
    {
      icon: "pointer",
      text: "fast",
    },
    {
      icon: "thumb",
      text: "affordable",
    },
    {
      icon: "flick",
      text: "professional",
    },
  ];

  const textContainers = document.querySelectorAll(".js-typewriter-empowering");

  const changeIconName = iconName => {
    const iconContainers = document.querySelectorAll(".js-icon-empowering use");
    iconContainers.forEach(iconContainer => {
      iconContainer.setAttribute(
        "xlink:href",
        `assets/images/icon.svg#icon_${iconName}`,
      );
    });
  };

  textContainers.forEach(textContainer => {
    const typewriter = new Typewriter(textContainer, {
      loop: true,
    });

    typewriterData.forEach(elem => {
      typewriter
        .typeString(elem.text)
        .pauseFor(DEFAULT_PAUSE_MS)
        .start()
        .deleteAll()
        .callFunction(() => changeIconName(elem.icon));
    });
  });
}
