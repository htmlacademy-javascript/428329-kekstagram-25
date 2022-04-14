const COMMENT_IMG_WIDTH = 35;
const COMMENT_IMG_HEIGHT = 35;
const ALERT_SHOW_TIME = 3000;

const errorCode = document.querySelector('.error-message__title');
const errorDescription = document.querySelector('.error-message__text');
const errorWrapper = document.querySelector('.server-error');

const getRandomNaturalNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min <= 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomIntegerPositiveNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkCommentLength = (userComment, maxCommentLength) => (userComment.length <= maxCommentLength);

const getRandomArrayElement = (elements) => elements[getRandomIntegerPositiveNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

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
  errorWrapper.classList.remove('hidden');
  errorCode.textContent = 'Произошла ошибка!';
  errorDescription.textContent = value;
};

const showAlert = (message) => {
  errorWrapper.classList.remove('hidden');
  errorCode.textContent = 'Упс!..';
  errorDescription.textContent = message;

  setTimeout(() => {
    errorWrapper.classList.add('hidden');
  }, ALERT_SHOW_TIME);
};

export {showAlert, showError, addComment, removeAllChildren, getRandomNaturalNumber, getRandomIntegerPositiveNumber, checkCommentLength, getRandomArrayElement, isEscapeKey, isEnterKey};
