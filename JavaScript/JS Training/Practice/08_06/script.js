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

// Arrow function

const createSidebar = (data) => {
  const sidebar = document.createElement("aside");
  sidebar.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <p>${data.date}</p>`;

    return sidebar;
}

mainElement.appendChild(createSidebar({
  title: "Sidebar 1",
  description: "Sidebar description 1",
  date: "2021-08-06"
}))

// Page layout

function modifyLayout(...elements) {
  const mainElement = findElement("main");
  mainElement.classList.add("layout");
  elements.forEach((element) => {
    const elementNode = findElement(element);
    if (elementNode) {
      elementNode.classList.add("highlight");
    }
  });
}

modifyLayout("main", "article", "aside");