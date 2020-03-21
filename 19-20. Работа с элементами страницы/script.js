let box = document.getElementById("box");
let content = document.getElementsByClassName("content"); // Получим псевдомассив элементов с этим классом

let circle = document.getElementsByClassName("circle");
let circles = document.querySelector('.circles');

let square = document.querySelectorAll(".squares .square"); // Этот метод более популярный, чем верхние. Внутри может быть использована вложенность
    //Тут важно ставить либо точку, либо # если речь об id, либо [] если речь об атрибуте
let oneSquare = document.querySelector(".square"); //С помощью querySelector мы получаем ПЕРВЫЙ элемент с таким селектором на странице
let squares = document.querySelector('.squares');

// console.log(content);
// console.log(content[1]); // Так как это у нас псевдомассив, мы можем вывести отдельно какой-то его элемент

// console.log(square);
// console.log(square[2]);

// console.log(oneSquare);

//РАБОТА СО СТИЛЯМИ
circle[1].style.borderRadius = '2px';
oneSquare.style.backgroundColor = 'blue';
square[2].style.backgroundColor = '#ddd';

//Перебор For each

square.forEach(function(item, i, mass) {
    item.style.backgroundColor = 'yellow';
});

// Создание html элементов 
let div = document.createElement('div'),
    text = document.createTextNode('Просто текст');

console.log(div);

//Для добавления, изменения и удаления классов есть специальный метод classList

div.classList.add('additional'); // На данном этапе этот div с классом additional имеется только 
// в js коде, но не в html. Для того, чтобы его добавить в html, нужно добавить его с помощью appendChild():
document.body.appendChild(div); // Вместо body можеть быть любой родитеслький элемент
//Очень ценный метод у ClassList -- метод toggle(), который позволяет
// добавлять класс в зависимости от состояния переменной

//Чтобы вставить элемент div с классом additional в родительский элемент squares, нужно сделать так
squares.appendChild(div);

// Чтобы вставить div с классом additional перед каким-то элементом в родительском элементе:
circles.insertBefore(div, circle[1]);

//Чтобы удалить элемент со страницы:
// circles.removeChild(circle[1]);

//Замена:
circles.replaceChild(circle[0], circle[1]); //Первый аргумент -- то, новый элемент, то, что нужно поместить на страницу, 
//а второй -- то, что нужно заменить

//Как добавить html код:
div.innerHTML = 'hello world'; //Таким образом добавляется текст внутри тега. Или так:
div.textContent = 'hello world';
// Чтобы добавить верстку:
div.innerHTML = '<h1>hello world</h1>'; 