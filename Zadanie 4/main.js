let startBtn = document.getElementById('start');

let budgetValue = document.getElementsByClassName('.budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('.daybudget-value')[0];
let levelValue = document.getElementsByClassName('.level-value')[0];
let expensesValue = document.getElementsByClassName('.expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('.optionalexpenses-value')[0];
let monthsSvingsValue = document.getElementsByClassName('.monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('.yearsavings-value')[0];

let expensesItem = document.querySelectorAll('.expenses-item');

let count_budget_btn = document.getElementsByTagName('button')[0];
let expenses_item_btn = document.querySelector('button')[1];
let optionalexpenses_btn = document.querySelector('button')[2];

let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money  = +prompt("Ваш бюджет на месяц?", "");    

    while (isNaN(money) || money == "" || money == null) {
        money  = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
})

start();
let appData = {
    budget : money ,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function() {
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
    },
    chooseOptExpenses: function() {
        let i = 0;
        while (i < 3) {
            let a = prompt("Статья необязательных расходов?");
                
            if (a != "" && (typeof(a)) != null && a.length < 50) {
                console.log("done");
                appData.optionalExpenses[i] = a;
            } 
            i++;
            
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(0);
    },
    detectLevel: function() {
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
    },
    checkSaving: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений");
            let percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        
        // if(items != "" && items === "string" && typeof(items) != null) {            
        //     appData.income = items.split(', ');
        //     appData.income.push(prompt("Может что-то еще?", ""));
        //     appData.income.sort(); //Сортировка по алфавиту
        // }
        // else {
        //     items = items - 1;
        // }
       let numb = 0;
        while (numb < 1) {
            let items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
                
            if (items != "" && typeof(items) === "string" && typeof(items) != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort(); //Сортировка по алфавиту
            } else {
                numb = numb - 1;
                console.log(numb + " else");
            }
            numb++;        
            console.log(numb);    
        }
        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item, i, mass) {
            console.log(++i + " " + item); 
        });
    }
    
};

function displayAllData(callback) {
    callback();
    for (let key in appData) {
        console.log(appData);
    }
    
}
displayAllData(function(){
    console.log("Наша программа включает в себя данные: ");
});

