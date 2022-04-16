import {photos} from './main.js';
import {comparePhotos, debounce, getRandomArray} from './util.js';
import {createPhotoDescriptions} from './thumbnail.js';

const RERENDER_DELAY = 500;

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const imgFilters = document.querySelector('.img-filters');

const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const renderPhotos = (array) => {
  createPhotoDescriptions(array);
};

const deletePhotos = () => {
  const ph = document.querySelectorAll('.picture').forEach((e) => e.parentNode.removeChild(e));
  return ph;
};

const renderPhotosWithDelay = debounce(renderPhotos, RERENDER_DELAY);

const onfilterDefaultClick = () => {
  deletePhotos();
  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');

  renderPhotosWithDelay(photos);
};

const onfilterRandomClick = () => {
  deletePhotos();
  const array = photos.slice();
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.add('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');

  renderPhotosWithDelay(getRandomArray(array, 10));
};

const onfilterDiscussedClick = () => {
  deletePhotos();
  const array = photos.slice();
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.add('img-filters__button--active');

  renderPhotosWithDelay(array.sort(comparePhotos));
};

filterDefault.addEventListener('click', onfilterDefaultClick);
filterRandom.addEventListener('click', onfilterRandomClick);
filterDiscussed.addEventListener('click', onfilterDiscussedClick);

export {showFilters};
