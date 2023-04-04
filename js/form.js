import{isEscapeKey} from './util.js';

const buttonUploadPicture = document.querySelector('#upload-file');
const buttonUploadCancel= document.querySelector('#upload-cancel');

buttonUploadPicture.addEventListener('change', () => {
  openWindow();
});

buttonUploadCancel.addEventListener('click', () => {
  closeWindow();
});

const closeOnButton = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

function closeWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
}

function cleanForm() {
  buttonUploadPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

