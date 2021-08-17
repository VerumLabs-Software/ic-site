// https://github.com/RobinHerbots/Inputmask
import intlTelInput from "intl-tel-input";
import Inputmask from "inputmask";

// http://parsleyjs.org/doc/index.html
// import "parsleyjs";

export default function form() {
  const telInputs = document.querySelectorAll('input[type="tel"]');

  telInputs.forEach(input => {
    intlTelInput(input, {
      autoPlaceholder: "aggressive",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.min.js",
      separateDialCode: true,
      preferredCountries: ["us", "mx", "gb"],
      customPlaceholder: selectedCountryPlaceholder => {
        if (input.getAttribute("placeholder") === selectedCountryPlaceholder) {
          return;
        }

        input.setAttribute("placeholder", selectedCountryPlaceholder);

        const updatedCountryPlaceholder = selectedCountryPlaceholder.replace(
          /[0-9]/g,
          9,
        );

        Inputmask({
          mask: updatedCountryPlaceholder,
        }).mask(input);

        return selectedCountryPlaceholder;
      },
    });
  });

  // Inputmask({
  //   alias: "email",
  // }).mask('input[data-mask="email"]');

  // Inputmask({
  //   mask: "1.2.y",
  //   placeholder: "__.__.____",
  //   leapday: "29.02.",
  //   separator: ".",
  //   alias: "dd/mm/yyyy",
  // }).mask('input[data-mask="date"]');

  // Parsley.addMessages("ru", {
  //   defaultMessage: "Некорректное значение.",
  //   type: {
  //     email: "Введите адрес электронной почты.",
  //     url: "Введите URL адрес.",
  //     number: "Введите число.",
  //     integer: "Введите целое число.",
  //     digits: "Введите только цифры.",
  //     alphanum: "Введите буквенно-цифровое значение.",
  //   },
  //   notblank: "Это поле должно быть заполнено.",
  //   required: "Обязательное поле.",
  //   pattern: "Это значение некорректно.",
  //   min: "Это значение должно быть не менее чем %s.",
  //   max: "Это значение должно быть не более чем %s.",
  //   range: "Это значение должно быть от %s до %s.",
  //   minlength: "Это значение должно содержать не менее %s символов.",
  //   maxlength: "Это значение должно содержать не более %s символов.",
  //   length: "Это значение должно содержать от %s до %s символов.",
  //   mincheck: "Выберите не менее %s значений.",
  //   maxcheck: "Выберите не более %s значений.",
  //   check: "Выберите от %s до %s значений.",
  //   equalto: "Это значение должно совпадать.",
  // });

  // Parsley.setLocale("ru");
}
