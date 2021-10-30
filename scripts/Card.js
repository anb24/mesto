export default class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document.querySelector('#card-template').content.querySelector('.element').cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }
//слушатели:
  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._clickDeleteCard();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._clickLike();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openPhoto();
    });
  }
//удаление:
  _clickDeleteCard() {
    this._element.remove();
  }
//лайк:
  _clickLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }
//увеличить картинку:
  _openPhoto() {
    const popupImg = document.querySelector('.popup_type_img');
    popupImg.classList.add('popup_opened');
    popupImg.querySelector('.popup__title-photo').textContent = this._name;
    popupImg.querySelector('.popup__card-photo').src = this._link;
  }
//создание карточек:
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    return this._element;
  }
}
