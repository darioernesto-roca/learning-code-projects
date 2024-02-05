// Array:

// Flexible Size: Unlike in Java, JavaScript arrays are dynamic in size. You can add or remove elements at any time.
// Type Flexibility: JavaScript arrays can hold elements of different types in the same array.
// Methods and Properties: JavaScript arrays come with a variety of built-in methods like push(), pop(), slice(), etc.
// Syntax Example:

let numArray = [1, 2, 3, 4, 5]; // An array of numbers
let mixedArray = [1, 'text', { a: 1 }, [1, 2, 3]]; // An array containing different types

// Select an element from the array
console.log(numArray[2]); // Outputs: 3

// Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string. This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.The at() method was introduced in ES2022 to solve this problem. It allows you to access elements from the end of an array using negative indices. The at() method is a more readable and safer alternative to using bracket notation with negative indices.

// .at method
console.log(numArray.at(2)); // Outputs: 3
console.log(numArray.at(-2)); // Outputs: 4

// Adding elements (pushing is adding at the end)
numArray.push(6); // Now numArray is [1, 2, 3, 4, 5, 6]

// Removing elements (popping is removing from the end)
numArray.pop(); // Now numArray is [1, 2, 3, 4, 5]

// Adding elements (unshifting is adding at the beginning)
numArray.unshift(0); // Now numArray is [0, 1, 2, 3, 4, 5]

// Removing elements (shifting is removing from the beginning)
numArray.shift(); // Now numArray is [1, 2, 3, 4, 5]

// Accessing length
console.log(numArray.length); // Outputs: 5

// Accessing elements
console.log(numArray[0]); // Outputs: 1

// Adding an element to the beginning
numArray.unshift(0); // numArray is now [0, 1, 2, 3, 4, 5]

// Removing the first element
numArray.shift(); // numArray is back to [1, 2, 3, 4, 5]

// To string (converts array to a string)
let string = numArray.toString(); // string is "1, 2, 3, 4, 5"

// Join elements into a string
let joined = numArray.join(', '); // joined is "1, 2, 3, 4, 5"


// Finding an element
let index = numArray.indexOf(3); // index is 2

// Sorting elements
numArray.sort((a, b) => b - a); // numArray is now [5, 4, 3, 2, 1]

// Creating a new array with doubled values
let doubled = numArray.map(x => x * 2); // doubled is [10, 8, 6, 4, 2]

//Filtering elements
let evens = numArray.filter(x => x % 2 == 0); // evens is [4, 2]

// Slicing elements
let sliced = numArray.slice(0, 2); // sliced is [5, 4]


// Array-like Objects:

// Similar to Arrays but Not True Arrays: Examples include arguments in functions or NodeList objects from the DOM. They behave like arrays but don't have all array methods by default.
// Type-Specific Methods and Properties: Often, they have specific methods and properties suitable for their intended use.
// Syntax Example:

function exampleFunction() {
    console.log(arguments.length); // Number of arguments passed to the function
    console.log(arguments[0]); // First argument
    // Note: 'arguments' is an array-like object available within functions
  }
  
  exampleFunction(10, false, "hello"); // Outputs: 3 and then 10
  
  // NodeList example
  let nodeList = document.querySelectorAll('div'); // This is an array-like object
  nodeList.forEach(node => console.log(node)); // Iterating over the NodeList
  

  //Array Of:
  const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
  console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

  //Array Search
  const array = [1, 2, 3, 4, 5];

  console.log(array.indexOf(3)); // 2