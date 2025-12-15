const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const countTitle = document.querySelector(".counter");
// let clicks = 0;

// function clickFunc(e) {
//     console.log('Клик по кнопке');

//   if (clicks > 5) {
//     btn.removeEventListener('click', clickFunc)
//   } else {
//     clicks++;
//     console.log("Был клик по кнопке", clicks);
//   }
// }

// btn.addEventListener("click", clickFunc);

// function getText() {
//   console.log("Была вызвана функция getText");

//   const myTimeOut = setTimeout(() => {
//     console.log("Отработал тайм-аут в 2 секунды");
//     clearTimeout(myTimeOut);
//   }, 2000);
// }

// btn.addEventListener("click", getText);

// let count = 9;

// function getCount() {
//   const myInterval = setInterval(() => {
//     if (count <= 3) {
//       countTitle.style.color = "red";
//     }
//     if (count < 0) {
//       clearInterval(myInterval);
//     } else {
//       countTitle.textContent = count--;
//     }
//   }, 1000);
// }

// function cleaner() {
//   clearInterval(myInterval);
// }

// btn.addEventListener("click", getCount);
// btn2.addEventListener("click", cleaner);


// const now = new Date().toLocaleDateString();

setInterval(() => {
    countTitle.textContent = new Date().toLocaleString();
}, 500)

// console.log(now);
