//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1() {  //Normal function
    console.log("Hi")
}

name1();

// IIFE
(function () {
    console.log("Hi")
})();


// 

(function () {
    console.log("Staging")
})();

(() => {
    console.log("Setup complete");
})();