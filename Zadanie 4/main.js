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

