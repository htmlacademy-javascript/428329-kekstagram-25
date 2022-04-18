const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_AMOUNT = 5;
const MAX_HASHTAGS_AMOUNT_TEXT = 'Максимальное количество хэштегов - 5';
const RECURRING_HASHTAGS_ERROR_TEXT = 'Удалите повторяющиеся хэштеги';
const CORRECT_HASHTAG_ERROR_TEXT = 'Проверьте правильность написания хэштегов';
const MAX_DESCRIPTION_LENGTH_TEXT = 'Длина комментария не должна превышать 140 символов.';
const REGULAR_EXPRESSION = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const uploadForm = document.querySelector('.img-upload__form');
const userHashtagsInput = document.querySelector('.text__hashtags');
const description = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('.img-upload__submit');

let isDescriptionValid = true;
let isHashtagInputValid = true;

const pristine = new Pristine (uploadForm, {
  classTo: 'img-upload__text-label',
  errorTextParent: 'img-upload__text-label',
  errorTextClass: 'img-upload__error'
});

const validateDescription = (value) => {
  isDescriptionValid = value.length <= MAX_DESCRIPTION_LENGTH;

  submitButton.disabled = !(isDescriptionValid && isHashtagInputValid);

  return isDescriptionValid;
};

const checkValue = (value) => {
  const hashtags = value.split(' ');
  const dublicates = [];
  let error = false;

  if (hashtags[0] === '') {
    hashtags.splice(0);
  }

  if (hashtags.length > MAX_HASHTAGS_AMOUNT) {
    return {
      isValid: false,
      errorText: MAX_HASHTAGS_AMOUNT_TEXT,
    };
  }

  hashtags.forEach((hashtag) => {
    if (!REGULAR_EXPRESSION.test(hashtag)) {
      error = true;
    }
    if (dublicates.includes(hashtag.toLowerCase())) {
      dublicates.push(hashtag);
    }
  });

  if (hashtags.length !== dublicates.length ) {
    return {
      isValid: false,
      errorText: RECURRING_HASHTAGS_ERROR_TEXT,
    };
  }

  if (error) {
    return {
      isValid: false,
      errorText: CORRECT_HASHTAG_ERROR_TEXT,
    };
  }

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
  isHashtagInputValid = isValid;

  submitButton.disabled = !(isDescriptionValid && isHashtagInputValid);

  return isHashtagInputValid;
};

const getTextError = (value) => {
  const {errorText} = checkValue(value);
  return errorText;
};

pristine.addValidator(description, validateDescription, MAX_DESCRIPTION_LENGTH_TEXT);
pristine.addValidator(userHashtagsInput, validateHashtag, getTextError);

export {pristine};

