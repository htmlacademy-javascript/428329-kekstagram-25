import './data.js';
import './full-photo-view.js';
import './photo-editor-view.js';
import './photo-editor-form-validate.js';
import './photo-scale.js';
import './photo-effects.js';

import {createLoader} from './load.js';
import {createPhotoDescriptions} from './thumbnail.js';

const errorCode = document.querySelector('.error-message__title');
const errorDescription = document.querySelector('.error-message__text');
const errorWrapper = document.querySelector('.server-error');

const onError = (value) => {
  errorWrapper.classList.remove('hidden');
  value = String(value);
  errorCode.textContent = value.substr(7, 3);
  errorDescription.textContent = value.substr(0);
};

createLoader(createPhotoDescriptions, onError);
