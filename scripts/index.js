import Card from './Card.js'
import { validationConfig, FormValidator } from './FormValidator.js'

const page = document.querySelector('.page');
const btnOpenPopupEdit = page.querySelector('.profile__edit-btn_open');
const btnAddNewCard = page.querySelector('.profile__add-btn');
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_type_edit');
const formElement = profilePopup.querySelector('.popup__form');
const addCardPopup = page.querySelector('.popup_type_card');
const elementCardPhoto = addCardPopup.querySelector('.popup__form');
const imagePopup = page.querySelector('.popup_type_img');
const photoElements = page.querySelector('.elements');
const leadProfileName = document.querySelector('.profile__name');
const leadProfileDescription = document.querySelector('.profile__description');
const namePhotoNewCard = document.getElementById('popupNamePhoto');
const linkPhotoNewCard = document.getElementById('popupLinkPhoto');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_comment');
//массив фотографий мест
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// //запустить валидацию
const validateEdit = new FormValidator(validationConfig, '.popup_type_edit');
const validateCard = new FormValidator(validationConfig, '.popup_type_card');
validateEdit.enableValidation();
validateCard.enableValidation();

//установить по умолчанию фотки из массива
initialCards.forEach((item) => {
  photoElements.append(createCard(item));
});
function createCard(item) {
  const cardElement = new Card(item, '#card-template', handleImageClick).generateCard();
  return cardElement;
}
// открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  page.classList.add('page_no-scroll');
  page.addEventListener('keydown', pushEsc);
}
function handleImageClick(data) {
  imagePopup.querySelector('.popup__title-photo').textContent = data.name;
  imagePopup.querySelector('.popup__card-photo').src = data.link;
  imagePopup.querySelector('.popup__card-photo').alt = data.name;
  openPopup(imagePopup);
}
//кнопка "редактировать"
function openPopupEdit() {
  openPopup(profilePopup);
  setPopupInputValue();
  validateEdit.resetValidation();
}
//кнопка "добавить"
function openPopupAddCards() {
  openPopup(addCardPopup);
  validateCard.resetValidation();
}
//закрыть(активный) попап
function closePopup() {
  const activeModal = page.querySelector('.popup_opened');
  if (activeModal) {
    activeModal.classList.remove('popup_opened')
    page.classList.remove('page_no-scroll');
    page.removeEventListener('keydown', pushEsc);
  }
}
//закрыть(активный) попап по 'Esc'
function pushEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}
//сохранить данные профиля
function formSubmitHandler (evt) {
  evt.preventDefault(); //Эта строчка отменяет стандартную отправку формы.
  setNodeTextValue();
  closePopup();
}
//добавить новую карточку с фото
function createNewCardPhoto(evt) {
  evt.preventDefault(); //Эта строчка отменяет стандартную отправку формы.
  const data = {
    name: namePhotoNewCard.value,
    link: linkPhotoNewCard.value
  }
  const newCardPhoto = createCard(data);
  photoElements.prepend(newCardPhoto);
  evt.currentTarget.reset();
  closePopup();
}
function setPopupInputValue() {
  nameInput.value = leadProfileName.textContent;
  jobInput.value = leadProfileDescription.textContent;
}
function setNodeTextValue() {
  leadProfileName.textContent = nameInput.value;
  leadProfileDescription.textContent = jobInput.value;
}
//закрыть попап (обработчик)
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
  })
})
btnOpenPopupEdit.addEventListener('click', openPopupEdit);
btnAddNewCard.addEventListener('click', openPopupAddCards);
formElement.addEventListener('submit', formSubmitHandler);
elementCardPhoto.addEventListener('submit', createNewCardPhoto);
