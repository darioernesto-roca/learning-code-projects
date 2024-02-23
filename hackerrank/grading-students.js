/* 

HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100 .
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples

grade = 84 round to  (85 - 84 is less than 3)
grade = 29 do not round (result is less than 40)
grade = 57 do not round (60 - 57 is 3 or higher)
Given the initial grade value of  for each of Sam's n  students, write code to automate the rounding process.

*/

'use strict';

const fs = require('fs');

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
        // This function maps over the grades array and rounds each grade according to the rules
    return grades.map(grade => {
        // If the grade is less than 38, it's a failing grade and we do not round it
        if (grade < 38) {
            return grade;
        }

        // Find the next multiple of 5 for the grade
        const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
        
        // If the difference between the grade and the next multiple of 5 is less than 3, round up
        if (nextMultipleOfFive - grade < 3) {
            return nextMultipleOfFive;
        }

        // Otherwise, do not round the grade
        return grade;
    });

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


// Example usage:
const grades = [84, 29, 57];
const roundedGrades = gradingStudents(grades);
console.log(roundedGrades);