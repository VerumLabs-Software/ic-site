// https://github.com/RobinHerbots/Inputmask
import intlTelInput from "intl-tel-input";
import Inputmask from "inputmask";

// http://parsleyjs.org/doc/index.html
// import "parsleyjs";

export default function form() {
  const URL =
    "https://ocdvb7oh5qebvwcw3tjn4hfwda0esyws.lambda-url.us-east-2.on.aws";
  const mainForm = document.getElementById("main-form");
  const submitButton = mainForm.querySelector("[data-submit]");
  const successMessage = mainForm.querySelector('[data-message="success"]');
  const errorMessage = mainForm.querySelector('[data-message="error"]');
  const telInputs = document.querySelectorAll('input[type="tel"]');

  mainForm?.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(mainForm);
    const phoneInput = mainForm.querySelector('[data-mask="tel"]');
    const phoneDialCode = phoneInput.dataset.dialCode;

    formData.set("app_type", "ic");
    formData.set("phone_number", `+${phoneDialCode}${formData.get("phone")}`);
    formData.delete("phone");

    submitButton.classList.add("is-loading");
    successMessage.classList.remove("is-active");
    errorMessage.classList.remove("is-active");

    fetch(URL, {method: "POST", body: formData})
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
