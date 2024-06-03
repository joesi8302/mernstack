import * as actionType from "../actionTypes";

import axios from "axios";

export const AddProductToStore = (user) => {
    return {
        type : actionType.ADD_PRODUCT_TO_STORE,
        payload : product
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

