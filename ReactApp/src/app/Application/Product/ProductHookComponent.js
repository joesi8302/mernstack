import React, {useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import { SaveProductToDB, UploadImage } from "../../../state/Product/productAction";
import { useDropzone } from 'react-dropzone';

let ProductHook = (props) =>{
    let Product = useSelector((store)=> store.productReducer.product)

    let pName = useRef(null)
    let pPrice = useRef(null)
    let pDesc = useRef(null)
    let pRating = useRef(null)
    let pCategory = useRef(null)
    let pImage = useRef(null)

    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    let dispatchToDB = useDispatch();

    let categories = ["Electronics", "Clothing & Accessories", "Home & Living", "Health & Beauty", "Food & Beverages", "Toys & Games"];
    console.log(categories)


    useEffect(() => {
        console.log("Re rendering")

        pName.current.value = Product.prodName
        pPrice.current.value = Product.price
        pDesc.current.value = Product.desc
        pRating.current.value = Product.rating
        pCategory.current.value = Product.category
        // pImage.current.value = Product.image

        return () => {
            
        }
    }, [])

    let readFormData = (evt) =>{
        
        let newProduct = {
            prodName : pName.current.value,
            price : pPrice.current.value ,
            desc : pDesc.current.value, 
            rating : pRating.current.value ,
            qty: 1,
            reviews: []
        }

        alert("New Product " + JSON.stringify(newProduct))

        dispatchToDB(SaveProductToDB(newProduct))

        onDrop(pImage)

        evt.preventDefault()
    }

    let handleSelection = (evt) => {
        pCategory.current.value = evt.target.value;
        evt.preventDefault;
    }

    let onDrop = async(files) => {
        const file = files[0];
        const formData = new FormData();
        formData.append('image',file);
        console.log("FileUploading: " + file)
        dispatchToDB(UploadImage(formData))
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
                
                <div>
                    <label>Select a category:</label>
                        <select id="productDropdown" defaultValue="default" ref={pCategory} onChange={handleSelection}>
                            <option value="default">Select an option</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                
                </div>

                <button type="submit">Add Product</button>
                
                <br/>
                
            </form>
                
        </>
    )
}

export default ProductHook;

