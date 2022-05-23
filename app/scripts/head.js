import intercom from "./intercom";
import sslRedirect from "./ssl-redirect";

window.addEventListener("load", () => {
  sslRedirect();
  intercom();
});
