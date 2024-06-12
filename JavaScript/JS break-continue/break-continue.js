// Break and continue: They are used to control the flow of loops. Break is used to exit the loop and continue is used to skip the current iteration and move to the next iteration.

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }

    console.log(`Your score: ${scores[i]}`);

    if (scores[i] === 100) {
        console.log('Congratulations, you got the top score!');
        break;
    }
}