'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
        // Initialize counters
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Count positive, negative, and zero values
    arr.forEach(element => {
        if (element > 0) positiveCount += 1;
        else if (element < 0) negativeCount += 1;
        else zeroCount += 1;
    });

    // Calculate ratios
    const totalElements = arr.length;
    const positiveRatio = positiveCount / totalElements;
    const negativeRatio = negativeCount / totalElements;
    const zeroRatio = zeroCount / totalElements;

    // Print ratios formatted to 6 decimal places
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
