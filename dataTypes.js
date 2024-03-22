// Six Data types are present in javaSCript
// Primitive Types (Assigned by value):
// - String, number, Boolean, Undefined, NUll

// Non Primitive Types (assigned as reference)
// - Object

// var - is a keyword used in core-js to declare variables, functions, etc...

console.log(data_name) // this will be undefined when printed   -- This process is called HOISTING
// the interpreter is aware that the variable is already declared in the file. HOWEVER, there is multiple declarations so it gets confused

//default value to ANY variable is UNDEFINED

// console.log(randomValue) // this will give an ERROR saying it is NOT DEFINED -- which is different BECASUE no variable was declared later in the file

var name = "new String()"
var data_name = "Learning MERNStack" // declare and assgined value to the variable

console.log(data_name)
console.log("Data Type ", typeof data_name)  // data type of data   -- String

var data_name = "Learnign Vanilla JavaScript"  //re-declare and re-assign value to the variable  (THIS IS POSSIBLE)
data_name = "Learning ECMA SCRIPT Basics" // This is re-assigning the value to the variable


var data_name = 2024   //dynamically changes the type depending on the value assigned
data_name = 20.24  //is a float but will still be classified as a number
console.log(data_name)
console.log("Data Type ", typeof data_name) 

var data_name = undefined
console.log(data_name)
console.log("Data Type ", typeof data_name)  // will show undefined

data_name = null //null is a data value
console.log(data_name)
console.log("Data Type ", typeof data_name)  // NULLS DATA TYPE IS OF AN OBJECT

//CREATING AN OBJECT, json object, object literal
data_name = {} 

data_name = {
    FirstName : "Herra",
    Address: "Somewhere far away"
}

console.log(data_name)
console.log("Data Type ", typeof data_name) 


data_name = null
console.log(data_name)
console.log("Data Type ", typeof data_name) 

// While UNDEFINED is meant to set for developers in case we don't know what value to assgined yet
// NULL is something we specifically WANT to set to null


data_name = true  // default value of BOOLEAN is FALSE
console.log(data_name)
console.log("Data Type ", typeof data_name) 

data_name = 1 == 2
console.log(data_name)
console.log("Data Type ", typeof data_name) 

var emptyObj1 = {}
var emptyObj2 = {}

data_name = emptyObj1 == emptyObj2 // THIS WILL CREATE FALSE BECAUSE OBJECTS ARE BY REFERENCE
console.log(data_name)

var emptyObj1 = {}
var emptyObj2 = emptyObj1

data_name = emptyObj1 == emptyObj2 // THIS WILL CREATE TRUE BECAUSE IT IS NOW POINTING AT SAME REFERENCE
console.log(data_name)

var emptyObj1 = null
var emptyObj2 = null
data_name = emptyObj1 == emptyObj2 // THIS WILL CREATE TRUE BECAUSE BOTH OBJECTS ARE NULL
console.log(data_name)


//ES-6: Symbol - (ES6 : class based implementation of JS)
// used to create customized variable of our choice
var symbol_1 = Symbol("New Value of my choice")
console.log(symbol_1)
console.log("Data Type ", typeof symbol_1)
