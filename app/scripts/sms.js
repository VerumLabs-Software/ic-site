const sms = () => {
  const URL =
    "https://b66exegtsy3i5dpuzjeio4efqa0gdebq.lambda-url.us-east-2.on.aws/";

  const inviteForms = document.querySelectorAll("[data-invite]");

  inviteForms.forEach(form => {
    const submitButton = form.querySelector("[data-submit]");
    const successMessage = form.querySelector('[data-message="success"]');
    const errorMessage = form.querySelector('[data-message="error"]');
    const phoneInput = form.querySelector('[data-mask="tel"]');

    form.addEventListener("submit", e => {
      e.preventDefault();

      const phoneDialCode = phoneInput.dataset.dialCode;
      const formData = new FormData(form);

      let phoneValue = formData.get("phone");
      phoneValue = phoneValue.replace(/[-\s]/g, "");
      phoneValue = `+${phoneDialCode}${phoneValue}`;

      formData.set("phone", phoneValue);

      successMessage?.classList.remove("is-active");
      errorMessage?.classList.remove("is-active");

      if (!phoneValue.includes("_")) {
        submitButton.classList.add("is-loading");

        sendInvite({
          phone_number: phoneValue,
        })
          .then(data => {
            if (successMessage) {
              successMessage.classList.add("is-active");
              successMessage.innerHTML = data.info;
            }
          })
          .catch(error => {
            if (errorMessage) {
              errorMessage.classList.add("is-active");
              errorMessage.innerHTML = error.message;
            }
          })
          .finally(() => {
            submitButton.classList.remove("is-loading");
          });
      } else {
        errorMessage.classList.add("is-active");
        errorMessage.innerHTML = "Phone number is not valid";
      }
    });
  });

  function sendInvite(data) {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json());
  }
};

export default sms;
