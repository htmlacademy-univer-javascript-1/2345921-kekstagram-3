import {renderPhoto} from './photo-render.js';
import {showAlert} from './util.js';
import {isFail, isSuccess} from './error-controller.js';
import {closeWindow} from './form.js';

const getPicturesFromServer = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => renderPhoto(response))
    .catch(() => showAlert('Ошибка загрузки изображений!'));
};

const sendData = (evt) => {
  const formData = new FormData(evt.target);
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        closeWindow(true);
        isSuccess();
      } else {
        closeWindow(false);
        isFail();
      }
    });
};

export {getPicturesFromServer, sendData};
