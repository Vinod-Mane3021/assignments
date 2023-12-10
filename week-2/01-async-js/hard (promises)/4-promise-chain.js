/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("task 1 done")
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("tas 2 done")
        }, 2000)   
    })
}

function waitThreeSecond() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("task 3 done")
        }, 3000)
    })
}

function calculateTime() {
    const start = new Date().getTime();
    waitOneSecond()
        .then(() => {
            waitTwoSecond()
                .then(() => {
                    waitThreeSecond()
                        .then(() => {
                            const end = new Date().getTime();
                            console.log("Time taken : ", end-start)
                        })
                })
        })
}

calculateTime()

