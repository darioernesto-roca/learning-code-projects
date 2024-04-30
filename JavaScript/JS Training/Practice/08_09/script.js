/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

// Helper function to create a figure with an image and a caption
function createImageFigure() {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = frogpack.image;
  img.alt = `Image of ${frogpack.name}`;
  
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = `${frogpack.name} image`;

  figure.appendChild(img);
  figure.appendChild(figcaption);

  return figure;
}

// Main function to create and populate an article element
function createArticle() {
  const article = document.createElement("article");
  article.innerHTML = content; // Use the predefined content variable

  const figure = createImageFigure(); // Call helper function to get the figure
  article.appendChild(figure); // Append the figure to the article

  return article;
}

// Append the created article to the main element in the document
document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main");
  const article = createArticle();
  mainElement.appendChild(article);
});
