//Scopes
let x = 10;
{
    console.log(x); // ReferenceError: Cannot access 'x' before initialization because of the temporal dead zone
    let x = 20;
    console.log(x); // 20
}