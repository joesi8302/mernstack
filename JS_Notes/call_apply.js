var user = { name: "Byran", age: 21, session: "Javascript"}
var user2 = { name: "arda", age: 20 , session: "OOJS"}

// this - execution context of executiing function

function PrintDetails(comment){
    console.log("This", this)
    console.log(comment)
    console.log(this.name, this.age, this.session)
}

PrintDetails("Executing PrintDetail in global context")
// how to move PrintDetails to the user class/object without copying the function
// we need to get the context of the users


PrintDetails.call(user, "Executing PrintDetail in user context")  // .call will allow us to access different contexts within different objects
PrintDetails.call(user2, "Executing PrintDetail in user2 context") 


function GetDetails(concept, session1, session2, session3, session4, session5){
    console.log (`Call Extention ${concept}`) // the tilda key allows us to use string literals with '$'

    console.log(`${session1} ${session2} ${session3} ${session4} ${session5}`)

    console.log(`The User details are as shown below
                 Name is - ${this.name}
                 Age is  -  ${this.age}
                 Session is - ${this.session}`)
}

GetDetails.call(user, "Web Tech", "AWS", "MERN", "JAVA","JS", "WebStructure")

GetDetails.call(user, "Web Tech", "AWS", "MERNStack", "DevOPs", "Data Science","Data Structure")

var Sessions = ["Web Tech", "AWS", "MERNStack", "DevOPs", "Data Science","Data Structure"];

GetDetails.apply(user, ["Web Tech", "AWS", "MERNStack", "DevOPs", "Data Science","Data Structure"])
GetDetails.apply(user2, Sessions)



//GetSessionList - returns list of sessions []

var seesionList = ["JS","ES6","NODEJS","Express","React","Redux"];

GetDetails.apply(user, seesionList)
GetDetails.apply(user2, seesionList)

//just in case we dont want to pass any context but we need to set parameters as array
GetDetails.apply(null, seesionList)



// The difference is that apply lets you invoke the function with arguments as an array; 
// call requires the parameters be listed explicitly.


//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases


var student = { name: "Matthew", age: 24, classes: "Javascript"}
var student2 = { name: "David", age: 24 , classes: "OOJS"}

function getSchedule(comment){
    console.log(comment)
    console.log(this.name, this.age, this.classes)
}

function GetSchedule(concept, class1, class2, class3, class4, class5){
    console.log (`Call Extention ${concept}`) 

    console.log(`${class1} ${class2} ${class3} ${class4} ${class5}`)

    console.log(`The Student details are as shown below
                 Name is - ${this.name}
                 Age is  -  ${this.age}
                 Classes are - ${this.classes}`)
}

var classList = ["Math","Social Studies","Band","Science","English","PE"];

console.log("call")
GetSchedule.call(student, classList);
console.log("apply")
GetSchedule.apply(student, classList);