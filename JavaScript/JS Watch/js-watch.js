// This is a JS watch that will display the current time in the upper right corner of the screen, and update every second.

const watch = document.createElement('div');
watch.id = 'watch';
watch.style.position = 'fixed';
watch.style.top = '0';
watch.style.right = '0';
watch.style.backgroundColor = 'black';
watch.style.color = 'white';
watch.style.padding = '5px';
watch.style.zIndex = '9999';
watch.style.fontSize = '2em';

document.body.appendChild(watch);

setInterval(() => {
    watch.textContent = new Date().toLocaleTimeString();
}, 1000);

// This code creates a div element with the id 'watch' and styles it to be positioned in the upper right corner of the screen with a black background, white text, and a large font size. It then uses setInterval to update the text content of the watch element every second with the current time using new Date().toLocaleTimeString(). This creates a simple digital clock that displays the current time and updates in real-time.