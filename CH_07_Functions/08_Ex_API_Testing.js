// if (ourStatusCode >= 200 && ourStatusCode < 300)
//if (status >= 200 && status <= 300)
//if(status >= 200 && status <= 300)

function validateStatusCode(Status) {
    if (Status >= 200 && Status < 300) {// Basic
        console.log("Request is fine")
    }
}

function validateStatusCode_Exp(status) {  //Expression
    if (status >= 200 && status <= 300) {
        console.log("Request is fine")
    }
}

const validateStatusCode_Arrow = (status) => {  //Arrow
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}


validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);