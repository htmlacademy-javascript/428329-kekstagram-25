import {isEscapeKey, checkActiveElement} from './util.js';
import {viewUploadMessage, createLoadingMessage, hideLoadingMessage} from './upload-messages.js';
import {onScaleSmallerClick, onScaleBiggerClick, makeScaleDefault} from './photo-scale.js';
import {onEffectClick, makeEffectDefault} from './photo-effects.js';
import {pristine} from './photo-editor-form-validate.js';
import {chooseFile} from './photo-loading.js';
import {sendData} from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');

const scaleSmallerControl = document.querySelector('.scale__control--smaller');
const scaleBiggerControl = document.querySelector('.scale__control--bigger');

const effects = document.querySelectorAll('.effects__radio');

const onEditorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditor();
  }
};

const onButtonClose = () => {
  closePhotoEditor();
};

const openPhotoEditor = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  chooseFile();

  scaleSmallerControl.addEventListener('click', onScaleSmallerClick);
  scaleBiggerControl.addEventListener('click', onScaleBiggerClick);

  for (const effect of effects) {
    effect.addEventListener('click', onEffectClick);
  }

  document.addEventListener('keydown', onEditorEscKeydown);
  uploadCancelButton.addEventListener('click', onButtonClose);
};

function closePhotoEditor () {
  if (checkActiveElement(descriptionInput) && checkActiveElement(hashtagInput)) {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onEditorEscKeydown);
    uploadCancelButton.removeEventListener('click', onButtonClose);

    scaleSmallerControl.removeEventListener('click', onScaleSmallerClick);
    scaleBiggerControl.removeEventListener('click', onScaleBiggerClick);

    for (const effect of effects) {
      effect.removeEventListener('click', onEffectClick);
    }

    makeScaleDefault();
    makeEffectDefault();
    uploadForm.reset();
    pristine.reset();
    submitButton.disabled = false;
  }
}

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  createLoadingMessage();
  sendData(
    () => {
      hideLoadingMessage();
      closePhotoEditor();
      viewUploadMessage('success');
    },
    () => {
      hideLoadingMessage();
      closePhotoEditor();
      viewUploadMessage('error');
    },
    new FormData(evt.target),
  );
});

uploadFile.addEventListener('input', openPhotoEditor);
