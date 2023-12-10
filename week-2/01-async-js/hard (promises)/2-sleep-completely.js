/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function busyWait(milliseconds) {
    const start = new Date().getTime();
    while(new Date().getTime() - start < milliseconds) {
        // do nothing 
    }
}

console.log('start')
busyWait(3000)
console.log('end')

