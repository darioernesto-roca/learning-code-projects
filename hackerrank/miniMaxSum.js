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

/*
function miniMaxSum(arr) {
    // First we create the variables to store the minimum and maximum value of the array, also the sum of the array
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    // We iterate over the array to find the minimum and maximum values and calculate the sum of the array
    for (let i = 0; i < arr.length; i++) {
        // if the current element is less than the current minimum, we update the minimum
        if (arr[i] < min) {
            min = arr[i];
        }

        // if the current element is greater than the current maximum, we update the maximum
        if (arr[i] > max) {
            max = arr[i];
        }

        // we add the current element to the sum
        sum += arr[i];
    }

    // We print the result of sum - the maximum value and sum - the minimum value, this way we get the minimum and maximum sum
    console.log(sum - max, sum - min);
}

*/

// The previous solution is correct, but we can improve it by sorting the array first, this way we can get the minimum and maximum values in the first and last elements of the array
function miniMaxSum(arr) {
    // Sort the array
    arr.sort((a, b) => a - b); // To sort the array in ascending order we use a - b, if we want to sort it in descending order we use b - a

    // Calculate the minimum sum (sum of the first four elements)
    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0); // We use the slice method to get the first four elements of the array, the 0 is the starting index and the 4 is the ending index. The reduce method is used to sum the elements of the array, the 0 is the initial value of the accumulator
    
    // Calculate the maximum sum (sum of the last four elements)
    let maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0); // We use the slice method to get the last four elements of the array, the 1 is the starting index and the 5 is the ending index. The reduce method is used to sum the elements of the array, the 0 is the initial value of the accumulator

    // Print the results
    console.log(minSum + ' ' + maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
