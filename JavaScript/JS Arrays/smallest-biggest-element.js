let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest); // 2

// Now with Math.min
let smallest2 = Math.min(...arr);
console.log(smallest2); // 2

// Now with reduce
let smallest3 = arr.reduce((acc, curr) => Math.min(acc, curr), arr[0]);
console.log(smallest3); // 2

// Now with sort
let smallest4 = arr.sort((a, b) => a - b)[0];
console.log(smallest4); // 2

// Now the biggest element
let biggest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
        biggest = arr[i];
    }
}

console.log(biggest); // 10

// Now with Math.max
let biggest2 = Math.max(...arr);

console.log(biggest2); // 10

// Now with reduce
let biggest3 = arr.reduce((acc, curr) => Math.max(acc, curr), arr[0]);
console.log(biggest3); // 10

// Now with sort
let biggest4 = arr.sort((a, b) => b - a)[0];
console.log(biggest4); // 10