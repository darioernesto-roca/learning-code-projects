let successfulOutcomes = 0;
let totalTrials = 1000000;

for (let i = 0; i < totalTrials; i++) {
    let roll = Math.floor(Math.random() * 6) + 1; // This simulates a roll of a six-sided die
    if (roll === 6) {
        successfulOutcomes++;
    }
}

let probability = successfulOutcomes / totalTrials;

console.log(`The estimated probability of rolling a 6 is ${probability}`);