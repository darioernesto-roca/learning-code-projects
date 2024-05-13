// Coding is like poetry, you can write it in many ways.
// This is a simple example of a coding poem.

const codingPoetry = () => {
    const coding = 'coding';
    const poetry = 'poetry';
    const is = 'is';
    const like = 'like';
    const you = 'you';
    const can = 'can';
    const write = 'write';
    const it = 'it';
    const $in = 'in';
    const many = 'many';
    const ways = 'ways';
    
    return `${coding} ${is} ${like} ${poetry}, ${you} ${can} ${write} ${it} ${$in} ${many} ${ways}.`;
    }


// Poem creator application

// Example of a simple random word selector function
function chooseRandom(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// Word databases for simplicity
const nouns = ["tree", "river", "sky", "mountain", "cloud", "moon", "sun", "star", "flower", "bird"];
const verbs = ["flows", "shines", "rises", "falls", "whispers", "sings", "dances", "dreams", "sleeps", "wakes"];
const adjectives = ["gentle", "quiet", "bright", "dark", "deep", "warm", "cold", "soft", "hard", "light"];

// Function to generate a simple line of poetry
function generateLine() {
    return `${chooseRandom(adjectives)} ${chooseRandom(nouns)} ${chooseRandom(verbs)}`;
}

// Generate a simple 3-line poem
function generatePoem() {
    const line1 = generateLine();
    const line2 = generateLine();
    const line3 = generateLine();
    
    return `${line1}\n${line2}\n${line3}`;
}

// Display the poem in the console
console.log(generatePoem());