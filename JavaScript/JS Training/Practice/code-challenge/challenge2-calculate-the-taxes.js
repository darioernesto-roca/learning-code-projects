
// Change these boolean values to control whether you see 
// the expected answer and/or hints
// const showExpectedResult = true;
// const showHints = false;

const taxGST = 5;
const taxPST = 8;

const calculateTotal = (prices) => {
    const totals = {};
    // Add together all values from the prices array
    totals.beforeTax = prices.reduce((a,b) => a + b, 0);

    // Your code starts here
    totals.GST = totals.beforeTax * taxGST / 100;
    totals.PST = totals.beforeTax * taxPST / 100;

    totals.sum = totals.beforeTax + totals.GST + totals.PST;

    // Your code ends here
    
    return totals;
}

const showTotals = (prices) => {
    const totals = calculateTotal(prices);
    return `
        Before tax: $${totals.beforeTax.toFixed(2)}
        GST: $${totals.GST.toFixed(2)}
        PST: $${totals.PST.toFixed(2)}
        -----------------
        Sum total: $${totals.sum.toFixed(2)}
    `
}

const prices = [10, 20, 30];

console.log(showTotals(prices));