//Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины
//введённого комментария, но должна быть универсальна. Пример использования функции:

function maxLength(str, maxL){
  if (str.length <= maxL){
    console.log(str.length);
    return true;
  }
  return false;
}
