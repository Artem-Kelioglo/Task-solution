// Очистка массива
// Задача
// Удалить из массива все элементы — либо чтобы освободить память, либо для
// повторного использования массива.

{
  let array = [1, 2, 3, 4, 5];
  array.length = 0;
}
{
  let array = [1, 2, 3, 4, 5];
  array.splice(0);
}
