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


// Practice with spread operator
const a = [1, 2, 3, 4, 5];
const b = [...a];
b.push(6);
console.log(a); // [1, 2, 3, 4, 5]

// Find the maximum number in the array

function findMax(numbers) {
    return numbers.reduce((max, number) => number > max ? number : max, -Infinity);
}

console.log(findMax(numbers)); // 10

// The selected code defines a function named [`findMax`] that takes an array of numbers as an argument and returns the maximum number in the array.

// The function uses the `reduce` method of the array to find the maximum number. The `reduce` method is a built-in JavaScript function that reduces an array to a single value. It does this by applying a function (provided as the first argument to `reduce`) to each element of the array, from left to right.

// The function provided to `reduce` in this case is `(max, number) => number > max ? number : max`. This is an arrow function that takes two arguments: `max` and `number`. `max` is the accumulator, which holds the maximum number found so far, and `number` is the current element of the array.

// The function checks if `number` is greater than `max`. If it is, it returns `number` (because `number` is the new maximum). If not, it returns `max` (because the maximum remains unchanged).

// The second argument to `reduce` is `-Infinity`, which is the initial value of `max`. This is a common technique when searching for a maximum value, because any number will be greater than `-Infinity`, so the first number in the array will immediately become the new maximum.

// So, in summary, [`findMax`] works by iterating over the array and keeping track of the maximum number found so far, and then it returns that maximum number.

const c = a.map((number) => number * 2);
console.log(c); // [2, 4, 6, 8, 10]
