// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '18px',
//         color: '#fff'
//     }
// };

// console.log(JSON.stringify(options)); // тут будет все в одну строку
// // console.log(JSON.parse(JSON.stringify(options))); //Вернет тот же самый объект, как он у нас записан вверху

let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open("GET", "example.json");
    // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText / response
    //readyState -- текущее сосотояние запроса


    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'Что-то пошло не так!';
        }
    });
})