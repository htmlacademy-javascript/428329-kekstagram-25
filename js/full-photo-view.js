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
const fullPhotoCommentsListFragment = document.createDocumentFragment();

let userComments;

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

const onCloseButtonClick = () => {
  if (fullPhotoCloseButton) {
    closeFullPhoto();
  }
};

const loadComments = (lastIndex, list) => {
  removeAllChildren(fullPhotoCommentsList);
  for (let i = 0; i < lastIndex; i++) {
    fullPhotoCommentsListFragment.appendChild(addComment(list[i]));
  }
  fullPhotoCommentsList.appendChild(fullPhotoCommentsListFragment);
};

const loadMoreComments = (lastIndex, list) => {
  if (lastIndex >= list.length) {
    commentsCountView.textContent = list.length;
    loadComments(list.length, list);
    socialCommentsLoader.classList.add('hidden');
  } else {
    commentsCountView.textContent = lastIndex;
    loadComments(lastIndex, list);
  }
};

const onSocialCommentsLoaderClick = () => {
  const lastCommentIndex = fullPhotoCommentsList.children.length + MAX_COMMENTS_COUNT;
  if (socialCommentsLoader) {
    loadMoreComments(lastCommentIndex, userComments);
  }
};

const createCommentsList = () => {
  if (userComments <= MAX_COMMENTS_COUNT) {
    commentsCountView.textContent = userComments.length;
    loadComments(userComments.length, userComments);
    socialCommentsLoader.classList.add('hidden');
  } else {
    const lastCommentIndex = MAX_COMMENTS_COUNT;
    commentsCountView.textContent = lastCommentIndex;
    loadComments(lastCommentIndex, userComments);
    socialCommentsLoader.addEventListener('click', onSocialCommentsLoaderClick);
  }
};

const createBigPhoto = (photo) => {
  const {url, likes, comments, description} = photo;
  openFullPhoto();
  userComments = comments;

  fullPhotoImg.src = url;
  fullPhotoLikesCount.textContent = likes;
  fullPhotoCommentsCount.textContent = comments.length;
  fullPhotoDescription.textContent = description;

  createCommentsList();

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

function closeFullPhoto () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');

  document.removeEventListener('keydown', onFullPhotoEscKeydown);
  document.removeEventListener('click', onCloseButtonClick);
  socialCommentsLoader.removeEventListener('click', onSocialCommentsLoaderClick);
}

export {createBigPhoto};
