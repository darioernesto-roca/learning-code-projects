let localStorage = require('./localStorage');

 console.log("localStorage Length: ", localStorage.length);

 let userId = localStorage.getItem('user_id');
console.log("user_id: ", userId);

if (!userId) {
    console.log('User ID not found. Setting the user ID and token...');
    localStorage.setItem("user_id", "1234567");
    localStorage.setItem("token", "qwTQJAHSDASNC83EN2292NWFDBKSFD232Q");
} else {
    console.log('User ID found:', userId);
    console.log('Clearing the User ID...');
    localStorage.clear();
}