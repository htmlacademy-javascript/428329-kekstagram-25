import './full-photo-view.js';
import './photo-editor-view.js';
import './photo-editor-form-validate.js';
import './photo-scale.js';
import './photo-effects.js';
import './filters.js';
import './photo-loading.js';

import {getData} from './api.js';
import {createPhotoDescriptions} from './thumbnail.js';
import {showError} from './util.js';
import {chooseFilterDefault, chooseFilterRandom, chooseFilterDiscussed} from './filters.js';

let photos;
getData(
  (loadedPhotos) => {
    createPhotoDescriptions(loadedPhotos);
    photos = loadedPhotos;
    chooseFilterDefault();
    chooseFilterRandom();
    chooseFilterDiscussed();
  },
  showError);

export {photos};
