let mongooseObj = require("mongoose")

schemaObj = mongooseObj.Schema;


mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let productSchema = new schemaObj({
    prodName : {type: String, required : true},
    price : {type: Number, required : true},
    desc : {type: String, required : true},
    rating : {type: Number, required : true},
},
{
    versionKey : false
})

let ProductModel = mongooseObj.model("product", productSchema);

module.exports = ProductModel