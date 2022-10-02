// https://github.com/RobinHerbots/Inputmask
import intlTelInput from "intl-tel-input";
import Inputmask from "inputmask";

// http://parsleyjs.org/doc/index.html
// import "parsleyjs";

export default function form() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw_I0dErITL5lx5S4BFhJuBvk_Dv_auKe2m5IUmTaJyWAFTSEa5eAZyZ-aqE6WLCp47/exec";
  const mainForm = document.getElementById("main-form");
  const successMessage = mainForm.querySelector('[data-message="success"]');
  const errorMessage = mainForm.querySelector('[data-message="error"]');
  const telInputs = document.querySelectorAll('input[type="tel"]');

  mainForm?.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(mainForm);
    const phoneInput = mainForm.querySelector('[data-mask="tel"]');
    const phoneDialCode = phoneInput.dataset.dialCode;

    formData.set("phone", `+${phoneDialCode} ${formData.get("phone")}`);

    successMessage.classList.remove("is-active");
    errorMessage.classList.remove("is-active");

    fetch(scriptURL, {method: "POST", body: formData})
      .then(() => {
        mainForm.reset();
        successMessage.classList.add("is-active");
        successMessage.innerHTML = "Form submitted successfully!";
      })
      .catch(error => {
        errorMessage.classList.add("is-active");
        errorMessage.innerHTML = error.message;
      });
  });

  telInputs.forEach(input => {
    intlTelInput(input, {
      autoPlaceholder: "aggressive",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.min.js",
      separateDialCode: true,
      preferredCountries: ["us", "mx", "gb"],
      customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
        if (input.getAttribute("placeholder") === selectedCountryPlaceholder) {
          return;
        }

        input.dataset.dialCode = selectedCountryData.dialCode;
        input.setAttribute("placeholder", selectedCountryPlaceholder);

        const updatedCountryPlaceholder = selectedCountryPlaceholder.replace(
          /\d/g,
          9,
        );

        Inputmask({
          mask: updatedCountryPlaceholder,
        }).mask(input);

        return selectedCountryPlaceholder;
      },
    });
  });
}
