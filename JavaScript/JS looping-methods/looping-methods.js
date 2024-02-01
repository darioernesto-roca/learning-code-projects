// JavaScript offers several options to repeatedly run a block of code, including while, do while, for and for-in.

// for Loop: The traditional for loop is one of the most widely used. It repeats a block of code a certain number of times based on a counter variable.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while Loop: The while loop continues executing its code block as long as the specified condition is true.

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// do...while Loop: Similar to the while loop, but it runs at least once because the condition is checked after the code block is executed.

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);

// for...in Loop: This loop is used for iterating over the enumerable properties of an object. It iterates over the property names.

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// for...of Loop: Introduced in ES6, the for...of loop is used for iterating over iterable objects such as Arrays, Strings, Maps, NodeLists, and more.

const array = [10, 20, 30];
for (const value of array) {
    console.log(value);
}

// forEach() Method: This method is used for iterating over an array. It accepts a callback function that is called for each iteration. The callback function accepts three arguments: the current value, the current index, and the array itself. The forEach() method does not return anything. It simply calls the provided function for each element in the array. The forEach() method is not available in Internet Explorer. To support IE, you can use a polyfill. The polyfill is available on the MDN website. The forEach() method is also available on the NodeList object. It not a traditional loop, but a higher-order function.

const arrayTwo = [10, 20, 30];
arrayTwo.forEach(value => console.log(value));

// Array.map: While not a loop in the traditional sense, it's used to transform elements in an array and return a new array.

const arrayMap = [1, 2, 3];
const doubled = arrayMap.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

// Array.filter: While not a loop in the traditional sense, it's used to filter elements in an array and return a new array. It creates a new array with all elements that pass the test implemented by the provided function.

const arrayFilter = [1, 2, 3, 4, 5];
const even = arrayFilter.filter(x => x % 2 === 0);
console.log(even); // [2, 4]

// Array.reduce: This method executes a reducer function on each element of the array, resulting in a single output value.

const arrayReduce = [1, 2, 3, 4, 5];
const sum = arrayReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
