// let arr = ["first", 2, "third", 4, 5];

// arr.pop(); //Удаление последнего элемента массива
// arr.push(); //Добавление нового элемента в конец массива
// arr.shift(); //Удаление первого элемента массива
// arr.unshift(); //Добавление элемента в начало

// console.log(arr.length); // Выводит не количество элементов, а индекс последнего элемента + 1

// //Можно перебирать массивы обычным for, можно еще forEach:
// console.log(arr);

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " (Массив: " + mass + ")"); 
// });

// let arr2 = ["first", 2, "third", 4, 5];
// //Если нужны только значения элементов массива, то можно использоваться цикл for of
// for (let key of arr2) {
//     console.log(key);
// }

// //Цикл for in будет тоже работать, но он будет выводить ключи элементов, а не их значения

// for (let key in arr2) {
//     console.log(key);
// }

// //Методы для работы с массивами: split, join, sort

// split делит строку на элементы массива
let answer = prompt("", "");
let arrSplit = [];

arrSplit = answer.split(",");
console.log(arrSplit);

// .join создает сроку из элементов массива, то есть противоположное, что делает сплит
let arrJoin = ["fdfdfd", "dfdfd33333", "343434343", "oooooo"];
let i = arrJoin.join("; ");

console.log(i);

//Сортировка элементов .sort() -- он сортирует элементы как строки. Соотвественно поэтому числа он сортирует неправильно
let arrSort = ["fdfdfd", "dfdfd33333", "343434343", "oooooo", "aaa"];
let ii = arrSort.sort();

console.log(ii);

//Вот сортировка чисел:
let arrSortNum = ["1", "22", "2", "111", "5"];
let iii = arrSortNum.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(iii);