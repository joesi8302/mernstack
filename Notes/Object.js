// Objects - Defined with class Object in JS are the back bone or basic allocation of JS
// var User = new Object({}); // This is termed as Constructor based object creation

// 1. Using two curly brackets
var Employee = {
    Name: "Nhan",
    ID: 2123,
    GroupCode: "Permanent",
    GetEmployeeInfo: function(){
        return this.Name + " " + this.ID + " " + this.GroupCode +  " " + this.Salary
    }
}

console.log(Employee.GetEmployeeInfo());

//Employee.Salary = "$25000" // this adds a new property to the class 

console.log(Employee.GetEmployeeInfo());


////////////////////////////////////////////////////////////////////////////////////////////////

// THIS IS NOT RECCOMMENDED TO USE FOR INHERITANCE
// THIS JUST CREATES 2 DIFFERENT COPIES
// 2. We can use object contructor to create a copy and provide partial inheritance
// var SoftwareEng = new Object(Employee);

// SoftwareEng.Salary = "$30000" // new property

// console.log(SoftwareEng.GetEmployeeInfo())

// //Overriding - GetEmployeeInfo
// SoftwareEng.GetEmployeeInfo = function(){
//     return this.Name + " " + this.ID + " " + this.GroupCode +  " " + this.Salary
// }

// console.log(Employee.GetEmployeeInfo())
// console.log(SoftwareEng.GetEmployeeInfo())

//////////////////////////////////////////////////////////////////////////////////////////////

// 3. We SHOULD use Object.create to create a copy and provide inheritance
var SoftwareEng1 = Object.create(Employee);

SoftwareEng1.Salary = "$30000" // new property

console.log(SoftwareEng1.GetEmployeeInfo())

//Overriding - GetEmployeeInfo
SoftwareEng1.GetEmployeeInfo = function(){
    return this.Name + " " + this.ID + " " + this.GroupCode +  " " + this.Salary
}

console.log(Employee.GetEmployeeInfo())
console.log(SoftwareEng1.GetEmployeeInfo())

// This inheritance in javascript is possible only due to prototype
// prototype - is an object in JS to create link between child and parent

console.log(SoftwareEng1.__proto__) // This will return employee object 
//you can check on google chrome console to check the prototype connected to each object


/////////////////////////////////////////////////////////////////////////////////
// 4. Empty Object
var EmptyObj = {} // new Object({})
console.log(EmptyObj.__proto__) // We see that the prototype is "Object"



// 5. Breaking the prototype chain and define base functions

// Create your own prototype
var nullPrototype = Object.create(null)

nullPrototype.toString = function (params){
    return "Does Something"
}

// 6. Object.Assign - merging two objects
var User = {name: "Ailleen", add1: "Lake Ciry 1", mobile: "654321651"}
var Address = {name : "Ailleen", add1: "Wall Strees", productName: "New procuict"}

// var Delivery = {User, Address}
// console.log(Delivery)


var Delivery = Object.assign(User, Address)

console.log(Delivery)

//create one object with name person, and inherit it to Student and create two new properties and one new method
//pls use both ways of inheritance

var Person = {
    name: "SomeName"
}

var Student = Object.create(Person);

Student.ID = 1234
Student.School = "SomeSchool"
Student.Hello = function() {
    console.log(Student.School)
}

console.log(Person.name)
console.log(Student.Hello());

var Student2 = new Object(Person);
Student2.ID2 = 5678
Student2.School2 = "SomeOtherSchool"
Student2.Hello2 = function() {
    console.log(Student2.School2)
}

console.log(Person.Hello2())