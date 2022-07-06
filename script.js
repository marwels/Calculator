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
                // return Number.parseInt(item.getAttribute('data-digit'));
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
        return;
    } else {
        displayValue += clicked;
        document.getElementById("display").innerText = displayValue;
    }
}

function operation(clicked) {

    if (clicked === "clear") {
        displayValue = "0";
        document.getElementById("display").innerText = displayValue;
    } else if (clicked === "delete") {
        let sliced = displayValue.slice(0, -1);
        displayValue = sliced;
        document.getElementById("display").innerText = displayValue;
    } else if (clicked === "division") {
        numberA = Number.parseInt(displayValue);
        operationToCompute = "division";
        displayValue = "0";
    } else if (clicked === "multiplication") {
        numberA = Number.parseInt(displayValue);
        operationToCompute = "multiplication";
        displayValue = "0";
    } else if (clicked === "subtraction") {
        numberA = Number.parseInt(displayValue);
        operationToCompute = "subtraction";
        displayValue = "0";
    } else if (clicked === "addition") {
        numberA = Number.parseInt(displayValue);
        operationToCompute = "addition";
        displayValue = "0";
    } else if (clicked === "dot") {
    } else if (clicked === "sum") {
    } else {
        displayValue = "error";
    }

}

function division() {
    let numberA = Number.parseInt(displayValue);


}