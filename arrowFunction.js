// let fun = () => {
//     console.log(this);
// };

// fun(); //Будет Window
// // Стрелочная функция всегда анонимна
// // Стрелочная функция не имеет своего контекста вызова, поэтому в 
// // следующием примере вернет объект obj как контекст своего вызова, то есть оно вернет родителя 

// let obj = { 
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this);
//         };
//         say(); 
//     }
// };

// obj.sayNumber(); // вернет объект obj как контекст своего вызова, то есть оно вернет родителя 

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this);
//     };
//     show();
// });

// function caclOrDouble(number, basis = 2) { // в ES6 можно задавать значение по умолчанию таким образом
//     // basis = basis || 2; // ES5

//     console.log(number * basis);
// };

// caclOrDouble(10, 3);
// caclOrDouble(20);
// caclOrDouble(3, 3);

// //КЛАССЫ В ES6

// class Rectangle {
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;

//     }
//     calcArea() {
//         return this.height*this.width;
//     }
// }

// const square = new Rectangle(5);
// console.log(square.calcArea());

// SPREAD оператор -- разворачивает массивы
// let video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogspot'],
//     internet = [...video, ...blogs, 'vk', 'facebook']; // Чтобы тут все отобразилось, нужно использовать spread оператор, который есть в es6(3 точки)

// console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let numbers = [2, 3 , 7];

log(...numbers);