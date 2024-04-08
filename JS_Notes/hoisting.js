// Behaves as a snapshot or lookahead of the javascript code present, and gives behavior of partial complication
// It happens when we try to use a function or variable before its declaration
// 1. Variable Hoisting - Variable gets an undefined value
// 2. Function Hoisting - Function gets hoisted with its definition


console.log(myVar) //undefined


console.log(myVar()) // error: function expressions do not hoise with definition

console.log(PrintName) // function definition
console.log(PrintName("wat")) // can be executed

var myVar = "assingned var"

myVar = function (param){   // These cannot be hoisted
    console.log(param)
}

function PrintName(name){
    console.log(name)
}