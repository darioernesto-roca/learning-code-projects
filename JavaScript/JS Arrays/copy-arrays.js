const landmarks = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    "Machu Picchu",
    "Pyramids of Giza",
    "Colosseum",
    "Statue of Liberty",
    "Christ the Redeemer",
    "Sydney Opera House",
    "Acropolis of Athens"
];

console.log(landmarks);

const interestingBooks = [
    "1984",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "The Lord of the Rings",
    "Harry Potter and the Sorcerer's Stone",
    "The Chronicles of Narnia",
    "The Hunger Games",
    "The Da Vinci Code"
];

console.log(interestingBooks);

const classicalBooks = [
    "The Iliad",
    "The Odyssey",
    "The Aeneid",
    "The Divine Comedy",
    "The Canterbury Tales",
    "War and Peace",
    "Pride and Prejudice",
    "Great Expectations",
    "Middlemarch",
    "Anna Karenina"
];

let generalBooks = [
    "The Great Gatsby",
    "The Catcher in the Rye",
    "1984",
    "To Kill a Mockingbird",
    "The Lord of the Rings",
    "Animal Farm",
    "Ulysses",
    "Charlotte's Web",
    "The Hobbit",
    "The Little Prince"
];

// Spread operator
generalBooks = [...generalBooks, ...classicalBooks];

console.log(generalBooks); // Outputs: ["The Great Gatsby", "The Catcher in the Rye", "1984", "To Kill a Mockingbird", "The Lord of the Rings", "Animal Farm", "Ulysses", "Charlotte's Web", "The Hobbit", "The Little Prince", "The Iliad", "The Odyssey", "The Aeneid", "The Divine Comedy", "The Canterbury Tales", "War and Peace", "Pride and Prejudice", "Great Expectations", "Middlemarch", "Anna Karenina"]

let library = [...generalBooks, ...interestingBooks, ...landmarks];

console.log(library); // Outputs: ["The Great Gatsby", "The Catcher in the Rye", "1984", "To Kill a Mockingbird", "The Lord of the Rings", "Animal Farm", "Ulysses", "Charlotte's Web", "The Hobbit", "The Little Prince", "The Iliad", "The Odyssey", "The Aeneid", "The Divine Comedy", "The Canterbury Tales", "War and Peace", "Pride and Prejudice", "Great Expectations", "Middlemarch", "Anna Karenina", "1984", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "The Hunger Games", "The Da Vinci Code", "Eiffel Tower", "Great Wall of China", "Taj Mahal", "Machu Picchu", "Pyramids of Giza", "Colosseum", "Statue of Liberty", "Christ the Redeemer", "Sydney Opera House", "Acropolis of Athens"]

// Concat method
library = generalBooks.concat(interestingBooks, landmarks);

console.log(library); // Outputs: ["The Great Gatsby", "The Catcher in the Rye", "1984", "To Kill a Mockingbird", "The Lord of the Rings", "Animal Farm", "Ulysses", "Charlotte's Web", "The Hobbit", "The Little Prince", "The Iliad", "The Odyssey", "The Aeneid", "The Divine Comedy", "The Canterbury Tales", "War and Peace", "Pride and Prejudice", "Great Expectations", "Middlemarch", "Anna Karenina", "1984", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "The Hunger Games", "The Da Vinci Code", "Eiffel Tower", "Great Wall of China", "Taj Mahal", "Machu Picchu", "Pyramids of Giza", "Colosseum", "Statue of Liberty", "Christ the Redeemer", "Sydney Opera House", "Acropolis of Athens"]

// Concat method with multiple arrays
library = generalBooks.concat(classicalBooks, interestingBooks, landmarks);

console.log(library); // Outputs: ["The Great Gatsby", "The Catcher in the Rye", "1984", "To Kill a Mockingbird", "The Lord of the Rings", "Animal Farm", "Ulysses", "Charlotte's Web", "The Hobbit", "The Little Prince", "The Iliad", "The Odyssey", "The Aeneid", "The Divine Comedy", "The Canterbury Tales", "War and Peace", "Pride and Prejudice", "Great Expectations", "Middlemarch", "Anna Karenina", "1984", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "The Hunger Games", "The Da Vinci Code", "Eiffel Tower", "Great Wall of China", "Taj Mahal", "Machu Picchu", "Pyramids of Giza", "Colosseum", "Statue of Liberty", "Christ the Redeemer", "Sydney Opera House", "Acropolis of Athens"]

// Concat method with multiple arrays and a new element
library = generalBooks.concat(classicalBooks, interestingBooks, landmarks, "The Old Book");

console.log(library); // Outputs: ["The Great Gatsby", "The Catcher in the Rye", "1984", "To Kill a Mockingbird", "The Lord of the Rings", "Animal Farm", "Ulysses", "Charlotte's Web", "The Hobbit", "The Little Prince", "The Iliad", "The Odyssey", "The Aeneid", "The Divine Comedy", "The Canterbury Tales", "War and Peace", "Pride and Prejudice", "Great Expectations", "Middlemarch", "Anna Karenina", "1984", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "The Hunger Games", "The Da Vinci Code", "Eiffel Tower", "Great Wall of China", "Taj Mahal", "Machu Picchu", "Pyramids of Giza", "Colosseum", "Statue of Liberty", "Christ the Redeemer", "Sydney Opera House", "Acropolis of Athens", "The Old Book"]

// Concat method with multiple arrays and multiple new elements
library = generalBooks.concat(classicalBooks, interestingBooks, landmarks, "The Old Book", "The New Book");

console.log(library); // Outputs: ["The Great Gatsby", "The Catcher in the Rye", "1984", "To Kill a Mockingbird", "The Lord of the Rings", "Animal Farm", "Ulysses", "Charlotte's Web", "The Hobbit", "The Little Prince", "The Iliad", "The Odyssey", "The Aeneid", "The Divine Comedy", "The Canterbury Tales", "War and Peace", "Pride and Prejudice", "Great Expectations", "Middlemarch", "Anna Karenina", "1984", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "The Hunger Games", "The Da Vinci Code", "Eiffel Tower", "Great Wall of China", "Taj Mahal", "Machu Picchu", "Pyramids of Giza", "Colosseum", "Statue of Liberty", "Christ the Redeemer", "Sydney Opera House", "Acropolis of Athens", "The Old Book", "The New Book"]
