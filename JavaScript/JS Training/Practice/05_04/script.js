/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".maincontent");
  const mainH1 = main.querySelector("h1");
  console.log(`Main before change: ${mainH1.textContent}`);
  const h1 = document.createElement("h1");
  h1.textContent = "Hello, World!";
  main.appendChild(h1);
  const p = document.createElement("p");
  p.textContent = "This is a paragraph.";
  main.appendChild(p);
  const ul = document.createElement("ul");
  main.appendChild(ul);
  const li1 = document.createElement("li");
  li1.textContent = "Item 1";
  ul.appendChild(li1);
  const li2 = document.createElement("li");
  li2.textContent = "Item 2";
  ul.appendChild(li2);
  const li3 = document.createElement("li");
  li3.textContent = "Item 3";
  ul.appendChild(li3);
  const a = document.createElement("a");
  a.textContent = "Click me!";
  a.href = "#";
  main.appendChild(a);
});
