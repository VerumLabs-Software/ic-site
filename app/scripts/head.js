import intercom from "./intercom";
import sslRedirect from "./ssl-redirect";
import setReferralCode from "./setReferalCode";
import generateQR from "./generateQR";

window.addEventListener("load", () => {
  sslRedirect();
  intercom();
  setReferralCode();
  generateQR();
});
