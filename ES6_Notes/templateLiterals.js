// Template Literals:
// These are upgrades in quotes "" which we use to create dynamic html, string with values etc.

let AnimalSoundsES6 = require ('./shortHand')


let val = 100
let normalString = "askdljh" + "asdas" + val + "new studff"

let templateLit = `aslkdjsa ${val} asdsadasda`

console.log(normalString)
console.log(templateLit)

console.log(JSON.stringify(AnimalSoundsES6))

// done on the console of google chrome:
/////////////////////////////////////////////////////////////////////////////////////////
let element = document.getElementById("main-frame-error")
let myNormalStringTemplate =`Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                                            Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        <h1>Template Literal</h1>
                        <b>David</b>
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum`
                     
element.innerHTML = myNormalStringTemplate
/////////////////////////////////////////////////////////////////////////////////////////