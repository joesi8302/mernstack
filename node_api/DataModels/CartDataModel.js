let mongooseObj = require("mongoose")

let schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack18");

let cartSchema = new schemaObj({
    cart : []
},
{
    versionKey: false
})

let cartModel = mongooseObj.model("cart", cartSchema);

module.exports = cartModel;