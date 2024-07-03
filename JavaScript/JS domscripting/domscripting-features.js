/*
1. Create and Insert New Elements
I can create new elements dynamically and insert them into the DOM.
*/
// Create a new div element
const newDiv = document.createElement('div');

// Add some text content to the new div
newDiv.textContent = 'This is a new div element';

// Insert the new div before an existing element
const existingElement = document.getElementById('existing-element-id');
existingElement.parentNode.insertBefore(newDiv, existingElement);


/*
2. Clone Existing Elements
I can clone an existing element, including its children, and append it elsewhere in the document.
*/
// Select the element you want to clone
const elementToClone = document.getElementById('element-to-clone');

// Clone the element
const clonedElement = elementToClone.cloneNode(true); // Pass 'true' to clone children as well

// Append the cloned element to a new location
document.body.appendChild(clonedElement);

/*
3. Event Delegation 
Instead of adding event listeners to multiple elements, I can use event delegation to manage events more efficiently by taking advantage of event bubbling.
*/
// Add an event listener to a parent element
document.getElementById('parent-element-id').addEventListener('click', function(event) {
    // Check if the clicked element matches a specific selector
    if (event.target.matches('.child-element-class')) {
      console.log('Child element clicked!');
    }
  });

/*
CSS Manipulation
I can dynamically change the styles of elements.
*/
// Select the element I want to style
const element = document.getElementById('element-id');

// Change the element's styles
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';
element.style.display = 'none'; // Hide the element

/*
5. Animate Elements
Create simple animations using JavaScript.
*/
// Select the element you want to animate
const element = document.getElementById('animate-me');

// Define the animation
let position = 0;
const animation = setInterval(() => {
  if (position >= 300) {
    clearInterval(animation);
  } else {
    position++;
    element.style.left = position + 'px';
  }
}, 5);

/*
6. Manipulate Forms and Handle Form Data
Interact with form elements and manage form data.
*/
// Handle form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const formData = new FormData(this);
    
    // Access form fields
    const name = formData.get('name');
    const email = formData.get('email');
    
    console.log(`Name: ${name}, Email: ${email}`);
  });
/*
7. Working with Cookies
Read, write, and delete cookies using JavaScript.
*/
// Set a cookie
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Get all cookies
console.log(document.cookie);

// Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

/*
8. Drag and Drop
Implement drag-and-drop functionality.
HTML code
<div id="draggable" draggable="true" style="width: 100px; height: 100px; background-color: red;">Drag me</div>
*/
const draggable = document.getElementById('draggable');

  draggable.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'This text may be dragged');
  });

  draggable.addEventListener('dragend', function(event) {
    console.log('Drag ended');
  });