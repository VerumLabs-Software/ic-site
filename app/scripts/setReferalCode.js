export default function setReferralCode() {
  const allCookies = document.cookie.split("; ");
  const appStoreButtons = document.querySelectorAll(".referral-app-store");
  const googlePlayButtons = document.querySelectorAll(".referral-play-market");
  const refQueryFromUrl = new URLSearchParams(window.location.search).get(
    "ref",
  );
  const referralCookie = allCookies.find(cookie => cookie.startsWith("ref="));
  const appStoreGooglePlayButtons = [...appStoreButtons, ...googlePlayButtons];

  if (!referralCookie && !refQueryFromUrl) {
    return;
  } else if (referralCookie) {
    appStoreGooglePlayButtons.forEach(link => {
      link.href = `https://infinitecreator.app.link/?ref=${
        referralCookie.split("=")[1]
      }`;
    });
  } else if (refQueryFromUrl) {
    document.cookie = `ref=${refQueryFromUrl}; max-age=${
      60 * 24 * 60 * 60
    }; path=/`;
    appStoreGooglePlayButtons.forEach(link => {
      link.href = `https://infinitecreator.app.link/?ref=${refQueryFromUrl}`;
    });
  }
}
