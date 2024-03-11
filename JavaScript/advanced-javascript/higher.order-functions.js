// Hiher-Order Function

// Tasks as Functions:
//Decorating function: Adds decorations to the venue.
// Cooking function: Prepares food for the guests.
// Cleaning function: Cleans up the venue after the party.

function decorate () {
    console.log('Decorating the venue');
}

function cook () {
    console.log('Cooking food for the party');
}

function clean () { 
    console.log('Cleaning the venue');
}

function organizeParty (tasks, venue) {
    console.log('Organizing a party at ' + venue);
    tasks.forEach(function (task) {
        task();
    });
}

organizeParty([decorate, cook, clean], 'The Beach House');

// organizeParty is a higher-order function because it takes a function as an argument.