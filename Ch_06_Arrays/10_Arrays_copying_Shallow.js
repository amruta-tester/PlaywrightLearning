let original = [1, 2, 3];

let copy1 = [...original];
let copy2 = original.slice();
let copy3 = Array.from(original);
let copy4 = original.concat();

console.log(copy1);
console.log(copy2);
console.log(copy3);
console.log(copy4);

copy1.push(99);
console.log(copy1);
console.log(original);

// Deep copy (JSON)
console.log("---------");
let c = original;
c.push(100);
console.log(original);
console.log(c);