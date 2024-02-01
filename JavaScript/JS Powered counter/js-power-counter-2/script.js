let count = 0;

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

function reset() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = count;
}
