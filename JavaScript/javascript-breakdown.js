/* JAVASCRIP BREAKDOWN */
const title = "JavaScript Breakdown";

/* 1. Variables */

// var (levacy)

var nameFlorentino = "Florentino";
var age = 25;
var isMale = true;

// let (block scope)

let nameFlorentino = "Florentino";
let age = 25;
let isMale = true;

// const (block scope)

const nameFlorentino = "Florentino";
const age = 25;
const isMale = true;

// Temporal Dead Zone (TDZ): let and const are hoisted but not initialized

console.log(lastNameFlorentino); // ReferenceError: Cannot access 'lastNameFlorentino' before initialization
let lastName = "Ariza";

// Hoisting: var is hoisted and initialized with undefined

console.log(nameFermina); // undefined
var nameFermina = "Daza";

// ?? (Nullish Coalescing Operator): returns the right-hand operand when the left-hand operand is null or undefined

let lasteNameFemina = null;
let result = lastNameFemina ?? "Daza";
console.log(result); // Daza

/* DOM */

/* Events */

// Change Event: occurs when the value of an element has been changed

const inputChanged = document.querySelector("#input");
inputChanged.addEventListener("change", function (event) {
  console.log(event.target.value);
});

// Click Event: occurs when an element is clicked

const buttonClicked = document.querySelector("#button-button-clicked");
buttonClicked.addEventListener("click", function (event) {
  console.log("Button clicked");
});

// DOMContentLoaded Event: occurs when the initial HTML document has been completely loaded and parsed

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});

// Event bubbling and propagation: when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors

document.addEventListener("click", function (event) {
  console.log("Document clicked");
  event.stopPropagation();
});

// Event details: event.target, event.currentTarget, event.type

const buttonEventDetails = document.querySelector("#button-event-details");
buttonEventDetails.addEventListener("click", function (event) {
  console.log(event.target); // event.target: the element that triggered the event
  console.log(event.currentTarget); // event.currentTarget: the element that the event listener is attached to
  console.log(event.type); // event.type: the type of event that occurred
});

/* HTML Element */

/* Selection */
