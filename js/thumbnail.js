import {createBigPhoto} from './full-photo-view.js';
const pictureListThumbnail = document.querySelector('.pictures');
const pictureThumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPhotoDescriptions = (pictureThumbnails) => {
  const pictureListFragment = document.createDocumentFragment();

  pictureThumbnails.forEach((photo) => {
    const {url, likes, comments} = photo;

    const pictureThumbnail = pictureThumbnailTemplate.cloneNode(true);

    const thumbnailPicture = pictureThumbnail.querySelector('.picture__img');
    const thumbnailLikes = pictureThumbnail.querySelector('.picture__likes');
    const thumbnailComments = pictureThumbnail.querySelector('.picture__comments');

<<<<<<< HEAD
    thumbnailPicture.src = url;
    thumbnailLikes.textContent = likes;
    thumbnailComments.textContent = comments.length;
    pictureListFragment.appendChild(pictureThumbnail);

    pictureThumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      createBigPhoto(photo);
    });
=======
  pictureThumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    createBigPhoto(photo);
>>>>>>> module9-task1
  });

  pictureListThumbnail.appendChild(pictureListFragment);

};

export {createPhotoDescriptions};

