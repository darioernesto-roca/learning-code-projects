let count = 0;

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function updateDisplay() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = count;
}
