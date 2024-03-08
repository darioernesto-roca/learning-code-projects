// Scope

let a = 10;
function outer () {
    let b = 20;
    function inner () {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();

// Closure: A closure is the combination of a function bundled together with references to its surrounding state. Closures are created every time a function is created, at function creation time.

function outerFunction() {
    let counter = 0;
    function innerFunction() {
        counter++;
        console.log(counter);
    }
    return innerFunction;
}
const fn = outerFunction();
fn(); // Output: 1
fn(); // Output: 2
fn(); // Output: 3

// Closure simpler definition: In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in JavaScript.