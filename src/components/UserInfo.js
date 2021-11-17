export default class UserInfo {
  constructor({name, about}) {
    this._userName = name;
    this._userAbout = about;
    this._nameElement = null;
    this._aboutElement = null;
  };
  getUserInfo() {
    return {
      name: this._nameElement,
      about: this._aboutElement
    }
  };
  setUserInfo({name, about}) {
    this._nameElement = name;
    this._aboutElement = about;
  };
  updateUserInfo() {
    this._userName.textContent = this._nameElement;
    this._userAbout.textContent = this._aboutElement;
  };
}
