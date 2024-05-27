// Global Scope
const PI = Math.PI;

function foo () {
    console.log(PI);

    // Function Scope
    const age = 30;
    console.log(age); // 30
}

// Block Scope
if (true) {
    const name = "Mike";
    console.log(name); // Mike
}

console.log(PI); // 3.141592653589793
console.log(name); // ReferenceError: name is not defined
console.log(age); // ReferenceError: age is not defined