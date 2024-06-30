// Key Differences between JavaScript and TypeScript

/*
1. Type System:
    JavaScript: Dynamically typed. Variables can be reassigned to different types.
    TypeScript: Statically typed. You define the type of variables, which helps in catching errors early.

2. Compilation:
    JavaScript: Interpreted directly by browsers.
    TypeScript: Needs to be compiled to JavaScript. TypeScript code cannot run directly in browsers.

3. Features:
    JavaScript: Standard features as per ECMAScript specifications.
    TypeScript: Superset of JavaScript, meaning it includes all JavaScript features plus additional ones like interfaces, enums, and access modifiers.

4. Tooling:
    JavaScript: Widely supported by editors and browsers.
    TypeScript: Better tooling support due to static typing, including autocompletion and type checking.

*/ 

// TypeScript function

// TypeScript Code
function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(5, 10));  // 15
  // The following line would cause a compilation error in TypeScript
  // console.log(add("Hello", "World"));  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

  // JavaScript Code

// JavaScript Code
// function add(a, b) {
//     return a + b;
//   }
  
//   console.log(add(5, 10));  // 15
//   console.log(add("Hello", "World"));  // HelloWorld


 // TypeScript Object

interface User {
    name: string;
    age: number;
  }
  
  let user: User = {
    name: "Alice",
    age: 25
  };
  
  function getUserInfo(user: User): string {
    return `${user.name} is ${user.age} years old.`;
  }
  
  console.log(getUserInfo(user));  // Alice is 25 years old

// JavaScript Object

// let user = {
//     name: "Alice",
//     age: 25
//   };
  
//   function getUserInfo(user) {
//     return `${user.name} is ${user.age} years old.`;
//   }
  
//   console.log(getUserInfo(user));  // Alice is 25 years old
  