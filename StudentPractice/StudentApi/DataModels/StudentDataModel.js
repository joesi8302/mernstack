let mongooseObj = require("mongoose")

schemaObj = mongooseObj.Schema;


mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let studentSchema = new schemaObj({
    studentId : {type: Number, required: true},
    studentName :  {type: String, required: true},
    studentYear :  {type: String, required : true}
},
{
    versionKey : false
})

let StudentModel = mongooseObj.model("student", studentSchema);
module.exports = StudentModel;

