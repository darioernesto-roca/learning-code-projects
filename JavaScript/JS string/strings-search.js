// String Search Methods

// String indexOf()
const str = "Hello, world!";
const index = str.indexOf("o");
console.log(index); // Output: 4


// String lastIndexOf()

const str2   = "Hello, world!";
const index2 = str2.lastIndexOf("o");
console.log(index2); // Output: 8

// String search()
const str3 = "Hello, world!";
const index3 = str3.search("o");
console.log(index3); // Output: 4

// String match()
const str4 = "Hello, world!";
const matches = str4.match("o");
console.log(matches); // Output: [ 'o', index: 4, input: 'Hello, world!', groups: undefined ]

// String match() with global flag
const str5 = "Hello, world!";
const matches2 = str5.match(/o/g);
console.log(matches2); // Output: [ 'o', 'o' ]

// What's the difference between indexoOf and search?
// The difference between indexOf() and search() is that search() can take a regular expression as an argument.

// String includes()
const str6 = "Hello, world!";
const includes = str6.includes("o");
console.log(includes); // Output: true
console.log(str6.includes("x")); // Output: false
console.log(str6.includes("o", 5)); // Output: true
console.log(str6.includes("o", 6)); // Output: false