
import {contains} from './util.js';

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_AMOUNT = 5;
const MAX_HASHTAGS_AMOUNT_TEXT = 'Максимальное количество хэштегов - 5';
const RECURRING_HASHTAGS_ERROR_TEXT = 'Удалите повторяющиеся хэштеги';
const CORRECT_HASHTAG_ERROR_TEXT = 'Проверьте правильность написания хэштегов';

const uploadForm = document.querySelector('.img-upload__form');
const userHashtags = document.querySelector('.text__hashtags');
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
  const hashtagsArray = value.split(' ');
  const dublicateArray = [];
  let error = false;

  if (hashtagsArray[0] === '') {
    hashtagsArray.splice(0);
  }

  if (hashtagsArray.length > MAX_HASHTAGS_AMOUNT) {
    submitButton.disabled = true;
    return {
      isValid: false,
      errorText: MAX_HASHTAGS_AMOUNT_TEXT,
    };
  }

  hashtagsArray.forEach((hashtag) => {
    if (re.test(hashtag) === false) {
      error = true;
    }
    hashtag.toLowerCase();
    if (contains(dublicateArray, hashtag) === false) {
      dublicateArray.push(hashtag);
    }
  });

  if (hashtagsArray.length !== dublicateArray.length) {
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

pristine.addValidator(description, validateDescription, 'Длина комментария не должна превышать 140 символов.');
pristine.addValidator(userHashtags, validateHashtag, getTextError);
