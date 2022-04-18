const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const STEP_SCALE_VALUE = 25;

const scaleControlValue = document.querySelector('.scale__control--value');

const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');

let scaleValue = scaleControlValue.value.substring(0, scaleControlValue.value.length - 1);

const addTransformStyle = (value) => {
  const styleTransform = `scale(${  value * 0.01  })`;
  imgUploadPreview.style.transform = styleTransform;
};

const makeScaleDefault = () => {
  scaleControlValue.value = '100%';
  scaleValue = MAX_SCALE_VALUE;
  addTransformStyle(scaleValue);
};

const makeScaleSmaller = () => {
  if (scaleValue >= MIN_SCALE_VALUE + STEP_SCALE_VALUE) {
    scaleValue = scaleValue - STEP_SCALE_VALUE;
    scaleControlValue.value = `${scaleValue  }%`;
    addTransformStyle(scaleValue);
  }
};

const makeScaleBigger = () => {
  if (scaleValue <= MAX_SCALE_VALUE - STEP_SCALE_VALUE) {
    scaleValue = scaleValue + STEP_SCALE_VALUE;
    scaleControlValue.value = `${scaleValue  }%`;
    addTransformStyle(scaleValue);
  }
};

const onScaleSmallerClick = () => {
  makeScaleSmaller();
};

const onScaleBiggerClick = () => {
  makeScaleBigger();
};

export {onScaleSmallerClick, onScaleBiggerClick, makeScaleDefault};
