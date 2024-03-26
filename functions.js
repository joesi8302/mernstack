// Functions in JavaScript are the first class memeber citizens and hold almost all power present in runtime
// Keyword: function [name](params){}

// RETURN is mandatory in JS functions
    // By Default: the value returned will be "undefined"
// Pure Functions: which must have something returned
// ALL JS FUNCTIONS ARE PURE FUNCTIONS (P Functions)


// These are called NAMED FUNCTIONS
function DefaultFunction(params){
    //definition and the scop eof the function

}

console.log(DefaultFunction("value"))  // we can see that "undefined" is returned

function Name(params){
    return params
}

console.log(Name("Hello"))  // will return the return statement

Name("Hello") // This executes in a global scope
                // the "this" keyword is applied here global "this" scope
                // this - (global object, execution context (NOT CLASS))
                // execution context is what is available for us to use like this.session is part of the execution context


session = "MERN STACK"

// global "this"
function funcThis(params){
    console.log(this) // shows that this function has access to the global scope and we can see it has access to "session = "MERN STACK" when ran
}

funcThis("yes")


//----------------------------------------------------------------------
// Function Expression - When we assign a function definition to a var, it is termed as a FUNCTION EXPRESSION

var validUser = function (a, b){
    return a + b
}
console.log(validUser(1,2));

// -------------------------------------------------------------------------
// IIFE - Immediately Invoked Function Expression
    // - Helps us execute a function for one time only
    // Why do we use this?
    // Example: you can read the IP address of the user and send to server. Wont do again unless your revisit a webpage

// looks like : "([function])(params)"
// the line before the IIFE function needs to have a semicolon ';' 
(function IIFE_Name(params){
    console.log(params)
})("David");
// we cannot execute this function again even when calling it
// IIFE_Name("Param")  // This will give an error saying this function is not defined

// -----------------------------------------------------------------------------
// Constuctor Function: It is used to create a Class like structure using functions
// This is very common when creating libraries

function Area(length, width, radius){
    this.length = length,
    this.width = width,
    this.radius = radius,

    this.rectangle = function (){
        return this.length * this.width
    }
    this.square = function (){
        return this.length * this.length
    }
    this.circle = function (){
        return 3.1412 * this.radius * this.radius
    }
}

console.log("Length",length)

var areaObj = new Area(2,5,10) // initialized as constructor

console.log(areaObj.circle())   // These functions are executing at their Constructor Function context, NOT GLOBAL CONTEXT
console.log(areaObj.rectangle())
console.log(areaObj.square())





