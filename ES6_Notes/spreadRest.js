// "..." Notation
// Spread: is used to spread the elements of any object or array to be used one by one

let arrayOfCities = ["Rome", "New York", "New Delhi", "London"]

console.log(arrayOfCities[0])
console.log(arrayOfCities[1])

console.log(...arrayOfCities) // Can display everything with ...
console.log(...arrayOfCities.join(""))  // This adds an extra space to every character

// Spread operator is ued to combine two objects and preserve the immutability of each object
let User = {name: "Anna", age: 25}
let Address = {home : "Somewhere in US", office: "virtual"}

let Delivery = {User, Address}  // Object.assign

let Delivery1 = {...User, ...Address}   // MERGES THE TWO OBJECTS
// Preserving the immutability // if we do change after assignemtn it wont copy the new value


Address.phone = 1231231234 // We see that address is not added to Delivery 

console.log(Delivery)
console.log(Delivery1)

console.log(Delivery)


//////////////////////////////////////////////////////////////////////////
// Rest - These are mainly used as parameters 
// If we have many paramenters whiuch can be clubbed so rest can be used as parameter
// what is clubbed?
    // Example of clubbed: (a,b,c,d,e)

function Sum(a,b,c,d,e){
    return a+b+c+d+e
}

console.log(Sum(1,2,3,4,5))

// rest is the last paramter of a cunfton which can accept any number of params
function Sum_Large(...numbers){
    let sum = 0;

    sum = numbers.reduce((preVal, currVal) => preVal + currVal,0)
    return sum
}

let numList = [1,2,3,4,5]

console.log(Sum_Large(...numList))

console.log(Sum_Large.apply(null,...numList))
