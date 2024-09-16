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

// Focus/Blur Event: occurs when an element gets or loses focus

const inputFocused = document.querySelector("#input-focused");
inputFocused.addEventListener("focus", function (event) {
  console.log("Input focused");
});

inputFocused.addEventListener("blur", function (event) {
    console.log("Input blurred");
});

// Keydown/Keypress/Keyup Event: occurs when a key is pressed/released

const inputKey = document.querySelector("#input-key");
inputKey.addEventListener("keydown", function (event) {
  console.log("Keydown event");
});

inputKey.addEventListener("keypress", function (event) {
    console.log("Keypress event");
});

inputKey.addEventListener("keyup", function (event) {
    console.log("Keyup event");
});

// Scroll Event: occurs when an element's scroll position changes

document.addEventListener("scroll", function (event) {
    console.log("Document scrolled");
});

// Submit Event: occurs when a form is submitted

const formSubmitted = document.querySelector("#form-submitted");
formSubmitted.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
    // We can here, for example:
    //Redirect to another page
    window.location.href = "https://www.google.com";
    // Send data to a server
    const formData = new FormData(formSubmitted);

    fetch('https://example.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
    // Validate the form
    const nameToValidate = document.querySelector("#name");
    const emailToValidate = document.querySelector("#email");
    let isValid = true;

    if (!nameToValidate.value.trim()) {
        isValid = false;
        console.error("Name is required");
    }

    if (!emailToValidate.value.trim()) {
        isValid = false;
        console.error("Email is required");
    }

    if (!isValid) {
        return;
    }
});

// element.addEventListener(event, callback): adds an event listener to an element

const buttonEventToListen = document.querySelector("#button-event-to-listen");

buttonEventToListen.addEventListener("click", function (event) {
    console.log("Button clicked");
});

// element.removeEventListener(event, callback): removes an event listener from an element

const buttonEventToRemove = document.querySelector("#button-event-to-remove");

buttonEventToRemove.removeEventListener("click", function (event) {
     console.log("Button clicked");

});

// event.preventDefault(): prevents the default behavior of an event. Used in Submit Event example

/* HTML Element */

// element.classList.add(className): adds a class to an element

const elementClassListAdd = document.querySelector("#element-class-list-add");
elementClassListAdd.classList.add("active");

/* Selection */
