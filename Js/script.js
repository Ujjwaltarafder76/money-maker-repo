const incomeInput = document.querySelector("#income");
const foodInput = document.querySelector("#food");
const rentInput = document.querySelector("#rent");
const clothesInput = document.querySelector("#clothes");
const saveInput = document.querySelector("#save-input");
const calculateBtn = document.querySelector("#calculate");
const totalExpense = document.querySelector("#total-expense");
const balance = document.querySelector("#balance");
const saveBtn = document.querySelector("#save");
const savingAmount = document.querySelector("#saving-amount");
const remainingAmount = document.querySelector("#remaining-amount");
// const inputs = document.querySelectorAll('input[type="text"]');

let count = 0;

calculateBtn.addEventListener("click", (e) => {
    let expense = +foodInput.value + +rentInput.value + +clothesInput.value;
    totalExpense.innerText = `Total Expenses: $${expense.toFixed(2)}`;
    balance.innerText = `Balance: $${(+incomeInput.value - expense).toFixed(2)}`;
});

saveBtn.addEventListener("click", (e) => {
    savingAmount.innerText = `Saving Amount: $${(
        (+incomeInput.value * saveInput.value) /
        100
    ).toFixed(2)}`;
    let expense = +foodInput.value + +rentInput.value + +clothesInput.value;
    remainingAmount.innerText = `Remaining Balance: $${(
        +incomeInput.value -
        expense -
        (+incomeInput.value * saveInput.value) / 100
    ).toFixed(2)}`;
});
