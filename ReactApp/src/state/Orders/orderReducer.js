import * as actionType from "../actionTypes"

let initialState = {
    userId: "",
    orderId: "",
    orders : []
}


let orderReducer = (state = initialState, action) => {


    switch(action.type){
        case actionType.ADD_ORDER_ID:
           
            return {...state, orderId : action.payload}

        case actionType.ADD_TO_HISTORY:
            console.log("adding to orders:" + JSON.stringify(action.payload))
            return {...state, orders : [...state.orders, action.payload]}

        case actionType.UPDATE_STATUS:
            return {
                ...state,
                orders: state.orders.map((order) => {
                    if (order.orderId === action.payload.orderId) {
                        console.log("Order Status changed from " + order.status + " to " + action.payload.status);
                        return {
                            ...order,
                            status: action.payload.status
                        };
                    }
                    return order;
                })
            };
        default:
            return state
    }


}

export default orderReducer;