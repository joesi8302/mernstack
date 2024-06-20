let express = require("express")
let orderRouter = express.Router({})

let OrderDataModel = require("../DataModels/OrdersDataModel")


orderRouter.post("/api/neworder", (req, res) => {
    console.log("Coming from order Router: " + req.body)
    OrderDataModel.findOne({userId: req.body.userId})
        .then((orderDbObj) => {
            if(!orderDbObj){

                let newOrder = new OrderDataModel(req.body);
                newOrder.save().then((newOrder) =>{
                    console.log("New order Added", newOrder)
                    res.send(newOrder)
                }).catch((err1)=>{
                    console.log("err signup", err1);
                    res.send("Error while adding new order")
                })
            }
            else{
                orderDbObj.orders = req.body.orders;
                orderDbObj.save()
                    .then((data)=>{        
                         setTimeout(()=>{
                            res.json(data);
                        },2000)                        
                    })
                    .catch((err)=>{
                        res.send("Error Occurred"+ err);
                    })
            }
        })
    
    
    
    
       
})

orderRouter.post("/api/userorders", (req, res)=>{
    console.log("Getting User orders: " + JSON.stringify(req.body))
    OrderDataModel.findOne({userId: req.body.userId })
    .then((orders) =>{
        console.log(JSON.stringify(orders))
        res.json(orders)
    })
    .catch((err1)=>{
        res.send("Error finding orders", err1)
    })
})

module.exports = orderRouter;