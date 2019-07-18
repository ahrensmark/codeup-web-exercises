"use strict";

// const itWorked = () => console.log("It worked!");
// const itFailed = () => console.log("It failed!");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.1) {
            resolve();
        } else {
            reject();
        }
    }, 1000);
});

console.log(myPromise); // a pending promise

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));
