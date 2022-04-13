import {isEscapeKey} from './util.js';
import {onScaleSmallerClick, onScaleBiggerClick} from './photo-scale.js';
import {onEffectClick} from './photo-effects.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');

const scaleSmallerControl = document.querySelector('.scale__control--smaller');
const scaleBiggerControl = document.querySelector('.scale__control--bigger');
const effects = document.querySelectorAll('.effects__radio');

const onInputBlur = (evt) => {
  if (evt === document.activeElement) {
    return false;
  }
  return true;
};

const onEditorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditor();
  }
};

const onButtonClose = () => {
  if (uploadCancelButton) {
    closePhotoEditor();
  }
};

const openPhotoEditor = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  scaleSmallerControl.addEventListener('click', onScaleSmallerClick);
  scaleBiggerControl.addEventListener('click', onScaleBiggerClick);

  for (const effect of effects) {
    effect.addEventListener('click', onEffectClick);
  }

  document.addEventListener('keydown', onEditorEscKeydown);
  uploadCancelButton.addEventListener('click', onButtonClose);
};

function closePhotoEditor () {
  if (onInputBlur(descriptionInput) && onInputBlur(hashtagInput)) {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onEditorEscKeydown);
    document.removeEventListener('click', onButtonClose);

    document.removeEventListener('click', onScaleSmallerClick);
    document.removeEventListener('click', onScaleBiggerClick);

    for (const effect of effects) {
      effect.addEventListener('click', onEffectClick);
    }
  }
}

uploadFile.addEventListener('input', openPhotoEditor);
