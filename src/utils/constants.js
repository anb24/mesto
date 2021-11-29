const page = document.querySelector('.page');
const btnOpenPopupEdit = page.querySelector('.profile__edit-btn_open');
const btnAddNewCard = page.querySelector('.profile__add-btn');
const avatarPopup = document.querySelector('.popup_type_edit-avatar');
const btnEditAvatar = document.querySelector('.profile__avatar');
const profilePopup = document.querySelector('.popup_type_edit');
const formProfileElement = profilePopup.querySelector('.popup__form');
const addCardPopup = page.querySelector('.popup_type_card');
const popupDeleteCard = document.querySelector('.popup_type_card-delete');
const imagePopup = page.querySelector('.popup_type_img');
const photoElements = page.querySelector('.elements');
const leadProfileName = document.querySelector('.profile__name');
const leadProfileDescription = document.querySelector('.profile__description');
const nameInput = formProfileElement.querySelector('.popup__text_type_name');
const jobInput = formProfileElement.querySelector('.popup__text_type_comment');

export {
  btnOpenPopupEdit,
  btnAddNewCard,
  avatarPopup,
  btnEditAvatar,
  profilePopup,
  addCardPopup,
  popupDeleteCard,
  imagePopup,
  photoElements,
  leadProfileName,
  leadProfileDescription,
  nameInput,
  jobInput,
};

