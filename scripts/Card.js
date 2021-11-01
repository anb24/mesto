export default class Card {
  constructor(data, cardTemplate, handlerImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._handlerImageClick = handlerImageClick;
    this._cardTemplate = cardTemplate;
  }
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }
//слушатели:
  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._clickDeleteCard();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._clickLike()
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handlerImageClick({
        name: this._name,
        link: this._link,
      });
    });
  }
//удаление:
  _clickDeleteCard() {
    this._element.remove();
  }
//лайк:
  _clickLike() {
    this._likeButton.classList.toggle('element__like_active');
  }
//создание карточек:
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._likeButton = this._element.querySelector('.element__like');
    return this._element;
  }
}
