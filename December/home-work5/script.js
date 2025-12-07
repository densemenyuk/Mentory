// 1. Обмен значениями двух переменных
// Создать две переменные a и b и поменять их значения местами без использования третьей переменной.

let a = 5;
let b = 10;
console.log(`a = ${a}, b = ${b}`);

[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`);

// 2. Проверка чётного или нечётного числа
// Написать функцию isEven(num), которая возвращает:

// true — если число чётное

// false — если нечётное

arr = [2, 4, 2345, 127, 437, 47, 45, 86, 20];

function number() {
  arr.forEach((element) => {
    if (element % 2 == 0) {
      console.log(`${element} это четное число`);
    } else {
      console.log(`${element} это нечетное число`);
    }
  });
}
number();

// 3. Сумма чисел от 1 до N
// Написать функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n.

// Пример:
// sumTo(5) → 15

function sumNumber(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  console.log(`Сумма ${sum}`);
}

sumNumber(10);

// 4. Переворот строки
// Написать функцию reverseString(str), которая переворачивает строку.

// Пример:
// "hello" → "olleh"

let text = "hello world";

function reverseText() {
  let reversed = "";
  for (i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  console.log(reversed);
}

reverseText();

// 5. Фильтрация массива по чётным числам
// Написать функцию filterEven(arr), которая возвращает новый массив только с чётными значениями.

arr2 = [23,6,13, 44, 23456, 1272, 4347, 47, 45, 86, 20, 46, 28, 21, 44, 22, 90, 86];

function newArray() {
  const array = [];
  arr2.forEach((element) => {
    if (element % 2 == 0) {
      array.push(element);
    }
  });
  console.log(array);
}
newArray();
