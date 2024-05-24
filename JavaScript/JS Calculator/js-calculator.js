// JS Calculator

const calculator = document.createElement('div');
calculator.id = 'calculator';
calculator.style.width = '200px';
calculator.style.height = '200px';
calculator.style.border = '1px solid black';
calculator.style.display = 'grid';
calculator.style.gridTemplateColumns = 'repeat(4, 1fr)';
calculator.style.gridTemplateRows = 'repeat(5, 1fr)';
calculator.style.gap = '1px';
// calculator.style.position = 'fixed';
// calculator.style.bottom = '0';
// calculator.style.right = '0';
calculator.style.backgroundColor = 'white';
calculator.style.color = 'black';
calculator.style.zIndex = '9999';
calculator.style.padding = '5px';

const buttons = [ '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

buttons.forEach(buttonText => {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.style.backgroundColor = 'lightgray';
    button.style.border = '1px solid black';
    button.style.cursor = 'pointer';
    button.style.fontSize = '1.5em';
    button.onclick = () => {
        if (buttonText === 'C') {
            calculator.querySelector('input').value = '';
        } else if (buttonText === '=') {
            calculator.querySelector('input').value = eval(calculator.querySelector('input').value);
        } else {
            calculator.querySelector('input').value += buttonText;
        }
    }
    calculator.appendChild(button);
});

const input = document.createElement('input');
input.style.gridColumn = '1 / -1';
input.style.height = '30px';
input.style.fontSize = '1.5em';
input.style.textAlign = 'right';
calculator.appendChild(input);

document.body.appendChild(calculator);