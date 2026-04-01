// Type 4 Function 
function greet1(name1) {
    return `Hello, ${name1}!`;
}

let c = greet1("Amruta");
console.log(c);

// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet2("BOB"));