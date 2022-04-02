import {addComment, removeAllChildren, isEscapeKey} from './util.js';

const MAX_COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialCommentsLoader = document.querySelector('.comments-loader');
const commentsCountView = document.querySelector('.comments-count-view');

const fullPhotoImg = document.querySelector('.big-picture__img').querySelector('img');
const fullPhotoLikesCount = document.querySelector('.likes-count');
const fullPhotoCommentsCount = document.querySelector('.comments-count');
const fullPhotoDescription = document.querySelector('.social__caption');
const fullPhotoCloseButton = document.querySelector('.big-picture__cancel');
const fullPhotoCommentsList = document.querySelector('.social__comments');

const openFullPhoto = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
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

const onLoadMoreButton = (lastIndex, list) => {
  if (socialCommentsLoader) {
    loadMoreButton(lastIndex, list);
  }
};

function closeFullPhoto () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');

  document.removeEventListener('keydown', onFullPhotoEscKeydown);
  document.removeEventListener('click', onButtonClose);
  document.removeEventListener('click', onLoadMoreButton);
}

const loadComments = (lastIndex, list) => {
  removeAllChildren(fullPhotoCommentsList);
  for (let i = 0; i < lastIndex; i++) {
    fullPhotoCommentsList.appendChild(addComment(list[i]));
  }
};

function loadMoreButton (lastIndex, list) {
  if (lastIndex >= list.length) {
    commentsCountView.textContent = list.length;
    loadComments(list.length, list);
    socialCommentsLoader.classList.add('hidden');
  } else {
    commentsCountView.textContent = lastIndex;
    loadComments(lastIndex, list);
  }
}

const createCommentsList = (userCommentList) => {
  if (userCommentList <= MAX_COMMENTS_COUNT) {
    commentsCountView.textContent = userCommentList.length;
    loadComments(userCommentList.length, userCommentList);
    socialCommentsLoader.classList.add('hidden');
  } else {
    let lastCommentIndex = MAX_COMMENTS_COUNT;
    commentsCountView.textContent = lastCommentIndex;
    loadComments(lastCommentIndex, userCommentList);
    socialCommentsLoader.addEventListener('click', () => {
      lastCommentIndex = lastCommentIndex + MAX_COMMENTS_COUNT;
      onLoadMoreButton(lastCommentIndex, userCommentList);
    });
  }
};

const createBigPhoto = (photo) => {
  const {url, likes, comments, description} = photo;
  openFullPhoto();

  fullPhotoImg.src = url;
  fullPhotoLikesCount.textContent = likes;
  fullPhotoCommentsCount.textContent = comments.length;
  fullPhotoDescription.textContent = description;

  createCommentsList(comments);

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
