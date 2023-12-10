/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 * 
 * 
 */


function waitOneSecond() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 1 is resolved');
        }, 1000)
    })
    return promise;
}

function waitTwoSecond() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 2 is resolved');
        }, 2000)
    })
    return promise;
}

function waitThreeSecond() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 3 is resolved');
            // reject('Task 3 rejected');
        }, 3000)
    })
    return promise;
}

function calculateTime() {
    const start = new Date().getTime();
    const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()]
    Promise.all(promises)
        .then(() => {
            const end = new Date().getTime();
            const timeDiff = end - start;
            console.log("time taken : ", timeDiff + " milliseconds")
        })
        .catch((err) => {
            console.log(err)
        })
}

calculateTime()

