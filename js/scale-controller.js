const scaleIncrease = document.querySelector('.scale__control--bigger');
const scaleDecrease = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const imgValue = document.querySelector('.img-upload__preview');

const STEP= 25;
document.querySelector('.scale__control--value').value = '100%';

const changeScale = (newScale) => {
  scaleValue.value = `${newScale}%`;
  imgValue.style.transform =`scale(${newScale/100})`;
};

scaleIncrease.addEventListener('click', () => {
  const currentScale = parseInt(scaleValue.value, 10);
  if (currentScale < 100) {
    const newCurrentScale = currentScale + STEP;
    changeScale(newCurrentScale);
  }
});

scaleDecrease.addEventListener('click', () => {
  const currentScale = parseInt(scaleValue.value, 10);
  if (currentScale > STEP) {
    const newCurrentScale = currentScale - STEP;
    changeScale(newCurrentScale);
  }
});
