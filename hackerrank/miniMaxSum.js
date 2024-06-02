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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    console.log(sum - max, sum - min);
}

// function miniMaxSum(arr) {
//     // Sort the array
//     arr.sort((a, b) => a - b);

//     // Calculate the minimum sum (sum of the first four elements)
//     let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    
//     // Calculate the maximum sum (sum of the last four elements)
//     let maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);

//     // Print the results
//     console.log(minSum + ' ' + maxSum);
// }

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
