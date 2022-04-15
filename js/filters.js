import {photos} from './main.js';
import {comparePhotos, randomArray} from './util.js';

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const onfilterDefaultClick = () => {
  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
};

const onfilterRandomClick = () => {
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.add('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
  randomArray(photos, 10);
};

const onfilterDiscussedClick = () => {
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.add('img-filters__button--active');
  photos.sort(comparePhotos);
};

const chooseFilterDefault = (cb) => {
  filterDefault.addEventListener('click', () => {
    onfilterDefaultClick();
    cb();
  });
};

const chooseFilterDiscussed = (cb) => {
  filterDiscussed.addEventListener('click', () => {
    onfilterDiscussedClick();
    cb();
  });
};

const chooseFilterRandom = (cb) => {
  filterRandom.addEventListener('click', () => {
    onfilterRandomClick();
    cb();
  });
};

filterDefault.addEventListener('click', onfilterDefaultClick);
filterRandom.addEventListener('click', onfilterRandomClick);
filterDiscussed.addEventListener('click', onfilterDiscussedClick);

export {chooseFilterDefault, chooseFilterRandom, chooseFilterDiscussed};
