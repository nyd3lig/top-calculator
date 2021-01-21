let operator;
let number1;
let number2;
let storage = [];
let dot = 0;
console.log("this is number1: " + number1);
console.log("this is number2: " + number2);
console.log("this is operator: " + operator);
console.log("this is storage: " + storage);


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
}

function display(e) {
    console.log("this is number1: " + number1);
    console.log("this is number2: " + number2);
    console.log("this is operator: " + operator);
    console.log("this is storage: " + storage);
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
    return +number1;
}


function sum() {
    console.log("EQUALS CLICKED")
    console.log("this is number1: " + number1);
    console.log("this is number2: " + number2);
    console.log("this is operator: " + operator);
    console.log("this is storage: " + storage);

    // let result = operate(operator, +number1, +number2);
    // if(checkForInfinity(result) === true){
    //     result = number1;
    // }
    // let resultString = result.toString();
    // if(resultString.length > 5){
    //     let shortenedResult = result.toFixed(5);
    //     checkedResult = shortenedResult
    //     result = checkedResult;
    //     }


    // displayCalc.innerHTML = result;
    // number1 = result.toString();
    // return result
    if (operator === undefined) {
        clear();
    }
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

    console.log(number1)
    console.log(number2)
    console.log(result)
    displayCalc.innerHTML = result;
    number1 = result.toString();
    number2 = null;

    console.log("EQUALS ENDED")
    console.log("this is number1: " + number1);
    console.log("this is number2: " + number2);
    console.log("this is operator: " + operator);
    console.log("this is storage: " + storage);
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



document.querySelectorAll(".buttonNumber").forEach(item => {
    item.addEventListener("click", display);
})

plusBtn.addEventListener("click", plusFunc);
plusBtn.addEventListener("keyup", function (e) {
    console.log(e.type);
})

minusBtn.addEventListener("click", minusFunc);

divideBtn.addEventListener("click", divideFunc);

multiplyBtn.addEventListener("click", multiplyFunc);

remainderBtn.addEventListener("click", remainderFunc);



clearBtn.addEventListener("click", clear)

equalBtn.addEventListener("click", sum)

dotBtn.addEventListener("click", countDots)