export default function popup() {
  const popupTriggers = document.querySelectorAll("[data-popup-trigger]");
  const popupCloseButtons = document.querySelectorAll("[data-popup-close]");

  if (!popupTriggers.length || !popupCloseButtons.length) return;

  const triggerPopup = e => {
    const target = e.currentTarget;
    const popupWrapper = document.querySelector(
      `[data-popup-wrapper="${target.dataset.popupTrigger}"]`,
    );

    if (!popupWrapper) return;

    popupWrapper.classList.add("is-active");
  };

  const closePopup = e => {
    const target = e.currentTarget;
    const popupWrapper = document.querySelector(
      `[data-popup-wrapper="${target.dataset.popupClose}"]`,
    );

    if (!popupWrapper) return;

    popupWrapper.classList.remove("is-active");
  };

  popupTriggers.forEach(trigger =>
    trigger.addEventListener("click", triggerPopup),
  );

  popupCloseButtons.forEach(button =>
    button.addEventListener("click", closePopup),
  );
}
