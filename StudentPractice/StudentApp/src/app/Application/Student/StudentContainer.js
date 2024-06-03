import {connect} from "react-redux";

import { AddStudentToStore, SaveStudentToDB } from "../../../state/student/studentAction";
import StudentComponent from "./StudentComponent.jsx";


let mapStateToProps = (store) => {
    return {
        student : store.studentReducer.student
    }
}

let mapDispatchProps = (dispatch) => {
    return {
        addStudent : (student) => {
            dispatch(SaveStudentToDB(student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(StudentComponent)