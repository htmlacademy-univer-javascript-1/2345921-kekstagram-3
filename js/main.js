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

//функция из 4.14
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины
//введённого комментария, но должна быть универсальна. Пример использования функции:
const isStrLengthCorrect = (curLength, maxValue) => curLength.length <= maxValue;
isStrLengthCorrect('LOLOLO', 10);


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

const similarPhsotos = generatePhotos();
//eslint-disable-next-line
console.log(similarPhsotos[6]);
