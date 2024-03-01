// The void operator returns an undefined value from an evaluated expression, or in other words; the void operator specifies an expression to be evaluated without returning a value. It is commonly used in client-side JavaScript, where the browser should not display the value.

function getYear() {
    return 2020;
  };
  
  console.log(getYear());
  // Output: 2020
  
  console.log(void getYear());
  // Output: undefined
  
  // Useful use case
  button.onclick = () => void getYear();

// The void operator is often used to obtain the undefined primitive value, usually using void(0) (which is equivalent to void 0). This is useful when you want to create a link that does nothing when clicked, or a button that does nothing when pressed. For example:
// <a href="javascript:void(0)">Click me</a>
// <button onclick="void(0)">Click me</button>

// The void operator is also used to prevent the page from navigating to a new URL when a link is clicked. For example:
// <a href="javascript:void(document.body.style.backgroundColor='red')">Click me</a>

// The void operator can also be used to evaluate an expression without returning a value. For example:
// void console.log('Hello, World!'); // Hello, World!
// // Output: undefined

