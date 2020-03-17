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

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце?");
let firstAnswer = prompt("Во сколько обойдется?");
appData.expenses.firstQuestion = firstAnswer;
appData.expenses.firstQuestion = firstAnswer;

let oneDayBudget = appData.budget / 30;

// alert(oneDayBudget);
// alert(appData.expenses.firstQuestion);
// console.log(appData);