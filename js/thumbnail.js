import {isEnterKey, isEscapeKey} from './util.js';
import {createPhotoDescriptions} from './data.js';
import {viewFullPhoto, closeFullPhoto} from './fullphotoview.js';

const pictureListThumbnail = document.querySelector('.pictures');
const pictureThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fullPhotoImg = document.querySelector('.big-picture__img').querySelector('img');
const fullPhotoLikesCount = document.querySelector('.likes-count');
const fullPhotoCommentsCount = document.querySelector('.comments-count');

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
    fullPhotoImg.src =  pictureThumbnail.querySelector('.picture__img').src;
    fullPhotoLikesCount.textContent =  pictureThumbnail.querySelector('.picture__likes').textContent;
    fullPhotoCommentsCount.textContent =  pictureThumbnail.querySelector('.picture__comments').textContent;
    document.querySelector('.social__caption').textContent = description;

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeFullPhoto();
      }
    });
  });

  pictureThumbnail.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      viewFullPhoto();
    }
  });
});

pictureListThumbnail.appendChild(pictureListFragment);
