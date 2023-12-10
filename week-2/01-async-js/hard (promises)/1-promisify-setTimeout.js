/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("promise resolved");
      // rejected("promise rejected")
    }, n);
  });
  return promise;
}

wait(1000)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
