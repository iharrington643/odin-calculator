const inputTextBox = document.getElementById('input-text-box');
const numberZeroButton = document.getElementById('number-zero-button');
const numberOneButton = document.getElementById('number-one-button');
const numberTwoButton = document.getElementById('number-two-button');
const numberThreeButton = document.getElementById('number-three-button');
const numberFourButton = document.getElementById('number-four-button');
const numberFiveButton = document.getElementById('number-five-button');
const numberSixButton = document.getElementById('number-six-button');
const numberSevenButton = document.getElementById('number-seven-button');
const numberEightButton = document.getElementById('number-eight-button');
const numberNineButton = document.getElementById('number-nine-button');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const equalsButton = document.getElementById('equals-button');
const clearButton = document.getElemnentById('clear-button');

let operand1 = 0;
let operand2 = 0;
let operator = "";

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, sign) {
    if (sign == "+") {
        return add(num1, num2);
    } else if (sign == "-") {
        return subtract(num1, num2);
    } else if (sign == "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    };
};