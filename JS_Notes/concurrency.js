// concurrency - When we are able to execute different calls parallely or without blocking one 
// with achieve concurrency with callbacks
// Callbacks / API's - registed call backs of JS - XHR, Promises, SetTimeout, Setinterval, Async IO operations - (API's)
// event loop - mechanism to move callback output from even queue to callStack once stack is empty
// event queue - queue's the output of callback API's and pushes in FIFO

// EXAMPLE
console.log("Concurrent Execution Starts!!") //1

setTimeout(function (){
    console.log("First Delayed Execution - No 1") //3

    setTimeout(function (){
        console.log("First Delayed Execution - No 1.1") //4
    },0)
}, 1000)

setTimeout(function (){
    console.log("First Delayed Execution - No 2") //5
}, 2000)

setTimeout(function (){
    console.log("First Delayed Execution - No 3") //6
}, 3000)



console.log("Concurrent Execution ENDS!!") //2


///////////////////////////////////////////////////////////////////////////
console.log("Concurrent Execution Starts!!") 

setTimeout(function (){
    console.log("First Delayed Execution - No 1") 

    setTimeout(function (){
        console.log("First Delayed Execution - No 1.1") 
    },0)
}, 1000)

setTimeout(function (){
    console.log("First Delayed Execution - No 2")
}, 1000)

setTimeout(function (){
    console.log("First Delayed Execution - No 3") 
}, 1000)



console.log("Concurrent Execution ENDS!!") 
