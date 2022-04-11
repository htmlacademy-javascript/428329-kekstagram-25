const PhotoEffect = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const filterSlider = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');
const effectField = document.querySelector('.img-upload__effect-level');

noUiSlider.create(filterSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectField.classList.add('hidden');

const addFilterStyle = (filterName, value) => {
  let styleFilter;
  switch (filterName) {
    case PhotoEffect.CHROME:
      styleFilter = `grayscale(${  value  })`;
      break;
    case PhotoEffect.SEPIA:
      styleFilter = `sepia(${  value  })`;
      break;
    case PhotoEffect.MARVIN:
      styleFilter = `invert(${  value  }%)`;
      break;
    case PhotoEffect.PHOBOS:
      styleFilter = `blur(${  value  }px)`;
      break;
    case PhotoEffect.HEAT:
      styleFilter = `brightness(${  value  })`;
      break;
  }
  imgUploadPreview.style.filter = styleFilter;
};

const setEffect = (effectName) => {
  switch (effectName.value) {
    case PhotoEffect.CHROME:
      effectField.classList.remove('hidden');
      filterSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      filterSlider.noUiSlider.on('update', () => {
        filterValue.value = filterSlider.noUiSlider.get();
        addFilterStyle(effectName.value, filterValue.value);
      });
      break;
    case PhotoEffect.SEPIA:
      effectField.classList.remove('hidden');
      filterSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      filterSlider.noUiSlider.on('update', () => {
        filterValue.value = filterSlider.noUiSlider.get();
        addFilterStyle(effectName.value, filterValue.value);
      });
      break;
    case PhotoEffect.MARVIN:
      effectField.classList.remove('hidden');
      filterSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
        format: {
          to: function (value) {
            return value;
          },
          from: function (value) {
            return parseFloat(value);
          },
        },
      });
      filterSlider.noUiSlider.on('update', () => {
        filterValue.value = filterSlider.noUiSlider.get();
        addFilterStyle(effectName.value, filterValue.value);
      });
      break;
    case PhotoEffect.PHOBOS:
      effectField.classList.remove('hidden');
      filterSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      filterSlider.noUiSlider.on('update', () => {
        filterValue.value = filterSlider.noUiSlider.get();
        addFilterStyle(effectName.value, filterValue.value);
      });
      break;
    case PhotoEffect.HEAT:
      effectField.classList.remove('hidden');
      filterSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      filterSlider.noUiSlider.on('update', () => {
        filterValue.value = filterSlider.noUiSlider.get();
        addFilterStyle(effectName.value, filterValue.value);
      });
      break;
    default:
      effectField.classList.add('hidden');
  }
};

const changeEffect = (effect) => {
  const className = `effects__preview--${  effect.value}`;
  imgUploadPreview.removeAttribute('class');
  imgUploadPreview.classList.add(className);
  setEffect(effect);
};

function onEffectClick () {
  changeEffect(this);
}

export {onEffectClick};
