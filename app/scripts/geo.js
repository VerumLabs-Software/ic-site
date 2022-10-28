import {getDPRPostfix, getImageExtension} from "./helpers";

export default function geo() {
  const TOKEN = "07b953baf2128e";
  const headers = {
    "Content-Type": "application/json",
  };

  const section = document.getElementById("about");
  const phone = document.querySelector("#about-phone");
  const postfix = getDPRPostfix();

  const changeImagesByLocation = destination => {
    const imagePath = "assets/images/about";

    section.style.setProperty(
      "background-image",
      `url('${imagePath}/${destination}/bg${postfix}.${getImageExtension(
        "jpg",
      )}')`,
    );

    phone.src = `${imagePath}/${destination}/phone${postfix}.${getImageExtension(
      "png",
    )}`;
  };

  fetch(`https://ipinfo.io/geo?token=${TOKEN}`, {
    headers,
    method: "GET",
  })
    .then(res => res.json())
    .then(({city}) => {
      switch (city) {
        case "Austin":
          changeImagesByLocation("austin");
          break;

        case "Los Angeles":
          changeImagesByLocation("los-angeles");
          break;

        case "New York City":
          changeImagesByLocation("new-york");
          break;

        case "San Francisco":
          changeImagesByLocation("san-francisco");
          break;

        case "Mastic":
        case "Mastic Beach":
        case "Shirley":
        case "Ridge":
        case "Old Saybrook":
        case "Clinton":
        case "Madison":
        case "Guilford":
        case "Coram":
        case "Medford":
        case "East Patchogue":
        case "Farmingville":
        case "Selden":
        case "Patchogue":
        case "Holtsville":
        case "Holbrook":
        case "Terryville":
        case "Sayville":
        case "Centereach":
        case "Waterford":
        case "Groton":
        case "New London":
        case "Stonington":
        case "Westerly":
        case "Norwich":
        case "North Branford":
          changeImagesByLocation("hamptons");
          break;

        default:
          changeImagesByLocation("miami");
          break;
      }
    })
    .catch(() => {
      changeImagesByLocation("miami");
    });
}
