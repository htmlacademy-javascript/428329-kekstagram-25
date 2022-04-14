import './full-photo-view.js';
import './photo-editor-view.js';
import './photo-editor-form-validate.js';
import './photo-scale.js';
import './photo-effects.js';

import {getData} from './api.js';
import {createPhotoDescriptions} from './thumbnail.js';
import {showError} from './util.js';

getData(createPhotoDescriptions, showError);


