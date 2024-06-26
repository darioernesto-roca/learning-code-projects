// This is a try-catch example

// The try catch block is used to handle errors in JavaScript. The try block contains the code that might throw an exception, and the catch block contains the code that handles the exception.

async function fetchData() {
    const url = 'https://api.github.com/users/defunkt';

    try  {
        const response = await fetch(url);

        if (!Response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('User data: ', data);
        } catch (error) {
            console.log('Error fetching the GitHub user data: ', error);
        }
}

fetchData();

