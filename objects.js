// 2 способа создания объектов

let obj1 = new Object();

let obj2 = {
    width: 1024, // Это свойство объекта (property)
    height: 980,
    name: "test"
}

//Получить свойство объекта можно через точку или через [""]

console.log(obj2.name);
console.log(typeof(obj2["width"]));

//Также можно задавать новые свойства таким образом
obj2.bool = false;
obj2.colors = {
    border : "black",
    background : "blue"
}

//Можно удалять свойства
delete obj2.height;

//Перебор всех свойств и их значений объекта -- for in

for (let key in obj2) {
    console.log("Свойство " + key + " имеет значение " + obj2[key]);
}

//Количество свойств в объекте:
console.log(Object.keys(obj2).length);


console.log(obj2);