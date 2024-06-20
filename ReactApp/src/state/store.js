// store - is a redux object which helps us handle state change
// reducer: a funtion which works with switch case (for each action type) and updates the state
    // for every change returns new state

    // - Each component will have its respective reducer

// Action: is the object a reducer accepts to create a new state
// Action is an object: Object => action type (increment), payload (+5)


import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./User/userReducer";
import hobbyReducer from "./User/hobbyReducer";
import productReducer from "./Product/productReducer";
import cartReducer from "./Cart/cartReducer";
import couponReducer from "./Coupon/couponReducer";
import orderReducer from "./Orders/orderReducer";
import notificationReducer from "./Notification/notificationReducer";


let rootReducer = combineReducers({
    userReducer, // userReducer: userReducer
    hobbyReducer,
    productReducer,
    cartReducer,
    couponReducer,
    orderReducer,
    notificationReducer

})

// create or configure and export teh store from this code
export default configureStore(
    {reducer: rootReducer},
    {}, //initial state if we want to set from store instead of reducer
)