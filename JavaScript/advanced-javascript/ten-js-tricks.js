// @link https://lokesh-prajapati.medium.com/10-advanced-javascript-tricks-for-experienced-developers-8afb44b24427

/* 1. Destructuring Assignment
Assignment destructuring is a concise way to extract values ​​from arrays or objects and assign them to variables. It simplifies your code and improves readability.For arrays, you can use bracket notation, and you can use braces for objects.
*/
// Destructuring arrays
const [firstItem, secondItem, ...rest] = [1, 2, 3, 4, 5];
console.log(firstItem); // 1
console.log(secondItem); // 2
console.log(rest); // [3, 4, 5]

// Destructuring objects
const { name, age, ...details } = { name: 'Lokesh', age: 25, occupation: 'Developer' };
console.log(name); // Lokesh
console.log(age); // 25
console.log(details); // { occupation: 'Developer' }

/* 2. Spread Syntax
We can use the spread syntax to extend the elements of an array or the properties of an object into another array or object. This is useful for making copies, merging objects, and passing multiple arguments to functions.
*/
// Copy an array
const originalArray = [1, 2, 3];
const newArray = [...originalArray];

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
