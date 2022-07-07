let displayValue = "0";
let numberA = 0;
let operationToCompute = "";

document.getElementById("display").innerText = displayValue;

function addListeners() {
    document.querySelectorAll("button").forEach(item => {
        item.addEventListener("click", event => {
            if (item.hasAttribute('data-digit')) {
                console.log("data-digit exists");
                display(item.getAttribute('data-digit'));
                // return Number(item.getAttribute('data-digit'));
            } else if (item.hasAttribute('data-op')) {
                console.log("data-op exists");
                operation(item.getAttribute('data-op'));
                //return item.getAttribute('data-op');
            }
        })
    }
    )
};

addListeners();

function display(clicked) {
    if (displayValue === "0") {
        document.getElementById("display").innerText = clicked;
        displayValue = clicked;
        round();
        return;
    } else {
        displayValue += clicked;
        round();
        document.getElementById("display").innerText = displayValue;
    }
}

function operation(clicked) {

    if (clicked === "clear") {
        displayValue = "0";
        numberA = 0;
        operationToCompute = "";
        document.getElementById("display").innerText = displayValue;
    } else if (clicked === "delete") {
        if (displayValue === "0") {
            return;
        } if (displayValue.length === 1) {
            displayValue = "0";
            document.getElementById("display").innerText = displayValue;
        } else {
            let sliced = String(displayValue).slice(0, -1);
            displayValue = sliced;
            document.getElementById("display").innerText = displayValue;
        }
    } else if (clicked === "division") {
        if (numberA != 0) {
            sum();
        }
        numberA = Number(displayValue);
        operationToCompute = "division";
        displayValue = "0";
    } else if (clicked === "multiplication") {
        if (numberA != 0) {
            sum();
        }
        numberA = Number(displayValue);
        operationToCompute = "multiplication";
        displayValue = "0";
    } else if (clicked === "subtraction") {
        if (numberA != 0) {
            sum();
        }
        numberA = Number(displayValue);
        operationToCompute = "subtraction";
        displayValue = "0";
    } else if (clicked === "addition") {
        if (numberA != 0) {
            sum();
        }
        numberA = Number(displayValue);
        operationToCompute = "addition";
        displayValue = "0";
    } else if (clicked === "dot") {
        if (displayValue.includes(".")) {
            return;
        }
        display(".");
    } else if (clicked === "sum") {
        sum();
    } else {
        console.log("errorB");
    }
}

function sum() {
    if (operationToCompute === "") {
        return;
    } else if (operationToCompute === "division") {
        division();
    } else if (operationToCompute === "multiplication") {
        multiplication();
    } else if (operationToCompute === "subtraction") {
        subtraction();
    } else if (operationToCompute === "addition") {
        addition();
    } else { console.log("errorA") }
}

function division() {
    if (displayValue === "0") {
        document.getElementById("display").innerText = "ERROR: DON'T DIVIDE BY 0!"
        return;
    }
    let numberB = Number(displayValue);
    let outcome = numberA / numberB;
    displayValue = outcome;
    round();
    document.getElementById("display").innerText = displayValue;
    operationToCompute = "";
}

function multiplication() {
    let numberB = Number(displayValue);
    let outcome = numberA * numberB;
    displayValue = outcome;
    round();
    document.getElementById("display").innerText = displayValue;
    operationToCompute = "";
}

function subtraction() {
    let numberB = Number(displayValue);
    let outcome = numberA - numberB;
    displayValue = outcome;
    round();
    document.getElementById("display").innerText = displayValue;
    operationToCompute = "";
}

function addition() {
    let numberB = Number(displayValue);
    let outcome = numberA + numberB;
    displayValue = outcome;
    round();
    document.getElementById("display").innerText = displayValue;
    operationToCompute = "";
}

function round() {
    if ((String(displayValue)).length >= 12) {
        if (displayValue.includes(".")) {
            let rounded = Math.round(Number(displayValue) * 10000000000) / 10000000000;
            displayValue = rounded;
        } else {
            displayValue = "ERROR";
        }
    }
}
//Add keyboard support!