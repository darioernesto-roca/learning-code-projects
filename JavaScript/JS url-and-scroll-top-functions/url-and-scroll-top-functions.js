// JS Function to get Current URL
function getCurrentURL() {
    return window.location.href;
}

// JS Function to scroll to the top of the page
function scrollTop() {
    window.scrollTo(0, 0);
}

const button = document.createElement('button');
button.textContent = 'Scroll to top';
button.onclick = scrollTop;