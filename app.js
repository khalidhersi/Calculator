const calculatorItems = document.querySelector(".calculators__items");
const numericalFunctions = document.querySelector(".grid__items");
const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input");
const output = document.querySelector("#black__space");
const numbers = document.querySelectorAll(".numbers");
const ei = document.querySelector("#eight")

console.log(numbers);

const listOfNum = numbers.forEach((num) => {
    num.innerText})
    
const calculate = () => {
    input.value += listOfNum;
    console.log(input.value)
} 

input.addEventListener("click", calculate)



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



const calculate = (number) => {
    input.value += number;
} 

const numArr = numbers.map(calculate)

numbers.addEventListener("click", calculate)

*/
