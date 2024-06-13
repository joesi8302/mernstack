let express = require("express")
let orderRouter = express.Router({})

let OrderDataModel = require("../DataModels/OrdersDataModel")


orderRouter.post("/api/neworder", (req, res) => {
    console.log(req.body)
    OrderDataModel.findOne({userId: req.body.userId})
        .then((orderDbObj) => {
            if(!orderDbObj){

                let newOrder = new OrderDataModel(req.body);
                newOrder.save().then((newOrder) =>{
                    console.log("New Cart Added", newOrder)
                    res.send(newOrder)
                }).catch((err1)=>{
                    console.log("err signup", err1);
                    res.send("Error while adding new order")
                })
            }
            else{
                orderDbObj.order = req.body.order;
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

cartRouter.post("/api/usercart", (req, res)=>{
    console.log("Getting User Cart: " + JSON.stringify(req.body))
    CartDataModel.findOne({userId: req.body.userId })
    .then((cart) =>{
        console.log(JSON.stringify(cart))
        res.json(cart)
    })
    .catch((err1)=>{
        res.send("Error finding cart", err1)
    })
})

module.exports = cartRouter;