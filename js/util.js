//функция из 4.14
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export {getRandomPositiveInteger};
//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины
//введённого комментария, но должна быть универсальна. Пример использования функции:
//const isStrLengthCorrect = (curLength, maxValue) => curLength.length <= maxValue;
//isStrLengthCorrect('LOLOLO', 10);
