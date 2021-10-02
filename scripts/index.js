const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-btn_open');
const popupCloseBtn = popup.querySelector('.popup__close');
const page = document.querySelector('.page');
const leadProfileName = document.querySelector('.profile__name');
const leadProfileDescription = document.querySelector('.profile__description');
const popupNewCard = document.querySelector('#card-template').content; //PR5 card
const popupNewCardContent = popupNewCard.querySelector('.popup').cloneNode(true); //PR5 card
const btnOpenNewCard = document.querySelector('.profile__add-btn'); //PR5 card
const popupCardCloseBtn = popupNewCardContent.querySelector('.popup__close'); //PR5 card
const photoElements = page.querySelector('.elements'); //PR5 img все карточки с фото
const popupImageContent = page.querySelector('.popup_type_image'); //PR5 img
const popupImage = page.querySelector('.popup_type_image'); //PR5 img
const closeImage = popupImage.querySelector('.popup__close'); //PR5 img
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_comment');
let elementCardPhoto = popupNewCardContent.querySelector('.popup__form'); //PR5 card
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
//поставить/убрать лайк
const like = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  if (target.classList.contains('element__like')) {
      target.classList.toggle('element__like_active');
  }
}
//удаление карточки с фото
const deleteCardPhoto = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  const selectedCard = evt.currentTarget.closest('.element');
  if (target.classList.contains('element__delete')) {
    selectedCard.remove();
  }
}
//перезапись карточек (замена свёрстаных на массив) + слушатели
function cardPhoto(data) {
  const photoCard = photoElements.querySelector('.element');
  photoCard.querySelector('.element__image').src = data.link;
  photoCard.querySelector('.element__image').alt = data.name;
  photoCard.querySelector('.element__title').textContent = data.name;
  photoCard.querySelector('.element__like').addEventListener('click', like); //PR5  img ЛАЙК
  photoCard.querySelector('.element__delete').addEventListener('click', deleteCardPhoto); //PR5  img УДАЛЕНИЕ КАРТОЧКИ С ФОТО
  photoCard.querySelector('.element__image').addEventListener('click', function() {
    openPopupImage(data);
  });  //PR5   img ПРОСТМОТР КАРТИНКИ
  return photoCard;
}
//установка по умолчанию фоток из массива
function defaultPhoto() {
  initialCards.forEach((item) => {
    photoElements.append(cardPhoto(item));
  });
}
//добавление новой карточки с фото
function createNewCardPhoto(evt) {
  evt.preventDefault();   // Эта строчка отменяет стандартную отправку формы.
  const data = {
    name: document.getElementById('popupNamePhoto').value,
    link: document.getElementById('popupLinkPhoto').value
  }
  const NewCardPhoto = cardPhoto(data);
  photoElements.prepend(NewCardPhoto);
  evt.currentTarget.reset();
  closePopup();
}
//кнопка "редактировать"
function openPopupEdit() {
  popup.classList.add('popup_opened');
  page.classList.add('page_no-scroll');
  setPopupInputValue();
}
//кнопка "добавить"
function openPopupAddCards() { //PR5 card
  popup.classList.add('popup_opened'); //PR5 card
  page.classList.add('page_no-scroll'); //PR5 card
  setPopupInputValue(); //PR5 card
  popupNewCardContent.classList.add('popup_opened'); //PR5 card
  popup.append(popupNewCardContent); //PR5 card
}
function closePopup() {
  popup.classList.remove('popup_opened');
  page.classList.remove('page_no-scroll');
  popupNewCardContent.classList.remove('popup_opened'); //PR5 card
  popupImageContent.classList.remove('popup_opened'); //PR5 img
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
// увеличение картинки
function openPopupImage(element) {
  page.classList.add('page_no-scroll');
  const photoCard = document.querySelector('.popup__card-photo');
  popupImageContent.querySelector('.popup__title-photo').textContent = element.name;
  photoCard.setAttribute('src', element.link);
  popupImageContent.classList.add('popup_opened');
}
popup.addEventListener('click', clickOverlay);
popupOpenBtn.addEventListener('click', openPopupEdit); //редактировать
popupCloseBtn.addEventListener('click', closePopup); //закрытие попапов
popupNewCardContent.addEventListener('click', clickOverlay); //PR5 card
btnOpenNewCard.addEventListener('click', openPopupAddCards); //PR5 card
popupCardCloseBtn.addEventListener('click', closePopup); //PR5 card
popupImageContent.addEventListener('click', clickOverlay); //PR5  img
closeImage.addEventListener('click', closePopup); //PR5  img
formElement.addEventListener('submit', formSubmitHandler);
elementCardPhoto.addEventListener('submit', createNewCardPhoto); //PR5  img

defaultPhoto()
