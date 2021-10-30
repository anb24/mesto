const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_invalid',
  inputErrorClass: 'popup__text_state_invalid',
}

class FormValidator {
  constructor(config, formElementSelector) {
    this._config = config;
    this._formElement = document.querySelector(formElementSelector);
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
  }
//показать ошибку
  _showError = (errorElement, inputElement) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }
//скрыть ошибку
  _hideError = (errorElement, inputElement) => {
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }
//проверить корректность ввода данных
  _checkInputValidity = (inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if(isInputNotValid) {
      this._showError(errorElement, inputElement);
    } else {
      this._hideError(errorElement, inputElement);
    }
  }
//блокировать кнопку
  _toggleButtonState = () => {
    const isInputNotValid = this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
    if (isInputNotValid) {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = 'disabled';
    } else {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
//установить обработчики
  _setEventListers = () => {
    const inputsList = this._formElement.querySelectorAll(this._config.inputSelector);
    const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState(submitButton);
    inputsList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(submitButton);
      })
    })
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  }
//запусить проверку
  enableValidation = () => {
    this._setEventListers();
  }
}

export { validationConfig, FormValidator}
