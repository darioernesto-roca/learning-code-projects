/* for-await-of in JS */
// access all distinct properties of an object

const getFruits = [
    Promise.resolve('🍎'),
    Promise.resolve('🍌'),
    Promise.resolve('🍇'),
    Promise.resolve('🍉'),
    Promise.resolve('🍊'),
    Promise.resolve('🍍'),
    Promise.resolve('🍒'),
]

async function logFruits () {
    for await (const fruit of getFruits) {
        let message = `Take this ${fruit} for you Grandma`;
        console.log(message);
    }
}

logFruits();