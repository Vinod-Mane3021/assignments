// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


// read file a-synchronously
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, "utf-8", (err, data) => {
  for(let i=0; i<100000000000; i++) {
    
  }
    if (err) {
        console.error("Error: " + err);
        return;
      }
      console.log(data);
})


// read file synchronously
// const content = fs.readFileSync(filePath, "utf-8");
// console.log(content)








