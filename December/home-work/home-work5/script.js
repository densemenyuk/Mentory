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

function isEven(num) {
  return (num % 2 == 0);
};

console.log(isEven(9));

// 3. Сумма чисел от 1 до N
// Написать функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n.

// Пример:
// sumTo(5) → 15

function sumNumber(number) {
  let sum = 1;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumber(10));

// 4. Переворот строки
// Написать функцию reverseString(str), которая переворачивает строку.

// Пример:
// "hello" → "olleh"

// let text = "hello world";

function reverseText(arg) {
  let reversed = "";
  for (let i = arg.length - 1; i >= 0; i--) {
    reversed += arg[i];
  };
  return reversed;
  // console.log(reversed);
};

console.log(reverseText('hello world'));


// 5. Фильтрация массива по чётным числам
// Написать функцию filterEven(arr), которая возвращает новый массив только с чётными значениями.

// arr2 = [
//   23, 6, 13, 44, 234, 1272, 4347, 47, 45, 86, 20, 46, 28, 21, 44, 22, 90, 86, 2,
// ];

function filterEven(arr) {
  const array = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      array.push(element);
    }
  });
  return array;
}

console.log(filterEven([12,56,11,23,56,20,11,13]));

// 6. Конвертер температуры
// Создать 2 функции:

// celsiusToFahrenheit(c)

// fahrenheitToCelsius(f)

// Формулы:
// F = C * 9/5 + 32
// C = (F - 32) * 5/9

function fahrenheitToCelsius(f) {
 return c = ((f - 32) * 5) / 9;
  // console.log(`Температура из фаренгейтов по цельсию ${c}`);
}
console.log( fahrenheitToCelsius(50));


function celsiusToFahrenheit(c) {
  return f = (c * 9) / 5 + 32;
  // console.log(`Температура из цельсия по фаренгейту ${f}`);
}
console.log(celsiusToFahrenheit(30));


// 7. Проверка строки на палиндром
// Написать функцию isPalindrome(str), которая:

// игнорирует пробелы

// игнорирует регистр

// возвращает true, если строка читается одинаково в обе стороны

// Пример:
// "Race car" → true
// "Hello" → false

const regex = /[^А-Яа-яA-Za-z0-9]/g;

const isPalindrome = (str) => {
  const string = str.toLowerCase().replace(regex, "");
  const reversedString = string.split("").reverse().join("");

  return string === reversedString;
};

console.log(isPalindrome("race car"));
console.log(isPalindrome("home"));

// 8. Сумма всех элементов массива (for)
// Написать функцию sumArray(arr), которая с помощью обычного цикла for возвращает сумму всех чисел массива.

// arr2 = [
//   23, 6, 13, 44, 234, 1272, 4347, 47, 45, 86, 20, 46, 28, 21, 44, 22, 90, 86, 2,
// ];

function sumNumberArray(arg2) {
  let sum = 0;
  for (let i = 0; i < arg2.length; i++) {
    sum += arg2[i];
  }
  return sum;
}

console.log(sumNumberArray([1,1,1,1]));

// 9. Найти самое длинное слово в массиве строк (for…of)
// Написать функцию longestWord(words), которая с помощью for…of находит самое длинное слово.

// Пример:
// ["apple", "banana", "kiwi"] → "banana"

// const fruitArr = [
//   "apple",
//   "banana",
//   "kiwi",
//   "Pineapple",
//   "Mango",
//   "Persimmon",
//   "Passion fruit",
// ];

function longestWord(arg3) {
  let checkWord = "";
  for (const fruit of arg3) {
    if (fruit.length > checkWord.length) {
      checkWord = fruit;
    }
  }
  return checkWord;
};
console.log(longestWord([
  "apple",
  "banana",
  "kiwi",
  "Pineapple",
  "Mango",
  "Persimmon",
  "Passion fruit",
]));

// 10. Подсчитать количество свойств в объекте (for…in)
// Написать функцию countProps(obj), которая возвращает число ключей объекта.

// Пример:
// { a: 1, b: 2, c: 3 } → 3

// const numbers = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

function countProps(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  return count;
}
console.log(countProps({a:1, b:2, c:3}));

// 11. Вывести числа от 1 до N (while)
// Написать функцию printTo(n), которая выводит в консоль числа от 1 до n с помощью цикла while.


function printTo(n) {
  let count = 1;
  while (count < n) {
    console.log(`Число равно ${count}`);
    count++;
  }
}

printTo(10);

// 12. Найти число в массиве вручную (без includes)
// Использовать цикл (любой: for, for…of, while).
// Функция manualFindIndex(arr, value) должна вернуть:

// index, найденного элемента

// undefined— если элемент не найден

// Пример:
// manualFindIndex([1,2,3], 2) → 1

// Решение прислать ссылкой на исходник в github с JS файлом где будет оформлено
// // Задача в комментарии и снизу решение
// Либо на платформе аналогичным образом в решении оформить код

// Особое внимание уделить тексту задачи и внимательно перепроверять работоспособность кода и соответствие задаче.

// const arr = [1, 2, 3, 4, 5];

function manualFindIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i
    };
  } ;
};

console.log(manualFindIndex([1, 2, 3, 4, 5], 4));
