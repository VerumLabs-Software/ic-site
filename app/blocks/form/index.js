// https://github.com/RobinHerbots/Inputmask
import intlTelInput from "intl-tel-input";
import Inputmask from "inputmask";

// http://parsleyjs.org/doc/index.html
// import "parsleyjs";

export default function form() {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwq7nCRfnNyXkzo3obxg_0me6h1tNDoSQtD0T1l7t02CXxq7EKZTH-8MAsPzDD_Kxq1/exec";
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

    const fetchOptions = {
      method: "POST",
    };

    formData.set("app_type", "ic");
    formData.set("phone_number", `+${phoneDialCode} ${formData.get("phone")}`);
    formData.delete("phone");

    submitButton.classList.add("is-loading");
    successMessage.classList.remove("is-active");
    errorMessage.classList.remove("is-active");

    fetch(URL, {
      body: JSON.stringify(Object.fromEntries(formData)),
      ...fetchOptions,
    })
      .then(data => data.json())
      .then(data => {
        submitButton.classList.remove("is-loading");

        if (typeof data.retry_after === "number") {
          errorMessage.classList.add("is-active");

          let retry_after = data.retry_after;
          let timerId = null;

          const tick = () => {
            errorMessage.innerHTML =
              data.info.replace("`retry_after`", --retry_after) ||
              `Too fast. You may retry after ${--retry_after} seconds.`;

            if (retry_after <= 0) {
              errorMessage.classList.remove("is-active");
              clearInterval(timerId);
            }
          };

          tick();
          timerId = setInterval(tick, 1000);
        } else {
          submitButton.classList.add("is-loading");

          fetch(SCRIPT_URL, {
            body: formData,
            ...fetchOptions,
          })
            .then(() => {
              mainForm.reset();
              successMessage.classList.add("is-active");
              successMessage.innerHTML =
                data.info || "Form submitted successfully!";
            })
            .finally(() => {
              submitButton.classList.remove("is-loading");
            });
        }
      })
      .catch(() => {
        errorMessage.classList.add("is-active");
        errorMessage.innerHTML = "Something went wrong!";
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
