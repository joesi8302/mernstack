import React, {useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import { SaveProductToDB } from "../../../state/Product/productAction";

let ProductHook = (props) =>{
    let Product = useSelector((store)=> store.productReducer.product)

    let pName = useRef(null)
    let pPrice = useRef(null)
    let pDesc = useRef(null)
    let pRating = useRef(null)


    let dispatchToDB = useDispatch();


    useEffect(() => {
        console.log("Re rendering")

        pName.current.value = Product.prodName
        pPrice.current.value = Product.price
        pDesc.current.value = Product.desc
        pRating.current.value = Product.rating

        return () => {
            
        }
    }, [])

    let readFormData = (evt) =>{
        
        let newProduct = {
            prodName : pName.current.value,
            price : pPrice.current.value ,
            desc : pDesc.current.value, 
            rating : pRating.current.value ,
        }

        alert("New Product " + JSON.stringify(newProduct))

        dispatchToDB(SaveProductToDB(newProduct))



        evt.preventDefault()
    }





    return (
        <>
            <form className={"form col-md-10 productHook"} onSubmit={readFormData}>
                <label>
                    <b>Product Name</b>
                    <input type="text" className={"form-control col-md-12"} ref={pName}
                    placeholder="Please enter Product Name"/>
                </label>
                <br/>
                <label>
                    <b>Product Price</b>
                    <input type="text" className={"form-control col-md-12"} ref={pPrice}
                    placeholder="Please enter Product Price"/>
                </label>
                <br/>
                <label>
                    <b>Product Description</b>
                    <input type="text" className={"form-control col-md-12"} ref={pDesc}
                    placeholder="Please enter Product Description"/>
                </label>
                <br/>
                <label>
                    <b>Product Rating</b>
                    <input type="text" className={"form-control col-md-12"} ref={pRating}
                    placeholder="Please enter Product Rating"/>
                </label>
                <br/>
                <input type="submit" className={"btn btn-primary"} value="Add New Product" />
            </form>
        </>
    )
}

export default ProductHook;

