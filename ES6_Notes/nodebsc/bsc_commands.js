// we have 99000+ packages in node js which we use for various tasks

//require is an import
// This helps us import different packages / modules that are within your system.
    // specifically within node_modules (can be found in program files)

console.log("This is going to log information we want")

const{log} = require("console") // console module to print/log data in terminal

log("We are using log form console package!!")

log(__dirname) // returns full path of directory in which file is present
log(__filename) // returns fullpath + filename of drectory in which file is present

const os = require("os") // os- is the operating system package
const path = require("path") // will be helpful to rectiy the correct path to file or directoty, relative path
const v8 = require("v8") // gives access to V8 engine of node
const util = require("util") 
const http = require("http") //helps us build the restful API's 
// const {http, get} = require("http")  can also specifically import one method



log(os.userInfo())
log(os.cpus())
const cpuCount = os.cpus().length
log("CPU Count ", cpuCount)
console.log(os.hostname())
console.log(os.release())

//path
console.log(`The file name is - ${path.basename(__filename)}`)
console.log(`The file name is absolute - ${path.isAbsolute(__dirname)}`)


//callback with data inserted
process.stdin.on('data', data => {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
    process.exit();
})

process.stdin.on('data', data => {
    log("we are exiting")
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
})



//utility
log(v8.getHeapSnapshot())
log(v8.getHeapStatistics())

//utility module

util.log(path.basename(__filename))
util.log(path.basename(__dirname))
log(util.debuglog())
process.nextTick(() => {log("Next Tick Called")})


//http 

// http.get()
// http.put()
// http.post()

const {EventEmitter} = require("events") // event emmiter.on is a custom event
EventEmitter.on("request", "get", (req, res) => {
    res.send("Information to be shared with user")
})
