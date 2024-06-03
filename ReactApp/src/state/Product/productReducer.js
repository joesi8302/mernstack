import * as actionType from "../actionTypes";

let initialState = {
    product : {
        prodName : "Default name",
        price: 123,
        desc: "Default Description",
        rating: 5
    }
}


let productReducer = (state = initialState, action) => {
    console.log("Product Actions", action)

    switch(action.type){
        case actionType.ADD_PRODUCT_TO_STORE:
            return{...state, product : action.payload}
        default:
            return state
    }
}

export default productReducer;