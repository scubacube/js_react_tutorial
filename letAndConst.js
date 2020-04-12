// 1. let и const создаются по мере считывания программы, в отличие от var.
// 2. let и const видны только в блоке кода {}


// 3. Для let и const в каждой итерации цикла создается своя переменная:
// function makeArray() {
//     var items = [];

//     for (var i = 0; i < 10; i++) { //  Var переменная i будет одна на весь цикл 
//         var item = function(){
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();
// arr[1](); //10
// arr[3](); //10
// arr[7](); //10

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) { //  Var переменная i будет одна на весь цикл 
        var item = function(){
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();
arr[1](); //10
arr[3](); //10
arr[7](); //10