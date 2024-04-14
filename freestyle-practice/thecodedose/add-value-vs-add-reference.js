const a = [
    {name: 'John'},
    {name: 'Jane'}
]

const b = [...a];

b[0] = { name: 'Oliver' };
b[1].age = 30;

console.log(a); // [ { name: 'John' }, { name: 'Jane' } ]