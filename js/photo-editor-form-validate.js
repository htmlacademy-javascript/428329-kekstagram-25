import {contains} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const userHashtags = document.querySelector('.text__hashtags');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const hashtagsArray = userHashtags.value.split(' ');
  const dublicateArray = [];

  if (hashtagsArray.length > 5) {
    console.log('Максимальное количество хэштегов - 5');
  }

  hashtagsArray.forEach((hashtag) => {
    if (re.test(hashtag) === false) {
      console.log('Проверьте правильность написания хэштегов');
    }

    hashtag.toLowerCase();
    if (contains(dublicateArray, hashtag) === false) {
      dublicateArray.push(hashtag);
    }
  });
  if (hashtagsArray.length !== dublicateArray.length) {
    console.log('Удалите повторяющиеся хэштеги');
  }
});
