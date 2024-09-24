import QRCode from "qrcode";

export default async function generateQR() {
  const allCookies = document.cookie.split("; ");
  const currentQRCodes = document.querySelectorAll(".qr");
  const loaders = document.querySelectorAll(".skeleton-loader");
  const currentQRImagesSources = document.querySelectorAll("source.qr");
  const qrCodeImagesAndSources = [...currentQRCodes, ...currentQRImagesSources];
  const referralCookie = allCookies
    .find(cookie => cookie.startsWith("ref="))
    ?.split("=")[1];

  if (referralCookie) {
    try {
      const qrcode = await QRCode.toDataURL(
        `https://infinitecreator.app.link/?ref=${referralCookie}`,
      );

      qrCodeImagesAndSources.forEach(qrCode => {
        if (qrCode.tagName.toLowerCase() === "img") {
          qrCode.src = qrcode;
          qrCode.srcset = qrcode;
          qrCode.style.borderRadius = "10px";
        } else {
          qrCode.srcset = qrcode;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  loaders.forEach(loader => loader.classList.add("hidden"));
}
