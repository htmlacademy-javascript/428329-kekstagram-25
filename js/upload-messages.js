const viewSuccessUploadMessage = () => {
  const successMessageContainer = document.createElement('div');
  const successMessageTemplate = document.querySelector('#success');

  successMessageContainer.append(successMessageTemplate.content.cloneNode(true));
  document.body.append(successMessageContainer);

  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', () => {
    successMessageContainer.remove();
  });
};

const viewFailUploadMessage = () => {
  const failMessageContainer = document.createElement('div');
  const failMessageTemplate = document.querySelector('#error');

  failMessageContainer.append(failMessageTemplate.content.cloneNode(true));
  document.body.append(failMessageContainer);

  const failButton = document.querySelector('.error__button');
  failButton.addEventListener('click', () => {
    failMessageContainer.remove();
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

export {hideLoadingMessage, createLoadingMessage, viewSuccessUploadMessage, viewFailUploadMessage};
