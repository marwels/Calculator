let displayValue = 0;

function addListeners() {
    document.querySelectorAll("button").forEach(item => {
        item.addEventListener("click", event => {
            if (item.hasAttribute('data-digit')) {
                return Number.parseInt(item.getAttribute('data-digit'));
            }
        })
    }
    )
}

addListeners();