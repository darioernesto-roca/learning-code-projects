// Making a function that draws a square in the console

const square = function (size) {
    for (let i = 0; i < size; i++) {
        console.log("*".repeat(size));
    }
}

square(5);
