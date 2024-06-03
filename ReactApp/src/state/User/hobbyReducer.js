import * as actionType from "../actionTypes";


let initialState = {
    hobby: {
        hobbyName : "Default Hobby"
    }
}

let hobbyReducer = (state = initialState, action) => {
    console.log("Hobby Actions", action)

    switch(action.type){
        case actionType.ADD_HOBBY_TO_STORE:
            return{...state, hobby: action.payload}

        default:
            return state
    }
}

export default hobbyReducer;