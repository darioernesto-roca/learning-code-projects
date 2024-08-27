// Without object destructuring
const employee = { name: 'Gary', age: 28 };
const name = employee.name;
const age = employee.age;

// With object destructuring
const { name2, age2 } = employee;
console.log(name2); // Output: Gary
console.log(age2);  // Output: 28

// Noobs:
const user3 = { name: 'John', age: 30 };
const name3 = name3.name;
const age3 = age3.age;

// Pro:
const { name4, age4 } = { name: 'John', age: 30 };