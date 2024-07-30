// Object representing Don Quijote
const donQuijote = {
    name: "Don Quijote",
    occupation: "Knight Errant",
    residence: "La Mancha",
    companions: ["Sancho Panza"],
};

// Object representing Sancho Panza
const sanchoPanza = {
    name: "Sancho Panza",
    occupation: "Squire",
    residence: "La Mancha",
    master: "Don Quijote",
};

// Object representing Dulcinea del Toboso
const dulcinea = {
    name: "Dulcinea del Toboso",
    occupation: "Idealized Love Interest",
    residence: "Toboso",
    admirer: "Don Quijote",
};

// Object representing Rocinante (Don Quijote's horse)
const rocinante = {
    name: "Rocinante",
    type: "Horse",
    owner: "Don Quijote",
};

let house = {
    name: "My House",
    address: "Street 2a # 21 - 59",
    rooms: 5,
    bathrooms: 3,
    size: 301,
    doorOpen: true
};

console.log(house.name); // Outputs: "My House"
console.log(house["address"]); // Outputs: "Street 2a # 21 - 59"

// Methods for objects

// Object.keys() returns an array of the keys in an object
console.log(Object.keys(donQuijote)); // Outputs: ["name", "occupation", "residence", "companions"]

// Object.values() returns an array of the values in an object
console.log(Object.values(donQuijote)); // Outputs: ["Don Quijote", "Knight Errant", "La Mancha", ["Sancho Panza"]]

// Object.entries() returns an array of arrays of key-value pairs
console.log(Object.entries(donQuijote)); // Outputs: [["name", "Don Quijote"], ["occupation", "Knight Errant"], ["residence", "La Mancha"], ["companions", ["Sancho Panza"]]]

// Object.assign() copies the values of all enumerable own properties from one or more source objects to a target object
const mergedObject = Object.assign(donQuijote, sanchoPanza);
console.log(mergedObject); // Outputs: {name: "Sancho Panza", occupation: "Squire", residence: "La Mancha", companions: ["Sancho Panza"], master: "Don Quijote"}

// Object.create() creates a new object with the specified prototype object and properties. Example:
const newObject = Object.create(donQuijote);
const newDonQuijote = {name: "Don Quijote"};

// Object.freeze() freezes an object: other code can't delete or change any properties. Example:
Object.freeze(newDonQuijote);
newDonQuijote.name = "Don Quijote de la Mancha";
console.log(newDonQuijote.name); // Outputs: "Don Quijote";

// Object.seal() seals an object: other code can't delete or change any properties. Example:
Object.seal(newDonQuijote);
newDonQuijote.name = "Don Quijote de la Mancha";
console.log(newDonQuijote.name); // Outputs: "Don Quijote de la Mancha"; 

// Object.defineProperty() adds the named property described by a given descriptor to an object. Example:
Object.defineProperty(newDonQuijote, "name", {value: "Don Quijote de la Mancha", writable: false});

let user = {};
// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];


// Special operator in
let userB = { name: "John", age: 30 };

console.log( "age" in userB ); // true, user.age exists
console.log( "blabla" in userB ); // false, user.blabla doesn't exist

//Why does the in operator exist? Isn’t it enough to compare against undefined?. Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly. It’s when an object property exists, but stores undefined:

let obj = {
    test: undefined
};

console.log( obj.test ); // it's undefined, so - no such property?
console.log( "test" in obj ); // true, the property does exist!


// The "for…in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before. Notice all “for” constructs allow us to declare the looping variable inside the loop, like let key here. Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.

let userC = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in userC) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( userC[key] ); // John, 30, true
}
