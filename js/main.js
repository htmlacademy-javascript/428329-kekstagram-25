import './full-photo-view.js';
import './photo-editor-view.js';
import './photo-editor-form-validate.js';
import './photo-scale.js';
import './photo-effects.js';
import './filters.js';
import './photo-loading.js';

import {getData} from './api.js';
import {createPhotoDescriptions} from './thumbnail.js';
import {showError, debounce} from './util.js';
import {chooseFilterDefault, chooseFilterRandom, chooseFilterDiscussed} from './filters.js';

const RERENDER_DELAY = 500;
let photos;

getData(
  (loadedPhotos) => {
    createPhotoDescriptions(loadedPhotos);
    photos = loadedPhotos;

    debounce(chooseFilterDefault(), RERENDER_DELAY);
    debounce(chooseFilterRandom(), RERENDER_DELAY);
    debounce(chooseFilterDiscussed(), RERENDER_DELAY);
  },
  showError);

export {photos};
