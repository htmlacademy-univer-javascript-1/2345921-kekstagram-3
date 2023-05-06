import {strLength} from './util.js';
import {sendData} from './api.js';

const form = document.querySelector('.img-upload__form');
const comment = (element) => !strLength(element, 19) && strLength(element, 140);
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'img-upload__text--valid',
  errorClass: 'img-upload__text--invalid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(document.querySelector('.text__description'), comment, 'Длина комментария от 20 до 140 символов!');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData(evt);
  }
});
