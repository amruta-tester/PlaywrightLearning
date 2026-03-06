let count = 42;
let h = 0x78;
let boolean = true;
let zero = 0;
let colorhex = 0x00589;

let single = 'hello world';
let double = "It's me"; //In double quotes we can use single quotes
console.log(double);

//Template literal
let name = "John";
let fullname = `Hi ${name} sena`;
console.log(fullname);

let abc = null;
console.log(abc);

let xyz;
console.log(xyz);

// Template literal 
let first_name = "Pramod";
let full_name = `Hi,${first_name} dutta`;
console.log(full_name)


let math = `2+2=${2 + 2}`;
console.log(math)

// I want to store path of the file.
let path = "C:\\users\\pramod\\file.txt";
// Single slash is not allowed. We have to use double slash. 
console.log(path);

// ---> // - URLs
// ---> \\ - Path


let address = "https://app.vwo.com/#login";
console.log(address)

// String literal edge cases
let empty = "";                          // empty string (falsy!)
let space = " ";                         // single space (truthy!)
let zero1 = "0";                          // string zero (truthy!)


let isLoggedIn = true;
let hasPermission = false;