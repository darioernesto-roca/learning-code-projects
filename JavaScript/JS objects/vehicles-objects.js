class Vehicle {
    constructor (emoji, speed) {
        this.emoji = emoji;
        this.speed = speed;
    }
    addToPage() {
        const path = document.createElement("marquee");
        path.textContent = this.emoji;
        path.style.fontSize = "3rem";
        path.style.display = "block";
        path.style.margin = "20px";
        path.scrollAmount = this.speed;
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