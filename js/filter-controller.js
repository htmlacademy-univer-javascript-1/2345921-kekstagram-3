const sliderElementer = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectButtons = document.querySelectorAll('.effects__radio');
const sliderBackground = document.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderElementer, {
  range: {
    'min': 0,
    'max': 1
  },
  start: 1,
  step:0.1
});

function updateSlider(min, max, step) {
  sliderElementer.noUiSlider.updateOptions({
    start: [max],
    range: {
      'min': min,
      'max': max
    },
    step:step
  });
}

sliderElementer.classList.add('hidden');
sliderBackground.classList.add('hidden');
let filter = 'none';

function addEffect(button) {
  button.addEventListener('change', ()=> {
    imgUploadPreview.classList.remove(`effects__preview--${filter}`);
    imgUploadPreview.classList.add(`effects__preview--${button.value}`);
    filter = button.value;
    sliderElementer.classList.remove('hidden');
    sliderBackground.classList.remove('hidden');
    switch (filter) {
      case 'chrome':
        effectValue.value = 1;
        updateSlider(0, 1, 0.1);
        imgUploadPreview.style.filter=`grayscale(${effectValue.value})`;
        break;
      case 'sepia':
        effectValue.value = 1;
        updateSlider(0, 1, 0.1);
        imgUploadPreview.style.filter=`sepia(${effectValue.value})`;
        break;
      case 'marvin':
        effectValue.value = 100;
        updateSlider(0, 100, 1);
        imgUploadPreview.style.filter=`invert(${effectValue.value}%)`;
        break;
      case 'phobos':
        effectValue.value = 3;
        updateSlider(0, 3, 0.1);
        imgUploadPreview.style.filter=`blur(${effectValue.value}px)`;
        break;
      case 'heat':
        effectValue.value = 3;
        updateSlider(1, 3, 0.1);
        imgUploadPreview.style.filter=`brightness(${effectValue.value})`;
        break;
      default:
        imgUploadPreview.style.filter = '';
        sliderElementer.classList.add('hidden');
        sliderBackground.classList.add('hidden');
        break;
    }
  });
}

for (let i = 0; i<effectButtons.length; i++) {
  addEffect(effectButtons[i]);
}

sliderElementer.noUiSlider.on('slide', () => {
  effectValue.value = sliderElementer.noUiSlider.get(true);
  switch(filter) {
    case 'chrome':
      imgUploadPreview.style.filter =`grayscale(${effectValue.value})`;
      break;
    case 'sepia':
      imgUploadPreview.style.filter =`sepia(${effectValue.value})`;
      break;
    case 'marvin':
      imgUploadPreview.style.filter =`invert(${effectValue.value}%)`;
      break;
    case 'phobos':
      imgUploadPreview.style.filter =`blur(${effectValue.value}px)`;
      break;
    case 'heat':
      imgUploadPreview.style.filter =`brightness(${effectValue.value})`;
      break;
  }
});

const resetEffect = () => {
  imgUploadPreview.classList.remove(`effects__preview--${filter}`);
  imgUploadPreview.style.filter = '';
  filter = 'none';
  imgUploadPreview.style.transform=`scale(${1})`;
  sliderElementer.classList.add('hidden');
  sliderBackground.classList.add('hidden');
  document.querySelector('#effect-none').checked = true;
};

export {resetEffect};
