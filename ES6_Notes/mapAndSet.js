// map - a data structure which is used to crete objects and array withi different types of keys
// Special kind of collection createin in ES6 to set iterables even wtihin non primitive key's unlike other collections(json)
// Allows us to use a lot of methods to get, set , delete and do other operations without much pain
// remembers insertion order so the fetch is always east compared to any ohter collection

//[{key: "Value"}]

let myMap = new Map();

//let user =  [{Name : "Dillon"}, {Address: {Address1}}, {}}]
let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;


myMap.set(keyString, "String is key for this")
myMap.set(keyObj, "Object is key for this")
myMap.set(keyFunc, "Function is key for this")
myMap.set(keyNum, "Number is key for this")

console.log(myMap.entries())

console.log(myMap.get(keyString)) // String is key for this
console.log(myMap.get(keyFunc)) //Function is key for this 
console.log(myMap.get({})) // undefined   //these keys are reference type not value type this is why it did not priint "Object is key for this" which is tied to keyObj // both string and numbers can be deleted by values BUT 
console.log(myMap.get(keyObj))

myMap.delete(2000)  // both string and numbers CAN be deleted by values BUT objects and function CANNOT

console.log(myMap.entries()) // we can see that keyNum has been deleted

myMap.clear();
console.log(myMap.entries())


// when we need a iterable/ collection with unique values
// Set: this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["David N", "Wanda", "Otoi", "Mayuri", "Joe", "Yuriko"])

console.log(StudentSet.entries())

console.log(StudentSet.add("Sierra"))
console.log(StudentSet.add("Suyash"))
console.log(StudentSet.add("Suyash"))
console.log(StudentSet.add("Wanda"))

console.log(StudentSet.entries())

console.log(StudentSet.has("David N")) // True
console.log(StudentSet.has("David"))  // False
console.log(StudentSet.has("Eric"))  // False