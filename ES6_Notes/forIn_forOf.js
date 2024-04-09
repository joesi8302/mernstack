
// 1. Loops through length
// 2. to access the value we pass key as index for current object array[1].key, (this)

let person = {fname:"John", lname:"Doe", age:25, address: {}}

for (const key in person){
    if(Object.hasOwnProperty.call(person,key)){  // this is a check to confirm that key is present, else set the context to current key
        const element = person[key];
        console.log(`${key}  ${element}`)
    }
}

let arr = [3,5,7]; // index STARTS at 0 
console.log(arr);
arr[3] = "Mayrui" // this adds a new element and could be any type
console.log(arr);


for(const key in arr){
    console.log(key) // The key value will be the index value
    const element = arr[key]
    console.log(element)
}


// for of loop: Mainly for arrays, iterates over the property names, more reccomended for array of numbers or string instead of objects

console.log("For Of loop")
let cars = ["BMW", "Volvo", "Mini"]
cars[3] = "toyota"


cars[10] = 'something' // this will create the elements in between and fill them will 'undefined'
cars.newCar = "tesla" // This will not diplay in the for OF loop
// Arrays with keys that are not based on index for of loop will not support that value

console.log(cars);
for(const car of cars){
    console.log(" " + car);
}


// for (const iterator of object){

// }

// FOR IN is for objects

// FOR OF is for arrays