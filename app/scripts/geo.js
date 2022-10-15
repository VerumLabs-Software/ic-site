const {$, Modernizr, devicePixelRatio} = window;
const TOKEN = "07b953baf2128e";

export default function geo() {
  const section = document.getElementById("about");
  const phone = document.querySelector("#about-phone");
  const dpr = Math.min(Math.max(devicePixelRatio, 1), 3);
  const postfix = dpr > 1 ? `@${dpr}x` : "";

  const changeImagesByLocation = destination => {
    section.style.setProperty(
      "background-image",
      `url('assets/images/about/${destination}/bg${postfix}.${
        Modernizr.webp ? "webp" : "jpg"
      }')`,
    );

    phone.src = `assets/images/about/${destination}/phone${postfix}.${
      Modernizr.webp ? "webp" : "png"
    }`;
  };

  $.getJSON(`https://ipinfo.io/geo?token=${TOKEN}`, ({city}) => {
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
  }).fail(() => {
    changeImagesByLocation("miami");
  });
}
