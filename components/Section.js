export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

  // Para el renderer de arriba
  _renderer(item) {
    // esta función se sobrescribe desde index.js
  }

  // Truco: el renderer de index.js ya hace addItem, así que lo corregimos
  // Esta versión alternativa que usan muchos:
  renderItems() {
    this._items.forEach((item) => {
      const cardElement = this._renderer(item);
      // si el renderer ya retorna el elemento, lo agregamos
      if (cardElement) {
        this._container.append(cardElement);
      }
    });
  }
}
