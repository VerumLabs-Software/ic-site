// https://github.com/RobinHerbots/Inputmask
import intlTelInput from "intl-tel-input";
import Inputmask from "inputmask";

// http://parsleyjs.org/doc/index.html
// import "parsleyjs";

export default function form() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwq7nCRfnNyXkzo3obxg_0me6h1tNDoSQtD0T1l7t02CXxq7EKZTH-8MAsPzDD_Kxq1/exec";
  const mainForm = document.getElementById("main-form");
  const submitButton = mainForm.querySelector("#submit-btn");
  const successMessage = mainForm.querySelector('[data-message="success"]');
  const errorMessage = mainForm.querySelector('[data-message="error"]');
  const telInputs = document.querySelectorAll('input[type="tel"]');

  mainForm?.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(mainForm);
    const phoneInput = mainForm.querySelector('[data-mask="tel"]');
    const phoneDialCode = phoneInput.dataset.dialCode;

    formData.set("phone", `+${phoneDialCode} ${formData.get("phone")}`);

    submitButton.classList.add("is-loading");
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
      })
      .finally(() => {
        submitButton.classList.remove("is-loading");
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
