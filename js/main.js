import{generatePhotos} from './data.js';
import {renderPhoto} from './pictureDrawer.js';

const post = generatePhotos(25);
renderPhoto(post);
//eslint-disable-next-line
