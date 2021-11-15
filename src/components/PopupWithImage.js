import Popup from './Popup.js'

export default class PopupWithImage extends Popup{
  constructor(popup) {
    super(popup)
    this._photo = this._popupSelector.querySelector('.popup__card-photo');
    this._name = this._popupSelector.querySelector('.popup__title-photo');
  };

  open({link, name}) {
    this._photo.src = link;
		this._photo.alt = name;
		this._name.textContent = name;
    super.open();
  };
}
