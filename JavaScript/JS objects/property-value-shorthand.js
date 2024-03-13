function makeUser (name, age) {
  return {
    name,
    age
  }
}
let user = makeUser("Ernesto", 37);
let key = prompt("What do you want to know about the user?", "name");
alert(user[key]); // Ernesto (if enter "name")