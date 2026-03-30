//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

//indexOf — returns first index, or -1 if not found
results.indexOf("pass");
console.log(results.indexOf("fail"));
console.log(results.indexOf("error"));

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("pass"));

// includes — returns boolean
console.log(results.includes("pass"));
console.log(results.includes("-ve"));

// find — returns first matching element

let nums = [10, 25, 30, 45];