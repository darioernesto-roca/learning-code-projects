// Write your answer here, then test your code.

// Change these boolean values to control whether you see 
// the expected answer and/or hints
// const showExpectedResult = false;
// const showHints = false;

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray];

    // 1. Remove the first item from the array
    // 2. Sort the remaining array items alphabetically
    // 3. Move the last item in the array to the first position.
    // 4. Find the "USB drive" item in the array and move it to the last position.
    // 5. Find the "laptop" item in the array and remove it.

    newDeskArr.pop(); // 1
    newDeskArr.sort(); // 2
    newDeskArr.unshift(newDeskArr.pop()); // 3
    newDeskArr.push(newDeskArr.splice(newDeskArr.indexOf("USB drive"), 1)[0]); // 4
    newDeskArr.splice(newDeskArr.indexOf("laptop"), 1); // 5

    console.log(newDeskArr); // ["elephant", "headphones", "light bulb", "notebook", "pen", "phone", "USB drive"]

    // Your code ends here

    return newDeskArr;
};

processArray(deskArray);