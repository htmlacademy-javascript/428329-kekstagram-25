import {createPhotoDescriptions} from './data.js';
import {createBigPhoto} from './full-photo-view.js';

const pictureListThumbnail = document.querySelector('.pictures');
const pictureThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureThumbnails = createPhotoDescriptions();
const pictureListFragment = document.createDocumentFragment();

pictureThumbnails.forEach((photo) => {
  const {url, likes, comments} = photo;

  const pictureThumbnail = pictureThumbnailTemplate.cloneNode(true);

  const thumbnailPicture = pictureThumbnail.querySelector('.picture__img');
  const thumbnailLikes = pictureThumbnail.querySelector('.picture__likes');
  const thumbnailComments = pictureThumbnail.querySelector('.picture__comments');

  thumbnailPicture.src = url;
  thumbnailLikes.textContent = likes;
  thumbnailComments.textContent = comments.length;
  pictureListFragment.appendChild(pictureThumbnail);

  pictureThumbnail.addEventListener('click', () => {
    createBigPhoto(photo);
  });
});

pictureListThumbnail.appendChild(pictureListFragment);
