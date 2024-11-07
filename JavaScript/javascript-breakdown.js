/* JAVASCRIP BREAKDOWN */

const title = "JavaScript Breakdown";

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

/* Modules */

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

/* Number */

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


  

  


}

/* Objects */

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

/* Promises */

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

}