// let timerId = setTimeout(sayHello, 3000); // delay in 3 sec. Записав фунцию в переменную, мы передали ей числовой
// //идентификатор этого таймера
// clearTimeout(timerId); //Убирает этот таймер, для этого мы и положили его в переменную

// let timerId = setInterval(sayHello, 3000); // delay in 3 sec. Записав фунцию в переменную, мы передали ей числовой
// //идентификатор этого таймера
// clearTimeout(timerId); //Убирает этот таймер, для этого мы и положили его в переменную

// function sayHello() {
//     console.log('hello wrld');
// }

// let timerId = setTimeout(function log() {
//     console.log('hello');
//     setTimeout(log, 2000); // Рекурсия, функция внутри себя вызыват саму себя
    
// });//будет работать также, как setInterval

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if(pos == 300) {
            clearInterval(id);//останавливаем интервал, когда квадрат упирается в правый нижний угол
        }
        else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

//Делегрирование событий
let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    // if(event.target && event.target.tagName == 'BUTTON') { // защита от дурака. Проверяет первая часть, дейстивтельно ли есть то, куда мы кликнули. Вторая часть проверяет, имеет ли то, куда мы кликнули, тэг button.
    //     console.log('ggg');
    // } 

    if(event.target && event.target.classList.contains('first')) { //выбор по классу, первый способ
        console.log('fff');
    } 

    if(event.target && event.target.matches('button.first')) { //выбор по классу, способ второй
        console.log('ggg');
    }
}); //Это простейший пример делегирования событий -- при нажатии на любую кнопку консоль.лог выведется