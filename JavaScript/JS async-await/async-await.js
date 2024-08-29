// Using Promises
function fetchData() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Using Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
