let money, time;

function start () {
    money  = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money  = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();
let appData = {
    budget : money ,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};


function chooseExpenses() {
    let num = 0;
    while (num < 2) {
        let Question = prompt("Введите обязательную статью расходов в этом месяце?"),
            Answer = prompt("Во сколько обойдется?");
            
        if (Question != "" && (typeof(Question)) === 'string' && (typeof(Question)) != null && 
        Answer != "" && (typeof(Answer)) != null && Answer.length < 50) {
            console.log("done");
            appData.expenses[Question] = Answer;
        } else {
            num = num - 1;
        }
        num++;
        
    }
}
chooseExpenses();

function optionalExpenses() {
    let i = 0;
    while (i < 3) {
        let a = prompt("Статья необязательных расходов?");
            
        if (a != "" && (typeof(a)) != null && a.length < 50) {
            console.log("done");
            appData.optionalExpenses[i] = a;
        } 
        i++;
        
    }
}
optionalExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(0);
}
detectDayBudget();


function detectLevel() { 
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    if (appData.moneyPerDay < 100) {
        alert("Минимальный бюджет");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний");
    } else if (appData.moneyPerDay > 2000) {
        alert("Высокий");
    }
    else {
        alert("Ошибка");
    }
}
detectLevel();

function checkSaving() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений");
        let percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
    
}

checkSaving();

console.log(appData);