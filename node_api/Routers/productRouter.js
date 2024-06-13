let express = require("express")
let multer = require("multer")
let cloudinary = require("../config/cloudinaryConfig")
let productRouter = express.Router({})


let ProductDataModel = require("../DataModels/ProductDataModel")

const storage = multer.diskStorage({});
const upload = multer({ storage });



productRouter.post("/api/newproduct", (req, res) => {
    console.log(req.body)

    ProductDataModel.findOne({prodName:req.body.prodName}).then(async (existingProduct)=>{
        if(existingProduct){
            console.log("Product Already There", existingProduct);
            res.send(existingProduct)
        }
        else{

            let newProduct = new ProductDataModel(req.body);
            
            newProduct.save().then((newProduct) =>{
                console.log("New Product Added", newProduct)
                res.send(newProduct)
            }).catch((err)=>{
                console.log("err signup", err1);
                res.send("Error while adding new product")
            })
        }
    }).catch((err)=>{
        console.log("error new product", err)
        res.send("Error searching for adding new product")
    })
})

productRouter.get("/api/products", (req, res)=>{
    ProductDataModel.find()
    .then((allProducts) =>{
        res.send(allProducts)
    })
    .catch((err)=>{
        res.send("Error finding all products")
    })
})



module.exports = productRouter;