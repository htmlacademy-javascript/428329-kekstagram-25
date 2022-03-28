import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancelButton = document.querySelector('#upload-cancel');

const openPhotoEditor = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
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
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEditorEscKeydown);
  document.removeEventListener('click', onButtonClose);
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


