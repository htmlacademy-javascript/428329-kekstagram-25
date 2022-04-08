const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effects = document.querySelectorAll('.effects__radio');
const filterSlider = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');

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

filterSlider.classList.add('hidden');

const addFilterStyle = (filterName, value) => {
  let styleFilter;
  switch (filterName) {
    case 'chrome':
      styleFilter = `grayscale(${  value  })`;
      break;
    case 'sepia':
      styleFilter = `sepia(${  value  })`;
      break;
    case 'marvin':
      styleFilter = `invert(${  value  }%)`;
      break;
    case 'phobos':
      styleFilter = `blur(${  value  }px)`;
      break;
    case 'heat':
      styleFilter = `brightness(${  value  })`;
      break;
  }
  imgUploadPreview.style.filter = styleFilter;
};

const setEffect = (effectName) => {
  switch (effectName.value) {
    case 'chrome':
      filterSlider.classList.remove('hidden');
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
    case 'sepia':
      filterSlider.classList.remove('hidden');
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
    case 'marvin':
      filterSlider.classList.remove('hidden');
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
    case 'phobos':
      filterSlider.classList.remove('hidden');
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
    case 'heat':
      filterSlider.classList.remove('hidden');
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
      filterSlider.classList.add('hidden');
  }
};

function changeEffect (effect) {
  const className = `effects__preview--${  effect.value}`;
  imgUploadPreview.removeAttribute('class');
  imgUploadPreview.classList.add(className);
  setEffect(effect);
}

for (const effect of effects) {
  const onEffectClick = () => {
    if (effect) {
      changeEffect(effect);
    }
  };
  effect.addEventListener('click', onEffectClick);
}
