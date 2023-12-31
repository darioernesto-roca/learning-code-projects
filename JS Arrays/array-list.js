// Array:

// Flexible Size: Unlike in Java, JavaScript arrays are dynamic in size. You can add or remove elements at any time.
// Type Flexibility: JavaScript arrays can hold elements of different types in the same array.
// Methods and Properties: JavaScript arrays come with a variety of built-in methods like push(), pop(), slice(), etc.
// Syntax Example:

let numArray = [1, 2, 3, 4, 5]; // An array of numbers
let mixedArray = [1, 'text', { a: 1 }, [1, 2, 3]]; // An array containing different types

// Adding elements
numArray.push(6); // Now numArray is [1, 2, 3, 4, 5, 6]

// Removing elements
numArray.pop(); // Now numArray is [1, 2, 3, 4, 5]

// Accessing length
numArray.length; // Outputs: 5

// Accessing elements
console.log(numArray[0]); // Outputs: 1


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
  