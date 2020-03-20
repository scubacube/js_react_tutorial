// Функция обратного вызова - callback Функция
// Это функция, переданная в другую функцию в качестве аргумента, 
// которая затем вызывается по завершению какого-либо действия.

function greeting(name, callback) {
    console.log("Hello, " + name);
    callback(name);
}

function goodmorning(name) {
    console.log("Доброе утро, " + name);
}

function goodnight(name) {
    console.log("Спокойной ночи, " + name);
}

greeting("Oleg", goodnight);
greeting("Ivan", goodmorning);

///////////
function displayAllData(callback) {
    callback();
    for (let key in appData) {
        console.log(appData);
    }
    
}
displayAllDataTextFirst(function(){
    console.log("Наша программа включает в себя данные: ");
});