import svg4everybody from "svg4everybody";
import objectFitImages from "object-fit-images";
import "jquery-parallax.js";
import "./globalOptions";

import anchor from "blocks/js-functions/anchor";
import scrollable from "blocks/js-functions/scrollable";
import form from "blocks/form";
import scrollbar from "blocks/scrollbar";
import list from "blocks/list";
import slider from "blocks/slider";
import tabs from "blocks/tabs";
import burger from "blocks/burger";
import menu from "blocks/menu";
import popup from "blocks/popup";

import fixedHeader from "components/fixed-header";
import sectionEmpowering from "components/section-empowering";
import sectionAchivementsPromo from "components/section-achivements-promo";

const {
  $,
  location: {pathname},
} = window;

$(() => {
  if (!pathname.includes("404")) {
    popup();
    svg4everybody();
    objectFitImages();
    anchor();
    form();
    scrollbar();
    fixedHeader();
    burger();
    menu();
  }

  if (
    !pathname.includes("privacy") &&
    !pathname.includes("terms") &&
    !pathname.includes("404")
  ) {
    list();
    slider();
    tabs();
    sectionEmpowering();
    sectionAchivementsPromo();
  }

  if (pathname.includes("404")) {
    scrollable();
  }
});
