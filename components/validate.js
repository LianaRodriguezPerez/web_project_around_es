console.log("archivo vinculado");

const forms = document.querySelectorAll(".popup__form");

forms.forEach((form) => {
  const inputs = form.querySelectorAll(".popup__input");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault(); // Evita el reinicio de la página
    console.log("Formulario enviado sin recargar la página");
    // form.submit();
    console.log("envio de formularios");
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const errorSpan = document.querySelector(`.${input.id}-error`);

      input.setCustomValidity(""); // Limpiar mensaje anterior
      if (!input.validity.valid) {
        if (input.validity.valueMissing) {
          input.setCustomValidity("Este campo es obligatorio.");
        } else if (input.validity.tooShort) {
          input.setCustomValidity(
            `Debe tener al menos ${input.minLength} caracteres.`,
          );
        } else if (input.validity.tooLong) {
          input.setCustomValidity(
            `Debe tener como máximo ${input.maxLength} caracteres.`,
          );
        } else if (input.validity.typeMismatch && input.type === "email") {
          input.setCustomValidity("Introduce un correo electrónico válido.");
        }
        errorSpan.textContent = input.validationMessage;
      } else {
        errorSpan.textContent = "";
      }
    });
  });
});
export const aboutProfile = document.querySelector(".content__profile-parrafo");
