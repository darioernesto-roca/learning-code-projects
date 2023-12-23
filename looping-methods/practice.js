const lunarPhases = [
    'New Moon',
    'Waxing Crescent',
    'First Quarter',
    'Waxing Gibbous',
    'Full Moon',
    'Waning Gibbous',
    'Last Quarter',
    'Waning Crescent'
];

for (let i = 0; i < lunarPhases.length; i++) {
    const moonPhase = lunarPhases[i];
    const imageSrc = getImageSrc(moonPhase); // Replace this with your own function to get the image source based on the moon phase

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = moonPhase;

    document.body.appendChild(img);
}