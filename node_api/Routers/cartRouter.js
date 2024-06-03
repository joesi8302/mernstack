let express = require("express")
let cartRouter = express.Router({})

let CartDataModel = require('../DataModels/CartDataModel')


cartRouter.post("/api/newcart", (req, res) => {
    console.log(req.body)

   
    let newCart = new CartDataModel(req.body);
    
    newCart.save().then((newCart) =>{
        console.log("New Cart Added", newCart)
        res.send(newCart)
    }).catch((err)=>{
        console.log("err signup", err1);
        res.send("Error while adding new cart")
    })
       
})

cartRouter.get("/api/carts", (req, res)=>{
    CartDataModel.find()
    .then((allCarts) =>{
        res.send(allCarts)
    })
    .catch((err)=>{
        res.send("Error finding all carts")
    })
})

module.exports = cartRouter;