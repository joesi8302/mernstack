let mongooseObj = require("mongoose")
schemaObj = mongooseObj.Schema;


mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let itemSchema = new schemaObj({
    itemName : {type: String, required : true},
    price : {type: Number, required : true},
},
{
    versionKey : false
})

let itemModel = mongooseObj.model("item", itemSchema);
module.exports = itemModel;