//показать ошибку
const showError = (errorElement, inputElement, config) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}
//скрыть ошибку
const hideError = (errorElement, inputElement, config) => {
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}
//проверить корректность ввода данных
const checkInputValidity = (formElement, inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if(isInputNotValid) {
    showError(errorElement, inputElement, config);
  } else {
    hideError(errorElement, inputElement, config);
  }
}
//блокировать кнопку
const toggleButtonState = (button, isActive, config) => {
  if (isActive) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
  }
}
//установить обработчики
const setEventListers = (formElement, config) => {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  Array.from(inputsList).forEach(inputElement => {
    inputElement.addEventListener('input', (evt) => {
      const isFormValid = formElement.checkValidity();
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(submitButton, isFormValid, config);
    })
  })
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  })
}
//запусить проверку
const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach(formElement => {
    setEventListers(formElement, config);
  })
}
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_invalid',
  inputErrorClass: 'popup__text_state_invalid',
}
enableValidation(validationConfig);
