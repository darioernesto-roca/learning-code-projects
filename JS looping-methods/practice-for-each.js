// for each: This code fetch the exchange rates for the US Dollar and Colombian Peso, and then uses a forEach() method to iterate over an array of dollar values and convert them to pesos.

fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        const exchangeRates = data.rates;
        const dollarToPesos = exchangeRates.COP;

        const dollarValues = [10, 20, 30, 40, 50];

        dollarValues.forEach(value => {
            const pesosValue = value * dollarToPesos;
            console.log(`${value} dollars is equal to ${pesosValue} Colombian pesos`);
            createListElements([`${value} dollars is equal to ${pesosValue} Colombian pesos`]);
        });
    })
    .catch(error => {
        console.error('Error fetching exchange rates:', error);
    });

const list = document.createElement('ul');

// function to create a list elements
function createListElements(listItems) {
    listItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });

    document.body.appendChild(list);
}