let cat = "meow",
dog = "woof",
bird = "chirp",
lion = "roar"

// All of these will have the let variable 

// This is without short hand
let AnimalSound = {
    cat: cat,
    dog: dog,
    bird: bird,
    lion: lion
}

// This is WITH shorthand: 
// We can just keep one if key and value both refer to the same name and variable
let AnimalSoundES6 = {
    cat,
    dog,
    bird,
    lion
}

//These both do the same thing
console.log(AnimalSound)
console.log(AnimalSoundES6)

console.log(`Animal Sound refers with 1 ${AnimalSoundES6}`) // {} toString() -> [object Object]   this is doing a toString of an object

console.log(`Animal Sound refers with 2 ${JSON.stringify(AnimalSoundES6)}`) // Converts the object into value of strings 

console.log("Animal Sound refers with 3 " + AnimalSoundES6) // {} toString() -> [object Object]   this is doing a toString of an object

console.log("Animal Sound refers with 4 " + JSON.stringify(AnimalSoundES6)) // Converts the object into value of strings 

console.log("Animal Sound refers with 5 " , AnimalSoundES6) // Converts the object into value of strings 