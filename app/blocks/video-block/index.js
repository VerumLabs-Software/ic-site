import {createImage} from "../image";
import {createIcon} from "../icon";

const blockClass = "video-block";

export const createVideoBlock = ({image, time, link, title, subtitle}) => {
  const _link = document.createElement("a");
  const icon = createIcon("play-circle");
  const _time = document.createElement("span");
  const _image = createImage(image);

  _time.classList.add("time");
  _time.innerHTML = time;

  _image.classList.add(`${blockClass}__image`);
  _image.appendChild(icon);
  _image.appendChild(_time);

  _link.href = link;
  _link.target = "_blank";
  _link.classList.add(blockClass);

  _link.appendChild(_image);

  const info = document.createElement("div");
  const _title = document.createElement("div");
  const _subtitle = document.createElement("div");

  info.classList.add(`${blockClass}__info`);
  _title.classList.add(`${blockClass}__title`);
  _subtitle.classList.add(`${blockClass}__subtitle`);

  _title.innerHTML = title;
  _subtitle.innerHTML = subtitle;

  info.appendChild(_title);
  info.appendChild(_subtitle);

  _link.appendChild(info);

  return _link;
};
