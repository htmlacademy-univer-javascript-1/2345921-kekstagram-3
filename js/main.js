import{generatePhotos} from './data.js';
import {renderPhoto} from './photo-render.js';
import './form.js';
import './validation-for-comment.js';
import './scale-controller.js';
import './filter-controller.js';

const post = generatePhotos(25);
renderPhoto(post);
//eslint-disable-next-line
