class Vehicle {
    constructor (emoji, speed) {
        this.emoji = emoji;
        this.speed = speed;
    }
    addToPage() {
        const path = document.createElement("div");
        path.textContent = this.emoji;
        path.classList.add("vehicle");
        path.style.animationDuration = `${10 / this.speed}s`;
        document.body.appendChild(path);
    }
}

const bicycle = new Vehicle("🚴‍♂️", 1);
bicycle.addToPage();
const motorcycle = new Vehicle("🏍️", 3);
motorcycle.addToPage();
const car = new Vehicle("🏎️", 4);
car.addToPage();
const truck = new Vehicle("🚚", 2);
truck.addToPage();