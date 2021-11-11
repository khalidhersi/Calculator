/* Consts defined */
const calculatorItems = document.querySelector(".calculators__items");
const numericalOperations = document.querySelectorAll(".grid__items");
const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const screen = document.querySelectorAll(".answer-bar")
const numbers = document.querySelectorAll(".numbers");
const equals = document.querySelector("#equals");
const decimal = document.querySelectorAll("#point");
const numArr = numbers.innerText;
const times = document.querySelector("#times")
const clear = document.querySelector("#AC")
const backSpace = document.querySelector("#backspace")
const percentage = document.querySelector("#percentage")

/* variables to be changed */
let outputDisplay = "";
let inputDisplay = "";
let operationType = "";
let operationPressed = "";
let result = null;

/* Math Calculations after being pressed */
const mathCalculation = () => {
    if (operationPressed === "/") {
        result = parseFloat(result) / parseFloat(inputDisplay)
    } else if (operationPressed === "x") {
        result = parseFloat(result) * parseFloat(inputDisplay)
    } else if (operationPressed === "-") {
        result = parseFloat(result) - parseFloat(inputDisplay)
    }  else if (operationPressed === "+") {
        result =  parseFloat(result) + parseFloat(inputDisplay)
    } 
};


/* Turning buttons into numbers to be displayed in input */
numbers.forEach((num) => {
    num.addEventListener('click', (event) => {
        inputDisplay += event.target.innerHTML
        input.value = inputDisplay
    })
 });

 /* What happens when a Operation is pressed */
numericalOperations.forEach((operation) => {
    operation.addEventListener('click', (event) => {
        operationType = event.target.innerHTML
        outputDisplay && inputDisplay && operationPressed ?  mathCalculation() : result = parseFloat(inputDisplay);
        moveInput(operationType)
        operationPressed = operationType;
     })
 })

 /*  Moving input from input to output after being pressed */
 const moveInput = (value) => {
    value ? outputDisplay += `${inputDisplay} ${value} ` : outputDisplay += `${inputDisplay} `;
    output.value = outputDisplay;
    input.value = "";
    inputDisplay = "";
}


/* Backspace button functionality */
backSpace.addEventListener("click", (event) => {
    input.value = "" 
    inputDisplay = "" 
});


/* All Clear button functionality */
clear.addEventListener("click", () => {
    input.value = ""
    inputDisplay = ""
    outputDisplay = ""
    output.value = ""
    result = ""
});


/* Equal button functionality */
equals.addEventListener("click", () => {
    mathCalculation();
    moveInput()
    input.value = result;
    inputDisplay = result;  
    outputDisplay = "";
});

/* Percentage button functionality */
percentage.addEventListener("click", () => {
    input.value = `${input.value * 100}%`
});











 /* Failed test area
 
 button visibility after click 
 buttons.map(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        if (event.target.innerText){
            display.innerText = ""
        }
        else {
        output.innerHTML += event.innerText;
        }

    })
})

console.log(numbers.innerText)
console.log(numArr)

let arr = [];

numbers.forEach((num) => {
   let listOfNum = num.innerText
    arr.push(Array(listOfNum))
})


backSpace.addEventListener("click" , () => {
    screen.backSpace();
})

equals.addEventListener("click" , () => {
    screen.generateResult()
})




console.log(arr)

const calculate = (number) => {
    input.value += number;
} 

const numArr = numbers.map(calculate)

numbers.addEventListener("click", calculate)

 numericalOperation.forEach((operation) => {
    operation.addEventListener('click', (event) => {
        const operationType = event.target.innerText
        if (input && output ){
            mathOperation()
        } else {
            result = parseFloat(output)
        }
        moveInput(operationType)
     })
     console.log(result)
 })








*/
