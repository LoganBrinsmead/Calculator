/*  Name:           Calculator
    Author:         Logan Brinsmead
    Date:           December 18, 2021
    Description:    A calculator inspired by The Odin Project
*/ 

// create a function for addition
function add(a, b) {
    return a + b;
}

// create a function for subtraction
function subtract(a, b) {
    return a - b;
}

// create a function for multiplication
function multiply(a, b) {
    return a * b;
}

// create a function for division
function divide(a , b) {
    return a / b;
}

// function to populate the screen
// takes in the solution variable, operator and the arithmetricArray as arguments
function populateDisplay(ans, array, sign) {    
    if (ans !== undefined && array[0] === undefined) {
        topDisplay.textContent = +ans + sign;
    } else if (ans === undefined && array[1] === undefined && sign === undefined) {
        topDisplay.textContent = +array[0];
    } else if (ans === undefined && array[1] === undefined) {
        topDisplay.textContent = +array[0] + sign;
    }  else if (ans !== undefined && array[0] !== undefined) {
        topDisplay.textContent = +ans + sign;
    // } else if (ans === undefined && array[0] !== undefined && operator !== undefined) {
    //     topDisplay.textContent = +arithmeticArray[0] + sign;
    } else if (ans !== undefined && array[0] === undefined && sign !== undefined) {
        topDisplay.textContent = +solution + sign;
    }
}


// function for the actual calculations and populating the display
function calculator(operator) {
    if(numberArray[0] !== 0) {arithmeticArray.push(Number(numberArray.join('')))};

    
    decimalButton.disabled=false;
    if (arithmeticArray[0] !== undefined && arithmeticArray[1] !== undefined && solution === undefined) {
        solution = operate(operator, arithmeticArray[1], arithmeticArray[0]);
    } else if (solution !== undefined && arithmeticArray[arithmeticArray.length-1] !== 0) {
        solution = operate(operator, solution, arithmeticArray[arithmeticArray.length-1]);
        topDisplay.textContent = +solution + operator;
        bottomDisplay.textContent = '';
        arithmeticArray = [];
    } else if(solution !== undefined && numberArray !== undefined && arithmeticArray === undefined) {
        solution = operate(operator, arithmeticArray[1], arithmeticArray[0]);
    }
    numberArray = [];
}


// this function takes an operator and two numbers and then calls one of the previous functions
function operate(operator, a, b) {
    // create an if... else tree that calls one of the above functions on a and b depending on what operation sign is inputted

    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    }
}



// create constants for display
const bottomDisplay = document.querySelector('.mainDisplay');
const topDisplay = document.querySelector('.topDisplay');


// create constants for each button
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const zeroButton = document.querySelector('#zero');
const equalsButton = document.querySelector('#equals');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const subtractButton = document.querySelector('#subtract');
const addButton = document.querySelector('#add');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');
const decimalButton = document.querySelector('#decimal');

// create an array that we will push the number on the display/clicked into
let numberArray = [];

// create an array that will save only TWO numbers, which will be the numbers that will be operated on
let arithmeticArray = [];

// array that will save the operator from the button we click on
let operator;

// variable to hold the solution
let solution;

// create the event listeners for each and every separate button
sevenButton.addEventListener('click', () => {
    numberArray.push(7);
    bottomDisplay.textContent = numberArray.join('');
});
eightButton.addEventListener('click', () => {
    numberArray.push(8);
    bottomDisplay.textContent = numberArray.join('');
});
nineButton.addEventListener('click', () => {
    numberArray.push(9);
    bottomDisplay.textContent = numberArray.join('');
});
fourButton.addEventListener('click', () => {
    numberArray.push(4);
    bottomDisplay.textContent = numberArray.join('');
});
fiveButton.addEventListener('click', () => {
    numberArray.push(5);
    bottomDisplay.textContent = numberArray.join('');
});
sixButton.addEventListener('click', () => {
    numberArray.push(6);
    bottomDisplay.textContent = numberArray.join('');
});
oneButton.addEventListener('click', () => {
    numberArray.push(1);
    bottomDisplay.textContent = numberArray.join('');
});
twoButton.addEventListener('click', () => {
    numberArray.push(2);
    bottomDisplay.textContent = numberArray.join('');
});
threeButton.addEventListener('click', () => {
    numberArray.push(3);
    bottomDisplay.textContent = numberArray.join('');
});
zeroButton.addEventListener('click', () => {
    numberArray.push(0);
    bottomDisplay.textContent = numberArray.join('');
});
equalsButton.addEventListener('click', () => {
    arithmeticArray.push(Number(numberArray.join('')));
    if (typeof(numberArray[0]) === Number && typeof(numberArray[1]) === undefined) {
        bottomDisplay.textContent = arithmeticArray[0];
    } else if (solution === undefined) {
        solution = operate(operator, arithmeticArray[0], arithmeticArray[1])
        arithmeticArray = [];
    }
    else if (solution !== undefined) {
        solution = operate(operator, solution, arithmeticArray[arithmeticArray.length-1]);
        arithmeticArray = [];
    }
    topDisplay.textContent = +solution;
    bottomDisplay.textContent = '';
    numberArray = [];
    decimalButton.disabled = false;
});
multiplyButton.addEventListener('click', () => {
    calculator(operator);
    operator = '*';
    populateDisplay(solution, arithmeticArray, operator);
});
divideButton.addEventListener('click', () => {
    calculator(operator);
    operator = '/';
    populateDisplay(solution, arithmeticArray, operator);
});
subtractButton.addEventListener('click', () => {
    calculator(operator);
    operator = '-';
    populateDisplay(solution, arithmeticArray, operator);
});
addButton.addEventListener('click', () => {
    calculator(operator);
    operator = '+';
    populateDisplay(solution, arithmeticArray, operator);
});
clearButton.addEventListener('click', () => {
    bottomDisplay.textContent = '';
    arithmeticArray = [];
    numberArray = [];
    solution = undefined;
    operator = '';
    topDisplay.textContent = '';
    decimalButton.disabled = false;
});
backspaceButton.addEventListener('click', () => {
    numberArray.pop();
    if (!numberArray.includes('.')) {decimalButton.disabled=false;}
    bottomDisplay.textContent = numberArray.join('');
});
decimalButton.addEventListener('click', () => {
    numberArray.push('.');
    bottomDisplay.textContent = numberArray.join('');
    decimalButton.disabled = true;
});


////// a button to help me debug my calculator on the fly. Will remove this when I'm Done!!!
// const debug = document.querySelector('#debug');

// debug.addEventListener('click', () => {
//     console.log('*************************');
//     console.log('Solution: ' + solution);
//     console.log('number array: ' + numberArray);
//     console.log('arithmeticArray: ' + arithmeticArray);
//     console.log('operator: ' + operator);
//     console.log('type of numberArray[0]: ' + typeof(numberArray[0]));
//     console.log('Type of arithmeticArray.length-1: ' + typeof(arithmeticArray.length-1));
//     console.log('value of arithmeticArray.length-1: ' + arithmeticArray[arithmeticArray.length-1]);
// });
////////////////////////////////////////////


// add keyboard compatibility
document.addEventListener('keydown', function(event) { 
    if (event.code === 'Numpad1' || event.code === 'Digit1')  {oneButton.click(); console.log('hello');};   
    if (event.code === 'Numpad2' || event.code === 'Digit2')  {twoButton.click();};   
    if (event.code === 'Numpad3' || event.code === 'Digit3')  {threeButton.click();};   
    if (event.code === 'Numpad4' || event.code === 'Digit4')  {fourButton.click();};   
    if (event.code === 'Numpad5' || event.code === 'Digit5')  {fiveButton.click();};   
    if (event.code === 'Numpad6' || event.code === 'Digit6')  {sixButton.click();};   
    if (event.code === 'Numpad7' || event.code === 'Digit7')  {sevenButton.click();};   
    if (event.code === 'Numpad8' || event.code === 'Digit8')  {eightButton.click();};   
    if (event.code === 'Numpad9' || event.code === 'Digit9')  {nineButton.click();};   
    if (event.code === 'Numpad0' || event.code === 'Digit0')  {zeroButton.click();};   
    if (event.code === 'NumpadDecimal' || event.code === 'Period')  {decimalButton.click();};   
    if (event.code === 'NumpadAdd' || event.code === 'Equal')  {addButton.click();};   
    if (event.code === 'NumpadSubtract' || event.code === 'Minus')  {subtractButton.click();};   
    if (event.code === 'NumpadMultiply')  {multiplyButton.click();};   
    if (event.code === 'NumpadDivide')  {divideButton.click();};   
    if (event.code === 'Enter' || event.code === 'NumpadEnter')  {equalsButton.click();};
    if (event.code === 'Backspace') {backspaceButton.click();};

});