
import {sendData} from './api.js';
import {showAlert} from './util.js';
import {closePhotoEditor} from './photo-editor-view.js';

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_AMOUNT = 5;
const MAX_HASHTAGS_AMOUNT_TEXT = 'Максимальное количество хэштегов - 5';
const RECURRING_HASHTAGS_ERROR_TEXT = 'Удалите повторяющиеся хэштеги';
const CORRECT_HASHTAG_ERROR_TEXT = 'Проверьте правильность написания хэштегов';
const MAX_DESCRIPTION_LENGTH_TEXT = 'Длина комментария не должна превышать 140 символов.';

const uploadForm = document.querySelector('.img-upload__form');
const userHashtagsInput = document.querySelector('.text__hashtags');
const description = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine (uploadForm, {
  classTo: 'img-upload__text-label',
  errorTextParent: 'img-upload__text-label',
  errorTextClass: 'img-upload__error'
});

const validateDescription = (value) => {
  if (value.length > MAX_DESCRIPTION_LENGTH) {
    submitButton.disabled = true;
    return false;
  }
  submitButton.disabled = false;
  return true;
};

const checkValue = (value) => {
  const hashtags = value.split(' ');
  const dublicates = [];
  let error = false;

  if (hashtags[0] === '') {
    hashtags.splice(0);
  }

  if (hashtags.length > MAX_HASHTAGS_AMOUNT) {
    submitButton.disabled = true;
    return {
      isValid: false,
      errorText: MAX_HASHTAGS_AMOUNT_TEXT,
    };
  }

  hashtags.forEach((hashtag) => {
    if (re.test(hashtag) === false) {
      error = true;
    }
    if (dublicates.includes(hashtag.toLowerCase()) === false) {
      dublicates.push(hashtag);
    }
  });

  if (hashtags.length !== dublicates.length) {
    submitButton.disabled = true;
    return {
      isValid: false,
      errorText: RECURRING_HASHTAGS_ERROR_TEXT,
    };
  }

  if (error) {
    submitButton.disabled = true;
    return {
      isValid: false,
      errorText: CORRECT_HASHTAG_ERROR_TEXT,
    };
  }

  submitButton.disabled = false;

  return {
    isValid: true,
    errorText: '',
  };
};

const validateHashtag = (value) => {
  if (value[value.length-1] === ' ') {
    value = value.substring(0, value.length-1);
  }
  const {isValid} = checkValue(value);
  return isValid;
};

const getTextError = (value) => {
  const {errorText} = checkValue(value);
  return errorText;
};

pristine.addValidator(description, validateDescription, MAX_DESCRIPTION_LENGTH_TEXT);
pristine.addValidator(userHashtagsInput, validateHashtag, getTextError);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    sendData(
      () => {
        closePhotoEditor();
      },
      () => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      },
      new FormData(evt.target),
    );
  }
});

