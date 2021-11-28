export default class Card {
  constructor({data, handleCardClick, handleCardLike, handleCardDelete}, cardTemplate) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._numberLikes = data.likes.length;
    this.cardId = data._id;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;
    this._dataCheckId = data.dataCheckId;
    this._dataOwnerId = data.owner._id;
    //console.log('Карточка:', data);
  };
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  };

  _getAccessDelete() {
    if (this._dataCheckId === this._dataOwnerId) {
      this._element.querySelector('.element__delete').classList.add('element__delete_active');
    }
  }

//слушатели:
  _setEventListeners() {
    this._elementLikeBtn = this._element.querySelector('.element__like');
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleCardDelete(this);
    });
    this._elementLikeBtn.addEventListener('click', () => {
      this._handleCardLike(this)
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick({
        link: this._link,
        name: this._name
      });
    });
  };
//удаление:
  clickCardDelete() {
    this._element.remove();
    this._element = null;
  };
//лайк:
like() {
  return this._likes.some(user => user._id === this._dataCheckId);
}
setLike(data) {
  //console.log(data);
  this._likes = data;
  this._clickLike();
  }

_clickLike() {
  if(this.like()) {
    this._elementLikeBtn.classList.add('element__like_active');
  } else {
    this._elementLikeBtn.classList.remove('element__like_active');
  }
}

//создание карточек:
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._likeButton = this._element.querySelector('.element__like');
    this._element.querySelector('.element__sum-likes').textContent = this._numberLikes;
    this._getAccessDelete();
    return this._element;
  };
}
