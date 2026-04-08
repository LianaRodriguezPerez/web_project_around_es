import { Card } from "./card.js";
import { handleFormSubmit } from "./formValidator.js";
import { initPopus } from "./popup.js";
import { initialCards } from "./utils.js";

initPopus();

const contenedorPhoto = document.querySelector(".photos");

function createInitialCards() {
  initialCards.forEach((item) => {
    const card = new Card(item, "#photos-template");
    const cardElement = card.generateCard();
    contenedorPhoto.prepend(cardElement);
  });
}
createInitialCards();
const formElement = document.querySelector(".popup__add-form");

handleFormSubmit(formElement, (data) => {
  const card = new Card(data, "#photos-template");
  const cardElement = card.generateCard();
  contenedorPhoto.prepend(cardElement);
});
console.log("submit funcionando");

const formProfile = document.querySelector(".popup__container-formulario");
const nameProfile = document.querySelector(".content__profile-name");
const aboutProfile = document.querySelector(".content__profile-parrafo");
const nameInputProfile = document.querySelector(".popup__container-name");
const aboutInputProfile = document.querySelector(".popup__container-about");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInputProfile.value;
  const aboutValue = aboutInputProfile.value;

  nameProfile.textContent = nameValue;
  aboutProfile.textContent = aboutValue;
}
formProfile.addEventListener("submit", handleProfileFormSubmit);

const cardContainer = document.querySelector(".photos");
const ventanaImage = document.querySelector(".popup__image");
const imagenAmpliada = document.querySelector(".popup__image-photo");
const captionAmpliada = document.querySelector(".popup__image-caption");
const cerrarImagen = document.querySelector(".popup__image-close");

// Abrir la ventana emergente al hacer clic en una imagen
cardContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("photos__link")) {
    const imageSrc = target.src;
    const imageAlt = target.alt;

    imagenAmpliada.src = imageSrc;
    imagenAmpliada.alt = imageAlt;
    captionAmpliada.textContent = imageAlt;

    ventanaImage.style.display = "flex";
  }
});

// Cerrar la ventana emergente
cerrarImagen.addEventListener("click", () => {
  ventanaImage.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
ventanaImage.addEventListener("click", (event) => {
  if (event.target === ventanaImage) {
    ventanaImage.style.display = "none";
  }
});
