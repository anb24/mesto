function response(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  setAvatar(data) {
    //console.log(data)
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
    .then(response)
  }
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
      .then(response)
  }
  setUser(data) {
    //console.log(inputValue);
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(response)
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    })
      .then(response)
  }
  setNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(response)
  }
  setCardLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(response)
  }
  removeCardLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(response)
  }
  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(response)
  }
}
