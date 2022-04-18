const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('input[type=file]');
const preview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const chooseFile = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const isMatched = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (isMatched) {
    preview.src = URL.createObjectURL(file);
    for (let i = 0; i < effectsPreview.length; i++) {
      effectsPreview[i].style.backgroundImage = `url("${ URL.createObjectURL(file)  }"`;
    }
  }
};

export {chooseFile};
