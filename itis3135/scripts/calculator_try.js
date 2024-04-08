let numbers = ["", ""];
let operator = null;
let stage = 0;
const operatorArea = document.getElementById("calc-operator-area");
const area1 = document.getElementById("calc-area1");
const area2 = document.getElementById("calc-area2-span");


function number(num) {
    if (numbers[stage].length > 20) {
        alert("Number Too Large");
        return;
    }
    num = num.toString();
    numbers[stage] += num;
    updateOutputArea();
}

function clearCalc() {
    console.log("clearing")
    if (stage == 0) {
        numbers[0] = "";
        updateOutputArea();
        return;
    }
    if (numbers[1] == "") {
        operator = null;
        stage = 0;
        clear();
    }
    numbers[1] = "";
    updateOutputArea();
}

function operatorChange(op) {
    if (op == 0) {
        operator = "+";
    } else if (op == 1) {
        operator = "-";
    } else if (op == 2) {
        operator = "*";
    } else {
        operator = "/";
    }
    stage = 1;
    updateOutputArea();
}

function calculate() {
    if (numbers[0] == "" || numbers[1] == "") {
        alert("Must have numbers to calculate.");
        return;
    }
    let number1 = parseFloat(numbers[0]);
    let number2 = parseFloat(numbers[1]);
    let output;
    if (operator == "+") {
        output = number1 + number2;
    } else if (operator == "-") {
        output = number1 - number2;
    } else if (operator == "*") {
        output = number1 * number2;
    } else if (operator == "/") {
        output = number1 / number2;
    } else {
        alert("You must choose an operator.");
        return;
    }
    numbers[0] = output.toString();
    numbers[1] = "";
    operator = null;
    stage = 0;
    updateOutputArea();
}


function updateOutputArea() {
    if (stage == 0) {
        operatorArea.innerText = "";
        area1.innerText = "";
        area2.innerText = numbers[0];
    } else {
        operatorArea.innerText = operator;
        area1.innerText = numbers[0];
        area2.innerText = numbers[1];
    }
    console.log(numbers[0] + "    " + numbers[1]);
}

function inverseNum() {
    if (numbers[stage].charAt(0) == "-") {
        numbers[stage] = numbers[stage].slice(1);
    } else {
        numbers[stage] = "-" + numbers[stage];
    }
    updateOutputArea();
}

function decimalCalc() {
    numbers[stage] += ".";
    updateOutputArea();
}

function percentCalc() {
    numbers[stage] = (parseFloat(numbers[stage]) / 100).toString();
    updateOutputArea();
}