let mongooseObj = require("mongoose")

let schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let OrdersSchema = new schemaObj({
    userId: {type: String, required:true},
    orders: []
},
{
    versionKey : false
})

let orderModel = mongooseObj.model("order", OrdersSchema);

module.exports = orderModel;