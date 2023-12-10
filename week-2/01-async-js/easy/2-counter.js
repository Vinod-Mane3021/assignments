// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)


let count = 0;

const counterFun = () => {
    console.log("counter: ", count);
    count++;
    setTimeout(counterFun, 1000);
}

counterFun()
