/* JAVASCRIP BREAKDOWN */

const { log } = require("console");

const title = "JavaScript Breakdown";

console.log(title);

/* 1. Variables */
{
  // var (legacy)

  var nameFlorentinoVar = "Florentino";
  var ageVar = 25;
  var isMaleVar = true;

  console.log(nameFlorentinoVar); // Florentino
  console.log(ageVar); // 25
  console.log(isMaleVar); // true

  // let (block scope)

  let nameFlorentinoLet = "Florentino";
  let ageLet = 25;
  let isMaleLet = true;

  console.log(nameFlorentinoLet); // Florentino
  console.log(ageLet); // 25
  console.log(isMaleLet); // true

  // const (block scope)

  const nameFlorentinoConst = "Florentino";
  const ageConst = 25;
  const isMaleConst = true;
  
  console.log(nameFlorentinoConst); // Florentino
  console.log(ageConst); // 25
  console.log(isMaleConst); // true

  // Temporal Dead Zone (TDZ): let and const are hoisted but not initialized

  console.log(lastNameFlorentino); // ReferenceError: Cannot access 'lastNameFlorentino' before initialization
  let lastNameFlorentino = "Ariza";

  // Hoisting: var is hoisted and initialized with undefined

  console.log(nameFermina); // undefined
  var nameFermina = "Daza";

  // ?? (Nullish Coalescing Operator): returns the right-hand operand when the left-hand operand is null or undefined

  let lastNameFermina = null;
  let result = lastNameFermina ?? "Daza";
  console.log(result); // Daza
}

/* 1.2. Primitive Types */

{
  // 1.2.1 .String: String is a primitive type that holds a sequence of characters. String in Javascript is written within a pair of single quotation marks '', double quotation marks "", or backticks `` (template literals). All types of quotes can be used to contain a string but only if the starting quote is the same as the end quote.

  const backticksString = "backticks"

  const stringExample = "This is a string";
  const stringExampleTwo = 'This is another string';
  const stringExampleThree = `This is a string with ${backticksString}`;
  const stringExampleFour = 'This is ' + 'a concatenated string';

  console.log(stringExample) // This is a string
  console.log(stringExampleTwo) // This is another string
  console.log(stringExampleThree) // This is a string with backticks
  console.log(stringExampleFour) // This is a concatenated string

  // 1.2.2. Undefined: Whenever a variable is declared but not initialized or assigned a value, then it is stored as undefined. A function returns undefined if a value was not returned. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.

  // 1.2.3. Number: The Number data type in JavaScript represents floating-point numbers, such as 37 or -9.25. The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the Number() function.

  // 1.2.4. Bigint: BigInt is a built-in JavaScript object that allows you to work with integers of arbitrary size. Unlike the Number type, which can accurately represent integers only within the range of ±2^53 , BigInt can handle integers far beyond this limit. This makes it particularly useful for applications requiring high precision with very large numbers, such as cryptography or scientific computations.

    // Bigint examples:

    const previouslyMaxSafeInteger = 9007199254740991n;
    console.log(previouslyMaxSafeInteger);

    const alsoHuge = BigInt(9007199254740991);
    console.log(alsoHuge); // 9007199254740991n

    const hugeString = BigInt("9007199254740991");
    console.log(hugeString); // 9007199254740991n

    const hugeHex = BigInt("0x1fffffffffffff");
    console.log(hugeHex); // 9007199254740991n

    const hugeOctal = BigInt("0o377777777777777777");
    console.log(hugeOctal); // 9007199254740991n

    const hugeBin = BigInt(
      "0b11111111111111111111111111111111111111111111111111111",
    );
    console.log(hugeBin); // 9007199254740991n

    // When tested against typeof, a BigInt value (bigint primitive) will give "bigint":

    typeof 1n === "bigint"; // true
    typeof BigInt("1") === "bigint"; // true

    // A BigInt value can also be wrapped in an Object:

    typeof Object(1n) === "object"; // true

  
}

/* 2. DOM */

/* 2.1 DOM - Events */
{
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
}

/* 2.2 DOM - HTML Element */
{
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

}

/* 2.3 DOM - Selection */
{
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

  // document.body: represents the body element

  console.log(document.body); // HTMLBodyElement

  // document.head: represents the head element

  console.log(document.head); // HTMLHeadElement

  // document.documentElement: represents the root element of the document

  console.log(document.documentElement); // HTMLHtmlElement

  // document.getElementById(id): gets an element by its id

  const elementById = document.getElementById("element-by-id");
  console.log(elementById); // HTMLElement

  // document.getElementsByClassName(className): gets elements by their class name

  const elementsByClassName = document.getElementsByClassName("elements-by-class-name");
  console.log(elementsByClassName); // HTMLCollection

  // document.querySelector(selector): gets the first element that matches the selector

  const elementQuerySelector = document.querySelector("#element-query-selector");
  console.log(elementQuerySelector); // HTMLElement

  // document.querySelectorAll(selector): gets all elements that match the selector

  const elementsQuerySelectorAll = document.querySelectorAll(".elements-query-selector-all");
  console.log(elementsQuerySelectorAll); // NodeList

  // element.children: gets the child elements of an element

  const parentElementChildren = document.querySelector("#parent-element-children");
  console.log(parentElementChildren.children); // HTMLCollection

  // element.firstElementChild: gets the first child element of an element

  const parentElementFirstElementChild = document.querySelector("#parent-element-first-element-child");
  console.log(parentElementFirstElementChild.firstElementChild); // HTMLElement

  // element.lastElementChild: gets the last child element of an element

  const parentElementLastElementChild = document.querySelector("#parent-element-last-element-child");
  console.log(parentElementLastElementChild.lastElementChild); // HTMLElement

  // element.closest(selector): gets the closest ancestor of an element that matches the selector

  const elementClosest = document.querySelector("#element-closest");
  console.log(elementClosest.closest(".parent-element-closest")); // HTMLElement
}

/* 3. Fetch API */
{
  // DELETE Request: deletes data from a server

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  
  // GET Request: gets data from a server

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  // POST Request: sends data to a server

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  // Error Handling: handles errors when fetching data is important because fetch() does not reject the promise on HTTP errors and to avoid unexpected behavior or breaking the application

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });

    // Fetch wrapper: creates a wrapper function for fetch() to handle errors

    async function fetchWrapper(url, options) {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }

    // Response status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error

    function handleResponse(response) {
      switch(response.status) {
          case 200:
              console.log("OK: The request was successful.");
              // Handle the response data here
              break;
          case 201:
              console.log("Created: The resource was successfully created.");
              // Handle post-creation logic here
              break;
          case 204:
              console.log("No Content: The request was successful, but there's no content to return.");
              // Handle cases where no response body is expected
              break;
          case 400:
              console.log("Bad Request: The request could not be understood or was missing required parameters.");
              break;
          case 401:
              console.log("Unauthorized: Authentication is required.");
              break;
          case 403:
              console.log("Forbidden: You don't have permission to access this resource.");
              break;
          case 404:
              console.log("Not Found: The requested resource could not be found.");
              // Handle 404 - Not Found response here
              document.body.innerHTML = `<h1>404 Not Found</h1><p>The page you're looking for does not exist.</p>`;
              break;
          case 500:
              console.log("Internal Server Error: There was a problem with the server.");
              break;
          default:
              console.log("Unhandled status code:", response.status);
              break;
      }
  }
  
  // Example usage
  fetch('https://example.com/some-resource')
      .then(response => handleResponse(response))
      .catch(error => {
          console.error('There was an error with the request:', error);
      });
  
}

/* 4. Functions */
{
  // Arrow Function ()=> : a shorter syntax for writing function expressions

  const arrowFunction = () => {
    console.log("Arrow function");
  };

  arrowFunction(); // Arrow function

  // ?. (Optional Chaining): accesses nested properties without the need to validate each reference in the chain

  const userOptionChaining = {
    name: "Florentino",
    address: {
      city: "Cartagena",
    },
  };

  console.log(userOptionChaining?.address?.city); // Cartagena

  // The expression userOptionChaining?.address?.city checks if userOptionChaining and userOptionChaining.address exist. If they do, it accesses the city property.
  // If any part of the chain (e.g., userOptionChaining or userOptionChaining.address) is null or undefined, it returns undefined instead of throwing an error.

  // Asynchronous callbacks: executes a function asynchronously after a certain time or event has passed.

  setTimeout(() => {
    console.log("Asynchronous callback");
  }, 1000);

  const buttonAsynchronousCallback = document.querySelector("#button-asynchronous-callback");
  buttonAsynchronousCallback.addEventListener("click", function (event) {
    setTimeout(() => {
      console.log("Button clicked asynchronously");
    }, 1000);
  });

  // Callback patterns: Callbacks can be used to handle asynchronous operations, such as fetching data from a server or waiting for user input.

  function fetchDataCallback(callback) {
    setTimeout(() => {
      const data = "Data fetched";
      callback(data);
    }, 1000);
  } // Callback function

  fetchDataCallback((data) => {
    console.log(data);
  }); // Data fetched


  // Closures: Closures in JavaScript allow a function to "remember" and access variables from its lexical scope, even when the function is executed outside that scope. This happens because JavaScript functions form a closure (cierre o clausura) over the scope in which they were created, keeping a reference to that scope even after the outer function has returned. When outerFunction is called, this variable is created and stored in the function's scope. However, outerFunction also defines an inner function (innerFunction) which can access outerVariable.

  function outerFunction() {
    const outerVariable = "Outer variable";

    function innerFunction() {
      const innerVariable = "Inner variable";
      console.log(outerVariable); // Outer variable
    }

    return innerFunction;
  }

  // Generator functions: Generator functions are a special type of function that can pause and resume their execution. They are defined using the function* syntax and yield keyword. This is useful in various scenarios, such as dealing with asynchronous code, streaming data, or implementing complex iteration behaviors. Generator functions are defined using the function* (with an asterisk) syntax, followed by a block of code. Inside the function, the yield keyword is used to pause the function and return a value to the caller.

  function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
  }

  const generator = generatorFunction();
  console.log(generator.next());  // { value: 1, done: false }
  console.log(generator.next());  // { value: 2, done: false }
  console.log(generator.next());  // { value: 3, done: false }
  console.log(generator.next());  // { value: undefined, done: true }

  // Hoisting: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. This means that you can use a variable or function before it has been declared.

  console.log(hoistedVariable); // undefined
  var hoistedVariable = "Hoisted variable";

  // Immediately Invoked Function Expression (IIFE): an anonymous function that is executed immediately after it is defined. It is wrapped in parentheses to prevent it from being treated as a function declaration.

  (function () {
    console.log("IIFE");
  })(); // IIFE

  // Lexical scope: Lexical scope is a scope in JavaScript that is determined by the placement of variables and functions in the code. It allows inner functions to access variables from their outer function, even after the outer function has finished executing. See closures example.

  // Passing functions as arguments: Functions can be passed as arguments to other functions, allowing for dynamic behavior and code reusability.

  function sayHello(name) {
    return `Hello, ${name}!`;
  }

  function sayHelloToUser(sayHelloFunction, name) {
    return sayHelloFunction(name);
  }

  console.log(sayHelloToUser(sayHello, "Florentino")); // Hello, Florentino!

  // Basic functions: Functions in JavaScript are defined using the function keyword, followed by the function name, parameters, and function body.

  function basicFunctionGreet(fullname) {
    return `Hello, ${fullname}!`;
  }

  console.log(basicFunctionGreet("Florentino")); // Hello, Florentino!
  
  // Default parameters: Default parameters allow us to specify default values for function parameters in case no value is provided when the function is called.

  function greetDefaultParameters(name = "World") {
    return `Hello, ${name}!`;
  } 

  console.log(greetDefaultParameters()); // Hello, World!
  console.log(greetDefaultParameters("Florentino")); // Hello, Florentino!

  // Implicit return: Arrow functions with a single expression can have an implicit return, meaning the return keyword and curly braces are omitted.
  
  const implicitReturn = (name) => `Hello, ${name}!`;

  // yield: The yield keyword is used inside generator functions to pause the function and return a value to the caller. It allows the function to be paused and resumed, enabling complex iteration behaviors and asynchronous code handling.

  function* generatorFunctionYield() {
    yield 1;
    yield 2;
    yield 3;
  }

  const generatorYield = generatorFunctionYield();

  console.log(generatorYield.next()); // { value: 1, done: false }
  console.log(generatorYield.next()); // { value: 2, done: false }
  console.log(generatorYield.next()); // { value: 3, done: false }

  // yield* : The yield* keyword is used inside generator functions to delegate the execution to another generator function or iterable object. It allows for nested iteration and delegation of generator functions.

  function* generatorFunctionYieldNested() {
    yield* [1, 2, 3];
  }

  const generatorYieldNested = generatorFunctionYieldNested();

  console.log(generatorYieldNested.next()); // { value: 1, done: false }
  console.log(generatorYieldNested.next()); // { value: 2, done: false }
  console.log(generatorYieldNested.next()); // { value: 3, done: false }
}

/* 5. Miscellaneous */

{
  
  // Built-in objects: Built-in objects, or “global objects”, are those built into the language specification itself. There are numerous built-in objects with the JavaScript language, all of which are accessible at the global scope. Some examples are: Number, Math, Date, String, Error, Function, Boolean.
  
  // Currying: Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. This allows for partial application of the function, where some arguments are provided upfront, and the rest are provided later.

  function multiplyCurrying(a) {
    return function (b) {
      return a * b;
    };
  }

  const multiplyByTwo = multiplyCurrying(2);
  console.log(multiplyByTwo(3)); // 6

  // Deep equal" is a technique used to compare two objects to see if they are identical in terms of their properties and values, even when the objects contain nested structures such as arrays or other objects. Unlike shallow comparison (using ===), which checks only if two variables point to the same reference in memory, deep equal goes further to recursively compare the values inside the objects.

  const benjamin1 = {
    name: "Benjamin Button",
    age: 25, // Looks younger, but is older
    history: {
      birthYear: 1918,
      looksLike: "Young adult",
      lifeEvents: ["Joins Navy", "Falls in love"]
    }
  };
  
  const benjamin2 = {
    name: "Benjamin Button",
    age: 25, // Same age, same situation
    history: {
      birthYear: 1918,
      looksLike: "Young adult",
      lifeEvents: ["Joins Navy", "Falls in love"]
    }
  };
  
  // Deep Equal Function
  function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
  
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
      return false;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(deepEqual(benjamin1, benjamin2)); // true (They are the same even with nested objects)
  
  // ECMAScript: ECMAScript is the standard upon which JavaScript is based. It specifies the core features of the language, such as syntax, types, and built-in objects. JavaScript is an implementation of ECMAScript, which means that it follows the rules and guidelines set by the ECMAScript standard.

  // ECMAScript 6 (ES6): ECMAScript 6, also known as ES6 or ECMAScript 2015, introduced many new features to JavaScript, such as arrow functions, classes, template literals, and destructuring assignments. It was a major update to the language and laid the foundation for modern JavaScript development.

  // Event Loop: The event loop is a fundamental concept in JavaScript that allows the runtime environment to efficiently handle asynchronous operations. It ensures that tasks are executed in the correct order and that the application remains responsive to user interactions.

  // Event loop phases: The event loop in JavaScript consists of several phases, including the callback queue, microtask queue, and rendering. These phases work together to process tasks and ensure that the application remains responsive and performs well.

  // IIFE (Immediately Invoked Function Expression): An IIFE is a common JavaScript pattern that involves defining and immediately executing a function. It is often used to create a new scope for variables and avoid polluting the global namespace.
  
  (function () {
    console.log("IIFE executed");
  })();

  // Inmutability: Inmutability is a key concept in functional programming that refers to the idea that data should not be changed once it is created. Instead of modifying existing data, new data structures are created with the desired changes. This approach helps prevent bugs and makes code easier to reason about.

  // Inmutability Example:
  const originalArray = [1, 2, 3];

  // Add an element to the original array
  const newArray = [...originalArray, 4];

  console.log(originalArray); // [1, 2, 3]
  console.log(newArray); // [1, 2, 3, 4]


  // Inmutability - Original character object
  const aldoRaine = {
    name: 'Aldo Raine',
    rank: 'Lieutenant',
    mission: 'Take down Nazis',
    team: ['Donny Donowitz', 'Hugo Stiglitz', 'Omar Ulmer']
  };

  // Let's say Aldo Raine gets promoted to 'Captain' and completes his mission.
  // Instead of modifying the original object, we'll create a new one with the updated info.

  const updatedAldoRaine = {
    ...aldoRaine,        // Spread the original object
    rank: 'Captain',     // Update the rank
    mission: 'Mission Accomplished' // Update the mission status
  };

  console.log(aldoRaine);
  // Output: 
  // {
  //   name: 'Aldo Raine',
  //   rank: 'Lieutenant',
  //   mission: 'Take down Nazis',
  //   team: ['Donny Donowitz', 'Hugo Stiglitz', 'Omar Ulmer']
  // }

  console.log(updatedAldoRaine);
  // Output: 
  // {
  //   name: 'Aldo Raine',
  //   rank: 'Captain',
  //   mission: 'Mission Accomplished',
  //   team: ['Donny Donowitz', 'Hugo Stiglitz', 'Omar Ulmer']
  // }

  // Now, let's say we want to add a new member to Aldo Raine's team but keep immutability. This time we'll create a new object with an updated team.

  // Aldo Raine recruits a new member to his team
  const newTeamMember = 'Archie Hicox';

  // Create a new object with the updated team (without mutating the original one)
  const fullyUpdatedAldoRaine = {
    ...updatedAldoRaine,
    team: [...updatedAldoRaine.team, newTeamMember] // Create a new array with the new team member
  };

  console.log(fullyUpdatedAldoRaine);
  // Output: 
  // {
  //   name: 'Aldo Raine',
  //   rank: 'Captain',
  //   mission: 'Mission Accomplished',
  //   team: ['Donny Donowitz', 'Hugo Stiglitz', 'Omar Ulmer', 'Archie Hicox']
  // }

  // Regular Expressions

  // Regular expressions (regex or regexp) are patterns used to match character combinations in strings. They are a powerful tool for text processing and validation in JavaScript and other programming languages. They are primarily used for string searching and manipulation, making them extremely useful in various programming tasks, such as validation, parsing, and text processing. In JavaScript, regular expressions can be created using either the RegExp constructor or by using literal notation enclosed in slashes.

  /*
  Basic Syntax
    Literals: Characters that match themselves. For example, the regex /abc/ matches the string "abc".

    Metacharacters:
    Special characters that have specific meanings. For example:
      .: Matches any single character except newline.
      ^: Matches the beginning of a string.
      $: Matches the end of a string.
      *: Matches 0 or more repetitions of the preceding element.
      +: Matches 1 or more repetitions of the preceding element.
      ?: Matches 0 or 1 occurrence of the preceding element.
      []: Matches any one character within the brackets.
      |: Acts as an OR operator.

    Quantifiers:
      {n}: Matches exactly n occurrences of the preceding element.
      {n,}: Matches n or more occurrences.
      {n,m}: Matches between n and m occurrences.
      Escape Characters: Use \ to escape metacharacters. For example, \. matches a literal period.

    Flags
    Regular expressions can have flags that modify their behavior:
      i: Case-insensitive matching.
      g: Global matching (find all matches).
      m: Multiline matching.
  */

  // Regular Expression Example: Matching a Simple Pattern
  const regexSimplePattern = /hello/;
  const strSimplePattern = "hello world";
  console.log(regexSimplePattern.test(strSimplePattern)); // true. the regex /hello/ checks if the substring "hello" exists in the string "hello world".

  // Regular Expression Example: Using Metacharacters
  const regexMetacharacters = /h.llo/;
  const str1Metacharacters = "hello";
  const str2Metacharacters = "hallo";
  console.log(regexMetacharacters.test(str1Metacharacters)); // true. The . matches any character, so both "hello" and "hallo" return true.
  console.log(regexMetacharacters.test(str2Metacharacters)); // true. The . matches any character, so both "hello" and "hallo" return true.

  // Regular Expression Example: Anchors: Start and End of String
  const regexStart = /^hello/; // Matches "hello" at the start
  const regexEnd = /world$/;   // Matches "world" at the end
  console.log(regexStart.test("hello world")); // true. The caret (^) asserts position at the start
  console.log(regexEnd.test("hello world"));   // true. The dollar sign ($) asserts position at the end.

  // Regular Expression Example: Using Character Classes
  const regexCharacterClasses = /[aeiou]/; // Matches any vowel
  const strCharacterClasses = "sky";
  console.log(regexCharacterClasses.test(strCharacterClasses)); // false. The brackets [] define a character class, matching any character inside them.
  const str2CharacterClasses = "sky is blue";
  console.log(regexCharacterClasses.test(str2CharacterClasses)); // true. The brackets [] define a character class, matching any character inside them.

  // Regular Expression Example: Quantifiers
  const regexQuantifiers = /\d+/; // Matches one or more digits
  const strQuantifiers = "There are 123 apples";
  console.log(strQuantifiers.match(regexQuantifiers)); // ["123"] Here, \d matches any digit, and + ensures it matches one or more occurrences.

  // Regular Expression Example: Global and Case-Insensitive Flags
  const regexFlags = /hello/gi; // Case-insensitive and global match
  const strFlags = "Hello hello HeLLo";
  console.log(strFlags.match(regexFlags)); // ["Hello", "hello", "HeLLo"] Using the g flag finds all occurrences, while i makes the match case-insensitive.

  // Regular Expression Example: Validating Input. We can use regex to validate formats, like email addresses. In this case, the regex checks for a basic email format with local and domain parts:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailExample1 = "example@example.com";
  const emailExample2 = "invalid-email.com";
  console.log(emailRegex.test(emailExample1)); // true
  console.log(emailRegex.test(emailExample2)); // false.

  // Functional programming: Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It emphasizes the use of pure functions, higher-order functions, and immutable data structures to create more predictable and maintainable code. In JavaScript, many libraries (such as Ramda or Lodash) are built to provide functional utilities and make functional programming easier to apply in day-to-day code.

  // Functional programming principles:
  // 1. Pure functions: Functions that always produce the same output for the same input and have no side effects. Example:
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3)); // 5

  // 2. Higher-order functions: Functions that take other functions as arguments or return functions as results. Example:

  function multiplyByTwo(value) {
    return value * 2;
  }

  function operateOnNumber(number, operation) {
    return operation(number);
  }
  console.log(operateOnNumber(5, multiplyByTwo)); // 10

  // 3. Immutability: Data that cannot be changed after it is created. Instead of modifying existing data, new data structures are created with the desired changes. Example:
  const numbers = [1, 2, 3];
  const doubledNumbers = numbers.map((number) => number * 2);
  console.log(doubledNumbers); // [2, 4, 6]

  // 4. Recursion: A technique where a function calls itself to solve smaller instances of the same problem. Example:
  function factorialRecursion(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorialRecursion(n - 1);
    }
  }  
  console.log(factorialRecursion(5)); // 120

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(6)); // 8

  // Generate the first 15 Fibonacci numbers
  for (let i = 0; i < 15; i++) {
    console.log(fibonacci(i)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
  }

  // Map: The map() method creates a new array by applying a function to each element of an existing array. It is a common functional programming pattern and is used to transform data without mutating the original array.

  const numbersMap = [1, 2, 3];
  const doubledNumbersMap = numbersMap.map((number) => number * 2);
  console.log(doubledNumbersMap); // [2, 4, 6]

  // Primitive types: In JavaScript, there are six primitive data types: string, number, bigint, boolean, undefined, and symbol. These types are immutable and have corresponding wrapper objects (e.g., String, Number) that provide additional functionality.

  // String: Represents a sequence of characters enclosed in single or double quotes. Example:
  const stringPrimitive = "Hello, World!";
  console.log(stringPrimitive); // Hello, World!

  // Number: Represents numeric data, including integers and floating-point numbers. Example:
  const numberPrimitive = 42;
  console.log(numberPrimitive); // 42

  // BigInt: Represents integers with arbitrary precision. Example:
  const bigIntPrimitive = 1234567890123456789012345678901234567890n;
  console.log(bigIntPrimitive); // 1234567890123456789012345678901234567890n

  // Boolean: Represents a logical value, either true or false. Example:
  const booleanPrimitive = true;
  console.log(booleanPrimitive); // true

  // Undefined: Represents an undefined value. Example:
  let undefinedPrimitive;
  console.log(undefinedPrimitive); // undefined

  // Symbol: Represents a unique and immutable value used as an identifier for object properties. Example:
  const symbolPrimitive = Symbol("description");
  console.log(symbolPrimitive); // Symbol(description)

  // Set: The Set object is a collection of unique values, where each value may occur only once. It is useful for storing and managing unique values, such as removing duplicates from an array or checking for the presence of specific values.

  const uniqueNumbers = new Set([1, 2, 3, 1, 2, 3]);
  console.log(uniqueNumbers); // Set { 1, 2, 3 }

  uniqueNumbers.add(4);
  console.log(uniqueNumbers); // Set { 1, 2, 3, 4 }

  uniqueNumbers.add('1');
  console.log(uniqueNumbers); // Set { 1, 2, 3, 4, '1' }

  // Strict mode: Strict mode is a feature in JavaScript that allows you to place a program or a function in a "strict" operating context. It helps catch common coding errors and makes the code more secure and optimized. Strict mode can be enabled at the global level or within a specific function. It is different than typescript, because typescript is a superset of javascript, and strict mode is a feature of javascript. And typescript has its own strict mode and with strict mode JavaScript didn't have the same features, like typescript, e.g. types.

  // Enable strict mode at the global level
  "use strict";
  // Example of strict mode behavior:
  // Variables must be declared before being used
  // Assigning a value to an undeclared variable throws an error
  // Deleting a variable or function throws an error
  // Duplicates in object literals or function parameters throw an error
  // The this keyword is undefined in functions not called as methods
  // In strict mode, var can be used to declare variables, but let and const are recommended for block-scoped variables
  // Strict mode can be enabled at the global level by adding the "use strict" directive at the beginning of a script or function. This enables strict mode for the entire script or function and helps catch common coding errors and improve code quality.

  // Enable strict mode within a function
  function strictFunction() {
    "use strict";
    // Strict mode code here
    // Example of strict mode behavior:
    // Variables must be declared before being used
    // Assigning a value to an undeclared variable throws an error
    // Deleting a variable or function throws an error
    // Duplicates in object literals or function parameters throw an error
    // The this keyword is undefined in functions not called as methods
    // Strict mode can also be enabled within a specific function by adding the "use strict" directive at the beginning of the function body. This enables strict mode only within that function and helps catch errors specific to that function.
  }

  // Window: The window object represents the browser window or tab that contains the JavaScript code. It provides access to the browser's properties and methods, such as the document object, location, history, and more. The window object is the global object in client-side JavaScript and is accessible from any part of the code.

  // Window - Accessing window properties
  console.log(window.innerWidth); // Current window width
  console.log(window.innerHeight); // Current window height
  console.log(window.location.href); // Current URL
  console.log(window.navigator.userAgent); // User agent string, e.g., browser information
  console.log(window.document.title); // Document title
  console.log(window.localStorage); // Local storage object
  console.log(window.alert); // Alert function
  console.log(window.confirm); // Confirm function
  console.log(window.prompt); // Prompt function
  console.log(window.history); // Browser history object
  console.log(window.document); // Document object
  console.log(window.document.body); // Body element
  console.log(window.document.documentElement); // Root element, e.g., <html>
  console.log(window.document.getElementById("elementId")); // Get element by ID
  console.log(window.document.querySelector(".elementClass")); // Query selector
  console.log(window.document.querySelectorAll(".elementClass")); // Query selector all
  console.log(window.document.createElement("div")); // Create element
  console.log(window.document.getElementById("elementId").remove()); // Remove element
  console.log(window.document.getElementById("elementId").textContent = "New text content"); // Set text content
  console.log(window.document.getElementById("elementId").value = "New value"); // Set value
  console.log(window.document.getElementById("elementId").innerHTML = "<strong>New HTML content</strong>"); // Set inner HTML
  console.log(window.document.getElementById("elementId").insertAdjacentHTML("afterend", "<p>New paragraph</p>")); // Insert adjacent HTML
  console.log(window.document.getElementById("elementId").appendChild(childElement)); // Append child
  console.log(window.document.getElementById("elementId").removeChild(childElement)); // Remove child
  console.log(window.document.getElementById("elementId").replaceChild(newChildElement, oldChildElement)); // Replace child
  console.log(window.document.querySelectorAll(".elementsNodeList")); // Query selector all

  // Window - Main features of the window object:
    // Access to browser properties: The window object provides access to various browser properties, such as the current URL, user agent string, and window dimensions.
    // Access to browser methods: The window object provides access to browser methods, such as alert, confirm, and prompt, for displaying messages and interacting with users.
    // Access to the document object: The window object contains the document object, which represents the current HTML document and provides methods for interacting with the DOM.
    // Access to browser history: The window object provides access to the browser's history object, which allows navigation through the browser history.
    // Access to local storage: The window object provides access to the local storage object, which allows data to be stored locally in the browser.

  // This: The this keyword in JavaScript refers to the object that the function is a method of. It allows functions to access and operate on the object's properties and methods. The value of this is determined by how a function is called, and it can vary depending on the context in which the function is executed.

  // This - Example 1: Method context
  const personThisMethodContext = {
    name: "Alice",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  personThisMethodContext.greet(); // Hello, my name is Alice

  // This - Example 2: Function context
  function greetThisFunctionContext() {
    console.log(`Hello, my name is ${this.name}`);
  }

  const personThisFunctionContext = {
    name: "Bob",
    greet: greetThisFunctionContext
  };

  greetThisFunctionContext(); // Hello, my name is undefined
  personThisFunctionContext.greet(); // Hello, my name is Bob

  // This - Example 3: Constructor context
  function PersonThisConstructorContext(name) {
    this.name = name;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  } 

  // This - Example 3: Constructor context - Create a new instance of Person
  const aliceConstructorContext = new PersonThisConstructorContext("Alice");
  aliceConstructorContext.greet(); // Hello, my name is Alice

  // This - Example 4: Event handler context
  const buttonThisEventHandlerContext = document.getElementById("button");
  buttonThisEventHandlerContext.addEventListener("click", function() {
    console.log(`Button clicked by ${this.id}`); // In event handlers, this refers to the element that triggered the event. In this case, this refers to the button element that was clicked.
  });

  // typeof operator: The typeof operator in JavaScript returns the data type of a variable or expression. It is useful for checking the type of a value and handling different data types appropriately.

  // typeof - Example 1: Checking data types
  console.log(typeof "Shalom"); // string
  console.log(typeof 38); // number
  console.log(typeof true); // boolean
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
  console.log(typeof Symbol("תֵאוּר")); // symbol
  console.log(typeof { name: "David" }); // object
  console.log(typeof [3, 5, 8]); // object
  console.log(typeof function() {}); // function

  // typeof - Example 2: Handling different data types
  function greetTypeof(name) {
    if (typeof name === "string") {
      console.log(`Hello, ${name}!`);
    } else {
      console.log("Please provide a valid name.");
    }
  }
  greetTypeof("Alice"); // Hello, Alice!
  greetTypeof(38); // Please provide a valid name.

  // typeof - Example 3: Checking for null
  const valueNull = null;
  if (valueNull === null) {
    console.log("Value is null");
  } else {
    console.log("Value is not null");
  }

  // typeof - Example 4: Checking for undefined
  let valueUndefined;
  if (typeof valueUndefined === "undefined") {
    console.log("Value is undefined");
  } else {
    console.log("Value is defined");
  }

  // typeof - Example 5: Checking for functions
  function sayHelloTypeof() {
    console.log("Hello, World!");
  }

  if (typeof sayHelloTypeof === "function") {
    console.log("sayHello is a function");
  } else {
    console.log("sayHello is not a function");
  }

  // typeof - Example 6: Checking for objects
  const personTypeof = { name: "Alice" };
  if (typeof personTypeof === "object") {
    console.log("person is an object");
  }

  // typeof - Example 7: Checking for arrays
  const numbersTypeof = [1, 2, 3];
  if (Array.isArray(numbersTypeof)) {
    console.log("numbers is an array");
  }

  // typeof - Example 8: Checking for numbers
  const ageTypeof = 25;
  if (typeof ageTypeof === "number") {
    console.log("age is a number");
  }

  // typeof - Example 9: Checking for strings
  const messageTypeof = "Hello, World!";
  if (typeof messageTypeof === "string") {
    console.log("message is a string");
  }

  // typeof - Example 10: Checking for booleans
  const isActiveTypeof = true;
  if (typeof isActiveTypeof === "boolean") {
    console.log("isActive is a boolean");
  }

  // typeof - Example 11: Checking for symbols
  const idTypeof = Symbol("id");
  if (typeof idTypeof === "symbol") {
    console.log("id is a symbol");
  }

  // typeof - Example 12: Checking for BigInt
  const bigNumberTypeof = 1234567890123456789012345678901234567890n;
  if (typeof bigNumberTypeof === "bigint") {
    console.log("bigNumber is a bigint");
  }
}

/* 6. Modules */

{
  // 1. ES Modules: ES Modules (ECMAScript Modules) are a standard for working with modules in JavaScript. They provide a way to organize and structure code by splitting it into separate files, each containing a module. ES Modules use the import and export keywords to define dependencies between modules and share code between them.

  // ES Modules - Examples:

  // ES Modules - Exporting a module
  // math.js
  // export const sum = (a, b) => a + b;
  // export const subtract = (a, b) => a - b;

  // ES Modules - Importing a module
  // import { sum, subtract } from './math.js';
  // console.log(sum(5, 3)); // 8
  // console.log(subtract(5, 3)); // 2

  // ES Modules - Exporting default: In addition to named exports, ES Modules also support default exports. A default export is a single value or function that is exported as the default export of a module. When importing a module with a default export, you can choose any name for the imported value.
  // math.js
  // const sum = (a, b) => a + b;
  // const subtract = (a, b) => a - b;
  // export default { sum, subtract };

  // ES Modules - Importing a default export
  // import math from './math.js';
  // console.log(math.sum(5, 3)); // 8
  // console.log(math.subtract(5, 3)); // 2

  // ES Modules - Dynamic imports: Dynamic imports allow you to import modules asynchronously at runtime, rather than statically at compile time. This can be useful for loading modules conditionally or on-demand, reducing the initial load time of an application.
  // const module = await import('./math.js');
  // console.log(module.sum(5, 3)); // 8
  // console.log(module.subtract(5, 3)); // 2

  // 2. Importing from libraries: ES Modules can also be used to import code from external libraries and modules. Many libraries and frameworks provide ES Modules for easy integration into JavaScript projects.

  // Importing from libraries - Importing a library module
  // import { sum, subtract } from 'library-module';
  // console.log(sum(5, 3)); // 8

  // Importing from libraries - Importing a library default export
  // import library from 'library-module';
  // console.log(library.sum(5, 3)); // 8

  // Importing from libraries - Importing a library dynamically
  // const module = await import('library-module');
  // console.log(module.sum(5, 3)); // 8

  // 3. Module bundlers (empaquetador): Module bundlers are tools that combine multiple modules and dependencies into a single file or bundle. They help manage dependencies, optimize code, and improve performance by reducing the number of HTTP requests needed to load a web application.
  
  // Module bundlers (empaquetador) - Examples of module bundlers:

  // Webpack: A popular module bundler that supports ES Modules, CommonJS, and AMD modules. It can bundle JavaScript, CSS, and other assets, and provides features like code splitting, hot module replacement, and tree shaking.

  // Rollup: A module bundler designed for building JavaScript libraries and packages. It focuses on tree shaking and generates smaller, more optimized bundles compared to other bundlers.

  // Parcel: A zero-configuration module bundler that supports ES Modules, CommonJS, and other module formats. It automatically handles dependencies, code splitting, and optimizations, making it easy to get started with bundling.

  // Vite: A modern build tool that leverages ES Modules and native browser features for fast development and optimized production builds. It provides instant server start, hot module replacement, and optimized bundling for modern web applications.

  // Module bundlers - Tree shaking: Tree shaking is a technique used by module bundlers to eliminate dead code or unused code from the final bundle. It works by analyzing the code and dependencies of a module to determine which parts are not used and can be safely removed. Tree shaking helps reduce the size of the bundle and improve performance by removing unnecessary code.

  // 4. Namespace import: In ES Modules, you can import an entire module as a namespace object using the * as syntax. This allows you to access all the exports of the module through the namespace object.

  // Namespace import - Example:
  // math.js
  // export const sum = (a, b) => a + b;
  // export const subtract = (a, b) => a - b;

  // Importing the entire module as a namespace object. This allows you to access all the exports of the module through the math namespace object.
  // import * as math from './math.js';
  // console.log(math.sum(5, 3)); // 8
  // console.log(math.subtract(5, 3)); // 2

  // 5. Package managers: Package managers are tools that help manage dependencies and packages in a project. They automate the process of installing, updating, and removing packages, making it easier to work with external libraries and modules.

  // Package managers - Examples of package managers:

  // npm (Node Package Manager): A popular package manager for JavaScript that is used to install, manage, and publish packages. It is commonly used for Node.js projects and front-end development.

  // Yarn: A fast and secure package manager for JavaScript that is compatible with npm. It provides features like offline installation, deterministic dependency resolution, and parallel package downloads.

  // Package managers - Common commands:

  // npm install package-name: Installs a package locally in the project.
  // npm install -g package-name: Installs a package globally on the system.
  // npm install --save package-name: Installs a package and adds it to the dependencies in package.json.
  // npm install --save-dev package-name: Installs a package and adds it to the devDependencies in package.json.
  // npm update package-name: Updates a package to the latest version.
  // npm uninstall package-name: Uninstalls a package from the project.
  // npm list: Lists all installed packages in the project.
  // npm search package-name: Searches for a package in the npm registry.
  // npm init: Initializes a new project and creates a package.json file.
  // npm run script-name: Runs a script defined in the package.json file.

  // 6.package.json: The package.json file is a metadata file for Node.js projects that contains information about the project, its dependencies, and scripts. It is used by package managers like npm and Yarn to manage project dependencies and scripts.

  // package.json - Example:
  // {
  //   "name": "my-project",
  //   "version": "1.0.0",
  //   "description": "A sample Node.js project",
  //   "main": "index.js",
  //   "scripts": {
  //     "start": "node index.js",
  //     "test": "jest"
  //   },
  //   "dependencies": {
  //     "express": "^4.17.1",
  //     "lodash": "^4.17.21"
  //   },
  //   "devDependencies": {
  //     "jest": "^27.0.6"
  //   }
  // }

  // package.json - Main properties:
  // name: The name of the project.
  // version: The version number of the project.
  // description: A brief description of the project.
  // main: The entry point of the project.
  // scripts: Custom scripts that can be run using npm or Yarn.
  // dependencies: Production dependencies required for the project.
  // devDependencies: Development dependencies required for testing and development.
  // engines: Specifies the versions of Node.js and npm required by the project.
  // license: The license under which the project is distributed.

  // 7. script type="module": In HTML, you can use the script type="module" attribute to indicate that a script is an ES Module. This allows you to use ES Modules directly in the browser without the need for a module bundler. The script type="module" attribute is supported in modern browsers and provides a way to load and execute ES Modules in a web page. In the package.json file, you can specify the type of module using the "type" field.

  // script type="module" - Example:
  // <script type="module" src="main.js"></script>
  // In this example, the script tag loads the main.js file as an ES Module in the browser. The type="module" attribute indicates that the script is an ES Module and should be treated as such by the browser.

  // package.json - Specify module type:
  // {
  //   "type": "module"
  // }

  // 8. Yarn: Yarn is a fast, reliable, and secure package manager for JavaScript. It is compatible with npm and provides additional features like offline installation, deterministic dependency resolution, and parallel package downloads. Yarn is commonly used for managing dependencies in Node.js projects and front-end development. Yarn can be installed using npm or by downloading the Yarn installer from the official website. The main difference between npm and Yarn is that Yarn uses a lockfile (yarn.lock) to ensure deterministic installs, while npm uses a package-lock.json file. At the end both are package managers for JavaScript, and they have their own features and differences, but the choice of which one to use depends on the project requirements and personal preference.

}

/* 7. Number */

{
  // 1. .toString(): The .toString() method in JavaScript converts a number to a string. It takes an optional parameter that specifies the base of the number system to use for the conversion. By default, .toString() converts the number to a base-10 string.

  const numberToString = 38;
  console.log(numberToString.toString()); // "38"

  // it is useful on this cases:
  // Converting numbers to strings for display or output
  // Formatting numbers for specific use cases
  // Working with numbers in string format

  // 2. Division reminder (%): The division reminder operator (%) in JavaScript returns the remainder of a division operation. It is useful for checking if a number is divisible by another number or for extracting the last digit of a number.

  const numberDivisionReminder = 17;
  console.log(numberDivisionReminder % 5); // 2

  // Real cases of use:
  
  // Checking if a number is even or odd

  const numberEven = 10;
  const numberOdd = 15;

  console.log(numberEven % 2 === 0); // true
  console.log(numberOdd % 2 === 0); // false

  function isEven(number) {
    return number % 2 === 0;
  } 

  console.log(isEven(10)); // true

  // 3. NaN: NaN (Not-a-Number) is a special value in JavaScript that represents an invalid number. It is returned when a mathematical operation cannot produce a valid result, such as dividing by zero or performing arithmetic with non-numeric values.

  const resultNaN = 0 / 0;
  console.log(resultNaN); // NaN

  // Real cases of use:

  // Checking for invalid or missing values

  const numbersNaN = [10, 20, NaN, 30];

  function calculateAverage(numbers) {
    const filteredNumbers = numbers.filter(num => !isNaN(num));
    if (filteredNumbers.length === 0) return 0; // Handle case with no valid numbers
    
    const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
    return sum / filteredNumbers.length;
  }
  
  console.log(calculateAverage(numbersNaN)); // 20

  // 4. Number.parseInt(): The Number.parseInt() method in JavaScript parses a string and returns an integer. It is similar to the global parseInt() function, but it is a static method of the Number object. Number.parseInt() is useful for converting strings to integers in a more explicit and predictable way.

  const stringParseInt = "38";
  console.log(Number.parseInt(stringParseInt)); // 38

  // Real cases of use - Parsing User Input in Forms:
  const ageInput = "25"; // User input from a form
  const age = Number.parseInt(ageInput);
  if (age >= 18) {
    console.log("User is an adult.");
  }
  
  // Real cases of use - Extracting Numbers from URL Parameters:
  const url = "https://example.com/product?id=38";
  const params = new URLSearchParams(url.split('?')[1]);
  const productId = Number.parseInt(params.get('id'));
  console.log(productId); // 38
  
  // Real cases of use - Parsing CSS Values for Calculations:

  const margin = "15px";
  const marginValue = Number.parseInt(margin);
  console.log(marginValue + 5); // 20

  // Real cases of use - Working with Data from External APIs:
  const apiResponse = { score: "89" }; // API returns score as a string
  const score = Number.parseInt(apiResponse.score);
  console.log(score + 1); // 90

  // Real cases of use - Converting String-Based Measurements in Calculations:
  const discount = "15%";
  const discountValue = Number.parseInt(discount);
  const total = 100;
  const discountedTotal = total - (total * discountValue / 100);
  console.log(discountedTotal); // 85

  // 5. Numeric separators (_): Numeric separators are a feature in JavaScript that allows you to use underscores (_) as separators in numeric literals. They improve readability by breaking down large numbers into smaller, more manageable parts. Numeric separators make these numbers clearer to developers, reducing errors when reading, verifying, or editing code.

  const largeNumber = 1_000_000;
  console.log(largeNumber); // 1000000

  // Real cases of use - Representing Large Financial Values:
  const annualBudget = 12_000_000; // Easier to read as 12 million
  const transactionAmount = 5_000_000; // 5 million
  console.log(annualBudget + transactionAmount); // 17000000

  // Real cases of use - Setting Time or Date Constants in Milliseconds:
  const oneDayInMs = 86_400_000; // 24 * 60 * 60 * 1000 (milliseconds in a day)
  const fiveMinutesInMs = 300_000; // 5 * 60 * 1000 (milliseconds in five minutes)
  console.log(oneDayInMs); // 86400000
  console.log(fiveMinutesInMs); // 300000

  // Real cases of use - Representing Large Numbers in Scientific Notation:
  const speedOfLight = 299_792_458; // Speed of light in meters per second
  const earthToSunDistance = 149_597_870_700; // Approximate distance in meters
  console.log(speedOfLight); // 299792458
  console.log(earthToSunDistance); // 149597870700

  // Real cases of use - Representing Bitmasks in Readable Chunks:
  const filePermissions = 0b1111_1111_0000; // Binary representation with underscores for clarity
  console.log(filePermissions); // 4080

  // Real cases of use - Setting File Sizes and Data Limits:
  const maxFileSize = 1_073_741_824; // 1 GB in bytes
  const memoryLimit = 4_294_967_296; // 4 GB in bytes
  console.log(maxFileSize); // 1073741824
  console.log(memoryLimit); // 4294967296

  // Real case of use - Internationalization and Currency Conversion Rates:
  const usdToInrRate = 74_325; // Representing rate in paise for INR
  const largeTransactionUSD = 1_000_000; // $1 million USD
  const largeTransactionINR = largeTransactionUSD * usdToInrRate;
  console.log(largeTransactionINR); // 74325000000

  // The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the Number() function. In this example: 255 and 255.0 are equivalent, as JavaScript treats both as the same number. 0xff represents 255 in hexadecimal notation. 0b11111111 represents 255 in binary notation. 0.255e3 is 255 in exponential notation. All these different representations are equal to 255 in JavaScript.

  let num1 = 255; // integer
  let num2 = 255.0; // floating-point number with no fractional part
  let num3 = 0xff; // hexadecimal notation
  let num4 = 0b11111111; // binary notation
  let num5 = 0.255e3; // exponential notation

  console.log(num1 === num2); // true
  console.log(num1 === num3); // true
  console.log(num1 === num4); // true
  console.log(num1 === num5); // true
  


}

/* 8. Objects */

{
  // 1. ... (spread operator): The spread operator (...) in JavaScript is used to expand an iterable (e.g., an array) into individual elements. It allows you to copy and merge arrays, objects, and other iterables easily. The spread operator is commonly used for creating shallow copies of arrays and objects, combining multiple arrays, and passing multiple arguments to functions.

  // Spread operator - Examples:

  // Spread operator - Copying an array

  const numbersSpread = [1, 2, 3];
  const copyNumbers = [...numbersSpread];
  console.log(copyNumbers); // [1, 2, 3]

  // Spread operator - Merging arrays

  const numbers1 = [1, 2];
  const numbers2 = [3, 4];
  const mergedNumbers = [...numbers1, ...numbers2];
  console.log(mergedNumbers); // [1, 2, 3, 4]

  // Spread operator - Copying an object

  const personSpread = { name: "Alice", age: 30 };
  const copyPerson = { ...personSpread };
  console.log(copyPerson); // { name: "Alice", age: 30 }

  // Spread operator - Merging objects

  const person1 = { name: "Alice" };
  const person2 = { age: 30 };
  const mergedPerson = { ...person1, ...person2 };
  console.log(mergedPerson); // { name: "Alice", age: 30 }

  // Spread operator - Passing multiple arguments to a function

  function sum(a, b, c) {
    return a + b + c;
  }

  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // 6

  // 2. ?. (optional chaining): The optional chaining operator (?.) in JavaScript allows you to safely access nested properties of an object without causing an error if a property is null or undefined. It provides a concise way to handle optional properties and avoid "TypeError: Cannot read property 'x' of undefined" errors.

  // Optional chaining - Examples:

  // Optional chaining - Accessing nested properties

  const personOptionalChaining = { name: "Alice", address: { city: "New York" } };
  console.log(personOptionalChaining.address?.city); // "New York"

  // Optional chaining - Handling missing properties

  const personMissing = { name: "Alice" };
  console.log(personMissing.address?.city); // undefined

  // Optional chaining - Calling methods on optional properties

  const personMethod = { name: "Alice", greet() { return `Hello, ${this.name}!`; } };
  console.log(personMethod.greet?.()); // "Hello, Alice!"

  // Optional chaining - Accessing array elements

  const numbersOptionalChaining = [1, 2, 3];
  console.log(numbersOptionalChaining[2]); // 3
  console.log(numbersOptionalChaining?.[5]) // undefined
  console.log(numbersOptionalChaining[5]) // undefined  This does not use optional chaining, so it assumes numbersOptionalChaining is a defined object or array. If numbersOptionalChaining is null or undefined, trying to access [5] would throw a TypeError.

  // 3. ?? (nullish coalescing): The nullish coalescing operator (??) in JavaScript provides a way to handle default values for null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, but not for other falsy values like 0 or an empty string.

  // Nullish coalescing - Examples:

  // Nullish coalescing - Handling default values

  const nameNullishExample = null;
  const defaultNameNullishExample = "Guest";
  console.log(nameNullishExample ?? defaultNameNullishExample); // "Guest"

  // Nullish coalescing - Handling missing properties

  const personNullishExample = { name: "Alice", age: null };
  const ageNullishExample = personNullishExample.age ?? 30;
  console.log(ageNullishExample); // 30

  // 4. Advanced control flow: Advanced control flow in JavaScript refers to using conditional statements, loops, and other control structures to create complex logic and decision-making in code. It involves combining multiple conditions, handling errors, and controlling the flow of execution based on different scenarios. JavaScript supports various control flow statements like if…else, switch, for, and while to manage the execution flow of code.

  // Advanced control flow - Real life code examples:

  // Advanced control flow - Handling user authentication and authorization in web applications:

  function authenticateUser(user) {
    if (user && user.isAuthenticated) {
      return "User is authenticated";
    } else {
      return "User is not authenticated";
    }
  }

  // Advanced control flow - Handling form validation and error messages in user interfaces:

  function validateForm(formData) {
    if (!formData.email) {
      return "Email is required";
    } else if (!formData.password) {
      return "Password is required";
    } else {
      return "Form is valid";
    }
  }

  // Advanced control flow - Implementing search and filtering functionality in web applications:

  function filterProducts(products, query) {
    if (!query) {
      return products;
    }
    return products.filter(product => product.name.includes(query));
  }

  // Advanced control flow - Implementing complex business logic and rules in applications:

  function calculateDiscount(order) {
    if (order.total >= 100) {
      return order.total * 0.1;
    } else if (order.total >= 50) {
      return order.total * 0.05;
    } else {
      return 0;
    } 
  }

  // Advanced control flow - Handling asynchronous operations and error handling in JavaScript:

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // 5. Object.entries(): The Object.entries() method in JavaScript returns an array of key-value pairs from an object. It provides an easy way to iterate over the properties of an object and access both the keys and values. Object.entries() returns an array where each element is an array containing a key-value pair.

  // Object.entries - Example:

  const personEntries = { name: "Alice", age: 30 };

  for (const [key, value] of Object.entries(personEntries)) {
    console.log(`${key}: ${value}`);
  }

  // Output:
  // name: Alice
  // age: 30

  // Real cases of use:

  // Object.entries - Iterating over object properties:

  const personProperties = { name: "Alice", age: 30, city: "New York" };

  for (const [key, value] of Object.entries(personProperties)) {
    console.log(`${key}: ${value}`);
  }

  // Object.entries - Converting object properties to an array:

  const personArray = Object.entries(personProperties);
  console.log(personArray); // [["name", "Alice"], ["age", 30], ["city", "New York"]]

  // Object.entries - Filtering object properties based on conditions:

  const personFiltered = Object.entries(personProperties).filter(([key, value]) => key !== "age");
  console.log(personFiltered); // [["name", "Alice"], ["city", "New York"]]

  // 6. Object.keys(): The Object.keys() method in JavaScript returns an array of the keys of an object. It provides a way to access the keys of an object and iterate over them. Object.keys() returns an array of strings where each element is a key of the object. The difference between Object.keys() and Object.entries() is that Object.keys() returns only the keys, while Object.entries() returns both the keys and values.

  // Object.keys - Example:

  const personKeys = { name: "Alice", age: 30 };

  for (const key of Object.keys(personKeys)) {
    console.log(key);
  }

  // Output:
  // name
  // age

  // Real cases of use:

  // Object.keys - Iterating over object keys:

  const personKeysIterate = { name: "Alice", age: 30, city: "New York" };

  for (const key of Object.keys(personKeysIterate)) {
    console.log(key);
  }

  // Object.keys - Checking for the presence of specific keys:

  const hasAgeKey = Object.keys(personKeysIterate).includes("age");

  console.log(hasAgeKey); // true

  // 7. Object.values(): The Object.values() method in JavaScript returns an array of the values of an object. It provides a way to access the values of an object and iterate over them. Object.values() returns an array where each element is a value of the object. The difference between Object.values() and Object.entries() is that Object.values() returns only the values, while Object.entries() returns both the keys and values.

  // Object.values - Example:

  const personValues = { name: "Alice", age: 30 };

  for (const value of Object.values(personValues)) {
    console.log(value);
  }

  // Output:
  // Alice
  // 30

  // 8. Destructuring: Destructuring in JavaScript is a way to extract values from arrays and objects and assign them to variables. It provides a concise syntax for accessing and unpacking values from complex data structures. Destructuring can be used with arrays, objects, and function parameters to simplify code and improve readability.

  // Destructuring - Examples:

  // Destructuring - Destructuring an array

  const numbersDestructuring = [1, 2, 3];

  const [first, second, third] = numbersDestructuring;
  console.log(first); // 1
  console.log(second); // 2
  console.log(third); // 3

  // Destructuring - Destructuring an object

  const personDestructuring = { name: "Alice", age: 30 };

  const { name, age } = personDestructuring;
  console.log(name); // "Alice"
  console.log(age); // 30

  // 9. Dynamic properties: Dynamic properties in JavaScript refer to object properties whose names are determined at runtime. They allow you to access and modify object properties using variables or expressions. Dynamic properties are useful for working with objects whose properties are not known in advance or are generated dynamically.

  // Dynamic properties - Examples:

  // Dynamic properties - Accessing object properties using variables

  const personDynamic = { name: "Alice", age: 30 };

  const propertyName = "name";
  console.log(personDynamic[propertyName]); // "Alice"

  // Dynamic properties - Setting object properties using variables

  const personDynamicSet = {};

  const key = "name";
  const value = "Alice";

  personDynamicSet[key] = value;

  console.log(personDynamicSet); // { name: "Alice" }

  // Dynamic properties - Computed property names

  const keyName = "name";
  const personComputed = { [keyName]: "Alice" };

  console.log(personComputed.name); // "Alice"

  // Real cases of use:

  // Dynamic properties - Handling form data in web applications:

  const formData = new FormData(formElement);

  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  } 

  // Dynamic properties - Working with API responses and data transformations:

  const apiResponse = { "user.name": "Alice", "user.age": 30 };

  const transformedData = {};

  for (const key in apiResponse) {
    const newKey = key.split(".")[1];
    transformedData[newKey] = apiResponse[key];
  }

  // Dynamic properties - Generating dynamic CSS styles in web applications:

  const styles = {};
  styles["color"] = "red";

  const fontSize = "16px";
  styles["font-size"] = fontSize;

  // 10. in (operator): The in operator in JavaScript is used to check if a property exists in an object. It returns true if the property is present in the object, either directly on the object or in its prototype chain. The in operator is useful for checking the existence of properties and avoiding errors when accessing object properties.

  // in - Examples:

  // in - Checking if a property exists in an object

  const personIn = { name: "Alice", age: 30 };

  console.log("name" in personIn); // true

  // in - Checking if a property exists in an object's prototype chain

  const personPrototype = { name: "Alice" };

  console.log("name" in personPrototype); // true

  // Real cases of use:

  // in - Checking for required properties in form data:

  const formDataRequired = { name: "Alice", email: "email" };

  if ("name" in formDataRequired && "email" in formDataRequired) {
    console.log("Form data is valid");
  } else {
    console.log("Form data is incomplete");
  }

  // in - Handling optional properties in object transformations:

  const personOptional = { name: "Alice", age: 30 };

  const transformedPerson = {};

  if ("name" in personOptional) {
    transformedPerson.name = personOptional.name;
  }

  if ("age" in personOptional) {
    transformedPerson.age = personOptional.age;
  }

  // in - Checking for specific properties in API responses:

  const apiResponseIn = { name: "Alice", age: 30 };

  if ("name" in apiResponseIn) {
    console.log("Name is present in the API response");
  } else {
    console.log("Name is missing in the API response");
  }


  // Object shorthand: Object shorthand in JavaScript is a concise way to create objects by using variable names as property names. It allows you to define object properties with the same name as the variables used to assign their values. Object shorthand is useful for reducing redundancy and improving code readability when creating objects.

  // Object shorthand - Examples:

  // Object shorthand - Creating an object with variable properties

  const nameShortHand = "Alice";
  const ageShortHand = 30;

  const personShorthand = { nameShortHand, ageShortHand };
  console.log(personShorthand); // { nameShortHand: "Alice", ageShortHand: 30 }

  // Real cases of use:

  // Object shorthand - Simplifying object creation with variable properties:

  const firstName = "Alice";
  const lastName = "Smith";

  const user = { firstName, lastName };
  console.log(user); // { firstName: "Alice", lastName: "Smith" }

  // Property access: Property access in JavaScript refers to accessing and modifying object properties using dot notation (.) or bracket notation ([]). It allows you to read, write, and delete object properties dynamically based on their names. Property access is a fundamental concept in JavaScript and is used extensively when working with objects.

  // Property access - Examples:

  // Property access - Accessing object properties using dot notation

  const personAccess = { name: "Alice", age: 30 };
  console.log(personAccess.name); // "Alice"

  // Property access - Accessing object properties using bracket notation

  const propertyNameAccess = "name";
  console.log(personAccess[propertyNameAccess]); // "Alice"

  // Real cases of use:

  // Property access - Reading object properties dynamically:

  const personDynamicAccess = { name: "Alice", age: 30 };
  
  const property = "name";
  console.log(personDynamicAccess[property]); // "Alice"

  // Property access - Writing object properties dynamically:

  const personDynamicWrite = {};

  const keyAccess = "name";
  const valueAccess = "Alice";

  personDynamicWrite[keyAccess] = valueAccess;

  console.log(personDynamicWrite); // { name: "Alice" }

}

/* 9. Promises */

{
  // 1. Promise: A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a way to handle asynchronous code in a more structured and manageable way. Promises have three states: pending, fulfilled, and rejected. A Promise is created using the new Promise() constructor, which takes a function as an argument with two parameters: resolve and reject.

  // Promise - Example:

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  promise.then(value => {
    console.log("Resolved:", value);
  }).catch(error => {
    console.error("Rejected:", error.message);
  });

  // Real cases of use:

  // Promise - Fetching data from an API:

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  fetchData("https://api.example.com/data")
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));

  // Promise - Handling user authentication and authorization:

  function authenticateUser(credentials) {
    return new Promise((resolve, reject) => {
      if (isValidCredentials(credentials)) {
        resolve("User is authenticated");
      } else {
        reject(new Error("Invalid credentials"));
      }
    });
  }

  authenticateUser({ username: "alice", password: "password" })
    .then(message => console.log(message))
    .catch(error => console.error(error.message));

  // Promise - Loading images and resources in web applications:

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Failed to load image"));
      image.src = url;
    });
  }

  loadImage("image.jpg")
    .then(image => console.log("Image loaded:", image))
    .catch(error => console.error("Error loading image:", error));

  // Promise - Handling form submissions and data processing:

  function submitForm(formData) {
    return new Promise((resolve, reject) => {
      if (isValidFormData(formData)) {
        resolve("Form submitted successfully");
      } else {
        reject(new Error("Invalid form data"));
      }
    });
  }

  // 2. States: A Promise in JavaScript can be in one of three states: pending, fulfilled, or rejected. The state of a Promise determines its behavior and the value it resolves to. When a Promise is created, it starts in the pending state. It transitions to the fulfilled state when the asynchronous operation is successful and resolves with a value. It transitions to the rejected state when an error occurs during the operation and rejects with an error.

  // States - Example:

  const promiseState = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  console.log(promiseState); // Promise { <pending> }

  promiseState.then(value => {
    console.log("Resolved:", value);
    console.log(promiseState); // Promise { 0.625 }
  }).catch(error => {
    console.error("Rejected:", error.message);
    console.log(promiseState); // Promise { <rejected> }
  });

  // 3. new Promise(): The new Promise() constructor in JavaScript is used to create a new Promise object. It takes a function as an argument with two parameters: resolve and reject. The resolve parameter is a function that is called when the asynchronous operation is successful and the Promise is fulfilled. The reject parameter is a function that is called when an error occurs during the operation and the Promise is rejected.

  // new Promise() - Example:

  const promiseNew = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject(new Error("Value is too low"));
      }
    }, 1000);
  });

  promiseNew.then(value => {
    console.log("Resolved:", value);
  }).catch(error => {
    console.error("Rejected:", error.message);
  });

  // Real cases of use:

  // new Promise() - Fetching data from an API:

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  fetchData("https://api.example.com/data")
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));

    // 4. await keyword: The await keyword in JavaScript is used to pause the execution of an asynchronous function until a Promise is settled (resolved or rejected). It can only be used inside an async function, which allows you to write asynchronous code in a synchronous style. The await keyword simplifies working with Promises and makes asynchronous code easier to read and maintain.

    // await keyword examples:

    function resolveAfter2Seconds(x) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
    }
    
    async function f1() {
      const x = await resolveAfter2Seconds(10);
      console.log(x); // 10
    }
    
    f1();

    // Real cases of use:

    // await keyword - Fetching data from an API:

    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    const data = await fetchData("https://api.example.com/data");

    // await keyword - Handling user authentication and authorization:

    async function authenticateUser(credentials) {
      if (isValidCredentials(credentials)) {
        return "User is authenticated";
      } else {
        throw new Error("Invalid credentials");
      }
    }   

    try {
      const message = await authenticateUser({ username: "ernestico", password: "password" });
      console.log(message);
    } catch (error) {
      console.error(error.message);
    }

    // await keyword - Loading images and resources in web applications:

    async function loadImage(url) {
      const image = new Image();
      image.src = url;
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });
      return image;
    }

    // 5. async/await: The async/await syntax in JavaScript provides a way to write asynchronous code in a synchronous style. It allows you to define asynchronous functions using the async keyword and use the await keyword to pause the execution of asynchronous operations until they are settled (resolved or rejected). async/await simplifies working with Promises and improves the readability and maintainability of asynchronous code.

    // async/await - Examples:

    async function fetchDataAsync(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    fetchDataAsync("https://api.example.com/data")

    async function authenticateUserAsync(credentials) {
      if (isValidCredentials(credentials)) {
        return "User is authenticated";
      } else {
        throw new Error("Invalid credentials");
      }
    }

    // 6. Async Function: An async function in JavaScript is a function that returns a Promise. It allows you to write asynchronous code in a synchronous style using the async/await syntax. An async function can contain one or more await expressions, which pause the execution of the function until the Promise is settled. Async functions simplify working with Promises and make asynchronous code easier to read and maintain.

    // Async function - Example:

    async function fetchDataAsyncFunction(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    fetchDataAsyncFunction("https://api.example.com/data")

    // Async function with error handling:

    async function authenticateUserAsyncFunction(credentials) {
      if (isValidCredentials(credentials)) {
        return "User is authenticated";
      } else {
        throw new Error("Invalid credentials");
      }
    }

    // Async with arrow function: We can create async functions using arrow function syntax. This is useful when defining short asynchronous functions or when using arrow functions in combination with other features like Promises and async/await.

    const fetchDataAsyncArrow = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    // 7. Top-level await: Top-level await is a feature in JavaScript that allows you to use the await keyword outside of async functions at the top level of a module. It simplifies working with asynchronous code in module scripts and provides a more straightforward way to handle asynchronous operations.

    // Note: Top-level await only works at the top level of modules. There is no support for classic scripts or non-async functions. Top-level await enables developers to use the await keyword outside of async functions. It acts like a big async function causing other modules who import them to wait before they start evaluating their body.

    // For more info: https://v8.dev/features/top-level-await

    // Top-level await - Example:

    const responseTopLevelAwait = await fetch("https://api.example.com/data");

    const dataTopLevelAwait = await response.json();

    // export default dataTopLevelAwait;

    // Real cases of use:

    // Top-level await - Fetching data from an API in module scripts:

    // const response = await fetch("https://api.example.com/data");

    // 8. Promises: Promises in JavaScript are used to handle asynchronous operations and provide a way to work with asynchronous code in a more structured and manageable way. A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises have three states: pending, fulfilled, and rejected. A Promise is created using the new Promise() constructor, which takes a function as an argument with two parameters: resolve and reject.

    // Promises - Example:

    const promisePromises = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue >= 0.5) {
          resolve(randomValue);
        } else {
          reject(new Error("Value is too low"));
        }
      }, 1000);
    }, 1000);

    promisePromises.then(value => {
      console.log("Resolved:", value);
    }).catch(error => {
      console.error("Rejected:", error.message);
    });

    // Real cases of use:

    // Promises - Fetching data from an API:

    function fetchDataPromises(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    }

    // 9. Promise.resolve(): The Promise.resolve() method in JavaScript returns a Promise object that is resolved with a given value. It is a convenient way to create a Promise that is already resolved with a specific value. Promise.resolve() is useful for converting non-Promise values into Promises and simplifying asynchronous code.

    // Promise.resolve() - Example:

    const resolvedPromise = Promise.resolve(42);

    resolvedPromise.then(value => {
      console.log("Resolved:", value);
    });

    // 10. Promise.reject(): The Promise.reject() method in JavaScript returns a Promise object that is rejected with a given reason. It is a convenient way to create a Promise that is already rejected with a specific error. Promise.reject() is useful for handling errors and failures in asynchronous code.

    // Promise.reject() - Example:

    const rejectedPromise = Promise.reject(new Error("Promise rejected"));

    rejectedPromise.catch(error => {
      console.error("Rejected:", error.message);
    });

    // 11. Promise.all(): The Promise.all() method in JavaScript takes an iterable of Promises and returns a single Promise that resolves when all of the input Promises have resolved, or rejects with the reason of the first Promise that rejects. It is useful for running multiple asynchronous operations in parallel and waiting for all of them to complete.

    // Promise.all() - Example:

    const promise1 = Promise.resolve(1);
    const promise2 = Promise.resolve(2);
    const promise3 = Promise.resolve(3);

    Promise.all([promise1, promise2, promise3])
    .then(values => {
      console.log("Resolved:", values);
    });

    // 12. Promise.any(): The Promise.any() method in JavaScript takes an iterable of Promises and returns a single Promise that resolves as soon as one of the input Promises resolves, or rejects if all of the input Promises reject. It is useful for handling multiple asynchronous operations and waiting for the first one to complete successfully.

    // Promise.any() - Example:

    const promiseAny1 = new Promise((resolve, reject) => setTimeout(resolve, 100, "one"));
    const promiseAny2 = new Promise((resolve, reject) => setTimeout(resolve, 200, "two"));
    const promiseAny3 = new Promise((resolve, reject) => setTimeout(resolve, 300, "three"));

    Promise.any([promiseAny1, promiseAny2, promiseAny3])
    .then(value => {
      console.log("Resolved:", value);
    });

    // 13. .then(): The .then() method in JavaScript is used to handle the result of a Promise after it has been resolved. It takes two optional callback functions as arguments: onFulfilled and onRejected. The onFulfilled callback is called when the Promise is resolved, and the onRejected callback is called when the Promise is rejected.

    // .then() - Example:

    const promiseThen = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue >= 0.5) {
          resolve(randomValue);
        } else {
          reject(new Error("Value is too low"));
        }
      }, 1000);
    })

    promiseThen.then(value => {
      console.log("Resolved:", value);
    }).catch(error => {
      console.error("Rejected:", error.message);
    });

    // 14. .finally(): The .finally() method in JavaScript is used to run cleanup code after a Promise is settled (resolved or rejected). It is called regardless of the Promise's outcome and allows you to perform cleanup tasks like closing resources, releasing memory, or logging final results.

    // .finally() - Example:

    const promiseFinally = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue >= 0.5) {
          resolve(randomValue);
        } else {
          reject(new Error("Value is too low"));
        }
      }, 1000);
    })

    promiseFinally.then(value => {
      console.log("Resolved:", value);
    }).catch(error => {
      console.error("Rejected:", error.message);
    }).finally(() => {
      console.log("Cleanup code here");
    });

    // 15. .catch(): The .catch() method in JavaScript is used to handle errors in Promises. It is a shorthand for .then(null, onRejected) and is called when a Promise is rejected. The .catch() method allows you to handle errors in a more concise and readable way.

    // .catch() - Example:

    const promiseCatch = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Promise rejected"));
      }, 1000);
    })

    promiseCatch.then(value => {
      console.log("Resolved:", value);
    }).catch(error => {
      console.error("Rejected:", error.message);
    });

}

/* 10. Strings */

{
  // 1. [] (character access): The square brackets [] in JavaScript are used to access individual characters in a string. You can access characters by their index position, starting from 0 for the first character. The character at a specific index can be retrieved or modified using square brackets notation.

  // [] - Examples:

  // [] - Accessing characters in a string

  const textString = "Hello, Ernestico!";

  console.log(textString[0]); // "H"
  console.log(textString[7]); // "E"
  console.log(textString[13]); // "!"

  // [] - Modifying characters in a string

  const nameString = "Ernestico!";
  nameString[0] = "A"; // This does not modify the string
  console.log(nameString); // "Ernestico!"
  nameString = "A" + nameString.slice(1); // This modifies the string
  console.log(nameString); // "Arnestico!"

  // 2. Template strings: Template strings in JavaScript are a way to create strings that allow for embedded expressions and multi-line strings. They are enclosed in backticks (`) instead of single or double quotes. Template strings support string interpolation, allowing you to embed variables and expressions inside the string using ${...} syntax.

  // Template strings - Examples:

  // Template strings - String interpolation

  const nameTemplate = "Ernestico";
  const greetingTemplate = `Hello, ${nameTemplate}!`;

  console.log(greetingTemplate); // "Hello, Ernestico!"

  // Template strings - Multi-line strings

  const multiLineString = `
    This is a
    multi-line
    string.
  `;
  console.log(multiLineString); // "This is a\nmulti-line\nstring."

  // Template strings - Expressions and calculations

  const number1 = 5;
  const number2 = 10;

  const sumTemplate = `${number1} + ${number2} = ${number1 + number2}`;

  console.log(sumTemplate); // "5 + 10 = 15"

  // 3. Concatenation: Concatenation in JavaScript refers to combining multiple strings into a single string. It is commonly used to build dynamic strings by joining static text with variables, expressions, or other strings. Concatenation can be done using the + operator or template strings.

  // Concatenation - Examples:

  // Concatenation - Using the + operator

  const firstNameConcat = "Ernestico";

  const fullNameConcat = "Hello, " + firstNameConcat + "!";

  console.log(fullNameConcat); // "Hello, Ernestico!"

  // Concatenation - Using template strings

  const lastNameConcat = "Roca";

  const fullNameTemplate = `Hello, ${firstNameConcat} ${lastNameConcat}!`;

  console.log(fullNameTemplate); // "Hello, Ernestico Roca!"

  // Concatenation - Combining multiple strings

  const text1 = "Hello, ";
  const text2 = "Ernestico";

  const messageConcat = text1 + text2 + "!";

  console.log(messageConcat); // "Hello, Ernestico!"

  // 4. .trim(): The .trim() method in JavaScript is used to remove whitespace characters from the beginning and end of a string. It trims leading and trailing spaces, tabs, and line breaks, but not spaces within the string. The .trim() method is useful for cleaning up user input, normalizing strings, and comparing strings without leading or trailing whitespace. 

  // .trim() - Examples:

  const textTrim = "   Hello, Ernestico!   ";
  console.log(textTrim.trim()); // "Hello, Ernestico!"

  // .trim() - Removing leading and trailing spaces

  const textLeading = "   Hello, Ernestico!";
  console.log(textLeading.trim()); // "Hello, Ernestico!"

  const textTrailing = "Hello, Ernestico!   ";
  console.log(textTrailing.trim()); // "Hello, Ernestico!"

  // .trim() - Normalizing user input

  const userInput = " Ernestico    ";
  const normalizedInput = userInput.trim();
  console.log(normalizedInput); // "Ernestico"

  // 5. .toUpperCase(): The .toUpperCase() method in JavaScript is used to convert a string to uppercase letters. It returns a new string with all characters converted to uppercase. The .toUpperCase() method is useful for normalizing text, comparing strings case-insensitively, and formatting text in a consistent way.

  // .toUpperCase() - Examples:

  const textUpper = "Hello, Ernestico!";
  console.log(textUpper.toUpperCase()); // "HELLO, ERNESTICO!"

  // 6. .toLowerCase(): The .toLowerCase() method in JavaScript is used to convert a string to lowercase letters. It returns a new string with all characters converted to lowercase. The .toLowerCase() method is useful for normalizing text, comparing strings case-insensitively, and formatting text in a consistent way.

  // .toLowerCase() - Examples:

  const textLower = "Hello, Ernestico!";
  console.log(textLower.toLowerCase()); // "hello, ernestico!"

  // 7. .substring(): The .substring() method in JavaScript is used to extract a substring from a string. It takes two parameters: the starting index (inclusive) and the ending index (exclusive) of the substring. The .substring() method returns a new string containing the characters between the specified indices.

  // .substring() - Examples:

  const textSubstring = "Hello, Ernestico!";
  console.log(textSubstring.substring(7, 16)); // "Ernestico"

  // 8. .startsWith(): The .startsWith() method in JavaScript is used to check if a string starts with a specific substring. It returns true if the string starts with the specified substring, and false otherwise. The .startsWith() method is useful for checking prefixes, patterns, or keywords at the beginning of a string. It is case-sensitive.

  // .startsWith() - Examples:

  const textStartsWith = "Hello, Ernestico!";
  console.log(textStartsWith.startsWith("Hello")); // true
  console.log(textStartsWith.startsWith("Ernestico")); // false
  console.log(textStartsWith.startsWith("H")); // true
  console.log(textStartsWith.startsWith("hello")); // false

  // 9. .split(): The .split() method in JavaScript is used to split a string into an array of substrings based on a specified separator. It takes a separator as an argument and returns an array of substrings. The .split() method is useful for parsing strings, extracting values, and splitting text into smaller parts.

  // .split() - Examples:

  const textSplit = "Hello, Ernestico!";
  console.log(textSplit.split(",")); // ["Hello", " Ernestico!"]
  console.log(textSplit.split(" ")); // ["Hello,", "Ernestico!"]
  console.log(textSplit.split("o")); // ["Hell", ", Ernestic", "!"] 

  // 10. .replaceAll(): The .replaceAll() method in JavaScript is used to replace all occurrences of a specified substring with another substring in a string. It takes two parameters: the substring to be replaced and the new substring to replace it with. The .replaceAll() method returns a new string with all occurrences of the specified substring replaced.

  // .replaceAll() - Examples:

  const textReplaceAll = "Hello, Ernestico!";
  console.log(textReplaceAll.replaceAll("Hello", "Hi")); // "Hi, Ernestico!"
  console.log(textReplaceAll.replaceAll("o", "0")); // "Hell0, Ernestic0!"

  // 11. .replace(): The .replace() method in JavaScript is used to replace a specified substring with another substring in a string. It takes two parameters: the substring to be replaced and the new substring to replace it with. The .replace() method replaces only the first occurrence of the specified substring.

  // .replace() - Examples:

  const textReplace = "Hello, Ernestico!";
  console.log(textReplace.replace("Hello", "Hi")); // "Hi, Ernestico!"
  console.log(textReplace.replace("o", "0")); // "Hell0, Ernestico!"

  // 12. .length: The length property in JavaScript is used to get the number of characters in a string. It returns the length of the string as an integer value. The length property is useful for checking the size of a string, iterating over characters, and performing string manipulation operations.

  // length - Examples:

  const textLength = "Hello, Ernestico!";
  console.log(textLength.length); // 17

  // 13. .includes(): The .includes() method in JavaScript is used to check if a string contains a specific substring. It returns true if the string contains the specified substring, and false otherwise. The .includes() method is case-sensitive.

  // .includes() - Examples:

  const textIncludes = "Hello, Ernestico!";
  console.log(textIncludes.includes("Hello")); // true
  console.log(textIncludes.includes("Ernestico")); // true
  console.log(textIncludes.includes("hello")); // false
  console.log(textIncludes.includes("ello")); // true

  // 14. .indexOf(): The .indexOf() method in JavaScript is used to find the index of the first occurrence of a specified substring in a string. It returns the index of the substring if found, and -1 if the substring is not present. The .indexOf() method is case-sensitive.

  // .indexOf() - Examples:

  const textIndexOf = "Hello, Ernestico!";
  console.log(textIndexOf.indexOf("Hello")); // 0
  console.log(textIndexOf.indexOf("Ernestico")); // 7
  console.log(textIndexOf.indexOf("hello")); // -1
  console.log(textIndexOf.indexOf("o")); // 4

  // 15. .endsWith(): The .endsWith() method in JavaScript is used to check if a string ends with a specific substring. It returns true if the string ends with the specified substring, and false otherwise. The .endsWith() method is case-sensitive.

  // .endsWith() - Examples:

  const textEndsWith = "Hello, Ernestico!";
  console.log(textEndsWith.endsWith("Ernestico!")); // true
  console.log(textEndsWith.endsWith("Hello")); // false

  // 16. .charAt(): The .charAt() method in JavaScript is used to get the character at a specific index in a string. It takes an index as an argument and returns the character at that index. The .charAt() method is useful for accessing individual characters in a string.

  // .charAt() - Examples:

  const textCharAt = "Hello, Ernestico!";
  console.log(textCharAt.charAt(0)); // "H"
  console.log(textCharAt.charAt(7)); // "E"
  console.log(textCharAt.charAt(13)); // "!"

  // 17. .at(): The .at() method in JavaScript is used to get the character at a specific index in a string. It takes an index as an argument and returns the character at that index. The .at() method is similar to the .charAt() method but supports negative indices and Unicode characters. The difference between .at() and .charAt() is that .at() returns an empty string for out-of-bounds indices, while .charAt() returns an empty string for negative indices.

  // .at() - Examples:

  const textAt = "Hello, Ernestico!";
  console.log(textAt.at(0)); // "H"
  console.log(textAt.at(7)); // "E"
  console.log(textAt.at(13)); // "!"

  // 18. Null: The null value in JavaScript signifies the deliberate absence of any object value. It is considered as one of JavaScript’s primitive values and a falsy value. Deliberate absence emphasises the intentional use of null to indicate that a variable does not point to any object. This explicit declaration conveys the purposeful nature of null, showing that the variable is meant to be empty or non-existent at execution time. In essence, null is a way to reset a variable, signalling that it should not reference any object.

  // Null examples:

    // Initializing a Variable to Indicate No Value. Why null? It explicitly communicates that the variable is intentionally empty, not undefined by accident.

    let selectedCountry = null;

    // Later in the code
    if (selectedCountry === null) {
        console.log("No country selected yet.");
    }

    // Resetting a Variable. Why null? It signifies the deliberate removal of the object data, indicating that there’s no active session.

    let userSession = {
        id: 123,
        name: "John Doe"
    };

    // When the user logs out
    userSession = null;

    console.log(userSession); // Output: null

    // Representing Missing Data. Why null? It clarifies that the middle name is intentionally left blank, rather than being undefined due to an error.

    let user = {
        firstName: "Alice",
        middleName: null, // Middle name is not provided
        lastName: "Smith"
    };
    
    console.log(user.middleName); // Output: null
    
}

/* 11. Syntax */

{
  // 1. try...catch...finally: The try...catch...finally statement in JavaScript is used to handle exceptions and errors in code. It consists of three blocks: try, catch, and finally. The try block contains the code that may throw an exception. The catch block is executed when an exception is thrown, and it handles the error. The finally block is executed after the try and catch blocks, regardless of whether an exception occurred.

  // try...catch...finally - Example:

  try {
    // Code that may throw an exception
    throw new Error("An error occurred");
  } catch (error) {
    // Handle the error
    console.error("Error:", error.message);
  } finally {
    // Cleanup code
    console.log("Finally block executed");
  }

  // Real cases of use:

  // try...catch...finally - Handling file operations in Node.js:

  const fs = require("fs");

  try {
    const data = fs.readFileSync("file.txt", "utf8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  } finally {
    console.log("File operation completed");
  }

  // try...catch...finally - Handling database operations in web applications:

  try {
    const data = await fetchDataFromDatabase();
    console.log("Data from database:", data);
  }
  catch (error) {
    console.error("Error fetching data:", error.message);
  }
  finally {
    console.log("Database operation completed");
  }

  // 2. throw: The throw statement in JavaScript is used to throw an exception or error. It interrupts the execution of the code and transfers control to the nearest enclosing try...catch block. The throw statement is useful for signaling errors, handling exceptional conditions, and customizing error messages.

  // throw - Example:

  const ageThrow = -1;

  if (ageThrow < 0) {
    throw new Error("Age cannot be negative");
  }

  // Real cases of use:

  // throw - Validating user input in web forms:

  function validateUserInput(input) {
    if (!input) {
      throw new Error("Input is required");
    }
  }

  // throw - Handling invalid arguments in functions:

  function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid dimensions");
    }
    return width * height;
  }

  // 3. return: The return statement in JavaScript is used to end the execution of a function and specify the value to be returned. It returns the value of the expression following the return keyword to the caller of the function. The return statement is used to provide the output of a function and exit the function's execution.

  // return - Example:

  function sum(a, b) {
    return a + b;
  }

  const result = sum(5, 10);
  console.log(result); // 15

  // Real cases of use:

  // return - Calculating total price in a shopping cart:

  function calculateTotalPrice(items) {
    let total = 0;
    for (const item of items) {
      total += item.price;
    }
    return total;
  }

  // 4. Ternary operator: The ternary operator in JavaScript is a conditional operator that evaluates a condition and returns one of two expressions based on the result of the condition. It consists of three parts: a condition, a true expression, and a false expression. The ternary operator is a concise way to write conditional statements and is often used for simple if-else checks. It is like a shorthand for an if-else statement.

  // Ternary operator - Example:

  const ageTernary = 25;
  const messageTernary = ageTernary >= 18 ? "You are an adult" : "You are a minor";

  console.log(messageTernary); // "You are an adult"

  // 5. if...else: The if...else statement in JavaScript is used to execute different blocks of code based on a condition. It consists of an if block, an optional else block, and one or more else if blocks. The if block contains the code to be executed if the condition is true. The else block contains the code to be executed if the condition is false. The else if block allows for multiple conditions to be checked.

  // if...else - Example:

  const temperature = 25;

  if (temperature > 30) {
    console.log("It's hot outside");
  } else if (temperature > 20) {
    console.log("It's warm outside");
  } else {
    console.log("It's cold outside");
  }

  // Real cases of use:

  // if...else - Validating user input in a web form:

  if (input === "") {
    console.log("Input is required");
  } else {
    console.log("Input is valid");
  }

  // if...else - Handling user authentication in a web application:

  if (isValidCredentials(credentials)) {
    console.log("User is authenticated");
  } else {
    console.log("Invalid credentials");
  }

  // 6. for...of: The for...of statement in JavaScript is used to iterate over the elements of an iterable object, such as an array, string, or collection. It provides a concise and readable way to loop through the elements of an iterable without using traditional index-based loops. The for...of statement works with any object that has a Symbol.iterator method. It is commonly used for iterating over arrays, strings, and other iterable objects. The diffence with the for...in loop is that for...of iterates over the values of an iterable, while for...in iterates over the keys or indices.

  // for...of - Example:

  const forOfNumbers = [1, 2, 3, 4, 5];

  for (const number of forOfNumbers) {
    console.log(number); // 1, 2, 3, 4, 5
  }

  // Real cases of use:

  // for...of - Processing items in a shopping cart:

  const shoppingCart = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  let totalPrice = 0;

  for (const item of shoppingCart) {
    totalPrice += item.price;
  }

  console.log("Total price:", totalPrice);

  // 7. for (loops): The for loop in JavaScript is used to iterate over a block of code a specified number of times. It consists of three parts: an initialization, a condition, and an increment or decrement. The for loop executes the code block as long as the condition is true. It is commonly used for iterating over arrays, generating sequences, and performing repetitive tasks.

  // for (loops) - Example:

  for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
 
  // Real cases of use:

  // for (loops) - Generating a sequence of numbers:

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  // for (loops) - Iterating over an array:

  const numbersFor = [1, 2, 3, 4, 5];

  for (let i = 0; i < numbersFor.length; i++) {
    console.log(numbersFor[i]);
  }

  // 8. while: The while loop in JavaScript is used to execute a block of code as long as a specified condition is true. It consists of a condition that is evaluated before each iteration of the loop. The while loop continues to execute the code block until the condition becomes false. It is commonly used for repeating tasks with an unknown number of iterations.

  // while - Example:

  let count = 0;

  while (count < 5) {
    console.log(count);
    count++;
  }

  // Real cases of use:

  // while - Processing user input until valid:

  let userInput = "";

  while (userInput === "") {
    userInput = prompt("Enter your name:");
  }

  console.log("User input:", userInput);

  // while - Generating a sequence of random numbers:

  let randomNumbers = [];

  while (randomNumbers.length < 5) {
    randomNumbers.push(Math.random());
  }

  console.log("Random numbers:", randomNumbers);

  // 9. Semi-colons: Semi-colons in JavaScript are used to terminate statements and separate multiple statements on the same line. While semi-colons are optional in JavaScript due to automatic semicolon insertion (ASI), it is recommended to use them to avoid potential issues and improve code readability. Semi-colons are used to indicate the end of a statement and prevent syntax errors.

  // Semi-colons - Examples:

  const messageSemiColon = "Hello, Ernestico!"; // Semi-colon at the end of the statement

  let countSemiColon = 0; // Semi-colon at the end of the statement

  countSemiColon++; // Semi-colon at the end of the statement

  // Real cases of use:

  // Semi-colons - Terminating statements in JavaScript:

  const firstNameSemiColon = "Ernestico"; // Semi-colon at the end of the statement

  let ageSemiColon = 25; // Semi-colon at the end of the statement

  // 10. Exceptions: Exceptions in JavaScript are used to handle errors, exceptional conditions, and unexpected behavior in code. They provide a way to gracefully handle errors and prevent the program from crashing. Exceptions can be thrown using the throw statement and caught using try...catch blocks. They allow you to handle errors, recover from failures, and provide meaningful error messages to users.

  // Exceptions - Example:

  try {
    throw new Error("An error occurred");
  } catch (error) {
    console.error("Error:", error.message);
  }

  // Real cases of use:

  // Exceptions - Handling file operations in Node.js:

  const fs = require("fs");

  try {
    const data = fs.readFileSync("file.txt", "utf8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }

  // Exceptions - Validating user input in web forms:

  function validateUserInput(input) {
    if (!input) {
      throw new Error("Input is required");
    }
  }

  // Exceptions - Handling database operations in web applications:

  try {
    const data = await fetchDataFromDatabase();
    console.log("Data from database:", data);
  }
  catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

/* 12. Arrays */

{
  // 1. ... (spread operator): The spread operator (...) in JavaScript is used to expand an iterable object, such as an array or string, into individual elements. It allows you to split an array into individual elements or combine multiple elements into an array. The spread operator is useful for creating copies of arrays, merging arrays, and passing multiple arguments to functions.

  // ... (spread operator) - Examples:

  // ... (spread operator) - Splitting an array into individual elements

  const numbersSpread = [1, 2, 3, 4, 5];

  console.log(...numbersSpread); // 1 2 3 4 5

  // ... (spread operator) - Combining multiple elements into an array

  const numbersCombined = [...numbersSpread, 6, 7, 8, 9, 10];

  console.log(numbersCombined); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // 2. .at(): The .at() method in JavaScript is used to get the element at a specific index in an array. It takes an index as an argument and returns the element at that index. The .at() method is similar to the .charAt() method for strings but works with arrays. The difference between .at() and .charAt() is that .at() returns undefined for out-of-bounds indices, while .charAt() returns an empty string for negative indices.

  // .at() - Examples:

  const numbersAt = [1, 2, 3, 4, 5];

  console.log(numbersAt.at(0)); // 1
  console.log(numbersAt.at(2)); // 3
  console.log(numbersAt.at(4)); // 5

  // 3. .every(): The .every() method in JavaScript is used to check if all elements in an array pass a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .every() method returns true if all elements satisfy the condition, and false otherwise. It is useful for checking if all elements meet a specific criteria or condition.

  // .every() - Examples:

  const numbersEvery = [1, 2, 3, 4, 5];

  const isPositive = numbersEvery.every(number => number > 0);

  console.log(isPositive); // true

  // 4. .filter(): The .filter() method in JavaScript is used to create a new array with elements that pass a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .filter() method returns a new array containing only the elements that satisfy the condition. It is useful for selecting or filtering elements based on a specific criteria. The difference with .every() is that .every() returns a boolean value, while .filter() returns a new array with the elements that pass the condition.

  // .filter() - Examples:

  const numbersFilter = [1, -2, 3, -4, 5];

  const positiveNumbers = numbersFilter.filter(number => number > 0);

  console.log(positiveNumbers); // [1, 3, 5]

  // Real cases of use:

  // .filter() - Filtering products in an e-commerce website:

  const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  const affordableProducts = products.filter(product => product.price < 20);

  console.log(affordableProducts); // [{ name: "Product 1", price: 10 }]

  // 5. .find(): The .find() method in JavaScript is used to find the first element in an array that passes a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .find() method returns the first element that satisfies the condition, or undefined if no element matches the condition. It is useful for searching for a specific element in an array.

  // .find() - Examples:

  const numbersFind = [1, 2, 3, 4, 5];

  const foundNumber = numbersFind.find(number => number > 3);

  console.log(foundNumber); // 4

  // 6. .findIndex(): The .findIndex() method in JavaScript is used to find the index of the first element in an array that passes a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .findIndex() method returns the index of the first element that satisfies the condition, or -1 if no element matches the condition. It is useful for finding the position of a specific element in an array.

  // .findIndex() - Examples:

  const numbersFindIndex = [1, 2, 3, 4, 5];

  const index = numbersFindIndex.findIndex(number => number > 3);

  console.log(index); // 3

  // 7. .foreach(): The .forEach() method in JavaScript is used to iterate over the elements of an array and perform a specified action for each element. It takes a callback function as an argument, which is called for each element in the array. The .forEach() method does not return a new array but executes the callback function for each element. It is useful for performing side effects, such as logging, updating variables, or interacting with the DOM.

  // .forEach() - Examples:

  const numbersForEach = [1, 2, 3, 4, 5];

  numbersForEach.forEach(number => {
    console.log(number);
  });

  // Real cases of use:

  // .forEach() - Logging items in a shopping cart:

  const shoppingCart = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  shoppingCart.forEach(item => {
    console.log(item.name, item.price);
  });

  // 8. .includes(): The .includes() method in JavaScript is used to check if an array contains a specific element. It returns true if the array includes the element, and false otherwise. The .includes() method is case-sensitive and works with primitive values, objects, and arrays. It is useful for checking the presence of an element in an array.

  // .includes() - Examples:

  const numbersIncludes = [1, 2, 3, 4, 5];

  console.log(numbersIncludes.includes(3)); // true
  console.log(numbersIncludes.includes(6)); // false

  // 9. .join(): The .join() method in JavaScript is used to join the elements of an array into a string. It takes an optional separator as an argument, which is inserted between the elements in the resulting string. The .join() method returns a new string containing the elements of the array joined together. It is useful for converting arrays into strings with custom separators.

  // .join() - Examples:

  const fruits = ["apple", "banana", "orange"];

  console.log(fruits.join(", ")); // "apple, banana, orange"
  console.log(fruits.join(" | ")); // "apple | banana | orange"

  // Real cases of use:

  // .join() - Formatting a list of items for display:

  const items = ["item1", "item2", "item3"];

  const formattedList = items.join(", ");

  console.log("Items:", formattedList);

  // 10. .map(): The .map() method in JavaScript is used to create a new array by applying a specified function to each element in an existing array. It takes a callback function as an argument, which is called for each element in the array. The .map() method returns a new array containing the results of applying the callback function to each element. It is useful for transforming, modifying, or extracting values from an array. The difference between .map() and .forEach() is that .map() returns a new array with the transformed elements, while .forEach() does not return a new array. In general is recommend to use .map() when you want to transform the elements of an array and create a new array with the transformed values.

  // .map() - Examples:

  const numbersMap = [1, 2, 3, 4, 5];

  const squaredNumbers = numbersMap.map(number => number ** 2);

  console.log(squaredNumbers); // [1, 4, 9, 16, 25]

  // Real cases of use:

  // .map() - Formatting data for display in a web application:

  const data = [10, 20, 30, 40, 50];

  const formattedData = data.map(value => `$${value}`);

  console.log("Formatted data:", formattedData.join(", ")); // Formatted data: "$10, $20, $30, $40, $50"

  // 11. .push(): The .push() method in JavaScript is used to add one or more elements to the end of an array. It takes one or more arguments, which are appended to the array in the order they are provided. The .push() method modifies the original array and returns the new length of the array. It is useful for adding elements to an array dynamically.

  // .push() - Examples:

  const numbersPush = [1, 2, 3, 4, 5];
  numbersPush.push(6);
  console.log(numbersPush); // [1, 2, 3, 4, 5, 6]

  numbersPush.push(7, 8, 9);
  console.log(numbersPush); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Real cases of use:

  // .push() - Adding items to a shopping cart:

  const shoppingCartPush = [];

  shoppingCartPush.push({ name: "Product 1", price: 10 });
  shoppingCartPush.push({ name: "Product 2", price: 20 });

  console.log("Shopping cart:", shoppingCartPush); // 

  // 12. .reduce(): The .reduce() method in JavaScript is used to reduce an array to a single value by applying a specified function to each element in the array. It takes a callback function and an optional initial value as arguments. The callback function is called for each element in the array, and the result is accumulated into a single value. The .reduce() method returns the final accumulated value. It is useful for calculating totals, aggregating data, and performing complex transformations on arrays. The difference between .reduce() and .map() is that .reduce() reduces an array to a single value, while .map() transforms each element of an array and returns a new array with the transformed values.
  // The value of 0 in the second argument of the .reduce() method is the initial value of the accumulator. The first argument of the reduce method is a callback function that takes two parameters: the accumulator and the current value of the array. The callback function returns the new value of the accumulator after processing the current value.



  // .reduce() - Examples:

  const numbersReduce = [1, 2, 3, 4, 5];

  const sumReduce = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(sumReduce); // 15

  // Real cases of use:

  // .reduce() - Calculating the total price of items in a shopping cart:

  const shoppingCartReduce = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  const totalPriceReduce = shoppingCartReduce.reduce((total, item) => total + item.price, 0);

  console.log("Total price:", totalPriceReduce); // Total price: 60

  // 13. .some(): The .some() method in JavaScript is used to check if at least one element in an array passes a specified condition. It takes a callback function as an argument, which is called for each element in the array. The .some() method returns true if at least one element satisfies the condition, and false otherwise. It is useful for checking if any element meets a specific criteria or condition.

  // .some() - Examples:

  const numbersSome = [1, 2, 3, 4, 5];

  const hasNegativeNumber = numbersSome.some(number => number < 0);

  console.log(hasNegativeNumber); // false

  // Real case of use:

  // .some() - Checking if any item is on sale in an e-commerce website:

  const productsSome = [
    { name: "Product 1", price: 10, onSale: false },
    { name: "Product 2", price: 20, onSale: true },
    { name: "Product 3", price: 30, onSale: false }
  ];

  const hasSale = productsSome.some(product => product.onSale);

  console.log("Sale available:", hasSale); // Sale available: true

  // 14. .sort(): The .sort() method in JavaScript is used to sort the elements of an array in place. By default, the .sort() method sorts the elements as strings in ascending order. It modifies the original array and returns the sorted array. The .sort() method can also take a compare function as an argument to specify a custom sorting order. It is useful for arranging elements in a specific order, such as alphabetical, numerical, or custom sorting criteria.

  // .sort() - Examples:

  const numbersSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

  numbersSort.sort();

  console.log(numbersSort); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

  // Real cases of use:

  // .sort() - Sorting products by price in an e-commerce website:

  const productsSort = [
    { name: "Product 1", price: 30 },
    { name: "Product 2", price: 10 },
    { name: "Product 3", price: 20 }
  ];

  productsSort.sort((a, b) => a.price - b.price);

  console.log("Sorted products:", productsSort); // Sorted products: [{ name: "Product 2", price: 10 }, { name: "Product 3", price: 20 }, { name: "Product 1", price: 30 }]

  // 15. .splice(): The .splice() method in JavaScript is used to add or remove elements from an array at a specified index. It takes three arguments: the start index, the number of elements to remove, and optional elements to add. The .splice() method modifies the original array and returns the removed elements as a new array. It is useful for inserting, removing, or replacing elements in an array.

  // .splice() - Examples:

  const numbersSplice = [1, 2, 3, 4, 5];

  const removedNumbers = numbersSplice.splice(2, 2);

  console.log(removedNumbers); // [3, 4]
  console.log(numbersSplice); // [1, 2, 5]

  numbersSplice.splice(2, 0, 3, 4);
  console.log(numbersSplice); // [1, 2, 3, 4, 5]

  // Real cases of use:

  // .splice() - Removing items from a shopping cart:

  const shoppingCartSplice = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  const removedItems = shoppingCartSplice.splice(1, 2);

  console.log("Removed items:", removedItems); // Removed items: [{ name: "Product 2", price: 20 }, { name: "Product 3", price: 30 }]

  // 16. ?. (optional chaining): The optional chaining operator (?.) in JavaScript is used to access properties of an object without causing an error if the property is undefined or null. It allows you to safely navigate nested object properties without checking for each level of existence. The optional chaining operator returns undefined if any property in the chain is null or undefined. It is useful for handling optional properties, nested objects, and avoiding "TypeError: Cannot read property 'x' of undefined" errors.

  // ?. (optional chaining) - Examples:

  let userOptionalChaining = {
    name: "Ernestico",
    address: {
      city: "San Francisco"
    }
  };

  console.log(userOptionalChaining.address?.city); // "San Francisco

  userOptionalChaining = {
    name: "Ernestico"
  };

  console.log(userOptionalChaining.address?.city); // undefined

  // 17. Arrays of objects: Arrays of objects in JavaScript are used to store collections of related data in a structured format. Each element in the array is an object that contains key-value pairs of properties and values. Arrays of objects are useful for representing complex data structures, such as lists of products, users, or items. They allow you to group related data together and perform operations on the collection as a whole.

  // Arrays of objects - Examples:

  const productsArray = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  console.log(productsArray[0].name); // "Product 1"
  console.log(productsArray[1].price); // 20
  console.log(productsArray.length); // 3

  // Real cases of use:

  // Arrays of objects - Storing user information in a web application:

  const usersArray = [
    { name: "User 1", email: "user1@email.com" },
    { name: "User 2", email: "user2@email.com" },
    { name: "User 3", email: "user3@email.com" }
  ];

  console.log(usersArray[0].name); // "User 1"
  console.log(usersArray[1].email); // "user2@email.com"
  console.log(usersArray.length); // 3

  // 18. [] get item: The [] operator in JavaScript is used to access elements in an array by their index. It takes an index as an argument and returns the element at that index. The [] operator is used to retrieve, update, or remove elements from an array. It is useful for working with arrays and accessing individual elements by their position.

  // [] get item - Examples:

  const numbersGetItem = [1, 2, 3, 4, 5];

  console.log(numbersGetItem[0]); // 1

  const firstNumber = numbersGetItem[0];
  console.log(firstNumber); // 1

  // 19. Destructuring: Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner. It allows you to unpack values from arrays or objects into individual variables using a syntax that mirrors the structure of the array or object. Destructuring is useful for working with complex data structures, such as arrays of objects or nested objects.

  // Destructuring - Examples:

  const numbersDestructuring = [1, 2, 3];

  const [first, second, third] = numbersDestructuring;

  console.log(first); // 1
  console.log(second); // 2
  console.log(third); // 3

  const userDestructuring = {
    name: "Ernestico",
    age: 25
  };

  const { name, age } = userDestructuring;

  console.log(name); // "Ernestico"
  console.log(age); // 25

  // Real cases of use:

  // Destructuring - Extracting data from an API response:

  const apiResponse = {
    data: {
      id: 1,
      name: "Product 1",
      price: 10
    }
  };

  const { id, nameApi, price } = apiResponse.data;

  console.log(nameApi); // "Product 1"
  console.log(price); // 10
  console.log(id); // 1

  // Destructuring - Simplifying function parameters:

  function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }

  const user = {
    name: "Ernestico",
    age: 25
  };

  printUser(user);

  // Destructuring in React components:

  const UserComponent = ({ name, age }) => {
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
      </div>
    );
  }

  const userProps = {
    name: "Ernestico",
    age: 25
  };

  <UserComponent {...userProps} />

  // 20. [] set item: The [] operator in JavaScript is used to update elements in an array by their index. It takes an index and a new value as arguments and assigns the new value to the element at that index. The [] operator is used to update, add, or remove elements from an array. It is useful for modifying arrays and updating individual elements by their position.

  // [] set item - Examples:

  const numbersSetItem = [1, 2, 3, 4, 5];

  numbersSetItem[0] = 10;

  console.log(numbersSetItem); // [10, 2, 3, 4, 5]

  numbersSetItem[2] = 30;

  console.log(numbersSetItem); // [10, 2, 30, 4, 5]

  // Real cases of use:

  // [] set item - Updating items in a shopping cart:

  const shoppingCartSetItem = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ];

  shoppingCartSetItem[1].price = 25;

  console.log(shoppingCartSetItem); // [{ name: "Product 1", price: 10 }, { name: "Product 2", price: 25 }, { name: "Product 3", price: 30 }]
}

/* 13. Classes */

{
  // 1. Classes: Classes in JavaScript are used to define blueprints for creating objects with shared properties and methods. They provide a way to create objects with similar characteristics and behaviors by encapsulating data and functionality into a single unit. Classes are a fundamental concept in object-oriented programming (OOP) and are used to model real-world entities, such as users, products, or vehicles.

  // Classes - Examples:

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
  }

  const person = new Person("Ernestico", 25);
  person.greet(); // "Hello, my name is Ernestico and I am 25 years old"

  // 2. Getters: Getters in JavaScript are used to define computed properties that are accessed like object properties but are computed on the fly. They allow you to define custom behavior when accessing a property of an object. Getters are useful for calculating derived values, formatting data, or performing validation logic.

  // Getters - Examples:

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    get area() {
      return Math.PI * this.radius ** 2;
    }
  }

  const circle = new Circle(5);
  console.log(circle.area); // 78.54

  // Real cases of use:

  // Getters - Calculating the total price of items in a shopping cart:

  class ShoppingCart {
    constructor(items) {
      this.items = items;
    }

    get totalPrice() {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  }

  const shoppingCart = new ShoppingCart([
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 }
  ]);

  console.log(shoppingCart.totalPrice); // 60

  // 3. Inheritance: Inheritance in JavaScript is a mechanism that allows a class to inherit properties and methods from another class. It enables code reuse and promotes a hierarchical structure of classes. Inheritance is a fundamental concept in object-oriented programming (OOP) and is used to model relationships between objects.

  {
    // 3.1. Class vs Function: The class keyword in JavaScript is used to define a class, which is a blueprint for creating objects with shared properties and methods. Classes provide a way to create objects with similar characteristics and behaviors by encapsulating data and functionality into a single unit. Classes are a fundamental concept in object-oriented programming (OOP) and are used to model real-world entities, such as users, products, or vehicles. Functions in JavaScript are used to define reusable blocks of code that can be called and executed multiple times. Functions can take parameters, return values, and perform specific tasks. They are a fundamental building block of JavaScript and are used for organizing and structuring code.

    // 3.2 Private class fields: Private class fields in JavaScript are used to define private properties and methods that are accessible only within the class. They provide encapsulation and data hiding by restricting access to internal class members. Private class fields are declared using the # symbol before the field name. They are useful for protecting sensitive data, preventing external modifications, and enforcing encapsulation.

    // Private class fields - Examples:

    class Counter {
      #count = 0;

      increment() {
        this.#count++;
      }

      decrement() {
        this.#count--;
      }

      getCount() {
        return this.#count;
      }
    }

    const counter = new Counter();

    counter.increment();
    counter.increment();
    counter.decrement();

    console.log(counter.getCount()); // 1   
    
    // 3.3. Public class fields: Public class fields in JavaScript are used to define public properties and methods that are accessible outside the class. They provide a way to expose class members to external code and allow for interaction with the class. Public class fields are declared without the # symbol before the field name. They are useful for defining properties and methods that can be accessed and modified from external code.

    // Public class fields - Examples:

    class Person {
      name = "Ernestico";
      age = 25;

      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
      }
    }

    const person = new Person();

    console.log(person.name); // "Ernestico"

    person.greet(); // "Hello, my name is Ernestico and I am 25 years old"

    // 3.4. Inheritance: Inheritance in JavaScript is a mechanism that allows a class to inherit properties and methods from another class. It enables code reuse and promotes a hierarchical structure of classes. Inheritance is a fundamental concept in object-oriented programming (OOP) and is used to model relationships between objects.

    // Inheritance - Examples:

    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`${this.name} makes a sound`);
      }
    }

    class Dog extends Animal {
      speak() {
        console.log(`${this.name} barks`);
      }
    }

    const dog = new Dog("Buddy");

  }

  // 3.5. Prototypal inheritance: Prototypal inheritance in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. It is based on the prototype chain, where objects inherit from other objects through a prototype link. Prototypal inheritance is a fundamental concept in JavaScript and is used to model relationships between objects. The relation between prototypal inheritance and inheritance is that prototypal inheritance is a specific type of inheritance that is based on the prototype chain. Other types of inheritance, such as class-based inheritance, are also used in object-oriented programming.

  // Prototypal inheritance - Examples:

  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
  }

  function Dog(name) {
    Animal.call(this, name);
  }

  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.speak = function() {
    console.log(`${this.name} barks`);
  }

  const dog = new Dog("Buddy");

  dog.speak(); // "Buddy barks"

  //  3.6. Prototype chain: The prototype chain in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects through a prototype link. It is a fundamental concept in JavaScript and is used to model relationships between objects. The prototype chain is a chain of objects linked through their prototype property, where each object inherits from its prototype object. The prototype chain enables objects to share behavior and functionality through inheritance.

  // Prototype chain - Examples:

  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
  }

  function Dog(name) {
    Animal.call(this, name);
  }

  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.speak = function() {
    console.log(`${this.name} barks`);
  }

  const dog2 = new Dog("Buddy");

  console.log(dog2 instanceof Dog); // true
  console.log(dog2 instanceof Animal); // true

  // 3.7. Super keyword: The super keyword in JavaScript is used to call methods on the superclass within a subclass. It is used to access and invoke methods defined on the superclass from the subclass. The super keyword is useful for reusing behavior and functionality from the superclass in the subclass. It allows you to call the constructor, methods, and properties of the superclass from the subclass.

  // Super keyword - Examples:

  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound`);
    }
  } 

  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }

    speak() {
      super.speak();
      console.log(`${this.name} barks`);
    }
  }

  const dog3 = new Dog("Buddy", "Golden Retriever");

  dog3.speak(); // "Buddy makes a sound" "Buddy barks"

  // Real cases of use:

  // Super keyword - Extending built-in classes in JavaScript:

  class CustomArray extends Array {
    constructor(...args) {
      super(...args);
    }

    unique() {
      return [...new Set(this)];
    }
  }

  const numbers = new CustomArray(1, 2, 3, 1, 2, 3);

  console.log(numbers.unique()); // [1, 2, 3]

  // 4. Instance methods: Instance methods in JavaScript are methods that are defined on the prototype of a class and are accessible on instances of the class. They provide behavior and functionality that can be shared across multiple instances of the class. Instance methods are used to define actions and operations that can be performed on individual objects created from the class.

  // Instance methods examples:

  // Example 1: Basic Class with Instance Methods
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // Instance method
    startEngine() {
      return `${this.make} ${this.model}'s engine has started.`;
    }

    // Instance method
    displayDetails() {
      return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
    }
  }

  // Creating instances
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Honda", "Civic", 2022);

  // Using instance methods
  console.log(car1.startEngine()); // Output: Toyota Corolla's engine has started.
  console.log(car2.displayDetails()); // Output: Car: Honda Civic, Year: 2022


  // Example 2: Advanced Instance Methods with Operations
  class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }

    // Instance method: Deposit money
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be positive.";
      }
      this.balance += amount;
      return `Deposited $${amount}. New balance: $${this.balance}.`;
    }

    // Instance method: Withdraw money
    withdraw(amount) {
      if (amount > this.balance) {
        return "Insufficient funds.";
      }
      this.balance -= amount;
      return `Withdrew $${amount}. Remaining balance: $${this.balance}.`;
    }
  }

  // Creating an instance
  const myAccount = new BankAccount("John Doe", 500);

  // Using instance methods
  console.log(myAccount.deposit(200)); // Output: Deposited $200. New balance: $700.
  console.log(myAccount.withdraw(100)); // Output: Withdrew $100. Remaining balance: $600.

  // 5. Instance variables: Instance variables in JavaScript are properties that are defined on individual instances of a class. They store data specific to each instance and are accessible through the this keyword within instance methods. Instance variables are used to store state and data associated with individual objects created from the class. They provide a way to encapsulate data within objects and maintain separate state for each instance.

  // Instance variables - Examples:

  class Counter {
    constructor() {
      this.count = 0;
    }

    increment() {
      this.count++;
    }

    decrement() {
      this.count--;
    }

    getCount() {
      return this.count;
    }
  }

  const counter = new Counter();

  counter.increment();

  console.log(counter.getCount()); // 1

  counter.decrement();

  console.log(counter.getCount()); // 0

  // Real cases of use:

  // Instance variables - Tracking user interactions in a web application:

  class UserActivity {
    constructor() {
      this.actions = [];
    }

    logAction(action) {
      this.actions.push(action);
    }

    getActions() {
      return this.actions;
    }
  }

  const userActivity = new UserActivity();

  userActivity.logAction("Clicked on button");

  console.log(userActivity.getActions()); // ["Clicked on button"]

  // 6. Setters: In JavaScript, setters are special methods within classes that allow you to define logic for setting a value to a property. They are part of the getter/setter concept, enabling controlled access to an object's properties. When you assign a value to a property, the setter method for that property is automatically called instead of directly changing the property.

  // Key Features of Setters:
    // Encapsulation: They allow you to control how values are assigned to object properties.
    // Validation: You can add logic to validate or manipulate the data before assigning it to a property.
    // Syntax: Setters are defined using the set keyword.

  // Setters - Examples:

  class BankAccount {
    constructor(owner, initialBalance) {
      this.owner = owner;
      this._balance = initialBalance; // Use an internal property for encapsulation
    }
  
    // Getter for balance
    get balance() {
      return this._balance;
    }
  
    // Setter for balance
    set balance(amount) {
      if (amount < 0) {
        console.error("Error: Balance cannot be negative.");
      } else {
        this._balance = amount;
      }
    }
  
    // Deposit method
    deposit(amount) {
      if (amount > 0) {
        this.balance = this._balance + amount; // Use setter
        console.log(`Deposited: $${amount}`);
      } else {
        console.error("Deposit amount must be positive.");
      }
    }
  
    // Withdraw method
    withdraw(amount) {
      if (amount > this._balance) {
        console.error("Insufficient funds.");
      } else if (amount > 0) {
        this.balance = this._balance - amount; // Use setter
        console.log(`Withdrew: $${amount}`);
      } else {
        console.error("Withdrawal amount must be positive.");
      }
    }
  }
  
  // Example Usage
  const account = new BankAccount("Alice", 1000);
  
  console.log(`Initial Balance: $${account.balance}`); // Getter used
  
  account.deposit(500); // Adds $500 to balance
  console.log(`Updated Balance: $${account.balance}`);
  
  account.withdraw(300); // Deducts $300 from balance
  console.log(`Updated Balance: $${account.balance}`);
  
  account.balance = -100; // Setter blocks this, shows error
  console.log(`Final Balance: $${account.balance}`);

  // Output:
  // Initial Balance: $1000
  // Deposited: $500
  // Updated Balance: $1500
  // Withdrew: $300
  // Updated Balance: $1200
  // Error: Balance cannot be negative.
  // Final Balance: $1200

  // 7. Static Methods: In JavaScript, static methods are methods defined on the class itself rather than on instances of the class. They are used for functionality that doesn't depend on an individual instance of the class and can be called directly on the class without creating an object.

    // Syntax: Static methods are defined using the static keyword:
    class MyClass {
      static myStaticMethod() {
          return "I am a static method!";
        }
    }

    // You call them directly on the class:
    console.log(MyClass.myStaticMethod()); // Output: I am a static method!

    // Static methods cannot be called on instances of the class.
    // They are typically used for utility or helper functions, factory methods, or to define application-wide constants.
    
}

/* 14. Type Casting */
/* Type conversion (or typecasting) means the transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. The source code can also explicitly require a conversion to take place. */

{
  // 1. Implicit Type Conversion: Implicit type conversion, also known as coercion, is an automatic type conversion by the compiler. It is performed when data types are mixed in expressions. For example, in JavaScript, the addition operator (+) can concatenate strings and add numbers. When a string and a number are added, the string is converted to a number.

  // Implicit Type Conversion - Examples:

  // Example 1: String and Number
  const num = 10;
  const str = "20";

  console.log(num + str); // Output: "1020"

  // Example 2: Boolean and Number

  const bool = true;
  const num2 = 10;

  console.log(bool + num2); // Output: 11

  // 2. Type Conversion/Coercion: Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they convert values from one data type to another with one key difference — type coercion is implicit. In contrast, type conversion can be either implicit or explicit.

  // Type Conversion/Coercion - Examples:

  // Example 1: String to Number

  const strToNum = "10";
  const numFromString = Number(strToNum);

  console.log(numFromString); // Output: 10

  // Example 2: Number to String

  const numToStr = 10;
  const strFromNumber = String(numToStr);

  console.log(strFromNumber); // Output: "10"

  // Example 3: Boolean to Number

  const boolToNum = true;
  const numFromBoolean = Number(boolToNum);

  console.log(numFromBoolean); // Output: 1

  // 3. Explicit Type Casting: Type casting means transferring data from one data type to another by explicitly specifying the type to convert the given data to. Explicit type casting is normally done to make data compatible with other variables. Examples of typecasting methods are parseInt(), parseFloat(), toString().

  // Explicit Type Casting - Examples:

  // Example 1: String to Number

  const strToNumExplicit = "10";
  const numFromStringExplicit = parseInt(strToNumExplicit);

  console.log(numFromStringExplicit); // Output: 10

  // Example 2: Number to String

  const numToStrExplicit = 10;
  const strFromNumberExplicit = numToStrExplicit.toString();

  console.log(strFromNumberExplicit); // Output: "10"

  // Example 3: Boolean to Number

  const boolToNumExplicit = true;
  const numFromBooleanExplicit = Number(boolToNumExplicit);

  console.log(numFromBooleanExplicit); // Output: 1

  // Real cases of use:

  // Explicit Type Casting - Parsing user input in a web application:

  const userInput = "10";
  const numberFromUserInput = parseInt(userInput);

  console.log(numberFromUserInput); // 10
}


/* Data Structures */
/* A Data structure is a format to organize, manage and store data in a way that allows efficient access and modification. JavaScript has primitive (built-in) and non-primitive (not built-in) data structures. Primitive data structures come by default with the programming language and you can implement them out of the box (like arrays and objects). Non-primitive data structures don’t come by default and you have to code them up if you want to use them. */

{
  // 1. Stack Data Structure: A stack is a linear data structure that follows the Last In First Out (LIFO) principle. In a stack, elements are added and removed from the same end, known as the top of the stack. The last element added to the stack is the first one to be removed. Stacks are used in programming for function calls, expression evaluation, and undo mechanisms.

  // Stack Data Structure - Examples:

  class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      this.items.push(element);
    }

    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }

  const stack = new Stack();

  console.log(stack.isEmpty()); // true

  stack.push(10);

  console.log(stack.printStack()); // 10

  stack.push(20);

  console.log(stack.printStack()); // 10 20

  stack.push(30);

  console.log(stack.printStack()); // 10 20 30

  console.log(stack.peek()); // 30

  console.log(stack.pop()); // 30

  console.log(stack.printStack()); // 10 20

  // Real cases of use:

  // Stack Data Structure - Implementing a browser history feature:

  class BrowserHistory {
    constructor() {
      this.history = new Stack();
    }

    visit(url) {
      this.history.push(url);
    }

    goBack() {
      return this.history.pop();
    }

    getCurrentPage() {
      return this.history.peek();
    }
  }

  const browser = new BrowserHistory();

  browser.visit("https://www.google.com");

  browser.visit("https://www.facebook.com");

  console.log(browser.getCurrentPage()); // "https://www.facebook.com"

  browser.visit("https://www.twitter.com");

  console.log(browser.getCurrentPage()); // "https://www.twitter.com"

  console.log(browser.goBack()); // "https://www.facebook.com"

  console.log(browser.getCurrentPage()); // "https://www.facebook.com"

}

/* 15. JS Frameworks */

{
  // 1. React: 

}