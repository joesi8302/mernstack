import * as actionType from "../actionTypes"

const initialState = [];


// product = {
//         prodName : "Default 2",
//         price: 123,
//         desc: "Default 2",
//         rating: 5
//     }

 // initialState.cart.push(product)
 // initialState.cart.push(product)

 let cartReducer = (state = initialState, action) => {
    // console.log("Cart Actions " + JSON.stringify(action))

    switch(action.type){
        case actionType.ADD_ITEM:
            return [...state, action.payload]

        case actionType.REMOVE_ITEM:
            return state.filter(product => product._id != action.payload.id)

        case actionType.UPDATE_ITEM:
            return state.map((product) => {
                if(product._id == action.payload.id){
                    return {...product, qty:action.payload.qty}
                }
                return product
            })

        case actionType.EMPTY_CART:
            
            return [];
        default:
            return state
    }
 }

 export default cartReducer;

