// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);

console.log(statuses.at(-2));//fail
console.log(statuses);//["pass", "fail", "skip"]

//modifiy
statuses[1] = "Blocked";
console.log(statuses);//["pass", "Blocked", "skip"]         
