const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum (salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

sum(salaries);
console.log(sum(salaries)); //390