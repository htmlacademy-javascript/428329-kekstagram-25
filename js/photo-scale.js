const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');

let scaleValue = scaleControlValue.value.substring(0, scaleControlValue.value.length - 1);

const onScaleControlSmaller = () => {
  if (scaleControlSmaller) {
    makeScaleSmaller();
  }
};

const onScaleControlBigger = () => {
  if (scaleControlBigger) {
    makeScaleBigger();
  }
};

const addTransformStyle = (value) => {
  const styleTransform = `scale(${  value * 0.01  })`;
  imgUploadPreview.style.transform = styleTransform;
};

function makeScaleSmaller ()  {
  if (scaleValue >= 50) {
    scaleValue = scaleValue - 25;
    scaleControlValue.value = `${scaleValue  }%`;
    addTransformStyle(scaleValue);
  }
}

function makeScaleBigger ()  {
  if (scaleValue <= 75) {
    scaleValue = scaleValue + 25;
    scaleControlValue.value = `${scaleValue  }%`;
    addTransformStyle(scaleValue);
  }
}

export {onScaleControlSmaller, onScaleControlBigger};
