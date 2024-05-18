/* This is an extensive series of examples of use of the console object */

// 1. console.log()
console.log('Hello, World!'); // Hello, World!

// 2. console.error()
console.error('This is an error message'); // This is an error message

// 3. console.warn()
console.warn('This is a warning message'); // This is a warning message

// 4. console.info()
console.info('This is an info message'); // This is an info message

// 5. console.table()
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]; // Array of objects
console.table(dogs);
// ┌─────────┬────────────┬─────┐
// │ (index) │    name    │ age │
// ├─────────┼────────────┼─────┤
// │    0    │ 'Snickers' │  2  │
// │    1    │  'hugo'    │  8  │
// └─────────┴────────────┴─────┘

// 6. console.group() and console.groupEnd()
console.group('Dogs');
console.log('This is a group of dogs');
console.group('Cats');
console.log('This is a group of cats');
console.groupEnd();

// 7. console.count()
console.count('times'); // times: 1
console.count('times'); // times: 2
console.count('times'); // times: 3
console.count('times'); // times: 4

// 8. console.time() and console.timeEnd()
console.time('fetching data');
fetch('https://api.github.com/users')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// 9. console.assert()
console.assert(1 === 2, 'That is wrong!'); // Assertion failed: That is wrong!

// 10. console.clear()
console.clear(); // Clears the console

// 11. console.dir()
const p = document.querySelector('p');
console.dir(p); // Shows the properties of the p element

// 12. console.groupCollapsed()
console.groupCollapsed('Dogs'); // The group is collapsed

// 13. console.trace()
const first = () => {
    second();
};

const second = () => {
    third();
};

console.trace(first); // Shows the stack trace

// 14. console.timeLog()
console.time('fetching data');
fetch('https://api.github.com/users')
    .then(data => data.json())
    .then(data => {
        console.timeLog('fetching data');
        console.log(data);
    });

console.timeLog('fetching data'); // 0.000ms

// 15. console.timeStamp()
console.timeStamp('fetching data'); // Adds a timestamp to the timeline

// 16. console.profile()
console.profile('profile'); // Starts profiling, stops when console.profileEnd() is called. The profile is saved in the Performance panel and can be viewed there.

// 17. console.profileEnd()
console.profileEnd('profile'); // Stops profiling

// 18. console.memory
console.memory; // Shows the memory usage

// 19. console.memory.jsHeapSizeLimit
console.memory.jsHeapSizeLimit; // Shows the memory limit

// 20. console.memory.totalJSHeapSize
console.memory.totalJSHeapSize; // Shows the total memory size

// 21. console.memory.usedJSHeapSize
console.memory.usedJSHeapSize; // Shows the used memory size