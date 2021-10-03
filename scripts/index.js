const page = document.querySelector('.page');
const btnOpenPopupEdit = page.querySelector('.profile__edit-btn_open');
const btnAddNewCard = page.querySelector('.profile__add-btn');
const profilePopup = document.querySelector('.profile_popup');
const popupCloseBtn = profilePopup.querySelector('.popup__close');
const formElement = profilePopup.querySelector('.popup__form');
const addCardPopup = page.querySelector('.popup_type_card');
const popupCardCloseBtn = addCardPopup.querySelector('.popup__close');
const elementCardPhoto = addCardPopup.querySelector('.popup__form');
const photoElements = page.querySelector('.elements');
const elementPopup = page.querySelector('.element_popup');
const popupImage = page.querySelector('.element_popup');
const closeImage = popupImage.querySelector('.popup__close');
const leadProfileName = document.querySelector('.profile__name');
const leadProfileDescription = document.querySelector('.profile__description');
const namePhotoNewCard = document.getElementById('popupNamePhoto');
const linkPhotoNewCard = document.getElementById('popupLinkPhoto');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_comment');
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
//перезаписать карточки (замена свёрстаных на массив) + слушатели
function createCard(data) {
  const cardTemplate = page.querySelector('#card-template').content;
  const photoCard = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = photoCard.querySelector('.element__image')
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardImage.addEventListener('click', function() {
    openPopupImage(data);
  });
  photoCard.querySelector('.element__like').addEventListener('click', like);
  photoCard.querySelector('.element__delete').addEventListener('click', deleteCardPhoto);
  photoCard.querySelector('.element__title').textContent = data.name;
  return photoCard;
}
//установить по умолчанию фотки из массива
function defaultPhoto() {
  initialCards.forEach((item) => {
    photoElements.append(createCard(item));
  });
}
// открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  page.classList.add('page_no-scroll');
}
//кнопка "редактировать"
function openPopupEdit() {
  openPopup(profilePopup);
  setPopupInputValue();
}
//кнопка "добавить"
function openPopupAddCards() {
  openPopup(addCardPopup);
  setPopupInputValue();
}
//открыть(увеличить) картинку
function openPopupImage(element) {
  const photoCard = document.querySelector('.popup__card-photo');
  elementPopup.querySelector('.popup__title-photo').textContent = element.name;
  photoCard.setAttribute('src', element.link);
  openPopup(elementPopup);
}
//закрыть попап
function closePopup() {
  const activeModal = page.querySelector('.popup_opened');
  if (activeModal) {
    activeModal.classList.remove('popup_opened')
  }
  page.classList.remove('page_no-scroll');
}
function clickOverlay(event) {
  if (event.target === event.currentTarget) {
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
//удалить карточку с фото
const deleteCardPhoto = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  const selectedCard = evt.currentTarget.closest('.element');
  if (target.classList.contains('element__delete')) {
    selectedCard.remove();
  }
}
//поставить/убрать лайк
const like = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  target.classList.toggle('element__like_active');
}
function setPopupInputValue() {
  nameInput.value = leadProfileName.textContent;
  jobInput.value = leadProfileDescription.textContent;
}
function setNodeTextValue() {
  leadProfileName.textContent = nameInput.value;
  leadProfileDescription.textContent = jobInput.value;
}
profilePopup.addEventListener('click', clickOverlay);
btnOpenPopupEdit.addEventListener('click', openPopupEdit);
popupCloseBtn.addEventListener('click', closePopup);
addCardPopup.addEventListener('click', clickOverlay);
btnAddNewCard.addEventListener('click', openPopupAddCards);
popupCardCloseBtn.addEventListener('click', closePopup);
elementPopup.addEventListener('click', clickOverlay);
closeImage.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
elementCardPhoto.addEventListener('submit', createNewCardPhoto);
defaultPhoto()
