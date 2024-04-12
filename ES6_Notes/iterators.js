// Apart from for, of, in, foreach, while.... ES6 introduced 4 new iterators
// These iterators help read, modify, and re-create the
// Array or Array of Objects
// 1. Filter
// 2. Map
// 3. Some
// 4. Reduce

// When we do new changes it shoudl not impact the core objects, preserve the immutability

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Rboin", savedby : "Batman"},
]

// 1. Print the persons saved by captain america

let savedByCA = personsList.filter(person => person.savedby == "CaptainAmerica" ? person : "")

console.log(savedByCA) // filters out the objects that have been saved by captain america

// 2. List the names saved by Iron Man and add Super Hero before the name

let savedByIM = personsList.map(person => {
    if(person.savedby == "IronMan"){  //This finds the names that are saved by ironman but will keep the other values undefined
        return {"New Birth " : "Super Hero " + person.name} 
    }
}).filter(names => names != undefined)  // This will filter out the undefined values
console.log(savedByIM)


// Preservation of immutability, no changes to the values in the main list
console.log(personsList)


// 3. Check if someone is saved by BlackPanther (Some)
// some works as short circut, as soon as it meets the condition, it will return true or false
// by default, some returns false

let savedByBP = personsList.some(person => person.savedby=="BlackPanther")
console.log(savedByBP)

let savedByBM = personsList.some(person => person.savedby=="Batman")

console.log(savedByBM)


//Set => a data strucure used to create arrays of unique values

// 4. Give me the number of persons saved by each super hero uniquely
let personsSavedUniquely = personsList.reduce((prevVal, currVal, index, array) => { // index is the index; array is the length of the array
    console.log(prevVal)
    console.log(currVal)
    console.log(index)
    // console.log(array)
    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1
    return prevVal
}, new Set())  

console.log(personsSavedUniquely)