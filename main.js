(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleCardClick,i=e.handleCardLike,a=e.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._name=r.name,this._link=r.link,this._likes=r.likes,this._numberLikes=r.likes.length,this.cardId=r._id,this._cardTemplate=n,this._handleCardClick=o,this._handleCardLike=i,this._handleCardDelete=a,this._dataCheckId=r.dataCheckId,this._dataOwnerId=r.owner._id}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"_getAccessDelete",value:function(){this._dataCheckId===this._dataOwnerId&&this._element.querySelector(".element__delete").classList.add("element__delete_active")}},{key:"_setEventListeners",value:function(){var e=this;this._elementLikeBtn=this._element.querySelector(".element__like"),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleCardDelete(e)})),this._elementLikeBtn.addEventListener("click",(function(){e._handleCardLike(e)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick({link:e._link,name:e._name})}))}},{key:"clickCardDelete",value:function(){this._element.remove(),this._element=null}},{key:"like",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._dataCheckId}))}},{key:"setLike",value:function(e){this._likes=e,this._clickLike()}},{key:"_clickLike",value:function(){this.like()?this._elementLikeBtn.classList.add("element__like_active"):this._elementLikeBtn.classList.remove("element__like_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._elementImage=this._element.querySelector(".element__image"),this._element.querySelector(".element__title").textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._likeButton=this._element.querySelector(".element__like"),this._element.querySelector(".element__sum-likes").textContent=this._numberLikes,this._getAccessDelete(),this._element}}])&&e(n.prototype,r),t}();function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_invalid",inputErrorClass:"popup__text_state_invalid"},o=function e(t,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_showError",(function(e,t){e.textContent=t.validationMessage,t.classList.add(o._config.inputErrorClass)})),n(this,"_hideError",(function(e,t){e.textContent="",t.classList.remove(o._config.inputErrorClass)})),n(this,"resetValidation",(function(){o._toggleButtonState(),o._inputsList.forEach((function(e){var t=o._formElement.querySelector("#".concat(e.id,"-error"));o._hideError(t,e)}))})),n(this,"_checkInputValidity",(function(e){var t=!e.validity.valid,n=o._formElement.querySelector("#".concat(e.id,"-error"));t?o._showError(n,e):o._hideError(n,e)})),n(this,"_toggleButtonState",(function(){o._inputsList.some((function(e){return!e.validity.valid}))?(o._submitButton.classList.add(o._config.inactiveButtonClass),o._submitButton.disabled="disabled"):(o._submitButton.classList.remove(o._config.inactiveButtonClass),o._submitButton.disabled=!1)})),n(this,"_setEventListers",(function(){o._toggleButtonState(),o._inputsList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))})),o._formElement.addEventListener("submit",(function(e){e.preventDefault()}))})),n(this,"enableValidation",(function(){o._setEventListers()})),this._config=t,this._formElement=document.querySelector(r),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputsList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this),this._pageNoScroll=document.querySelector(".page")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),this._pageNoScroll.classList.add("page_no-scroll"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),this._pageNoScroll.classList.remove("page_no-scroll"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popupSelector.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&i(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._popupForm=n._popupSelector.querySelector(".popup__form"),n._submitBtn=n._popupSelector.querySelector(".popup__save-btn"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._popupForm.querySelectorAll(".popup__text")),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;s(h(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){s(h(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setTextForButton",value:function(e){this._submitBtn.textContent=e}}])&&u(t.prototype,n),a}(a);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._photo=t._popupSelector.querySelector(".popup__card-photo"),t._name=t._popupSelector.querySelector(".popup__title-photo"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._photo.src=t,this._photo.alt=n,this._name.textContent=n,m(g(a.prototype),"open",this).call(this)}}])&&y(t.prototype,n),a}(a);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,n=[{key:"renderElements",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t?this._containerSelector.append(e):this._containerSelector.prepend(e)}}],n&&w(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.name,r=t.role,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userAbout=r,this._userAvatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,role:this._userAbout.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){e.name&&(this._userName.textContent=e.name),e.about&&(this._userAbout.textContent=e.about)}},{key:"setUserAvatar",value:function(e){e.avatar&&(this._userAvatar.src=e.avatar)}}])&&O(t.prototype,n),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function T(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=document.querySelector(".popup_type_card-delete"),t._handlerSubmit=null,t}return t=a,(n=[{key:"setFormSubmit",value:function(e){this._handlerSubmit=e}},{key:"setEventListeners",value:function(){var e=this;P(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handlerSubmit()}))}}])&&j(t.prototype,n),a}(a);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e))}},{key:"setAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._response)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._response)}},{key:"setUser",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._response)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._response)}},{key:"setNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._response)}},{key:"setCardLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._response)}},{key:"removeCardLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._response)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._response)}}])&&R(t.prototype,n),e}(),D=document.querySelector(".page"),F=D.querySelector(".profile__edit-btn_open"),V=D.querySelector(".profile__add-btn"),U=document.querySelector(".popup_type_edit-avatar"),N=document.querySelector(".profile__avatar"),J=document.querySelector(".popup_type_edit"),H=J.querySelector(".popup__form"),M=D.querySelector(".popup_type_card"),z=document.querySelector(".popup_type_card-delete"),$=D.querySelector(".popup_type_img"),G=D.querySelector(".elements"),K=document.querySelector(".profile__name"),Q=document.querySelector(".profile__description"),W=H.querySelector(".popup__text_type_name"),X=H.querySelector(".popup__text_type_comment");function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=new o(r,".popup_type_edit-avatar"),re=new o(r,".popup_type_edit"),oe=new o(r,".popup_type_card");ne.enableValidation(),re.enableValidation(),oe.enableValidation();var ie=new A({url:"https://mesto.nomoreparties.co/v1/cohort-30",headers:{authorization:"147d6e49-2abf-4bec-8d5c-2f0bad3d684c","Content-Type":"application/json"}}),ae=null;Promise.all([ie.getCards(),ie.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ae=i._id,ce.setUserInfo(i),ce.setUserAvatar(i),fe.renderElements(o)})).catch((function(e){console.log("Ошибка: ",e)}));var ce=new C({name:K,role:Q,avatar:N}),ue=new _(J,(function(e){ue.setTextForButton("Сохранение..."),ie.setUser(e).then((function(e){ce.setUserInfo(e),ue.close()})).catch((function(e){console.log("Ошибка: ",e)})).finally((function(){ue.setTextForButton("Сохранить")}))}));ue.setEventListeners();var se=new _(U,(function(e){se.setTextForButton("Сохранение..."),ie.setAvatar(e).then((function(e){ce.setUserAvatar(e),se.close()})).catch((function(e){console.log("Ошибка: ",e)})).finally((function(){se.setTextForButton("Сохранить")}))}));function le(e){return new t({data:Z(Z({},e),{},{dataCheckId:ae}),handleCardClick:function(e,t){he.open(e,t)},handleCardLike:function(e){e.like()?ie.removeCardLike(e.cardId).then((function(t){return e.setLike(t.likes)})):ie.setCardLike(e.cardId).then((function(t){return e.setLike(t.likes)})),console.log(e),console.log(e.like())},handleCardDelete:function(e){!function(e){_e.setFormSubmit((function(){ie.deleteCard(e.cardId).then((function(){e.clickCardDelete(e.cardId),_e.close()})).catch((function(e){console.log("".concat(e))}))})),_e.open()}(e)}},"#card-template").generateCard()}se.setEventListeners();var fe=new E({renderer:function(e){var t=le(e);fe.addItem(t)}},G),pe=new _(M,(function(e){pe.setTextForButton("Загрузка..."),ie.setNewCard(e).then((function(e){fe.addItem(le(e),!1),pe.close()})).catch((function(e){console.log("Ошибка: ",e)})).finally((function(){pe.setTextForButton("Создать")}))}));pe.setEventListeners();var he=new S($);he.setEventListeners();var _e=new x(z);_e.setEventListeners(),N.addEventListener("click",(function(){ne.resetValidation(),se.open()})),F.addEventListener("click",(function(){var e;e=ce.getUserInfo(),W.value=e.name,X.value=e.role,re.resetValidation(),ue.open()})),V.addEventListener("click",(function(){oe.resetValidation(),pe.open()}))})();