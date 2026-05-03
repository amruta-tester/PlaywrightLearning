let apiCall = new Promise(function (resolved, reject) {
    resolved({ status: 500, body: "user data" });
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
});
