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


