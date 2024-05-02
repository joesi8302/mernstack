//Assessment NodeAPI and ES6 - 01-May-2024

//1. Create a setup for Express Web Server
const express = require("express")
const app = express()
const port = 4000

app.get('/', function (req, res) {
    res.send('Hello World!!!!!')
  })

app.listen(port)

//2. Configure a route name - Student
let express = require("express")
let studentRouter = express.Router({})
module.exports = studentRouter

//3. Create a express app and configure in server.js to delegate routes with - "Student"
const express = require("express")
const app1 = express()
const port2 = 4000

app.use('/', studentRouter)

app.listen(port)

//4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string

app.get('/getStudentDetails', function (req, res){
    let studentDetails = req.query

    res.json({
        "name ": studentDetails.name,
        "age ": studentDetails.age,
        "address": studentDetails.address,
        "session ": studentDetails.address
    })
})

//5. Save this information received in #4  to a file named studentIfo using fs module async way
let fs = require("fs")

let writerStream = fs.createWriteStream("studentInfo","utf8")
writerStream.write(JSON.stringify(studentDetails))


//6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let joeMap = new Map();
joeMap.set("firstKey", "Something is here")
joeMap.delete("firstKey")
joeMap.set("secondKey", "Something is here")
joeMap.set("thirdKey", "Something is here")
joeMap.set("fourthKey", "Something is here")
console.log(joeMap.entries())
joeMap.clear()

//7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

let promiseObject = new Promise((res, rej) =>{

    setTimeout( () => {
        res({
            status : "Success",
            value : "User Session Object",
            code: 200
        })
    },2000)

    setTimeout( () => {
        rej({
            status : "Failed",
            value : "User Session Object",
            code: 400
        })
    },3000)

    
})

//8. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
function mult(...numbers1) {
    let total = 1;
    for (const num of numbers1) {
      total *= num;
    }
    return total;
  }
console.log(mult(1,2,3,4))

//9. Use the question #7 to build promises using async and await - with multithread

async function asyncCall(){
    console.log("Starting Promise1")
    await promiseObject
            .then((data) => console.log(data))
            .catch((err) => console.log(err))

    console.log("Starting Promise2")
    await promiseObject
            .then((data) => console.log(data))
            .catch((err) => console.log(err))

    console.log("Starting Promise3")
    await promiseObject
            .then((data) => console.log(data))
            .catch((err) => console.log(err))

}


//10. Create an example of generator function of your choice

function *StudentList(){

    let StudentList = new Set(["Jerry"])
    
    yield{StudentList: StudentList}

    StudentList.add("Rick")
    yield{StudentList: StudentList}

    StudentList.add("Morty")

    yield{StudentList: StudentList}

    StudentList.add("Joe")
}

let genStudent = StudentList();
console.log(genStudent.next())
console.log(genStudent.next())
console.log(genStudent.next())
console.log(genStudent.next())