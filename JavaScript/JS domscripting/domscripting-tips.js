// Tip 1
// Use querySelector and querySelectorAll: These methods allow you to select elements using CSS selectors, making them more versatile than methods like getElementById or getElementsByClassName.

let element = document.querySelector('.myClass'); // selects the first element with class "myClass"
let elements = document.querySelectorAll('.myClass'); // selects all elements with class "myClass"

// Tip 2
// Manipulate classes with classList: The classList property allows you to add, remove, and toggle classes without having to parse the className string.

element.classList.add('newClass'); // adds "newClass" to the element
element.classList.remove('oldClass'); // removes "oldClass" from the element
element.classList.toggle('toggleClass'); // toggles "toggleClass" on the element

// Tip 3
// Use addEventListener for event handling: This method allows you to add multiple event handlers to an element, unlike the older onclick, onmouseover, etc. properties.
element.addEventListener('click', function() {
    console.log('Element was clicked!');
});

element.addEventListener('click', (e) => {
    console.log(e.target);
});

// Tip 4
// Avoid modifying the innerHTML property: Modifying innerHTML can lead to performance issues and can open your site up to cross-site scripting (XSS) attacks. Use textContent or innerText to modify text content, and use methods like createElement, appendChild, and removeChild to modify the DOM structure.

// Tip 5
// Use documentFragment for batch operations: If you need to append many elements to the DOM, append them to a DocumentFragment first and then append the fragment to the DOM. This causes the page to reflow only once, improving performance.

let fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    let newElement = document.createElement('div');
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);

// Tip 6
// Cache DOM references: If you're repeatedly accessing a particular DOM element, store a reference to it in a variable instead of querying the DOM each time.

// Tip 7
// Be mindful of reflows and repaints: Changing certain CSS properties can cause the browser to recalculate the layout (reflow) or redraw elements (repaint), which can be expensive operations. Try to minimize these where possible, for example by changing classes instead of inline styles.

// Tip 8
// Manipulating the DOM can be expensive in terms of performance, so try to minimize your DOM interactions where possible.