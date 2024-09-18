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

// element.classList.remove(className): removes a class from an element

const elementClassListRemove = document.querySelector("#element-class-list-remove");
elementClassListRemove.classList.remove("active");

// element.classList.toggle(className): toggles a class on an element

const elementClassListToggle = document.querySelector("#element-class-list-toggle");
elementClassListToggle.classList.toggle("active");

// element.classList.contains(className): checks if an element has a class

const elementClassListContains = document.querySelector("#element-class-list-contains");
console.log(elementClassListContains.classList.contains("active")); // true

// element.classList.replace(oldClassName, newClassName): replaces a class on an element

const elementClassListReplace = document.querySelector("#element-class-list-replace");
elementClassListReplace.classList.replace("active", "inactive");

// element.getAttribute(attribute): gets the value of an attribute

const elementGetAttribute = document.querySelector("#element-get-attribute");
console.log(elementGetAttribute.getAttribute("id")); // element-get-attribute

// element.setAttribute(attribute, value): sets the value of an attribute

const elementSetAttribute = document.querySelector("#element-set-attribute");
elementSetAttribute.setAttribute("id", "new-id");

// element.style.property = value: sets the value of a style property

const elementStyle = document.querySelector("#element-style");
elementStyle.style.color = "red";

// element.textContent: sets the text content of an element

const elementTextContent = document.querySelector("#element-text-content");
elementTextContent.textContent = "New text content";

// element.value: sets the value of an input element

const elementValue = document.querySelector("#element-value");
elementValue.value = "New value";

// element.innerHTML: sets the HTML content of an element

const elementInnerHTML = document.querySelector("#element-inner-html");
elementInnerHTML.innerHTML = "<strong>New HTML content</strong>";

// element.remove(): removes an element from the DOM

const elementRemove = document.querySelector("#element-remove");
elementRemove.remove();

// HTMLElement: represents any HTML element

const element = document.querySelector("#element");
console.log(element); // <div id="element"></div>

// element.insertAdjacentHTML(position, text): inserts HTML content relative to an element. The position can be 'beforebegin', 'afterbegin', 'beforeend', 'afterend'.

const elementInsertAdjacentHTML = document.querySelector("#element-insert-adjacent-html");
elementInsertAdjacentHTML.insertAdjacentHTML("afterend", "<p>New paragraph</p>");

// element.appendChild(childElement): appends a child element to a parent element

const parentElementAppend = document.querySelector("#parent-element-append");
const childElementAppend = document.createElement("child-element-append");

parentElementAppend.appendChild(childElementAppend);

// element.removeChild(childElement): removes a child element from a parent element

const parentElementRemove = document.querySelector("#parent-element-remove");
const childElementRemove = document.querySelector("#child-element-remove");

parentElementRemove.removeChild(childElementRemove);

// element.replaceChild(newChildElement, oldChildElement): replaces a child element with a new child element

const parentElementReplace = document.querySelector("#parent-element-replace");
const newChildElementReplace = document.createElement("new-child-element-replace");
const oldChildElementReplace = document.querySelector("#old-child-element-replace");

parentElementReplace.replaceChild(newChildElementReplace, oldChildElementReplace);

// element.createElement(): creates an element with the specified tag name

const newElementCreateElement = document.createElement("div");
newElementCreateElement.textContent = "New element created";
newElementCreateElement.style.color = "000";

console.log(newElementCreateElement); // <div>New element created</div>

/* Selection */

// NodeList: represents a collection of nodes. It is an array-like object but not an array

const nodeListElements = document.querySelectorAll(".elements-node-list");

nodeListElements.forEach(function (element) {
  console.log(element);
}); // NodeList

// NodeList to Array: converts a NodeList to an array

const nodeListToArray = document.querySelectorAll(".elements-node-list");
const arrayElements = Array.from(nodeListToArray);

console.log(arrayElements); // Array

arrayElements.forEach(function (element) {
  console.log(element);
}); // Array

// document: represents the entire HTML document

console.log(document); // HTMLDocument
