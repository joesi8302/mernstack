import { act } from "react";
import * as actionType from "../actionTypes";

import axios from "axios";


export const AddCartToStore = (cart) => {
    return {
        type : actionType.ADD_CART_TO_STORE,
        payload : cart
    }
}

export const emptyCart = () => ({
    type: actionType.EMPTY_CART
})

export const updateItem = (id, qty) => ({
    type: actionType.UPDATE_ITEM,
    payload: {
        id,
        qty : parseInt(qty)
    }
})

export const removeItem = (id) => ({
    type: actionType.REMOVE_ITEM,
    payload: { id }
});

export const AddToCart = (product) => {
    return {
        type : actionType.ADD_ITEM,
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
        }).catch((err) => {
            console.log("Error while adding new cart", err)
        })
    }
}

export const getUserCart = (userId) => {
    return (dispatch) => {
        axios.post("http://localhost:9000/cart/api/usercart",
            {userId : userId}
        ).then((collection) => {
            let userCart = collection.data;

            
            console.log(userCart)
            for(const item of userCart.cart){
                let action = AddToCart(item)
                dispatch(action)
            }
        }).catch((err) => {
            console.log("Error grabbing user cart", err)
        })
        
    }
}