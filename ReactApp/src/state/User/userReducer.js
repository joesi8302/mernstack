import * as actionTypes from "../actionTypes";


let initilState = {
    user : {
        userName: "Dummy", 
        password: "1234",
        street: "Somewhere on Earth", 
        mobile: 1231231234
    }
}


// action => type and payload

let userReducer = (state=initilState, action) =>{

    console.log("User Actions ", action)

    switch(action.type){
        case actionTypes.ADD_USER_TO_STORE:
            // ...state == is extracting all the states present in store
            // action.payload: is the new user data that we need to add to the store
            // User: action.payload - new payload is assigned to used

            return{...state, user: action.payload}  // new state disptached to store upon update 
        
        default:

            return state // if no action type match, return default state
            

    }

}
export default userReducer;