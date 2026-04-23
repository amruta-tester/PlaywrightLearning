function add(a, b, c) {
    return a + b + c;
}

let num = [2, 3, 5]
console.log(add(...num));

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];

hasError(...responseCodes);
