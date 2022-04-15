import {photos} from './main.js';
import {comparePhotos, getRandomArray} from './util.js';
import {createPhotoDescriptions} from './thumbnail.js';

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const onfilterDefaultClick = () => {
  const array = photos.slice();
  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
  createPhotoDescriptions(array);
};

const onfilterRandomClick = () => {
  const array = photos.slice();
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.add('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
  createPhotoDescriptions(getRandomArray(array, 10));
};

const onfilterDiscussedClick = () => {
  const array = photos.slice();
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.add('img-filters__button--active');
  createPhotoDescriptions(array.sort(comparePhotos));
};

const chooseFilterDefault = () => {
  filterDefault.addEventListener('click', () => {
    onfilterDefaultClick();
  });
};

const chooseFilterDiscussed = () => {
  filterDiscussed.addEventListener('click', () => {
    onfilterDiscussedClick();
  });
};

const chooseFilterRandom = () => {
  filterRandom.addEventListener('click', () => {
    onfilterRandomClick();
  });
};

//filterDefault.addEventListener('click', onfilterDefaultClick);
//filterRandom.addEventListener('click', onfilterRandomClick);
//filterDiscussed.addEventListener('click', onfilterDiscussedClick);

export {chooseFilterDefault, chooseFilterRandom, chooseFilterDiscussed};
