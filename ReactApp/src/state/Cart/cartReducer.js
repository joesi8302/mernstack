import * as actionType from "../actionTypes"

let initialState = {
    cart : [
        
    ]

}


// product = {
//         prodName : "Default 2",
//         price: 123,
//         desc: "Default 2",
//         rating: 5
//     }

 // initialState.cart.push(product)
 // initialState.cart.push(product)

 let cartReducer = (state = initialState, action) => {
    console.log("Cart Actions " + action)

    switch(action.type){
        case actionType.ADD_CART_TO_STORE:
            return {...state, cart : action.payload}
        case actionType.ADD_PRODUCT_TO_CART:
            return{...state, cart : [...state, action.payload]}
        default:
            return state
    }
 }

 export default cartReducer;

