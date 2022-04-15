const scaleSmallerControl = document.querySelector('.scale__control--smaller');
const scaleBiggerControl = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');

let scaleValue = scaleControlValue.value.substring(0, scaleControlValue.value.length - 1);

const addTransformStyle = (value) => {
  const styleTransform = `scale(${  value * 0.01  })`;
  imgUploadPreview.style.transform = styleTransform;
};

const makeScaleDefault = () => {
  scaleControlValue.value = '100%';
  scaleValue = 100;
  addTransformStyle(scaleValue);
};

const makeScaleSmaller = () => {
  if (scaleValue >= 50) {
    scaleValue = scaleValue - 25;
    scaleControlValue.value = `${scaleValue  }%`;
    addTransformStyle(scaleValue);
  }
};

const makeScaleBigger = () => {
  if (scaleValue <= 75) {
    scaleValue = scaleValue + 25;
    scaleControlValue.value = `${scaleValue  }%`;
    addTransformStyle(scaleValue);
  }
};

const onScaleSmallerClick = () => {
  if (scaleSmallerControl) {
    makeScaleSmaller();
  }
};

const onScaleBiggerClick = () => {
  if (scaleBiggerControl) {
    makeScaleBigger();
  }
};

export {onScaleSmallerClick, onScaleBiggerClick, makeScaleDefault};
