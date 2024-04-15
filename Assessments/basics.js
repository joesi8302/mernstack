
var vString =  "hello"

var nNumber = 1234

console.log(vString, nNumber)


vString = 2222

nNumber = "now a string"

function Print(param){
    console.log(param)
}


Print(vString)
Print(nNumber)

// JavaScript is a Interpreted language and partiall compiled due to hoisting
    // Hosting- Is the partial compiled behavior as JS looks ahead in the code for the variable or function definition
    // JavaScript does have a autocast feature and would just need the "var" keyword to initialize any data type
    // Semi colons are optional HOWEVER, when we use IIFE functions, we need to use a semi colon to end the previous line
    // IIFE Functions are immediately invoked functions that only execute one time during execution
    // We can created functions in similar fashion to a class in Java. This is by creating inner variable and functions 
    // Return statements are MANDETORY within functions and the default return will be undefined