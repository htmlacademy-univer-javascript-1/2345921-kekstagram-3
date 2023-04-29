import{isEscapeKey} from './util.js';
import { resetEffect } from './filter-controller.js';

const buttonUploadPicture = document.querySelector('#upload-file');
const buttonUploadCancel= document.querySelector('#upload-cancel');

buttonUploadPicture.addEventListener('change', () => {
  openWindow();
});

buttonUploadCancel.addEventListener('click', () => {
  closeWindow(true);
});

const closeOnButton = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow(true);
  }
};

function openWindow() {
  document.querySelector('.scale__control--value').value = '100%';
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);

}
function cleanForm() {
  buttonUploadPicture.value = '';
  resetEffect();
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  document.querySelector('.scale__control--value').value = '100%';
}

function closeWindow(clean) {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  if (clean){
    cleanForm();
  }
}
