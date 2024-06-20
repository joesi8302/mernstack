let express = require("express")
let multer = require("multer")
let cloudinary = require("../config/cloudinaryConfig")
let productRouter = express.Router({})


let ProductDataModel = require("../DataModels/ProductDataModel")

const storage = multer.diskStorage({});
const upload = multer({ storage });



productRouter.post("/api/newproduct", (req, res) => {
    console.log(req.body)

    ProductDataModel.findOne({prodName:req.body.prodName}).then((existingProduct)=>{
        if(existingProduct){
            console.log("Product Already There", existingProduct);

            ProductDataModel.findByIdAndUpdate(existingProduct._id, req.body)
            .then((data) =>{
                console.log("Product Updated", data)
                res.send(data)
            }).catch((err)=>{
                console.log("err signup", err);
                res.send("Error while updating product")
            })
            
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


productRouter.post("/api/product", (req, res) => {
    console.log("gettign your product")
    ProductDataModel.findOne({prodName:req.body.prodName}).then(async (product) => {
        console.log("Found Product")
        res.send(product)
    }).catch((err) => {
        res.send("Error finding product " + err)
    })
})



module.exports = productRouter;