const form = document.querySelector('.img-upload__form');
const comment = form.querySelector('.text__description');
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'img-upload__text--valid',
  errorClass: 'img-upload__text--invalid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

comment.addEventListener('change', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

//комментарий обязателен;
//длина комментария не может быть меньше 20 символов;
//длина комментария не может составлять больше 140 символов.
