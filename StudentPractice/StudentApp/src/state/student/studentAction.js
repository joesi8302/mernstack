import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddStudentToStore = (student) => {
    return {
        type: actionTypes.ADD_STUDENT_TO_STORE,
        payload: student
    }
}

export const SaveStudentToDB = (newStudent) => {
    return(dispatch) => {
        axios.post("http://localhost:9000/student/api/addStudent",
            newStudent
        ).then((collection)=>{
            let savedStudent = collection.data
            console.log(savedStudent)
            dispatch(AddStudentToStore(savedStudent))
        }).catch((err) => {
            console.log("Error while adding student", err)
        })
    }
}
