let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Food is delevered")
    } else {
        reject("Food is not delevered");
    }
})
console.log(order);

// A Promise is an OBJECT. It wraps a value that will be available later.