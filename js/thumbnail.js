import {createBigPhoto} from './full-photo-view.js';
const pictureListThumbnail = document.querySelector('.pictures');
const pictureThumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const imgFilters = document.querySelector('.img-filters');

const comparePhotos = (photoA, photoB) => {
  const commentsCountA = photoA.length;
  const commentsCountB = photoB.length;

  return commentsCountB - commentsCountA;
};

const createPhotoDescriptions = (pictureThumbnails) => {
  const pictureListFragment = document.createDocumentFragment();

  pictureThumbnails
    .slice()
    .forEach((photo) => {
      const {url, likes, comments} = photo;
      const pictureThumbnail = pictureThumbnailTemplate.cloneNode(true);
      const thumbnailPicture = pictureThumbnail.querySelector('.picture__img');
      const thumbnailLikes = pictureThumbnail.querySelector('.picture__likes');
      const thumbnailComments = pictureThumbnail.querySelector('.picture__comments');
      thumbnailPicture.src = url;
      thumbnailLikes.textContent = likes;
      thumbnailComments.textContent = comments.length;
      pictureListFragment.appendChild(pictureThumbnail);

      pictureThumbnail.addEventListener('click', (evt) => {
        evt.preventDefault();
        createBigPhoto(photo);
      });
    })
    .sort(comparePhotos);

  pictureListThumbnail.appendChild(pictureListFragment);
  imgFilters.classList.remove('img-filters--inactive');
};

export {createPhotoDescriptions};

