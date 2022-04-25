// Define operator functions
function add (a, b) {
    return +a + +b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (a, b, operator) {
    return +operator(a, b).toFixed(2);
}

function showAnswer () {
    let calculation = operate(storedValue, display.value, storedOperator);
    if (calculation == Infinity) {
        clearValues();
        return alert("You can't divide by 0");
    }
    display.value = calculation;
    displayCalc = 0;
}

function clearValues () {
    display.value = 0;
    storedValue = 0;
    storedCalculation = 0;
    storedOperator = "";
    displayCalc = 0;
}

// Delcare starting variables
let storedValue = 0;
let storedOperator = "";
let storedCalculation = 0;
let displayCalc = 0;

// Listen for input and display numbers
const display = document.querySelector("input");
display.value = 0;

const numbers = document.querySelectorAll(".num");
numbers.forEach (number => number.addEventListener ("click", () => {
    if (display.value == storedValue) {
        display.value = "";
    }
    if (number.classList.contains("decimal")) {
        if (display.value.indexOf(".") === -1){
            display.value += number.textContent;    
        } else {}
    } else {
        display.value += number.textContent;
    }
}));

// Clear display and values
const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    clearValues();
});

// Store value and start operate function when operator button is pressed
const operators = document.querySelectorAll(".oper");
operators.forEach (oper => oper.addEventListener ("click", () => {
    if (displayCalc) {
        showAnswer();
    }
    storedValue = display.value;
    storedOperator = window[oper.name];
    displayCalc = 1;
}));

// Perform calculation when equal button is pressed
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (displayCalc) {
    showAnswer();
    }
});
