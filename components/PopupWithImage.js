import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image-src");
    this._title = this._popup.querySelector(".popup__image-title");
  }

  open(link, name) {
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    super.open();
  }
}
