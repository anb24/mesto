import Popup from './Popup.js'

export default class PopupWithForm extends Popup{
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    this._submitBtn = this._popupSelector.querySelector('.popup__save-btn');
  };
  _getInputValues() {
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__text'));
    this._formValues = {};
    this._inputList.forEach((input) => {
      	this._formValues[input.name] = input.value;
      });
    return this._formValues;
  };
  setEventListeners() {
    super.setEventListeners();
		this._popupForm.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._handleFormSubmit(this._getInputValues());
		})
  };
  close() {
    super.close();
		this._popupForm.reset();
  };

  setTextForButton(text) {
    this._submitBtn.textContent = text;
  }
}
