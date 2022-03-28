
import {contains} from './util.js';

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
  if (value.length > 140) {
    submitButton.disabled = true;
    return false;
  }
  submitButton.disabled = false;
  return true;
};

const validateHashtag = (value) => {
  const hashtagsArray = value.split(' ');
  const dublicateArray = [];
  let error = false;

  if (hashtagsArray.length > 5) {
    submitButton.disabled = true;
    return false;
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
    return false;
  }

  if (error) {
    submitButton.disabled = true;
    return false;
  }
  submitButton.disabled = false;
  return true;
};

const getTextError = (value) => {
  const hashtagsArray = value.split(' ');
  const dublicateArray = [];
  let error = false;

  if (hashtagsArray.length > 5) {
    return 'Максимальное количество хэштегов - 5';
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

  if (error) {
    return 'Проверьте правильность написания хэштегов';
  }

  if (hashtagsArray.length !== dublicateArray.length) {
    return 'Удалите повторяющиеся хэштеги';
  }
};

pristine.addValidator(description, validateDescription, 'Длина комментария не должна превышать 140 символов.');
pristine.addValidator(userHashtags, validateHashtag, getTextError);
