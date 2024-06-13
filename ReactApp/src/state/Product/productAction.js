import * as actionType from "../actionTypes";

import axios from "axios";

export const AddProductToStore = (product) => {
    return {
        type : actionType.ADD_PRODUCT_TO_STORE,
        payload : product
    }
}

export const AddImageToStore = (image) => {
    return {
        type : actionType.ADD_IMAGE_TO_STORE,
        payload : image
    }
}

export const SaveProductToDB = (newProduct) => {
    return (dispatch) => {
        axios.post("http://localhost:9000/product/api/newproduct",
            newProduct
        ).then((collection) => {
            let savedProduct = collection.data
            console.log(savedProduct)
            dispatch(AddProductToStore(savedProduct))
        }).catch((err) => {
            console.log("Error while adding new product", err)
        })
    }
}

export const UploadImage = (newImage) => {
    return (dispatch) => {
        axios.post("http://localhost:9000/product/api/upload",
            newImage
        ).then((collection) => {
            let savedImage = collection.data
            console.log("Saved Image" + savedImage)
            dispatch(AddImageToStore(savedImage))
        }).catch((err) => {
            console.log("Error while adding new product", err)
        })
    }
}

