/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
function findElement(selector) {
  return document.querySelector(selector);
}

const mainElement = findElement("main");

const createArticle = (data) => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
  `;
  return article;
};

mainElement.appendChild(createArticle({ title: "Title 1", description: "Description 1" }));