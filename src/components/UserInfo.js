export default class UserInfo {
  constructor({name, role, avatar}) {
    this._userName = name;
    this._userAbout = role;
    this._userAvatar = avatar;
  };
  getUserInfo() {
    return {
      name: this._userName.textContent,
      role: this._userAbout.textContent,
      avatar: this._userAvatar.src
    }
  };
  setUserInfo(data) {
    if (data.name) {
      this._userName.textContent = data.name;
    }
    if (data.about) {
      this._userAbout.textContent = data.about;
    }

  };
  setUserAvatar(data){
    if (data.avatar) {
      this._userAvatar.src = data.avatar;
    }
  }
}
