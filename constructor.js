// Функция по классификации относится к объектам и в нее можно записать и методы, и свойства

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} вышел`);
//     }
// }


// let ivan = new User('Ivan', 1); // в этой переменной лежит объект, а не функция
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// КОНТЕКСТ ВЫЗОВА -- это то, что окружает функцию, в каких условиях она вызывается.
// Функция без контекста вызова -- как бомж без места жительства. Дав ему жилье, мы дадим ему контекст вызова.
// Функция может вызываться 4 способами и в каждом случае контекст вызова будет отличаться:
// 1. способ, просто вызов функции (будет либо Window, либо undefined в 'use strict' моде) -- 
// function showThis() {
//     console.log(this);
// }

// showThis(); // Будет объект Window. Соотвественно эта фкнкиця без контекста как бомж, поэтому она себя выпонляется в объекте Window

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b; // Тут будет Nan, потому что функция sum не видит этих переменных
        
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// Для того, чтобы sum() увидела переменные a и b, нужно использовать замыкание функций, просто убрать this в ретурне.
// Таким образом, sum() не обнаружит эти пересенные в себе, а затем поднимится на уровень выше и уже там эти переменные увидит.
// USE STRICT 
// В новом стандарте es6 ввели режим 'use strict', в котором в случае, если функция не имеет контектса вызова, контекстом будет undefined,
// а не Window
// 'use strict'
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b; // Тут будет Nan, потому что функция sum не видит этих переменных
        
//     }
//     console.log(sum());
// }
// showThis(4, 5);


// 2 способ, через методы объекта. В этом случае this -- это сам объект.
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout(); // Здесь функция в функции потеряет контекст вызова, так как является не методом объекта obj,
//         // а просто функцией в функции
//     }
// };
// obj.sum(); // Мы получим весь объект obj. Контекст выполнения метода -- и есть сам объект 

// 3 способ вызова функции -- через конструктор, то есть через new. This = новый созданный объект
// ivan.hello();

// 4 способ -- ручное присваивание this любой функции, то есть указание конкретного контекста
// Сделать это можно при помощи call, apple, bind
// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// //Сейчас мы будет насильно связывать sayName с объектом user 
// console.log(sayName.call(user, 'Smith')); //Call принимает аргументы в виде строки
// console.log(sayName.apply(user, ['Snow'])); //apply принимает аргументы в виде массива данных. С помощью этих двух методов мы
// //можем насильно привязать контекст вызова

// //Создает новую функцию, связанную с определенным контекстом
// function count(number) {
//     return this * number;
// }
// // Если вызвать сейчас функцию, то она будет иметь в this (в контексте вызова) объект Window
// // Поэтому мы должны четко привязать count() к какому-то контексту вызова

// let double = count.bind(2); // число 2 теперь становится контекстом вызова функции count(), которе говоря this = 2
// console.log(double(3));
// console.log(double(10));

// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     console.log(this); // Здесь мы получим как контектс вызова сам элемент <button>
//     this.style.backgroundColor = 'red';
// });

