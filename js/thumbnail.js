import {photoDescriptions} from './data.js';
const pictureListThumbnail = document.querySelector('.pictures');
const pictureThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureThumbnails = photoDescriptions();

const pictureListFragment = document.createDocumentFragment();

pictureThumbnails.forEach(({url, likes, comments}) => {
  const pictureThumbnail = pictureThumbnailTemplate.cloneNode(true);
  pictureThumbnail.querySelector('.picture__img').src = url;
  pictureThumbnail.querySelector('.picture__likes').textContent = likes;
  pictureThumbnail.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.appendChild(pictureThumbnail);
});

pictureListThumbnail.appendChild(pictureListFragment);
