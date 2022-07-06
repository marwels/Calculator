let displayValue = "0";
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
                return item.getAttribute('data-op');
            }
        })
    }
    )
};

addListeners();

function display(clicked) {
    if (document.getElementById("display").innerText === "0") {
        document.getElementById("display").innerText = clicked;
        displayValue = clicked;
        return;
    } else {
        displayValue += clicked;
        document.getElementById("display").innerText = displayValue;
    }
}

function operation(clicked) {
    let numberA = Number.parseInt(displayValue);
    if (item.getAttribute('data-op') === "clear") {
        displayValue = "0";
    } else if (item.getAttribute('data-op') === "delete") {
        let sliced = displayValue.slice(0, -1);
        displayValue = sliced;
    } else if (item.getAttribute('data-op') === "division") {
    } else if (item.getAttribute('data-op') === "multiplication") {
    } else if (item.getAttribute('data-op') === "subtraction") {
    } else if (item.getAttribute('data-op') === "addition") {
    } else if (item.getAttribute('data-op') === "dot") {
    } else if (item.getAttribute('data-op') === "sum") {
    } else {
        displayValue = "error";
    }

}