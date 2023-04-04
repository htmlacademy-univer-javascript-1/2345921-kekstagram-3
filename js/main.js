import{generatePhotos} from './data.js';
import {renderPhoto} from './picture-drawer.js';
import './form.js';
import './validation-for-comment.js';

const post = generatePhotos(25);
renderPhoto(post);
//eslint-disable-next-line
