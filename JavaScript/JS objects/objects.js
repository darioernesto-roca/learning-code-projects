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