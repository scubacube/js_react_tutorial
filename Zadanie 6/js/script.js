let menu = document.querySelector('.menu');
let menu_item = document.querySelectorAll('.menu-item');
let li = document.createElement('li');
let li2 = document.createElement('li');
let title = document.getElementById('title');
let adv = document.querySelector(".adv");
let promptId = document.getElementById('prompt');

li.innerHTML = '<li class="menu-item">Пятый пункт</li>';
menu.appendChild(li);

li2.innerHTML = '<li class="menu-item">Третий пункт</li>';
menu.appendChild(li2);

menu.insertBefore(li2, menu_item[2]);

menu.replaceChild(menu_item[2], menu_item[1]);

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();


let ans = prompt("Ваше отношение? ", "");
promptId.textContent = ans;
