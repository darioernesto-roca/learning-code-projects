/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.backgroundColor = "#dbdddd";
}, false);

gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.backgroundColor = "";
}, false);

/**
 * Function to generate random grey escale hex color
 */

const randomGrey = () => {
    let greyColor = Math.floor(Math.random() * 256).toString(16);
    return greyColor;
}

// Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners aplenty
gridCells.forEach((cell) => {
    // Set outline when cell is hovered
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = `#${randomGrey()}${randomGrey()}${randomGrey()}`;
    }, false);

    // Remove outline when cell is exited
    cell.addEventListener("mouseleave", () => {
        cell.style.backgroundColor = "";
    }, false);

    // Set/remove random background color on click
    cell.addEventListener("click", () => {
        if (cell.style.backgroundColor) {
            cell.style.backgroundColor = "";
        } else {
            cell.style.backgroundColor = `#${randomGrey()}${randomGrey()}${randomGrey()}`;
        }
    }, false);
});

// Set page background using the "d" key on the keyboard
const body = document.body;
body.addEventListener("keydown", (event) => {
    // event.code holds the current key pressed:
    if (event.code === "KeyD") {
        body.style.backgroundColor === ""
        ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
        : (body.style.backgroundColor = "");
    }
});
