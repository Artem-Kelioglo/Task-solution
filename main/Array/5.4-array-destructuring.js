// Разбиение массива на отдельные переменные
// Задача
// Найти удобный способ одновременно присвоить значения элементов массива
// нескольким переменным, чтобы не приходилось присваивать значение каждой
// переменной в отдельности.

{
  let arr = [1, 2, 3, 4];
  let [arr1, arr2, arr3, ...rest] = arr;
}
