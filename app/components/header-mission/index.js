import {getDPRPostfix, getImageExtension} from "../../scripts/helpers";

export default function headerMission() {
  const header = document.getElementById("mission");
  const imagePath = "assets/images/mission";
  const postfix = getDPRPostfix();

  header.style.setProperty(
    "background-image",
    `url('${imagePath}/bg${postfix}.${getImageExtension("jpg")}')`,
  );
}
