let express = require("express")
let studentRouter = express.Router({})
module.exports = studentRouter

studentRouter.get('/', function (req, res) {
  res.send('Hello from studentRouter')
})


studentRouter.get('/getStudentDetails', function (req, res){
    let studentDetails = req.query

    res.json({
        "name ": studentDetails.name,
        "age ": studentDetails.age,
        "address": studentDetails.address,
        "session ": studentDetails.address
    })

    let fs = require("fs")

    let writerStream = fs.createWriteStream("studentInfo","utf8")
    writerStream.write(JSON.stringify(studentDetails))
})