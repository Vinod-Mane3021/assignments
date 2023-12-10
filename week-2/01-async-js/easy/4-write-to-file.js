// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, "file.txt")

// read the file
fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) {
        console.log(err)
    }
    data += " vinod"
    console.log(data)

    // write the modified data back to file.txt
    fs.writeFile(filePath, data, "utf-8", (err) => {
        if(err) {
            console.log(err)
        }
        console.log(data)
    })
})


