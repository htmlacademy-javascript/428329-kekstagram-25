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

const removeAllChildren = function(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const addComment = function(userComment) {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const commentImg = document.createElement('img');
  commentImg.classList.add('social__picture');
  commentImg.src = userComment.avatar;
  commentImg.alt = userComment.name;
  commentImg.width = 35;
  commentImg.height = 35;
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = userComment.message;
  newComment.appendChild(commentImg);
  newComment.appendChild(commentText);

  return newComment;
};


export {addComment, removeAllChildren, getRandomNaturalNumber, getRandomIntegerPositiveNumber, checkCommentLength, getRandomArrayElement, isEscapeKey, isEnterKey};
