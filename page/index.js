import { Card } from "../components/card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { initialCards } from "../components/utils.js";

// 1. Perfil real de tu HTML
const profileName = document.querySelector(".content__profile-name");
const profileJob = document.querySelector(".content__profile-parrafo");

// 2. Popup imagen grande
const popupImage = new PopupWithImage(".popup__image");
popupImage.setEventListeners();

// 3. Lista de tarjetas - TU contenedor es .cards
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template", (link, name) => {
        popupImage.open(link, name);
      });
      cardsList.addItem(card.generateCard());
    },
  },
  ".cards",
);

cardsList.renderItems();

// 4. Popup perfil - ESTE YA TE FUNCIONA
const popupProfile = new PopupWithForm(".popup", (data) => {
  profileName.textContent = data.name;
  profileJob.textContent = data.about;
});
popupProfile.setEventListeners();

document
  .querySelector(".content__profile-button")
  .addEventListener("click", () => {
    const form = document.querySelector(".popup form");
    form.querySelector('[name="name"]').value = profileName.textContent;
    form.querySelector('[name="about"]').value = profileJob.textContent;
    popupProfile.open();
  });

// 5. Popup añadir imagen - ESTE ES EL QUE NO TE GUARDABA
const popupAdd = new PopupWithForm(".popup__add", (data) => {
  console.log("Guardando:", data);

  const newCard = {
    name: data.title__iamgen, // con tu typo exacto
    link: data.link,
  };

  const card = new Card(newCard, "#card-template", (link, name) => {
    popupImage.open(link, name);
  });

  cardsList.addItem(card.generateCard());
});

popupAdd.setEventListeners();

document
  .querySelector(".content__profile-editar")
  .addEventListener("click", () => {
    popupAdd.open();
  });
