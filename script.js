let operator;
let number1;
let number2;
let storage = [];



let displayCalc = document.getElementById("display");
let plusBtn = document.getElementById("plus");
let divideBtn = document.getElementById("divide");
let minusBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("multiply");
let clearBtn = document.getElementById("clear");
let equalBtn = document.getElementById("equal");




function add (num1, num2){
    return num1 + num2;
}

function sub (num1, num2){
    return num1 - num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function operate(operator, num1, num2){
    return operator(num1, num2);
}

function display(e){
    if(operator === add || operator === sub || operator === divide || operator === multiply || number1 === "string") {
    storage.push(e.target.value)
    number2 = storage.join("");
    displayCalc.innerHTML = storage.join("");
    console.log("this is the display if statement and number1: " + typeof number1 + "and number2: " + typeof number2)
    return +number2;

    console.log("this is the display if statement and number1: " + number1 + " and number2: " + number2)
   
    } 
    storage.push(e.target.value)
    number1 = storage.join("");
    displayCalc.innerHTML = storage.join("");
    return +number1;
    }

function sum(){
    let result = operate(operator, +number1, +number2);
    displayCalc.innerHTML = result;
    number1 = result.toString();
    number2 = null;
    return result
    
}

function sumContinued(){
    let result = operate(operator,+number1, +number2);
    let resultString = result.toString;
    console.log(resultString.length)
    if (resultString.length > 9){
        console.log("this is a long ass number")
        result = result.toFixed(6);
    }
    displayCalc.innerHTML = result;
    
    number1 = result.toString();
    return result
}

function checkIfContinuedOperations(){
    if(typeof number1 === "string" && typeof number2 === "string"){
        sumContinued();
    }
}






document.querySelectorAll(".buttonNumber").forEach(item => {
    item.addEventListener("click", display);
})

plusBtn.addEventListener("click", function(){
    checkIfContinuedOperations();
    storage = []
    operator = add;
})

minusBtn.addEventListener("click", function(){
    checkIfContinuedOperations();
    storage = [];
    operator = sub;
})

divideBtn.addEventListener("click", function(){
    checkIfContinuedOperations();
    storage = [];
    operator = divide;
})

multiplyBtn.addEventListener("click", function(){
    checkIfContinuedOperations();
    storage = [];
    operator = multiply;
})



clearBtn.addEventListener("click", function(e){
    operator = null;
    storage = [];
    displayCalc.innerHTML = storage;
    number1 = null;
    number2 = null;
    console.log(number1)
    console.log(number2)
    console.log(operator)
})

equalBtn.addEventListener("click", sum)




