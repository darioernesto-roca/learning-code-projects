/*
An example of a Body Mass Index (BMI) calculator using JavaScript functions,
if and else if statements, and DOMScripting.
*/

function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    console.log(height, weight);
    let bmi = Math.round(weight / (height * height));
    if (bmi < 18.5) {
        document.getElementById('result').textContent = `Your Body Mass Index is ${bmi} - Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('result').textContent = `Your Body Mass Index is ${bmi} - Normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('result').textContent = `Your Body Mass Index is ${bmi} - Overweight`;
    } else {
        document.getElementById('result').textContent = `Your Body Mass Index is ${bmi} - Obese`;
    }

}

document.getElementById('calculate').addEventListener('click', calculateBMI);
document.getElementBuId('result').textContent = 'Please enter your height and weight to calculate your BMI';
