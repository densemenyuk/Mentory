// const obj = { a: 1, b: 2 };
// for (let key in obj) {
//   console.log(key);
// }

// console.log(x);

// let x = 10;

// function foo() {
//   return 42;
// }

// console.log(foo());

// Promise.resolve(1)
//   .then((x) => x + 1) // 1 → 2
//   .then((x) => {
//     throw new Error("Ошибка!");
//   }) // выбрасываем ошибку
//   .catch((err) => console.log(err.message)) // ловим ошибку
//   .then((x) => console.log(x));

// let x = 10;
// if (true) {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// const user5 = {
//   name: "John",
//   sayHi() {
//     console.log(this.name);
//   },
// };
// setTimeout(user5.sayHi.bind(user5), 1000);

// const user6 = {
//   name: "John",
//   sayHi() {
//     console.log(this.name);
//   },
// };
// setTimeout(() => user6.sayHi(), 1000);

const loadTodoFormElement = document.querySelector(".load-todo-form");
const resultElement = document.querySelector(".result");

loadTodoFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log("responce:", response);

      return response.json();
    })
    .then((json) => {
      console.log(json);

      const { id, title, completed } = json;

      resultElement.innerHTML = `
        <input
          id="todo-${id}"
          type="checkbox"
          ${completed ? "checked" : ""}
        />
        <label for="todo-${id}">${title}</label>
      `;
    });
});
