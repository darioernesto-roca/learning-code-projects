//How to create a BigInt

//BigInts are created by appending n to the end of an integer literal or by calling the BigInt() constructor function.

//BigInt literals
const theBiggestInt = 9007199254740991n;

//BigInt function
const alsoHuge = BigInt(9007199254740991);

//BigInts can be used with all the same operators as regular numbers.
const bigInt = 1n;
const alsoBigInt = BigInt(1);

console.log(bigInt + alsoBigInt); // 2n

//Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

//const hugeString = BigInt("9007199254740991"); // SyntaxError

//BigInt can also be written in hexadecimal, octal, or binary notation

const bigHex = 0x1fffffffffffffn; // 2^53 - 1
const bigOct = 0o377777777777777777n; // 2^53 - 1
const bigBin = 0b1111111; // 2^53 - 1

//A BigInt can not have decimals.

//const bigFloat = 1.5n; // SyntaxError

// Precision Curiosity
// Rounding can compromise program security:MAX_SAFE_INTEGER 

//const rounded = 9007199254740992n; // 9007199254740992n
//const notRounded = 9007199254740993n; // 9007199254740992n

