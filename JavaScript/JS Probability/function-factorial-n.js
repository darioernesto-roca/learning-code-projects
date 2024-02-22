// Probability to win the loto
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function combinations(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

let totalCombinationsArray1 = combinations(43, 5);
let totalCombinationsArray2 = combinations(16, 1);

let totalCombinations = totalCombinationsArray1 * totalCombinationsArray2;

let probability = 1 / totalCombinations;

console.log(`The probability of the event is ${probability}`);
let trials = 1 / probability;
console.log(`The event is expected to occur once in every ${Math.round(trials)} trials.`);