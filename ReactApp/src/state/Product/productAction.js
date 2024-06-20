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

export const AddReviewToProduct = (review) => {
    return {
        type: actionType.ADD_REVIEW_TO_PRODUCT,
        payload : review
    }
}

export const SaveProductToDB = (newProduct) => {
    console.log("Saving/Updating new product: " + JSON.stringify(newProduct))
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


export const getProduct = (prodName) => {
    return (dispatch) => {
        axios.post("http://localhost:9000/product/api/product",
            {prodName: prodName}
        ).then((collection) => {
            let retrievedProduct = collection.data;
            dispatch(AddProductToStore(retrievedProduct))
        }).catch((err) => {
            console.log("Error while getting product", err)
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

