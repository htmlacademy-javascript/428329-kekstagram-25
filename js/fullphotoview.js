const fullPhotoOpen = document.querySelector('.big-picture');
const modalOpen = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');

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

export {viewFullPhoto, closeFullPhoto};
