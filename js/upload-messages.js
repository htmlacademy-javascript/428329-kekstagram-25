import {isEscapeKey} from './util.js';

const viewUploadMessage = (uploadResult) => {
  const messageContainer = document.createElement('div');
  const messageTemplate = document.querySelector(`#${uploadResult}`);

  messageContainer.append(messageTemplate.content.cloneNode(true));
  document.body.append(messageContainer);

  const closeButton = document.querySelector(`.${uploadResult}__button`);

  closeButton.addEventListener('click', () => messageContainer.remove());

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageContainer.remove();
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.closest(`.${uploadResult}`).length ) {
      return;
    }
    messageContainer.remove();
    (`.${  uploadResult}`).fadeOut();
  });

};

const createLoadingMessage = () => {
  const loadingMessageContainer = document.createElement('div');
  const loadingMessageTemplate = document.querySelector('#messages');

  loadingMessageContainer.append(loadingMessageTemplate.content.cloneNode(true));
  document.body.append(loadingMessageContainer);
};

const hideLoadingMessage = () => {
  const loadingMessage = document.querySelector('.img-upload__message');
  loadingMessage.remove();
};

export {hideLoadingMessage, createLoadingMessage, viewUploadMessage};
