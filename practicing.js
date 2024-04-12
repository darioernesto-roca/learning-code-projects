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


'I am learning Web Dev'
  .split(' ')
  .map(s=>
    s[0].toUpperCase() 
    + s.slice(1).toLowerCase())
  .join(' ')

// 'I Am Learning Web Dev'


// 1. .split(' '): Splits the string into an array of words using a space ' ' as the separator. The result is ["I", "am", "learning", "Web", "Dev"].

//2. .map(s=> s[0].toUpperCase() + s.slice(1).toLowerCase()): Maps over each word in the array, converting the first character to uppercase and the rest of the word to lowercase. This step ensures that each word starts with a capital letter and the rest of the letters are lowercase, regardless of their original case.

// "I" becomes "I" (no change since it's already a single uppercase letter).
// "am" becomes "Am" (the first letter is capitalized).
// "learning" becomes "Learning" (the first letter is capitalized).
// "Web" becomes "Web" (no change since it already meets the criteria).
// "Dev" becomes "Dev" (no change since it already meets the criteria).
// .join(' '): Joins the transformed array elements back into a string, separating each word with a space. The result is "I Am Learning Web Dev".

console.log(null || 'string') // 'string'

let income = 1500
if (income > 2500) {
  var tax = 500
} else {
  var tax = 200
}
console.log(tax); // 200


// Object practice

const obj = {
  "1": a,
  1: "b",
  [1]: "c"
}

console.log(obj["1"]); // "c"

// The object `obj` has three properties: `"1"`, `1`, and `[1]`. These properties are defined using different syntaxes: string literal, number literal, and computed property.


// What will be the output
const foo = [1, 2, 3];
const bar = foo.concat(4, 5);
const baz = [...foo, 4, 5];
console.log(bar, baz); // [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]

// The selected code is demonstrating two different ways to add elements to an array in JavaScript: using the concat method and the spread operator (...).  First, an array foo is declared and initialized with the values [1, 2, 3]. Next, a new array bar is created by calling the concat method on foo and passing in 4 and 5 as arguments. The concat method returns a new array that is a combination of the original array and the values passed as arguments. So, bar will be a new array with the values [1, 2, 3, 4, 5]. Then, another new array baz is created using the spread operator. The spread operator (...) takes all elements from foo and spreads them into the new array. After that, 4 and 5 are added to the end of the array. So, baz will also be an array with the values [1, 2, 3, 4, 5]. Finally, the console.log statement logs the values of bar and baz to the console. Since both bar and baz are [1, 2, 3, 4, 5], the output will be: [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]