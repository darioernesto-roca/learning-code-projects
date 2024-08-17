/*1. parseInt() : The parseInt function converts a string into an integer. It's especially useful when working with user inputs or data stored as strings.
*/

const numberString = "42";
const number = parseInt(numberString);
console.log(number); // Result: 42

/*2.map(): The map function is used on arrays to apply a function to each element and create a new array with the results
*/

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);

/* 3. filter(): The filter function is used on arrays to create a new array with elements that pass a certain condition.
*/

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(number => number % 2 === 0);

/* 4. reduce(): The reduce function is used on arrays to reduce the array to a single value by applying a function to each element.
*/

const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((accumulator, number) => accumulator + number, 0);
const multiplication = numbers3.reduce((accumulator, number) => accumulator * number, 1);
console.log(sum); // Result: 15
console.log(multiplication); // Result: 120


/* 5. find(): The find function is used on arrays to find the first element that passes a certain condition.
*/

const numbers4 = [1, 2, 3, 4, 5];
const evenNumber = numbers4.find(number => number % 2 === 0);
console.log(evenNumber); // Result: 2

/* 6. sort(): The sort function is used on arrays to sort the elements based on a certain condition. In this case, we're sorting numbers in ascending and descending order.
*/

const numbers5 = [3, 1, 5, 2, 4];
numbers5.sort((a, b) => a - b); // Sort in ascending order
numbers5.sort((a, b) => b - a); // Sort in descending order
console.log(numbers5); // Result: [1, 2, 3, 4, 5]

/* 7. fetch: The fetch function is used in web development to make HTTP requests to web servers and retrieve data. It's essential for interacting with APIs and loading data dynamically. The fetch function allows you to make HTTP requests to web servers and retrieve data. It is essential for interacting with APIs and loading data dynamically.
*/

const fetchData = fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

/* 8. async/await: The async/await syntax is used in JavaScript to work with asynchronous code in a more synchronous way. It allows you to write asynchronous code that looks like synchronous code, making it easier to read and maintain.
*/

async function fetchData2() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData2(); // Call the async function to fetch data