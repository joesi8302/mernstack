let express = require('express')

let studentRouter = express.Router({})

let StudentDataModel = require("../DataModels/StudentDataModel")

studentRouter.post("/api/addStudent", (req, res) => {

    StudentDataModel.findOne({studentId: req.body.studentId})
        .then((exisitingStudent) =>{
            if(exisitingStudent){
                console.log("Student already enrolled")
            }
            else{
                let newStudent = new StudentDataModel(req.body)
                newStudent.save().then((newStudent) => {
                    console.log("New Student Enrolled")
                    res.send(newStudent)
                }).catch((err) => {
                    console.log("Error Adding Student")
                    res.send("Error while adding Student")
                })
            }
        }).catch((err) => {
            console.log("Error Adding Student")
            res.send("Error while searching Student")
        })
})

studentRouter.get("/api/students",(req, res) =>{
    StudentDataModel.find()
    .then((allStudents) => {
        res.send(allStudents)
    })
    .catch(() => {
        res.send("error while fetching students")
    })
})

module.exports = studentRouter;