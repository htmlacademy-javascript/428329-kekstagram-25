import {addComment, removeAllChildren, isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');

const fullPhotoImg = document.querySelector('.big-picture__img').querySelector('img');
const fullPhotoLikesCount = document.querySelector('.likes-count');
const fullPhotoCommentsCount = document.querySelector('.comments-count');
const fullPhotoDescription = document.querySelector('.social__caption');
const fullPhotoCloseButton = document.querySelector('.big-picture__cancel');
const fullPhotoCommentsList = document.querySelector('.social__comments');

const openFullPhoto = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
};

const onFullPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

const onButtonClose = () => {
  if (fullPhotoCloseButton) {
    closeFullPhoto();
  }
};

function closeFullPhoto () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');

  document.removeEventListener('keydown', onFullPhotoEscKeydown);
  document.removeEventListener('click', onButtonClose);
}

const createBigPhoto = (photo) => {
  const {url, likes, comments, description} = photo;
  openFullPhoto();

  fullPhotoImg.src = url;
  fullPhotoLikesCount.textContent = likes;
  fullPhotoCommentsCount.textContent = comments.length;
  fullPhotoDescription.textContent = description;

  removeAllChildren(fullPhotoCommentsList);
  for (let i = 0; i < comments.length; i++) {
    fullPhotoCommentsList.appendChild(addComment(comments[i]));
  }

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeFullPhoto();
    }
  });

  fullPhotoCloseButton.addEventListener('click', () => {
    closeFullPhoto();
  });
};

export {openFullPhoto, closeFullPhoto, createBigPhoto};
