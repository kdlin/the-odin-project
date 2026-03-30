let resultDisplayed = false;
let num1 = "";
let num2 = "";
let operator = "";
let display = document.querySelector(".display")
let digits = document.querySelectorAll(".digits button")
let operators = document.querySelectorAll(".operators button")
let clear = document.querySelector("#clear")
let equal = document.querySelector("#equal")

clear.addEventListener("click", () => {
    // Clear the display and vals
    display.textContent = '';
    num1 = '';
    num2 = '';
    resultDisplayed = false;
    operator = '';
})

equal.addEventListener("click", () => {
    if (num1 === "" || num2 === "" || operator === "") {
        alert("Please input 2 numbers and the operator. Clear First");
        return;
    }
    display.textContent = operate(operator, parseFloat(num1), parseFloat(num2));

})

digits.forEach((btn) => {
    btn.addEventListener ("click", () => {
        if (resultDisplayed === false && operator === '') {
            num1 = num1 + btn.textContent;
            display.textContent = num1 + operator + num2; 
        } else if (resultDisplayed === false && operator !== '') {
            num2 = num2 + btn.textContent;
            display.textContent = num1 + operator + num2; 
        } else if (resultDisplayed === true){
            num1 = "";
            num2 = "" ;
            resultDisplayed = false;
            operator = ""; 
            num1 = btn.textContent;
            display.textContent = num1;
        }   
    })
})

operators.forEach((btn) => { 
    btn.addEventListener ("click", () => { 
        if (resultDisplayed === false) { 
            if (btn.textContent === "+") {
                operator = "+";
                display.textContent = num1 + operator + num2;
            } 
            else if (btn.textContent === "-") {
                operator = '-';
                display.textContent = num1 + operator + num2;
            }
            else if (btn.textContent === "/") {
                operator  = "/";
                display.textContent = num1 + operator + num2;
            } else if (btn.textContent === "*") {
                operator = "*";
                display.textContent = num1 + operator + num2;
            }
        }
    })
})





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

