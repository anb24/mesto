import './index.css';
import Card from '../components/Card.js'
import { validationConfig, FormValidator } from '../components/FormValidator.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithSubmit from '../components/PopupWithSubmit';
import Api from '../components/Api.js';

const page = document.querySelector('.page');
const btnOpenPopupEdit = page.querySelector('.profile__edit-btn_open');
const btnAddNewCard = page.querySelector('.profile__add-btn');
const avatarPopup = document.querySelector('.popup_type_edit-avatar');
const btnEditAvatar = document.querySelector('.profile__avatar');
const profilePopup = document.querySelector('.popup_type_edit');
const deleteBtn = document.querySelector('.popup__delete');
const formElement = profilePopup.querySelector('.popup__form');
const addCardPopup = page.querySelector('.popup_type_card');
const popupDeleteCard = document.querySelector('.popup_type_card-delete');
const imagePopup = page.querySelector('.popup_type_img');
const photoElements = page.querySelector('.elements');
const leadProfileName = document.querySelector('.profile__name');
const leadProfileDescription = document.querySelector('.profile__description');
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
    //console.log('Карточки: ', dataCards);
    //console.log('Пользователь: ', dataUser);
  })
  .catch((err) => {
    console.log('Ошибка: ', err);
  })

function createCard(data) {
  const cardElement = new Card({
    data: {...data, dataCheckId: userId},
    handleCardClick: (link, name) => {
      openPhoto.open(link, name);
    },
    handleCardLike: (card) => {
      if(card.like()) {
        api.removeCardLike(card.cardId)
          .then(dataCard => card.setLike(dataCard.likes))
      } else{
        api.setCardLike(card.cardId)
          .then(dataCard => card.setLike(dataCard.likes))
      }
      //console.log(card);
      //console.log(card.like());
    },
    handleCardDelete: (card) => {
      cardDelete(card);
    },
    // handleCardDelete: (card) => {
    //   console.log(card);
    //   popupCardDelete.open();
    //   popupCardDelete.setFormSubmit(() => {
    //   })
    // }
    // handleCardDelete: () => cardDelete(card)
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
    newCardPopup.startCreate()
    api.setNewCard(data)
      .then(data => {
        photoAlbum.addItem(createCard(data), false);
      })
      .then(() => {
        newCardPopup.close();
      })
      .catch(err => {
        console.log('Ошибка: ', err);
      })
      .finally(() => {
        newCardPopup.defaultCreate()
      })
});
newCardPopup.setEventListeners();

//увеличить фото:
const openPhoto = new PopupWithImage(imagePopup);
openPhoto.setEventListeners();

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
    popupEdit.startSave()
    api.setUser(data)
      .then(data => {
        profileInfo.setUserInfo(data)
      })
      .then(() => {
        popupEdit.close();
      })
      .catch(err => {
        console.log('Ошибка: ', err);
      })
      .finally(() => {
        popupEdit.defaultSave()
      })
  });
popupEdit.setEventListeners();

//редактировать аватар:
const popupEditAvatar = new PopupWithForm(avatarPopup,
  (data) => {
    popupEditAvatar.startSave()
    api.setAvatar(data)
      .then(data => {
        profileInfo.setUserAvatar(data);
      })
      .then(() => {
        popupEditAvatar.close();
      })
      .catch(err => {
        console.log('Ошибка: ', err);
      })
      .finally(() => {
        popupEditAvatar.defaultSave()
      })
  })
popupEditAvatar.setEventListeners();

btnEditAvatar.addEventListener('click', function() {
  validateEditAvatar.resetValidation();
  popupEditAvatar.open();
})



//УДАЛИТЬ:
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
      .catch((err) => {
        console.log(`${err}`)
      })
  })
  popupCardDelete.open();
}



btnOpenPopupEdit.addEventListener('click', openPopupEdit);
btnAddNewCard.addEventListener('click', openPopupAddCards);
