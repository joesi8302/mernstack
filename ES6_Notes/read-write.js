// To do the IO operations we have fs module/package presetn in node framework
// using the same we can do read write operations the following ways:
// Synchronously - blocking
// Asynchronously - non-blocking
// read stream
// write stream

let fs = require("fs")

console.log("File Read Starts")

// // Asynchronously - non-blocking -- file read operation
// fs.readFile(__dirname+"/shortHand.js","utf-8", (err, data) => {  // this command will give a call back so need to add the (err, data) function
//     console.log("Error: ", err)
//     console.log("Data ", data)
// })  //utf-8 changes the output to be humnan readable format

console.log("File Read Ends")


// synchronously - blocking -- file read operation
let data = fs.readFileSync(__dirname+ "/shortHand.js", "utf-8")

console.log(data)
console.log("File read ends")


//continues update in file, appending one after another
// this code will create a file if it does not exist then will append the data after 

// *NEED TO GRAB CODE FROM HIS GITHUB*
fs.readFile('Text.json','utf8',(err, fileData)=>{
    console.log("information" + fileData)
    let writerStream = fs.createWriteStream("Text.json","utf8");
    if (fileData) {           
        let oldData = JSON.parse(fileData)    
        console.log(oldData)
        writerStream.write(JSON.stringify([...oldData, userDetails]));
        writerStream.end();
    }else{
        writerStream.write(JSON.stringify([
            { name : "David",
            age : 22,
            city : "California ",
            session : "MernStack"
        }]));
        writerStream.end();
    }
})



// These read and write are done in the REPL format

// R - Read
// E - Evaluate
// P - Print
// L - Loop

// we need to stop it with ctrl+c (sometimes we need to to that twice)