//Sorting
//  alphabetical by default
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);//[ 'apple', 'banana', 'cherry' ]

let nums = [10, 1, 21, 2];
nums.sort((a, b) => a - b);
console.log(nums);//// Ascending

nums.sort((a, b) => b - a);
console.log(nums);
