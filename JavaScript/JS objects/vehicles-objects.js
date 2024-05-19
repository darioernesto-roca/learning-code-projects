class Vehicle {
    constructor (emoji, speed) {
        this.emoji = emoji;
        this.speed = speed;
    }
    addToPage() {
        const race = document.querySelector(".race");
        const path = document.createElement("div");
        path.textContent = this.emoji;
        path.classList.add("vehicle");
        path.style.animationDuration = `${10 / this.speed}s`;
        race.appendChild(path);
    }
}

const vehicles = [
    new Vehicle("🚴‍♂️", 1),
    new Vehicle("🏍️", 3),
    new Vehicle("🏎️", 4),
    new Vehicle("🚚", 2)
];

// Grandstands:
const grandstandContainer = document.querySelector(".grandstand-container");
const grandstand = document.createElement("div");
grandstand.classList.add("grandstand");
grandstandContainer.appendChild(grandstand);

// Button to start the race:
const button = document.getElementById('switch');
let raceStarted = false;

button.addEventListener('click', () => {
    if (!raceStarted) {
        vehicles.forEach(vehicle => vehicle.addToPage());
        button.textContent = 'Stop Race';
        startBackgroundFlash();
    } else {
        stopRace();
        button.textContent = 'Start Race';
    }
    raceStarted = !raceStarted;
});


function startBackgroundFlash() {
    document.body.style.animation = 'flash 0.5s alternate 5';
}

function stopRace() {
    document.querySelectorAll('.vehicle').forEach(vehicle => vehicle.remove());
    document.body.style.animation = '';
}