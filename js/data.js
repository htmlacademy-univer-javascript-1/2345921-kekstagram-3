import { getRandomPositiveInteger } from './util.js';

const PHOTO_COUNT = 25;
const DESCRIPTION = [
  'это я отдыхаю',
  'с подружками',
  'я люблю поесть',
  'Если смогу, я сделаю это. Конец истории.',
  'Любите меня, от этого я буду сиять еще ярче!',
  'Если у вас есть глаза, взгляните на меня сейчас!',
  'Всегда помните: вы живете только один раз',
  'Я просто прямой потомок грандиозности.'
];

const createPhoto = (i) =>{
  const photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
  return photo;
};

const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTO_COUNT; i++){
    photos.push(createPhoto(i, `Photo №${i}`));
  }
  return photos;
};

//const similarPhsotos = generatePhotos();
export {generatePhotos};
