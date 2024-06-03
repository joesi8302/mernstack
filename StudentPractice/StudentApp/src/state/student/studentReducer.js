import * as actionTypes from "../actionTypes";

let initialState = {
    student : {
        studentId : 123,
        studentName: "Default Name",
        studentYear: "Default Freshman",
        
    }
}




let studentReducer = (state=initialState, action) => {
    console.log("Student Actions ", action)

    switch(action.type){
        case actionTypes.ADD_STUDENT_TO_STORE:
            return{...state, student: action.payload}
        
        default:
            return state;
    }
}
export default studentReducer;