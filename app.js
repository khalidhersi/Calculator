const calculatorItems = document.querySelector(".calculators__items");
const numericalOperations = document.querySelectorAll(".grid__items");
const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const screen = document.querySelectorAll(".answer-bar")
const numbers = document.querySelectorAll(".numbers");
const equals = document.querySelectorAll("#equals");
const decimal = document.querySelectorAll("#point");
const numArr = numbers.innerText;
const times = document.querySelector("#times")
const clear = document.querySelector("#AC")
const backSpace = document.querySelector("#backspace")
const percentage = document.querySelector("#percentage")


let oneDecimal = true;
let outputDisplay = "";
let inputDisplay = "";
let lastOperation = "";
let result = null;



numbers.forEach((num) => {
    num.addEventListener('click', (event) => {
        inputDisplay += event.target.innerText
        input.value = inputDisplay
    })
 });

 console.log(numericalOperations)
 
numericalOperations.forEach((operation) => {
    operation.addEventListener('click', (event) => {
        if(!inputDisplay) return
        const operationType = event.target.innerText
        if (outputDisplay && inputDisplay && lastOperation){
            mathOperation()
        } else {
            result = parseFloat(inputDisplay)
        }
        moveInput(operationType)
        console.log(result)
     })
 })

 const moveInput = (name = "") => {
    outputDisplay += inputDisplay  + " " + name + " ";
    output.value = outputDisplay;
    input.value = "";
    inputDisplay = "";
}

 /* button visibility after click 
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
