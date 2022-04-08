import {isEscapeKey} from './util.js';
import {onScaleSmallerClick, onScaleBiggerClick} from './photo-scale.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');

const onInputBlur = (evt) => {
  if (evt === document.activeElement) {
    return false;
  }
  return true;
};

const openPhotoEditor = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  scaleControlSmaller.addEventListener('click', onScaleSmallerClick);
  scaleControlBigger.addEventListener('click', onScaleBiggerClick);
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

function closePhotoEditor () {
  if (onInputBlur(descriptionInput) && onInputBlur(hashtagInput)) {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onEditorEscKeydown);
    document.removeEventListener('click', onButtonClose);

    document.removeEventListener('click', onScaleSmallerClick);
    document.removeEventListener('click', onScaleBiggerClick);
  }
}

uploadFile.addEventListener('input', () => {
  openPhotoEditor();

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePhotoEditor();
    }
  });
  uploadCancelButton.addEventListener('click', () => {
    closePhotoEditor();
  });
});
