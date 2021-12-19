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

// create the functions that populates the display when you click the number buttons
// store the "display value" in a variable somewhere for use in the next step

// pseudocode>>>
// create a const queryselector for the display
// create queryselector consts for each button
// create an array that we will push() each clicked number into
// create the event listeners for each and every separate button
// in each event listener complete on a click
// when the button is clicked, push that number into the array and push the number into the display on the html using DOM

// create constant for display
const display = document.querySelector('.display');

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

// create an array that we will push the number on the display/clicked into
let displayArray = [];

// create the event listeners for each and every separate button
sevenButton.addEventListener('click', () => {
    displayArray.push(7);

    const seven = document.createElement('div');
    seven.textContent = '7';
    display.appendChild(seven);
});
eightButton.addEventListener('click', () => {
    displayArray.push(8);

    const eight = document.createElement('div');
    eight.textContent = '8';
    display.appendChild(eight);
});
nineButton.addEventListener('click', () => {
    displayArray.push(9);

    const nine = document.createElement('div');
    nine.textContent = '9';
    display.appendChild(nine);
});
fourButton.addEventListener('click', () => {
    displayArray.push(4);

    const four = document.createElement('div');
    four.textContent = '4';
    display.appendChild(four);
});
fiveButton.addEventListener('click', () => {
    displayArray.push(5);

    const five = document.createElement('div');
    five.textContent = '5';
    display.appendChild(five);
});
sixButton.addEventListener('click', () => {
    displayArray.push(6);

    const six = document.createElement('div');
    six.textContent = '6';
    display.appendChild(six);
});
oneButton.addEventListener('click', () => {
    displayArray.push(1);

    const one = document.createElement('div');
    one.textContent = '1';
    display.appendChild(one);
});
twoButton.addEventListener('click', () => {
    displayArray.push(2);

    const two = document.createElement('div');
    two.textContent = '2';
    display.appendChild(two);
});
threeButton.addEventListener('click', () => {
    displayArray.push(3);

    const three = document.createElement('div');
    three.textContent = '3';
    display.appendChild(three);
});
zeroButton.addEventListener('click', () => {
    displayArray.push(0);

    const zero = document.createElement('div');
    zero.textContent = '0';
    display.appendChild(zero);
});
equalsButton.addEventListener('click', () => {
    displayArray.push();

    const equals = document.createElement('div');
    seven.textContent = '=';
    display.appendChild(equals);
});
