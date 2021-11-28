export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._pageNoScroll = document.querySelector('.page');
  };
  open() {
    this._popupSelector.classList.add('popup_opened');
    this._pageNoScroll.classList.add('page_no-scroll');
		document.addEventListener('keydown', this._handleEscClose);
  };
  close() {
    this._popupSelector.classList.remove('popup_opened');
    this._pageNoScroll.classList.remove('page_no-scroll');
		document.removeEventListener('keydown', this._handleEscClose);
  };
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
			this.close();
    }
  };
  setEventListeners() {
    this._popupSelector.querySelector('.popup__close').addEventListener('click', () => this.close());
    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) this.close();
    })
  };
}
