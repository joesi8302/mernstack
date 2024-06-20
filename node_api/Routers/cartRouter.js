let express = require("express")
let cartRouter = express.Router({})

let CartDataModel = require('../DataModels/CartDataModel')


cartRouter.post("/api/newcart", (req, res) => {
    console.log(req.body)
    CartDataModel.findOne({userId: req.body.userId})
        .then((cartDbObj) => {
            if(!cartDbObj){

                let newCart = new CartDataModel(req.body);
                newCart.save().then((newCart) =>{
                    console.log("New Cart Added", newCart)
                    res.send(newCart)
                }).catch((err1)=>{
                    console.log("err signup", err1);
                    res.send("Error while adding new cart")
                })
            }
            else{
                cartDbObj.cart = req.body.cart;
                cartDbObj.save()
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