//var,let,const

//var function scoped
function printHello() {

    var a = 10;//local scope
    console.log(a);
    if (true) {
        console.log("Hii, there everyone");
        var a = 30;
        console.log(a);

    }
    console.log(a);
}

printHello();

//let block scoped
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let b = 30; // Local Scope
    console.log(b);
    if (true) {
        let b = 5;
        console.log(b); // 5
    }
    console.log("let ->", b);
}

// Calling of the function
printHello();

// let does NOT allow re-declaration in the same scope
// let b = 40; // Error: Identifier 'b' has already been declared
// let a = 10;
// let a = 10;
let a = 10;
a = 20;
console.log(a); // 20



// var nn = "Pramod";
// let nn = "Pramod";   // Error: Identifier 'nn' has already been declared


const pi = 3.14; // Constant variable
console.log(pi);
pi = 3.14159; // Error: Assignment to constant variable