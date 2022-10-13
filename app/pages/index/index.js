import svg4everybody from "svg4everybody";
import objectFitImages from "object-fit-images";
import "jquery-parallax.js";
import "../../scripts/globalOptions";

import sms from "../../scripts/sms";
import geo from "../../scripts/geo";
import menu from "../../blocks/menu";
import tabs from "../../blocks/tabs";
import form from "../../blocks/form";
import list from "../../blocks/list";
import popup from "../../blocks/popup";
import slider from "../../blocks/slider";
import burger from "../../blocks/burger";
import anchor from "../../scripts/anchor";

import fixedHeader from "../../components/fixed-header";
import sectionEmpowering from "../../components/section-empowering";
import sectionAchivementsPromo from "../../components/section-achivements-promo";

const {$} = window;

$(() => {
  sms();
  geo();
  menu();
  form();
  list();
  tabs();
  popup();
  slider();
  burger();
  anchor();
  fixedHeader();
  svg4everybody();
  objectFitImages();
  sectionEmpowering();
  sectionAchivementsPromo();
});
