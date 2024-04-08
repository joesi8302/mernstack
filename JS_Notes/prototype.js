var myObject = {}

var he = function (){
    console.log("hello")
}

var test = new Function(he);
console.log("From test:")
test();

console.log(myObject);

myObject.FirstProperty = "This is first prop"

myObject.__proto__.SecondProperty = "this is 2nd prop";