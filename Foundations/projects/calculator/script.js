let resultDisplayed = false;
let num1 = null;
let num2 = null;
let operator = null;

let digits = document.querySelectorAll(".digits")

function add(a, b) { 
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by 0 dumbass"
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(op, a, b) { 
    if (op === "+") {
        return add(a, b);
    } else if (op === "-") {
        return subtract(a, b); 
    } else if (op === "/"){
        return divide(a, b)
    } else {
        return multiply(a, b)
    }
}

