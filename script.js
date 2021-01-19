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
let operator;
let number1;
let number2;
let storage = [];
let numberStorage = [];



let displayCalc = document.getElementById("display");
let plusBtn = document.getElementById("plus");
let divideBtn = document.getElementById("divide");
let minusBtn = document.getElementById("minus");
let multiplyBtn = document.getElementById("multiply");
let clearBtn = document.getElementById("clear");
let equalBtn = document.getElementById("equal");




document.querySelectorAll(".buttonNumber").forEach(item => {
    item.addEventListener("click", display);
})

plusBtn.addEventListener("click", function(){
    console.log(number1);
console.log(number2);
    if(number2 == "string"){
        console.log("both numbers are string")
       sum();
    }
    storage = []
    operator = add;
})

minusBtn.addEventListener("click", function(){
    storage = [];
    operator = sub;
})

divideBtn.addEventListener("click", function(){
    storage = [];
    operator = divide;
})

multiplyBtn.addEventListener("click", function(){
    storage = [];
    operator = multiply;
})



clearBtn.addEventListener("click", function(e){
    operator = null;
    storage = [];
    displayCalc.innerHTML = storage;
})

equalBtn.addEventListener("click", sum)


function display(e){
    if(operator === add || operator === sub || operator === divide || operator === multiply || number1 === "string") {
    storage.push(e.target.value)
    number2 = storage.join("");
    displayCalc.innerHTML = storage.join("");
    console.log("this is n2 " + typeof number2)
    return +number2;
   
    }
    storage.push(e.target.value)
    number1 = storage.join("");
    displayCalc.innerHTML = storage.join("");
    console.log("this is n1 " + typeof number1)
    return +number1;
    }

function sum(){
    let result = operate(operator,+number1, +number2);
    displayCalc.innerHTML = result;
    number1 = result;
    return result
}


