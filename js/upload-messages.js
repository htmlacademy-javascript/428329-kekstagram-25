import {isEscapeKey} from './util.js';

let type;

const onKeydownPress = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onContainerClick = (evt) => {
  if (evt.target.classList.contains(type)) {
    closeMessage();
  }
};

const viewUploadMessage = (uploadResult) => {
  type = uploadResult;
  const messageContainer = document.createElement('div');
  const messageTemplate = document.querySelector(`#${type}`);

  messageContainer.append(messageTemplate.content.cloneNode(true));
  document.body.append(messageContainer);

  const closeButton = document.querySelector(`.${type}__button`);

  closeButton.addEventListener('click', () => messageContainer.remove());

  document.addEventListener('keydown', onKeydownPress);
  document.addEventListener('click', onContainerClick);
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

function closeMessage () {
  const uploadMessage = document.querySelector(`.${type}`);
  uploadMessage.remove();
  document.removeEventListener('click', onKeydownPress);
  document.removeEventListener('click', onContainerClick);
}

export {hideLoadingMessage, createLoadingMessage, viewUploadMessage};
