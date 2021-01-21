let operator;
let number1;
let number2;
let storage = [];
let dot = 0;
let clickCount = 0;


let displayCalc = document.getElementById("display");
let plusBtn = document.getElementById("plus");
let divideBtn = document.getElementById("divide");
let minusBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("multiply");
let remainderBtn = document.getElementById("remainder")
let clearBtn = document.getElementById("clear");
let equalBtn = document.getElementById("equal");
let dotBtn = document.getElementById("dot");
let delBtn = document.getElementById("delete")



function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function remainder(num1, num2) {
    return num1 % num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function clear() {
    
    operator = undefined;
    storage = [];
    displayCalc.innerHTML = 0;
    number1 = undefined;
    number2 = undefined;
    dot = undefined;
    clickCount = 0;
    numberResize();
}

function display(e) {
    clickCount++;
    if (operator === add || operator === sub || operator === divide || operator === multiply || operator === remainder || number1 === "string") {
        storage.push(e.target.value)
        number2 = storage.join("");
        displayCalc.innerHTML = storage.join("");
        return +number2;
    }

    storage.push(e.target.value)
    number1 = storage.join(""); +
    number1
    displayCalc.innerHTML = number1;
    numberResize();
    return +number1;
}


function sum() {
    let result = operate(operator, +number1, +number2);
    if (checkForInfinity(result) === true) {

        result = "error";
    }
    let resultString = result.toString();
    if (resultString.length > 5) {
        let shortenedResult = result.toFixed(5);
        checkedResult = shortenedResult
        result = checkedResult;
    }
    displayCalc.innerHTML = result;
    number1 = result.toString();
    number2 = null;
    return result

}

function sumContinued() {

    let result = operate(operator, +number1, +number2);
    if (checkForInfinity(result) === true) {

        result = "error";
    }
    let resultString = result.toString();
    if (resultString.length > 5) {
        let shortenedResult = result.toFixed(5);
        checkedResult = shortenedResult
        result = checkedResult;
    }
    displayCalc.innerHTML = result;
    number1 = result.toString();
    return result
}

function checkIfContinuedOperations() {
    if (typeof number1 === "string" && typeof number2 === "string") {
        sumContinued();
    }
}

function checkForInfinity(result) {
    if (result === Infinity) {
        return true;
    }
}




function countDots(e) {
    if (dot >= 1) {
        return
    }
    display(e)
    dot++
}

function resetDotsCount() {
    dot = 0;
}

/* OPERATION FUNCTIONS */
function minusFunc() {
    if (number1 === undefined) {
        clear();
    } else {

        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = sub;
    }
}

function plusFunc() {
    if (number1 === undefined) {
        clear();
    } else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = []
        operator = add;
    }
}

function divideFunc() {
    if (number1 === undefined) {
        clear();
    } else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = divide;
    }
}

function multiplyFunc() {
    if (number1 === undefined) {
        clear();
    } else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = multiply;
    }
}

function remainderFunc() {
    if (number1 === undefined) {
        clear();
    } else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = remainder;
    }
}

function numberResize(){  
    if(clickCount >= 0 && clickCount <= 8)
    displayCalc.style.fontSize = "60px";
    displayCalc.style.paddingTop = "28px";
    if(clickCount===9){
        displayCalc.style.fontSize = "54px";
        displayCalc.style.paddingTop = "34px"
    } else if (clickCount===10){
        displayCalc.style.fontSize = "48px";
        displayCalc.style.paddingTop = "40px"
    } else if (clickCount === 11){
        displayCalc.style.fontSize = "44px";
        displayCalc.style.paddingTop = "44px"
    } else if (clickCount >= 12 && clickCount <= 24){
        displayCalc.style.fontSize = "24px";
        displayCalc.style.paddingTop = "64px"
    }
}



document.querySelectorAll(".buttonNumber").forEach(item => {
    item.addEventListener("click", display);
})

plusBtn.addEventListener("click", plusFunc);


minusBtn.addEventListener("click", minusFunc);

divideBtn.addEventListener("click", divideFunc);

multiplyBtn.addEventListener("click", multiplyFunc);

remainderBtn.addEventListener("click", remainderFunc);



clearBtn.addEventListener("click", clear)

equalBtn.addEventListener("click", sum)

dotBtn.addEventListener("click", countDots)

numberResize();