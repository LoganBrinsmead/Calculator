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

// this function takes an operator and two numbers and then calls on of the previous functions
function operate(operator, a, b) {
    // create an if... else if tree that calls one of the above functions on a and b depending on what operation sign is inputted

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