import { Card } from "../components/card.js";
import { FormValidator } from "../components/formValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../components/utils.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: "button[type='submit'], .popup__container-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

// Tus clases REALES del HTML
const profileEditButton = document.querySelector(".content__profile-button");
const profileAddButton = document.querySelector(".content__profile-editar");

const userInfo = new UserInfo({
  nameSelector: ".content__profile-name",
  jobSelector: ".content__profile-parrafo",
});

const imagePopup = new PopupWithImage(".popup__image");
imagePopup.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template", (name, link) => {
        imagePopup.open({ name, link });
      });
      return card.generateCard();
    },
  },
  ".cards",
);

cardList.renderItems();

const profilePopup = new PopupWithForm(".popup_type_edit", (data) => {
  // tu input se llama "about" no "job"
  userInfo.setUserInfo({ name: data.name, job: data.about });
  profilePopup.close();
});
profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popup_type_add", (data) => {
  // ahora data.name viene del input que corregiste
  const newCardData = { name: data.name, link: data.link };
  const newCard = new Card(newCardData, "#card-template", (name, link) => {
    imagePopup.open({ name, link });
  });
  cardList.addItem(newCard.generateCard());
  addCardPopup.close();
});
addCardPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const current = userInfo.getUserInfo();
  document.querySelector("#name-input").value = current.name;
  document.querySelector("#about-input").value = current.job;
  profilePopup.open();
});

profileAddButton.addEventListener("click", () => {
  addCardPopup.open();
});

// Validación
const forms = document.querySelectorAll(validationConfig.formSelector);
forms.forEach((form) => {
  const validator = new FormValidator(validationConfig, form);
  validator.enableValidation();
});
