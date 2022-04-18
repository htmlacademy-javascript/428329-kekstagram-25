import {photos} from './main.js';
import {comparePhotos, debounce, getRandomArray} from './util.js';
import {createPhotoDescriptions} from './thumbnail.js';

const RERENDER_DELAY = 500;

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const imgFilter = document.querySelector('.img-filters');

const showFilters = () => {
  imgFilter.classList.remove('img-filters--inactive');
};

const deletePhotos = () => {
  const picture = document.querySelectorAll('.picture').forEach((e) => e.parentNode.removeChild(e));
  return picture;
};

const renderPhotos = (pictures) => {
  deletePhotos();
  createPhotoDescriptions(pictures);
};

const renderPhotosWithDelay = debounce(renderPhotos, RERENDER_DELAY);

const onFilterDefaultClick = () => {
  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');

  renderPhotosWithDelay(photos);
};

const onFilterRandomClick = () => {
  const slicedPhotos = photos.slice();
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.add('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');

  renderPhotosWithDelay(getRandomArray(slicedPhotos, 10));
};

const onFilterDiscussedClick = () => {
  const array = photos.slice();
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.add('img-filters__button--active');

  renderPhotosWithDelay(array.sort(comparePhotos));
};

filterDefault.addEventListener('click', onFilterDefaultClick);
filterRandom.addEventListener('click', onFilterRandomClick);
filterDiscussed.addEventListener('click', onFilterDiscussedClick);

export {showFilters};
