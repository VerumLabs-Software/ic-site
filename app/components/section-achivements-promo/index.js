const {Typewriter} = window;

export default function sectionAchivementsPromo() {
  const DEFAULT_PAUSE_MS = 2000;
  const typewriterData = [
    {
      icon: "instagram",
      text: "YouTube<br><strong>Over $100 Billion in Real Estate Filmed!</strong>",
    },
    {
      icon: "money",
      text: "Instagram<br><strong>Over 100k loyal followers</strong>",
    },
    {
      icon: "rocket",
      text: "Featured<br><strong>by the likes Forbes, Bloomberg & CNBC</strong>",
    },
    {
      icon: "youtube",
      text: "8 Year<br><strong>Journey</strong>",
    },
  ];

  const container = document.querySelector(".js-typewriter-achivements");

  const stringSplitter = str => {
    const splitter = str.replace("&amp;", "&");
    return splitter.split("");
  };

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
    stringSplitter,
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
