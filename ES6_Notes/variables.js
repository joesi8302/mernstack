// In Core JS -> var to declare, which is functional scoped
// let and const 
    // -- in ES6 which are lexical scopre and behave more like class based literals

// 1. Scope <Functional and Lexical or block {}>
{
    var my_var = 2024
    let my_let = 2015 // let and const can't be accessed outside the block / lexical {}
    const my_const = 2900.123
}
console.log(my_var) // we wouild think it would be undefined or Not visible due to the lexical
// HOWEVER with var, we can still see it as var lets variable become GLOBAL 
// WITH let, we can limit the scope of the lexical

// console.log(my_let) // This is outside the boundry of the lexical {} so not accessible 
// console.log(my_const) // THESE WILL GIVE ERROR INSTEAD OF UNDEFINED

// 2. let and const have no hoisting present

{
    // console.log(check_let)  // THERE IS NO HOISTING SO THESE WILL CAUSE ERRORS
    // console.log(check_const)

    let check_let = 23
    const check_const = 2312

}

// 3. re-assignment and re-declaration
// re-declaration is NOT allowed for const and let
{
    // var my_var -> var can be reassigned, re-decclared anytime anywhere

    let my_let;  // Does not require a inital declaration
    const my_const = 213123.1
    console.log(my_let)
    my_let = 1235
    console.log(my_let)

    // let my_let = "Chaing to string" //re-declaration is NOT allowed for let

    console.log(my_const)
    // const sad_const; // We cannot delcare without initialization
    // const my_const = 12321 // Re-declartion is NOT allowed for const
    // my_const = 2131232  // THIS IS NOT ALLOWED AS CONSTANT VARIABLES ARE IMMUTABLE

    // hack for const - value is immutable but reference can be changed

    const User = {
        session: "JavaScript - OOJS"
    }

    const User2 = {
        session: "ES6 - OOJS"
    }

    // User = User2 // This is not allowed as this is an Assignment to constant variable

    User.session = "ES6 Variables" // updating the value of reference i.e = session
    User.newStuff = "123" // can add more references within an object
    console.log(User)

}

// 4. let and const get evaluated and not passed as reference as var

for (var index = 0; index < 5; index++){
    
    setTimeout(() => {
        console.log("Incremented with 2 second delay " + index)
    },2000); // we can see towards the end only index = 5 prints BECAUSE var works similar to a reference

}
console.log("breaking condition " + index)

// USING LET 
for (let index1 = 0; index1 < 5; index1++){
    
    setTimeout(() => {
        console.log("Incremented with 2 second delay " + index1)
    },2000); // we can see towards the end only index = 5 prints BECAUSE var works similar to a reference

}
// console.log("breaking condition " + index1)

var mylet_var = "New Value to Var"

let mylet_var = "New Value to Let"

console.log(mylet_var) // will give an error because Re-declaration of LET is NOT allowed