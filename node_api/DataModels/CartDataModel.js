let mongooseObj = require("mongoose")

let schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack18");

let cartSchema = new schemaObj({
    userId : {type: String, required : true},
    cart : []
},
{
    versionKey: false
})

let cartModel = mongooseObj.model("cart", cartSchema);

module.exports = cartModel;