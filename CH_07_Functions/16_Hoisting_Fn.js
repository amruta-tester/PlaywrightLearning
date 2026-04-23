// Hoisting
// Function declarations are hoisted — 
// you can call them before they're defined. 
// Function expressions and arrow functions are NOT.
//constant and let is not allowed to call before defination

greet("Amy"); // ✅ Declaration — hoisted, works before definition

function greet(name) {
    console.log(`hello ${name}`);
}


sayHi("Bob"); // ❌ TypeError: sayHi is not a function

const sayHi = function (name) {
    return `Hi, ${name}!`;
};