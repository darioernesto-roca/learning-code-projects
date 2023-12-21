// Get (Read): Retrieves data from a specified resource

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Post (Create): Submits data to be processed to a specified resource

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "John Doe",
        username: "johndoe",
        email: "jdoe@gmail.com"
    }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// Put (Update/Replace): Updates a specified resource completely

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "John Doe",
        username: "johndoe",
        email: "doe.john@outlook.com"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// Patch (Update/Modify): Updates a specified resource partially

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: "doe.john@outlook.com"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// Delete (Delete): Deletes a specified resource

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: ""
    })
});

