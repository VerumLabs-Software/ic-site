export const createIcon = iconName => {
  const svgns = "http://www.w3.org/2000/svg";
  const xlinkns = "http://www.w3.org/1999/xlink";

  const svg = document.createElementNS(svgns, "svg");
  const use = document.createElementNS(svgns, "use");

  svg.classList.add("icon");

  use.setAttributeNS(
    xlinkns,
    "xlink:href",
    `assets/images/icon.svg#icon_${iconName}`,
  );

  svg.appendChild(use);

  return svg;
};
