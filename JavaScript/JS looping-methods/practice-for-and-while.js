const lunarPhases = [
    'New Moon',
    'Waxing Crescent',
    'First Quarter',
    'Waxing Gibbous',
    'Full Moon',
    'Waning Gibbous',
    'Last Quarter',
    'Waning Crescent'
];

// Function to get the image source based on the moon phase
function getImageSrc(moonPhase) {
    return `./img/${moonPhase.toLowerCase().replace(' ', '-')}.png`;
}

//Function to create loop heading
function createHeading(text) {
    const heading = document.createElement('h2');
    heading.textContent = text;
    document.body.appendChild(heading);

}

let forHeading = createHeading('for Loop');

// for Loop: The traditional for loop is one of the most widely used. It repeats a block of code a certain number of times based on a counter variable.
for (let i = 0; i < lunarPhases.length; i++) {
    const moonPhase = lunarPhases[i];
    const imageSrc = getImageSrc(moonPhase); // function to get the image source based on the moon phase

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = moonPhase;

    document.body.appendChild(img);
}

let whileHeading = createHeading('while Loop');

// while Loop: The while loop continues executing its code block as long as the specified condition is true.
let j = 0;
while (j < lunarPhases.length) {
    const moonPhase = lunarPhases[j];
    const imageSrc = getImageSrc(moonPhase); // function to get the image source based on the moon phase

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = moonPhase;

    document.body.appendChild(img);

    j++;
}

let doWhileHeading = createHeading('do...while Loop');

// do...while Loop: Similar to the while loop, but it runs at least once because the condition is checked after the code block is executed.
let k = 0;
do {
    const moonPhase = lunarPhases[k];
    const imageSrc = getImageSrc(moonPhase); // function to get the image source based on the moon phase

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = moonPhase;
    
    document.body.appendChild(img);

    k++;
} while (k < lunarPhases.length);