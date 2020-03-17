let money  = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money ,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

// for(; i <2; i++) { 
//     let Question = prompt("Введите обязательную статью расходов в этом месяце?"),
//         Answer = prompt("Во сколько обойдется?");

//     if (Question != "" && (typeof(Question)) === 'string' && (typeof(Question)) != null && 
//     Answer != "" && (typeof(Answer)) != null && Answer.length < 50) {
//         console.log("done");
//         appData.expenses[Question] = Answer;
//     } else {
//         console.log("Ошибка");
//     }
// }
let num = 0;
while (num < 2) {
    let Question = prompt("Введите обязательную статью расходов в этом месяце?"),
        Answer = prompt("Во сколько обойдется?");
        
    if (Question != "" && (typeof(Question)) === 'string' && (typeof(Question)) != null && 
    Answer != "" && (typeof(Answer)) != null && Answer.length < 50) {
        console.log("done");
        appData.expenses[Question] = Answer;
    } else {
        console.log("Ошибка");
    }
    num++;
}

// do {
//     let Question = prompt("Введите обязательную статью расходов в этом месяце?"),
//         Answer = prompt("Во сколько обойдется?");

//     if (Question != "" && (typeof(Question)) === 'string' && (typeof(Question)) != null && 
//     Answer != "" && (typeof(Answer)) != null && Answer.length < 50) {
//         console.log("done");
//         appData.expenses[Question] = Answer;
//     } else {
//         console.log("Ошибка");
//     }
//     i++;
// }
// while (i < 2); 


appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Минимальный бюджет");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий");
}
else {
    console.log("Ошибка");
}

// alert(oneDayBudget);
console.log(appData);