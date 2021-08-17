const {Typewriter} = window;

export default function sectionAchivementsPromo() {
  const DEFAULT_PAUSE_MS = 2000;
  const typewriterData = [
    {
      icon: "instagram",
      text: "YouTube<br><strong>Over 100 million Impressions</strong>",
    },
    {
      icon: "money",
      text: "Instagram<br><strong>Over 75k loyal followers</strong>",
    },
    {
      icon: "rocket",
      text: "Over 15 billion<br><strong>dollars shot in real estate</strong>",
    },
    {
      icon: "youtube",
      text: "7 Years<br><strong>of Journey</strong>",
    },
  ];

  const container = document.querySelector(".js-typewriter-achivements");

  const changeIconName = iconName => {
    const iconContainer = document.querySelector(".js-icon-achivements use");
    iconContainer.setAttribute(
      "xlink:href",
      `assets/images/icon.svg#icon_${iconName}`,
    );
  };

  const typewriter = new Typewriter(container, {
    loop: true,
    delay: 50,
  });

  typewriterData.forEach(elem => {
    typewriter
      .typeString(elem.text)
      .pauseFor(DEFAULT_PAUSE_MS)
      .start()
      .deleteAll()
      .callFunction(() => changeIconName(elem.icon));
  });
}
