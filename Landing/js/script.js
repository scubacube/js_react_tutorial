window.addEventListener('DOMContentLoaded', function() { //то есть когда дом уже загрузится
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); // Таким образом априори будет показывается первый табконтент (цикл будет идти от 0 до 1)

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event) { //Тут применяется делегирование событий
        let target = event.target; 
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer 
    let deadline = '2020-04-05';
    
    function makeMeTwoDigits(n){
        return (n < 10 ? "0" : "") + n;
    }

    // Date.parse() превращает любую дату в количество милисекунд
    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()), //В t сейчас лежит количество милисекунд
        seconds = Math.floor((t/1000) % 60), // Деля на 60, мы получаем ОСТАТОК
        minutes = Math.floor((t/1000) / 60 % 60),
        hours = Math.floor((t/1000) / 60 / 60);        

        seconds = makeMeTwoDigits(seconds);
        minutes = makeMeTwoDigits(minutes);
        hours = makeMeTwoDigits(hours);

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // Это просто отображает нам апдейтнутое время, а само время меняется засчет того,
            //что само текущее Date.parse(new Date() обновляется автоматически
        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;     
            
            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';    
            }
        }
    }

    setClock('timer', deadline);

    //МОДАЛЬНОЕ ОКНО
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descrBtn = document.querySelector('.description-btn');
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';        
    });
    descrBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        descrBtn.classList.remove('more-splash');
        document.body.style.overflow = '';        
    });

    //Form
    let message = {
        loading : 'Загрузка...',
        success: 'Спасибо. Скороsss мы с Вами свяжемся',
        failure : 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form');
    let contactForm = document.querySelector('#form');
    let input = document.getElementsByTagName('input');
    let statusMessage = document.createElement('div');


    
    statusMessage.classList.add('status');    

    form.addEventListener('submit', function(event) {
        //отмена стандартного поведения браузера - при нажатии на button страница будет возвращаться в начало и обновляться
        event.preventDefault();
        form.appendChild(statusMessage);

        //Создаем запрос для отправки на сервер
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
        let formData = new FormData(form); // Этот объект FormData позволяет достать все данные из нужной нам формы

        // Превращаем объект FormData в обычный читаемый объект
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } 
            else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    contactForm.addEventListener('submit', function(event) {
        //отмена стандартного поведения браузера - при нажатии на button страница будет возвращаться в начало и обновляться
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        //Создаем запрос для отправки на сервер
        let request2 = new XMLHttpRequest();
        request2.open('POST', 'server.php');
        request2.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
        let formData2 = new FormData(contactForm); // Этот объект FormData позволяет достать все данные из нужной нам формы

        // Превращаем объект FormData в обычный читаемый объект
        let obj2 = {};
        formData2.forEach(function(value, key) {
            obj2[key] = value;
        });
        
        let json2 = JSON.stringify(obj2);

        request2.send(json2);

        request2.addEventListener('readystatechange', function() {
            if(request2.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request2.readyState === 4 && request2.status == 200) {
                statusMessage.innerHTML = message.success;
            } 
            else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});