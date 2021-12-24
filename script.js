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

// function for the actual calculations and populating the display
function calculator(operator) {
    display.textContent = '';
    if(numberArray[0] !== 0) {arithmeticArray.push(Number(numberArray.join('')))};

    if (arithmeticArray[0] !== undefined && arithmeticArray[1] !== undefined && solution === undefined) {
        solution = operate(operator, arithmeticArray[1], arithmeticArray[0]);
    } else if (solution !== undefined && arithmeticArray[arithmeticArray.length-1] !== 0) {
        // operator = '/'
        solution = operate(operator, solution, arithmeticArray[arithmeticArray.length-1]);
        // topDisplay.textContent = +solution + operator;
        arithmeticArray = [];
    } 
    numberArray = [];
    // operator = '/';
    decimalButton.disabled = 'false';


    if(arithmeticArray[0] !== undefined && arithmeticArray[1] === undefined && solution === undefined) {
        topDisplay.textContent = +arithmeticArray[0] + operator;
    } else if (arithmeticArray[0] !== undefined && arithmeticArray[1] !== undefined) {
        topDisplay.textContent = +arithmeticArray[0] + +arithmeticArray[1] + operator; 
    }


    // else if (arithmeticArray === undefined && solution !== undefined) {
    //     topDisplay.textContent = solution + operator;
    // }
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
const display = document.querySelector('.mainDisplay');
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

    const seven = document.createElement('div');
    seven.textContent = '7';
    display.appendChild(seven);
});
eightButton.addEventListener('click', () => {
    numberArray.push(8);

    const eight = document.createElement('div');
    eight.textContent = '8';
    display.appendChild(eight);
});
nineButton.addEventListener('click', () => {
    numberArray.push(9);

    const nine = document.createElement('div');
    nine.textContent = '9';
    display.appendChild(nine);
});
fourButton.addEventListener('click', () => {
    numberArray.push(4);

    const four = document.createElement('div');
    four.textContent = '4';
    display.appendChild(four);
});
fiveButton.addEventListener('click', () => {
    numberArray.push(5);

    const five = document.createElement('div');
    five.textContent = '5';
    display.appendChild(five);
});
sixButton.addEventListener('click', () => {
    numberArray.push(6);

    const six = document.createElement('div');
    six.textContent = '6';
    display.appendChild(six);
});
oneButton.addEventListener('click', () => {
    numberArray.push(1);

    const one = document.createElement('div');
    one.textContent = '1';
    display.appendChild(one);
});
twoButton.addEventListener('click', () => {
    numberArray.push(2);

    const two = document.createElement('div');
    two.textContent = '2';
    display.appendChild(two);
});
threeButton.addEventListener('click', () => {
    numberArray.push(3);

    const three = document.createElement('div');
    three.textContent = '3';
    display.appendChild(three);
});
zeroButton.addEventListener('click', () => {
    numberArray.push(0);

    const zero = document.createElement('div');
    zero.textContent = '0';
    display.appendChild(zero);
});
equalsButton.addEventListener('click', () => {

    ////////////////////////////////////////////    ////////////////////////////////////////////
    if(arithmeticArray[0] !== undefined && arithmeticArray[1] === undefined && solution === undefined) {
        topDisplay.textContent = +arithmeticArray[0] + operator;
    } else if (arithmeticArray[0] !== undefined && arithmeticArray[1] !== undefined) {
        topDisplay.textContent = +arithmeticArray[0] + +arithmeticArray[1] + operator; 
    }
    ////////////////////////////////////////////


    display.textContent = '0';
    arithmeticArray.push(Number(numberArray.join('')));
    if (typeof(numberArray[0]) === Number && typeof(numberArray[1]) === undefined) {
        display.textContent = arithmeticArray[0];
    } else if (solution === undefined) {
        solution = operate(operator, arithmeticArray[0], arithmeticArray[1])
        display.textContent = solution;
        arithmeticArray = [];
    }
    else if (solution !== undefined) {
        solution = operate(operator, solution, arithmeticArray[arithmeticArray.length-1]);
        // topDisplay.textContent = solution;

        arithmeticArray = [];
    }
    numberArray = [];
    decimalButton.disabled = 'false';
});
multiplyButton.addEventListener('click', () => {
    operator = '*';
    calculator(operator);
});
divideButton.addEventListener('click', () => {
    operator = '/';
    calculator(operator);
});
subtractButton.addEventListener('click', () => {
    operator = '-';
    calculator(operator);
});
addButton.addEventListener('click', () => {
    operator = '+';
    calculator(operator);
});
clearButton.addEventListener('click', () => {
    display.textContent = '';
    arithmeticArray = [];
    numberArray = [];
    solution = undefined;
    operator = '';
    topDisplay.textContent = '';
    decimalButton.disabled = 'false';
});
backspaceButton.addEventListener('click', () => {
    numberArray.pop();
    display.textContent = numberArray;
});
decimalButton.addEventListener('click', () => {
    numberArray.push('.');
    decimalButton.disabled = 'true';
});

if (solution === undefined && numberArray !== undefined) {
    display.textContent = numberArray;
} else if (solution !== undefined && numberArray === undefined) {
    display.textContent = solution;
}

////// a button to help me debug my calculator on the fly. Will remove this when I'm Done!!!
const debug = document.querySelector('#debug');

debug.addEventListener('click', () => {
    console.log('*************************');
    console.log('Solution: ' + solution);
    console.log('number array: ' + numberArray);
    console.log('arithmeticArray: ' + arithmeticArray);
    console.log('operator: ' + operator);
    console.log('type of numberArray[0]: ' + typeof(numberArray[0]));
    console.log('Type of arithmeticArray.length-1: ' + typeof(arithmeticArray.length-1));
    console.log('value of arithmeticArray.length-1: ' + arithmeticArray[arithmeticArray.length-1]);
});
////////////////////////////////////////////



