import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = document.querySelector('.popup_type_card-delete');
    this._handlerSubmit = null;
  }

  setFormSubmit(handler) {
    this._handlerSubmit = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmit();
    })
  }
}
