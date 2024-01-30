// toString()

let x = 123;
console.log(x.toString()); // "123"
console.log((123).toString()); // "123"
console.log((100 + 23).toString()); // "123"

// toExponential() returns a string, with a number rounded and written using exponential notation.
let y = 9.656;
console.log(y.toExponential()); // returns 9.656e+0
console.log(y.toExponential(2)); // returns 9.66e+0
console.log(y.toExponential(4)); // returns 9.6560e+0

// toFixed() returns a string, with the number written with a specified number of decimals:

let z = 9.656;
console.log(z.toFixed()); // returns 10
console.log(z.toFixed(2)); // returns 9.66
console.log(z.toFixed(4)); // returns 9.6560
console.log(z.toFixed(6)); // returns 9.656000

// toPrecision() returns a string, with a number written with a specified length:

let a = 9.656;
console.log(a.toPrecision()); // returns 9.656
console.log(a.toPrecision(2)); // returns 9.7
console.log(a.toPrecision(4)); // returns 9.656
console.log(a.toPrecision(6)); // returns 9.65600

// valueOf() returns a number as a number.

let b = 123;
console.log(b.valueOf()); // returns 123 from variable b
console.log((123).valueOf()); // returns 123 from literal 123
console.log((100 + 23).valueOf()); // returns 123 from expression 100 + 23

// Number() can be used to convert JavaScript variables to numbers:
Number(true); // returns 1
Number(false); // returns 0
Number("10"); // returns 10
Number("  10"); // returns 10
Number("10  "); // returns 10
Number(" 10  "); // returns 10
Number("10.33"); // returns 10.33
Number("10,33"); // returns NaN
Number("10 33"); // returns NaN
Number("John"); // returns NaN
Number(new Date("2017-09-30")); // returns 1506729600000
Number(new Date("1970-01-01")); // returns 0
Number(new Date("1970-01-02")); // returns 86400000

// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("10"); // returns 10
parseInt("10.33"); // returns 10
parseInt("10 20 30"); // returns 10
parseInt("10 years"); // returns 10
parseInt("years 10"); // returns NaN

// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
parseFloat("10"); // returns 10
parseFloat("10.33"); // returns 10.33
parseFloat("10 20 30"); // returns 10
parseFloat("10 years"); // returns 10
parseFloat("years 10"); // returns NaN

// Number.isInteger() returns true if the argument is an integer:
Number.isInteger(10); // returns true
Number.isInteger(10.5); // returns false
Number.isInteger("10"); // returns false

// Number.isSafeInteger() returns true if the argument is a safe integer (number between -(253 - 1) and 253 - 1):
Number.isSafeInteger(10); // returns true
Number.isSafeInteger(12345678901234567890); // returns false
Number.isSafeInteger("12345678901234567890"); // returns false

// Number.isNaN() returns true if the argument is a number, and false if not:
Number.isNaN(123); // returns false
Number.isNaN(-1.23); // returns false
Number.isNaN(NaN); // returns true

// Number.isFinite() returns false if the argument is Infinity or NaN:
Number.isFinite(10 / 0); // returns false
Number.isFinite(10 / 1); // returns true
Number.isFinite(10 / "H"); // returns false
Number.isFinite(10 / "10"); // returns true

// Number.EPSILON is the smallest interval between two representable numbers:
Number.EPSILON; // returns 2.220446049250313e-16


