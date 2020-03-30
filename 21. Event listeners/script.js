let btn = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('You hit first button'); // Но так делать не стоит
// }

// //Можно либо так:
// btn[0].addEventListener('click', function() {
//     alert('You hit first button 1');
//     alert('You hit first button 2');
// });

// //Либо так: (эти действия друг друга не заменят)
// btn[0].addEventListener('click', function() {
//     alert('You hit first button 1');
// });
// btn[0].addEventListener('click', function() {
//     alert('You hit first button 2');
// }); 

// // btn[0].addEventListener('mouseenter', function() {
// //     alert('Вы навели на первую кнопку');
// // });
// /////////////////////
// btn[0].addEventListener('click', function(event) {
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = 'none';
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function(event) {
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = 'none';
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item){
    item.addEventListener('mouseleave', function() {
        console.log('dasdas');
    });
});