import './index.css';
import Card from '../components/Card.js'
import { validationConfig, FormValidator } from '../components/FormValidator.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithSubmit from '../components/PopupWithSubmit';
import Api from '../components/Api.js';
import {
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
} from '../utils/constants.js'

// //запустить валидацию
const validateEditAvatar = new FormValidator(validationConfig, '.popup_type_edit-avatar');
const validateEdit = new FormValidator(validationConfig, '.popup_type_edit');
const validateCard = new FormValidator(validationConfig, '.popup_type_card');
validateEditAvatar.enableValidation();
validateEdit.enableValidation();
validateCard.enableValidation();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-30',
  headers: {
    authorization: '147d6e49-2abf-4bec-8d5c-2f0bad3d684c',
    "Content-Type": "application/json",
  }
})

let userId = null;

Promise.all([api.getCards(), api.getUserInfo()])
  .then(([dataCards, dataUser]) => {
    userId = dataUser._id;
    profileInfo.setUserInfo(dataUser);
    profileInfo.setUserAvatar(dataUser);
    photoAlbum.renderElements(dataCards);
  })
  .catch((err) => {
    console.log('Ошибка: ', err);
  })

//данные:
const profileInfo = new UserInfo({
  name: leadProfileName,
  role: leadProfileDescription,
  avatar: btnEditAvatar
});
//кнопка "редактировать"
function openPopupEdit() {
  setPopupInputValue();
  validateEdit.resetValidation();
  popupEdit.open();
}
function setPopupInputValue() {
  const userInfoData = profileInfo.getUserInfo();
  nameInput.value = userInfoData.name;
  jobInput.value = userInfoData.role;
}
//редактировать профиль:
const popupEdit = new PopupWithForm(profilePopup,
  (data) => {
    popupEdit.setTextForButton('Сохранение...')
    api.setUser(data)
      .then(data => {
        profileInfo.setUserInfo(data)
        popupEdit.close();
      })
      .catch(err => {
        console.log('Ошибка: ', err);
      })
      .finally(() => {
        popupEdit.setTextForButton('Сохранить')
      })
  });
popupEdit.setEventListeners();
//редактировать аватар:
const popupEditAvatar = new PopupWithForm(avatarPopup,
  (data) => {
    popupEditAvatar.setTextForButton('Сохранение...')
    api.setAvatar(data)
      .then(data => {
        profileInfo.setUserAvatar(data);
        popupEditAvatar.close();
      })
      .catch(err => {
        console.log('Ошибка: ', err);
      })
      .finally(() => {
        popupEditAvatar.setTextForButton('Сохранить')
      })
  })
popupEditAvatar.setEventListeners();



function createCard(data) {
  const cardElement = new Card({
    data: {...data, dataCheckId: userId},
    handleCardClick: (link, name) => {
      openPhoto.open(link, name);
    },
    handleCardLike: (card) => {
      cardLike(card);
    },
    handleCardDelete: (card) => {
      cardDelete(card);
    },
    }, '#card-template').generateCard();
  return cardElement;
}
//отрисовать карточки(из массива):
const photoAlbum = new Section({
  renderer: (item) => {
      const cardPhoto = createCard(item);
      photoAlbum.addItem(cardPhoto);
    }
  },
  photoElements
);
//кнопка "добавить"
function openPopupAddCards() {
  validateCard.resetValidation();
  newCardPopup.open();
};
//добавить карточку:
const newCardPopup = new PopupWithForm(addCardPopup,
  (data) => {
    newCardPopup.setTextForButton('Загрузка...')
    api.setNewCard(data)
      .then(data => {
        photoAlbum.addItem(createCard(data), false);
        newCardPopup.close();
      })
      .catch(err => {
        console.log('Ошибка: ', err);
      })
      .finally(() => {
        newCardPopup.setTextForButton('Создать')
      })
});
newCardPopup.setEventListeners();
//увеличить фото:
const openPhoto = new PopupWithImage(imagePopup);
openPhoto.setEventListeners();

function cardLike(card) {
  api.changeCardLike(card.cardId, card.like())
    .then((data) => {
      card.setLike(data);
    })
    .catch(err => {
      console.log('Ошибка: ', err);
    })
}

//удалить карточку:
const popupCardDelete = new PopupWithSubmit(popupDeleteCard);
popupCardDelete.setEventListeners();

function cardDelete(card) {
  popupCardDelete.setFormSubmit(() => {
    api.deleteCard(card.cardId)
      .then(() => {
        //console.log(card)
        card.clickCardDelete(card.cardId);
        popupCardDelete.close();
      })
      .catch(err => {
        console.log('Ошибка: ', err);
      })
  })
  popupCardDelete.open();
}


btnEditAvatar.addEventListener('click', function() {
  validateEditAvatar.resetValidation();
  popupEditAvatar.open();
})
btnOpenPopupEdit.addEventListener('click', openPopupEdit);
btnAddNewCard.addEventListener('click', openPopupAddCards);
