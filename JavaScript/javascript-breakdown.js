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

  // Functional programming: Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It emphasizes the use of pure functions, higher-order functions, and immutable data structures to create more predictable and maintainable code.

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


}

