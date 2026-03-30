// Slicing & Combining


let arr = [1, 2, 3, 4, 5];

// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

console.log(arr.slice(1, 3));//(2,3)
console.log(arr.slice(-3));//last 3 elements
console.log(arr.slice(1));//[ 2, 3, 4, 5 ]
console.log(arr.slice(0));//[ 1, 2, 3, 4, 5 ]

let a = [1, 2];
let b = [3, 4];

console.log(a.concat(b, [5, 6]));

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

// ... , ===
// Join 
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);//pass | fail | skip