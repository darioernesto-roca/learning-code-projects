/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection.length); // 4
console.log(collection[3]); // true

collection.shift(); // remove first item
console.log(collection); // ["flashlight", 5, true]
collection.unshift("Piggy"); // add item to the beginning

collection.pop(); // remove last item
console.log(collection); // ["Piggy", "flashlight", 5]
collection.push(true); // add item to the end

