// const user1 = {
//   name: 'Alex',
//   age: 25,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }
// };

// const user2 = {
//   name: 'Alisa',
//   age: 23,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }
// };

// user1.sayHello()
// user2.sayHello()

// class User {
//   #password;
//   #balance;

//   constructor(name, age, password, job = 'Mentory Edu') {
//     this.name = name;
//     this.age = age;
//     this.#password = password;
//     this.job = job;
//     this.#balance = {
//       card: '',
//       amount: 0,
//     };
//   }

//   getBalance() {
//     return this.#balance.amount;
//   }

//   addBalance(amount) {
//     this.#balance.amount += amount;
//   }

//   sayHello() {
//     console.log(this);

//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }

//   chechPassword(pass) {
//     return this.#password === pass;
//   }

//   resetPassword(oldPass, newPass) {
//     if (this.#password === oldPass) {
//       this.#password = newPass;
//     }
//   }
// }

// const user1 = new User('Alex', 25, 'alex123', 'AITU')
// const user2 = new User('Alisa', 23, 'alisa123')

// console.log({
//   user1,
//   user2
// });

// console.log('Проверяем пароль 3253453', user1.chechPassword('3253453'));
// console.log('Проверяем пароль alex123', user1.chechPassword('alex123'));
// console.log('Пытаемся поменять пароль с не корректными данными')
// user1.resetPassword('43534543', '43634634');
// console.log('Проверяем пароль alex123', user1.chechPassword('alex123'));
// console.log('Пытаемся поменять пароль с корректными данными')
// user1.resetPassword('alex123', '43634634');
// console.log('Проверяем пароль alex123', user1.chechPassword('alex123'));
// console.log('Проверяем пароль 43634634', user1.chechPassword('43634634'));

// user1.sayHello()
// user2.sayHello()

// Нюанс при работе с методами классов
// const mySayHello = user1.sayHello;
// mySayHello()

// console.log(user1.#balance);

// console.log(user1.getBalance());
// user1.addBalance(1000)
// console.log(user1.getBalance());
// user1.addBalance(5000)
// console.log(user1.getBalance());

// class Student {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 2) return
//     this._name = value;
//   }
// }

// const st = new Student('Alex');

// console.log(st);
// console.log(st.name);
// st.name = 'd'
// console.log(st.name);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   voice() {
//     return `${this.name} издаёт звук`
//   }
// }

// class Dog extends Animal {
//   constructor(name, secure) {
//     super(name)

//     this.secure = secure
//   }

//   voice() {
//     return `${this.name}, лает`
//   }

//   secureAction() {
//     return `${this.name} охраняет ${this.secure}`
//   }
// }

// const an = new Animal('Животное', 'хозяина');
// const dg = new Dog('Собака', 'хозяина');

// console.log(an.voice());
// console.log(dg.secureAction());

// class Human {
//   name = "Alex";
//   age = 25;

//   static HUMAN_OBJ_COUNT = 0;
//   static getObjCount() {
//     return this.HUMAN_OBJ_COUNT;
//   }

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// sayMyName() {
//   console.log(`My name is ${this.name}`);
// }
// sayMyAge() {
//   console.log(`My age is ${this.age}`);
// }
// }
// const human1 = new Human("Alisa", 23);
// Human.HUMAN_OBJ_COUNT += 25;

// console.log(Human.getObjCount());

// const human2 = new Human("Max", 30);
// const human3 = new Human("Bart", 27);
// const human4 = new Human("Bingo", 15);
// const human5 = new Human("Brok", 20);

// console.log(human1, human2, human3, human4, human5);

// human1.sayMyName()
// human1.sayMyAge()

// Сеттеры и геттеры!!!!!!!!------------------------------------------------------

// class Human {
//   constructor(name, age, city, country, street = '') {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//     this.street = street;
//   }

//   get fullAdress() {
//     return `${this.country} - ${this.city} - ${this.street}`;
//   }

//   set fullAdress({ street }) {
//     this.street = street;
//   }
// }

// const human1 = new Human("Denis", 99, "Almaty", "Kazakhstan",);
// console.log(human1.fullAdress);
// human1.fullAdress = { street: "Abay" };

// console.log(human1.fullAdress);

// Наследование классов!-----------------------------------------------------------

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }


  sayName () {
    console.log(this.name);
    
  }
}

class Worker extends Human {
  constructor(name, age, job, salary) {
    super(name, age)
    this.job = job;
    this.salary = salary;
  }
};


const worker = new Worker('Denis', 25, 'Developer', 500)
worker.sayName()

console.log(worker);

