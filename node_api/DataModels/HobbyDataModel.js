let mongooseObj = require("mongoose")

let schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack18");

let hobbySchema = new schemaObj({
    hobbyName : {type: String, required : true}
},
{
    versionKey: false
})

let hobbyModel = mongooseObj.model("hobby", hobbySchema);

module.exports = hobbyModel;