import './index.css';
import Card from '../components/Card.js'
import { validationConfig, FormValidator } from '../components/FormValidator.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

const page = document.querySelector('.page');
const btnOpenPopupEdit = page.querySelector('.profile__edit-btn_open');
const btnAddNewCard = page.querySelector('.profile__add-btn');
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_type_edit');
const saveEdit = document.querySelector('.popup__save-btn');
const formElement = profilePopup.querySelector('.popup__form');
const addCardPopup = page.querySelector('.popup_type_card');
const elementCardPhoto = addCardPopup.querySelector('.popup__form');
const imagePopup = page.querySelector('.popup_type_img');
const imagePopupPhoto = page.querySelector('.popup__card-photo');
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

function createCard(item) {
  const cardElement = new Card(item, '#card-template', handleCardClick).generateCard();
  return cardElement;
}

//отрисовать карточки(из массива):
const photoAlbum = new Section({
  items: initialCards,
  renderer: (item) => {
      const cardPhoto = createCard(item);
      photoAlbum.addItem(cardPhoto);
    }
  },
  photoElements
);
photoAlbum.renderElements();
//добавить карточку:
const newCardPopup = new PopupWithForm(addCardPopup, (data) => {
  const newCards = createCard(data);
  photoAlbum.addItem(newCards);
  newCardPopup.close();
});
newCardPopup.setEventListeners();
//кнопка "добавить"
function openPopupAddCards() {
  newCardPopup.open();
  validateCard.resetValidation();
};

//увеличить фото:
const openPhoto = new PopupWithImage(imagePopup);
openPhoto.setEventListeners();

function handleCardClick(link, name) {
  openPhoto.open(link, name);
}

//редактировать профиль:
const profileInfo = new UserInfo({
  name: leadProfileName,
  about: leadProfileDescription
});
//данные пользователя (по умолчанию):
profileInfo.setUserInfo({
  name: 'Жак-Ив Кусто',
  about: 'Исследователь океана'
})
profileInfo.updateUserInfo();
//запись данных:
const popupEdit = new PopupWithForm(profilePopup, (data) => {
    profileInfo.setUserInfo(data);
    profileInfo.updateUserInfo();
    popupEdit.close();
  }
);
popupEdit.setEventListeners();
//кнопка "редактировать"
function openPopupEdit() {
  setPopupInputValue();
  validateEdit.resetValidation();
  popupEdit.open();
}
function setPopupInputValue() {
  const userInfoData = profileInfo.getUserInfo();
  nameInput.value = userInfoData.name;
  jobInput.value = userInfoData.about;
}

btnOpenPopupEdit.addEventListener('click', openPopupEdit);
btnAddNewCard.addEventListener('click', openPopupAddCards);
