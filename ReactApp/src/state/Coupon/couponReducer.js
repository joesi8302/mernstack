import * as actionType from "../actionTypes"

let initialState = {
    value: "N/A"
}

let couponReducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.ADD_COUPON:
            console.log("Dispatching Coupon: " + action.payload)
            return {...state, value: action.payload}
        default:
            return state
    }

}

export default couponReducer;