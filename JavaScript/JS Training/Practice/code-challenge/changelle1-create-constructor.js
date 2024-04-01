// JavaScript code​​​​​​‌​‌​‌‌‌​‌‌‌​‌​​‌​​‌‌​​​‌​ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;

const bookTitle = "Alice's Adventures in Wonderland"
const bookAuthor = "Lewis Carroll"
const bookPubYear = 1865
const bookISBN = 9798369203415

// Your code goes here

class Book {
    constructor (
        title,
        author,
        ISBN,
        publicationYear,
    ) {
        this.title = title,
        this.author = author,
        this.ISBN = ISBN,
        this.publicationYear = publicationYear
    }
}


// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const result = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);

console.log(result);