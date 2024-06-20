import { act } from "react";
import * as actionType from "../actionTypes";

import axios from "axios";
import { json } from "react-router-dom";



export const addOrderID = (orderId) => {
    
    return {
        type : actionType.ADD_ORDER_ID,
        payload: orderId
    }
}

export const addToHistory = (order) => {
    
    return {
        type : actionType.ADD_TO_HISTORY,
        payload: order
    }
}

export const updateStatus = (orderId, status) => {

    return{
        type: actionType.UPDATE_STATUS,
        payload : {orderId, status}
    }

}


export const AddOrdersToDB = (orders) => {
    return (dispatch) => {
        console.log("Adding ORders to database:" + JSON.stringify(orders))
        axios.post("http://localhost:9000/orders/api/neworder",
            orders
        ).then((collection) => {
            let savedOrder = collection.data
            

            console.log("Saved Order: " + JSON.stringify(savedOrder))
        }).catch((err) => {
            console.log("Error while adding new order", err)
        })
    }
}


export const GetUserOrders = (userId) => {
    return (dispatch) => {
        
        axios.post("http://localhost:9000/orders/api/userorders",
            {userId: userId}
        ).then((collection) => {
            let userOrders = collection.data;
            console.log("Getting user Orders: " + JSON.stringify(userOrders))
            for(const order of userOrders.orders){
                let action = addToHistory(order)
                dispatch(action)
            }


        }).catch((err) => {
            console.log("Error getting user order history")
        })

    }
}