import { useDispatch } from "react-redux";
import * as actionType from "../actionTypes";
import { SaveProductToDB } from "./productAction";



let initialState = {
    product : {
        _id: "",
        prodName : "Default name",
        price: 123,
        desc: "Default Description",
        rating: 5,
        qty: 1,
        reviews: []
    }
}


let productReducer = (state = initialState, action) => {

    
    console.log("Product Actions", action)

    switch(action.type){
        case actionType.ADD_PRODUCT_TO_STORE:
            return{...state, product : action.payload};
        case actionType.ADD_REVIEW_TO_PRODUCT:
            console.log("Adding this SPECFIC REVIEW: " + JSON.stringify(action.payload))
            
            let updatedState = {
                ...state,
                product: {
                    ...state.product,
                    reviews: [...state.product.reviews, action.payload]
                }
            };
            console.log("Updated Product State: " +JSON.stringify(updatedState))
            
            return updatedState;
        default:
            return state
    }
}

export default productReducer;