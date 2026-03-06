//let a = 10;
//console.log(a++ + ++a);
//console.log(a);

//A+B
//A--> a++--> expA-->10, a=11
//+
//B--> ++a--> expB-->12, a=12
//A+B--> 10+12=22 

let a = 5;
b = a++ + ++a;
c = a++ + ++a + ++a + ++a + a++;

console.log(a);
console.log(b);
console.log(c);