// Объект с ифнормацией о пользователе
const userInfo = {
  name: "",
  car: "",
  about: "",
};


// Получение данных с input
const getButtonValue = document.querySelector(".btn");


function getValue() {
  //Данные с input и внесение в раннее созданный объект
  const valueName = document.querySelector(".inputName").value;
  console.log(`Мое имя: ${valueName}`);
  userInfo.name = valueName;

  // Данные с Select
  const valueCar = document.querySelector("#cars").value;
  console.log(`Выбрал машину ${valueCar}`);
  userInfo.car = valueCar;

  // Данные с textarea
  const valueAbout = document.querySelector('#about').value;
  console.log(`Инфа о себе ${valueAbout}`);
  userInfo.about = valueAbout;

  console.log(userInfo);
}


getButtonValue.addEventListener("click", getValue);
