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