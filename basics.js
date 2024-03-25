// we can create a main method that essentially creates a stack or call stack
// Interpreter reads from the first line and then adds to stack and so on
// Line by line executiion is called a interpreting language
// Node insitializes a thread before running the js file
var user_name  = "this is user name"

console.log(user_undefined)
PrintName(user_name) // we are able to use / execute this function due to HOISTING 
// a snapshot of the code is created and we know there was a function created so it continues

PrintName(user_undefined) // The value will get hoisted with default value  
var user_undefined = "he;;p" 

function PrintName(name){ //This gets HOISTED (snapshot created)
    console.log(name)
}


// PrintName(user_name)


// JavaScript is - Interpreted Language and partially compiled (BECAUSE OF HOISTING)

// JavaSript is Case Sensitive

var myName = "h"
var MyName = "b"

console.log(myName)
console.log(MyName)

// semi colon ; is OPTiONAL -- EXCEPT FOR A FEW EDGE CASES (IIFE Functin)

// we can declare variables using:
    // string
    // alphanumeric, but cannot strat with a number: Ex. var 1_name
    // only two special chars can be used:
        //$
        //_
        // CANT USE : var name@
    
    // Commenting Code
    // Single line comment ctr+ / (can be toggled)
    // Multi-Line Comment
    /*
        This is a multi line comment
    */


// Expressions and Operators
// &&: And
// ||: OR
// !: NOT
// =: 

// -----------------------------------------------------------------------------------
// ==:
// ===:
var a = 10
var b = "10"
if(a === b){  // Data values and its type are both compared
    console.log("Are actually equal")
} else if (a == b){  // data values are compared
    console.log("Only values are equal not its type")
}

var c = 10
var d = 10
if(c === d){  // Data values and its type are both compared
    console.log("Are actually equal")
} else if (c == d){  // data values are compared
    console.log("Only values are equal not its type")
}
// -----------------------------------------------------------------------------------

// ?: Terenary Operator
// condition ? [do this when true] : [do this when false]
a==b ? console.log("Only values are equal not its type") : console.log("are actualy equal")