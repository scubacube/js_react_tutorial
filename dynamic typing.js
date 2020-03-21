Динамическая типизация данных 

I. To string 

1) console.log(typeof(String(4))); // метод String() сейчас не используется

2) 
    console.log(typeof(5 + "qwerty")); // Сложение чего-то со строкой
    console.log(typeof("" + false));
    console.log(typeof("https://vk.com/catalog" + 5)); //Применение такой конкатенации на практике

II. To Number

1) console.log(typeof(Number("5"))); // метод Number() сейчас не используется

2) 
    console.log(typeof(+"5")); //Унарный плюс
    console.log(5 + +"5"); // Это number будет

3) console.log(typeof(parseInt("15px", 10)));

// 0, '', null, undefined, NaN --- это всегда false. Если строка с пробелом " ", то это true
// Всё остальное будет true -- пустые массивы строки и т.д.

let switcher = null;
if (switcher) {
    console.log("Working..");
}
switcher = 1;
if (switcher) { // тут swithcer становится булиновым
    console.log("done..");
}

III. //Эти методы крайне редко используются

1) console.log(typeof(Boolean("4"))); // Boolean
2) console.log(typeof(!!"4")); //Boolean 