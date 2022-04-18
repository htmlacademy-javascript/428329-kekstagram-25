import './photo-editor-view.js';

import {getData} from './api.js';
import {createPhotoDescriptions} from './thumbnail.js';
import {showError} from './util.js';
import {showFilters} from './filters.js';

let photos;

getData(
  (loadedPhotos) => {
    createPhotoDescriptions(loadedPhotos);
    photos = loadedPhotos;
    showFilters();
  },
  showError);

export {photos};
