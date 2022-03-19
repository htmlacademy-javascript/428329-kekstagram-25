const viewPostDialog = function(thumbnail) {
  thumbnail.addEventListener('click', () => {
    const fullPhotoImg = document.querySelector('.big-picture__img');
    const fullPhotoLikesCount = document.querySelector('.likes-count');
    const fullPhotoCommentsCount = document.querySelector('.comments-count');

    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');

    fullPhotoImg.querySelector('img').src = thumbnail.querySelector('.picture__img').src;
    fullPhotoLikesCount.textContent = thumbnail.querySelector('.picture__likes').textContent;
    fullPhotoCommentsCount.textContent = thumbnail.querySelector('.picture__comments').textContent;
  });
};

const buttonClose = document.querySelector('.big-picture__cancel');
buttonClose.addEventListener('click', () => {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.social__comment-count').classList.remove('hidden');
  document.querySelector('.comments-loader').classList.remove('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('.social__comment-count').classList.remove('hidden');
    document.querySelector('.comments-loader').classList.remove('hidden');
  }
});

export {viewPostDialog};
