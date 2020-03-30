let startBtn = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let monthsSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let countBudgetBtn = document.getElementsByTagName('button')[0];
let expensesItemBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];

let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('.choose-income');
let sav = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let incomeValue = document.querySelector('.income-value');

let money, time;

countBudgetBtn.disabled = true;
expensesItemBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function() {
    countBudgetBtn.disabled = false;
    expensesItemBtn.disabled = false;
    countBtn.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money  = +prompt("Ваш бюджет на месяц?", "");    

    while (isNaN(money) || money == "" || money == null) {
        money  = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.innerHTML = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();


    console.log(countBudgetBtn.disabled);
});

countBudgetBtn.addEventListener('click', function() {
    let num = 0;
    let expensesSum = 0;
        while (num < expensesItem.length) {
            let Question = expensesItem[num].value,
                Answer = expensesItem[++num].value;
                
            if (Question != "" && (typeof(Question)) === 'string' && (typeof(Question)) != null && 
            Answer != "" && (typeof(Answer)) != null && Answer.length < 50) {
                
                appData.expenses[Question] = Answer;
                expensesSum += +Answer;
                console.log(sum);
            } else {
                num = num - 1;
            }
            num++;      
        }
    expensesValue.textContent = expensesSum;
    appData.exSum = expensesSum;
   
});

expensesItemBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpenses_item.length; ++i) {
        let opt = optionalexpenses_item[i].value;         
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});


countBtn.addEventListener('click', function() {    
    console.log(countBtn);
    if(appData.budget != undefined) { 
        appData.moneyPerDay = ((appData.budget - appData.exSum) / 30).toFixed(0);
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный бюджет";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний бюджет";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий бюджет";
        }
        else {
            levelValue.textContent = "Ошибка";
        }
    }
    else {
        dayBudgetValue.textContent = "Ошибка";
    }
    
});

income.addEventListener('input', function() {
    let items = income.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

sav.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
        console.log(appData.savings)
    }
    else { 
        appData.savings = true;
        console.log(appData.savings);
    }
});

chooseSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            perc = +choosePercent.value;
        
        appData.monthIncome = sum/100/12*perc;
        appData.yearIncome = sum/100*perc;

        monthsSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
chooseSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            perc = +choosePercent.value;
        
        appData.monthIncome = sum/100/12*perc;
        appData.yearIncome = sum/100*perc;

        monthsSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



let appData = {
    budget : money ,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false 
};