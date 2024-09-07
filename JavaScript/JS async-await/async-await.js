// Using Promises
function fetchDataUsingPromises() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchDataUsingPromises()

// Using Async/Await
async function fetchDataUsingAsyncAwait() {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataUsingAsyncAwait();

// Using Async/Await with Promise.all()
async function fetchDataUsingPromiseAll() {
    try {
        const fetchApod = fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const fetchMarsPhotos = fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');

        const [apodResponse, marsPhotosResponse] = await Promise.all([fetchApod, fetchMarsPhotos]);

        const apodData = await apodResponse.json();
        const marsPhotosData = await marsPhotosResponse.json();

        console.log('APOD Data fetched:', apodData);
        console.log('Mars Photos Data fetched:', marsPhotosData);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();