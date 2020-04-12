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
    })
});