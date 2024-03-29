// Inheritance
// Encapsulation 
    // // access modifiers: in languages like java help us to prevent/ limit the usage of class members
    // Private, pulbic, internal, protected
// Polymorphism  
// Abstraction - not present in javascript

// In JavaScript: When we have a function within a function, and the parent function returns the child function,
    // then we can limit what can be accessed by external user through child function
    // This is called "Closure"


// currying - when a fucntion returns another function instead of values and also repeats the same thing, we call this currying


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// THIS IS CLOSURE
function Parent(userName, userPin){
    // Private Scope of paraent function

    var name = "David"
    var pin = "2345"
    var accountName = "Savings Account" //public - on authentication success
    var accountBalance = "$20000" //public - on authentication success
    var accountPassword = "12345h"  // This password has to be a private variable // Shouldn't be acccessed from others

    var child = function(getBalance){  // getBalance - is the parameter for a child function
        // public scope which is accessible to others

        if(getBalance && name==userName && pin == userPin){
            return {
                name : name, //key value pairs 
                accountName : accountName,
                accountBalance : accountBalance
            }
        }
    }

    return child
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// currying - when a fucntion returns another function instead of values and also repeats the same thing, we call this currying
// currying is a process and we use closures to do it
var balanceInfo = Parent("Wanda","2345") //balanceInfo becomes child function //This is also an example of currying 

console.log(balanceInfo) //this only returns the function definition

console.log(balanceInfo(true)) // this will give undefined because username is incorrect

var balanceInfo = Parent("David","2345")
console.log(balanceInfo(true)) // now this will return info