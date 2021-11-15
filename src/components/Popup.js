export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._pageNoScroll = document.querySelector('.page');
    //this._byOverlayClose = this._byOverlayClose.bind(this);
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

  // _byOverlayClose(evt) {
  //   if (evt.target.classList.contains('popup_opened')) {
  //     this.close();
  //   }
  // };

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close').addEventListener('click', () => this.close());
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) this.close();
    })
    // this._popupSelector.addEventListener('click', this._byOverlayClose);
  };
}
