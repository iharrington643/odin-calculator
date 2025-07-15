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
const clearButton = document.getElementById('clear-button');

let numCount = 0;
let operand1 = 0;
let operand2 = 0;
let operator = "";
let operatorCount = 0;

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

function calculate() {
    numCount = 0;

    if (inputTextBox.textContent != "") {
        operand2 = parseInt(inputTextBox.textContent);
    } else {
        operand2 = 0;
    };

    if (Number.isInteger(operate(operand1, operand2, operator))) {
        inputTextBox.textContent = String(operate(operand1, operand2, operator));
    } else {
        inputTextBox.textContent = String((operate(operand1, operand2, operator).toFixed(3)));
    }
    
    operatorCount = 0;
};

numberZeroButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('0');
        numCount += 1;
    };
});

numberOneButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('1');
        numCount += 1;
    };
});

numberTwoButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('2');
        numCount += 1;
    };
});

numberThreeButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('3');
        numCount += 1;
    };
});

numberFourButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('4');
        numCount += 1;
    };
});

numberFiveButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('5');
        numCount += 1;
    };
});

numberSixButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('6');
        numCount += 1;
    };
});

numberSevenButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('7');
        numCount += 1;
    };
});

numberEightButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('8');
        numCount += 1;
    };
});

numberNineButton.addEventListener('click', () => {
    if (numCount < 10) {
        inputTextBox.append('9');
        numCount += 1;
    };
});

addButton.addEventListener('click', () => {
    operator = "+";

    if (operatorCount < 1) {
        numCount = 0;

        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = '';
        operatorCount += 1;
    } else {
        calculate();
    }
});

subtractButton.addEventListener('click', () => {
    operator = "-";
    numCount = 0;

    if (operatorCount < 1) {
        numCount = 0;

        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = '';
        operatorCount += 1;
    } else {
        calculate();
    }
});

multiplyButton.addEventListener('click', () => {
    operator = "*";
    numCount = 0;

    if (operatorCount < 1) {
        numCount = 0;

        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = '';
        operatorCount += 1;
    } else {
        calculate();
    };
});

divideButton.addEventListener('click', () => {
    operator = "/";
    numCount = 0;

    if (operatorCount < 1) {
        numCount = 0;
        
        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = '';
        operatorCount += 1;
    } else {
        calculate();
    };
});

equalsButton.addEventListener('click', calculate);

clearButton.addEventListener('click', () => {
    inputTextBox.textContent = '';
});