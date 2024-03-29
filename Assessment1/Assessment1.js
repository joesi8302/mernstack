//March - MERNStack Session - Assessment Number 1
//Q1. Create a file with name basics and show all the features that you know about javascript
    // JavaScript is a Interpreted language and partiall compiled due to hoisting
    // Hosting- Is the partial compiled behavior as JS looks ahead in the code for the variable or function definition
    // JavaScript does have a autocast feature and would just need the "var" keyword to initialize any data type
    // Semi colons are optional HOWEVER, when we use IIFE functions, we need to use a semi colon to end the previous line
    // IIFE Functions are immediately invoked functions that only execute one time during execution
    // We can created functions in similar fashion to a class in Java. This is by creating inner variable and functions 
    // Return statements are MANDETORY within functions and the default return will be undefined



//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
var Q2 = "Robert "
console.log(typeof Q2)  // String

Q2 = .0266
console.log(typeof Q2) // Number

Q2 = false
console.log(typeof Q2) //boolean

Q2 = {
    myname: "Test Me"   
}
console.log(typeof Q2) // Object

Q2 = 25166665
console.log(typeof Q2) // number

Q2 = undefined
console.log(typeof Q2) // undefined

Q2 = true
console.log(typeof Q2) // boolean

Q2 = "Robert Jr."
console.log(typeof Q2) // String

Q2 = null
console.log(typeof Q2) // Object

Q2 = {}
console.log(typeof Q2) // Object

Q2 = -32767
console.log(typeof Q2)  // Number


//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function show_user_info(firstName, lastName, age){

    console.log("Your name is", firstName, lastName, "and your age is:", age)

}

show_user_info("Joe", "Si", 25)


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function doaddition(param1, param2, param3){
    return param1+param2+param3;
}

console.log(doaddition(2,3,4)) // Gives 9 - adds correctly
console.log(doaddition(2)) // Gives: NaN -  Since we are not inserting the rest of parameters, I beleive it will be defaulted to undefined and doing: 2 + undefined will cause this NaN error
console.log(doaddition(2.3,3)) // Gives: NaN - Since we are not inserting the rest of parameters, I beleive it will be defaulted to undefined and doing: 2.3 + 3 + undefined will cause this NaN error
console.log(doaddition("first", 2, "three"))  // Gives: first2three - I believe since we are adding strings and numbers together, it treats it as concatination rather than numerical addition

//Q5. Give me an example of your choice on closure, objects, prototype, each.

//////////CLOSURE EXAMPLE ///////////////////////////////////////
    function account(userName, passwordC){

        var cart = {
            item1 : "milk",
            item2 : "eggs",
            item3 : "stuff"
        }
        var name = "user1"
        var password = "pass"

        var webSite = function(getCart){
            var items = {
                item1 : "Stuff",
                item2 : "Stuff",
                item3 : "Stuff",
                item4 : "Stuff",
                item5 : "Stuff"
            }
            if(getCart, password == passwordC, name == userName){
                console.log("Here are the items in your cart")
                return cart
                
            }
            else{
                console.log("You can buy these items")
                return items
            }
            
        }

        return webSite
    }
    console.log(account()())
    console.log(account('user1','pass')(true))




//Q8. what will the following code output? why?

// var arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }