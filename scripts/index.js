const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-btn_open');
const popupCloseBtn = popup.querySelector('.popup__close');
const page = document.querySelector('.page');
const leadProfileName = document.querySelector('.profile__name');
const leadProfileDescription = document.querySelector('.profile__description');

let formElement = popup.querySelector('.popup__form-subscribe');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_comment');

function openPopup() {
  popup.classList.add('popup_opened');
  page.classList.add('page_no-scroll');
  setPopupInputValue();
}

function closePopup() {
  if (popupCloseBtn.classList.contains('popup__close')) {
    popupCloseBtn.closest('.popup').classList.remove('popup_opened');
  }
  page.classList.remove('page_no-scroll');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  setNodeTextValue();
  closePopup(); // После сохранения, закрывает popup.
}

function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

function setPopupInputValue() {
  nameInput.value = leadProfileName.textContent;
  jobInput.value = leadProfileDescription.textContent;
}

function setNodeTextValue() {
  leadProfileName.textContent = nameInput.value;
  leadProfileDescription.textContent = jobInput.value;
}

popup.addEventListener('click', clickOverlay);
popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);



// Тут фрагменты старого кода:

// function popupToggle() {
//   popup.classList.toggle('popup_opened');
//   page.classList.toggle('page_no-scroll');
//   setPopupInputValue();
// }

// function clickOverlay(event) {
//   if (event.target === event.currentTarget) {
//     popupToggle();
//   }
// }

// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//     setNodeTextValue();
//     popupToggle(); // После сохранения, закрывает popup.
// }

// popupOpenBtn.addEventListener('click', popupToggle);
// popupCloseBtn.addEventListener('click', popupToggle);
