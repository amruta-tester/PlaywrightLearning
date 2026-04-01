// Checking Arrays

// Check if something IS an array
let result2 = Array.isArray([a, "hello", 123, "ok"]);
let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);//true
console.log(result1);//false
console.log(result2);

// every & some
[80, 90, 85].every(s => s >= 70);   // true
[80, 60, 85].every(s => s >= 70);   // false

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); //  true
[80, 90, 85].some(s => s < 70); // false