// Reduce method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum all the numbers in the array

function sum (numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}

console.log(sum(numbers)); // 55

// Sum all even numbers

function sumEvenNumbers (numbers) {
    return numbers.reduce((acc, number) => number % 2 === 0 ? acc + number : acc, 0);
}

console.log(sumEvenNumbers(numbers)); // 30

const a = [1, 2, 3, 4, 5];
const b = [...a];
b.push(6);
console.log(a); // [1, 2, 3, 4, 5]

