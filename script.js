function delayedHello() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

delayedHello().then(message => {
    document.getElementById("output").textContent = message;
});
