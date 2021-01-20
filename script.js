let operator;
let number1;
let number2;
let storage = [];
let dot = 0;
console.log(number1)


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

function remainder (num1, num2){
    return num1 % num2;
}

function operate(operator, num1, num2){
    return operator(num1, num2);
}
function clear(){
    operator = undefined;
    storage = [];
    displayCalc.innerHTML = 0;
    number1 = undefined;
    number2 = undefined;
    dot = undefined;
}
function display(e){
    console.log(number1)
    console.log(number2)
    console.log(operator)
    console.log(storage)
    if(operator === add || operator === sub || operator === divide || operator === multiply || operator === remainder || number1 === "string") {
    storage.push(e.target.value)
    number2 = storage.join("");
    displayCalc.innerHTML = storage.join("");
    return +number2;

   
   
    } 
    storage.push(e.target.value)
    number1 = storage.join("");
    +number1
    displayCalc.innerHTML = number1;
    return +number1;
    }
    

function sum(){
    
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
    let result = operate(operator,+number1, +number2);
    if(checkForInfinity(result) === true){
       
        result = number1;
    }
    let resultString = result.toString();
    if(resultString.length > 5){
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
    
    return result
    
}

function sumContinued(){
    
    let result = operate(operator,+number1, +number2);
    if(checkForInfinity(result) === true){
       
        result = number1;
    }
    let resultString = result.toString();
    if(resultString.length > 5){
        let shortenedResult = result.toFixed(5);
        checkedResult = shortenedResult
        result = checkedResult;
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

function checkForInfinity(result){
    if(result === Infinity){
        return true;
    }
}




function countDots(e){
    if(dot >= 1){
        
        return
    } 
    display(e)
    
    dot++
    
}

function resetDotsCount(){
    dot = 0;
   
}

function undoNumber(e){
    
    
    storage.pop();
    
    
    displayCalc.innerHTML = storage.join("");
}





document.querySelectorAll(".buttonNumber").forEach(item => {
    console.log("hello")
    item.addEventListener("click", display);
})

plusBtn.addEventListener("click", function(){
    if(number1 === undefined){
        clear();
    }else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = []
        operator = add;
    }
   
})

minusBtn.addEventListener("click", function(){
    if(number1 === undefined){
        clear();
    }else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = sub;
    }
    
})

divideBtn.addEventListener("click", function(){
    if(number1 === undefined){
        clear();
    }else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = divide;
    }
    
})

multiplyBtn.addEventListener("click", function(){
    if(number1 === undefined){
        clear();
    }else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = multiply;
    }
   
})

remainderBtn.addEventListener("click", function(){
    if(number1 === undefined){
        clear();
    }else {
        resetDotsCount();
        checkIfContinuedOperations();
        storage = [];
        operator = remainder;
    }
   
})



clearBtn.addEventListener("click", clear)

// delBtn.addEventListener("click", undoNumber);

equalBtn.addEventListener("click", sum)

dotBtn.addEventListener("click", countDots)




