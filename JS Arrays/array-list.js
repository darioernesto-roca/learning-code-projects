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
console.log(numArray.length); // Outputs: 5

// Accessing elements
console.log(numArray[0]); // Outputs: 1

// Adding an element to the beginning
numArray.unshift(0); // numArray is now [0, 1, 2, 3, 4, 5]

// Removing the first element
numArray.shift(); // numArray is back to [1, 2, 3, 4, 5]

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