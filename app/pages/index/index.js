import svg4everybody from "svg4everybody";
import objectFitImages from "object-fit-images";
import "../../scripts/globalOptions";

const {$} = window;

$(() => {
  svg4everybody();
  objectFitImages();
});
