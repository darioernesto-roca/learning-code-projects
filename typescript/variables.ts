// Typescript variables

// var
// var a = 10; // var is not recommended to use in typescript

// let
let b = 10;

// const
const c = 10;

function greet() {
    let greeting = 'Hello World';
    console.log(greeting);
}

greet();

// Typescript types

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;

// String
let color: string = 'blue';

// Array
let list: number[] = [1, 2, 3];

// Tuple
let x: [string, number];

// Enum
enum Color {Red, Green, Blue};

let d: Color = Color.Green;

// Any
let notSure: any = 4;

// Void
function warnUser(): void {
    console.log('This is my warning message');
}