import svg4everybody from "svg4everybody";
import objectFitImages from "object-fit-images";
import "../../scripts/globalOptions";

import sms from "../../scripts/sms";
import menu from "../../blocks/menu";
import form from "../../blocks/form";
import popup from "../../blocks/popup";
import burger from "../../blocks/burger";
import anchor from "../../scripts/anchor";
import analytics from "../../scripts/analytics";

import footer from "../../components/footer";
import fixedHeader from "../../components/fixed-header";

window.addEventListener("load", () => {
  analytics();
  sms();
  form();
  menu();
  popup();
  burger();
  anchor();
  footer();
  fixedHeader();
  svg4everybody();
  objectFitImages();
});
