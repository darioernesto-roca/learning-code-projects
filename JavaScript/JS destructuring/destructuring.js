// Without object destructuring
const employee = { name: 'Gary', age: 28 };
const name = employee.name;
const age = employee.age;

// With object destructuring
const { name2, age2 } = employee;
console.log(name2); // Output: Gary
console.log(age2);  // Output: 28