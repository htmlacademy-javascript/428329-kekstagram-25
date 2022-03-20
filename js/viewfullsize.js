import {isEscapeKey, isEnterKey} from './util.js';

const fullPhotoImg = document.querySelector('.big-picture__img').querySelector('img');
const fullPhotoLikesCount = document.querySelector('.likes-count');
const fullPhotoCommentsCount = document.querySelector('.comments-count');

const fullPhotoOpen = document.querySelector('.big-picture');
const modalOpen = document.querySelector('body');

const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');

const fullPhotoCloseElement = document.querySelector('.big-picture__cancel');

const viewFullPhoto = function () {
  fullPhotoOpen.classList.remove('hidden');
  modalOpen.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
};

const closeFullPhoto = function () {
  fullPhotoOpen.classList.add('hidden');
  modalOpen.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');
};

const viewPostDialog = function(thumbnail) {
  thumbnail.addEventListener('click', () => {
    viewFullPhoto();

    fullPhotoImg.src = thumbnail.querySelector('.picture__img').src;
    fullPhotoLikesCount.textContent = thumbnail.querySelector('.picture__likes').textContent;
    fullPhotoCommentsCount.textContent = thumbnail.querySelector('.picture__comments').textContent;

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeFullPhoto();
      }
    });
  });

  thumbnail.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      viewFullPhoto();
    }
  });
};

fullPhotoCloseElement.addEventListener('click', () => {
  closeFullPhoto();
});

export {viewPostDialog};
