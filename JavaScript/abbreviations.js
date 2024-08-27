// Declaring variables
let x, y, z = a;

let number;


// Ternary operator
if (x > 9) {
    number = true;
} else {
    number = false;
}

number = x > 9 ? true : false;

// Assignment operators
x = x + y;
x += y;

x = x - y;
x -= y;

// Switch Case abbreviation

switch (x) {
    case 1:
        y = "one";
        break;
    case 2:
        y = "two";
        break;
    default:
        y = "unknown";
}

y = x === 1 ? "one" : x === 2 ? "two" : "unknown";

y = {
    1: "one",
    2: "two"
}[x] || "unknown";


// If else abbreviation
if (x) {
    y = x;
} else {
    y = z;
}

y = x || z;

if (boolean === true) {
    console.log("true");
}

if (boolean) {
    console.log("true");
}

// For loop abbreviation
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) console.log(i);

// While loop abbreviation
let a = 0
while (a < 10) {
    console.log(a);
    a++;
}

// Function abbreviation
function add(x, y) {
    return x + y;
}

let added = (x, y) => x + y;

// Short-Circuiting with Logical Operators. Instead of using an if statement to assign a value based on a condition, you can use short-circuit evaluation:
// Full form
if (x) {
    y = x;
} else {
    y = z;
}

// Abbreviation
y = x || z;

// Another example
let a = null;
let b = "default value";
let result = a || b; // result will be "default value" because a is falsy

// Optional Chaining. To avoid checking for null or undefined before accessing properties:
// Full form
if (obj && obj.property) {
    console.log(obj.property);
}

// Abbreviation
console.log(obj?.property);

