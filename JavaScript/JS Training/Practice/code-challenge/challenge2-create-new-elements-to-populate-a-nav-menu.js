// JavaScript code below
// Change these values to control whether you see 
// the expected answer and/or hints.

// const showExpectedResult = false
// const showHints = false

// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

const document = window.document;

function createNavMenu(document) {
      const header = document.querySelector('.siteheader')
      const nav = document.createElement('nav');
      const unorderedList= document.createElement('ul');

      unorderedList.innerHTML = navContent;
      unorderedList.appendChild 
      nav.classList.add('main-navigation');
      nav.append(unorderedList);
      header.append(nav);
}

createNavMenu(document);