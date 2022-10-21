import svg4everybody from "svg4everybody";
import objectFitImages from "object-fit-images";
import "../../scripts/globalOptions";

import scrollable from "../../scripts/scrollable";

window.addEventListener("load", () => {
  scrollable();
  svg4everybody();
  objectFitImages();
});
