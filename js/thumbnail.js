import {addComment, removeAllChildren, isEnterKey, isEscapeKey} from './util.js';
import {createPhotoDescriptions} from './data.js';
import {viewFullPhoto, closeFullPhoto} from './fullphotoview.js';

const pictureListThumbnail = document.querySelector('.pictures');
const pictureThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fullPhotoImg = document.querySelector('.big-picture__img').querySelector('img');
const fullPhotoLikesCount = document.querySelector('.likes-count');
const fullPhotoCommentsCount = document.querySelector('.comments-count');
const fullPhotoDescription = document.querySelector('.social__caption');
const fullPhotoClose = document.querySelector('.big-picture__cancel');

const pictureThumbnails = createPhotoDescriptions();

const pictureListFragment = document.createDocumentFragment();

pictureThumbnails.forEach(({url, likes, comments, description}) => {
  const pictureThumbnail = pictureThumbnailTemplate.cloneNode(true);
  pictureThumbnail.querySelector('.picture__img').src = url;
  pictureThumbnail.querySelector('.picture__likes').textContent = likes;
  pictureThumbnail.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.appendChild(pictureThumbnail);

  pictureThumbnail.addEventListener('click', () => {
    viewFullPhoto();
    fullPhotoImg.src = url;
    fullPhotoLikesCount.textContent = likes;
    fullPhotoCommentsCount.textContent = comments.length;
    fullPhotoDescription.textContent = description;

    const commentsList = document.querySelector('.social__comments');
    removeAllChildren(commentsList);
    for (let i = 0; i < comments.length; i++) {
      commentsList.appendChild(addComment(comments[i]));
    }

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeFullPhoto();
      }
    });

    fullPhotoClose.addEventListener('click', () => {
      closeFullPhoto();
    });
  });

  pictureThumbnail.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      viewFullPhoto();
    }
  });
});

pictureListThumbnail.appendChild(pictureListFragment);
