function getRandomNaturalNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min <= 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntegerPositiveNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCommentLength (userComment, maxCommentLength) {
  return (userComment.length <= maxCommentLength);
}

const getRandomArrayElement = (elements) => elements[getRandomIntegerPositiveNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomNaturalNumber, getRandomIntegerPositiveNumber, checkCommentLength, getRandomArrayElement, isEscapeKey, isEnterKey};
