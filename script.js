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

let operand1 = undefined;
let operand2 = undefined;
let operator = "";
let operatorCount = 0;
let chainedOperators = false;

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
    if (num2 != 0) {
        return num1 / num2;
    } else {
        return undefined;
    };
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

    if (operand1 === undefined) {
        return;
    };

    if (inputTextBox.textContent != '') {
        operand2 = parseInt(inputTextBox.textContent);
    } else {
        operand2 = undefined;
    };

    if (Number.isInteger(operate(operand1, operand2, operator))) {
        inputTextBox.textContent = String(operate(operand1, operand2, operator));
    } else if (operate(operand1, operand2, operator) === undefined) {
        alert("Error: Cannot divide by zero.")
        operand1 = 0;
        operand2 = 0;
        operator = "";
    } else if (Number.isNaN(operate(operand1, operand2, operator))) {
        alert("Error: Incomplete equation.")
        operand1 = 0;
        operand2 = 0;
        operator = "";
    } else {
        inputTextBox.textContent = String((operate(operand1, operand2, operator).toFixed(3)));
    };
};

numberZeroButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('0');
    }
});

numberOneButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('1');
    }
});

numberTwoButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('2');
    }
});

numberThreeButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('3');
    }
});

numberFourButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('4');
    }
});

numberFiveButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('5');
    }
});

numberSixButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('6');
    }
});

numberSevenButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('7');
    };
});

numberEightButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('8');
    }
});

numberNineButton.addEventListener('click', () => {
    inputTextBox.style.fontSize = "55px";

    if (chainedOperators == true) {
        inputTextBox.textContent = '';
        chainedOperators = false;
    };

    if (inputTextBox.textContent.length < 10) {
        inputTextBox.append('9');
    }
});

addButton.addEventListener('click', () => {
        if (operator !== "" && operand1 !== undefined) {
            calculate();
        };

        operator = "+";
        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = "";
        chainedOperators = true;
});

subtractButton.addEventListener('click', () => {
        if (operator !== "" && operand1 !== undefined) {
            calculate();
        };

        operator = "-";
        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = "";
        chainedOperators = true;
});

multiplyButton.addEventListener('click', () => {
        if (operator !== "" && operand1 !== undefined) {
            calculate();
        };

        operator = "*";
        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = "";
        chainedOperators = true;
});

divideButton.addEventListener('click', () => {
        if (operator !== "" && operand1 !== undefined) {
            calculate();
        };

        operator = "/";
        operand1 = parseInt(inputTextBox.textContent);
        inputTextBox.textContent = "";
        chainedOperators = true;
});

equalsButton.addEventListener('click', () => {
    calculate();
    operatorCount = 0;
});

clearButton.addEventListener('click', () => {
    inputTextBox.textContent = '';
    operator = '';
    operand1 = undefined;
    operand2 = undefined;
    operatorCount = 0;
    chainedOperators = false;
});

