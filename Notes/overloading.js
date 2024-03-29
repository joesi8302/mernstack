// Polymorphism in JAVA
    // Overriding - runtime polymorphism
        // We will explore more when discussing about objects
    // Overloading - compile time polymorphism
        // Same name with multiple methods with different params and their data types 

// THERE IS NO CONCEPT OF OVERLOADING PRESENT IN JAVASCRIPT FUNCTIONS

function PrintData(){
    console.log("No Param")
}

PrintData();

function PrintData(param1){
    console.log("1 Param:" , param1)
}

PrintData("One");


function PrintData(param1, param2){
    console.log("1 Param:" , param1, "2 Param:" , param2)
}

PrintData("One", "Two");

function PrintData(param1, param2, param3){
    console.log("1 Param:" , param1, "2 Param:" , param2, "3 Param:" , param3)
}

PrintData("One", "Two", "Three");


// function PrintData(){
//     console.log("No Param")
// }

PrintData();

// THERE IS NO CONCEPT OF OVERLOADING PRESENT IN JS FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PrintData = function(param1, param2, param3, param4){
    console.log("1 Param:" , param1, "2 Param:" , param2, "3 Param:" , param3, "4 Param:" , param4)
};

PrintData("one", "two", "three", "four")

var PrintData = function(param1, param2, param3){
    console.log("1 Param:" , param1, "2 Param:" , param2, "3 Param:" , param3, "4 Param:" , param4)
};

PrintData("one", "two", "three")

// This works because we are specifically defining the PrintData
// hoisting is not avilabile for function expression