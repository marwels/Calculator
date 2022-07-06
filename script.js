let displayValue = 0;

function addListeners() {
    document.querySelectorAll("button").forEach(item => {
        item.addEventListener("click", event => {
            if (item.hasAttribute('data-digit')) {
                console.log("data-digit exists");
                display(item.getAttribute('data-digit'));
                return Number.parseInt(item.getAttribute('data-digit'));
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
    document.getElementById("display").innerText += clicked;
}

