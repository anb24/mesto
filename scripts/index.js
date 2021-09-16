const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-btn_open');
const popupCloseBtn = popup.querySelector('.popup__close');
const page = document.querySelector('.page');
const leadProfileName = document.querySelector('.profile__name');
const leadProfileDescription = document.querySelector('.profile__description');

let formElement = popup.querySelector('.popup__content');
let nameInput = formElement.querySelector('.popup__text_user-name');
let jobInput = formElement.querySelector('.popup__text_comment');

function popupToggle() {
  popup.classList.toggle('popup_opened');
  page.classList.toggle('page_no-scroll');
  setPopupInputValue();
}

function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    popupToggle();
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

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    setNodeTextValue();
    popupToggle(); // После сохранения, закрывает popup.
}

popup.addEventListener('click', clickOverlay);
popupOpenBtn.addEventListener('click', popupToggle);
popupCloseBtn.addEventListener('click', popupToggle);

formElement.addEventListener('submit', formSubmitHandler);



// Тут делал ЛАЙК, но он чёт только на первую кнопку (наверное не .querySelector):

// let like = document.querySelector('.element__like');

// function likeToggle() {
//   like.classList.toggle('element__like_active');
// }

// like.addEventListener('click', likeToggle);
