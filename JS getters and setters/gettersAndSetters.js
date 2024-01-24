// In JavaScript, static methods, getters, and setters are features of classes that allow you to define methods and properties relevant to the class itself, rather than instances of the class. Here's a brief explanation of each, along with examples:


// Static Methods: Static methods are functions that belong to the class, not to any particular object instance. They are called on the class itself, not on instances of the class. For example, you might have a MathUtils class that contains a static method called sum. You would call this method like so: MathUtils.sum(5, 3). Static methods are often used to create utility functions for an application.

class MathUtils {
    static sum(a, b) {
        return a + b;
    }
}

console.log(MathUtils.sum(5, 3));

// Getters: Getters are methods that are used to retrieve the value of a private field. They are often used to provide access to private fields without exposing the field itself. For example, you might have a Person class with a private field called _age. You could create a getter called age that returns the value of _age. You would call this method like so: person.age.

class Person {
    constructor(firstName, lastName, age) {
        this._age = age,
        this.firstName = firstName,
        this.lastName = lastName
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let [firstName, lastName] = value.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person = new Person("John", "Doe", 30);
console.log(person.age); // 30
person.age = 31;
console.log(person.age); // 31

// Setters: Setters are methods that are used to set the value of a private field. They are often used to validate the value being set before setting the field. For example, you might have a Person class with a private field called _age. You could create a setter called age that validates the value being set and then sets the value of _age. You would call this method like so: person.age = 30.

