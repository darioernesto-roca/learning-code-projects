/* --------------------------------------------------- */

// Selecting Elements

// document.getElementById(id): Selects a single element with a specific ID.
{
    let element = document.getElementById("myElement");
    console.log(element);
}

// document.getElementsByClassName(className): Selects a NodeList of elements with a specific class.
{
    let elements = document.getElementsByClassName("myClass");
    console.log(elements[0]); // Access the first element
}

// document.getElementsByTagName(tagName): Selects elements with a specific tag name.
{
    let elements = document.getElementsByTagName("div");
    console.log(elements[0]); // Access the first div
}

// document.querySelector(selector): Returns the first element that matches a CSS selector.
{
    let firstDiv = document.querySelector("div");
    console.log(firstDiv);

}

// document.querySelectorAll(selector): Returns a NodeList of all elements matching a CSS selector.
{
    let divs = document.querySelectorAll("div");
    console.log(divs); // NodeList of all div elements

}

/* --------------------------------------------------- */

// Manipulating Elements

// element.innerHTML: Gets or sets the HTML content of an element.
{
    let element = document.getElementById("myElement");
    element.innerHTML = "<strong>New content!</strong>";

}

// element.textContent: Sets or returns the text content of a node and its descendants.
{
    let element = document.getElementById("myElement");
    element.textContent = "New text content";

}

// element.setAttribute(name, value): Adds a new attribute or changes the value of an existing attribute on an element.
{
    let element = document.getElementById("myElement");
    element.setAttribute("class", "newClass");

}

// element.removeAttribute(name): Removes an attribute from an element.
{
    let element = document.getElementById("myElement");
    element.removeAttribute("class");
}

// element.classList.add(className): Adds a class to an element.
{
    let element = document.getElementById("myElement");
    element.classList.add("active");
}

// element.classList.remove(className): Removes a class from an element.
{
    let element = document.getElementById("myElement");
    element.classList.remove("active");

}

// element.classList.toggle(className): Toggles a class on an element.
{
    let element = document.getElementById("myElement");
    element.classList.toggle("active");

}

// element.style.property: Gets or sets the style of an element.
{
    let element = document.getElementById("myElement");
    element.style.color = "blue";

}

/* --------------------------------------------------- */

// Creating and Inserting Elements

// document.createElement(tagName): Creates a new element.
{
    let newDiv = document.createElement("div");
}

// parentNode.appendChild(childNode): Appends a node as the last child of a node.
{
    var newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
}

// parentNode.insertBefore(newNode, referenceNode): Inserts a node before a reference node as a child of a specific parent node.
{
    let newDiv = document.createElement("div");
    let referenceDiv = document.getElementById("referenceDiv");
    document.body.insertBefore(newDiv, referenceDiv);
}

/* --------------------------------------------------- */

// Event Handling

// element.addEventListener(event, function, useCapture): Attaches an event handler to an element.

// Common events include click, load, mouseover, mouseout, keydown, keyup.

{
    let button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });
}

/* --------------------------------------------------- */

// Navigating the DOM

// element.childNodes: Returns a live NodeList of child nodes of an element.
{
    let element = document.getElementById("myElement");
    console.log(element.childNodes);
}

// element.firstChild: Returns the first child node of an element.
{
    let firstChild = document.getElementById("myElement").firstChild;
    console.log(firstChild);

}

// element.lastChild: Returns the last child node of an element.
{
    let lastChild = document.getElementById("myElement").lastChild;
    console.log(lastChild);

}

// element.nextSibling: Returns the node immediately following the specified one in its parent's childNodes list.
{
    let nextSibling = document.getElementById("myElement").nextSibling;
    console.log(nextSibling);
}

// element.previousSibling: Returns the node immediately preceding the specified one in its parent's childNodes list.
{
    let previousSibling = document.getElementById("myElement").previousSibling;
    console.log(previousSibling);
}

// element.parentElement: Returns the parent element of the specified element.
{
    let parent = document.getElementById("myElement").parentElement;
    console.log(parent);

}

/* --------------------------------------------------- */

//Removing Elements

// parentNode.removeChild(child): Removes a child node from the DOM.
{
    let parent = document.getElementById("parentElement");
    let child = document.getElementById("myElement");
    parent.removeChild(child);

}

/* --------------------------------------------------- */

// Working with Attributes

// element.getAttribute(attributeName): Returns the value of a specified attribute on the element.
{
    let value = document.getElementById("myElement").getAttribute("class");
    console.log(value);

}

// element.hasAttribute(attributeName): Returns a Boolean value indicating whether the specified element has the specified attribute.
{
    let hasAttribute = document.getElementById("myElement").hasAttribute("class");
    console.log(hasAttribute);
}

/* --------------------------------------------------- */

// Handling Forms

// Accessing form elements through document.forms collection.
{
    let form = document.forms["myForm"];
    let input = form["inputName"].value;
    console.log(input);

}

// element.value: Gets or sets the value of form elements.
{
    let inputElement = document.getElementById("myInput");
    inputElement.value = "New Value";
}

/* --------------------------------------------------- */

// Best Practices

// Always ensure that the DOM is fully loaded before manipulating it. This can be done by placing script tags at the bottom of the HTML body, or using document.addEventListener('DOMContentLoaded', function() { /* code */ });.

// Be cautious with innerHTML due to potential security risks like XSS (Cross-Site Scripting).