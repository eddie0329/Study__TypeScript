var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("HELLO");
    }, 1000);
});
timeoutPromise.then(console.log);
