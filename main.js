(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardTemplate=n,this.handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__delete").addEventListener("click",(function(){e._clickDeleteCard()})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._clickLike()})),this._element.querySelector(".element__image").addEventListener("click",(function(){e.handleCardClick({link:e._link,name:e._name})}))}},{key:"_clickDeleteCard",value:function(){this._element.remove()}},{key:"_clickLike",value:function(){this._likeButton.classList.toggle("element__like_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__image").src=this._link,this._element.querySelector(".element__image").alt=this._name,this._likeButton=this._element.querySelector(".element__like"),this._element}}])&&e(n.prototype,r),t}();function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_invalid",inputErrorClass:"popup__text_state_invalid"},o=function e(t,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_showError",(function(e,t){e.textContent=t.validationMessage,t.classList.add(o._config.inputErrorClass)})),n(this,"_hideError",(function(e,t){e.textContent="",t.classList.remove(o._config.inputErrorClass)})),n(this,"resetValidation",(function(){o._toggleButtonState(),o._inputsList.forEach((function(e){var t=o._formElement.querySelector("#".concat(e.id,"-error"));o._hideError(t,e)}))})),n(this,"_checkInputValidity",(function(e){var t=!e.validity.valid,n=o._formElement.querySelector("#".concat(e.id,"-error"));t?o._showError(n,e):o._hideError(n,e)})),n(this,"_toggleButtonState",(function(){o._inputsList.some((function(e){return!e.validity.valid}))?(o._submitButton.classList.add(o._config.inactiveButtonClass),o._submitButton.disabled="disabled"):(o._submitButton.classList.remove(o._config.inactiveButtonClass),o._submitButton.disabled=!1)})),n(this,"_setEventListers",(function(){o._toggleButtonState(),o._inputsList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))})),o._formElement.addEventListener("submit",(function(e){e.preventDefault()}))})),n(this,"enableValidation",(function(){o._setEventListers()})),this._config=t,this._formElement=document.querySelector(r),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputsList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this),this._pageNoScroll=document.querySelector(".page")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),this._pageNoScroll.classList.add("page_no-scroll"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),this._pageNoScroll.classList.remove("page_no-scroll"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popupSelector.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&i(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._popupForm=n._popupSelector.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._popupForm.querySelectorAll(".popup__text")),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;a(_(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){a(_(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&l(t.prototype,n),u}(u);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._photo=t._popupSelector.querySelector(".popup__card-photo"),t._name=t._popupSelector.querySelector(".popup__title-photo"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._photo.src=t,this._photo.alt=n,this._name.textContent=n,d(g(u.prototype),"open",this).call(this)}}])&&y(t.prototype,n),u}(u);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderElements",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&k(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.name,r=t.about;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userAbout=r,this._nameElement=null,this._aboutElement=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement,about:this._aboutElement}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameElement=t,this._aboutElement=n}},{key:"updateUserInfo",value:function(){this._userName.textContent=this._nameElement,this._userAbout.textContent=this._aboutElement}}])&&L(t.prototype,n),e}(),C=document.querySelector(".page"),O=C.querySelector(".profile__edit-btn_open"),j=C.querySelector(".profile__add-btn"),B=(document.querySelectorAll(".popup"),document.querySelector(".popup_type_edit")),P=(document.querySelector(".popup__save-btn"),B.querySelector(".popup__form")),x=C.querySelector(".popup_type_card"),R=(x.querySelector(".popup__form"),C.querySelector(".popup_type_img")),I=(C.querySelector(".popup__card-photo"),C.querySelector(".elements")),T=document.querySelector(".profile__name"),V=document.querySelector(".profile__description"),D=(document.getElementById("popupNamePhoto"),document.getElementById("popupLinkPhoto"),P.querySelector(".popup__text_type_name")),U=P.querySelector(".popup__text_type_comment"),A=new o(r,".popup_type_edit"),N=new o(r,".popup_type_card");function F(e){return new t(e,"#card-template",H).generateCard()}A.enableValidation(),N.enableValidation();var z=new w({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=F(e);z.addItem(t)}},I);z.renderElements();var M=new h(x,(function(e){var t=F(e);z.addItem(t),M.close()}));M.setEventListeners();var G=new E(R);function H(e,t){G.open(e,t)}G.setEventListeners();var J=new q({name:T,about:V});J.setUserInfo({name:"Жак-Ив Кусто",about:"Исследователь океана"}),J.updateUserInfo();var K=new h(B,(function(e){J.setUserInfo(e),J.updateUserInfo(),K.close()}));K.setEventListeners(),O.addEventListener("click",(function(){var e;e=J.getUserInfo(),D.value=e.name,U.value=e.about,A.resetValidation(),K.open()})),j.addEventListener("click",(function(){M.open(),N.resetValidation()}))})();