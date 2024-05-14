// Function calculates the BMI based on the height and weight entered by the user

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