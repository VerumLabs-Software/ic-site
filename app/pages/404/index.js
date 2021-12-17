import svg4everybody from "svg4everybody";
import objectFitImages from "object-fit-images";
import "../../scripts/globalOptions";

import scrollable from "../../scripts/scrollable";

const {$} = window;

$(() => {
  scrollable();
  svg4everybody();
  objectFitImages();
});
