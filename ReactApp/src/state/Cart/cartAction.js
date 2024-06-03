import * as actionType from "../actionTypes";

import axios from "axios";


export const AddCartToStore = (cart) => {
    return {
        type : actionType.ADD_CART_TO_STORE,
        payload : cart
    }
}

export const AddToCart = (product) => {
    return {
        type : actionType.ADD_PRODUCT_TO_CART,
        payload : product
    }
}

export const SaveCartToDB = (newCart) => {
    return (dispatch) => {
        axios.post("http://localhost:9000/cart/api/newcart",
            newCart
        ).then((collection) => {
            let savedCart = collection.data
            console.log(savedCart)
            dispatch(AddCartToStore(savedCart))
        }).catch((err) => {
            console.log("Error while adding new cart", err)
        })
    }
}