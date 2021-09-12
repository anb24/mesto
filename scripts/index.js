const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__open-popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const page = document.querySelector('.page');
let like = document.querySelector('.element__like');

function popupToggle() {
  popup.classList.toggle('popup__opened');
  page.classList.toggle('page__no-scroll');
}

function likeToggle() {
  like.classList.toggle('element__like_active');
}

function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    popupToggle();
  }
}

like.addEventListener('click', likeToggle);
popup.addEventListener('click', clickOverlay);
popupOpenBtn.addEventListener('click', popupToggle);
popupCloseBtn.addEventListener('click', popupToggle);


// function popupReset() {
//   nameInput.textContent = document.querySelector('.profile__name');
//   jobInput.textContent = document.querySelector('.profile__info');
// }

// profileButton.addEventListener('click', popupOpened, popupReset);


// let formElement = popup.querySelector('.profile__name');
// // Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);
