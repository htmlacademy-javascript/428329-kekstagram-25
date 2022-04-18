const COMMENT_IMG_WIDTH = 35;
const COMMENT_IMG_HEIGHT = 35;
const ESCAPE_KEYCODE = 'Escape';
const ENTER_KEYCODE = 'Enter';
const ERROR_MESSAGE = 'Произошла ошибка';
const errorCode = document.querySelector('.error-message__title');
const errorDescription = document.querySelector('.error-message__text');
const errorWrapper = document.querySelector('.server-error');
const imgFilter = document.querySelector('.img-filters');

const getRandomIntegerPositiveNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => elements[getRandomIntegerPositiveNumber(0, elements.length - 1)];

const getRandomArray = (elements, length) => {
  const newElements = [];
  for (let i = 0; i < length; i++) {
    const element = getRandomArrayElement(elements);
    newElements.push(element);
    const elementIndex = elements.indexOf(element);
    elements.splice(elementIndex, 1);
  }
  return newElements;
};

const isEscapeKey = (evt) => evt.key === ESCAPE_KEYCODE;
const isEnterKey = (evt) => evt.key === ENTER_KEYCODE;

const removeAllChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const addComment = (userComment) => {
  const newComment = document.createElement('li');
  const commentImg = document.createElement('img');
  const commentText = document.createElement('p');

  commentImg.classList.add('social__picture');
  commentImg.src = userComment.avatar;
  commentImg.alt = userComment.name;
  commentImg.width = COMMENT_IMG_WIDTH;
  commentImg.height = COMMENT_IMG_HEIGHT;

  commentText.classList.add('social__text');
  commentText.textContent = userComment.message;

  newComment.classList.add('social__comment');
  newComment.appendChild(commentImg);
  newComment.appendChild(commentText);

  return newComment;
};

const showError = (value) => {
  imgFilter.classList.add('img-filters--inactive');
  errorWrapper.classList.remove('hidden');
  errorCode.textContent = ERROR_MESSAGE;
  errorDescription.textContent = value;
};

const checkActiveElement = (element) =>  !(element === document.activeElement);

const comparePhotos = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {debounce, getRandomArray, comparePhotos, checkActiveElement, showError, addComment, removeAllChildren, getRandomIntegerPositiveNumber, getRandomArrayElement, isEscapeKey, isEnterKey};
