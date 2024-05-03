// Set up the Backpack class
class Backpack {
    constructor(
        id,
        name,
        volume,
        color,
        pocketNum,
        dateAcquired
    ) {
        this.id = id;
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.dateAcquired = dateAcquired;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; // elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }

}

// Create new Backpack object
const everydayPack = new Backpack(
    "pack01",
    "Everyday Backpack",
    30,
    "grey",
    15,
    "December 5, 2018 15:00:00 PST"
);

// Create new Backpack object
const frogPack = new Backpack(
    "pack02",
    "Frog Backpack",
    8,
    "green",
    3,
    "October 16, 2019 15:00:00 PST"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

function createBackpackMarkup(document) {
    const content = backpackObjectArray.map((backpack) => {

        let backpackArticle = document.createElement("article");
        backpackArticle.setAttribute("id", backpack.id);

        backpackArticle.innerHTML = `
        <h1>${backpack.name}</h1>
        <ul>
            <li>Volume:<span> ${backpack.volume}l</span></li>
            <li>Color:<span> ${backpack.color}</span></li>
            <li>Age:<span> ${backpack.backpackAge()} days old</span></li>
            <li>Number of pockets:<span> ${backpack.pocketNum}</span></li>
        </ul>
        `;

        return backpackArticle;
    })

    return content;
}

createBackpackMarkup();